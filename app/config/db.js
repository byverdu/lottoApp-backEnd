// mongodb connection

module.exports = function () {
  const uriUtil = require( 'mongodb-uri' );
  const mongoose = require( 'mongoose' );
  const config = require( './config' );
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
  let dbURL;

  if ( process.env.NODE_ENV === 'development' ) {
    dbURL = config.database.development;
  }

  if ( process.env.NODE_ENV === 'production' ) {
    dbURL = config.database.production;
  }

  const mongooseUri = uriUtil.formatMongoose( dbURL ); // formatting url for better parsing

  mongoose.connect( mongooseUri, options );

  console.log( `database file called for ${process.env.NODE_ENV}` );
};
