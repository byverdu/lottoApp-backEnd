'use strict';

import Xray from './helpers/xray';
var config = require('./config/config');
var configBono = config().lotto.bonoloto;
var fs = require('fs');
var path = require('path');
var bonoJSON = require('./json/bono');
// import Lotto from './model/lottoModel';
require('./instances/bono');

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
  if (compareArray(bonoJSON.numbers, result.numbers)) {
    console.log('papapappapapapap');
    writeData(configBono.pathJSON ,result);
  }
});
  console.log(bonoJSON.numbers, 'bonoJSON.numbers');

// fs.watch(configBono.pathJSON, function (curr, prev) {
//   console.log('the current mtime is: ' + curr.mtime);
//   console.log('the previous mtime was: ' + prev.mtime);
// });

// fs.watch('../README.md', function (event, filename) {
//   console.log('event is: ' + event);
//   if (filename) {
//     console.log('filename provided: ' + filename);
//   } else {
//     console.log('filename not provided');
//   }
// });
