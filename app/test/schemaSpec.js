/*global before, after, describe, it*/

'use strict';
var chai = require('chai'),
  expect = chai.expect,
  mongoose = require('mongoose'),
  LottoSchema = require('../model/lottoSchema'),
  connection,
  Lotto,
  lotto;

before(done => {
  connection = mongoose.createConnection('mongodb://127.0.0.1/example-test');
  Lotto = connection.model('Lotto', LottoSchema);
  lotto = new Lotto();
  connection.once('open', () => done());
});

after(done => {
  connection.close(() => done());
});

describe('LottoSchema methods and properties', () => {

  it('#LottoSchema.setNewDate, is defined', done => {
    expect(lotto.setNewDate).to.be.a('Function');
    done();
  });
  it('#LottoSchema.date, is defined', done => {
    lotto.setNewDate();
    expect(lotto.date).to.be.a('String');
    done();
  });
});
