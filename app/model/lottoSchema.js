
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
const lottoSchema = new Schema({
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
 * @memberof lottoSchema
 * @return {String} - Formatted Date (this.date)
 * @see {@link SchemaHelper}.setNewFormatedDate
 */
lottoSchema.methods.setNewDate = function () {
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
 * @memberof lottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.lastResult)
 * @see {@link SchemaHelper}.setXrayArrayToSave
 */
lottoSchema.methods.setLastResult = function ( array ) {
  this.lastResult = schemaHelper.setXrayArrayToSave( array );
  return this.lastResult;
};

/**
 * Sets last result extras for Schema
 * @memberof lottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.extras)
 * @see {@link SchemaHelper}.modifyExtras
 */
lottoSchema.methods.setExtras = function ( array ) {
  this.extras = schemaHelper.modifyExtras( array );
  return this.extras;
};

/**
 * Sets last result stars for Schema and euromillions instance
 * @memberof lottoSchema
 * @param  {Array} array - Array result from Xray
 * @return {String}      - Array converted to a single String (this.stars.lastResult)
 */
lottoSchema.methods.setLastResultStars = function ( array ) {
  this.stars.lastResult = this.setExtras( array );
  return this.stars.lastResult;
};

/**
 * Sets most repeated values for a lotto kind, internally sets new statistics with color property
 * @memberof lottoSchema
 * @param  {Integer} count - Number of balls for a raffle
 * @return {String} - String of numbers with the most repeated values for a raffle (mostRepeated)
 * @see {@link SchemaHelper}.findMostRepeatedValues
 * @see {@link SchemaHelper}.orderStringMostRepeated
 * @see {@link lottoSchema}.setStatisticsAfterColorSet
 */
lottoSchema.methods.setMostRepeated = function ( count ) {
  const mostRepeated = schemaHelper.findMostRepeatedValues( this.getStatistics(), count );

  this.mostRepeated = schemaHelper.orderStringMostRepeated( mostRepeated );
  const newStatistics = this.setStatisticsAfterColorSet( this.getStatistics());
  this.statistics = newStatistics;

  return this.mostRepeated;
};

/**
 * Sets most repeated values for euro stars, internally sets new statistics with color property
 * @memberof lottoSchema
 * @param  {Integer} count - Number of balls for a raffle
 * @return {String}- String of numbers with the most repeated values for a raffle stars.mostRepeated
 * @see {@link SchemaHelper}.findMostRepeatedValues
 * @see {@link SchemaHelper}.orderStringMostRepeated
 * @see {@link lottoSchema}.setStatisticsAfterColorSet
 */
lottoSchema.methods.setMostRepeatedStars = function ( count ) {
  const mostRepeated = schemaHelper.findMostRepeatedValues( this.getStatisticStars(), count );

  this.stars.mostRepeated = schemaHelper.orderStringMostRepeated( mostRepeated );
  const newStatistics = this.setStatisticsAfterColorSet( this.getStatisticStars());
  this.stars.statistics = newStatistics;

  return this.stars.mostRepeated;
};

/**
 * Sets all results by adding the las result every time
 * @memberof lottoSchema
 * @param  {String} lastResult - this.lastResult
 * @return {Array}             - this.allResults + lastResult
 */
lottoSchema.methods.setAllResults = function ( lastResult ) {
  return this.allResults.push( lastResult );
};

/**
 * Sets all stars by adding the las result every time
 * @memberof lottoSchema
 * @param  {String} lastResult - this.lastResult
 * @return {Array}             - this.allResults + lastResult
 */
lottoSchema.methods.setAllResultStars = function () {
  return this.stars.allResults.push( this.stars.lastResult );
};

/**
 * Sets first data for the statistics, internally calls this.getCountAllResults
 * @memberof lottoSchema
 * @param  {Array} array - All the result numbers as a single strings
 * @param  {String} kind - type of lotto to interact with
 * @return {Array}       - Array with objects (this.statistics)
 * @see {@link lottoSchema}.getCountAllResults
 */
lottoSchema.methods.setStatistics = function ( array, kind ) {
  this.statistics = this.getCountAllResults( array, kind );
  return this.statistics;
};

/**
 * Sets first data for the statistics, internally calls this.getCountAllResults
 * @memberof lottoSchema
 * @param  {Array} array - All the result stars as a single strings
 * @param  {String} kind - type of lotto to interact with
 * @return {Array}       - Array with objects (this.stars.statistics)
 * @see {@link lottoSchema}.getCountAllResults
 */
lottoSchema.methods.setStatisticStars = function ( array, kind ) {
  this.stars.statistics = this.getCountAllResults( array, kind );
  return this.stars.statistics;
};

/**
 * Sets new statistics with color property
 * @memberof lottoSchema
 * @param  {Array} array - Array of objects containing the previous statistics
 * @return {Array}       - Same array but with the new values
 * @see {@link SchemaHelper}.setColorPropertyStatistics
 */
lottoSchema.methods.setStatisticsAfterColorSet = function ( array ) {
  return schemaHelper.setColorPropertyStatistics( array );
};


/**
 * Getters for the Schema
 */

/**
 * Gets the last result
 * @memberof lottoSchema
 * @return {String} - this.lastResult
 */
lottoSchema.methods.getLastResult = function () {
  return this.lastResult;
};

/**
 * Gets all the results and formats them for a better data structure
 * @memberof lottoSchema
 * @return {Array} - allResults split for each single number as string and sorted in ascendent order
 */
lottoSchema.methods.getAllResults = function () {
  return schemaHelper.setAllResulstArrayToCount( this.allResults );
};

/**
 * Gets all the stars and formats them for a better data structure
 * @memberof lottoSchema
 * @return {Array} - stars.allResults split for each single number as string
 * and sorted in ascendent order
 */
lottoSchema.methods.getAllResultsStars = function () {
  return schemaHelper.setAllResulstArrayToCount( this.stars.allResults );
};

/**
 * Gets the total number of repetitions for every single number
 * @memberof lottoSchema
 * @param  {Array} array - Array to interact with, the value will depend on the 'kind' parameter
 * @param  {String} kind - The type of lotto
 * @return {Array}      - Array of objects with the total count for each number
 * @summary Internally calls getAllResults() or getAllResultsStars() depending on 'kind' parameter
 * @see {@link SchemaHelper}.setKindOfLotto
 * @see {@link SchemaHelper}.createObjectCount
 */
lottoSchema.methods.getCountAllResults = function ( array, kind ) {
  const tempArray = schemaHelper.setKindOfLotto(array, kind, this.getAllResults(), this.getAllResultsStars());
  const copyAllResults = tempArray.slice( 0 );
  const result = [];

  tempArray.forEach(( outerEl, outerInd, outerArr ) => {
    let count = 0;
    copyAllResults.forEach(( innerEl, innerInd, innerArr ) => {
      if ( outerArr[ outerInd ] === innerArr[ innerInd ]) {
        count++;
        delete innerArr[ innerInd ];
      }
    });
    if ( count > 0 ) {
      result.push( schemaHelper.createObjectCount( outerEl, count ));
    }
  });

  return result;
};

/**
 * Gets the statistics
 * @memberof lottoSchema
 * @return {Object} - this.statistics
 */
lottoSchema.methods.getStatistics = function () {
  return this.statistics;
};

/**
 * Gets the stars statistics
 * @memberof lottoSchema
 * @return {Object} - this.stars.statistics
 */
lottoSchema.methods.getStatisticStars = function () {
  return this.stars.statistics;
};

module.exports = mongoose.model( 'Lotto', lottoSchema );
