// initial setup
import sinon from 'sinon';
import chai from 'chai';
import globalXray from 'x-ray';
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
  sliceCountBallStar
} = config;
const selectors = {
  numbers: [numbers],
  extras: [extras]
};
let xrayWrapper;

beforeEach(() => {
  xrayWrapper = new XrayWrapper();
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
    const spy = sinon.spy( xrayWrapper, 'getValues' );
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
