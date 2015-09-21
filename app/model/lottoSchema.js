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

LottoSchema.methods.setStatisticsCount = function(){
  var values = this.getAllResults(),
   copy = values.slice(0,-1),
   result = [];

   values.map( (outerEl, outerInd, outerArr) => {
     var count = 0;
     copy.map( (innerEl, innerInd, innerArr) => {

       if(outerArr[outerInd] == innerArr[innerInd]){
         count++;
         if(count>0){
           result.push(helper.createObjectCount(outerEl, count));
         }
       }

     });
   });

  return result;
};

module.exports = LottoSchema;
