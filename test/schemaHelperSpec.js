/* global before, it, describe*/
import { schemaHelper } from '../app/helpers/schemaHelper';
import chai from 'chai';

const data = require( './sampleData' )();
const expect = chai.expect;

describe( 'schemaHelper and methods', () => {
  it( 'setNewFormatedDate, is defined', () => {
    expect( schemaHelper.setNewFormatedDate ).to.be.a( 'Function' );
  });
  it( 'setNewFormatedDate, returns a String', () => {
    expect( schemaHelper.setNewFormatedDate()).to.be.a( 'String' ).and.have.length.least( 5 );
  });
  it( 'setXrayArrayToSave, is defined', () => {
    expect( schemaHelper.setXrayArrayToSave ).to.be.a( 'Function' );
  });
  it( 'setXrayArrayToSave(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', () => {
    expect( schemaHelper.setXrayArrayToSave(['34', '9', '23', '7', '5'])).to.eq( '05,07,09,23,34' );
  });
  it( 'setAllResulstArrayToCount, is defined', () => {
    expect( schemaHelper.setAllResulstArrayToCount ).to.be.a( 'Function' );
  });
  it( 'setAllResulstArrayToCount(), returns an instance of []', () => {
    expect( schemaHelper.setAllResulstArrayToCount( data.allResultShort )).to.be.an( 'Array' );
  });
  it( 'setAllResulstArrayToCount(array), returns [] with sorted and single Strings', () => {
    const result = ['01', '02', '11', '15', '18', '28', '29', '30', '30', '31', '32', '34', '35', '36', '37', '40', '40', '45'];
    expect( schemaHelper.setAllResulstArrayToCount( data.allResultShort )).to.eql( result );
  });
  it( 'has a createObjectCount method', () => {
    expect( schemaHelper.createObjectCount ).not.to.equal( undefined );
  });
  it( 'createObjectCount(index, count) returns {index: "12",count: 4}', () => {
    expect( schemaHelper.createObjectCount()).to.have.keys( 'index', 'count' );
  });
  it( 'has a findMostRepeatedValues method', () => {
    expect( schemaHelper.findMostRepeatedValues ).not.to.equal( undefined );
  });
  it( 'findMostRepeatedValues(array) returns index value for most repeated', () => {
    expect( schemaHelper.findMostRepeatedValues( data.allResultLongObjCounted, data.sliceCountBall ))
      .to.eql( '44,05,24,30,37,42' );
  });
  it( 'has a orderStringMostRepeated method', () => {
    expect( schemaHelper.orderStringMostRepeated ).not.to.equal( undefined );
  });
  it( 'orderStringMostRepeated(index, count) returns {index: "12",count: 4}', () => {
    expect( schemaHelper.orderStringMostRepeated( '11,05,28,03,10' )).to.eq( '03,05,10,11,28' );
  });
  it( 'modifyExtras, is defined', () => {
    expect( schemaHelper.modifyExtras ).to.be.a( 'Function' );
  });
  it( 'modifyExtras(["9","7"]), returns "07,09"', () => {
    expect( schemaHelper.modifyExtras(['9', '7'])).to.be.eq( '07,09' );
  });
  it( 'setColorPropertyStatistics, is defined', () => {
    expect( schemaHelper.setColorPropertyStatistics ).to.be.a( 'Function' );
  });
  it( 'setColorPropertyStatistics adds a color property to the statistics object', () => {
    const result = schemaHelper.setColorPropertyStatistics( data.allResultLongObjOrdered, data.fraction );
    expect( result[ 0 ]).to.contain({ index: '44', count: 21, color: 'greenItem' });
    expect( result[ result.length - 1 ]).to.contain({ index: '09', count: 3, color: 'redItem' });
  });
  it( 'setKindOfLotto, is defined', () => {
    expect( schemaHelper.setKindOfLotto ).to.be.a( 'Function' );
  });
  it( 'setKindOfLotto(), returns an Array', () => {
    expect( schemaHelper.setKindOfLotto([])).to.be.an( 'Array' );
  });
  it( 'setKindOfLotto([]), first argument is an Array', () => {
    const array = [];
    schemaHelper.setKindOfLotto( array );

    expect( array ).to.be.argumnents;
    expect( array ).to.be.an( 'Array' );
  });
  it( 'setKindOfLotto([]), first argument is an Array', () => {
    const string = 'string';
    schemaHelper.setKindOfLotto( string );

    expect( string ).to.be.argumnents;
    expect( string ).to.be.an( 'String' );
  });
});
