'use strict';

var HelperDate = require('./HelperDate'),
  helperDate = new HelperDate();

function Helper() {

  this.newFormatedDate = () => {
    return helperDate.buildSpanishDate();
  };

  return {
    newFormatedDate: this.newFormatedDate
  };
}

module.exports = Helper;
