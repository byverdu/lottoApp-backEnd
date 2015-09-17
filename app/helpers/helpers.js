'use strict';

// var HelperDate = require('./preHelpers'),
//   helperDate   = new HelperDate();

import { HelperDate } from './preHelpers';
var helperDate = new HelperDate();

export function Helper(){

  this.newFormatedDate = () => {
    return helperDate.buildSpanishDate();
  };

  this.addStringNumZero = () => {
    return '8';
  };

  return {
    newFormatedDate: this.newFormatedDate,
    addStringNumZero: this.addStringNumZero
  };
}
