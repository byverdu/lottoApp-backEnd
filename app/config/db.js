'use strict';

import uriUtil from 'mongodb-uri';
import mongoose from 'mongoose';
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

var mongoUri = 'mongodb://localhost/lottoApp';
var mongooseUri = uriUtil.formatMongoose(mongoUri);
mongoose.connect(mongooseUri, options);
