'use strict';

//
// require('./lottoXray/bonoXray');
// // require('./lottoXray/euroXray');
//
// require('./config/db');

setInterval(()=>{
console.log('server file called');

require('./lottoXray/bonoXray')();

},6000);
//

module.exports = require('express')();
