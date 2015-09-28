// 'use strict';
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

//
var options = {
	server: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS: 30000
		}
	},
	replset: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS: 30000
		}
	}
};

var mongoUri = 'mongodb://localhost/test';
var mongooseUri = uriUtil.formatMongoose(mongoUri);
mongoose.connect(mongooseUri, options);

var db = mongoose.connection;
console.log(db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  console.log('open connection');
});

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





let xray = new Xray;

xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]}).then(result => {
  console.log(result);
  writeData(result);
});
