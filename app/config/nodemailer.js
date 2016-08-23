// nodemailer config

const nodemailer = require( 'nodemailer' );
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.LOTTO_MAIL,
    pass: process.env.LOTTO_TOKEN
  }
});

const mailOptions = {
  from: '"Lucky Lotto 👥" <foo@blurdybloop.com>',
  to: 'byverdu@gmail.com, marlasulbaran@yahoo.com',
  subject: `Most repeated for ${new Date()} ✔`
};

function itemsToString( result, stringToSplit ) {
  let innerResult = result;
  stringToSplit.split( ',' ).forEach(( item ) => {
    innerResult += `<li>🤑 ${item}</li>`;
  });
  return innerResult;
}

function resultHtml( numbers, stars ) {
  return `<h3>⚡️ Numbers ⚡️</h3>
          <ul style="list-style:none">${numbers}</ul>
          <h3>⭐ Stars ⭐</h3>
          <ul style="list-style:none">${stars}</ul>`;
}

function htmlToSend( mostRepeated, mostRepeatedStars ) {
  const liNumbers = itemsToString( '', mostRepeated );
  const liStars = itemsToString( '', mostRepeatedStars );

  return resultHtml( liNumbers, liStars );
}

export default {
  transporter,
  mailOptions,
  htmlToSend
};
