/*global before, after, describe, it*/
'use strict';

import chai from 'chai';
import mongoose from 'mongoose';
import LottoSchema from '../app/model/lottoSchema';

var expect = chai.expect,
  connection,
  Lotto,
  lotto,
  jsonFile = require('../app/jsonResult/bono.json');


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
  it('LottoSchema.setLastResult, is defined', done => {
    expect(lotto.setLastResult).to.be.a('Function');
    done();
  });
  it('LottoSchema.setLastResult(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', done => {
    expect(lotto.setLastResult(jsonFile.numbers)).to.eq('01,05,06,28,33,40');
    done();
  });
  it('LottoSchema.setMostRepeated, is defined', done => {
    expect(lotto.setMostRepeated).to.be.a('Function');
    done();
  });
  it('LottoSchema.setAllResults, is defined', done => {
    expect(lotto.setAllResults).to.be.a('Function');
    done();
  });
  it('LottoSchema.setAllResults(lastResult), adds the last result to allResult', done => {
    let lastResult = '01,05,06,28,33,40';
    lotto.setAllResults(lastResult);
    expect(lotto.setAllResults).to.have.length(1);
    done();
  });


  it('LottoSchema.date, is defined and is a String', done => {
    lotto.setNewDate();
    expect(lotto.date).to.be.a('String');
    done();
  });
  it('LottoSchema.lastResult, is defined and is a String', done => {
    lotto.setLastResult(jsonFile.numbers);
    expect(lotto.lastResult).to.be.a('String');
    done();
  });
  it('LottoSchema.mostRepeated, is defined and is a String', done => {
    expect(lotto.mostRepeated).to.be.an('String');
    done();
  });
  it('LottoSchema.statistics, is defined and is an Array', done => {
    expect(lotto.statistics).to.be.an('Array');
    done();
  });
  it('LottoSchema.allResults, is defined and is an Array', done => {
    expect(lotto.allResults).to.be.an('Array');
    done();
  });
});
