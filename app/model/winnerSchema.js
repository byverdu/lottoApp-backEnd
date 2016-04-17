// Schema for winners on each lottery
import mongoose from 'mongoose';

const winnerSchema = mongoose.Schema({
  lottoID: String,
  date: String,
  allWinners: Array,
  extraInfo: Array
});

module.exports = mongoose.model( 'Winner', winnerSchema );
