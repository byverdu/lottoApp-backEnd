// nodemailer config for Euro raffle

const nodemailer = require( 'nodemailer' );
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.LOTTO_MAIL,
    pass: process.env.LOTTO_TOKEN
  }
});

function itemsToString( result, stringToSplit ) {
  let innerResult = result;
  stringToSplit.split( ',' ).forEach(( item ) => {
    innerResult += `<li>🤑 ${item}</li>`;
  });
  return innerResult;
}

function htmlToSend( mostRepeated, mostRepeatedStars ) {
  const liNumbers = itemsToString( '', mostRepeated );
  const liStars = itemsToString( '', mostRepeatedStars );
  return `<h3>⚡️ Numbers ⚡️</h3>
<ul style="list-style:none">${liNumbers}</ul>
          <h3>⭐ Stars ⭐</h3>
          <ul style="list-style:none">${liStars}</ul>`;
}

export default function euroRaffleSendMail( mostRepeated, mostRepeatedStars, date ) {
  const mailOptions = {
    from: '"Lucky Lotto 👥" <foo@blurdybloop.com>',
    to: 'byverdu@gmail.com',
    html: htmlToSend(
      mostRepeated,
      mostRepeatedStars
    ),
    subject: `Most repeated for ${date} ✔`
  };

  // send mail with defined transport object
  transporter.sendMail( mailOptions, ( error, info ) => {
    if ( error ) {
      console.log( error );
    }
    console.log( `Message sent: ${info.response}` );
  });
}
