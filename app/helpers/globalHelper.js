/**
 * Used inside globalHelper.getPricesInfo()
 */
const setValuesObjectForWinners = ( value, value2, value3, value4 ) => {
  if ( value4 === undefined ) {
    return {
      category: value,
      winners: value2,
      price: value3
    };
  }
  return {
    category: value,
    winners: value2,
    spanish: value4,
    price: value3
  };
};

/**
 * @class
 * Helper Class that will act on the global scope,
 */
exports.globalHelper = {
  /**
   * Compares if two arrays has the same items
   * @memberof globalHelper
   * @param  {Array} firstArray  - Array with numbers
   * @param  {Array} secondArray - Array with numbers
   * @param  {Integer} lottoCount - determines the count of items that need to be equal
   * @return {Boolean}      - true or false
   * @example
   * console.log(globalHelper.compare2arrays(['23','34'],['23','35'],2)) // false
   * console.log(globalHelper.compare2arrays(['23','34'],['23','34'],2)) // true
   */
  compare2arrays( firstArray, secondArray, lottoCount ) {
    let assertion = false;
    let count = 0;
    const tempFirstArray = firstArray;
    const tempSecondArray = secondArray;

    for ( let i = 0; i < firstArray.length; i++ ) {
      tempFirstArray[ i ] = firstArray[ i ].trim();
      tempSecondArray[ i ] = secondArray[ i ].trim();

      if ( firstArray[ i ].includes( secondArray[ i ])) {
        count++;

        if ( count === lottoCount ) {
          assertion = true;
        }
      }
    }
    console.log( assertion, 'compare2arrays boolean' );
    return assertion;
  },

  /**
   * Callback for findOne mongoDB method, so it can be stored in a variable
   * @memberof globalHelper
   * @param  {Schema}   Model       - Schema to query against
   * @param  {Object}   ObjectQuery - Object that will contain the field to query
   * @param  {Function} callback    - Callback function to execute
   */
  customFindOneMongoose( Model, ObjectQuery, callback ) {
    Model.findOne( ObjectQuery, ( err, lotto ) => {
      if ( err ) {
        callback( err, null );
      } else {
        callback( null, lotto );
      }
    });
  },

  /**
   * Iterates over arrays in order to get the data
   * @memberof globalHelper
   * @param  {Object} lottoObject - Object containing arrays
   * @return {Array}             - Array with objects formatted and ordered
   */
  getPricesInfo( lottoObject ) {
    const resultArray = [];

    lottoObject.categoryPrice.forEach(( el, ind, array ) => {
      let obj;

      lottoObject.winnerPrice.forEach(( el2, ind2, array2 ) => {
        lottoObject.moneyPrice.forEach(( el3, ind3, array3 ) => {
          if ( lottoObject.hasOwnProperty( 'spanishWinners' )) {
            lottoObject.spanishWinners.forEach(( el4, ind4, array4 ) => {
              obj = setValuesObjectForWinners( array[ ind ], array2[ ind ], array3[ ind ], array4[ ind ]);
            });
          } else {
            obj = setValuesObjectForWinners( array[ ind ], array2[ ind ], array3[ ind ]);
          }
        });
      });
      resultArray.push( obj );
    });
    resultArray.shift();

    return resultArray;
  },

  /**
   * Creates a new Date
   * @memberof globalHelper
   * @return {String} - Formatted date.
   * @example
   * console.log(globalHelper.hackyDate()) // "Thu Oct 22 2015 22:44:54"
   */
  hackyDate() {
    return new Date().toString().split( 'GMT' ).shift();
  },

  /**
   * [description]
   * @param  {Array} lottoKind - raffleDays property for each lotto from config file
   * @param  {Integer} dayNumber - Integer from invoking Date.getDay
   * @return {Boolean}
   */
  checkRaffleDay( lottoKind, dayNumber ) {
    return lottoKind.includes( dayNumber );
  }
};
