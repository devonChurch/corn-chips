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
eval("\n\nvar dummy = function () {\n\n\tvar padOutNumber = function padOutNumber(roundedNumber, max) {\n\n\t\tvar totalZeros = ('' + max).length - ('' + roundedNumber).length;\n\t\tvar paddedZeros = new Array(('' + max).length - ('' + roundedNumber).length).fill('0').join('');\n\n\t\treturn '' + paddedZeros + roundedNumber;\n\t},\n\t    generateNumber = function generateNumber() {\n\t\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t\t    _ref$min = _ref.min,\n\t\t    min = _ref$min === undefined ? 0 : _ref$min,\n\t\t    max = _ref.max,\n\t\t    _ref$pad = _ref.pad,\n\t\t    pad = _ref$pad === undefined ? false : _ref$pad;\n\n\t\tvar currentParameters = function currentParameters() {\n\t\t\treturn '(min = ' + min + ' | max = ' + (max || 'not supplied') + ')';\n\t\t};\n\n\t\tif (!max) return warnUser('Please supply a \"max\" parameter ' + currentParameters());\n\t\tif (min > max) return warnUser('Your \"min\" is greater than your \"max\" parameter ' + currentParameters());\n\n\t\tvar randomNumber = Math.random() * (max - min + 1) + min;\n\t\tvar roundedNumber = Math.floor(randomNumber);\n\n\t\treturn pad ? padOutNumber(roundedNumber, max) : roundedNumber;\n\t},\n\t    wordLength = { min: 2, max: 6 },\n\t    letters = 'abcdefghijklmnopqrstuvwxyz'.split(''),\n\t    warnUser = function warnUser(issue) {\n\n\t\tconsole.warn(issue);\n\n\t\treturn '';\n\t},\n\t    capitaliseFirstLetter = function capitaliseFirstLetter(text) {\n\n\t\tvar firstLetter = text.substr(0, 1).toUpperCase();\n\t\tvar restOfText = text.substr(1);\n\n\t\treturn '' + firstLetter + restOfText;\n\t},\n\t    generateCharacters = function generateCharacters(characters) {\n\n\t\treturn new Array(characters).fill('').map(function (value, i) {\n\n\t\t\tvar index = generateNumber({ max: letters.length - 1 });\n\n\t\t\treturn letters[index];\n\t\t}).join('');\n\t},\n\t    generateWords = function generateWords(words) {\n\n\t\treturn new Array(words).fill('').map(function () {\n\n\t\t\tvar characters = generateNumber(wordLength);\n\n\t\t\treturn generateCharacters(characters);\n\t\t}).join(' ');\n\t},\n\t    generateText = function generateText() {\n\t\tvar _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t\t    characters = _ref2.characters,\n\t\t    words = _ref2.words;\n\n\t\tvar warning = function warning(issue) {\n\t\t\treturn 'Please supply either a \"character\" or \"words\" parameter (Currently ' + issue + ' params supplied)';\n\t\t};\n\n\t\tif (!characters && !words) return warnUser(warning('no'));\n\t\tif (characters && words) return warnUser(warning('multiple'));\n\n\t\tvar text = characters ? generateCharacters(characters) : generateWords(words) + '.';\n\n\t\treturn capitaliseFirstLetter(text);\n\t};\n\n\treturn {\n\t\tnumber: generateNumber,\n\t\ttext: generateText\n\t};\n}();\n\nconsole.log(dummy);\nconsole.log(dummy.text());\nconsole.log(dummy.text({ characters: 15, words: 5 }));\nconsole.log(dummy.text({ characters: 15 }));\nconsole.log(dummy.text({ words: 5 }));\nconsole.log(dummy.number());\nconsole.log(dummy.number({ min: 5 }));\nconsole.log(dummy.number({ min: 5, max: 10 }));\nconsole.log(dummy.number({ min: 10, max: 5 }));\nconsole.log(dummy.number({ max: 10 }));\nconsole.log(dummy.number({ max: 10, pad: true }));\nconsole.log(dummy.number({ min: 5, max: 100000, pad: true }));\n\nmodule.exports = dummy;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
/******/ ]);