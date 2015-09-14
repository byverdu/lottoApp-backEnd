/*global before, it, describe*/
'use strict';

var chai     = require('chai'),
  expect     = chai.expect,
  Helper     = require('../app/helpers/helpers'),
  HelperDate = require('../app/helpers/helperDate'),
  helper,
  helperDate;

before(()    => {
  helper     = new Helper();
  helperDate = new HelperDate();
});

describe('Helper and methods', () => {

  it('#Helper.newFormatedDate, is defined', () => {
    expect(helper.newFormatedDate).to.be.a('Function');
  });
  it('#Helper.newFormatedDate, returns a String', () => {
    expect(helper.newFormatedDate()).to.be.a('String').and.have.length.least(5);
  });
  it('#Helper.addStringNumZero, is defined', () => {
    expect(helper.addStringNumZero).to.be.a('Function');
  });
  it('#Helper.addStringNumZero, returns "08" for 8', () => {
    expect(helper.addStringNumZero('8')).to.eq('08');
  });
});
