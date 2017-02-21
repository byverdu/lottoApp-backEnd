
import mongoose from 'mongoose';
import { schemaHelper } from '../helpers/schemaHelper';
const Schema = mongoose.Schema;

/**
 * @class
 * Main mongoose Schema
 * @param {String} lottoID  - Unique identifier
 * @param {String} date     - Last result date
 * @param {String} extras   - Extra raffle numbers
 * @param {String} lastResult - Last result raffle
 * @param {String} mostRepeated - Most repeated numbers for that raffle
 * @param {Array} statistics - Array with objects for each raffle ball,
 * @param {Array} allResults - Storage for all the results
 * @param {Object} stars  - Just for Euromillions
 * @param {String} lastResult- Last result raffle
 * @param {String} mostRepeated - Most repeated numbers for that raffle
 * @param {Array} statistics - Array with objects for each raffle ball,
 * @param {Array} allResults - Storage for all the results
 */
const LottoSchema = new Schema({
  lottoID: String,
  date: String,
  extras: String,
  lastResult: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array,
  stars: {
    lastResult: String,
    mostRepeated: String,
    allResults: Array,
    statistics: Array
  }
});

/**
 * Setters for the Schema
 */

/**
 * Sets date property for Schema
 * @memberof LottoSchema
 * @return {String} - Formatted Date (this.date)
 * @see {@link SchemaHelper}.setNewFormatedDate
 */
LottoSchema.methods.setNewDate = function () {
  console.log( 'setNewDate called' );
  try {
    this.date = schemaHelper.setNewFormatedDate();
  } catch ( e ) {
    console.log( 'setNewDate exception called', e.message );
    this.date = new Date();
  }
};

/**
 * Sets lastResult property for Schema
 * @memberof LottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.lastResult)
 * @see {@link SchemaHelper}.setXrayArrayToSave
 */
LottoSchema.methods.setLastResult = function ( array ) {
  this.lastResult = schemaHelper.setXrayArrayToSave( array );
  return this.lastResult;
};

/**
 * Sets last result extras for Schema
 * @memberof LottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.extras)
 * @see {@link SchemaHelper}.modifyExtras
 */
LottoSchema.methods.setExtras = function ( array ) {
  this.extras = schemaHelper.modifyExtras( array );
  return this.extras;
};

/**
 * Sets last result stars for Schema and euromillions instance
 * @memberof LottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.stars.lastResult)
 */
LottoSchema.methods.setLastResultStars = function ( array ) {
  this.stars.lastResult = this.setExtras( array );
  return this.stars.lastResult;
};

/**
 * Sets most repeated values for a lotto kind, internally sets new statistics with color property
 * @memberof LottoSchema
 * @param  {Integer} count - Number of balls for a raffle
 * @return {String} - String of numbers with the most repeated values for a raffle (mostRepeated)
 * @see {@link SchemaHelper}.findMostRepeatedValues
 * @see {@link SchemaHelper}.orderStringMostRepeated
 * @see {@link LottoSchema}.setStatisticsAfterColorSet
 */
LottoSchema.methods.setMostRepeated = function ( count ) {
  const mostRepeated = schemaHelper.findMostRepeatedValues( this.getStatistics(), count );

  this.mostRepeated = schemaHelper.orderStringMostRepeated( mostRepeated );
  this.statistics = this.setStatisticsAfterColorSet( this.getStatistics());

  return this.mostRepeated;
};

/**
 * Sets most repeated values for euro stars, internally sets new statistics with color property
 * @memberof LottoSchema
 * @param  {Integer} count - Number of balls for a raffle
 * @return {String}- String of numbers with the most repeated values for a raffle stars.mostRepeated
 * @see {@link SchemaHelper}.findMostRepeatedValues
 * @see {@link SchemaHelper}.orderStringMostRepeated
 * @see {@link LottoSchema}.setStatisticsAfterColorSet
 */
LottoSchema.methods.setMostRepeatedStars = function ( count ) {
  const mostRepeatedStars = schemaHelper.findMostRepeatedValues( this.getStatisticStars(), count );

  this.stars.mostRepeated = schemaHelper.orderStringMostRepeated( mostRepeatedStars );
  this.stars.statistics = this.setStatisticsAfterColorSet( this.getStatisticStars());

  return this.stars.mostRepeated;
};

/**
 * Sets all results by adding the las result every time
 * @memberof LottoSchema
 * @param  {String} lastResult - this.lastResult
 * @return {Array}             - this.allResults + lastResult
 */
