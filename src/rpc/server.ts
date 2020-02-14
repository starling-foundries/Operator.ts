import * as pb from './checkoperator.pb';
import * as http from 'http';
import { TwirpContentType, handleRequest } from 'ts-twirp';

type MaybePromise<T> = Promise<T> | T;

export const operatorPathPrefix = '/twirp/starlingfoundries.operator.Operator/';

export interface RPCHandlers {
  send(request: pb.starlingfoundries.operator.Transaction): MaybePromise<pb.starlingfoundries.operator.ISendResponse>;
  operatorTarget(request: pb.starlingfoundries.operator.Empty): MaybePromise<pb.starlingfoundries.operator.IOperatorTargetResp>;
  lastTransaction(request: pb.starlingfoundries.operator.Address): MaybePromise<pb.starlingfoundries.operator.ISendResponse>;
}

export function createOperatorHandler(rpcHandlers: RPCHandlers) {
  return function operatorHandler(req: http.IncomingMessage, res: http.ServerResponse) {
    handleRequest(req, res, route, rpcHandlers);
  };
}

function route(url: string | undefined, contentType: TwirpContentType) {
  switch (url) {
    case '/twirp/starlingfoundries.operator.Operator/Send':
      return contentType === TwirpContentType.Protobuf ? handleProtobufSend : handleJSONSend;
    case '/twirp/starlingfoundries.operator.Operator/OperatorTarget':
      return contentType === TwirpContentType.Protobuf ? handleProtobufOperatorTarget : handleJSONOperatorTarget;
    case '/twirp/starlingfoundries.operator.Operator/LastTransaction':
      return contentType === TwirpContentType.Protobuf ? handleProtobufLastTransaction : handleJSONLastTransaction;
    default:
      return;
  }
}

async function handleProtobufSend(data: Buffer, handlers: RPCHandlers): Promise<Uint8Array> {
  const request = pb.starlingfoundries.operator.Transaction.decode(data);
  const response = await handlers.send(request);
  return pb.starlingfoundries.operator.SendResponse.encode(response).finish();
}

async function handleJSONSend(data: Buffer, handlers: RPCHandlers): Promise<string> {
  const json = JSON.parse(data.toString('utf8'));
  const request = pb.starlingfoundries.operator.Transaction.fromObject(json);
  const response = await handlers.send(request);
  return JSON.stringify(pb.starlingfoundries.operator.SendResponse.create(response));
}

async function handleProtobufOperatorTarget(data: Buffer, handlers: RPCHandlers): Promise<Uint8Array> {
  const request = pb.starlingfoundries.operator.Empty.decode(data);
  const response = await handlers.operatorTarget(request);
  return pb.starlingfoundries.operator.OperatorTargetResp.encode(response).finish();
}

async function handleJSONOperatorTarget(data: Buffer, handlers: RPCHandlers): Promise<string> {
  const json = JSON.parse(data.toString('utf8'));
  const request = pb.starlingfoundries.operator.Empty.fromObject(json);
  const response = await handlers.operatorTarget(request);
  return JSON.stringify(pb.starlingfoundries.operator.OperatorTargetResp.create(response));
}

async function handleProtobufLastTransaction(data: Buffer, handlers: RPCHandlers): Promise<Uint8Array> {
  const request = pb.starlingfoundries.operator.Address.decode(data);
  const response = await handlers.lastTransaction(request);
  return pb.starlingfoundries.operator.SendResponse.encode(response).finish();
}

async function handleJSONLastTransaction(data: Buffer, handlers: RPCHandlers): Promise<string> {
  const json = JSON.parse(data.toString('utf8'));
  const request = pb.starlingfoundries.operator.Address.fromObject(json);
  const response = await handlers.lastTransaction(request);
  return JSON.stringify(pb.starlingfoundries.operator.SendResponse.create(response));
}
