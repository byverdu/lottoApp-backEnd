'use strict';

module.exports = () => {

  var uriUtil = require('mongodb-uri'),
   mongoose = require('mongoose'),
   config = require('./config')().globals,
   options = {
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
  },
   configUrl = [config.mongoUrlTest, config.mongoUrlProduction],

   mongoUri = configUrl[0],
   mongooseUri = uriUtil.formatMongoose(mongoUri);

	 mongoose.connect(mongooseUri, options);

  console.log('database file called');
};
