import http from 'http';
import { createOperatorHandler } from './rpc';

const handler = createOperatorHandler({
  async (size) {
    return ({
      color: 'red',
      name: 'fancy hat',
      size: size.inches
    });
  }
});

http.createServer(handler).listen(8000);