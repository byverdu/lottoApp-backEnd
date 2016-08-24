/* eslint-disable */

module.exports = function() {

  return {

    totalNumberBalls: 50,
    fraction: 3,
    sliceCountBall: 6,
    sliceStars: 2,
    compare2arraysOne: ['07','12','15','23', '45', '89'],
    compare2arraysTwo: ['07','12','15','23', '45', '89'],
    compare2arraysThree: ['07','11','15','23', '49', '89'],

    allResultLong: [
      '07,12,15,23,39,46',
      '12,15,28,37,42,49',
      '12,15,16,19,20,39',
      '13,24,28,30,43,44',
      '12,16,23,27,28,41',
      '16,23,33,38,47,49'
    ],

    allResultShort: [
      '18,28,30,31,34,40',
      '01,15,35,36,37,40',
      '02,11,29,30,32,45'
    ],

    cretateDataStars: (lotto) => {
      lotto.setLastResultStars(['07,09']);
      lotto.setAllResultStars();
      lotto.setLastResultStars(['37,40']);
      lotto.setAllResultStars();
      lotto.setLastResultStars(['18,28']);
      lotto.setAllResultStars();
      lotto.setLastResultStars(['30,30']);
      lotto.setAllResultStars();
      lotto.setLastResultStars(['34,40']);
      lotto.setAllResultStars();
    },

    spanishValues: {
      days: [
        'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
      ],
      months: [
        'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',
      ]
    },

    getSpanishValues: (array, index) => {
      return array[index];
    },

    getValuesNewDate: () => {

      let date = new Date();

      return {
        getDayWeek: date.getDay(),
        getDayMonth: date.getDate(),
        getMonth: date.getMonth(),
        getYear: date.getFullYear()
      };
    },

    allResultLongObjCounted: [{"index":"01","count":9},{"index":"02","count":13},{"index":"03","count":13},{"index":"04","count":12},{"index":"05","count":18},{"index":"06","count":16},{"index":"07","count":12},{"index":"08","count":13},{"index":"09","count":3},{"index":"10","count":13},{"index":"11","count":10},{"index":"12","count":7},{"index":"13","count":11},{"index":"14","count":12},{"index":"15","count":12},{"index":"16","count":10},{"index":"17","count":10},{"index":"18","count":14},{"index":"19","count":16},{"index":"20","count":13},{"index":"21","count":12},{"index":"22","count":11},{"index":"23","count":15},{"index":"24","count":18},{"index":"25","count":13},{"index":"26","count":16},{"index":"27","count":15},{"index":"28","count":11},{"index":"29","count":10},{"index":"30","count":17},{"index":"31","count":16},{"index":"32","count":9},{"index":"33","count":9},{"index":"34","count":15},{"index":"35","count":11},{"index":"36","count":8},{"index":"37","count":16},{"index":"38","count":9},{"index":"39","count":16},{"index":"40","count":7},{"index":"41","count":8},{"index":"42","count":16},{"index":"43","count":10},{"index":"44","count":21},{"index":"45","count":15},{"index":"46","count":5},{"index":"47","count":12},{"index":"48","count":7},{"index":"49","count":11},{"index":"50","count":14}],

  allResultLongObjOrdered: [ { index: '44', count: 21 },{ index: '05', count: 18 },{ index: '24', count: 18 },{ index: '30', count: 17 },{ index: '37', count: 16 },{ index: '39', count: 16 },{ index: '26', count: 16 },{ index: '06', count: 16 },{ index: '31', count: 16 },{ index: '19', count: 16 },{ index: '42', count: 16 },{ index: '27', count: 15 },{ index: '45', count: 15 },{ index: '34', count: 15 },{ index: '23', count: 15 },{ index: '50', count: 14 },{ index: '18', count: 14 },{ index: '10', count: 13 },{ index: '08', count: 13 },{ index: '03', count: 13 },{ index: '20', count: 13 },{ index: '02', count: 13 },{ index: '25', count: 13 },{ index: '47', count: 12 },{ index: '14', count: 12 },{ index: '07', count: 12 },{ index: '04', count: 12 },{ index: '21', count: 12 },{ index: '15', count: 12 },{ index: '49', count: 11 },{ index: '28', count: 11 },{ index: '22', count: 11 },{ index: '13', count: 11 },{ index: '35', count: 11 },{ index: '11', count: 10 },{ index: '29', count: 10 },{ index: '43', count: 10 },{ index: '17', count: 10 },{ index: '16', count: 10 },{ index: '33', count: 9 },{ index: '01', count: 9 },{ index: '38', count: 9 },{ index: '32', count: 9 },{ index: '36', count: 8 },{ index: '41', count: 8 },{ index: '48', count: 7 },{ index: '12', count: 7 },{ index: '40', count: 7 },{ index: '46', count: 5 },{ index: '09', count: 3 } ],

  getPricesInfoXray: { categoryPrice:
     [ 'Categoría',
       '1ª (6 aciertos)',
       '2ª (5+C)',
       '3ª (5 aciertos)',
       '4ª (4 aciertos)',
       '5ª (3 aciertos)',
       'Reintegro' ],
    winnerPrice: [ 'Acertantes', '1', '1', '77', '3.743', '71.458', '422.145' ],
    moneyPrice:
     [ 'Premio',
       '297.320,78€',
       '158.571,08€',
       '1.029,68€',
       '33,54€',
       '4,00€',
       '0,50€' ],
    extraInfoPrice: [ 'Recaudación en este sorteo', '0,00 €' ]
  },
  realData: [
    "19,23,27,42,44",
       		"02,07,10,23,43",
       		"01,02,18,31,36",
       		"06,24,35,49,50",
       		"01,22,23,24,31",
       		"06,08,27,37,41",
       		"12,13,17,22,43",
       		"05,19,31,43,50",
       		"01,06,13,22,28",
       		"13,20,24,29,45",
       		"03,27,31,38,44",
       		"02,20,27,33,45",
       		"01,02,11,27,29",
       		"18,20,25,26,37",
       		"19,26,32,33,42",
       		"04,12,35,42,48",
       		"05,19,34,35,41",
       		"18,20,23,42,48",
       		"08,10,15,16,31",
       		"01,21,33,37,38",
       		"03,17,19,46,47",
       		"08,17,25,41,47",
       		"02,04,06,19,39",
       		"23,26,36,37,49",
       		"13,17,28,30,32",
       		"21,25,28,35,42",
       		"12,32,38,43,44",
       		"03,05,22,27,44",
       		"05,10,38,40,41",
       		"01,04,23,33,44",
       		"06,24,25,27,30",
       		"08,27,34,36,39",
       		"07,30,37,39,42",
       		"07,20,26,28,50",
       		"03,04,19,28,43",
       		"16,18,26,38,44",
       		"06,10,28,45,50",
       		"11,18,29,42,49",
       		"08,12,19,30,33",
       		"03,14,26,47,50",
       		"21,24,31,39,47",
       		"13,15,20,24,46",
       		"13,21,24,44,49",
       		"18,23,26,35,44",
       		"04,30,31,38,42",
       		"05,19,24,31,37",
       		"03,21,26,28,45",
       		"04,13,30,34,47",
       		"23,26,29,37,40",
       		"05,33,36,38,47",
       		"03,08,31,34,47",
       		"07,13,16,25,26",
       		"05,24,27,41,45",
       		"02,15,32,39,44",
       		"17,31,33,44,50",
       		"10,26,30,39,50",
       		"13,17,20,30,45",
       		"12,24,39,42,44",
       		"02,05,18,30,43",
       		"04,10,14,37,46",
       		"03,25,28,34,50",
       		"05,14,17,25,47",
       		"06,08,11,13,21",
       		"23,30,47,49,50",
       		"02,06,23,30,31",
       		"04,05,18,22,23",
       		"11,23,26,38,44",
       		"03,14,37,42,48",
       		"10,24,26,39,40",
       		"02,30,32,39,44",
       		"08,20,24,28,49",
       		"27,29,37,39,49",
       		"18,25,39,44,50",
       		"22,23,25,30,43",
       		"24,32,34,35,49",
       		"02,24,30,34,39",
       		"06,14,17,42,45",
       		"05,19,29,31,40",
       		"24,26,28,36,45",
       		"03,19,20,25,26",
       		"01,10,17,20,42",
       		"07,14,19,47,49",
       		"14,29,30,40,46",
       		"05,35,42,44,47",
       		"26,30,31,35,37",
       		"18,24,35,44,45",
       		"05,06,07,21,24",
       		"03,04,20,45,48",
       		"07,23,29,37,41",
       		"02,07,08,45,48",
       		"05,09,17,32,34",
       		"05,08,10,11,37",
       		"10,15,16,36,37",
       		"07,14,20,31,42",
       		"04,16,22,38,49",
       		"03,06,10,19,24",
       		"11,15,28,34,37",
       		"11,12,15,18,44",
       		"06,07,18,33,41",
       		"05,08,15,35,41",
       		"06,18,19,34,36",
       		"01,21,22,43,48",
       		"14,20,27,29,44",
       		"02,09,21,35,46",
       		"23,32,36,43,49",
       		"16,21,34,40,50",
       		"10,15,39,45,50",
       		"01,05,21,39,44",
       		"02,03,08,15,16",
       		"04,07,39,44,45",
       		"07,10,11,12,19",
       		"04,16,18,43,47",
       		"27,31,33,42,50",
       		"11,29,30,31,34",
       		"06,19,21,27,45",
       		"08,09,27,45,50",
       		"14,16,39,40,42",
       		"13,14,32,37,48",
       		"11,14,15,27,44",
       		"15,16,22,25,34",
       		"05,06,22,25,34",
       		"06,15,22,25,34"
  ]
};



};
