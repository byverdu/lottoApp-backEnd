import { helperString as _String,
         helperDate as _Date,
         helperArray as _Array,
         helperObject as _Object,
         helperNumber as _Number
       } from './preHelpers';

const fractionNumber = require( '../config/config' ).lotto.fractionNumber;

/**
 * @class
 * Helper Class that interacts with the Lotto Schema, uses other helpers.
 * References on each method
 */
exports.schemaHelper = {
  /**
   * Creates a new Spanish date
   * @memberof SchemaHelper
   * @return {String} - Spanish date.
   * @see {@link HelperDate}.buildSpanishDate()
   */
  setNewFormatedDate() {
    return _Date.buildSpanishDate();
  },

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
  setXrayArrayToSave( array ) {
    const arrayReduced = array.reduce(( prev, current ) => {
      prev.push( _String.addStringNumZero( _String.deleteWhiteSpace( current )));
      return prev;
    }, []);
    return _Array.concatToSingleString( _Array.sortArrayFromFirstToLast( arrayReduced ));
  },

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
  setAllResulstArrayToCount( array ) {
    const tempArray = _Array.splitArray( array );
    const result = tempArray.toString().split( ',' );

    return _Array.sortArrayFromFirstToLast( result );
  },

  /**
   * Creates an object within the values passed
   * @memberof SchemaHelper
   * @param  {String} index - Number that represent each raffle ball
   * @param  {Integer} count - Repeated times that a ball appears
   * @return {Object} - Formatted object with index and count properties with the respective values
   */
  createObjectCount( index, count ) {
    return { index, count };
  },

  /**
   * Finds most repeated values for a raffle game
   * @memberof SchemaHelper
   * @param  {Array} array - Array of objects with data from statistics
   * @param  {Integer} count - Number of balls for the raffle
   * @return {String} - String made with numbers separated by comma,
   * with the same length than the count parameter
   * @see {@link HelperArray}.sortArrayByCount
   * @see {@link HelperArray}.sliceArrayByCount
   * @see {@link HelperObject}.extractValueByIndex
   * @see {@link HelperArray}.concatToSingleString
   * @example
   * var statistics = [ { index: '12', count: 4 },{ index: '16', count: 3 },
   *                    { index: '23', count: 3 },{ index: '28', count: 3 },
   *                    { index: '15', count: 3 }
   *                   ]
   * console.log(SchemaHelper.findMostRepeatedValues(statistics, 3));
   * // '12,15,16'
   */
  findMostRepeatedValues( array, count ) {
    const sortedArray = _Array.sortArrayByCount( array );
    const slicedArray = _Array.sliceArrayByCount( sortedArray, count );
    const extractedArray = _Object.extractValueByIndex( slicedArray );
    return _Array.concatToSingleString( extractedArray );
  },

  /**
   * Sorts a string of numbers in ascendent order,
   * splits the string then sorts it and at the end concats
   * @memberof SchemaHelper
   * @param  {String} string - unordered string of numbers
   * @return {String}        - ordered string of numbers
   * @see {@link HelperString}.orderString
   * @see {@link HelperArray}.sortArrayFromFirstToLast
   * @see {@link HelperArray}.concatToSingleString
   */
  orderStringMostRepeated( string ) {
    const sortArrayFromFirstToLast = _Array.sortArrayFromFirstToLast;
    const concatToSingleString = _Array.concatToSingleString;

    return _String.orderString( string, sortArrayFromFirstToLast, concatToSingleString );
  },

  /**
   * Copycat from setXrayArrayToSave but for the extra info data
   * @memberof SchemaHelper
   * @param  {Array} array - Array from Xray scrapper
   * @return {String}      - Ordered and concatenated String from the array values
   */
  modifyExtras( array ) {
    return this.setXrayArrayToSave( array );
  },

  /**
   * Modifies an Array of Objects by adding a new 'color' property, heavy internally use of Helpers.
   * Divides the array in 3 and to each third adds the 'green', 'orange' and 'red' properties.
   * @memberof SchemaHelper
   * @param  {Array} array - Array of objects from the statistics
   * @return {Array}      - Single array with all the new properties populated
   * @see {@link HelperNumber}.findFractionNumber
   * @see {@link HelperObject}.setColorProperty
   * @see {@link HelperObject}.objectColorProperty
   */
  setColorPropertyStatistics( array ) {
    const oneThird = _Number.findFractionNumber( array, fractionNumber );
    return _Object.setColorProperty( array, oneThird );
  },

  /**
   * Switch statement that assigns a get method to the 'array' parameter
   * depending on the 'kind' parameter passed
   * @memberof SchemaHelper
   * @param  {Array} array    - Array of strings with all repeated balls
   * @param  {String} kind    - Kind of lotto
   * @param  {Function} lottoMethod - Gets all values for lotto
   * @param  {Function} starsMethod - Gets all values for lotto
   * @return {Array}                - Array containing the selection
   */
  setKindOfLotto( array, kind, lottoMethod, starsMethod ) {
    let tempArray = array;
    switch ( kind ) {
      case 'lotto':
        tempArray = lottoMethod;
        break;
      case 'stars':
        tempArray = starsMethod;
        break;
      default:
    }
    return tempArray;
  }
};
