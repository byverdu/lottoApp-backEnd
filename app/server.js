'use strict';

setInterval(()=>{
console.log('server file called');

require('./lottoXray/bonoXray')();
// require('./instances/bono')();

},60000);


// var storage = require('./config/storage');
// let newStorage = {
//       numbers: ['15','4','15','4','15','4'],
//       extras: ['15','4']
//     };
// storage.setItem('bonoNumbers', newStorage);
// console.log(storage.getItem('bonoNumbers'));

module.exports = require('express')();