LottoSchema.methods.setAllResults = function ( lastResult ) {
  return this.allResults.push( lastResult );
};

/**
 * Sets all stars by adding the las result every time
 * @memberof LottoSchema
 * @param  {String} lastResult - this.lastResult
 * @return {Array}             - this.allResults + lastResult
 */
LottoSchema.methods.setAllResultStars = function () {
  return this.stars.allResults.push( this.stars.lastResult );
};

/**
 * Sets first data for the statistics, internally calls this.getCountAllResults
 * @memberof LottoSchema
 * @param  {Array} array - All the result numbers as a single strings
 * @param  {String} kind - type of lotto to interact with
 * @return {Array}       - Array with objects (this.statistics)
 * @see {@link LottoSchema}.getCountAllResults
 */
LottoSchema.methods.setStatistics = function ( array, kind, totalNumberBalls ) {
  this.statistics = this.getCountAllResults( array, kind, totalNumberBalls );
  return this.statistics;
};

/**
 * Sets first data for the statistics, internally calls this.getCountAllResults
 * @memberof LottoSchema
 * @param  {Array} array - All the result stars as a single strings
 * @param  {String} kind - type of lotto to interact with
 * @return {Array}       - Array with objects (this.stars.statistics)
 * @see {@link LottoSchema}.getCountAllResults
 */
LottoSchema.methods.setStatisticStars = function ( array, kind, totalNumberBalls ) {
  this.stars.statistics = this.getCountAllResults( array, kind, totalNumberBalls );
  return this.stars.statistics;
};

/**
 * Sets new statistics with color property
 * @memberof LottoSchema
 * @param  {Array} array - Array of objects containing the previous statistics
 * @return {Array}       - Same array but with the new values
 * @see {@link SchemaHelper}.setColorPropertyStatistics
 */
LottoSchema.methods.setStatisticsAfterColorSet = function ( array ) {
  return schemaHelper.setColorPropertyStatistics( array );
};


/**
 * Getters for the Schema
 */

/**
 * Gets the last result
 * @memberof LottoSchema
 * @return {String} - this.lastResult
 */
LottoSchema.methods.getLastResult = function () {
  return this.lastResult;
};

/**
 * Gets all the results and formats them for a better data structure
 * @memberof LottoSchema
 * @return {Array} - allResults split for each single number as string and sorted in ascendent order
 */
LottoSchema.methods.getAllResults = function () {
  return schemaHelper.setAllResulstArrayToCount( this.allResults );
};

/**
 * Gets all the stars and formats them for a better data structure
 * @memberof LottoSchema
 * @return {Array} - stars.allResults split for each single number as string
 * and sorted in ascendent order
 */
LottoSchema.methods.getAllResultsStars = function () {
  return schemaHelper.setAllResulstArrayToCount( this.stars.allResults );
};

/**
 * Gets the total number of repetitions for every single number
 * @memberof LottoSchema
 * @param  {Array} array - Array to interact with, the value will depend on the 'kind' parameter
 * @param  {String} kind - The type of lotto
 * @return {Array}      - Array of objects with the total count for each number
 * @summary Internally calls getAllResults() or getAllResultsStars() depending on 'kind' parameter
 * @see {@link SchemaHelper}.setKindOfLotto
 * @see {@link SchemaHelper}.createObjectCount
 */
LottoSchema.methods.getCountAllResults = function ( array, kind, totalNumberBalls ) {
  const tempArray = schemaHelper.setKindOfLotto(
    array,
    kind,
    this.getAllResults(),
    this.getAllResultsStars()
  );
  const result = [];

  for ( let counter = 1; counter <= totalNumberBalls; counter++ ) {
    const newIndex = counter < 10 ? `0${counter}` : `${counter}`;
    const lengthCount = tempArray.filter( item => item === newIndex ).length;
    result.push( schemaHelper.createObjectCount( newIndex, lengthCount ));
  }

  return result;
};

/**
 * Gets the statistics
 * @memberof LottoSchema
 * @return {Object} - this.statistics
 */
LottoSchema.methods.getStatistics = function () {
  return this.statistics;
};

/**
 * Gets the stars statistics
 * @memberof LottoSchema
 * @return {Object} - this.stars.statistics
 */
LottoSchema.methods.getStatisticStars = function () {
  return this.stars.statistics;
};

module.exports = LottoSchema;
