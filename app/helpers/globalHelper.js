import { helperObject as _Object } from './preHelpers';
const config = require( '../config/config' ).lotto;
const xrayUtils = require( '../config/xray' );

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
  compare2arrays( firstArray, secondArray ) {
    console.log(
      firstArray.every(( item, index ) => item.trim() === secondArray[ index ].trim()),
      'compare2arrays boolean'
    );

    if ( firstArray.length !== secondArray.length ) {
      return false;
    }
    return firstArray.every(
      ( item, index ) => item.trim() === secondArray[ index ].trim()
    );
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
    const category = _Object.buildObjectForProp( lottoObject.categoryPrice, 'category' );
    const winners = _Object.buildObjectForProp( lottoObject.winnerPrice, 'winners' );
    const price = _Object.buildObjectForProp( lottoObject.moneyPrice, 'price' );

    _Object.mergePropsObjects( category, winners );
    _Object.mergePropsObjects( category, price );

    if ( lottoObject.hasOwnProperty( 'spanishWinners' )) {
      const spanish = _Object.buildObjectForProp( lottoObject.spanishWinners, 'spanish' );
      _Object.mergePropsObjects( category, spanish );
    }
    return category;
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
  },

  /**
   * getArrayRaffleDays - Returns the raffleDays array for the
   * lottoID passed
   *
   * @param  {String} lottoID - raffle name
   * @param  {Object} configObj - config object
   * @return {Array}            - raffleDays array
   */
  getArrayRaffleDays( lottoID ) {
    return config[ lottoID ].raffleDays;
  },

  /**
   * createParamsXrayModule - Container for parameters
   * passed to xray module
   * @param  {String} lottoID - raffle type
   * @return {Object}         - props used in xray module
   * (i.e) lottoID, sliceCountBall, promise
   */
  createParamsXrayModule( lottoID ) {
    return {
      lottoID,
      sliceCountBall: config[ lottoID ].sliceCountBall,
      promise: xrayUtils.getRaffleInfo( lottoID )
    };
  },


  /**
   * getCommonSelectorsRaffle - Gets common props from config
   * @param  {String} lottoID - raffle name
   * @return {Object}         - props with selectors
   */
  getCommonSelectorsRaffle( lottoID ) {
    return {
      numbers: [config[ lottoID ].numbers],
      extras: [config[ lottoID ].extras]
    };
  }
};
