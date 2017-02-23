
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
  it( '#Helper, has a getSelectorsRaffle method', () => {
    expect( globalHelper.getSelectorsRaffle )
      .not.to.equal( undefined );
  });
  it( '#Helper.getSelectorsRaffle is a function', () => {
    expect( globalHelper.getSelectorsRaffle )
      .to.be.a( 'function' );
  });
  it( '#Helper.getSelectorsRaffle returns an object', () => {
    expect( globalHelper.getSelectorsRaffle( 'bonoloto' ))
      .to.have.property( 'numbers' ).and.is.a( 'array' );
    expect( globalHelper.getSelectorsRaffle( 'bonoloto' ))
      .to.have.property( 'extras' ).and.is.a( 'array' );
  });
  it( '#Helper.getSelectorsRaffle is called with a lottoID and returns numbers and extras props', () => {
    const spy = sinon.spy( globalHelper, 'getSelectorsRaffle' );
    globalHelper.getSelectorsRaffle( 'bonoloto' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'bonoloto' );
    expect( spy ).to.have.returned({
      numbers: ['.cuerpoRegionIzq li'],
      extras: ['.cuerpoRegionDerecha li']
    });
  });
  it( '#Helper, has a getRaffleUrlForType method', () => {
    expect( globalHelper.getRaffleUrlForType )
      .not.to.equal( undefined );
  });
  it( '#Helper.getRaffleUrlForType is a function', () => {
    expect( globalHelper.getRaffleUrlForType )
      .to.be.a( 'function' );
  });
  it( '#Helper.getRaffleUrlForType returns a string', () => {
    expect( globalHelper.getRaffleUrlForType( 'url', 'primitiva' )).to.be.a( 'String' );
  });
  it( '#Helper.getRaffleUrlForType returns the url for the raffle used as parameter', () => {
    const spy = sinon.spy( globalHelper, 'getRaffleUrlForType' );
    globalHelper.getRaffleUrlForType( 'url', 'primitiva' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'url', 'primitiva' );
    expect( spy ).to.have.returned( 'http://www.loteriasyapuestas.es/es/la-primitiva' );
  });
  it( '#Helper.getRaffleUrlForType returns the url for the raffle used as parameter', () => {
    expect( globalHelper.getRaffleUrlForType( 'urlPrice', 'bonoloto' )).to.eql( 'http://bonoloto.combinacionganadora.com/' );
  });
  it( '#Helper, has a getSelectorsWinnersRaffle method', () => {
    expect( globalHelper.getSelectorsWinnersRaffle )
      .not.to.equal( undefined );
  });
  it( '#Helper.getSelectorsWinnersRaffle is a function', () => {
    expect( globalHelper.getSelectorsWinnersRaffle )
      .to.be.a( 'function' );
  });
  it( '#Helper.getSelectorsWinnersRaffle returns an object', () => {
    expect( globalHelper.getSelectorsWinnersRaffle( 'bonoloto' ))
      .to.have.property( 'categoryPrice' ).and.is.a( 'array' );
    expect( globalHelper.getSelectorsWinnersRaffle( 'bonoloto' ))
      .to.have.property( 'winnerPrice' ).and.is.a( 'array' );
    expect( globalHelper.getSelectorsWinnersRaffle( 'bonoloto' ))
      .to.have.property( 'extraInfoPrice' ).and.is.a( 'array' );
    expect( globalHelper.getSelectorsWinnersRaffle( 'bonoloto' ))
      .to.have.property( 'moneyPrice' ).and.is.a( 'array' );
  });
  it( '#Helper.getSelectorsWinnersRaffle is called with a lottoID and returns numbers and extras props', () => {
    const spy = sinon.spy( globalHelper, 'getSelectorsWinnersRaffle' );
    globalHelper.getSelectorsWinnersRaffle( 'bonoloto' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'bonoloto' );
    expect( spy ).to.have.returned({
      categoryPrice: ['.escrutinioBox_premios .col1'],
      winnerPrice: ['.escrutinioBox_premios .col2'],
      extraInfoPrice: ['.escrutinioBox_premios .ctrlFloat'],
      moneyPrice: ['.escrutinioBox_premios .col3']
    });
    spy.restore();
  });
  it( '#Helper.getSelectorsWinnersRaffle returns different props if lottoID is "euromillions"', () => {
    const spy = sinon.spy( globalHelper, 'getSelectorsWinnersRaffle' );
    globalHelper.getSelectorsWinnersRaffle( 'euromillions' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.have.been.calledWithExactly( 'euromillions' );
    expect( spy ).to.have.returned({
      categoryPrice: ['.escrutinioBox_premios .col1'],
      winnerPrice: ['.escrutinioBox_premios .col2'],
      extraInfoPrice: ['.escrutinioBox_premios .ctrlFloat'],
      moneyPrice: ['.escrutinioBox_premios .col4'],
      spanishWinners: ['.escrutinioBox_premios .col3']
    });
  });
});
