'use strict';

import mongoose from 'mongoose';
import Winner from '../model/winnerSchema';
import {GlobalHelper} from '../helpers/globalHelper';
let storage = require('../config/storage'),
globalHelper = new GlobalHelper();

module.exports = () => {
  require('../config/db')();

  console.log('instances file called bonolotoWinner');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    console.log('open connection bonolotoWinner');

    globalHelper.customFindOneMongoose(Winner, {lottoID: 'bonolotoWinner'}).then((err, winner) => {

      if (err) {
        console.log(err);
      } else {

        let bonoStorage = storage.getItem('bonoWinners'),
          oldWinner = winner.allWinners[4].winners,
          newWinner = bonoStorage.allWinners[4].winners;

          console.log(oldWinner, newWinner);

        if (oldWinner !== newWinner) {

          winner.date = globalHelper.hackyDate();
          winner.allWinners = bonoStorage.allWinners;
          winner.extraInfo = bonoStorage.extraInfo;
          winner.save((err, winner) => {
            if (err) {
              console.log(err);
            } else {
              console.log(winner, 'saved bonolotoWinner');
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
