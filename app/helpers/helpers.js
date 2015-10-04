'use strict';

import {
  HelperDate, HelperString, HelperArray, HelperObject
}
from './preHelpers';
var _Date = new HelperDate(),
  _String = new HelperString(),
  _Array = new HelperArray(),
  _Object = new HelperObject();

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

  this.compare2arrays = () => {

  };

  return {
    setNewFormatedDate: this.setNewFormatedDate,
    setXrayArrayToSave: this.setXrayArrayToSave,
    setAllResulstArrayToCount: this.setAllResulstArrayToCount,
    createObjectCount: this.createObjectCount,
    findMostRepeatedValues: this.findMostRepeatedValues,
    orderStringMostRepeated: this.orderStringMostRepeated,
    compare2arrays: this.compare2arrays
  };
}
