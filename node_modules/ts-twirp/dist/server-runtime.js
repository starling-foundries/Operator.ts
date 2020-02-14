"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors = __importStar(require("./errors"));
var TwirpContentType;
(function (TwirpContentType) {
    TwirpContentType[TwirpContentType["Protobuf"] = 0] = "Protobuf";
    TwirpContentType[TwirpContentType["JSON"] = 1] = "JSON";
    TwirpContentType[TwirpContentType["Unknown"] = 2] = "Unknown";
})(TwirpContentType = exports.TwirpContentType || (exports.TwirpContentType = {}));
function getContentType(mimeType) {
    switch (mimeType) {
        case 'application/protobuf':
            return TwirpContentType.Protobuf;
        case 'application/json':
            return TwirpContentType.JSON;
        default:
            return TwirpContentType.Unknown;
    }
}
function handleRequest(req, res, getTwirpHandler, rpcHandlers) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.method !== 'POST') {
            writeError(res, new errors.BadRouteError(`unsupported method ${req.method} (only POST is allowed)`));
            return;
        }
        const contentTypeMimeType = req.headers['content-type'];
        if (!contentTypeMimeType) {
            writeError(res, new errors.BadRouteError(`missing Content-Type header`));
            return;
        }
        const contentType = getContentType(contentTypeMimeType);
        if (contentType === TwirpContentType.Unknown) {
            writeError(res, new errors.BadRouteError(`unexpected Content-Type: ${contentTypeMimeType}`));
            return;
        }
        const handler = getTwirpHandler(req.url, contentType);
        if (!handler) {
            writeError(res, new errors.BadRouteError(`no handler for path ${req.url}`));
            return;
        }
        let requestData;
        try {
            requestData = yield getRequestData(req);
        }
        catch (e) {
            writeError(res, e);
            return;
        }
        let responseData;
        try {
            responseData = yield handler(requestData, rpcHandlers);
        }
        catch (e) {
            writeError(res, e);
            return;
        }
        res.setHeader('Content-Type', contentType);
        res.end(responseData);
    });
}
exports.handleRequest = handleRequest;
function getRequestData(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => __awaiter(this, void 0, void 0, function* () {
            const data = Buffer.concat(chunks);
            resolve(data);
        }));
        req.on('error', err => {
            reject(err);
        });
    });
}
exports.getRequestData = getRequestData;
function writeError(res, error) {
    res.setHeader('Content-Type', 'application/json');
    let twirpError;
    if ('isTwirpError' in error) {
        twirpError = error;
    }
    else {
        twirpError = new errors.InternalServerError(error.message);
    }
    res.statusCode = twirpError.statusCode;
    res.end(JSON.stringify({
        code: twirpError.name,
        msg: twirpError.message,
    }));
}
exports.writeError = writeError;
