'use strict';
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
// var Lotto = require('./model/lottoModel');
var xRay = require('x-ray');
var scrapper = xRay();
var config = require('./config/config');
var configBono = config().lotto.bonoloto;


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

// var x = [];
// var db = mongoose.connection;
// // console.log(db);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

//   console.log('open connection');
// });
scrapper(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]}).write('./app/jsonResult/bono.json');

// fs.readFile('./app/jsonResult/bono.json', 'utf8', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	obj = JSON.parse(data);
// 	console.log(obj);
// });



console.log(configBono,'this console ');
// console.log(bonoJsonFile,'bonoJsonFile console ');
