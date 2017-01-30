'use strict';

// babel-jest

const {randomTags} = require('../src/');
// const {randomNumber} = require('../dist/corn-chips.js');

describe('random tags', () => {

	const tags = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

	it('should generate 5 random tags from a list of ten possible tag options', () => {

		const quantity = 5;
		const result = randomTags({ tags, quantity });

		expect(result).toEqual(expect.any(Array));
		expect(result.length).toEqual(quantity);

	});

	it('should generate a random tag set equal to the original tag quantity if no quantity parameter is supplied', () => {

		const result = randomTags({ tags });

		expect(result).toEqual(expect.any(Array));
		expect(result.length).toEqual(tags.length);

	});

});

describe('tags parameters', () => {

	it('should throw an error if the tags parameter is not supplied or empty', () => {

		const request = () => randomTags();

		expect(request).toThrowError(/please supply a populated "tags" parameter/);

	});

	it('should throw an error if the tags parameter is not an array', () => {

		const tags = 1000;
		const request = () => randomTags({ tags });

		expect(request).toThrowError(/the "tags" parameter must be an array/);

	});

	it('should throw an error if the requested quantity exceeds the supplied tags quantity', () => {

		const tags = ['one', 'two', 'three'];
		const quantity = 10;
		const request = () => randomTags({ tags, quantity });

		expect(request).toThrowError(/is greater than the supplied "tags" total/);

	});

});
