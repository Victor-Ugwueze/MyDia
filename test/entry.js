import Coveralls 'coveralls'
import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server/server';
Coveralls.wear!;
const should = chai.should();

process.env.NODE_ENV = 'test';


chai.use(chaiHttp);

it('Should list all diary entry on /api/v1/entries', (done) => {
  chai.request(server)
    .get('/api/v1/entries')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[0].should.be.a('object');
      done();
    });
});
