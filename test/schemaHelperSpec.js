/*global before, it, describe*/
'use strict';

import { SchemaHelper } from '../app/helpers/schemaHelper';
import chai from 'chai';

var data = require('./sampleData')(),
expect = chai.expect,
  schemaHelper;

before(()    => {
  schemaHelper     = new SchemaHelper();
});

describe('Helper and methods', () => {

  it('#Helper.setNewFormatedDate, is defined', () => {
    expect(schemaHelper.setNewFormatedDate).to.be.a('Function');
  });
  it('#Helper.setNewFormatedDate, returns a String', () => {
    expect(schemaHelper.setNewFormatedDate()).to.be.a('String').and.have.length.least(5);
  });
  it('#Helper.setXrayArrayToSave, is defined', () => {
    expect(schemaHelper.setXrayArrayToSave).to.be.a('Function');
  });
  it('#Helper.setXrayArrayToSave(["34", "9", "23"," 7", "5"]), returns "05,07,09,23,34"', () => {
    expect(schemaHelper.setXrayArrayToSave(['34', '9', '23',' 7', '5'])).to.eq('05,07,09,23,34');
  });
  it('#Helper.setAllResulstArrayToCount, is defined', () => {
    expect(schemaHelper.setAllResulstArrayToCount).to.be.a('Function');
  });
  it('#Helper.setAllResulstArrayToCount(), returns an instance of []', () => {
    expect(schemaHelper.setAllResulstArrayToCount(data.allResultShort)).to.be.an('Array');
  });
  it('#Helper.setAllResulstArrayToCount(array), returns [] with sorted and single Strings', () => {
    expect(schemaHelper.setAllResulstArrayToCount(data.allResultShort)).to.eql(['01', '02', '11', '15', '18', '28', '29', '30', '30', '31', '32', '34', '35', '36', '37', '40', '40', '45']);
  });
  it('#Helper, has a createObjectCount method', () => {
    expect(schemaHelper.createObjectCount).not.to.equal(undefined);
  });
  it('#Helper.createObjectCount(index, count) returns {index: "12",count: 4}', () => {
    expect(schemaHelper.createObjectCount()).to.have.keys('index', 'count');
  });
  it('#Helper, has a findMostRepeatedValues method', () => {
    expect(schemaHelper.findMostRepeatedValues).not.to.equal(undefined);
  });
  it('#Helper.findMostRepeatedValues(array) returns index value for most repeated', () => {
    expect(schemaHelper.findMostRepeatedValues(data.allResultLongObjCounted, data.sliceCountBall)).to.eql('12,15,16,23,28,49');
  });
  it('#Helper, has a orderStringMostRepeated method', () => {
    expect(schemaHelper.orderStringMostRepeated).not.to.equal(undefined);
  });
  it('#Helper.orderStringMostRepeated(index, count) returns {index: "12",count: 4}', () => {
    expect(schemaHelper.orderStringMostRepeated('11,05,28,03,10')).to.eq('03,05,10,11,28');
  });
  it('#Helper.modifyExtras, is defined', () => {
    expect(schemaHelper.modifyExtras).to.be.a('Function');
  });
  it('#Helper.modifyExtras(["9","7"]), returns "07,09"', () => {
    expect(schemaHelper.modifyExtras(['9','7'])).to.be.eq('07,09');
  });
  it('#Helper.setColorPropStatistics, is defined', () => {
    expect(schemaHelper.setColorPropStatistics).to.be.a('Function');
  });
  it('#Helper.setColorPropStatistics(({[ index: "12", count: 4 },..]), returns [{ index: "12", count: 4, color: "greenItem"}...]', () => {
    var result = schemaHelper.setColorPropStatistics(data.allResultLongObjOrdered, data.fraction);
    expect(result[0]).to.contain({ index: '12', count: 4, color: 'greenItem' });
    expect(result[result.length - 1]).to.contain({ index: '19', count: 1, color: 'redItem' });
  });
});
