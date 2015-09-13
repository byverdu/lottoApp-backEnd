'use strict';

var HelperDate = require('./HelperDate'),
  helperDate = new HelperDate();

module.exports = function Helper(){
  this.newFormatedDate = () => {
    return helperDate.buildSpanishDate();
  };

  return {
    newFormatedDate: this.newFormatedDate
  };
};
