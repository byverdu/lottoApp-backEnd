'use strict';

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
  this.customFindOneMongoose = (Model, ObjectQuery) => {
    return new Promise((resolve, reject) => {
      Model.findOne(ObjectQuery, (err, lotto) => {
        if (err) {
          reject(err);
        } else {
          resolve(lotto);
        }
      });
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
