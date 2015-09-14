'use strict';

var HelperDate = require('./HelperDate'),
  helperDate   = new HelperDate();

module.exports = function Helper(){

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
};
