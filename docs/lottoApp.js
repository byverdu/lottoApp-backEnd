'use strict';
/**
 * @fileoverview This file is the entering point for this documentation, no OOP at all, is more a reminder for me of what I've done in this project
 * {@link https://github.com/byverdu/lottoApp-backEnd Github repo}
 *
 * @author Albert Vallverdu
 * @version 0.1
 */

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
   * @example console.log(HelperArray.sliceArrayByCount([{index: '12', count: 4},{index: '07', count: 8}]))
   * // [{index: '07', count: 8},{index: '12', count: 4}]
   */
  this.sliceArrayByCount = (array, count) => {
    return array.slice(0, count);
  };

  return {
    sortArrayFromFirstToLast: this.sortArrayFromFirstToLast,
    sortArrayByCount: this.sortArrayByCount,
    concatToSingleString: this.concatToSingleString,
    splitArray: this.splitArray,
    sliceArrayByCount: this.sliceArrayByCount
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
   * @example console.log(HelperObject.extractValueByIndex([{index: '07', count: 8},{index: '12', count: 4}])) // ['07','12']
   */
  this.extractValueByIndex = (array) => {
    let mostRepeated = [];

    array.map(el => {
      mostRepeated.push(el.index);
    });

    return mostRepeated;
  };

  /**
   * Container for color values
   * @memberof HelperObject
   */
  this.objectColorProperty = {
      green: 'greenItem',
      orange: 'orangeItem',
      red: 'redItem'
  };

  /**
   * Adds new "color" property to an object
   * @memberof HelperObject
   * @param  {Object} object   - Object containing other properties
   * @param  {Object} objColor - Container with color values
   * @param  {String} thisColor - Reference value as index for the container
   * @return {Object}            - Object with new color property
   * @example console.log(HelperObject.setColorProperty({ index: '12', count: 4 }, HelperObject.objectColorProperty, 'green'))
   * // { index: '12', count: 4 , color: 'greenItem' }
   */
  this.setColorProperty = (array, objColor, thisColor) => {
    array.forEach((el, ind, arr) => {
        arr[ind].color = objColor[thisColor];
        return arr;
    });
    return array;
  };

  return {
    extractValueByIndex: this.extractValueByIndex,
    objectColorProperty: this.objectColorProperty,
    setColorProperty: this.setColorProperty
  };
}

/**
 * @class
 * Class for Number manipulation
 */
