'use strict';

setInterval(()=>{
console.log('server file called');

// require('./lottoXray/euroXray')();
// require('./lottoXray/primiXray')();
// require('./lottoXray/bonoXray')();


},9000);

//
// var storage = require('./config/storage');
// let newStorage = {
//       numbers: ['15','4','15','4','15'],
//       extras: ['01','04']
//     };
// storage.setItem('euroNumbers', newStorage);
// console.log(storage.getItem('euroNumbers'));

module.exports = require('express')();
