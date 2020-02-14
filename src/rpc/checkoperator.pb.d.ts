import * as $protobuf from "protobufjs";
/** Namespace starlingfoundries. */
export namespace starlingfoundries {

    /** Namespace operator. */
    namespace operator {

        /** Represents an Operator */
        class Operator extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operator service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operator service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operator;

            /**
             * Calls Send.
             * @param request Transaction message or plain object
             * @param callback Node-style callback called with the error, if any, and SendResponse
             */
            public send(request: starlingfoundries.operator.ITransaction, callback: starlingfoundries.operator.Operator.SendCallback): void;

            /**
             * Calls Send.
             * @param request Transaction message or plain object
             * @returns Promise
             */
            public send(request: starlingfoundries.operator.ITransaction): Promise<starlingfoundries.operator.SendResponse>;

            /**
             * Calls OperatorTarget.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and OperatorTargetResp
             */
            public operatorTarget(request: starlingfoundries.operator.IEmpty, callback: starlingfoundries.operator.Operator.OperatorTargetCallback): void;

            /**
             * Calls OperatorTarget.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public operatorTarget(request: starlingfoundries.operator.IEmpty): Promise<starlingfoundries.operator.OperatorTargetResp>;

            /**
             * Calls LastTransaction.
             * @param request Address message or plain object
             * @param callback Node-style callback called with the error, if any, and SendResponse
             */
            public lastTransaction(request: starlingfoundries.operator.IAddress, callback: starlingfoundries.operator.Operator.LastTransactionCallback): void;

            /**
             * Calls LastTransaction.
             * @param request Address message or plain object
             * @returns Promise
             */
            public lastTransaction(request: starlingfoundries.operator.IAddress): Promise<starlingfoundries.operator.SendResponse>;
        }

        namespace Operator {

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#send}.
             * @param error Error, if any
             * @param [response] SendResponse
             */
            type SendCallback = (error: (Error|null), response?: starlingfoundries.operator.SendResponse) => void;

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#operatorTarget}.
             * @param error Error, if any
             * @param [response] OperatorTargetResp
             */
            type OperatorTargetCallback = (error: (Error|null), response?: starlingfoundries.operator.OperatorTargetResp) => void;

            /**
             * Callback as used by {@link starlingfoundries.operator.Operator#lastTransaction}.
             * @param error Error, if any
             * @param [response] SendResponse
             */
            type LastTransactionCallback = (error: (Error|null), response?: starlingfoundries.operator.SendResponse) => void;
        }

        /** Properties of a ByteArray. */
        interface IByteArray {

            /** ByteArray data */
            data?: (Uint8Array|null);
        }

        /** Represents a ByteArray. */
        class ByteArray implements IByteArray {

            /**
             * Constructs a new ByteArray.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.IByteArray);

            /** ByteArray data. */
            public data: Uint8Array;

            /**
             * Creates a new ByteArray instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ByteArray instance
             */
            public static create(properties?: starlingfoundries.operator.IByteArray): starlingfoundries.operator.ByteArray;

            /**
             * Encodes the specified ByteArray message. Does not implicitly {@link starlingfoundries.operator.ByteArray.verify|verify} messages.
             * @param message ByteArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.IByteArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ByteArray message, length delimited. Does not implicitly {@link starlingfoundries.operator.ByteArray.verify|verify} messages.
             * @param message ByteArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.IByteArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ByteArray message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.ByteArray;

            /**
             * Decodes a ByteArray message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.ByteArray;

            /**
             * Verifies a ByteArray message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ByteArray message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ByteArray
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.ByteArray;

            /**
             * Creates a plain object from a ByteArray message. Also converts values to other types if specified.
             * @param message ByteArray
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.ByteArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ByteArray to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SendResponse. */
        interface ISendResponse {

            /** SendResponse address */
            address?: (starlingfoundries.operator.IByteArray|null);

            /** SendResponse tranid */
            tranid?: (Uint8Array|null);

            /** SendResponse status */
            status?: (starlingfoundries.operator.SendResponse.Status|null);

            /** SendResponse nonce */
            nonce?: (number|Long|null);
        }

        /** Represents a SendResponse. */
        class SendResponse implements ISendResponse {

            /**
             * Constructs a new SendResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.ISendResponse);

            /** SendResponse address. */
            public address?: (starlingfoundries.operator.IByteArray|null);

            /** SendResponse tranid. */
            public tranid: Uint8Array;

            /** SendResponse status. */
            public status: starlingfoundries.operator.SendResponse.Status;

            /** SendResponse nonce. */
            public nonce: (number|Long);

            /**
             * Creates a new SendResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SendResponse instance
             */
            public static create(properties?: starlingfoundries.operator.ISendResponse): starlingfoundries.operator.SendResponse;

