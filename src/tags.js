const randomNumber = require('./number');
const issueWarning = require('./warn');

function generateRefinedTags(tags, refinedIndex) {

	return refinedIndex.map(index => tags[index]);

}

function generateRefinedIndex(indexOptions, quantity) {

	return new Array(quantity).fill(0)

		// Take the index of the current loop and randomly insert it into a new
		// array to create the random set of indexes to pull out of the supplied
		// indexOptions argument.
		.reduce((reduction, v, i) => {

			const randomIndex = randomNumber({ max: i });

			return [
				...reduction.slice(0, randomIndex),
				i,
				...reduction.slice(randomIndex),
			];

		}, [])

		// Take the value from the randomised index array and use it to pull out the
		// corresponding value at that index key.
		.map(value => indexOptions[value]);

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
