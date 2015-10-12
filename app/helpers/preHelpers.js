'use strict';

/**
 * @class
 * Class for String manipulation
 */
function HelperString() {

  /**
   * Deletes white spaces for the element passed
   * @memberof HelperString
   * @param  {String} elem - string with a white space
   * @return {String}      - trimmed element
   * @example
   * console.log(HelperString.deleteWhiteSpace(' 09')); // '09'
   */
  this.deleteWhiteSpace = (elem) => {
    elem = elem.trim();
    return elem;
  };

  /**
   * Adds '0' for numbers that are smaller than 10 and with one digit
   * @memberof HelperString
   * @param  {String} elem - numbers as a String type
   * @return {String}      - formatted number if condition applies
   * @example
   * console.log(HelperString.addStringNumZero('9')); // '09'
   */
  this.addStringNumZero = (elem) => {
    if (elem <= 9 && elem.length < 2) {
      elem = `0${elem}`;
    }
    return elem;
  };

  /**
   * Sorts an string in descendent order
   * @memberof HelperString
   * @param  {String} elem         - unordered string of numbers
   * @param  {Function} sortMethod - method that sorts an array
   * @see sortMethod() => {@link HelperArray}.sortArrayFromFirstToLast()
   * @param  {Function} concatMethod - method that concats strings
   * @see concatMethod() => {@link HelperArray}.concatToSingleString()
   * @return {String}              - ordered numbers
   */
  this.orderString = (elem, sortMethod, concatMethod) => {
    let tempArray = elem.split(',');
    let sortedArray = sortMethod(tempArray);
    return concatMethod(sortedArray);
  };

  return {
    deleteWhiteSpace: this.deleteWhiteSpace,
    addStringNumZero: this.addStringNumZero,
    orderString: this.orderString
  };
}

/**
 * @class
 * Converts Date into a custom format
 */
function HelperDate() {

  /**
   * Container for the Spanish date values
   * @type {Object}
   */
  var spanishValues = {
    days: [
      'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
    ],
    months: [
      'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',
    ]
  };

  /**
   * Returns value per index
   * @param  {Array}  array - Array with Spanish values
   * @param  {Number} index - numeric value from getValuesNewDate()
   * @return {String}       - Spanish value
   */
  var getSpanishValues = (array, index) => {
    return array[index];
  };

  /**
   * Getter for Date values [day,month...]
   * @return {Object} Container with numeric values from calling Date() methods
   */
  var getValuesNewDate = () => {

    let date = new Date();

    return {
      getDayWeek: date.getDay(),
      getDayMonth: date.getDate(),
      getMonth: date.getMonth(),
      getYear: date.getFullYear()
    };
  };

  /**
   * Formats a Date instance to a custom string, uses all inner variables
   * @memberof HelperDate
   * @return {String} - A formatted Spanish date e.g 'Lunes, 12-Oct-2015'
   */
  this.buildSpanishDate = () => {

    let day, dayNumber, month, year, DateValues;

    DateValues = getValuesNewDate();

    day = getSpanishValues(spanishValues.days, DateValues.getDayWeek);
    dayNumber = DateValues.getDayMonth;
    month = getSpanishValues(spanishValues.months, DateValues.getMonth);
    year = DateValues.getYear;

    return `${day}, ${dayNumber}-${month}-${year}`;
  };

  return {
    buildSpanishDate: this.buildSpanishDate
  };
}

/**
 * @class
 * Class for Array manipulation
 */
function HelperArray() {

  /**
   * Sorts an array in descendent order
   * @memberof HelperArray
   * @param  {Array} array - Array of numbers as a String type
   * @return {Array}      - Sorted array
   * @example console.log(HelperArray.sortArrayFromFirstToLast(['29', '11'])) // ['11', '29']
   * @link{HelperString}
   */
  this.sortArrayFromFirstToLast = (array) => {
    return array.sort((a, b) => {
      return (a - b);
    });
  };

  /**
   * Sorts an array by object property
   * @memberof HelperArray
   * @param  {Array} array - Array of objects
   * @return {Array}      - Array with objects ordered by "count" property
   * @example console.log(HelperArray.sortArrayByCount([{index: '07', count: 1},{index: '12', count: 4}]))
   * // [{index: '12', count: 4},{index: '07', count: 1}]
   */
  this.sortArrayByCount = (array) => {
    return array.sort(function(a, b) {
      return (b.count - a.count);
    });
  };

  /**
   * Concats an array to String
   * @memberof HelperArray
   * @param  {Array} array - Array of numbers as a String type
   * @return {String}      - Concated string from array passed
   * @example console.log(HelperArray.concatToSingleString(['29', '11'])) // '11,29'
   * @link{HelperString}
   */
  this.concatToSingleString = (array) => {

    var result = '';
    array.map((el) => {
      result = result.concat(el, ',');
    });
    return result.slice(0, -1);
  };

  /**
   * Splits array content
   * @memberof HelperArray
   * @param  {Array} array - Array with a single string of numbers separated by ','
   * @return {Array}      - Array populated with strings
   * @example console.log(HelperArray.splitArray(['29,11'])) // ['11','29']
   */
  this.splitArray = (array) => {

    let tempArray = [];
    array.map((el) => {
      tempArray.push(el.split(','));
    });
    return tempArray;
  };

  /**
   * Slices an array [result from sortArrayByCount] using the value passed as parameter
   * @memberof HelperArray
   * @param  {Array} array - Array with objects ordered by "count" property
   * @param  {Number} count - Number of items to slice
   * @return {Array}      - Array sliced by the count specified
   @example console.log(HelperArray.sliceArrayByLottoCount([{index: '12', count: 4},{index: '07', count: 8}]))
   * // [{index: '07', count: 8},{index: '12', count: 4}]
   */
  this.sliceArrayByLottoCount = (array, count) => {
    return array.slice(0, count);
  };

  return {
    sortArrayFromFirstToLast: this.sortArrayFromFirstToLast,
    sortArrayByCount: this.sortArrayByCount,
    concatToSingleString: this.concatToSingleString,
    splitArray: this.splitArray,
    sliceArrayByLottoCount: this.sliceArrayByLottoCount
  };
}

/**
 * @class
 * Class for Object manipulation
 */
function HelperObject() {

  /**
   * Gets value from a property
   * @memberof HelperObject
   * @param  {Array} array - Array with objects ordered by "index" property
   * @return {Array}      - Array populated with values of property "index"
   @example console.log(HelperObject.extractValueByIndex([{index: '07', count: 8},{index: '12', count: 4}])) // ['07','12']
   */
  this.extractValueByIndex = (array) => {
    let mostRepeated = [];

    array.map(el => {
      mostRepeated.push(el.index);
    });

    return mostRepeated;
  };

  return {
    extractValueByIndex: this.extractValueByIndex
  };
}

export {
  HelperString, HelperDate, HelperArray, HelperObject
};
