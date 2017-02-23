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
  xit( 'has a getWinnersRaffle exported method', () => {
    expect( xrayUtils.getWinnersRaffle ).not.to.eq( undefined );
  });
  xit( 'getWinnersRaffle accepts one string parameter', () => {
    spy = sinon.spy( xrayUtils, 'getWinnersRaffle' );
    xrayUtils.getWinnersRaffle( 'euromillions' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.be.calledWithExactly( lottoID );
  });
  xit( 'getWinnersRaffle returns a XrayWrapper promise', () => {
    const pending = xrayUtils.getWinnersRaffle( 'euromillions' );
    expect( util.inspect( pending )).to.eq( 'Promise { <pending> }' );
  });
});
