import pb from './checkoperator.pb';
import operator = pb.starlingfoundries.operator;
import { createProtobufRPCImpl, createJSONRPCImpl, JSONRPCImpl } from 'ts-twirp';

interface CreateOperatorClientParams {
  /**
   * The host portion of the URL to use.
   */
  host: string;

  /**
   * The port used to call the service.
   */
  port: number;
}

export function createOperatorProtobufClient(
  params: CreateOperatorClientParams
): Operator {
  const rpcImpl = createProtobufRPCImpl({
    host: params.host,
    port: params.port,
    path: '/twirp/starlingfoundries.operator.Operator/',
  });

  return operator.Operator.create(rpcImpl, false, false);
}

export function createOperatorJSONClient(
  params: CreateOperatorClientParams
): Operator {
  const rpcImpl = createJSONRPCImpl({
    host: params.host,
    port: params.port,
    path: '/twirp/starlingfoundries.operator.Operator/',
  });

  return new OperatorJSONClient(rpcImpl);
}

export interface Operator {
  send(request: operator.ITransaction): Promise<operator.SendResponse>;
  operatorTarget(request: operator.IEmpty): Promise<operator.OperatorTargetResp>;
  lastTransaction(request: operator.IAddress): Promise<operator.SendResponse>;
}

export class OperatorJSONClient implements Operator {
  private rpcImpl: JSONRPCImpl;

  constructor(rpcImpl: JSONRPCImpl) {
    this.rpcImpl = rpcImpl;
  }

  public async send(request: operator.ITransaction): Promise<operator.SendResponse> {
    const requestMessage = operator.Transaction.create(request);
    const response = await this.rpcImpl(requestMessage, 'Send');
    const verificationError = operator.SendResponse.verify(response);
    if (verificationError) {
      return Promise.reject(verificationError);
    }

    return operator.SendResponse.create(response);
  }

  public async operatorTarget(request: operator.IEmpty): Promise<operator.OperatorTargetResp> {
    const requestMessage = operator.Empty.create(request);
    const response = await this.rpcImpl(requestMessage, 'OperatorTarget');
    const verificationError = operator.OperatorTargetResp.verify(response);
    if (verificationError) {
      return Promise.reject(verificationError);
    }

    return operator.OperatorTargetResp.create(response);
  }

  public async lastTransaction(request: operator.IAddress): Promise<operator.SendResponse> {
    const requestMessage = operator.Address.create(request);
    const response = await this.rpcImpl(requestMessage, 'LastTransaction');
    const verificationError = operator.SendResponse.verify(response);
    if (verificationError) {
      return Promise.reject(verificationError);
    }

    return operator.SendResponse.create(response);
  }
}
