/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.starlingfoundries = (function() {

    /**
     * Namespace starlingfoundries.
     * @exports starlingfoundries
     * @namespace
     */
    var starlingfoundries = {};

    starlingfoundries.operator = (function() {

        /**
         * Namespace operator.
         * @memberof starlingfoundries
         * @namespace
         */
        var operator = {};

        operator.Operator = (function() {

            /**
             * Constructs a new Operator service.
             * @memberof starlingfoundries.operator
             * @classdesc Represents an Operator
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Operator(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (Operator.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Operator;

            /**
             * Creates new Operator service using the specified rpc implementation.
             * @function create
             * @memberof starlingfoundries.operator.Operator
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {Operator} RPC service. Useful where requests and/or responses are streamed.
             */
            Operator.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#send}.
             * @memberof starlingfoundries.operator.Operator
             * @typedef SendCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {starlingfoundries.operator.SendResponse} [response] SendResponse
             */

            /**
             * Calls Send.
             * @function send
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.ITransaction} request Transaction message or plain object
             * @param {starlingfoundries.operator.Operator.SendCallback} callback Node-style callback called with the error, if any, and SendResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Operator.prototype.send = function send(request, callback) {
                return this.rpcCall(send, $root.starlingfoundries.operator.Transaction, $root.starlingfoundries.operator.SendResponse, request, callback);
            }, "name", { value: "Send" });

            /**
             * Calls Send.
             * @function send
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.ITransaction} request Transaction message or plain object
             * @returns {Promise<starlingfoundries.operator.SendResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#operatorTarget}.
             * @memberof starlingfoundries.operator.Operator
             * @typedef OperatorTargetCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {starlingfoundries.operator.OperatorTargetResp} [response] OperatorTargetResp
             */

            /**
             * Calls OperatorTarget.
             * @function operatorTarget
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.IEmpty} request Empty message or plain object
             * @param {starlingfoundries.operator.Operator.OperatorTargetCallback} callback Node-style callback called with the error, if any, and OperatorTargetResp
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Operator.prototype.operatorTarget = function operatorTarget(request, callback) {
                return this.rpcCall(operatorTarget, $root.starlingfoundries.operator.Empty, $root.starlingfoundries.operator.OperatorTargetResp, request, callback);
            }, "name", { value: "OperatorTarget" });

            /**
             * Calls OperatorTarget.
             * @function operatorTarget
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.IEmpty} request Empty message or plain object
             * @returns {Promise<starlingfoundries.operator.OperatorTargetResp>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#lastTransaction}.
             * @memberof starlingfoundries.operator.Operator
             * @typedef LastTransactionCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {starlingfoundries.operator.SendResponse} [response] SendResponse
             */

            /**
             * Calls LastTransaction.
             * @function lastTransaction
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.IAddress} request Address message or plain object
             * @param {starlingfoundries.operator.Operator.LastTransactionCallback} callback Node-style callback called with the error, if any, and SendResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Operator.prototype.lastTransaction = function lastTransaction(request, callback) {
                return this.rpcCall(lastTransaction, $root.starlingfoundries.operator.Address, $root.starlingfoundries.operator.SendResponse, request, callback);
            }, "name", { value: "LastTransaction" });

            /**
             * Calls LastTransaction.
             * @function lastTransaction
             * @memberof starlingfoundries.operator.Operator
             * @instance
             * @param {starlingfoundries.operator.IAddress} request Address message or plain object
             * @returns {Promise<starlingfoundries.operator.SendResponse>} Promise
             * @variation 2
             */

            return Operator;
        })();

        operator.ByteArray = (function() {

            /**
             * Properties of a ByteArray.
             * @memberof starlingfoundries.operator
             * @interface IByteArray
             * @property {Uint8Array|null} [data] ByteArray data
             */

            /**
             * Constructs a new ByteArray.
             * @memberof starlingfoundries.operator
             * @classdesc Represents a ByteArray.
             * @implements IByteArray
             * @constructor
             * @param {starlingfoundries.operator.IByteArray=} [properties] Properties to set
             */
            function ByteArray(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ByteArray data.
             * @member {Uint8Array} data
             * @memberof starlingfoundries.operator.ByteArray
             * @instance
             */
            ByteArray.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new ByteArray instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {starlingfoundries.operator.IByteArray=} [properties] Properties to set
             * @returns {starlingfoundries.operator.ByteArray} ByteArray instance
             */
            ByteArray.create = function create(properties) {
                return new ByteArray(properties);
            };

            /**
             * Encodes the specified ByteArray message. Does not implicitly {@link starlingfoundries.operator.ByteArray.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {starlingfoundries.operator.IByteArray} message ByteArray message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ByteArray.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified ByteArray message, length delimited. Does not implicitly {@link starlingfoundries.operator.ByteArray.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {starlingfoundries.operator.IByteArray} message ByteArray message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ByteArray.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ByteArray message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.ByteArray} ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ByteArray.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.ByteArray();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ByteArray message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.ByteArray} ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ByteArray.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ByteArray message.
             * @function verify
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ByteArray.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a ByteArray message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.ByteArray} ByteArray
             */
            ByteArray.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.ByteArray)
                    return object;
                var message = new $root.starlingfoundries.operator.ByteArray();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a ByteArray message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.ByteArray
             * @static
             * @param {starlingfoundries.operator.ByteArray} message ByteArray
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ByteArray.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this ByteArray to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.ByteArray
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ByteArray.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ByteArray;
        })();

        operator.SendResponse = (function() {

            /**
             * Properties of a SendResponse.
             * @memberof starlingfoundries.operator
             * @interface ISendResponse
             * @property {starlingfoundries.operator.IByteArray|null} [address] SendResponse address
             * @property {Uint8Array|null} [tranid] SendResponse tranid
             * @property {starlingfoundries.operator.SendResponse.Status|null} [status] SendResponse status
             * @property {number|Long|null} [nonce] SendResponse nonce
             */

            /**
             * Constructs a new SendResponse.
             * @memberof starlingfoundries.operator
             * @classdesc Represents a SendResponse.
             * @implements ISendResponse
             * @constructor
             * @param {starlingfoundries.operator.ISendResponse=} [properties] Properties to set
             */
            function SendResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SendResponse address.
             * @member {starlingfoundries.operator.IByteArray|null|undefined} address
             * @memberof starlingfoundries.operator.SendResponse
             * @instance
             */
            SendResponse.prototype.address = null;

            /**
             * SendResponse tranid.
             * @member {Uint8Array} tranid
             * @memberof starlingfoundries.operator.SendResponse
             * @instance
             */
            SendResponse.prototype.tranid = $util.newBuffer([]);

            /**
             * SendResponse status.
             * @member {starlingfoundries.operator.SendResponse.Status} status
             * @memberof starlingfoundries.operator.SendResponse
             * @instance
             */
            SendResponse.prototype.status = 0;

            /**
             * SendResponse nonce.
             * @member {number|Long} nonce
             * @memberof starlingfoundries.operator.SendResponse
             * @instance
             */
            SendResponse.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SendResponse instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {starlingfoundries.operator.ISendResponse=} [properties] Properties to set
             * @returns {starlingfoundries.operator.SendResponse} SendResponse instance
             */
            SendResponse.create = function create(properties) {
                return new SendResponse(properties);
            };

            /**
             * Encodes the specified SendResponse message. Does not implicitly {@link starlingfoundries.operator.SendResponse.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {starlingfoundries.operator.ISendResponse} message SendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && message.hasOwnProperty("address"))
                    $root.starlingfoundries.operator.ByteArray.encode(message.address, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.tranid != null && message.hasOwnProperty("tranid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.tranid);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.nonce);
                return writer;
            };

            /**
             * Encodes the specified SendResponse message, length delimited. Does not implicitly {@link starlingfoundries.operator.SendResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {starlingfoundries.operator.ISendResponse} message SendResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SendResponse message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.SendResponse} SendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.SendResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.address = $root.starlingfoundries.operator.ByteArray.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.tranid = reader.bytes();
                        break;
                    case 3:
                        message.status = reader.int32();
                        break;
                    case 4:
                        message.nonce = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SendResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.SendResponse} SendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SendResponse message.
             * @function verify
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address")) {
                    var error = $root.starlingfoundries.operator.ByteArray.verify(message.address);
                    if (error)
                        return "address." + error;
                }
                if (message.tranid != null && message.hasOwnProperty("tranid"))
                    if (!(message.tranid && typeof message.tranid.length === "number" || $util.isString(message.tranid)))
                        return "tranid: buffer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                        return "nonce: integer|Long expected";
                return null;
            };

            /**
             * Creates a SendResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.SendResponse} SendResponse
             */
            SendResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.SendResponse)
                    return object;
                var message = new $root.starlingfoundries.operator.SendResponse();
                if (object.address != null) {
                    if (typeof object.address !== "object")
                        throw TypeError(".starlingfoundries.operator.SendResponse.address: object expected");
                    message.address = $root.starlingfoundries.operator.ByteArray.fromObject(object.address);
                }
                if (object.tranid != null)
                    if (typeof object.tranid === "string")
                        $util.base64.decode(object.tranid, message.tranid = $util.newBuffer($util.base64.length(object.tranid)), 0);
                    else if (object.tranid.length)
                        message.tranid = object.tranid;
                switch (object.status) {
                case "UNDEFINED":
                case 0:
                    message.status = 0;
                    break;
                case "RECIEVED":
                case 1:
                    message.status = 1;
                    break;
                case "PROCESSED":
                case 2:
                    message.status = 2;
                    break;
                case "REJECTED":
                case 3:
                    message.status = 3;
                    break;
                }
                if (object.nonce != null)
                    if ($util.Long)
                        (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = true;
                    else if (typeof object.nonce === "string")
                        message.nonce = parseInt(object.nonce, 10);
                    else if (typeof object.nonce === "number")
                        message.nonce = object.nonce;
                    else if (typeof object.nonce === "object")
                        message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SendResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.SendResponse
             * @static
             * @param {starlingfoundries.operator.SendResponse} message SendResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.address = null;
                    if (options.bytes === String)
                        object.tranid = "";
                    else {
                        object.tranid = [];
                        if (options.bytes !== Array)
                            object.tranid = $util.newBuffer(object.tranid);
                    }
                    object.status = options.enums === String ? "UNDEFINED" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.nonce = options.longs === String ? "0" : 0;
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = $root.starlingfoundries.operator.ByteArray.toObject(message.address, options);
                if (message.tranid != null && message.hasOwnProperty("tranid"))
                    object.tranid = options.bytes === String ? $util.base64.encode(message.tranid, 0, message.tranid.length) : options.bytes === Array ? Array.prototype.slice.call(message.tranid) : message.tranid;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.starlingfoundries.operator.SendResponse.Status[message.status] : message.status;
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    if (typeof message.nonce === "number")
                        object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                    else
                        object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
                return object;
            };

            /**
             * Converts this SendResponse to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.SendResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Status enum.
             * @name starlingfoundries.operator.SendResponse.Status
             * @enum {string}
             * @property {number} UNDEFINED=0 UNDEFINED value
             * @property {number} RECIEVED=1 RECIEVED value
             * @property {number} PROCESSED=2 PROCESSED value
             * @property {number} REJECTED=3 REJECTED value
             */
            SendResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNDEFINED"] = 0;
                values[valuesById[1] = "RECIEVED"] = 1;
                values[valuesById[2] = "PROCESSED"] = 2;
                values[valuesById[3] = "REJECTED"] = 3;
                return values;
            })();

            return SendResponse;
        })();

        operator.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof starlingfoundries.operator
             * @interface IEmpty
             * @property {starlingfoundries.operator.IByteArray|null} [pubkey] Empty pubkey
             */

            /**
             * Constructs a new Empty.
             * @memberof starlingfoundries.operator
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {starlingfoundries.operator.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Empty pubkey.
             * @member {starlingfoundries.operator.IByteArray|null|undefined} pubkey
             * @memberof starlingfoundries.operator.Empty
             * @instance
             */
            Empty.prototype.pubkey = null;

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {starlingfoundries.operator.IEmpty=} [properties] Properties to set
             * @returns {starlingfoundries.operator.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link starlingfoundries.operator.Empty.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {starlingfoundries.operator.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                    $root.starlingfoundries.operator.ByteArray.encode(message.pubkey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link starlingfoundries.operator.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {starlingfoundries.operator.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pubkey = $root.starlingfoundries.operator.ByteArray.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pubkey != null && message.hasOwnProperty("pubkey")) {
                    var error = $root.starlingfoundries.operator.ByteArray.verify(message.pubkey);
                    if (error)
                        return "pubkey." + error;
                }
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.Empty)
                    return object;
                var message = new $root.starlingfoundries.operator.Empty();
                if (object.pubkey != null) {
                    if (typeof object.pubkey !== "object")
                        throw TypeError(".starlingfoundries.operator.Empty.pubkey: object expected");
                    message.pubkey = $root.starlingfoundries.operator.ByteArray.fromObject(object.pubkey);
                }
                return message;
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.Empty
             * @static
             * @param {starlingfoundries.operator.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.pubkey = null;
                if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                    object.pubkey = $root.starlingfoundries.operator.ByteArray.toObject(message.pubkey, options);
                return object;
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        operator.Transaction = (function() {

            /**
             * Properties of a Transaction.
             * @memberof starlingfoundries.operator
             * @interface ITransaction
             * @property {number|null} [version] Transaction version
             * @property {string|null} [fromAddr] Transaction fromAddr
             * @property {string|null} [toAddr] Transaction toAddr
             * @property {number|null} [amount] Transaction amount
             */

            /**
             * Constructs a new Transaction.
             * @memberof starlingfoundries.operator
             * @classdesc Represents a Transaction.
             * @implements ITransaction
             * @constructor
             * @param {starlingfoundries.operator.ITransaction=} [properties] Properties to set
             */
            function Transaction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Transaction version.
             * @member {number} version
             * @memberof starlingfoundries.operator.Transaction
             * @instance
             */
            Transaction.prototype.version = 0;

            /**
             * Transaction fromAddr.
             * @member {string} fromAddr
             * @memberof starlingfoundries.operator.Transaction
             * @instance
             */
            Transaction.prototype.fromAddr = "";

            /**
             * Transaction toAddr.
             * @member {string} toAddr
             * @memberof starlingfoundries.operator.Transaction
             * @instance
             */
            Transaction.prototype.toAddr = "";

            /**
             * Transaction amount.
             * @member {number} amount
             * @memberof starlingfoundries.operator.Transaction
             * @instance
             */
            Transaction.prototype.amount = 0;

            /**
             * Creates a new Transaction instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {starlingfoundries.operator.ITransaction=} [properties] Properties to set
             * @returns {starlingfoundries.operator.Transaction} Transaction instance
             */
            Transaction.create = function create(properties) {
                return new Transaction(properties);
            };

            /**
             * Encodes the specified Transaction message. Does not implicitly {@link starlingfoundries.operator.Transaction.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {starlingfoundries.operator.ITransaction} message Transaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transaction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
                if (message.fromAddr != null && message.hasOwnProperty("fromAddr"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromAddr);
                if (message.toAddr != null && message.hasOwnProperty("toAddr"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.toAddr);
                if (message.amount != null && message.hasOwnProperty("amount"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.amount);
                return writer;
            };

            /**
             * Encodes the specified Transaction message, length delimited. Does not implicitly {@link starlingfoundries.operator.Transaction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {starlingfoundries.operator.ITransaction} message Transaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transaction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Transaction message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.Transaction} Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transaction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.Transaction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.uint32();
                        break;
                    case 2:
                        message.fromAddr = reader.string();
                        break;
                    case 3:
                        message.toAddr = reader.string();
                        break;
                    case 4:
                        message.amount = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Transaction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.Transaction} Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transaction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Transaction message.
             * @function verify
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Transaction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                if (message.fromAddr != null && message.hasOwnProperty("fromAddr"))
                    if (!$util.isString(message.fromAddr))
                        return "fromAddr: string expected";
                if (message.toAddr != null && message.hasOwnProperty("toAddr"))
                    if (!$util.isString(message.toAddr))
                        return "toAddr: string expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (typeof message.amount !== "number")
                        return "amount: number expected";
                return null;
            };

            /**
             * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.Transaction} Transaction
             */
            Transaction.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.Transaction)
                    return object;
                var message = new $root.starlingfoundries.operator.Transaction();
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.fromAddr != null)
                    message.fromAddr = String(object.fromAddr);
                if (object.toAddr != null)
                    message.toAddr = String(object.toAddr);
                if (object.amount != null)
                    message.amount = Number(object.amount);
                return message;
            };

            /**
             * Creates a plain object from a Transaction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.Transaction
             * @static
             * @param {starlingfoundries.operator.Transaction} message Transaction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Transaction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.version = 0;
                    object.fromAddr = "";
                    object.toAddr = "";
                    object.amount = 0;
                }
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.fromAddr != null && message.hasOwnProperty("fromAddr"))
                    object.fromAddr = message.fromAddr;
                if (message.toAddr != null && message.hasOwnProperty("toAddr"))
                    object.toAddr = message.toAddr;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
                return object;
            };

            /**
             * Converts this Transaction to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.Transaction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Transaction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Transaction;
        })();

        operator.OperatorTargetResp = (function() {

            /**
             * Properties of an OperatorTargetResp.
             * @memberof starlingfoundries.operator
             * @interface IOperatorTargetResp
             * @property {Uint8Array|null} [contractAddr] OperatorTargetResp contractAddr
             */

            /**
             * Constructs a new OperatorTargetResp.
             * @memberof starlingfoundries.operator
             * @classdesc Represents an OperatorTargetResp.
             * @implements IOperatorTargetResp
             * @constructor
             * @param {starlingfoundries.operator.IOperatorTargetResp=} [properties] Properties to set
             */
            function OperatorTargetResp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperatorTargetResp contractAddr.
             * @member {Uint8Array} contractAddr
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @instance
             */
            OperatorTargetResp.prototype.contractAddr = $util.newBuffer([]);

            /**
             * Creates a new OperatorTargetResp instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {starlingfoundries.operator.IOperatorTargetResp=} [properties] Properties to set
             * @returns {starlingfoundries.operator.OperatorTargetResp} OperatorTargetResp instance
             */
            OperatorTargetResp.create = function create(properties) {
                return new OperatorTargetResp(properties);
            };

            /**
             * Encodes the specified OperatorTargetResp message. Does not implicitly {@link starlingfoundries.operator.OperatorTargetResp.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {starlingfoundries.operator.IOperatorTargetResp} message OperatorTargetResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperatorTargetResp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contractAddr != null && message.hasOwnProperty("contractAddr"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.contractAddr);
                return writer;
            };

            /**
             * Encodes the specified OperatorTargetResp message, length delimited. Does not implicitly {@link starlingfoundries.operator.OperatorTargetResp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {starlingfoundries.operator.IOperatorTargetResp} message OperatorTargetResp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperatorTargetResp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperatorTargetResp message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.OperatorTargetResp} OperatorTargetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperatorTargetResp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.OperatorTargetResp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contractAddr = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperatorTargetResp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.OperatorTargetResp} OperatorTargetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperatorTargetResp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperatorTargetResp message.
             * @function verify
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperatorTargetResp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contractAddr != null && message.hasOwnProperty("contractAddr"))
                    if (!(message.contractAddr && typeof message.contractAddr.length === "number" || $util.isString(message.contractAddr)))
                        return "contractAddr: buffer expected";
                return null;
            };

            /**
             * Creates an OperatorTargetResp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.OperatorTargetResp} OperatorTargetResp
             */
            OperatorTargetResp.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.OperatorTargetResp)
                    return object;
                var message = new $root.starlingfoundries.operator.OperatorTargetResp();
                if (object.contractAddr != null)
                    if (typeof object.contractAddr === "string")
                        $util.base64.decode(object.contractAddr, message.contractAddr = $util.newBuffer($util.base64.length(object.contractAddr)), 0);
                    else if (object.contractAddr.length)
                        message.contractAddr = object.contractAddr;
                return message;
            };

            /**
             * Creates a plain object from an OperatorTargetResp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @static
             * @param {starlingfoundries.operator.OperatorTargetResp} message OperatorTargetResp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperatorTargetResp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.contractAddr = "";
                    else {
                        object.contractAddr = [];
                        if (options.bytes !== Array)
                            object.contractAddr = $util.newBuffer(object.contractAddr);
                    }
                if (message.contractAddr != null && message.hasOwnProperty("contractAddr"))
                    object.contractAddr = options.bytes === String ? $util.base64.encode(message.contractAddr, 0, message.contractAddr.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractAddr) : message.contractAddr;
                return object;
            };

            /**
             * Converts this OperatorTargetResp to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.OperatorTargetResp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperatorTargetResp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OperatorTargetResp;
        })();

        operator.Address = (function() {

            /**
             * Properties of an Address.
             * @memberof starlingfoundries.operator
             * @interface IAddress
             * @property {string|null} [Address] Address Address
             */

            /**
             * Constructs a new Address.
             * @memberof starlingfoundries.operator
             * @classdesc Represents an Address.
             * @implements IAddress
             * @constructor
             * @param {starlingfoundries.operator.IAddress=} [properties] Properties to set
             */
            function Address(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Address Address.
             * @member {string} Address
             * @memberof starlingfoundries.operator.Address
             * @instance
             */
            Address.prototype.Address = "";

            /**
             * Creates a new Address instance using the specified properties.
             * @function create
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {starlingfoundries.operator.IAddress=} [properties] Properties to set
             * @returns {starlingfoundries.operator.Address} Address instance
             */
            Address.create = function create(properties) {
                return new Address(properties);
            };

            /**
             * Encodes the specified Address message. Does not implicitly {@link starlingfoundries.operator.Address.verify|verify} messages.
             * @function encode
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {starlingfoundries.operator.IAddress} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Address != null && message.hasOwnProperty("Address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Address);
                return writer;
            };

            /**
             * Encodes the specified Address message, length delimited. Does not implicitly {@link starlingfoundries.operator.Address.verify|verify} messages.
             * @function encodeDelimited
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {starlingfoundries.operator.IAddress} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Address message from the specified reader or buffer.
             * @function decode
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {starlingfoundries.operator.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.starlingfoundries.operator.Address();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Address message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {starlingfoundries.operator.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Address message.
             * @function verify
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Address.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Address != null && message.hasOwnProperty("Address"))
                    if (!$util.isString(message.Address))
                        return "Address: string expected";
                return null;
            };

            /**
             * Creates an Address message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {starlingfoundries.operator.Address} Address
             */
            Address.fromObject = function fromObject(object) {
                if (object instanceof $root.starlingfoundries.operator.Address)
                    return object;
                var message = new $root.starlingfoundries.operator.Address();
                if (object.Address != null)
                    message.Address = String(object.Address);
                return message;
            };

            /**
             * Creates a plain object from an Address message. Also converts values to other types if specified.
             * @function toObject
             * @memberof starlingfoundries.operator.Address
             * @static
             * @param {starlingfoundries.operator.Address} message Address
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Address.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Address = "";
                if (message.Address != null && message.hasOwnProperty("Address"))
                    object.Address = message.Address;
                return object;
            };

            /**
             * Converts this Address to JSON.
             * @function toJSON
             * @memberof starlingfoundries.operator.Address
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Address.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Address;
        })();

        return operator;
    })();

    return starlingfoundries;
})();

module.exports = $root;
