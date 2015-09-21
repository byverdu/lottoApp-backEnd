/*global before, it, xit, describe*/
'use strict';

import { Helper } from '../app/helpers/helpers';
import chai from 'chai';

var data = require('./sampleData')(),
expect     = chai.expect,
  helper;

before(()    => {
  helper     = new Helper();
});

describe('Helper and methods', () => {

  it('#Helper.setNewFormatedDate, is defined', () => {
    expect(helper.setNewFormatedDate).to.be.a('Function');
  });
  it('#Helper.setNewFormatedDate, returns a String', () => {
    expect(helper.setNewFormatedDate()).to.be.a('String').and.have.length.least(5);
  });
  it('#Helper.setXrayArrayToSave, is defined', () => {
    expect(helper.setXrayArrayToSave).to.be.a('Function');
  });
  it('#Helper.setXrayArrayToSave(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', () => {
    expect(helper.setXrayArrayToSave(['34', '9', '23',' 7', '5'])).to.eq('05,07,09,23,34');
  });
  it('#Helper.setAllResulstArrayToCount, is defined', () => {
    expect(helper.setAllResulstArrayToCount).to.be.a('Function');
  });
  it('#Helper.setAllResulstArrayToCount(), returns an instance of []', () => {
    expect(helper.setAllResulstArrayToCount(data.allResultShort)).to.be.an('Array');
  });
  it('#Helper.setAllResulstArrayToCount(array), returns [] with sorted and single Strings', () => {
    expect(helper.setAllResulstArrayToCount(data.allResultShort)).to.eql(['01', '02', '11', '15', '18', '28', '29', '30', '30', '31', '32', '34', '35', '36', '37', '40', '40', '45']);
  });
  it('#Helper, has a createObjectCount method', () => {
    expect(helper.createObjectCount).not.to.equal(undefined);
  });
  it('#Helper.createObjectCount(index, count) returns {index: "12",count: 4}', () => {
    expect(helper.createObjectCount()).to.have.keys('index', 'count');
  });
});
