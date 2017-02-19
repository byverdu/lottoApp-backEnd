// nodemailer config for xray checker

const nodemailer = require( 'nodemailer' );
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.LOTTO_MAIL,
    pass: process.env.LOTTO_TOKEN
  }
});

export default function xraySendMail( raffle, errorMsg ) {
  const mailOptions = {
    from: '"Lucky Lotto 👥" <foo@blurdybloop.com>',
    to: 'byverdu@gmail.com',
    html: errorMsg,
    subject: `Error for ${raffle}`
  };

  // send mail with defined transport object
  transporter.sendMail( mailOptions, ( error, info ) => {
    if ( error ) {
      console.log( error );
    }
    console.log( `Message sent: ${info.response}` );
  });
}
