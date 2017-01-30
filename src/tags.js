const generateNumber = require('./number');
const issueWarning = require('./warn');

function generateRefinedTags(tags, refinedIndex) {

	return refinedIndex.map(index => tags[index]);

}

function generateRefinedIndex(indexOptions, quantity) {

	let remainingIndexes = indexOptions;

	return new Array(quantity).fill(0).map(() => {

		const randomIndex = generateNumber({ max: indexOptions.length - 1 });

		remainingIndexes = [
			...remainingIndexes.slice(0, randomIndex),
			...remainingIndexes.slice(randomIndex + 1),
		];

		return randomIndex;

	});

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
