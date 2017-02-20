// General Configuration for Xray, db ...

import * as config from '../helpers/configHelper';

const {
  specificEuroProps,
  specificPrimiProps,
  specificBonoProps,
  buildPropsFor
} = config;

module.exports = {
  database: {
    development: 'mongodb://localhost/lottoApp',
    production: process.env.MONGO_LOTTO_URL
  },
  lotto: {
    sendMailDays: [2, 5],
    fractionNumber: 3,
    euromillions: buildPropsFor( 'euromillones', specificEuroProps ),
    primitiva: buildPropsFor( 'primitiva', specificPrimiProps ),
    bonoloto: buildPropsFor( 'bonoloto', specificBonoProps )
  }
};
