'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {Helper} from '../helpers/helpers';
var config = require('../config/config');

require('../config/db');

console.log('instances file called bonoloto');

var configBono = config().lotto.bonoloto,
  db = mongoose.connection,
  JSONdata = require('../json/bono'),
  helper = new Helper();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection bonoloto');

  helper.customFindOneMongoose(Lotto, { lottoID: 'bonoloto' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition bonoloto');

      let oldXrayValue = helper.setXrayArrayToSave(JSONdata.numbers),
        storedLastResult = lotto.getLastResult();

      if (oldXrayValue !== storedLastResult) {

        lotto.setNewDate();
        lotto.setLastResult(JSONdata.numbers);
        lotto.setExtras(JSONdata.extras);
        lotto.setAllResults(lotto.lastResult);
        lotto.setStatistics();
        lotto.setMostRepeated(configBono.sliceCountBall);
        lotto.save((err, lotto) => {
          if (err) {
            console.log(err);
          } else {
            console.log(lotto, 'inside if condition bonoloto');
          }
        });
      }
    }
  });
});
