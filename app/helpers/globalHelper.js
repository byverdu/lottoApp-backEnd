'use strict';

/**
 * Helper Class
 */
export function GlobalHelper() {

  this.compare2arrays = (first, second, lottoCount) => {
    var assertion = false,
      count = 0;

    for (var i = 0; i < first.length; i++) {
      first[i] = first[i].trim();
      second[i] = second[i].trim();
      if (first[i].includes(second[i])) {
        console.log(first[i].length,second[i].length);
        count++;
        if (count === lottoCount) {
          assertion = true;
        }
      }
    }
    console.log(assertion, 'compare2arrays boolean');
    return assertion;
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
    customFindOneMongoose: this.customFindOneMongoose
  };
}
