'use strict';


var fs = require('fs'),
  path = require('path');

/**
 * Helper Class
 */
export function GlobalHelper() {

  this.compare2arrays = (first, second) => {
    var assertion = false,
      count = 0;

    for (var i = 0; i < first.length; i++) {
      if (first[i].includes(second[i])) {
        count++;
        if (count === 6) {
          assertion = true;
        }
      }
    }
    console.log(assertion, 'compare2arrays boolean');
    return assertion;
  };

  this.saveScrappedDataToJson = (pathJSON, data) => {
    fs.writeFile(path.join(__dirname, pathJSON), JSON.stringify(data), err => {
      if(err){
        console.log(err);
      } else {
        console.log(`file saved ${pathJSON}`);
      }
    });
  };

  this.customFindOneMongoose = (Model, ObjectQuery, callback) => {
    Model.findOne(ObjectQuery, (err, lotto) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, lotto);
      }
    });
  };

  return {
    compare2arrays: this.compare2arrays,
    saveScrappedDataToJson: this.saveScrappedDataToJson,
    customFindOneMongoose: this.customFindOneMongoose
  };
}
