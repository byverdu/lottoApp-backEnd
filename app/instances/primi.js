'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {
  GlobalHelper
}
from '../helpers/globalHelper';
import {
  SchemaHelper
}
from '../helpers/schemaHelper';
var config = require('../config/config');

module.exports = () => {
  require('../config/db')();

  console.log('instances file called primitiva');

  var configPrimi = config().lotto.primitiva,
    db = mongoose.connection,
    JSONdata = require('../json/primi'),
    storage = require('../config/storage'),
    globalHelper = new GlobalHelper(),
    schemaHelper = new SchemaHelper();

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {


    console.log('open connection primitiva');

    globalHelper.customFindOneMongoose(Lotto, {
      lottoID: 'primitiva'
    }, (err, lotto) => {
      if (err) {
        console.log(err);
      } else {
        console.log(lotto.lastResult, 'outside if condition primitiva');

        let primiStorage = storage.getItem('primiNumbers'),
          storedLastResult = lotto.getLastResult(),
          newPrimiStorage = schemaHelper.setXrayArrayToSave(primiStorage);

        console.log(newPrimiStorage, 'newPrimiStorage');

        if (newPrimiStorage !== storedLastResult) {

          lotto.setNewDate();
          lotto.setLastResult(primiStorage);
          lotto.setExtras(JSONdata.extras);
          lotto.setAllResults(lotto.lastResult);
          lotto.setStatistics(lotto.getAllResults, 'lotto');
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
  setTimeout(() => {
    mongoose.disconnect();
  }, 1000);
};
