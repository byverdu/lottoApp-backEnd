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

    return _Array.concatString(_Array.sortFirstToLast(array));
  };

  this.setAllResulstArrayToCount = (array) => {

    let tempArray = _Array.splitArray(array),
      result = [];

    tempArray.map((outerEl) => {
      outerEl.map((innerEl) => {
        result.push(innerEl);
      });
    });
    return _Array.sortFirstToLast(result);
  };

  this.createObjectCount = (index, count) => {

    return {"index": index, "count": count}
  }

  return {
    setNewFormatedDate: this.setNewFormatedDate,
    setXrayArrayToSave: this.setXrayArrayToSave,
    setAllResulstArrayToCount: this.setAllResulstArrayToCount,
    createObjectCount: this.createObjectCount
  };
}