            /**
             * Encodes the specified SendResponse message. Does not implicitly {@link starlingfoundries.operator.SendResponse.verify|verify} messages.
             * @param message SendResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.ISendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendResponse message, length delimited. Does not implicitly {@link starlingfoundries.operator.SendResponse.verify|verify} messages.
             * @param message SendResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.ISendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.SendResponse;

            /**
             * Decodes a SendResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.SendResponse;

            /**
             * Verifies a SendResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendResponse
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.SendResponse;

            /**
             * Creates a plain object from a SendResponse message. Also converts values to other types if specified.
             * @param message SendResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.SendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SendResponse {

            /** Status enum. */
            enum Status {
                UNDEFINED = 0,
                RECIEVED = 1,
                PROCESSED = 2,
                REJECTED = 3
            }
        }

        /** Properties of an Empty. */
        interface IEmpty {

            /** Empty pubkey */
            pubkey?: (starlingfoundries.operator.IByteArray|null);
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.IEmpty);

            /** Empty pubkey. */
            public pubkey?: (starlingfoundries.operator.IByteArray|null);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: starlingfoundries.operator.IEmpty): starlingfoundries.operator.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link starlingfoundries.operator.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link starlingfoundries.operator.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Transaction. */
        interface ITransaction {

            /** Transaction version */
            version?: (number|null);

            /** Transaction fromAddr */
            fromAddr?: (string|null);

            /** Transaction toAddr */
            toAddr?: (string|null);

            /** Transaction amount */
            amount?: (number|null);
        }

        /** Represents a Transaction. */
        class Transaction implements ITransaction {

            /**
             * Constructs a new Transaction.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.ITransaction);

            /** Transaction version. */
            public version: number;

            /** Transaction fromAddr. */
            public fromAddr: string;

            /** Transaction toAddr. */
            public toAddr: string;

            /** Transaction amount. */
            public amount: number;

            /**
             * Creates a new Transaction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Transaction instance
             */
            public static create(properties?: starlingfoundries.operator.ITransaction): starlingfoundries.operator.Transaction;

            /**
             * Encodes the specified Transaction message. Does not implicitly {@link starlingfoundries.operator.Transaction.verify|verify} messages.
             * @param message Transaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Transaction message, length delimited. Does not implicitly {@link starlingfoundries.operator.Transaction.verify|verify} messages.
             * @param message Transaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Transaction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.Transaction;

            /**
             * Decodes a Transaction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.Transaction;

            /**
             * Verifies a Transaction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Transaction
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.Transaction;

            /**
             * Creates a plain object from a Transaction message. Also converts values to other types if specified.
             * @param message Transaction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Transaction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperatorTargetResp. */
        interface IOperatorTargetResp {

            /** OperatorTargetResp contractAddr */
            contractAddr?: (Uint8Array|null);
        }

        /** Represents an OperatorTargetResp. */
        class OperatorTargetResp implements IOperatorTargetResp {

            /**
             * Constructs a new OperatorTargetResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.IOperatorTargetResp);

            /** OperatorTargetResp contractAddr. */
            public contractAddr: Uint8Array;

            /**
             * Creates a new OperatorTargetResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperatorTargetResp instance
             */
            public static create(properties?: starlingfoundries.operator.IOperatorTargetResp): starlingfoundries.operator.OperatorTargetResp;

            /**
             * Encodes the specified OperatorTargetResp message. Does not implicitly {@link starlingfoundries.operator.OperatorTargetResp.verify|verify} messages.
             * @param message OperatorTargetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.IOperatorTargetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperatorTargetResp message, length delimited. Does not implicitly {@link starlingfoundries.operator.OperatorTargetResp.verify|verify} messages.
             * @param message OperatorTargetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.IOperatorTargetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperatorTargetResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperatorTargetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.OperatorTargetResp;

            /**
             * Decodes an OperatorTargetResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperatorTargetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.OperatorTargetResp;

            /**
             * Verifies an OperatorTargetResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperatorTargetResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperatorTargetResp
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.OperatorTargetResp;

            /**
             * Creates a plain object from an OperatorTargetResp message. Also converts values to other types if specified.
             * @param message OperatorTargetResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.OperatorTargetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperatorTargetResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Address. */
        interface IAddress {

            /** Address Address */
            Address?: (string|null);
        }

        /** Represents an Address. */
        class Address implements IAddress {

            /**
             * Constructs a new Address.
             * @param [properties] Properties to set
             */
            constructor(properties?: starlingfoundries.operator.IAddress);

            /** Address Address. */
            public Address: string;

            /**
             * Creates a new Address instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Address instance
             */
            public static create(properties?: starlingfoundries.operator.IAddress): starlingfoundries.operator.Address;

            /**
             * Encodes the specified Address message. Does not implicitly {@link starlingfoundries.operator.Address.verify|verify} messages.
             * @param message Address message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: starlingfoundries.operator.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Address message, length delimited. Does not implicitly {@link starlingfoundries.operator.Address.verify|verify} messages.
             * @param message Address message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: starlingfoundries.operator.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Address message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): starlingfoundries.operator.Address;

            /**
             * Decodes an Address message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): starlingfoundries.operator.Address;

            /**
             * Verifies an Address message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Address message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Address
             */
            public static fromObject(object: { [k: string]: any }): starlingfoundries.operator.Address;

            /**
             * Creates a plain object from an Address message. Also converts values to other types if specified.
             * @param message Address
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: starlingfoundries.operator.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Address to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
