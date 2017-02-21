
import { globalHelper } from '../app/helpers/globalHelper';
import chai from 'chai';
import sinon from 'sinon';
const data = require( './sampleData' )();

const expect = chai.expect;

describe( 'Helper and methods', () => {
  it( '#Helper, has a compare2arrays method', () => {
    expect( globalHelper.compare2arrays ).not.to.equal( undefined );
  });
  it( '#Helper.compare2arrays() returns false when they do not have same length', () => {
    expect(
      globalHelper.compare2arrays(
        data.compare2arraysOne, data.compare2arraysFour
      )).to.eq( false );
  });
  it( '#Helper.compare2arrays() returns true when they are equal', () => {
    expect( globalHelper.compare2arrays(data.compare2arraysOne, data.compare2arraysTwo)).to.eq( true );
  });
  it( '#Helper.compare2arrays() returns false when they are not equal', () => {
    expect( globalHelper.compare2arrays(data.compare2arraysOne, data.compare2arraysThree)).to.eq( false );
  });

  it( '#Helper, has a customFindOneMongoose method', () => {
    expect( globalHelper.customFindOneMongoose ).not.to.equal( undefined );
  });

  it( '#Helper, has a getPricesInfo method', () => {
    expect( globalHelper.getPricesInfo ).not.to.equal( undefined );
  });
  it( '#Helper.getPricesInfo() returns Array with objects', () => {
    expect( globalHelper.getPricesInfo( data.getPricesInfoXray )).to.be.an( 'Array' )
      .with.length.above( 3 );
  });

  it( '#Helper, has a hackyDate method', () => {
    expect( globalHelper.hackyDate ).not.to.equal( undefined );
  });
  it( '#Helper.hackyDate() returns a Date in String format', () => {
    expect( globalHelper.hackyDate()).to.be.a( 'String' ).that.not.contains( 'GMT' );
  });
  it( '#Helper, has a getArrayRaffleDays method', () => {
    expect( globalHelper.getArrayRaffleDays )
      .not.to.equal( undefined );
  });
  it( '#Helper.getArrayRaffleDays is a function', () => {
    expect( globalHelper.getArrayRaffleDays )
      .to.be.a( 'function' );
  });
  it( '#Helper.getArrayRaffleDays returns an array', () => {
    expect( globalHelper.getArrayRaffleDays( 'primitiva' ))
      .to.be.an.instanceof( Array );
  });
  it( '#Helper.getArrayRaffleDays returns the array for raffleDays config\' property', () => {
    const spy = sinon.spy( globalHelper, 'getArrayRaffleDays' );
    globalHelper.getArrayRaffleDays( 'primitiva' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'primitiva' );
    expect( spy ).to.returned([4, 6]);
  });
});
