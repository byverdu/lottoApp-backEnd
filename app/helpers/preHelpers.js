/**
 * @class
 * Class for String manipulation
 */
exports.helperString = {
  /**
   * Deletes white spaces for the element passed
   * @memberof HelperString
   * @param  {String} elem - string with a white space
   * @return {String}      - trimmed element
   * @example
   * console.log(HelperString.deleteWhiteSpace(' 09')); // '09'
   */
  deleteWhiteSpace( element ) {
    // const newElement = element.trim();
    return element.trim();
  },

  /**
   * Adds '0' for numbers that are smaller than 10 and with one digit
   * @memberof HelperString
   * @param  {String} elem - numbers as a String type
   * @return {String}      - formatted number if condition applies
   * @example
   * console.log(HelperString.addStringNumZero('9')); // '09'
   */
  addStringNumZero( element ) {
    // let newElement = element;
    // if ( element <= 9 && element.length < 2 ) {
    //   newElement = `0${element}`;
    // }
    return element <= 9 ? `0${element}` : `${element}`;
  },

  /**
   * Sorts an string in descendent order
   * @memberof HelperString
   * @param  {String} elem         - unordered string of numbers
   * @param  {Function} sortMethod - method that sorts an array
   * @see sortMethod() => {@link HelperArray}.sortArrayFromFirstToLast()
   * @param  {Function} concatMethod - method that concats strings
   * @see concatMethod() => {@link HelperArray}.concatToSingleString()
   * @return {String}              - ordered numbers
   */
  orderString( elem, sortMethod, concatMethod ) {
    const tempArray = elem.split( ',' );
    // const sortedArray = sortMethod( tempArray );
    return concatMethod( sortMethod( tempArray ));
  }
};

/**
 * @class
 * Class for Array manipulation
 */
exports.helperArray = {
  /**
   * Sorts an array in descendent order
   * @memberof HelperArray
   * @param  {Array} array - Array of numbers as a String type
   * @return {Array}      - Sorted array
   * @example console.log(HelperArray.sortArrayFromFirstToLast(['29', '11'])) // ['11', '29']
   * @link{HelperString}
   */
  sortArrayFromFirstToLast( array ) {
    return array.sort(( a, b ) => ( a - b ));
  },

  /**
   * Sorts an array by object property
   * @memberof HelperArray
   * @param  {Array} array - Array of objects
   * @return {Array}      - Array with objects ordered by "count" property
   * @example HelperArray.sortArrayByCount([{index: '07', count: 1},{index: '12', count: 4}])
   * // [{index: '12', count: 4},{index: '07', count: 1}]
   */
  sortArrayByCount( array ) {
    return array.sort(( a, b ) => ( b.count - a.count ));
  },

  /**
   * Concats an array to String
   * @memberof HelperArray
   * @param  {Array} array - Array of numbers as a String type
   * @return {String}      - Concated string from array passed
   * @example console.log(HelperArray.concatToSingleString(['29', '11'])) // '11,29'
   * @link{HelperString}
   */
  concatToSingleString( array ) {
    // let result = '';
    // let result2 = '';
    // array.map(( el ) => {
    //   result = result.concat( el, ',' );
    //   return result;
    // });

    return array.join( ',' );
  },

  /**
   * Splits array content
   * @memberof HelperArray
   * @param  {Array} array - Array with a single string of numbers separated by ','
   * @return {Array}      - Array populated with strings
   * @example console.log(HelperArray.splitArray(['29,11'])) // ['11','29']
   */
  splitArray( array ) {
    // const tempArray = [];
    // array.forEach(( el ) => {
    //   tempArray.push( el.split( ',' ));
    // });
    // return tempArray;
    return array.map( item => item.split( ',' ));
  },

  /**
   * Slices an array [result from sortArrayByCount] using the value passed as parameter
   * @memberof HelperArray
   * @param  {Array} array - Array with objects ordered by "count" property
   * @param  {Number} count - Number of items to slice
   * @return {Array}      - Array sliced by the count specified
   * @example HelperArray.sliceArrayByCount([{index: '12', count: 4},{index: '07', count: 8}])
   * // [{index: '07', count: 8},{index: '12', count: 4}]
   */
  sliceArrayByCount( array, count ) {
    // const slicedArray = array.slice( 0, count );
    return array.slice( 0, count );
  }
};

