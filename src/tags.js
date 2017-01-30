const generateNumber = require('./number');
const issueWarning = require('./warn');

function generateRefinedTags(tags, refinedIndex) {

	return refinedIndex.map(index => tags[index]);

}

function generateRefinedIndex(indexOptions, quantity) {

	let remainingIndexes = indexOptions;
	const refinedIndex = [];

	while (remainingIndexes.length && refinedIndex.length < quantity) {

		const randomIndex = generateNumber({ max: remainingIndexes.length - 1 });

		refinedIndex.push(remainingIndexes[randomIndex]);

		remainingIndexes = [
			...remainingIndexes.slice(0, randomIndex),
			...remainingIndexes.slice(randomIndex + 1),
		];

	}

	return refinedIndex;

}

function generateIndexOptions(tags) {

	return new Array(tags.length).fill(0).map((v, i) => i);

}

function generate({ tags = [], quantity = tags.length } = {}) {

	if (!Array.isArray(tags)) return issueWarning(`the "tags" parameter must be an array (currently a ${typeof tags})`);
	if (!tags.length) return issueWarning('please supply a populated "tags" parameter e.g. ["foo", "bar", "baz"]');
	if (quantity > tags.length) return issueWarning(`the "quantity" parameter (${quantity}) is greater than the supplied "tags" total (${tags.length})`);

	const indexOptions = generateIndexOptions(tags);
	const refinedIndex = generateRefinedIndex(indexOptions, quantity);
	const refinedTags = generateRefinedTags(tags, refinedIndex);

	return refinedTags;

}

module.exports = generate;