function HelperNumber() {

  /**
   * Divides a number
   * @memberof HelperNumber
   * @param  {Array} array     - Array with values
   * @param  {Number} fraction - Number value to divide the array length
   * @return {Number}          - Biggest number possible from the division
   * @example var array = new Array(49);
   * console.log(HelperNumber.findFractionNumber(array, 3)) // 17
   */
  this.findFractionNumber = (array, fraction) => {
    let result = Math.ceil(array.length/fraction);
    return result;
  };

  return {
    findFractionNumber: this.findFractionNumber
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


export {
  HelperString, HelperDate, HelperArray, HelperObject, HelperNumber
};


/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** preHelpers *********************************/


/**
 * @class
 * Helper Class that will act on the global scope,
 */
export function GlobalHelper() {

  /**
   * Compares if two arrays has the same items
   * @memberof GlobalHelper
   * @param  {Array} firstArray  - Array with numbers
   * @param  {Array} secondArray - Array with numbers
   * @param  {Integer} lottoCount - determines the count of items that need to be equal
   * @return {Boolean}      - true or false
   * @example
   * console.log(GlobalHelper.compare2arrays(['23','34'],['23','35'],2)) // false
   * console.log(GlobalHelper.compare2arrays(['23','34'],['23','34'],2)) // true
   */
  this.compare2arrays = (firstArray, secondArray, lottoCount) => {
    var assertion = false,
      count = 0;

    for (var i = 0; i < firstArray.length; i++) {
      firstArray[i] = firstArray[i].trim();
      secondArray[i] = secondArray[i].trim();

      if (firstArray[i].includes(secondArray[i])) {
        count++;

        if (count === lottoCount) {
          assertion = true;
        }
      }
    }
    console.log(assertion, 'compare2arrays boolean');
    return assertion;
  };

  /**
   * Callback for findOne mongoDB method, so it can be stored in a variable
   * @memberof GlobalHelper
   * @param  {Schema}   Model       - Schema to query against
   * @param  {Object}   ObjectQuery - Object that will contain the field to query
   * @param  {Function} callback    - Callback function to execute
   */
  this.customFindOneMongoose = (Model, ObjectQuery, callback) => {
    Model.findOne(ObjectQuery, (err, lotto) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, lotto);
      }
    });
  };

  var setValuesObjectForWinners = (value, value2, value3, value4) => {
    if (value4 === undefined) {
      return {
        category: value,
        winners: value2,
        price: value3
      };
    } else {
      return {
        category: value,
        winners: value2,
        spanish: value4,
        price: value3
      };
    }
  };

  /**
   * Iterates over arrays in order to get the data
   * @memberof GlobalHelper
   * @param  {Object} lottoObject - Object containing arrays
   * @return {Array}             - Array with objects formatted and ordered
   */
  this.getPricesInfo = (lottoObject) => {

    var resultArray = [];

    lottoObject.categoryPrice.forEach((el, ind, arr) => {
      var obj;

      lottoObject.winnerPrice.forEach((el2, ind2, arr2) => {

        lottoObject.moneyPrice.forEach((el3, ind3, arr3) => {

          if (lottoObject.hasOwnProperty('spanishWinners')) {

            lottoObject.spanishWinners.forEach((el, ind4, arr4) => {

              obj = setValuesObjectForWinners(arr[ind], arr2[ind], arr3[ind], arr4[ind]);
            });
          } else {
            obj = setValuesObjectForWinners(arr[ind], arr2[ind], arr3[ind]);
          }

        });
      });
      resultArray.push(obj);
    });
    resultArray.shift();

    return resultArray;
  };

  /**
   * Creates a new Date
   * @memberof GlobalHelper
   * @return {String} - Formatted date.
   * @example
   * console.log(GlobalHelper.hackyDate()) // "Thu Oct 22 2015 22:44:54"
   */
  this.hackyDate = () => {
    return new Date().toString().split('GMT').shift();
  };

  return {
    compare2arrays: this.compare2arrays,
    customFindOneMongoose: this.customFindOneMongoose,
    getPricesInfo: this.getPricesInfo,
    hackyDate: this.hackyDate
  };
}

