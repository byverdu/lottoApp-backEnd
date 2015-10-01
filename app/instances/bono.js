'use strict';

import mongoose from 'mongoose';
var Lotto = require('../model/lottoSchema')();
import config from '../config/config';

var configBono = config().lotto.bonoloto,
  // bono = new Lotto({lottoID: configBono.lottoID}),
  db = mongoose.connection;

// bono.setNewDate();
console.log(Lotto, 'jojoiuhnjknkjnjnkjnknjk');
// console.log(bono, 'outside');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('open connection');

  Lotto.update({lottoID: 'bonoloto'}, {date: Lotto.setNewDate()}, (err, lotto) => {
    if(err){
      console.log(err);
    } else {
      console.log(lotto);
    }
  });





  // console.log(bono, 'inside');

  // bono.save(function(err, bono) {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   console.log(bono, 'on saving');
  // });

  // db.close();
});
