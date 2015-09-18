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
  it('#Helper.prepareArrayXrayToSave, is defined', () => {
    expect(helper.prepareArrayXrayToSave).to.be.a('Function');
  });
  it('#Helper.prepareArrayXrayToSave(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', () => {
    expect(helper.prepareArrayXrayToSave(['34', '9', '23',' 7', '5'])).to.eq('05,07,09,23,34');
  });
});
