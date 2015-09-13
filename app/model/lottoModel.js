'use strict';

var lottoSchema = require('./lottoSchema');
var mongoose = require('mongoose');
var Lotto = mongoose.model('Lotto', lottoSchema);

module.exports = Lotto;
