// EuroMail Mongo instance
import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import { globalHelper } from '../helpers/globalHelper';
import nodemailer from '../config/nodemailer';

module.exports = () => {
  console.log( 'instances file called mail' );

  require( '../config/db' )();
  const db = mongoose.connection;

  db.on( 'error', console.error.bind( console, 'connection error:' ));
  db.once( 'open', () => {
    console.log( 'open connection euromillions' );

    globalHelper.customFindOneMongoose( Lotto, { lottoID: 'euromillions' }, ( err, lotto ) => {
      if ( err ) {
        console.log( err );
      } else {
        console.log( lotto.date, 'outside if condition euromillions' );

        const mailSetup = {
          html: nodemailer.htmlToSend(
            lotto.mostRepeated,
            lotto.stars.mostRepeated
          ),
          subject: `Most repeated for ${globalHelper.hackyDate()} ✔`
        };

        Object.assign( nodemailer.mailOptions, mailSetup );

        // send mail with defined transport object
        nodemailer.transporter.sendMail( nodemailer.mailOptions, function( error, info ){
          if ( error ) {
              return console.log( error );
          }
          console.log( `Message sent: ${info.response}` );
        });
      }
      setTimeout(() => {
        mongoose.disconnect();
        console.log( 'euro disconnect mongoDB' );
      }, 3000 );
    });
  });
};
