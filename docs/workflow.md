# How to install
In order to use the app follow this steps:

```
> git clone https://github.com/byverdu/lottoApp-backEnd.git
> cd lottoApp-backEnd
> npm install

// start a mongodb server
> mongodb

// run the tests
> npm test

// run the app on development
> nodemon --exec babel-node app/bin/init

// run the app on production
> babel-node app/bin/init
```

## Dependencies
1. nodejs: v4.0.0 (ES6 features)
2. babel: ^5.8.23, <!-- ES6 compiler -->
3. express: ^4.13.3, <!-- node framework -->
4. jshint: ^2.8.0, <!-- javascript linter -->
5. mongodb: ^2.0.40, <!-- NOSQL database-->
6. mongodb-uri: ^0.9.7, <!-- prepares mongodb uri to parse -->
7. mongoose: ^4.1.1, <!-- mongodb ODM -->
8. node-persist: 0.0.6, <!-- window.localStorage for node -->
9. nodemon: ^1.7.1, <!-- tool that restarts node after changes -->
10. request: ^2.61.0,
11. x-ray: ^2.0.2 <!-- web scrapper -->

### Useful npm packages that I have found
1. mddir: creates a markdown file with the tree folders from your project
2. jsdoc-to-markdown: converts jsDoc to markdown

# Flow that follows the app.

The starting point for this project is `app/bin/init` which calls `server.js`.

On the server file there is a timing loop that will run every 10 minutes. Inside this timing there is a Date constructor that will be called every time to create a new instance of Date that will be used to check certain conditions e.g. day number and hour number.

```js
let configBono = require('./config/config')(),.lotto.bonoloto;

setInterval(() => {

  let newDate = new Date(),
    day = newDate.getDay(),
    hour = newDate.getHours(),
    checkDayBono = configBono.raffleDays.includes(day); // [1,2,3,5]

  if (hour === 20) {
    if (checkDayBono) {
      require('./lottoXray/bonoXray')(); // scrapper for last result
    }
  }
  if (hour === 21) {
    if (checkDayBono) {
      require('./lottoXray/bonoWinnerXray')(); // scrapper for breakdown prices
    }
  }
}, 600000);
```
If the condition success, a web scrapper module will be called to find the latest result for that type of raffle. The module `node-persist` is going to store the values for the latest result.

If the result from the scrapper is different to the on that is stored the app will call the instances file.

```js
import Xray from '../config/xray';
import {GlobalHelper} from '../helpers/globalHelper';
let configBono = require('../config/config')().lotto.bonoloto,
  storage = require('../config/storage');

module.exports = () => {

  xray.get(configBono.url, {numbers:[configBono.numbers],extras:[configBono.extras]} ).then(result => {

    let bonoStorage = storage.getItem('bonoNumbers').numbers;

    // Comparing result stored with latest result
    if (!globalHelper.compare2arrays(bonoStorage, result.numbers, configBono.sliceCountBall)) {

      storage.setItem('bonoNumbers', {newStorage}).then(
        () => {
          require('../instances/bono')(); // Calling instance file
        },
        () => {
          console.log('error setting storage');
        });
    }
  });
};
```

If the result stored is equal to the latest result the module that instantiates the db will be called. In this module is going to be checked that the stored result is equal to the value stored on the database. If they are different the new values will be stored on db.

```js
import mongoose from 'mongoose';
import Lotto from '../model/lottoSchema';
import {SchemaHelper} from '../helpers/schemaHelper';
import {GlobalHelper} from '../helpers/globalHelper';
var configBono = require('../config/config')().lotto.bonoloto,
  globalHelper = new GlobalHelper(),
  schemaHelper = new SchemaHelper(),
  storage = require('../config/storage');

module.exports = () => {
  require('../config/db')();
  let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  globalHelper.customFindOneMongoose(Lotto, { lottoID: 'bonoloto' }, (err, lotto) => {
    if (err) {
      console.log(err);
    } else {

      let bonoStorage = storage.getItem('bonoNumbers'),
          storedLastResult = lotto.getLastResult(),
          newPrimiStorage = schemaHelper.setXrayArrayToSave(bonoStorage.numbers);

      if (newPrimiStorage !== storedLastResult) { // Comparing stored value with db value

        {Apply all methods that sets properties values for the Schema}
        // Saving to db
        lotto.save((err, lotto) => {
          if (err) {
            console.log(err);
          } else {
            console.log(lotto, 'inside if condition bonoloto');
          }
        });
      }
    }
  });
});
// Disconnecting db so other calls will success
setTimeout(() => {
    mongoose.disconnect();
  }, 1000);
};

```
