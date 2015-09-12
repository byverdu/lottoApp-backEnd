/*global before, describe, it*/
'use strict';

var chai     = require('chai'),
  expect     = chai.expect,
  Helper     = require('../helpers/helpers'),
  HelperDate = require('../helpers/helperDate'),
  helper,
  helperDate;

before(()    => {
  helper     = new Helper();
  helperDate = new HelperDate();
});

describe('helper of helper?', () => {

  describe('HelperDate', () => {
    it('#getValuesNewDate, is defined', () => {
      expect(helperDate.getValuesNewDate).to.be.a('Function');
    });
    it('#getValuesNewDate, returns and object', () => {
      expect(helperDate.getValuesNewDate()).is.an('Object');
    });
    it('#getValuesNewDate, has a getDayWeek property', () => {
      expect(helperDate.getValuesNewDate()).to.have.property('getDayWeek').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getDayMonth property', () => {
      expect(helperDate.getValuesNewDate()).to.have.property('getDayMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getMonth property', () => {
      expect(helperDate.getValuesNewDate()).to.have.property('getMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getYear property', () => {
      expect(helperDate.getValuesNewDate()).to.have.property('getYear').and.be.a('Number');
    });

    it('#getSpanishValues, is defined', () => {
      expect(helperDate.getSpanishValues).to.be.a('Function');
    });

    it('#getSpanishValues, returns Domingo with index 0', () => {
      expect(helperDate.getSpanishValues(helperDate.spanishValues.days, 0)).to.eq('Domingo');
    });
    it('#getSpanishValues, returns Jueves with index 4', () => {
      expect(helperDate.getSpanishValues(helperDate.spanishValues.days, 4)).to.eq('Jueves');
    });
    it('#getSpanishValues, returns Dic with index 0', () => {
      expect(helperDate.getSpanishValues(helperDate.spanishValues.months, 0)).to.eq('Dic');
    });
    it('#getSpanishValues, returns Ago with index 7', () => {
      expect(helperDate.getSpanishValues(helperDate.spanishValues.months, 7)).to.eq('Ago');
    });

    it('#buildSpanishDate, is defined', () => {
      expect(helperDate.buildSpanishDate).to.be.a('Function');
    });
    it('#buildSpanishDate, returns a String', () => {
      expect(helperDate.buildSpanishDate()).to.be.a('String').and.have.length.least(5);
    });
  });
});


describe('Helper and methods', () => {

  it('#Helper.newFormatedDate, is defined', () => {
    expect(helper.newFormatedDate).to.be.a('Function');
  });
  it('#Helper.newFormatedDate, returns a String', () => {
    expect(helper.newFormatedDate()).to.be.a('String').and.have.length.least(5);
  });
});
