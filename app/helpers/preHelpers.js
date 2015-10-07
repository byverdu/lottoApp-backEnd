'use strict';

/**
 * @constructor
 * Helper Class for String manipulation
 */
function HelperString() {

  /**
   * Deletes white spaces for the element passed
   * @param  {string} elem - string with white space ' 09'
   * @return {string}        trimmed element '09'
   */
  this.deleteWhiteSpace = (elem) => {
    elem = elem.trim();
    return elem;
  };

  this.addStringNumZero = (elem) => {
    if (elem <= 9 && elem.length < 2) {
      elem = `0${elem}`;
    }
    return elem;
  };

  this.orderString = (string, sortMethod, concatMethod) => {
    let tempArray = string.split(',');
    let sortedArray = sortMethod(tempArray);
    return concatMethod(sortedArray);
  };

  return {
    deleteWhiteSpace: this.deleteWhiteSpace,
    addStringNumZero: this.addStringNumZero,
    orderString: this.orderString
  };
}

function HelperDate() {

  var spanishValues = {
    days: [
      'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
    ],
    months: [
      'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',
    ]
  };

  var getSpanishValues = (array, index) => {
    return array[index];
  };

  var getValuesNewDate = () => {

    let date = new Date();

    return {
      getDayWeek: date.getDay(),
      getDayMonth: date.getDate(),
      getMonth: date.getMonth(),
      getYear: date.getFullYear()
    };
  };

  this.buildSpanishDate = () => {

    let day,
      dayNumber,
      month,
      year;

    day = getSpanishValues(spanishValues.days, getValuesNewDate().getDayWeek);
    dayNumber = getValuesNewDate().getDayMonth;
    month = getSpanishValues(spanishValues.months, getValuesNewDate().getMonth);
    year = getValuesNewDate().getYear;

    return `${day}, ${dayNumber}-${month}-${year}`;
  };

  return {
    buildSpanishDate: this.buildSpanishDate
  };
}

function HelperArray() {

  this.sortArrayFromFirstToLast = (array) => {
    return array.sort( (a, b) => {
      return (a-b);
    });
  };

  this.sortArrayByCount = (array) => {
    return array.sort(function(a,b){
      return (b.count-a.count);
    });
  };

  this.concatToSingleString = (array) => {

    var result = '';
    array.map((el) => {
      result = result.concat(el,',');
    });
    return result.slice(0, -1);
  };

  this.splitArray = (array) => {

    let tempArray = [];
    array.map( (el) => {
      tempArray.push(el.split(','));
    });
    return tempArray;
  };

  this.sliceArrayByLottoCount = (array, count) => {
    return array.slice(0, count);
  };

  return {
    sortArrayFromFirstToLast: this.sortArrayFromFirstToLast,
    sortArrayByCount: this.sortArrayByCount,
    concatToSingleString: this.concatToSingleString,
    splitArray: this.splitArray,
    sliceArrayByLottoCount: this.sliceArrayByLottoCount
  };
}

function HelperObject(){

  this.extractValueByIndex = (array) => {
    let mostRepeated = [];

    array.map( el => {
      mostRepeated.push(el.index);
    });

    return mostRepeated;
  };

  return {
    extractValueByIndex: this.extractValueByIndex
  };
}

export {
  HelperString, HelperDate, HelperArray, HelperObject
};
