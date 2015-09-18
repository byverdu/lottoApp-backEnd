'use strict';

// var HelperDate = require('./preHelpers'),
//   helperDate   = new HelperDate();

import { HelperDate, HelperString, HelperArray } from './preHelpers';
var _Date = new HelperDate(),
  _String = new HelperString(),
  _Array = new HelperArray;

export function Helper(){

  this.newFormatedDate = () => {
    return _Date.buildSpanishDate();
  };

  this.prepareArrayXrayToSave = (array) => {

    array.map( (el, ind, arr) => {
      arr[ind] = _String.deleteWhiteSpace(arr[ind]);
      arr[ind] = _String.addStringNumZero(arr[ind]);

      return arr;
    });

    return _Array.concatString(_Array.sortFirstToLast(array));
  };

  return {
    newFormatedDate: this.newFormatedDate,
    prepareArrayXrayToSave: this.prepareArrayXrayToSave
  };
}
