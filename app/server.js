'use strict';

setInterval(()=>{
console.log('server file called');

require('./lottoXray/primiXray')();
// require('./instances/bono')();

},60000);


// var storage = require('./config/storage');
// let newStorage = {
//       numbers: ['15','4','15','4','15','4'],
//       extras: ['15','4']
//     };
// storage.setItem('primiNumbers', newStorage);
// console.log(storage.getItem('primiNumbers'));

module.exports = require('express')();
