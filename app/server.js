'use strict';

var express = require('express');
var dbConnect = require('./config/db');
var lotto = require('./instances/bono');
import mongoose from 'mongoose';






import Xray from './helpers/xray';
var config = require('./config/config');
var configBono = config().lotto.bonoloto;
var fs = require('fs');
var path = require('path');
// import Lotto from './model/lottoModel';
// var bono = new Lotto();

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





let xray = new Xray();

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]}).then(result => {
  console.log(result);
  writeData(result);
});
