'use strict';
var mongoose = require('mongoose'),
  Helper = require('../helpers/helpers'),
  helper = new Helper();

var LottoSchema = mongoose.Schema({

  date: String
});

LottoSchema.methods.setNewDate = function() {
  console.log('setNewDate called');
  this.date = helper.newFormatedDate();
};

module.exports = LottoSchema;
