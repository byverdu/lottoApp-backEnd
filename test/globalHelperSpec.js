
import { GlobalHelper } from '../app/helpers/globalHelper';
import chai from 'chai';
const data = require( './sampleData' )();

const expect = chai.expect;
let globalHelper;

before(() => {
  globalHelper = new GlobalHelper();
});

describe( 'Helper and methods', () => {
  it( '#Helper, has a compare2arrays method', () => {
    expect( globalHelper.compare2arrays ).not.to.equal( undefined );
  });
  it( '#Helper.compare2arrays() returns true when they are equal', () => {
    expect( globalHelper.compare2arrays(data.compare2arraysOne, data.compare2arraysTwo, data.sliceCountBall)).to.eq(true);
  });
  it( '#Helper.compare2arrays() returns false when they are not equal', () => {
    expect( globalHelper.compare2arrays(data.compare2arraysOne, data.compare2arraysThree, data.sliceCountBall)).to.eq(false);
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
});
