const dummy = (() => {

	const

		padOutNumber = (roundedNumber, max) => {

			const totalZeros = `${max}`.length - `${roundedNumber}`.length;
			const paddedZeros = new Array(`${max}`.length - `${roundedNumber}`.length).fill('0').join('');

			return `${paddedZeros}${roundedNumber}`;

		},

		generateNumber = ({ min = 0, max, pad = false } = {}) => {

			const currentParameters = () => `(min = ${min} | max = ${max || 'not supplied'})`;

			if (!max) return warnUser(`Please supply a "max" parameter ${currentParameters()}`);
			if (min > max) return warnUser(`Your "min" is greater than your "max" parameter ${currentParameters()}`);

			const randomNumber = Math.random() * (max - min + 1) + min;
			const roundedNumber = Math.floor(randomNumber);

			return pad ? padOutNumber(roundedNumber, max) : roundedNumber;

		},

		wordLength = { min: 2, max: 6 },

		letters = 'abcdefghijklmnopqrstuvwxyz'.split(''),

		warnUser = (issue) => {

			console.warn(issue);

			return '';

		},

		capitaliseFirstLetter = (text) => {

			const firstLetter = text.substr(0, 1).toUpperCase();
			const restOfText = text.substr(1);

			return `${firstLetter}${restOfText}`;

		},

		generateCharacters = (characters) => {

			return new Array(characters).fill('').map((value, i) => {

				const index = generateNumber({ max: letters.length - 1 });

				return letters[index];

			}).join('');

		},

  	    generateWords = (words) => {

			return new Array(words).fill('').map(() => {

				const characters = generateNumber(wordLength);

				return generateCharacters(characters);

			}).join(' ');

		},

		generateText = ({ characters, words } = {}) => {

			const warning = (issue) => `Please supply either a "character" or "words" parameter (Currently ${issue} params supplied)`;

			if (!characters && !words) return warnUser(warning('no'));
			if (characters && words) return warnUser(warning('multiple'));

			const text = characters ? generateCharacters(characters) : `${generateWords(words)}.`;

			return capitaliseFirstLetter(text);

		};

	return {
		number: generateNumber,
		text: generateText
	};

})();

console.log(dummy);
console.log(dummy.text());
console.log(dummy.text({ characters: 15, words: 5 }));
console.log(dummy.text({ characters: 15 }));
console.log(dummy.text({ words: 5 }));
console.log(dummy.number());
console.log(dummy.number({ min: 5}));
console.log(dummy.number({ min: 5, max: 10 }));
console.log(dummy.number({ min: 10, max: 5 }));
console.log(dummy.number({ max: 10 }));
console.log(dummy.number({ max: 10, pad: true }));
console.log(dummy.number({ min: 5, max: 100000, pad: true }));

module.exports = dummy;
