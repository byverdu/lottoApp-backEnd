'use strict';

import mongoose from 'mongoose';
import Winner from '../model/winnerSchema';
import {GlobalHelper} from '../helpers/globalHelper';
let storage = require('../config/storage'),
globalHelper = new GlobalHelper();

module.exports = () => {
  require('../config/db')();

  console.log('instances file called primitivaWinner');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    console.log('open connection primitivaWinner');

    globalHelper.customFindOneMongoose(Winner, {lottoID: 'primitivaWinner'}, (err, winner) => {

      if (err) {
        console.log(err);
      } else {

        let primiStorage = storage.getItem('primiWinners'),
          oldWinner = winner.allWinners[4].winners,
          newWinner = primiStorage.allWinners[4].winners;

          console.log(oldWinner, newWinner);

        if (oldWinner !== newWinner) {

          winner.date = new Date();
          winner.allWinners = primiStorage.allWinners;
          winner.extraInfo = primiStorage.extraInfo;
          winner.save((err, winner) => {
            if (err) {
              console.log(err);
            } else {
              console.log(winner, 'saved primitivaWinner');
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
