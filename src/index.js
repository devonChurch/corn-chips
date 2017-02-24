const randomNumber = require('./number');
const randomText = require('./text').generate;
const randomTags = require('./tags');
const enrichWords = require('./enrich');

module.exports = {
	randomNumber,
	randomText,
	randomTags,
	enrichWords,
};
