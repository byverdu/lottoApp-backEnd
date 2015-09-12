'use strict';

function HelperDate() {}

HelperDate.prototype.getValuesNewDate = () => {

	let date = new Date();

	return {
		getDayWeek: date.getDay(),
		getDayMonth: date.getDate(),
		getMonth: date.getMonth(),
		getYear: date.getFullYear()
	};
};

HelperDate.prototype.getSpanishValues = (array,
	index) => {
	return array[index];
};

HelperDate.prototype.spanishValues = {
	days: [
		'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',
	],
	months: [
		'Dic', 'Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',
	]
};

HelperDate.prototype.buildSpanishDate = () => {

	let day,
		dayNumber,
		month,
		year,
		helper;

	helper = new HelperDate();

	day = helper.getSpanishValues(helper.spanishValues.days, helper.getValuesNewDate().getDayWeek);
	dayNumber = helper.getValuesNewDate().getDayMonth;
	month = helper.getSpanishValues(helper.spanishValues.months, helper.getValuesNewDate().getMonth);
	year = helper.getValuesNewDate().getYear;

	return `${day}, ${dayNumber}-${month}-${year}`;
};

module.exports = HelperDate;