/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** GlobalHelper *********************************/


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
    * @see {@link HelperArray}.sortArrayByCount
    * @see {@link HelperArray}.sliceArrayByCount
    * @see {@link HelperObject}.extractValueByIndex
    * @see {@link HelperArray}.concatToSingleString
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
    * @see {@link HelperString}.orderString
    * @see {@link HelperArray}.sortArrayFromFirstToLast
    * @see {@link HelperArray}.concatToSingleString
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
    * @see {@link HelperNumber}.findFractionNumber
    * @see {@link HelperObject}.setColorProperty
    * @see {@link HelperObject}.objectColorProperty
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

 /**************************** END OF FILE *********************************/
 /**************************** END OF FILE *********************************/
 /**************************** END OF FILE *********************************/
 /**************************** END OF FILE *********************************/
 /**************************** END OF FILE *********************************/
 /**************************** END OF FILE *********************************/
 /**************************** SchemaHelper *********************************/



 import mongoose from 'mongoose';
 import {SchemaHelper} from '../helpers/schemaHelper';

 var schemaHelper, lottoSchema;
 schemaHelper = new SchemaHelper();

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
 lottoSchema = mongoose.Schema({

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
  * @return {String} - Formatted Date (this.date)
  * @see {@link SchemaHelper}.setNewFormatedDate
  */
 lottoSchema.methods.setNewDate = function() {
   console.log('setNewDate called');
   try {
     this.date = schemaHelper.setNewFormatedDate();
   } catch (e) {
     console.log('setNewDate exception called', e.message);
     this.date = new Date();
   }
 };

 /**
  * Sets lastResult property for Schema
  * @memberof lottoSchema
  * @param  {Array} array - Array result from Xray
  * @return {String}      - Array converted to a single String (this.lastResult)
  * @see {@link schemaHelper}.setXrayArrayToSave
  */
 lottoSchema.methods.setLastResult = function(array) {
   this.lastResult = schemaHelper.setXrayArrayToSave(array);
   return this.lastResult;
 };

 /**
  * Sets last result extras for Schema
  * @memberof lottoSchema
  * @param  {Array} array - Array result from Xray
  * @return {String}      - Array converted to a single String (this.extras)
  * @see {@link schemaHelper}.modifyExtras
  */
 lottoSchema.methods.setExtras = function(array) {
   this.extras = schemaHelper.modifyExtras(array);
   return this.extras;
 };

 /**
  * Sets last result stars for Schema and euromillions instance
  * @memberof lottoSchema
  * @param  {Array} array - Array result from Xray
  * @return {String}      - Array converted to a single String (this.stars.lastResult)
  */
 lottoSchema.methods.setLastResultStars = function(array) {
   this.stars.lastResult = this.setExtras(array);
   return this.stars.lastResult;
 };

 /**
  * Sets most repeated values for a lotto kind, internally sets new statistics with color property
  * @memberof lottoSchema
  * @param  {Integer} count - Number of balls for a raffle
  * @return {String}        - String of numbers with the most repeated values for a raffle (this.mostRepeated)
  * @see {@link schemaHelper}.findMostRepeatedValues
  * @see {@link schemaHelper}.orderStringMostRepeated
  * @see {@link lottoSchema}.setStatisticsAfterColorSet
  */
 lottoSchema.methods.setMostRepeated = function(count) {
   let newStatistics,
     mostRepeated = schemaHelper.findMostRepeatedValues(this.getStatistics(), count);

   this.mostRepeated = schemaHelper.orderStringMostRepeated(mostRepeated);
   newStatistics = this.setStatisticsAfterColorSet(this.getStatistics());
   this.statistics = newStatistics;

   return this.mostRepeated;
 };

 /**
  * Sets most repeated values for euro stars, internally sets new statistics with color property
  * @memberof lottoSchema
  * @param  {Integer} count - Number of balls for a raffle
  * @return {String}        - String of numbers with the most repeated values for a raffle (this.stars.mostRepeated)
  * @see {@link schemaHelper}.findMostRepeatedValues
  * @see {@link schemaHelper}.orderStringMostRepeated
  * @see {@link lottoSchema}.setStatisticsAfterColorSet
  */
 lottoSchema.methods.setMostRepeatedStars = function(count) {
   let newStatistics,
   mostRepeated = schemaHelper.findMostRepeatedValues(this.getStatisticStars(), count);

   this.stars.mostRepeated = schemaHelper.orderStringMostRepeated(mostRepeated);
   newStatistics = this.setStatisticsAfterColorSet(this.getStatisticStars());
   this.stars.statistics = newStatistics;

   return this.stars.mostRepeated;
 };

 /**
  * Sets all results by adding the las result every time
  * @memberof lottoSchema
  * @param  {String} lastResult - this.lastResult
  * @return {Array}             - this.allResults + lastResult
  */
 lottoSchema.methods.setAllResults = function(lastResult) {
   return this.allResults.push(lastResult);
 };

 /**
  * Sets all stars by adding the las result every time
  * @memberof lottoSchema
  * @param  {String} lastResult - this.lastResult
  * @return {Array}             - this.allResults + lastResult
  */
 lottoSchema.methods.setAllResultStars = function() {
   return this.stars.allResults.push(this.stars.lastResult);
 };

 /**
  * Sets first data for the statistics, internally calls this.getCountAllResults
  * @memberof lottoSchema
  * @param  {Array} array - All the result numbers as a single strings
  * @param  {String} kind - type of lotto to interact with
  * @return {Array}       - Array with objects (this.statistics)
  * @see {@link lottoSchema}.getCountAllResults
  */
 lottoSchema.methods.setStatistics = function(array, kind){
 	this.statistics = this.getCountAllResults(array, kind);
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
 lottoSchema.methods.setStatisticStars = function(array, kind){
 	this.stars.statistics = this.getCountAllResults(array, kind);
 	return this.stars.statistics;
 };

 /**
  * Sets new statistics with color property
  * @memberof lottoSchema
  * @param  {Array} array - Array of objects containing the previous statistics
  * @return {Array}       - Same array but with the new values
  * @see {@link schemaHelper}.setColorPropertyStatistics
  */
 lottoSchema.methods.setStatisticsAfterColorSet = function(array){
   return schemaHelper.setColorPropertyStatistics(array);
 };


 /**
  * Getters for the Schema
  */

 /**
  * Gets the last result
  * @memberof lottoSchema
  * @return {String} - this.lastResult
  */
 lottoSchema.methods.getLastResult = function(){
   return this.lastResult;
 };

 /**
  * Gets all the results and formats them for a better data structure
  * @memberof lottoSchema
  * @return {Array} - this.allResults split for each single number as string and sorted in ascendent order
  */
 lottoSchema.methods.getAllResults = function() {
   return schemaHelper.setAllResulstArrayToCount(this.allResults);
 };

 /**
  * Gets all the stars and formats them for a better data structure
  * @memberof lottoSchema
  * @return {Array} - this.stars.allResults split for each single number as string and sorted in ascendent order
  */
 lottoSchema.methods.getAllResultsStars = function() {
   return schemaHelper.setAllResulstArrayToCount(this.stars.allResults);
 };

 /**
  * Gets the total number of repetitions for every single number
  * @memberof lottoSchema
  * @param  {Array} array - Array to interact with, the value will depend on the 'kind' parameter
  * @param  {String} kind - The type of lotto
  * @return {Array}      - Array of objects with the total count for each number
  * @summary Internally calls this.getAllResults() or this.getAllResultsStars() depending on the 'kind' parameter
  * @see {@link SchemaHelper}.setKindOfLotto
  * @see {@link SchemaHelper}.createObjectCount
  */
 lottoSchema.methods.getCountAllResults = function(array, kind) {
   let tempArray = schemaHelper.setKindOfLotto(array, kind, this.getAllResults(), this.getAllResultsStars()),
     copyAllResults = tempArray.slice(0),
     result = [];

   tempArray.forEach((outerEl, outerInd, outerArr) => {
     var count = 0;
     copyAllResults.forEach((innerEl, innerInd, innerArr) => {

       if (outerArr[outerInd] === innerArr[innerInd]) {
         count++;
         delete innerArr[innerInd];
       }
     });
     if (count > 0) {
       result.push(schemaHelper.createObjectCount(outerEl, count));
     }
   });

 	return result;
 };

 /**
  * Gets the statistics
  * @memberof lottoSchema
  * @return {Object} - this.statistics
  */
 lottoSchema.methods.getStatistics = function(){
 	return this.statistics;
 };

 /**
  * Gets the stars statistics
  * @memberof lottoSchema
  * @return {Object} - this.stars.statistics
  */
 lottoSchema.methods.getStatisticStars = function(){
 	return this.stars.statistics;
 };

 module.exports = mongoose.model('Lotto', lottoSchema);

 /**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** END OF FILE *********************************/
/**************************** lottoSchema *********************************/
