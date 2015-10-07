'use strict';

import uriUtil from 'mongodb-uri';
import mongoose from 'mongoose';
// import { config } from './config';
var config = require('./config/config')().globals;
console.log(config);
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

var mongoUri = ( config.mongoUrlTest || config.mongoUrlProduction );
var mongooseUri = uriUtil.formatMongoose(mongoUri);
mongoose.connect(mongooseUri, options);

console.log('database file called');
