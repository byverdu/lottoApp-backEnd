'use strict';

import Xray from './helpers/xray';
var config = require('./config/config');
var configBono = config().lotto.bonoloto;
var fs = require('fs');
var path = require('path');
var JSONdata = require('./json/bono');
// import Lotto from './model/lottoModel';
require('./instances/bono');

var writeData = data => {
  console.log('vvvvvvvvvvvvvv');

  fs.writeFile(path.join(__dirname, './json/bono.json'), JSON.stringify(data), err => {
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
  // console.log(first[0].includes(second[0]),'includes');

  for (var i = 0; i < first.length; i++) {
    // console.log(first[i].includes(second[i]),'includes');
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
  if (compareArray(JSONdata.numbers, result.numbers)) {
    console.log('papapappapapapap');
    writeData(result);
  }
});
  console.log(JSONdata.numbers, 'JSONdata.numbers');
