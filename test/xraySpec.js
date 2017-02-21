import sinon from 'sinon';
import chai from 'chai';
import xray from 'x-ray';
const config = require( '../app/config/config' ).lotto.euromillions;
const { url, numbers, extras } = config;

const expect = chai.expect;
function xrayWrapper() {
  return new Promise(( resolve, reject ) => {

  });
}

describe( 'wrapper for xray web scrapper', () => {
  it( 'is defined', () => {
    expect( xrayWrapper ).not.to.eq( undefined );
  });
  it( 'is a Function', () => {
    expect( xrayWrapper ).to.be.instanceof( Function );
  });
  it( 'returns a Promise', () => {
    expect( xrayWrapper()).to.be.instanceof( Promise );
  });
});
