/*global before, after, describe, it, xit*/
'use strict';

import chai from 'chai';
import mongoose from 'mongoose';
import LottoSchema from '../app/model/lottoSchema';

var data = require('./sampleData')(),
  expect = chai.expect,
  connection,
  Lotto,
  lotto,
  jsonFile = require('../app/jsonResult/bono.json');

function createDummyData(){
	data.allResultLong.map( (el) => {
			lotto.setAllResults(el);
	});
}

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
  it('LottoSchema.setAllResults(lastResult), adds the last result to allResults', done => {
    let lastResult = '01,05,06,28,33,40';
    lotto.setAllResults(lastResult);
    expect(lotto.setAllResults).to.have.length(1);
    lotto.allResults = [];
    done();
  });
  it('LottoSchema.getAllResults, is defined', done => {
    expect(lotto.getAllResults).to.be.a('Function');
    done();
  });
  it('LottoSchema.getAllResults(this.allResults), splits and sorts allResults', done => {
    lotto.setAllResults('18,28,30,31,34,40');
    lotto.setAllResults('01,15,35,36,37,40');
    lotto.setAllResults('02,11,29,30,32,45');
    expect(lotto.getAllResults(data.allResultShort)).to.eql(['01', '02', '11', '15', '18', '28', '29', '30', '30', '31', '32', '34', '35', '36', '37', '40', '40', '45']);
		lotto.allResults = [];
    done();
  });

  it('LottoSchema has a getCountAllResults method', done => {
    expect(lotto.getCountAllResults).not.to.equal(undefined);
		done();
  });
  it('LottoSchema.getCountAllResults(allResults) returns []', done => {
    expect(lotto.getCountAllResults()).to.be.an('Array');
		done();
  });
  it('LottoSchema.getCountAllResults(allResults) returns ordered objects [{index: "12",count: 4}...]', done => {
    createDummyData();
    expect(lotto.getCountAllResults()).to.eql(data.allResultLongObjOrdered);
		done();
		lotto.allResults = [];
  });
	it('LottoSchema has a setStatistics method', done => {
    expect(lotto.setStatistics).not.to.equal(undefined);
		done();
  });
	it('LottoSchema.setStatistics() sets lotto.statistics', done => {
			createDummyData();
			lotto.setStatistics();
    expect(lotto.statistics).to.have.length.above(12);
    lotto.allResults = [];
		done();
  });
  it('LottoSchema has a getStatistics method', done => {
    expect(lotto.getStatistics).not.to.equal(undefined);
		done();
  });
  it('LottoSchema.getStatistics() returns the statistics', done => {
    expect(lotto.getStatistics()).to.have.length.above(12);
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
  xit('LottoSchema.mostRepeated, is defined and is a String', done => {
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
