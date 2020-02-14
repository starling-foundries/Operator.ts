#!/usr/bin/env node
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
const protobufjs_1 = require("protobufjs");
const path = __importStar(require("path"));
const fs_1 = require("fs");
const Handlebars = __importStar(require("handlebars"));
require("protobufjs/ext/descriptor");
const cli_1 = require("protobufjs/cli");
Handlebars.registerHelper('lowercase', function (text) {
    return text.charAt(0).toLocaleLowerCase() + text.slice(1);
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const protofilePath = process.argv[2];
        if (!protofilePath) {
            throw new Error('Provide the path to a service.proto file');
        }
        const fileParts = path.parse(protofilePath);
        if (fileParts.ext !== '.proto') {
            throw new Error('Path must point to a .proto file');
        }
        const runtimeJSPath = `${fileParts.dir}/${fileParts.name}.pb.js`;
        const typeDefsPath = `${fileParts.dir}/${fileParts.name}.pb.d.ts`;
        cli_1.pbjs.main(['-t', 'static-module', '-w', 'commonjs', '-o', runtimeJSPath, protofilePath]);
        cli_1.pbts.main(['-o', typeDefsPath, runtimeJSPath]);
        const root = yield protobufjs_1.load(protofilePath);
        const descriptor = root.toDescriptor('proto3');
        const service = root.lookupService(getServiceName(descriptor));
        const namespace = service.fullName
            .split('.')
            .slice(1, -1)
            .join('.');
        const shortNamespace = namespace.split('.').slice(-1);
        const templateContext = {
            methods: service.methods,
            service: service.name,
            namespace,
            shortNamespace,
            protoFilename: fileParts.name,
        };
        yield generateServer(`${fileParts.dir}/server.ts`, templateContext);
        yield generateClient(`${fileParts.dir}/client.ts`, templateContext);
        yield generateIndex(`${fileParts.dir}/index.ts`, templateContext);
    });
}
function generateIndex(indexPath, templateContext) {
    const template = fs_1.readFileSync(path.join(__dirname, 'index.hbs'), 'utf8');
    const hbsTemplate = Handlebars.compile(template);
    const tsOutput = hbsTemplate(templateContext);
    fs_1.writeFileSync(indexPath, tsOutput);
}
function generateServer(tsServerPath, templateContext) {
    return __awaiter(this, void 0, void 0, function* () {
        const template = fs_1.readFileSync(path.join(__dirname, 'server.hbs'), 'utf8');
        const hbsTemplate = Handlebars.compile(template);
        const tsOutput = hbsTemplate(templateContext);
        fs_1.writeFileSync(tsServerPath, tsOutput);
    });
}
function generateClient(tsClientPath, templateContext) {
    return __awaiter(this, void 0, void 0, function* () {
        const template = fs_1.readFileSync(path.join(__dirname, 'client.hbs'), 'utf8');
        const hbsTemplate = Handlebars.compile(template);
        const tsOutput = hbsTemplate(templateContext);
        fs_1.writeFileSync(tsClientPath, tsOutput);
    });
}
function getServiceName(protofile) {
    return protofile.toJSON().file[0].service[0].name;
}
run();
