'use strict';

// babel-jest

const { enrichWords } = require('../src/');

describe('random enrich', () => {

	const text = 'This is some dummy text to enrich';
	const keyWords = ['apple', 'banana', 'orange', 'potato'];

	it('enrich a string of words with a random set of supplied key words from an array', () => {

		const result = enrichWords({ text, keyWords });
		const enrichment = keyWords.filter((value) => {

			const index = result.indexOf(value);

			return index >= 0;

		});


		expect(result).toEqual(expect.any(String));
		expect(enrichment.length).toBeTruthy();

	});

});

describe('enrich parameters', () => {

	it('should throw an error if the supplied text argument is not a string', () => {

		const text = 5;
		const request = () => enrichWords({ text });

		expect(request).toThrowError(/please supply a string of words to enrich/);

	});

	it('should throw an error if the supplied key word argument is not an array', () => {

		const keyWords = 'apple';
		const request = () => enrichWords({ keyWords });

		expect(request).toThrowError(/please supply an array of key words to enrich into your text/);

	});

	it('should throw an error if the supplied key word array is empty', () => {

		const text = 'This is some dummy text to enrich';
		const request = () => enrichWords({ text });

		expect(request).toThrowError(/please supply an array of key words to enrich into your text/);

	});

});
