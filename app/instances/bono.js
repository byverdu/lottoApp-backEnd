'use strict';

import mongoose from 'mongoose';
var Lotto = require('../model/lottoSchema');
import config from '../config/config';
import {
  Helper
}
from '../helpers/helpers';
var configBono = config().lotto.bonoloto,
  db = mongoose.connection,
  JSONdata = require('../json/bono'),
  helper = new Helper();

var test = (lottoID, callback) => {

  Lotto.findOne({lottoID: lottoID}, (err, lotto) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, lotto);
    }
  });
};

console.log(JSONdata);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection');

  test('bonoloto', (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition');

      let oldXrayValue = helper.setXrayArrayToSave(JSONdata.numbers),
          storedLastResult = lotto.getLastResult();

      if (oldXrayValue !== storedLastResult){

        lotto.date = new Date();
        lotto.setLastResult(JSONdata.numbers);
        lotto.setAllResults(lotto.lastResult);
        lotto.setStatistics();
        lotto.setMostRepeated(configBono.sliceCountBall);
        lotto.save( (err, lotto) => {
          if (err) {
            console.log(err);
          } else {
            console.log(lotto, 'inside if condition');
          }
        });
      }
    }
  });
});
