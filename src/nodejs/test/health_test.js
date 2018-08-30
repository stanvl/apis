import { expect, assert } from 'chai';
import { client } from '../src';
import rpcMsg from  '../health/v1/health_pb';

describe('TestHealth()', function () {
  it('health status should be serving', function (done) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const sagi = new client('./test/ca.pem', './test/key.pem', './test/cert.pem')

    sagi.healthCheck().then((status) => {
      expect(status).to.equal(rpcMsg.HealthCheckResponse.ServingStatus.SERVING);
      done();
    }).catch((err) => {
      expect(err).to.equal(null);
      done();
    });
  });
});
