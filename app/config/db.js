'use strict';

import uriUtil from 'mongodb-uri';
import mongoose from 'mongoose';
var config = require('./config')().globals;
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
var configUrl = [config.mongoUrlTest, config.mongoUrlProduction];

var mongoUri =  configUrl[0];
var mongooseUri = uriUtil.formatMongoose(mongoUri);
mongoose.connect(mongooseUri, options);

console.log('database file called');
