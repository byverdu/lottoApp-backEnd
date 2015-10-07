'use strict';

import { HelperDate, HelperString, HelperArray, HelperObject } from './preHelpers';
var _Date = new HelperDate(),
  _String = new HelperString(),
  _Array = new HelperArray(),
  _Object = new HelperObject(),
  fs = require('fs'),
  path = require('path');

/**
 * Helper Class
 */
export function Helper() {

  this.setNewFormatedDate = () => {
    return _Date.buildSpanishDate();
  };

  this.setXrayArrayToSave = (array) => {

    array.map((el, ind, arr) => {
      arr[ind] = _String.deleteWhiteSpace(arr[ind]);
      arr[ind] = _String.addStringNumZero(arr[ind]);

      return arr;
    });

    return _Array.concatToSingleString(_Array.sortArrayFromFirstToLast(array));
  };

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

  this.createObjectCount = (index, count) => {
    return {'index': index, 'count': count};
  };

  this.findMostRepeatedValues = (array, count) => {
    let sortedArray = _Array.sortArrayByCount(array);
    let slicedArray = _Array.sliceArrayByLottoCount(sortedArray, count);
    let extractedArray =  _Object.extractValueByIndex(slicedArray);

    return _Array.concatToSingleString(extractedArray);
  };

  this.orderStringMostRepeated = (string) => {
    return _String.orderString(string, _Array.sortArrayFromFirstToLast, _Array.concatToSingleString);
  };

  this.compare2arrays = (first, second) => {
    var assertion = true,
      count = 0;

    for (var i = 0; i < first.length; i++) {
      if (first[i].includes(second[i])) {
        count++;
        if (count === 6) {
          assertion = false;
        }
      }
    }
    console.log(assertion, 'compare2arrays boolean');
    return assertion;
  };

  this.saveScrappedDataToJson = (pathJSON, data) => {
    fs.writeFile(path.join(__dirname, pathJSON), JSON.stringify(data), err => {
      if(err){
        console.log(err);
      } else {
        console.log('file saved');
      }
    });
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

  return {
    setNewFormatedDate: this.setNewFormatedDate,
    setXrayArrayToSave: this.setXrayArrayToSave,
    setAllResulstArrayToCount: this.setAllResulstArrayToCount,
    createObjectCount: this.createObjectCount,
    findMostRepeatedValues: this.findMostRepeatedValues,
    orderStringMostRepeated: this.orderStringMostRepeated,
    compare2arrays: this.compare2arrays,
    saveScrappedDataToJson: this.saveScrappedDataToJson,
    customFindOneMongoose: this.customFindOneMongoose
  };
}
