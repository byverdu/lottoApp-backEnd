'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
var configEuro = require('../config/config')().lotto.euromillions,
storage = require('../config/storage'),
globalHelper = new GlobalHelper(),
schemaHelper = new SchemaHelper();

module.exports = () => {
  console.log('instances file called euromillions');

  require('../config/db')();
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    console.log('open connection euromillions');

    globalHelper.customFindOneMongoose(Lotto, { lottoID: 'euromillions' }).then((err, lotto) => {
      if (err) {
        console.log(err);
      } else {
        console.log(lotto.lastResult, 'outside if condition euromillions');

        let euroStorage = storage.getItem('euroNumbers'),
          storedLastResult = lotto.getLastResult(),
          newEuroStorage = schemaHelper.setXrayArrayToSave(euroStorage.numbers);

        console.log(newEuroStorage, 'newEuroStorage');
        console.log(storedLastResult, 'storedLastResult');

        if (newEuroStorage !== storedLastResult) {

          lotto.setNewDate();
          lotto.setLastResult(euroStorage.numbers);
          lotto.setAllResults(lotto.lastResult);
          lotto.setExtras(euroStorage.extras);
          lotto.setStatistics(this.getAllResults, 'lotto');
          lotto.setMostRepeated(configEuro.sliceCountBall);

          lotto.setLastResultStars(euroStorage.extras);
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
      setTimeout(() => {
        mongoose.disconnect();
      }, 1000);
    });
  });
};
