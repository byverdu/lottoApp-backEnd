/*global before, after, describe, it*/
'use strict';

import chai from 'chai';
import mongoose from 'mongoose';
import LottoSchema from '../app/model/lottoSchema';

const data = require( './sampleData' )();
const expect = chai.expect;
const storage = require( '../app/config/storage' );
let connection;
let Lotto;
let lotto;

function createDummyData() {
  data.allResultLong.forEach(( el ) => {
    lotto.setAllResults( el );
  });
}

before( done => {
  connection = mongoose.createConnection( 'mongodb://127.0.0.1/example-test' );
  Lotto = connection.model( 'Lotto', LottoSchema );
  lotto = new Lotto();
  connection.once( 'open', () => done());
});

after( done => {
  connection.close(() => done());
});

describe( 'LottoSchema methods and properties', () => {
  it( 'LottoSchema.setNewDate, is defined', done => {
    expect( lotto.setNewDate ).to.be.a( 'Function' );
    done();
  });
  it( '#LottoSchema.setNewDate, returns a new Date() if the call fails', done => {
    try {
      lotto.setNewDat();
    } catch ( e ) {
      lotto.date = new Date();
    }
    expect( lotto.date ).to.match( /GMT/ );
    done();
  });
  it( 'LottoSchema.setLastResult, is defined', done => {
    expect( lotto.setLastResult ).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setLastResult(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', done => {
    const newStorage = storage.getItem( 'bonoNumbers' );
    expect( lotto.setLastResult( newStorage.numbers )).to.have.length.least( data.sliceCountBall );
    done();
  });
  it( 'LottoSchema.setExtras, is defined', done => {
    expect( lotto.setExtras ).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setExtras(["9","7"]), returns "07,09"', done => {
    expect( lotto.setExtras( ['9','7'] )).to.be.eq( '07,09' );
    done();
  });
  it( 'LottoSchema.setMostRepeated, is defined', done => {
    expect( lotto.setMostRepeated).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setMostRepeated, returns the most repeated sliced by count', done => {
    createDummyData();
    lotto.setStatistics(lotto.allResults, 'lotto');
    expect( lotto.setMostRepeated(data.sliceCountBall)).to.eql( '12,15,16,23,28,49' );
    done();
  });
  it( 'After calling LottoSchema.setMostRepeated, new statistics are created', done => {
    let result;
    lotto.statistics = data.allResultLongObjOrdered;
    result = lotto.setStatisticsAfterColorSet(lotto.statistics);

    expect( result[0]).to.contain({ index: '12', count: 4, color: 'greenItem' } );
    expect( result[result.length - 1]).to.contain({ index: '19', count: 1, color: 'redItem' } );
    done();
  });
  it( 'LottoSchema.setAllResults, is defined', done => {
    expect( lotto.setAllResults).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setAllResults(lastResult), adds the last result to allResults', done => {
    let lastResult = '01,05,06,28,33,40';
    lotto.setAllResults(lastResult);
    expect( lotto.setAllResults).to.have.length(1 );
    lotto.allResults = [];
    done();
  });
  it( 'LottoSchema.getAllResults, is defined', done => {
    expect( lotto.getAllResults).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.getAllResults(this.allResults), splits and sorts allResults', done => {
    data.allResultShort.map( el => {
      lotto.setAllResults(el);
    });
    expect( lotto.getAllResults()).to.eql( ['01', '02', '11', '15', '18', '28', '29', '30', '30', '31', '32', '34', '35', '36', '37', '40', '40', '45'] );
    lotto.allResults = [];
    done();
  });
  it( 'LottoSchema has a getCountAllResults method', done => {
    expect( lotto.getCountAllResults).not.to.equal( undefined );
    done();
  });
  it( 'LottoSchema.getCountAllResults(allResults, string) returns []', done => {
    expect( lotto.getCountAllResults(lotto.allResults, 'lotto')).to.be.an('Array' );
    done();
  });
  it( 'LottoSchema.getCountAllResults(allResults, string) returns ordered objects [{index: "12",count: 4}...]', done => {
    createDummyData();
    expect( lotto.getCountAllResults(lotto.allResults, 'lotto')).to.eql( data.allResultLongObjCounted );
    done();
    lotto.allResults = [];
  });
  it( 'LottoSchema has a setStatistics method', done => {
    expect( lotto.setStatistics).not.to.equal( undefined );
    done();
  });
  it( 'LottoSchema.setStatistics() sets lotto.statistics', done => {
    createDummyData();
    lotto.setStatistics(lotto.allResults, 'lotto');
    expect( lotto.statistics).to.have.length.above(12 );
    lotto.allResults = [];
		done();
  });
  it( 'LottoSchema has a getStatistics method', done => {
    expect( lotto.getStatistics).not.to.equal( undefined );
		done();
  });
  it( 'LottoSchema.getStatistics() returns the statistics', done => {
    expect( lotto.getStatistics()).to.have.length.above(12 );
		done();
  });
  it( 'LottoSchema.setLastResultStars, is defined', done => {
    expect( lotto.setLastResultStars).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setLastResultStars(["9","7"]), returns "07,09"', done => {
    lotto.setLastResultStars(['9','7 ']);
    expect( lotto.stars.lastResult).to.be.eq('07,09' );
    done();
  });
  it( 'LottoSchema.setAllResultStars, is defined', done => {
    expect( lotto.setAllResultStars).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setAllResultStars, adds lastResult to allResults array', done => {
    lotto.setLastResultStars(['07,09']);
    lotto.setAllResultStars();
    lotto.setLastResultStars(['03,11']);
    lotto.setAllResultStars();
    expect( lotto.stars.allResults).to.contain('07,09','03,11' );
    lotto.stars.allResults = [];
    done();
  });
  it( 'LottoSchema.getAllResultsStars, is defined', done => {
    expect( lotto.getAllResultsStars).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.getAllResultsStars(this.stars.allResults), splits and sorts allResults', done => {
    data.cretateDataStars(lotto);
    expect( lotto.getAllResultsStars()).to.eql( ['07','09','18','28','30','30','34','37','40','40'] );
    lotto.stars.allResults = [];
    done();
  });
  it( 'LottoSchema has a setStatisticStars method', done => {
    expect( lotto.setStatisticStars ).not.to.equal( undefined );
    done();
  });
  it( 'LottoSchema.setStatisticStars() sets lotto.statistics', done => {
    data.cretateDataStars( lotto );
    lotto.setStatisticStars( lotto.stars.allResults, 'stars' );
    expect( lotto.stars.statistics).to.contain({'index':'34','count':1},{'index':'37','count':1} );
    lotto.allResults = [];
    done();
  });
  it( 'LottoSchema has a getStatisticStars method', done => {
    expect( lotto.getStatisticStars).not.to.equal( undefined );
    done();
  });
  it( 'LottoSchema has a getStatisticStars method', done => {
    expect( lotto.getStatisticStars()).to.equal(lotto.stars.statistics );
    done();
  });
  it( 'LottoSchema.setMostRepeatedStars, is defined', done => {
    expect( lotto.setMostRepeatedStars).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setMostRepeatedStars, sets the most repeated stars', done => {
    data.cretateDataStars(lotto);
    lotto.setStatisticStars(lotto.stars.allResults, 'stars');
    expect( lotto.setMostRepeatedStars(data.sliceStars)).to.eql( '30,40' );
    done();
  });
  it( 'LottoSchema.setStatisticsAfterColorSet, is defined', done => {
    expect( lotto.setStatisticsAfterColorSet).to.be.a( 'Function' );
    done();
  });
  it( 'LottoSchema.setStatisticsAfterColorSet, sets this.allResults with a new property', done => {
    var result = lotto.setStatisticsAfterColorSet(data.allResultLongObjOrdered);
    expect( result[0]).to.contain({ index: '12', count: 4, color: 'greenItem' } );
    expect( result[result.length - 1]).to.contain({ index: '19', count: 1, color: 'redItem' } );
    done();
  });


  it( 'LottoSchema.date, is defined and is a String', done => {
    lotto.setNewDate();
    expect( lotto.date).to.be.a('String' );
    done();
  });
  it( 'LottoSchema.lastResult, is defined and is a String', done => {
    var newStorage = storage.getItem('bonoNumbers');
    lotto.setLastResult(newStorage.numbers);
    expect( lotto.lastResult).to.be.a('String' );
    done();
  });
  it( 'LottoSchema.extras, is defined', done => {
    lotto.setExtras(['9','7']);
    expect( lotto.extras).to.be.a('String' );
    done();
  });
  it( 'LottoSchema.mostRepeated, is defined and is a String', done => {
    lotto.setMostRepeated(data.allResultLongObjCounted, data.sliceCountBall);
    expect( lotto.mostRepeated).to.be.an('String' );
    done();
  });
  it( 'LottoSchema.statistics, is defined and is an Array', done => {
    expect( lotto.statistics).to.be.an('Array' );
    done();
  });
  it( 'LottoSchema.allResults, is defined and is an Array', done => {
    expect( lotto.allResults).to.be.an('Array' );
    done();
  });
  it( 'LottoSchema.stars, is defined and is an Object', done => {
    expect( lotto.stars).to.be.an('Object' );
    done();
  });
  it( 'LottoSchema.stars, has a property  lastResult', done => {
    expect( lotto.stars).to.have.property( 'lastResult').and.is.a('String' );
    done();
  });
  it( 'LottoSchema.stars, has a property  allResults', done => {
    expect( lotto.stars).to.have.property( 'allResults').and.is.an('Array' );
    done();
  });
  it( 'LottoSchema.stars, has a property  statistics', done => {
    expect( lotto.stars).to.have.property( 'statistics').and.is.an('Array' );
    done();
  });
  it( 'LottoSchema.stars, has a property  mostRepeated', done => {
    lotto.setMostRepeatedStars(data.sliceStars);
    expect( lotto.stars).to.have.property( 'mostRepeated').and.is.an('String' );
    done();
  });
});
