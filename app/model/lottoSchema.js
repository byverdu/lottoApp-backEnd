'use strict';

import mongoose from 'mongoose';
import {
  SchemaHelper
}
from '../helpers/schemaHelper';

var schemaHelper, lottoSchema;
schemaHelper = new SchemaHelper();
lottoSchema = mongoose.Schema({

  lottoID: String,
  date: String,
  extras: String,
  lastResult: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array
});

lottoSchema.methods.setNewDate = function() {
  console.log('setNewDate called');
  try {
    this.date = schemaHelper.setNewFormatedDate();
  } catch (e) {
    console.log('setNewDate exception called', e.message);
    this.date = new Date();
  }
};

lottoSchema.methods.setLastResult = function(array) {
  this.lastResult = schemaHelper.setXrayArrayToSave(array);
  return this.lastResult;
};

lottoSchema.methods.setExtras = function(array) {
  this.extras = schemaHelper.modifyExtras(array);
  return this.extras;
};

lottoSchema.methods.getLastResult = function(){
  return this.lastResult;
};

lottoSchema.methods.setMostRepeated = function(count) {
  let mostRepeated = schemaHelper.findMostRepeatedValues(this.getStatistics(), count);
  this.mostRepeated = schemaHelper.orderStringMostRepeated(mostRepeated);

  return this.mostRepeated;
};

lottoSchema.methods.setAllResults = function(lastResult) {
  return this.allResults.push(lastResult);
};

lottoSchema.methods.getAllResults = function() {
  return schemaHelper.setAllResulstArrayToCount(this.allResults);
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
      result.push(schemaHelper.createObjectCount(outerEl, count));
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
