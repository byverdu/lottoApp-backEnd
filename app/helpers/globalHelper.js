'use strict';

/**
 * Helper Class
 */
export function GlobalHelper() {

  this.compare2arrays = (first, second, lottoCount) => {
    var assertion = false,
      count = 0;

    for (var i = 0; i < first.length; i++) {
      first[i] = first[i].trim();
      second[i] = second[i].trim();

      if (first[i].includes(second[i])) {
        count++;

        if (count === lottoCount) {
          assertion = true;
        }
      }
    }
    console.log(assertion, 'compare2arrays boolean');
    return assertion;
  };

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

  this.getPricesInfo = function(lottoObject) {

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
