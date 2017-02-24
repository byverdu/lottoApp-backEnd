// initial setup
import sinon from 'sinon';
import chai from 'chai';
import globalXray from 'x-ray';
import xrayUtils from '../app/config/xray';
import { globalHelper } from '../app/helpers/globalHelper';
const util = require( 'util' );
const expect = chai.expect;
class XrayWrapper {
  getValues( urlRaffle, selector ) {
    return new Promise(( resolve, reject ) => {
      const xray = globalXray();

      xray( urlRaffle, selector )(( error, result ) => {
        if ( error ) {
          reject( error );
        } else {
          resolve( result );
        }
      });
    });
  }
}

// variables used
const config = require( '../app/config/config' ).lotto.euromillions;
const {
  sliceCountBall,
  sliceCountBallStar,
  lottoID
} = config;
const selectors = globalHelper.getSelectorsRaffle( lottoID );
const url = globalHelper.getRaffleUrlForType( 'url', lottoID );
let xrayWrapper;
let spy;

beforeEach(() => {
  xrayWrapper = new XrayWrapper();
});

after(() => {
  spy.restore();
});

describe( 'wrapper for xray web scrapper', () => {
  it( 'is defined', () => {
    expect( xrayWrapper ).not.to.eq( undefined );
  });
  it( 'is an instanceof XrayWrapper', () => {
    expect( xrayWrapper ).to.be.instanceof( XrayWrapper );
  });
  it( 'has a getValues property', () => {
    expect( xrayWrapper.getValues ).not.to.eq( undefined );
  });
  it( 'getValues returns a Promise', () => {
    expect( xrayWrapper.getValues()).to.be.instanceof( Promise );
  });
  it( 'will use a url parameter and a selector parameter', () => {
    spy = sinon.spy( xrayWrapper, 'getValues' );
    xrayWrapper.getValues( url, selectors );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.be.calledWithExactly( url, selectors );
  });
  it( 'the resolved Promise returns an Object with numbers and extras properties', () => {
    return xrayWrapper.getValues( url, selectors )
      .then( result => {
        expect( result ).to.have.property( 'numbers' )
          .to.be.instanceof( Array )
          .and.have.length( sliceCountBall );
        expect( result ).to.have.property( 'extras' )
          .to.be.instanceof( Array )
          .and.have.length( sliceCountBallStar );
      });
  });
});

describe( 'xrayUtils', () => {
  it( 'is defined', () => {
    expect( xrayUtils ).not.to.eq( undefined );
  });
  it( 'has a getRaffleInfo exported method', () => {
    expect( xrayUtils.getRaffleInfo ).not.to.eq( undefined );
  });
  it( 'getRaffleInfo accepts one string parameter', () => {
    spy = sinon.spy( xrayUtils, 'getRaffleInfo' );
    xrayUtils.getRaffleInfo( 'euromillions' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.be.calledWithExactly( lottoID );
  });
  it( 'getRaffleInfo returns a XrayWrapper promise', () => {
    const pending = xrayUtils.getRaffleInfo( 'euromillions' );
    expect( util.inspect( pending )).to.eq( 'Promise { <pending> }' );
  });
  it( 'has a getWinnersInfo exported method', () => {
    expect( xrayUtils.getWinnersInfo ).not.to.eq( undefined );
  });
  it( 'getWinnersInfo accepts one string parameter', () => {
    spy = sinon.spy( xrayUtils, 'getWinnersInfo' );
    xrayUtils.getWinnersInfo( 'euromillions' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.be.calledWithExactly( lottoID );
  });
  it( 'getWinnersInfo returns a XrayWrapper promise', () => {
    const pending = xrayUtils.getWinnersInfo( 'euromillions' );
    expect( util.inspect( pending )).to.eq( 'Promise { <pending> }' );
  });
  it( 'has a checkForEmptyPromise exported method', () => {
    expect( xrayUtils.checkForEmptyPromise ).not.to.eq( undefined );
  });
  it( 'checkForEmptyPromise returns a string', () => {
    expect( xrayUtils.checkForEmptyPromise()).to.be.a( 'String' );
  });
  it( 'checkForEmptyPromise returns empty string with correct selectors', function () {
    return xrayWrapper.getValues( url, selectors )
      .then( result => {
        spy = sinon.spy( xrayUtils, 'checkForEmptyPromise' );
        xrayUtils.checkForEmptyPromise( result );
        expect( spy ).to.have.returned( '' );
      });
  });
  it( 'checkForEmptyPromise returns the result property that is wrong', function () {
    const wrongSelectors = {
      numbers: ['lol'],
      extras: ['BFF']
    };
    spy.restore();
    return xrayWrapper.getValues( url, wrongSelectors )
      .then( result => {
        spy = sinon.spy( xrayUtils, 'checkForEmptyPromise' );
        xrayUtils.checkForEmptyPromise( result );
        expect( spy ).to.have.returned( 'numbers - extras' );
      });
  });
  it( 'checkForEmptyPromise returns the result property that is wrong', function () {
    const wrongSelector = {
      numbers: ['.cuerpoRegionIzq li'],
      extras: ['BFF']
    };
    spy.restore();
    return xrayWrapper.getValues( url, wrongSelector )
      .then( result => {
        spy = sinon.spy( xrayUtils, 'checkForEmptyPromise' );
        xrayUtils.checkForEmptyPromise( result );
        expect( spy ).to.have.returned( 'extras' );
      });
  });
});
