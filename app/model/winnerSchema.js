'use strict';

import mongoose from 'mongoose';

let winnerSchema = mongoose.Schema({

  lottoID: String,
  date: String,
  allWinners: Array,
  extraInfo: Array
});

module.exports = mongoose.model('Winner', winnerSchema);
