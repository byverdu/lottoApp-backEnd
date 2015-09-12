'use strict';
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
// var Lotto = require('./model/lottoModel');


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


// var db = mongoose.connection;
// // console.log(db);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

//   console.log('open connection');
// });
