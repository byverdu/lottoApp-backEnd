'use strict';

import mongoose from 'mongoose';
import Winner from '../model/winnerSchema';
import {GlobalHelper} from '../helpers/globalHelper';
let storage = require('../config/storage'),
globalHelper = new GlobalHelper();

module.exports = () => {
  require('../config/db')();

  console.log('instances file called euromillionsWinner');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    console.log('open connection euromillionsWinner');

    globalHelper.customFindOneMongoose(Winner, {lottoID: 'euromillionsWinner'}, (err, winner) => {

      if (err) {
        console.log(err);
      } else {

        let euroStorage = storage.getItem('euroWinners'),
          oldWinner = winner.allWinners[4].winners,
          newWinner = euroStorage.allWinners[4].winners;

          console.log(oldWinner, newWinner);

        if (oldWinner !== newWinner) {

          winner.date = globalHelper.hackyDate();
          winner.allWinners = euroStorage.allWinners;
          winner.extraInfo = euroStorage.extraInfo;
          winner.save((err, winner) => {
            if (err) {
              console.log(err);
            } else {
              console.log(winner, 'saved euromillionsWinner');
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
