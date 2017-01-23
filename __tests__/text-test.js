'use strict';

// babel-jest

const {randomText} = require('../src/');
// const {randomText} = require('../dist/corn-chips.js');

describe('random characters', () => {

	it('should generate a random set of 15 characters', () => {

		const characters = 15;
		const result = randomText({ characters });
		const characterLength = result.length;

		expect(result).toEqual(expect.any(String));
		expect(characterLength).toEqual(characters);

	});


});

describe('random words', () => {

	it('should generate a random set of 5 words', () => {

		const words = 5;
		const result = randomText({ words });
		const wordLength = result.split(' ').length;
		const lastCharacter = result.slice(-1);

		expect(result).toEqual(expect.any(String));
		expect(wordLength).toEqual(words);
		expect(lastCharacter).toEqual('.');

	});

});

describe('text parameters', () => {

	it('should throw an error if a no parameters are supplied', () => {

		const request = () => randomText();

		expect(request).toThrowError(/(Currently no params supplied)/);

	});

	it('should throw an error if both a character and a words parameter are supplied', () => {

		const characters = 15;
		const words = 5;
		const request = () => randomText({ characters, words });

		expect(request).toThrowError(/(Currently multiple params supplied)/);

	});

});
