const randomNumber = require('./number');
const randomTags = require('./tags');
const { capitaliseFirstLetter } = require('./text');
const issueWarning = require('./warn');

function refineKeyWords(keyWords) {

	const quantity = randomNumber({
		min: 1,
		max: keyWords.length,
	});

	return randomTags({
		tags: keyWords,
		quantity,
	});

}

function generate({ text = '', keyWords = [] }) {

	if (typeof text !== 'string') return issueWarning('please supply a string of words to enrich');
	if (!Array.isArray(keyWords) || !keyWords.length) return issueWarning('please supply an array of key words to enrich into your text');

	const refinedkeyWords = refineKeyWords(keyWords);
	const textWords = text.toLowerCase().split(' ');
	const combinedWords = [...refinedkeyWords, ...textWords];
	const shuffledWords = randomTags({ tags: combinedWords });
	const compiledString = shuffledWords.join(' ');

	return capitaliseFirstLetter(compiledString);

}

module.exports = generate;
