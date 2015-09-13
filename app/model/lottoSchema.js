'use strict';
var mongoose = require('mongoose'),
  Helper = require('../helpers/helpers'),
  helper = new Helper();

var LottoSchema = mongoose.Schema({

  date: String,
  lastResult: Array,
  mostRepeated: Array,
  statistics: Array
});

LottoSchema.methods.setNewDate = function() {
  console.log('setNewDate called');
  try {
    this.date = helper.newFormatedDate();
  } catch (e) {
    console.log('setNewDate exception', e.message);
    this.date = new Date();
  }
};

module.exports = LottoSchema;
