const issueWarning = require('./warn');

function padOutNumber(roundedNumber, max) {

	const totalZeros = `${max}`.length - `${roundedNumber}`.length;
	const paddedZeros = new Array(totalZeros).fill('0').join('');

	return `${paddedZeros}${roundedNumber}`;

}

function generate({ min = 0, max, pad = false } = {}) {

	const currentParameters = () => `(min = ${min} | max = ${max || 'not supplied'})`;

	if (!max && isNaN(max)) return issueWarning(`please supply a "max" parameter ${currentParameters()}`);
	if (min > max) return issueWarning(`your "min" is greater than your "max" parameter ${currentParameters()}`);

	const randomNumber = (Math.random() * (max - min + 1)) + min;
	const roundedNumber = Math.floor(randomNumber);

	return pad ? padOutNumber(roundedNumber, max) : roundedNumber;

}

module.exports = generate;
