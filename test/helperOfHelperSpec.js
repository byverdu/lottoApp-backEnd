/*global before, describe, it, xit*/

'use strict';

import {
  HelperString, HelperDate, HelperArray
}
from '../app/helpers/preHelpers';

import chai from 'chai';

var expect = chai.expect,
  _Date,
  _String,
  _Array;

before(() => {
  _Date = new HelperDate();
  _Array = new HelperArray();
  _String = new HelperString();
});

describe('helper of helper?', () => {

  describe('HelperDate', () => {

    var spanishValues = {
      days: [
        'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
      ],
      months: [
        'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',
      ]
    };

    var getSpanishValues = (array, index) => {
      return array[index];
    };

    var getValuesNewDate = () => {

      let date = new Date();

      return {
        getDayWeek: date.getDay(),
        getDayMonth: date.getDate(),
        getMonth: date.getMonth(),
        getYear: date.getFullYear()
      };
    };
    it('#getValuesNewDate, is defined', () => {
      expect(getValuesNewDate).to.be.a('Function');
    });
    it('#getValuesNewDate, returns and object', () => {
      expect(getValuesNewDate()).is.an('Object');
    });
    it('#getValuesNewDate, has a getDayWeek property', () => {
      expect(getValuesNewDate()).to.have.property('getDayWeek').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getDayMonth property', () => {
      expect(getValuesNewDate()).to.have.property('getDayMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getMonth property', () => {
      expect(getValuesNewDate()).to.have.property('getMonth').and.be.a('Number');
    });
    it('#getValuesNewDate, has a getYear property', () => {
      expect(getValuesNewDate()).to.have.property('getYear').and.be.a('Number');
    });

    it('#getSpanishValues, is defined', () => {
      expect(getSpanishValues).to.be.a('Function');
    });

    it('#getSpanishValues, returns Domingo with index 0', () => {
      expect(getSpanishValues(spanishValues.days, 0)).to.eq('Domingo');
    });
    it('#getSpanishValues, returns Jueves with index 4', () => {
      expect(getSpanishValues(spanishValues.days, 4)).to.eq('Jueves');
    });
    it('#getSpanishValues, returns Dic with index 0', () => {
      expect(getSpanishValues(spanishValues.months, 0)).to.eq('Dic');
    });
    it('#getSpanishValues, returns Ago with index 7', () => {
      expect(getSpanishValues(spanishValues.months, 7)).to.eq('Ago');
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
      expect(_Array.sortFirstToLast(['06','34','03','12'])).to.be.eql(['03','06','12','34']);
    });
    it('#HelperArray.concatString is defined', () => {
      expect(_Array.concatString).not.to.equal(undefined);
    });
    it('#HelperArray.concatString(["04","06","34"]) returns "04,06,34"', () => {
      expect(_Array.concatString(['04','06','34'])).to.eql('04,06,34');
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
    it('#HelperString.addStringNumZero("0"), returns "00"', () => {
      expect(_String.addStringNumZero('0')).to.eq('00');
    });
  });
});
