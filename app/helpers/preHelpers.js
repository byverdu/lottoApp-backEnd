'use strict';

function HelperString() {

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

  return {
    deleteWhiteSpace: this.deleteWhiteSpace,
    addStringNumZero: this.addStringNumZero
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

  this.sortFirstToLast = (array) => {
    return array.sort( (a, b) => {
      return (a-b);
    });
  };

  this.concatString = (array) => {

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

  return {
    concatString: this.concatString,
    sortFirstToLast: this.sortFirstToLast,
    splitArray: this.splitArray
  };
}

function HelperObject(){

  
}

export {
  HelperString, HelperDate, HelperArray, HelperObject
};
