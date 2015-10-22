'use strict';

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

    allResultLongObjCounted: [{index: '07', count: 1},{index: '12', count: 4}, {index: '13', count: 1}, {index: '15', count: 3}, {index: '16', count: 3}, {index: '19', count: 1}, {index: '20', count: 1}, {index: '23', count: 3}, {index: '24', count: 1}, {index: '27', count: 1}, {index: '28', count: 3}, {index: '30', count: 1}, {index: '33', count: 1}, {index: '37', count: 1}, {index: '38', count: 1}, {index: '39', count: 2}, {index: '41', count: 1}, {index: '42', count: 1}, {index: '43', count: 1}, {index: '44', count: 1},{index: '46', count: 1},{index: '47', count: 1}, {index: '49', count: 2}
  ],

  allResultLongObjOrdered: [ { index: '12', count: 4 },{ index: '16', count: 3 },{ index: '23', count: 3 },{ index: '28', count: 3 },{ index: '15', count: 3 },{ index: '49', count: 2 },{ index: '39', count: 2 },{ index: '07', count: 1 },{ index: '24', count: 1 },{ index: '27', count: 1 },{ index: '13', count: 1 },{ index: '30', count: 1 },{ index: '33', count: 1 },{ index: '37', count: 1 },{ index: '38', count: 1 },{ index: '20', count: 1 },{ index: '41', count: 1 },{ index: '42', count: 1 },{ index: '43', count: 1 },{ index: '44', count: 1 },{ index: '46', count: 1 },{ index: '47', count: 1 },{ index: '19', count: 1 } ],

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
    extraInfoPrice: [ 'Recaudación en este sorteo', '0,00 €' ] }
};



};
