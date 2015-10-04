/*global before, describe, it, xit */

'use strict';

import {
  HelperString, HelperDate, HelperArray, HelperObject
}
from '../app/helpers/preHelpers';

import chai from 'chai';

var data = require('./sampleData')(),
  expect = chai.expect,
  _Date,
  _String,
  _Array,
  _Object;

before(() => {
  _Date = new HelperDate();
  _Array = new HelperArray();
  _String = new HelperString();
  _Object = new HelperObject();
});

describe('helper of helper?', () => {

  describe('HelperDate', () => {

    var SPvalues = data.spanishValues,
      getSPValues = data.getSpanishValues;

    it('#getValuesNewDate, is defined', () => {
      expect(data.getValuesNewDate).to.be.a('Function');
    });
    it('#getValuesNewDate, returns and object', () => {
      expect(data.getValuesNewDate()).is.an('Object');
    });
    it('#getValuesNewDate, has a getDayWeek property', () => {
      expect(data.getValuesNewDate()).to.have.property('getDayWeek').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getDayMonth property', () => {
      expect(data.getValuesNewDate()).to.have.property('getDayMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getMonth property', () => {
      expect(data.getValuesNewDate()).to.have.property('getMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getYear property', () => {
      expect(data.getValuesNewDate()).to.have.property('getYear').and.be.a('Number');
    });

    it('#getSpanishValues, is defined', () => {
      expect(getSPValues).to.be.a('Function');
    });

    it('#getSpanishValues, returns Domingo with index 0', () => {
      expect(getSPValues(SPvalues.days, 0)).to.eq('Domingo');
    });
    it('#getSpanishValues, returns Jueves with index 4', () => {
      expect(getSPValues(SPvalues.days, 4)).to.eq('Jueves');
    });
    it('#getSpanishValues, returns Dic with index 0', () => {
      expect(getSPValues(SPvalues.months, 0)).to.eq('Dic');
    });
    it('#getSpanishValues, returns Ago with index 7', () => {
      expect(getSPValues(SPvalues.months, 7)).to.eq('Ago');
    });

    it('#buildSpanishDate, is defined', () => {
      expect(_Date.buildSpanishDate).to.be.a('Function');
    });
    it('#buildSpanishDate, returns a String', () => {
      expect(_Date.buildSpanishDate()).to.be.a('String').and.have.length.least(5);
    });
  });

  describe('HelperArray', () => {
    it('#HelperArray, is defined', () => {
      expect(_Array).not.to.equal(undefined);
    });
    it('#HelperArray.sortArrayFromFirstToLast', () => {
      expect(_Array.sortArrayFromFirstToLast).not.to.equal(undefined);
    });
    it('#HelperArray.sortArrayFromFirstToLast(["06","34","03","12"]) returns ["03","06","12","34"]', () => {
      expect(_Array.sortArrayFromFirstToLast(['06', '34', '03', '12'])).to.be.eql(['03', '06', '12', '34']);
    });
    it('#HelperArray.concatToSingleString is defined', () => {
      expect(_Array.concatToSingleString).not.to.equal(undefined);
    });
    it('#HelperArray.concatToSingleString(["04","06","34"]) returns "04,06,34"', () => {
      expect(_Array.concatToSingleString(['04', '06', '34'])).to.eql('04,06,34');
    });
    it('#HelperArray.splitArray is defined', () => {
      expect(_Array.splitArray).not.to.equal(undefined);
    });
    it('#HelperArray.splitArray(), returns and []', () => {
      expect(_Array.splitArray(data.allResultShort)).to.be.an('Array');
    });
    it('#HelperArray.splitArray(), returns and [] with the split items', () => {
      expect(_Array.splitArray(data.allResultShort)).to.eql([['18','28','30','31','34','40'],['01','15','35','36','37','40'],['02','11','29','30','32','45']]);
    });
    it('#HelperArray.sortArrayByCount is defined', () => {
      expect(_Array.sortArrayByCount).not.to.equal(undefined);
    });
    it('#HelperArray.sortArrayByCount(array) returns an Array', () => {
      expect(_Array.sortArrayByCount(data.allResultLongObjCounted)).to.be.an('Array');
    });
    it('#HelperArray.sortArrayByCount(array) returns the statistics ordered by count property', () => {
      expect(_Array.sortArrayByCount(data.allResultLongObjCounted)[0]).to.eql({index: '12', count: 4});
    });
    it('#HelperArray.sliceArrayByLottoCount is defined', () => {
      expect(_Array.sliceArrayByLottoCount).not.to.equal(undefined);
    });
    it('#HelperArray.sliceArrayByLottoCount() returns an Array', () => {
      expect(_Array.sliceArrayByLottoCount(data.allResultLongObjOrdered, data.sliceCountBall)).to.be.an('Array');
    });
    it('#HelperArray.sliceArrayByLottoCount(array, count) returns "x" first most repeated values ', () => {
      expect(_Array.sliceArrayByLottoCount(data.allResultLongObjOrdered, data.sliceCountBall)).to.contain({ index: '12', count: 4 },{ index: '16', count: 3 },{ index: '23', count: 3 },{ index: '28', count: 3 },{ index: '15', count: 3 },{ index: '49', count: 2 });
    });
  });

  describe('HelperString', () => {
    it('#HelperString, is defined', () => {
      expect(_String).not.to.equal(undefined);
    });
    it('#HelperString, has a deleteWhiteSpace method', () => {
      expect(_String.deleteWhiteSpace).not.to.equal(undefined);
    });
    it('#HelperString.deleteWhiteSpace(" 08"), returns "08"', () => {
      expect(_String.deleteWhiteSpace('08')).to.eq('08');
    });
    it('#HelperString, has a addStringNumZero method', () => {
      expect(_String.addStringNumZero).not.to.equal(undefined);
    });
    it('#HelperString.addStringNumZero("9"), returns "09"', () => {
      expect(_String.addStringNumZero('9')).to.eq('09');
    });
    it('#HelperString.addStringNumZero("19"), returns "19"', () => {
      expect(_String.addStringNumZero('19')).to.eq('19');
    });
    it('#HelperString.addStringNumZero("0"), returns "00"', () => {
      expect(_String.addStringNumZero('0')).to.eq('00');
    });
    it('#HelperString, has a orderString method', () => {
      expect(_String.orderString).not.to.equal(undefined);
    });
    it('#HelperString.orderString("11,05,28,03,10"), returns "03,05,10,11,28"', () => {
      expect(_String.orderString('11,05,28,03,10',_Array.sortArrayFromFirstToLast,_Array.concatToSingleString)).to.eq('03,05,10,11,28');
    });
  });

  describe('HelperObject', () => {
    it('#HelperObject, is defined', () => {
      expect(_Object).not.to.equal(undefined);
    });
    it('#HelperObject.extractValueByIndex, is defined"', () => {
      expect(_Object.extractValueByIndex).not.to.equal(undefined);
    });
    it('#HelperObject.extractValueByIndex(),  returns an Array', () => {
      expect(_Object.extractValueByIndex([])).to.be.an('Array');
    });
    it('#HelperObject.extractValueByIndex(),  returns an Array', () => {
      let dataToExtract = _Array.sliceArrayByLottoCount(data.allResultLongObjOrdered, data.sliceCountBall);
      expect(_Object.extractValueByIndex(dataToExtract)).to.eql([ '12', '16', '23', '28', '15', '49' ]);
    });
  });
});
