/* global describe, it*/
const chai = require( 'chai' );
const expect = chai.expect;
const config = require( '../app/config/config' );

describe( 'Configuration file', () => {
  it( 'Is defined', () => {
    expect( config ).not.to.equal( undefined );
  });
  it( 'It has a "globals" property that is an object with global settings', () => {
    expect( config ).to.have.property( 'database' ).and.is.an( 'Object' );
  });
  it( 'mongoUrl is a property for "globals"', () => {
    expect( config.database ).to.have.deep.property( 'development' ).and.is.a( 'String' );
  });
  it( 'It has a "lotto" property that is an object with lotto settings', () => {
    expect( config ).to.have.property( 'lotto' ).and.is.an( 'Object' );
  });
  it( 'euromillions is a property for "lotto"', () => {
    expect( config.lotto ).to.have.deep.property( 'euromillions' ).and.is.an( 'Object' );
  });
  it( 'primitiva is a property for "lotto"', () => {
    expect( config.lotto ).to.have.deep.property( 'primitiva' ).and.is.an( 'Object' );
  });
  it( 'bonoloto is a property for "lotto"', () => {
    expect( config.lotto ).to.have.deep.property( 'bonoloto' ).and.is.an( 'Object' );
  });
});
