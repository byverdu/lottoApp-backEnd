'use strict';

import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
var config = require('../config/config');

require('../config/db');

console.log('instances file called bonoloto');

var configBono = config().lotto.bonoloto,
  db = mongoose.connection,
  JSONdata = require('../json/bono'),
  globalHelper = new GlobalHelper(),
  schemaHelper = new SchemaHelper();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection bonoloto');

  globalHelper.customFindOneMongoose(Lotto, { lottoID: 'bonoloto' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {
      console.log(lotto.lastResult, 'outside if condition bonoloto');

      let oldXrayValue = schemaHelper.setXrayArrayToSave(JSONdata.numbers),
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
