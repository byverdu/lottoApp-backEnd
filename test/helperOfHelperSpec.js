/* global before, describe, it*/

import { helperString as _String,
         helperDate as _Date,
         helperArray as _Array,
         helperObject as _Object,
         helperNumber as _Number
       } from '../app/helpers/preHelpers';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use( sinonChai );

const data = require( './sampleData' )();
const expect = chai.expect;


describe( 'helper of helper?', () => {
  describe( 'HelperDate', () => {
    const SPvalues = data.spanishValues;
    const getSPValues = data.getSpanishValues;

    it( '#getValuesNewDate, is defined', () => {
      expect( data.getValuesNewDate ).to.be.a( 'Function' );
    });
    it( '#getValuesNewDate, returns and object', () => {
      expect( data.getValuesNewDate()).is.an( 'Object' );
    });
    it( '#getValuesNewDate, has a getDayWeek property', () => {
      expect( data.getValuesNewDate()).to.have.property( 'getDayWeek' ).and.be.a( 'Number' );
    });
    it( '#getValuesNewDate, has a getDayMonth property', () => {
      expect( data.getValuesNewDate()).to.have.property( 'getDayMonth' ).and.be.a( 'Number' );
    });
    it( '#getValuesNewDate, has a getMonth property', () => {
      expect( data.getValuesNewDate()).to.have.property( 'getMonth' ).and.be.a( 'Number' );
    });
    it( '#getValuesNewDate, has a getYear property', () => {
      expect( data.getValuesNewDate()).to.have.property( 'getYear' ).and.be.a( 'Number' );
    });

    it( '#getSpanishValues, is defined', () => {
      expect( getSPValues ).to.be.a( 'Function' );
    });
    it( '#getSpanishValues, returns Domingo with index 0', () => {
      expect( getSPValues( SPvalues.days, 0 )).to.eq( 'Domingo' );
    });
    it( '#getSpanishValues, returns Jueves with index 4', () => {
      expect( getSPValues( SPvalues.days, 4 )).to.eq( 'Jueves' );
    });
    it( '#getSpanishValues, returns Dic with index 0', () => {
      expect( getSPValues( SPvalues.months, 0 )).to.eq( 'Dic' );
    });
    it( '#getSpanishValues, returns Ago with index 7', () => {
      expect( getSPValues( SPvalues.months, 7 )).to.eq( 'Ago' );
    });

    it( '#buildSpanishDate, is defined', () => {
      expect( _Date.buildSpanishDate ).to.be.a( 'Function' );
    });
    it( '#buildSpanishDate, returns a String', () => {
      expect( _Date.buildSpanishDate()).to.be.a( 'String' ).and.have.length.least( 5 );
    });
  });

  describe( 'HelperArray', () => {
    it( '#HelperArray, is defined', () => {
      expect( _Array ).not.to.equal( undefined );
    });
    it( '#HelperArray.sortArrayFromFirstToLast', () => {
      expect( _Array.sortArrayFromFirstToLast ).not.to.equal( undefined );
    });
    it( 'sortArrayFromFirstToLast(["06","34","03","12"]) returns ["03","06","12","34"]', () => {
      expect( _Array.sortArrayFromFirstToLast(['06', '34', '03', '12'])).to.be.eql(['03', '06', '12', '34']);
    });
    it( '#HelperArray.concatToSingleString is defined', () => {
      expect( _Array.concatToSingleString ).not.to.equal( undefined );
    });
    it( '#HelperArray.concatToSingleString(["04","06","34"]) returns "04,06,34"', () => {
      expect( _Array.concatToSingleString(['04', '06', '34'])).to.eql( '04,06,34' );
    });
    it( '#HelperArray.splitArray is defined', () => {
      expect( _Array.splitArray ).not.to.equal( undefined );
    });
    it( '#HelperArray.splitArray(), returns and []', () => {
      expect( _Array.splitArray( data.allResultShort )).to.be.an( 'Array' );
    });
    it( '#HelperArray.splitArray(), returns and [] with the split items', () => {
      const result = [['18','28','30','31','34','40'],['01','15','35','36','37','40'],['02','11','29','30','32','45']];
      expect( _Array.splitArray( data.allResultShort )).to.eql( result );
    });
    it( '#HelperArray.sortArrayByCount is defined', () => {
      expect( _Array.sortArrayByCount ).not.to.equal( undefined );
    });
    it( '#HelperArray.sortArrayByCount(array) returns an Array', () => {
      expect( _Array.sortArrayByCount( data.allResultLongObjCounted )).to.be.an( 'Array' );
    });
    it( '#HelperArray.sortArrayByCount(array) returns the statistics ordered by count property', () => {
      expect( _Array.sortArrayByCount( data.allResultLongObjCounted ) ).to.eql( data.allResultLongObjOrdered );
    });
    it( '#HelperArray.sliceArrayByCount is defined', () => {
      expect( _Array.sliceArrayByCount ).not.to.equal( undefined );
    });
    it( '#HelperArray.sliceArrayByCount() returns an Array', () => {
      expect( _Array.sliceArrayByCount( data.allResultLongObjCounted, data.sliceCountBall)).to.be.an( 'Array' );
    });
    it( '#HelperArray.sliceArrayByCount(array, count) returns "x" first most repeated values ', () => {
      expect( _Array.sliceArrayByCount(data.allResultLongObjCounted, data.sliceCountBall)).to.contain({ index: '44', count: 21 },{ index: '05', count: 18 },{ index: '24', count: 18 },{ index: '30', count: 17 },{ index: '37', count: 16 },{ index: '26', count: 16 });
    });
  });

  describe('HelperString', () => {
    it( '#HelperString, is defined', () => {
      expect( _String ).not.to.equal( undefined );
    });
    it( '#HelperString, has a deleteWhiteSpace method', () => {
      expect( _String.deleteWhiteSpace ).not.to.equal( undefined );
    });
    it( '#HelperString.deleteWhiteSpace(" 08"), returns "08"', () => {
      expect( _String.deleteWhiteSpace( '08' )).to.eq( '08' );
    });
    it( '#HelperString, has a addStringNumZero method', () => {
      expect( _String.addStringNumZero ).not.to.equal( undefined );
    });
    it( '#HelperString.addStringNumZero("9"), returns "09"', () => {
      expect( _String.addStringNumZero( '9' )).to.eq( '09' );
    });
    it( '#HelperString.addStringNumZero("19"), returns "19"', () => {
      expect( _String.addStringNumZero( '19' )).to.eq( '19' );
    });
    it( '#HelperString.addStringNumZero("0"), returns "00"', () => {
      expect( _String.addStringNumZero( '0' )).to.eq( '00' );
    });
    it( '#HelperString.addStringNumZero("03"), returns "03"', () => {
      expect( _String.addStringNumZero( '03' )).to.eq( '03' );
    });
    it( '#HelperString, has a orderString method', () => {
      expect( _String.orderString ).not.to.equal( undefined );
    });
    it( '#HelperString.orderString("11,05,28,03,10"), returns "03,05,10,11,28"', () => {
      expect( _String.orderString( '11,05,28,03,10', _Array.sortArrayFromFirstToLast, _Array.concatToSingleString)).to.eq( '03,05,10,11,28' );
    });
  });

  describe( 'HelperObject', () => {
    it( '#HelperObject, is defined', () => {
      expect( _Object ).not.to.equal( undefined );
    });
    it( '#HelperObject.extractValueByIndex, is defined"', () => {
      expect( _Object.extractValueByIndex ).not.to.equal( undefined );
    });
    it( '#HelperObject.extractValueByIndex(),  returns an Array', () => {
      expect( _Object.extractValueByIndex([])).to.be.an( 'Array' );
    });
    it( '#HelperObject.extractValueByIndex(),  returns an Array with populated values from index property', () => {
      const dataToExtract = _Array.sliceArrayByCount(data.allResultLongObjOrdered, data.sliceCountBall);
      expect( _Object.extractValueByIndex( dataToExtract)).to.eql( [ '44', '05', '24', '30', '37', '39' ] );
    });
    xit( '#HelperObject.objectColorProperty, is defined', () => {
      expect( _Object.objectColorProperty ).to.be.an( 'Object' );
    });
    xit( '#HelperObject.objectColorProperty, returns an Object with 3 properties for colors', () => {
      expect( _Object.objectColorProperty ).to.have.property( 'green' ).eq( 'greenItem' );
      expect( _Object.objectColorProperty ).to.have.property( 'orange' ).eq( 'orangeItem' );
      expect( _Object.objectColorProperty ).to.have.property( 'red' ).eq( 'redItem' );
    });
    it( '#HelperObject.setColorProperty, is defined', () => {
      expect( _Object.setColorProperty ).to.be.a( 'Function' );
    });
    it( '_Object.setColorProperty, first argument is an Array', () => {
      const array = [];
      _Object.setColorProperty( array, 3 );
      expect( array ).to.be.argumnents;
      expect( array ).to.be.an( 'Array' );
    });
    it( '_Object.setColorProperty, second argument is a String', () => {
      const string = 3;
      _Object.setColorProperty([], string );

      expect( string ).to.be.argumnents;
      expect( string ).to.be.a( 'Number' );
    });
    it( '#HelperObject.setColorProperty({ index: "12", count: 4 }), returns { index: "12", count: 4, color: "greenItem"}', () => {
      const dataNumber = data.allResultLongObjOrdered;
      const fractionNumber = _Number.findFractionNumber( data.allResultLongObjOrdered, 3 );
      const result = _Object.setColorProperty( dataNumber, fractionNumber );
      expect( result[ 0 ]).to.contain({ index: '44', count: 21, color: 'greenItem' });
      expect( result[ 20 ]).to.contain({ index: '20', count: 13, color: 'orangeItem' });
      expect( result[ 40 ]).to.contain({ index: '01', count: 9, color: 'redItem' });
    });
    it( '#HelperObject.buildObjectForProp, is defined', () => {
      expect( _Object.buildObjectForProp ).to.be.a( 'Function' );
    });

    it( '#HelperObject.buildObjectForProp, returns an array of objects', () => {
      expect( _Object.buildObjectForProp( data.getPricesInfoXray.categoryPrice, 'category' ))
        .to.be.an( 'Array' ).that.contains.at.least({});
    });
    it( '#HelperObject.buildObjectForProp, returns objects with the property passed as string', () => {
      const resultCat = _Object.buildObjectForProp( data.getPricesInfoXray.categoryPrice, 'category' )[0];
      const resultPrice = _Object.buildObjectForProp( data.getPricesInfoXray.moneyPrice, 'price' )[0];
      expect( resultCat ).to.have.keys( 'category' );
      expect( resultPrice ).to.have.keys( 'price' );
    });
    it( '#HelperObject.buildObjectForProp, deletes first item of the array', () => {
      const resultCat = _Object.buildObjectForProp( data.getPricesInfoXray.categoryPrice, 'category')[ 0 ];
      expect( resultCat ).to.eql({ category: '1ª (6 aciertos)' });
    });
    it( '#HelperObject.mergePropsObjects, is defined', () => {
      expect( _Object.mergePropsObjects ).not.to.eq( undefined );
    });
    it( '#HelperObject.mergePropsObjects, returns an array', () => {
      expect( _Object.mergePropsObjects( data.categoryData, data.winnersData )).to.be.an( 'Array' );
    });
    it( '#HelperObject.mergePropsObjects, merge objects from 2 arrays', () => {
      const categoryData = data.categoryData;
      const winnersData = data.winnersData;
      const priceData = data.priceData;
      expect( _Object.mergePropsObjects( categoryData, winnersData )[ 0 ])
      .to.have.keys( 'category', 'winners' );
      expect( _Object.mergePropsObjects( categoryData, priceData )[ 0 ])
      .to.have.keys( 'category', 'winners', 'price' );
    });
  });

  describe( 'HelperNumber', () => {
    it( '#HelperNumber, is defined', () => {
      expect( _Number ).not.to.equal( undefined );
    });
    it( '#HelperNumber.findFractionNumber, is defined"', () => {
      expect( _Number.findFractionNumber ).not.to.equal( undefined );
    });
    it( '#HelperNumber.findFractionNumber(),  returns a Number', () => {
      expect( _Number.findFractionNumber( 23 )).to.be.a( 'Number' );
    });
    it( '#HelperNumber.findFractionNumber(),  returns a Number', () => {
      const stub = sinon.stub( _Number, 'findFractionNumber' );
      const array = new Array( data.totalNumberBalls );
      _Number.findFractionNumber( array, data.fraction );

      expect( _Number.findFractionNumber ).to.have.been.calledWith( array, 3 );
      stub.restore();
    });
    it( '#HelperNumber.findFractionNumber(array, data.fraction),  returns 17', () => {
      const array = new Array( data.totalNumberBalls );
      expect( _Number.findFractionNumber( array, data.fraction )).to.eq( 17 );
    });
  });
});
