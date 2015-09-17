/*global before, it, xit, describe*/
'use strict';

import { Helper } from '../app/helpers/helpers';
import chai from 'chai';

var expect     = chai.expect,
  helper;

before(()    => {
  helper     = new Helper();
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
  xit('#Helper.addStringNumZero, returns "08" for 8', () => {
    expect(helper.addStringNumZero('8')).to.eq('08');
  });
});
