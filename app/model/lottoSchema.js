'use strict';

import mongoose from 'mongoose';
import {
  Helper
}
from '../helpers/helpers';

var helper, lottoSchema, Lotto;
helper= new Helper();
lottoSchema = mongoose.Schema({

  lottoID: String,
  date: String,
  lastResult: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array
});

lottoSchema.methods.setNewDate = function() {
  console.log('setNewDate called');
  try {
    this.date = helper.setNewFormatedDate();
  } catch (e) {
    console.log('setNewDate exception called', e.message);
    this.date = new Date();
  }
};

lottoSchema.methods.setLastResult = function(array) {
  this.lastResult = helper.setXrayArrayToSave(array);

  return this.lastResult;
};

lottoSchema.methods.getLastResult = function(){
  return this.lastResult;
};

lottoSchema.methods.setMostRepeated = function(count) {
  this.mostRepeated = helper.findMostRepeatedValues(this.getStatistics(), count);
  return this.mostRepeated;
};

lottoSchema.methods.setAllResults = function(lastResult) {
  return this.allResults.push(lastResult);
};

lottoSchema.methods.getAllResults = function() {
  return helper.setAllResulstArrayToCount(this.allResults);
};

lottoSchema.methods.getCountAllResults = function() {
  var allResults = this.getAllResults(),
    copyAllResults = allResults.slice(0),
    result = [];

  allResults.forEach((outerEl, outerInd, outerArr) => {
    var count = 0;
    copyAllResults.forEach((innerEl, innerInd, innerArr) => {

      if (outerArr[outerInd] === innerArr[innerInd]) {
        count++;
        delete innerArr[innerInd];
      }
    });
    if (count > 0) {
      result.push(helper.createObjectCount(outerEl, count));
    }
  });

	return result;
};

lottoSchema.methods.setStatistics = function(){
	this.statistics = this.getCountAllResults();
	return this.statistics;
};

lottoSchema.methods.getStatistics = function(){
	return this.statistics;
};

module.exports = mongoose.model('Lotto', lottoSchema);
