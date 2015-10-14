'use strict';

import { HelperDate, HelperString, HelperArray, HelperObject, HelperNumber } from './preHelpers';
var _Date = new HelperDate(),
  _String = new HelperString(),
  _Array = new HelperArray(),
  _Object = new HelperObject(),
  _Number = new HelperNumber(),
  fractionNumber = require('../config/config')().lotto.fractionNumber;

/**
 * Helper Class
 */
export function SchemaHelper() {

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
    let slicedArray = _Array.sliceArrayByCount(sortedArray, count);
    let extractedArray =  _Object.extractValueByIndex(slicedArray);

    return _Array.concatToSingleString(extractedArray);
  };

  this.orderStringMostRepeated = (string) => {
    return _String.orderString(string, _Array.sortArrayFromFirstToLast, _Array.concatToSingleString);
  };

  this.modifyExtras = (array) => {
      return this.setXrayArrayToSave(array);
  };

  this.setColorPropStatistics = (array) => {
    let oneThird = _Number.findFractionNumber(array, fractionNumber),
      greenItems = array.splice(0, oneThird),
      orangeItems = array.splice(0, oneThird),
      redItems = array,
    result = [];

    _Object.setColorProp(greenItems, _Object.objectColorProp, 'green');
    _Object.setColorProp(orangeItems, _Object.objectColorProp, 'orange');
    _Object.setColorProp(redItems, _Object.objectColorProp, 'red');

    return result.concat(greenItems, orangeItems, redItems);
  };

  return {
    setNewFormatedDate: this.setNewFormatedDate,
    setXrayArrayToSave: this.setXrayArrayToSave,
    setAllResulstArrayToCount: this.setAllResulstArrayToCount,
    createObjectCount: this.createObjectCount,
    findMostRepeatedValues: this.findMostRepeatedValues,
    orderStringMostRepeated: this.orderStringMostRepeated,
    modifyExtras: this.modifyExtras,
    setColorPropStatistics: this.setColorPropStatistics
  };
}
