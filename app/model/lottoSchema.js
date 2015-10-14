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
  allResults: Array,
  stars: {
    lastResult: String,
    mostRepeated: String,
    allResults: Array,
    statistics: Array
  }
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

lottoSchema.methods.setLastResultStars = function(array) {
  this.stars.lastResult = this.setExtras(array);
  return this.stars.lastResult;
};

lottoSchema.methods.getLastResult = function(){
  return this.lastResult;
};

lottoSchema.methods.setMostRepeated = function(count) {
  let newStatistics,
    mostRepeated = schemaHelper.findMostRepeatedValues(this.getStatistics(), count);

  this.mostRepeated = schemaHelper.orderStringMostRepeated(mostRepeated);
  newStatistics = this.setStatisticsAfterColorSet(this.getStatistics());
  this.statistics = newStatistics;

  return this.mostRepeated;
};

lottoSchema.methods.setMostRepeatedStars = function(count) {
  let newStatistics,
  mostRepeated = schemaHelper.findMostRepeatedValues(this.getStatisticStars(), count);

  this.stars.mostRepeated = schemaHelper.orderStringMostRepeated(mostRepeated);
  newStatistics = this.setStatisticsAfterColorSet(this.getStatisticStars());
  this.stars.statistics = newStatistics;

  return this.stars.mostRepeated;
};

lottoSchema.methods.setAllResults = function(lastResult) {
  return this.allResults.push(lastResult);
};

lottoSchema.methods.setStatisticsAfterColorSet = function(array){
  // console.log(schemaHelper.setColorPropStatistics(array),'schemaHelper.setColorPropStatistics(array)');
  return schemaHelper.setColorPropStatistics(array);
};

lottoSchema.methods.setAllResultStars = function() {
  return this.stars.allResults.push(this.stars.lastResult);
};

lottoSchema.methods.getAllResults = function() {
  return schemaHelper.setAllResulstArrayToCount(this.allResults);
};

lottoSchema.methods.getAllResultsStars = function() {
  return schemaHelper.setAllResulstArrayToCount(this.stars.allResults);
};

lottoSchema.methods.getCountAllResults = function(array, kind) {

  switch (kind) {
    case 'lotto':
      array = this.getAllResults();
      break;
    case 'stars':
      array = this.getAllResultsStars();
      break;
  }
  var copyAllResults = array.slice(0),
    result = [];

  array.forEach((outerEl, outerInd, outerArr) => {
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

lottoSchema.methods.setStatistics = function(array, string){
	this.statistics = this.getCountAllResults(array, string);
	return this.statistics;
};

lottoSchema.methods.setStatisticStars = function(array, string){
	this.stars.statistics = this.getCountAllResults(array, string);
	return this.stars.statistics;
};

lottoSchema.methods.getStatistics = function(){
	return this.statistics;
};

lottoSchema.methods.getStatisticStars = function(){
	return this.stars.statistics;
};

module.exports = mongoose.model('Lotto', lottoSchema);
