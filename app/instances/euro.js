'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');

require('../config/db');

console.log('instances file called euromillions');

var configEuro = config().lotto.euromillions,
  db = mongoose.connection,
  JSONdata = require('../json/euro'),
  globalHelper = new GlobalHelper(),
  schemaHelper = new SchemaHelper();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection euromillions');

  globalHelper.customFindOneMongoose(Lotto, { lottoID: 'euromillions' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition euromillions');

      let oldXrayValue = schemaHelper.setXrayArrayToSave(JSONdata.numbers),
        storedLastResult = lotto.getLastResult();

      if (oldXrayValue !== storedLastResult) {

        lotto.setNewDate();
        lotto.setLastResult(JSONdata.numbers);
        lotto.setAllResults(lotto.lastResult);
        lotto.setExtras(JSONdata.extras);
        lotto.setStatistics(this.getAllResults, 'lotto');
        lotto.setMostRepeated(configEuro.sliceCountBall);

        lotto.setLastResultStars(JSONdata.extras);
        lotto.setAllResultStars();
        lotto.setStatisticStars(this.getAllResultsStars, 'stars');
        lotto.setMostRepeatedStars(configEuro.sliceCountBallStar);
        lotto.save((err, lotto) => {
          if (err) {
            console.log(err);
          } else {
            console.log(lotto, 'inside if condition euromillions');
          }
        });
      }
    }
  });
});
