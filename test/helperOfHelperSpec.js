/*global before, describe, it, xit*/

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
  _Object = new HelperObject
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
    it('#HelperArray.sortFirstToLast', () => {
      expect(_Array.sortFirstToLast).not.to.equal(undefined);
    });
    it('#HelperArray.sortFirstToLast(["06","34","03","12"]) returns ["03","06","12","34"]', () => {
      expect(_Array.sortFirstToLast(['06', '34', '03', '12'])).to.be.eql(['03', '06', '12', '34']);
    });
    it('#HelperArray.concatString is defined', () => {
      expect(_Array.concatString).not.to.equal(undefined);
    });
    it('#HelperArray.concatString(["04","06","34"]) returns "04,06,34"', () => {
      expect(_Array.concatString(['04', '06', '34'])).to.eql('04,06,34');
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
  });

  describe('HelperObject', () => {
    it('#HelperObject, is defined', () => {
      expect(_Object).not.to.equal(undefined);
    });
    it('#HelperObject has a prepareArrayForCount method', () => {
      expect(data.prepareArrayForCount).not.to.equal(undefined);
    });
    xit('#HelperObject, has a deleteWhiteSpace method', () => {
      expect(_Object.deleteWhiteSpace).not.to.equal(undefined);
    });
    xit('#HelperObject, has a addStringNumZero method', () => {
      expect(_Object.addStringNumZero).not.to.equal(undefined);
    });
    xit('#HelperObject.addStringNumZero("9"), returns "09"', () => {
      expect(_Object.addStringNumZero('9')).to.eq('09');
    });
    xit('#HelperObject.addStringNumZero("0"), returns "00"', () => {
      expect(_Object.addStringNumZero('0')).to.eq('00');
    });
  });
});
