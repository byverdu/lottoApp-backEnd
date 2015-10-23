'use strict';

import { HelperDate, HelperString, HelperArray, HelperObject, HelperNumber } from './preHelpers';
var _Date = new HelperDate(),
  _String = new HelperString(),
  _Array = new HelperArray(),
  _Object = new HelperObject(),
  _Number = new HelperNumber(),
  fractionNumber = require('../config/config')().lotto.fractionNumber;

/**
 * @class
 * Helper Class that interacts with the Lotto Schema, uses other helpers.
 * References on each method
 */
export function SchemaHelper() {

  /**
   * Creates a new Spanish date
   * @memberof SchemaHelper
   * @return {String} - Spanish date.
   * @see {@link HelperDate}.buildSpanishDate()
   */
  this.setNewFormatedDate = () => {
    return _Date.buildSpanishDate();
  };

  /**
   * Formats array of numbers to a single String
   * @memberof SchemaHelper
   * @param  {Array} array - Array from Xray scrapper
   * @return {String}      - Ordered and concatenated String from the array values
   * @see {@link HelperString}.deleteWhiteSpace()
   * @see {@link HelperString}.addStringNumZero()
   * @see {@link HelperArray}.concatToSingleString()
   * @see {@link HelperArray}.sortArrayFromFirstToLast()
   */
  this.setXrayArrayToSave = (array) => {

    array.map((el, ind, arr) => {
      arr[ind] = _String.deleteWhiteSpace(arr[ind]);
      arr[ind] = _String.addStringNumZero(arr[ind]);

      return arr;
    });

    return _Array.concatToSingleString(_Array.sortArrayFromFirstToLast(array));
  };

  /**
   * Manipulates an array with strings separated by comma
   * @memberof SchemaHelper
   * @param  {Array} array - Every index contains a string with numbers separated by comma
   * @return {Array}      - Array containing all the values from the initial Array
   * @see {@link HelperArray}.splitArray()
   * @see {@link HelperArray}.sortArrayFromFirstToLast()
   * @example
   *console.log(SchemaHelper.setAllResulstArrayToCount(["07,09","37,40","18,28","30,30","34,40"]))
   * //[ '07', '09', '18', '28', '30', '30', '34', '37', '40', '40' ]
   */
  this.setAllResulstArrayToCount = (array) => {
    let tempArray = _Array.splitArray(array),
      result = [];

    tempArray.map((outerEl) => {
      outerEl.map((innerEl) => {
        result.push(innerEl);
      });
    });
    return _Array.sortArrayFromFirstToLast(result);
  };

  /**
   * Creates an object within the values passed
   * @memberof SchemaHelper
   * @param  {String} index - Number that represent each raffle ball
   * @param  {Integer} count - Repeated times that a ball appears
   * @return {Object}        - Formatted object with index and count properties with the respective values
   */
  this.createObjectCount = (index, count) => {
    return {'index': index, 'count': count};
  };

  /**
   * Finds most repeated values for a raffle game
   * @memberof SchemaHelper
   * @param  {Array} array - Array of objects with data from statistics
   * @param  {Integer} count - Number of balls for the raffle
   * @return {String}       - String made with numbers separated by comma with the same length than the count parameter
   * @see This method uses Helpers from {@link HelperArray} and {@link HelperObject}
   * @example
   * var statistics = [ { index: '12', count: 4 },{ index: '16', count: 3 },{ index: '23', count: 3 },{ index: '28', count: 3 },{ index: '15', count: 3 }]
   * console.log(SchemaHelper.findMostRepeatedValues(statistics, 3));
   * // '12,15,16'
   */
  this.findMostRepeatedValues = (array, count) => {
    let sortedArray = _Array.sortArrayByCount(array);
    let slicedArray = _Array.sliceArrayByCount(sortedArray, count);
    let extractedArray =  _Object.extractValueByIndex(slicedArray);

    return _Array.concatToSingleString(extractedArray);
  };

  /**
   * Sorts a string of numbers in ascendent order, splits the string then sorts it and at the end concats
   * @memberof SchemaHelper
   * @param  {String} string - unordered string of numbers
   * @return {String}        - ordered string of numbers
   * @see This method uses internally {@link HelperString}.orderString, {@link HelperArray}.sortArrayFromFirstToLast and {@link HelperArray}.concatToSingleString
   */
  this.orderStringMostRepeated = (string) => {
    return _String.orderString(string, _Array.sortArrayFromFirstToLast, _Array.concatToSingleString);
  };

  /**
   * Copycat from setXrayArrayToSave but for the extra info data
   * @memberof SchemaHelper
   * @param  {Array} array - Array from Xray scrapper
   * @return {String}      - Ordered and concatenated String from the array values
   */
  this.modifyExtras = (array) => {
      return this.setXrayArrayToSave(array);
  };

  /**
   * Modifies an Array of Objects by adding a new 'color' property, heavy internally use of other Helpers. Divides the array in 3 and to each third adds the 'green', 'orange' and 'red' properties respectively.
   * @memberof SchemaHelper
   * @param  {Array} array - Array of objects from the statistics
   * @return {Array}      - Single array with all the new properties populated
   * @see {@link HelperNumber}, {@link HelperObject}.setColorProperty and {@link HelperObject}.objectColorProperty
   */
  this.setColorPropertyStatistics = (array) => {
    let oneThird = _Number.findFractionNumber(array, fractionNumber),
      greenItems = array.splice(0, oneThird),
      orangeItems = array.splice(0, oneThird),
      redItems = array,
    result = [];

    _Object.setColorProperty(greenItems, _Object.objectColorProperty, 'green');
    _Object.setColorProperty(orangeItems, _Object.objectColorProperty, 'orange');
    _Object.setColorProperty(redItems, _Object.objectColorProperty, 'red');

    return result.concat(greenItems, orangeItems, redItems);
  };

  /**
   * Switch statement that assigns a get method to the 'array' parameter depending on the 'kind' parameter passed
   * @memberof SchemaHelper
   * @param  {Array} array    - Array of strings with all repeated balls
   * @param  {String} kind    - Kind of lotto
   * @param  {Function} lottoMethod - Gets all values for lotto
   * @param  {Function} starsMethod - Gets all values for lotto
   * @return {Array}                - Array containing the selection
   */
  this.setKindOfLotto = (array, kind, lottoMethod, starsMethod) => {
    switch (kind) {
      case 'lotto':
        array = lottoMethod;
        break;
      case 'stars':
        array = starsMethod;
        break;
    }
    return array;
  };

  return {
    setNewFormatedDate: this.setNewFormatedDate,
    setXrayArrayToSave: this.setXrayArrayToSave,
    setAllResulstArrayToCount: this.setAllResulstArrayToCount,
    createObjectCount: this.createObjectCount,
    findMostRepeatedValues: this.findMostRepeatedValues,
    orderStringMostRepeated: this.orderStringMostRepeated,
    modifyExtras: this.modifyExtras,
    setColorPropertyStatistics: this.setColorPropertyStatistics,
    setKindOfLotto: this.setKindOfLotto
  };
}