/**
 * @class
 * Class for Object manipulation
 */
exports.helperObject = {
  /**
   * Gets value from a property
   * @memberof HelperObject
   * @param  {Array} array - Array with objects ordered by "index" property
   * @return {Array}      - Array populated with values of property "index"
   * @example HelperObject.extractValueByIndex([{index: '07', count: 8},{index: '12', count: 4}])
   * // ['07','12']
   */
  extractValueByIndex( array ) {
    // const mostRepeated = [];
    //
    // array.forEach( el => {
    //   mostRepeated.push( el.index );
    // });
    return array.map( item => item.index );
  },

  /**
   * Container for color values
   * @memberof HelperObject
   */
  objectColorProperty: {
    green: 'greenItem',
    orange: 'orangeItem',
    red: 'redItem'
  },

  /**
   * Adds new "color" property to an object
   * @memberof HelperObject
   * @param  {Array} array   - Container with all objects to work with
   * @param  {Object} objColor - Container with color values
   * @param  {String} thisColor - Reference value as index for the container
   * @return {Object}            - Object with new color property
   */
  setColorProperty( array, objColor, thisColor ) {
    // array.forEach(( el, ind, arr ) => {
    //   arr[ ind ].color = objColor[ thisColor ];
    //   return arr;
    // });
    // return array;
    const tempObj = {};
    return array.map( item => {
      tempObj.color = objColor[ thisColor ];
      return Object.assign( item, tempObj );
    });
  }
};

/**
 * @class
 * Class for Number manipulation
 */
exports.helperNumber = {
  /**
   * Divides a number
   * @memberof HelperNumber
   * @param  {Array} array     - Array with values
   * @param  {Number} fraction - Number value to divide the array length
   * @return {Number}          - Biggest number possible from the division
   * @example var array = new Array(49);
   * console.log(HelperNumber.findFractionNumber(array, 3)) // 17
   */
  findFractionNumber( array, fraction ) {
    // const result = Math.ceil( array.length / fraction );
    return Math.ceil( array.length / fraction );
  }
};

/**
 * Container for the Spanish date values
 * @type {Object}
 */
const spanishValues = {
  days: [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ],
  months: [
    'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov'
  ]
};

/**
 * Returns value per index
 * @param  {Array}  array - Array with Spanish values
 * @param  {Number} index - numeric value from getValuesNewDate()
 * @return {String}       - Spanish value
 */
const getSpanishValues = ( array, index ) => array[ index ];

/**
 * Getter for Date values [day,month...]
 * @return {Object} Container with numeric values from calling Date() methods
 */
const getValuesNewDate = () => {
  const date = new Date();

  return {
    getDayWeek: date.getDay(),
    getDayMonth: date.getDate(),
    getMonth: date.getMonth(),
    getYear: date.getFullYear()
  };
};

/**
 * @class
 * Converts Date into a custom format
 */
exports.helperDate = {

  /**
   * Formats a Date instance to a custom string, uses all inner variables
   * @memberof HelperDate
   * @return {String} - A formatted Spanish date e.g 'Lunes, 12-Oct-2015'
   */
  buildSpanishDate() {
    const DateValues = getValuesNewDate();
    const day = getSpanishValues( spanishValues.days, DateValues.getDayWeek );
    const dayNumber = DateValues.getDayMonth;
    const month = getSpanishValues( spanishValues.months, DateValues.getMonth );
    const year = DateValues.getYear;

    return `${day}, ${dayNumber}-${month}-${year}`;
  }
};
