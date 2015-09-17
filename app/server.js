// 'use strict';
// // var mongoose = require('mongoose');
// // var uriUtil = require('mongodb-uri');
// // var Lotto = require('./model/lottoModel');
// // var xRay = require('x-ray');
// // var scrapper = xRay();
// var config = require('./config/config');
// var configBono = config().lotto.bonoloto;
//
// import {HelperString} from './helpers/helperString';
//
// var x = new HelperString();
//
// console.log(x.deleteWhiteSpace('   0').length);
// var bonoJsonFile = require('../jsonResult/bono.json');
// console.log(bonoJsonFile,'bonoJsonFile console ');
//
// // var options = {
// // 	server: {
// // 		socketOptions: {
// // 			keepAlive: 1,
// // 			connectTimeoutMS: 30000
// // 		}
// // 	},
// // 	replset: {
// // 		socketOptions: {
// // 			keepAlive: 1,
// // 			connectTimeoutMS: 30000
// // 		}
// // 	}
// // };
// //
// // var mongoUri = 'mongodb://localhost/test';
// // var mongooseUri = uriUtil.formatMongoose(mongoUri);
// // mongoose.connect(mongooseUri, options);
//
// console.log(configBono,'this console ');
// // console.log(bonoJsonFile,'bonoJsonFile console ');
//
// module.exports = require('express')();
//
// // var x = [];
// // var db = mongoose.connection;
// // // console.log(db);
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function () {
//
// //   console.log('open connection');
// // });
// // scrapper(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]}).write('./app/jsonResult/bono.json');
// //
// // fs.readFile('./app/jsonResult/bono.json', 'utf8', (err, data) => {
// // 	if (err) {
// // 		throw err;
// // 	}
// // 	obj = JSON.parse(data);
// // 	console.log(obj);
// // });
//
// //  xray.js
// // import Xray from 'x-ray';
// //
// // export default class {
// //     get (url, data) {
// //         return Promise((resolve, reject) => {
// //             let xray = Xray();
// //
// //             xray(url, data)((error, result) => {
// //                 if (error) {
// //                     reject(error);
// //                 }
// //                 else {
// //                     resolve(result);
// //                 }
// //             });
// //         });
// //     }
// // };
// //
// // //  usage.js
// // import Xray from './xray';
// //
// // let xray = new Xray;
// //
// // xray.get(url, data).then(result => { });
