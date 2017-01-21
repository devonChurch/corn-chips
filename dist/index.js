exports["corn-chips"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dummy = function () {

	var padOutNumber = function padOutNumber(roundedNumber, max) {

		var totalZeros = ('' + max).length - ('' + roundedNumber).length;
		var paddedZeros = new Array(('' + max).length - ('' + roundedNumber).length).fill('0').join('');

		return '' + paddedZeros + roundedNumber;
	},
	    generateNumber = function generateNumber() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$min = _ref.min,
		    min = _ref$min === undefined ? 0 : _ref$min,
		    max = _ref.max,
		    _ref$pad = _ref.pad,
		    pad = _ref$pad === undefined ? false : _ref$pad;

		var currentParameters = function currentParameters() {
			return '(min = ' + min + ' | max = ' + (max || 'not supplied') + ')';
		};

		if (!max) return warnUser('Please supply a "max" parameter ' + currentParameters());
		if (min > max) return warnUser('Your "min" is greater than your "max" parameter ' + currentParameters());

		var randomNumber = Math.random() * (max - min + 1) + min;
		var roundedNumber = Math.floor(randomNumber);

		return pad ? padOutNumber(roundedNumber, max) : roundedNumber;
	},
	    wordLength = { min: 2, max: 6 },
	    letters = 'abcdefghijklmnopqrstuvwxyz'.split(''),
	    warnUser = function warnUser(issue) {

		console.warn(issue);

		return '';
	},
	    capitaliseFirstLetter = function capitaliseFirstLetter(text) {

		var firstLetter = text.substr(0, 1).toUpperCase();
		var restOfText = text.substr(1);

		return '' + firstLetter + restOfText;
	},
	    generateCharacters = function generateCharacters(characters) {

		return new Array(characters).fill('').map(function (value, i) {

			var index = generateNumber({ max: letters.length - 1 });

			return letters[index];
		}).join('');
	},
	    generateWords = function generateWords(words) {

		return new Array(words).fill('').map(function () {

			var characters = generateNumber(wordLength);

			return generateCharacters(characters);
		}).join(' ');
	},
	    generateText = function generateText() {
		var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    characters = _ref2.characters,
		    words = _ref2.words;

		var warning = function warning(issue) {
			return 'Please supply either a "character" or "words" parameter (Currently ' + issue + ' params supplied)';
		};

		if (!characters && !words) return warnUser(warning('no'));
		if (characters && words) return warnUser(warning('multiple'));

		var text = characters ? generateCharacters(characters) : generateWords(words) + '.';

		return capitaliseFirstLetter(text);
	};

	return {
		number: generateNumber,
		text: generateText
	};
}();

console.log(dummy);
console.log(dummy.text());
console.log(dummy.text({ characters: 15, words: 5 }));
console.log(dummy.text({ characters: 15 }));
console.log(dummy.text({ words: 5 }));
console.log(dummy.number());
console.log(dummy.number({ min: 5 }));
console.log(dummy.number({ min: 5, max: 10 }));
console.log(dummy.number({ min: 10, max: 5 }));
console.log(dummy.number({ max: 10 }));
console.log(dummy.number({ max: 10, pad: true }));
console.log(dummy.number({ min: 5, max: 100000, pad: true }));

module.exports = dummy;

/***/ })
/******/ ]);