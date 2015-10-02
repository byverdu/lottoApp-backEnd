'use strict';

import mongoose from 'mongoose';
var Lotto = require('../model/lottoSchema');
import config from '../config/config';
import {
  Helper
}
from '../helpers/helpers';
var configBono = config().lotto.bonoloto,
  // bono = new Lotto({lottoID: configBono.lottoID}),
  db = mongoose.connection;
  var JSONdata = require('../json/bono');
var helper = new Helper();
// bono.setNewDate();
// console.log(Lotto, 'jojoiuhnjknkjnjnkjnknjk');
// console.log(bono, 'outside');

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
      // lotto.setNewDate();
      console.log(lotto.lastResult, 'outside if condition');
      // data.allResultLong.map( el => {
      //   lotto.setAllResults(el);
      // });
      let oldXrayValue = helper.setXrayArrayToSave(JSONdata.numbers),
          storedLastResult = lotto.getLastResult();

      if (oldXrayValue !== storedLastResult){

        lotto.setLastResult(JSONdata.numbers);
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
