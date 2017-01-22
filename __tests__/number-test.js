'use strict';

// babel-jest

const cornChips = require('../src/');

describe('random number', () => {

	it('should generate a random number between (and including) 0 and 10', () => {

		const min = 0;
		const max = 10;
		const result = cornChips.number({ max });

		expect(result).toEqual(expect.any(Number));
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);

	});

});

describe('padded random number', () => {

	it('should generate a padded random number between (and including) 1 and 10000', () => {

		const min = 0;
		const max = 10000;
		const result = cornChips.number({ max, pad: true });
		const resultAsNumber = parseInt(result, 10);

		expect(result).toEqual(expect.any(String));
		expect(result).toHaveLength(`${max}`.length);
		expect(resultAsNumber).toBeGreaterThanOrEqual(min);
		expect(resultAsNumber).toBeLessThanOrEqual(max);

	});

});

describe('number parameters', () => {

	it('should throw an error if a max parameter is not supplied', () => {

		const request = () => cornChips.number();

		expect(request).toThrowError(/please supply a "max" parameter/);

	});

	it('should throw an error if the min parameter is larger than the max parameter', () => {

		const min = 10;
		const max = 0;
		const request = () => cornChips.number({ min, max });

		expect(request).toThrowError(/your "min" is greater than your "max" parameter/);

	});

});
