// mongodb connection

module.exports = function () {
  const uriUtil = require( 'mongodb-uri' );
  const mongoose = require( 'mongoose' );
  const config = require( './config' ).globals;
  const options = {
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
  // mongo url development or production
  // const configUrl = [config.mongoUrlTest, config.mongoUrlProduction];

  const mongoUri = config.mongoUrlProduction
  const mongooseUri = uriUtil.formatMongoose( mongoUri ); // formatting url for better parsing

  mongoose.connect( mongooseUri, options );

  console.log( 'database file called' );
};
