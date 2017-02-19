// nodemailer config

const nodemailer = require( 'nodemailer' );
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.LOTTO_MAIL,
    pass: process.env.LOTTO_TOKEN
  }
});

// const mailOptions = {
//   from: '"Lucky Lotto 👥" <foo@blurdybloop.com>',
//   to: 'byverdu@gmail.com'
// };

function sendEmail( raffle, errorMsg ) {
  const mailOptions = {
    from: '"Lucky Lotto 👥" <foo@blurdybloop.com>',
    to: 'byverdu@gmail.com',
    html: errorMsg,
    subject: `Error for ${raffle}`
  };

  // Object.assign( nodemailerXray.mailOptions, mailSetup );

  // send mail with defined transport object
  transporter.sendMail( mailOptions, ( error, info ) => {
    if ( error ) {
      console.log( error );
    }
    console.log( `Message sent: ${info.response}` );
  });
}

export default {
  sendEmail
  // transporter,
  // mailOptions,
  // htmlToSend
};
