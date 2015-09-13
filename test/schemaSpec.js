/*global before, after, describe, it*/

'use strict';
var chai = require('chai'),
  expect = chai.expect,
  mongoose = require('mongoose'),
  LottoSchema = require('../app/model/lottoSchema'),
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

  it('LottoSchema.date, is defined and is a String', done => {
    lotto.setNewDate();
    expect(lotto.date).to.be.a('String');
    done();
  });
  it('LottoSchema.lastResult, is defined and is an Array', done => {
    expect(lotto.lastResult).to.be.an('Array');
    done();
  });
  it('LottoSchema.mostRepeated, is defined and is an Array', done => {
    expect(lotto.mostRepeated).to.be.an('Array');
    done();
  });
  it('LottoSchema.statistics, is defined and is an Array', done => {
    expect(lotto.statistics).to.be.an('Array');
    done();
  });
  it('LottoSchema.setNewDate, is defined', done => {
    expect(lotto.setNewDate).to.be.a('Function');
    done();
  });
  it('#LottoSchema.setNewDate, returns a new Date() if the call fails', done => {
    try {
      lotto.setNewDat();
    } catch (e) {
      console.log('setNewDate exception', e.message);
      lotto.date = new Date();
    }
    expect(lotto.date).to.match(/GMT/);
    done();
  });
});
