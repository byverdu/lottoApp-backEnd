// EuroMail Mongo instance
import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import { globalHelper } from '../helpers/globalHelper';
import euroRaffleSendMail from '../config/nodemailerEuro';

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

        euroRaffleSendMail(
            lotto.mostRepeated,
            lotto.stars.mostRepeated,
            globalHelper.hackyDate()
        );
      }

      setTimeout(() => {
        mongoose.disconnect();
        console.log( 'euro disconnect mongoDB' );
      }, 3000 );
    });
  });
};
