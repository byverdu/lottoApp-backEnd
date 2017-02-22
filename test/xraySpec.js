// initial setup
import sinon from 'sinon';
import chai from 'chai';
import globalXray from 'x-ray';
import xrayUtils from '../app/config/xray';
const util = require ('util');
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
  url,
  numbers,
  extras,
  sliceCountBall,
  sliceCountBallStar,
  lottoID
} = config;
const selectors = {
  numbers: [numbers],
  extras: [extras]
};
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
  it( 'has a getRaffle exported method', () => {
    expect( xrayUtils.getRaffle ).not.to.eq( undefined );
  });
  it( 'getRaffle accepts one string parameter', () => {
    spy = sinon.spy( xrayUtils, 'getRaffle' );
    xrayUtils.getRaffle( 'euromillions' );
    expect( spy ).to.have.been.calledOnce;
    expect( spy ).to.be.calledWithExactly( lottoID );
  });
  it( 'getRaffle returns a XrayWrapper promise', () => {
    const pending = xrayUtils.getRaffle( 'euromillions' );
    expect( util.inspect( pending )).to.eq( 'Promise { <pending> }' );
  });
});
