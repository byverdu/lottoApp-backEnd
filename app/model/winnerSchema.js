// Schema for winners on each lottery
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WinnerSchema = new Schema({
  lottoID: String,
  date: String,
  allWinners: Array,
  extraInfo: Array
});

module.exports = WinnerSchema;
