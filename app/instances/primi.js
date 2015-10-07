'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {Helper} from '../helpers/helpers';
var config = require('../config/config');

require('../config/db');

console.log('instances file called primitiva');

var configPrimi = config().lotto.primitiva,
  db = mongoose.connection,
  JSONdata = require('../json/primi'),
  helper = new Helper();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection primitiva');

  helper.customFindOneMongoose(Lotto, { lottoID: 'primitiva' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition primitiva');

      let oldXrayValue = helper.setXrayArrayToSave(JSONdata.numbers),
        storedLastResult = lotto.getLastResult();

      if (oldXrayValue !== storedLastResult) {

        lotto.setNewDate();
        lotto.setLastResult(JSONdata.numbers);
        lotto.setAllResults(lotto.lastResult);
        lotto.setStatistics();
        lotto.setMostRepeated(configPrimi.sliceCountBall);
        lotto.save((err, lotto) => {
          if (err) {
            console.log(err);
          } else {
            console.log(lotto, 'inside if condition primitiva');
          }
        });
      }
    }
  });
});
