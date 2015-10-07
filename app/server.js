'use strict';

import Xray from './helpers/xray';
var config = require('./config/config');
var configBono = config().lotto.bonoloto;
var fs = require('fs');
var path = require('path');
var bonoJSON = require('./json/bono');

var writeData = (pathJSON, data) => {
  console.log('vvvvvvvvvvvvvv');

  fs.writeFile(path.join(__dirname, pathJSON), JSON.stringify(data), err => {
    if(err){
      console.log(err);
    } else {
      console.log('file saved');
    }
  });

};

var compareArray = (first, second) => {
  var assertion = true,
    count = 0;

  for (var i = 0; i < first.length; i++) {

    if (first[i].includes(second[i])) {
      count++;
      if (count === 6) {
        assertion = false;
      console.log('lododeoddloedledldled');
      }
    }
  }
  console.log(assertion);
  return assertion;
};

let xray = new Xray();

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]}).then(result => {
  console.log(result.numbers, 'result Xray');
  if (compareArray(bonoJSON.numbers, result.numbers)) {
    writeData(configBono.pathJSON ,result);
  }
    require('./instances/bono');
});
