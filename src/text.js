const generateNumber = require('./number');
const issueWarning = require('./warn');

const wordLength = { min: 2, max: 6 };
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function capitaliseFirstLetter(text) {

	const firstLetter = text.substr(0, 1).toUpperCase();
	const restOfText = text.substr(1);

	return `${firstLetter}${restOfText}`;

}

function generateCharacters(characters) {

	return new Array(characters).fill('').map(() => {

		const index = generateNumber({ max: letters.length - 1 });

		return letters[index];

	}).join('');

}

function generateWords(words) {

	return new Array(words).fill('').map(() => {

		const characters = generateNumber(wordLength);

		return generateCharacters(characters);

	}).join(' ');

}

function generate({ characters, words } = {}) {

	const warning = issue => `please supply either a "character" or "words" parameter (Currently ${issue} params supplied)`;

	if (!characters && !words) return issueWarning(warning('no'));
	if (characters && words) return issueWarning(warning('multiple'));

	const text = characters ? generateCharacters(characters) : `${generateWords(words)}.`;

	return capitaliseFirstLetter(text);

}

module.exports = generate;
