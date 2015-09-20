'use strict';

import mongoose from 'mongoose';
import {
  Helper
}
from '../helpers/helpers';

var helper = new Helper();
var LottoSchema = mongoose.Schema({

  date: String,
  lastResult: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array
});

LottoSchema.methods.setNewDate = function() {
  console.log('setNewDate called');
  try {
    this.date = helper.setNewFormatedDate();
  } catch (e) {
  
    console.log('setNewDate exception called', e.message);
    this.date = new Date();
  }
};

LottoSchema.methods.setLastResult = function(array) {
  this.lastResult = helper.setXrayArrayToSave(array);

  return this.lastResult;
};

LottoSchema.methods.setMostRepeated = function() {

};

LottoSchema.methods.setAllResults = function(lastResult) {
  return this.allResults.push(lastResult);
};

LottoSchema.methods.getAllResults = function() {
  return helper.setAllResulstArrayToCount(this.allResults);
};

module.exports = LottoSchema;
