
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
  it( '#Helper.getArrayRaffleDays returns the array for raffleDays config\'s property', () => {
    const spy = sinon.spy( globalHelper, 'getArrayRaffleDays' );
    globalHelper.getArrayRaffleDays( 'primitiva' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'primitiva' );
    expect( spy ).to.returned([4, 6]);
  });
  it( '#Helper, has a createParamsXrayModule method', () => {
    expect( globalHelper.createParamsXrayModule )
      .not.to.equal( undefined );
  });
  it( '#Helper.createParamsXrayModule is a function', () => {
    expect( globalHelper.createParamsXrayModule )
      .to.be.a( 'function' );
  });
  it( '#Helper.createParamsXrayModule returns an object', () => {
    expect( globalHelper.createParamsXrayModule( 'bonoloto' ))
      .to.have.property( 'lottoID' ).and.is.a( 'string' );
    expect( globalHelper.createParamsXrayModule( 'bonoloto' ))
      .to.have.property( 'sliceCountBall' ).and.is.a( 'number' );
    expect( globalHelper.createParamsXrayModule( 'bonoloto' ))
      .to.have.property( 'promise' ).and.is.instanceof( Promise );
  });
  it( '#Helper, has a getCommonSelectorsRaffle method', () => {
    expect( globalHelper.getCommonSelectorsRaffle )
      .not.to.equal( undefined );
  });
  it( '#Helper.getCommonSelectorsRaffle is a function', () => {
    expect( globalHelper.getCommonSelectorsRaffle )
      .to.be.a( 'function' );
  });
  it( '#Helper.getCommonSelectorsRaffle returns an object', () => {
    expect( globalHelper.getCommonSelectorsRaffle( 'bonoloto' ))
      .to.have.property( 'numbers' ).and.is.a( 'array' );
    expect( globalHelper.getCommonSelectorsRaffle( 'bonoloto' ))
      .to.have.property( 'extras' ).and.is.a( 'array' );
  });
  it( '#Helper.getCommonSelectorsRaffle is called with a lottoID and returns numbers and extras props', () => {
    const spy = sinon.spy( globalHelper, 'getCommonSelectorsRaffle' );
    globalHelper.getCommonSelectorsRaffle( 'bonoloto' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'bonoloto' );
    expect( spy ).to.have.returned({
      numbers: ['.cuerpoRegionIzq li'],
      extras: ['.cuerpoRegionDerecha li']
    });
  });
  it( '#Helper, has a getRaffleUrl method', () => {
    expect( globalHelper.getRaffleUrl )
      .not.to.equal( undefined );
  });
  it( '#Helper.getRaffleUrl is a function', () => {
    expect( globalHelper.getRaffleUrl )
      .to.be.a( 'function' );
  });
  it( '#Helper.getRaffleUrl returns a string', () => {
    expect( globalHelper.getRaffleUrl( 'primitiva' ) ).to.be.a( 'String' );
  });
  it( '#Helper.getRaffleUrl returns a the url for the raffle used as parameter', () => {
    const spy = sinon.spy( globalHelper, 'getRaffleUrl' );
    globalHelper.getRaffleUrl( 'primitiva' );
    expect( spy).to.have.been.calledOnce;
    expect( spy).to.have.been.calledWithExactly( 'primitiva' );
    expect( spy).to.have.returned( 'http://www.loteriasyapuestas.es/es/la-primitiva' );
  });
  it( '#Helper.getRaffleUrl returns a the url for the raffle used as parameter', () => {
    expect( globalHelper.getRaffleUrl( 'bonoloto' )).to.eql( 'http://www.loteriasyapuestas.es/es/bonoloto' );
  });
});
