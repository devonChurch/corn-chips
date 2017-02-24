(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["corn-chips"] = factory();
	else
		root["corn-chips"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar issueWarning = __webpack_require__(1);\n\nfunction padOutNumber(roundedNumber, max) {\n\n\tvar totalZeros = ('' + max).length - ('' + roundedNumber).length;\n\tvar paddedZeros = new Array(totalZeros).fill('0').join('');\n\n\treturn '' + paddedZeros + roundedNumber;\n}\n\nfunction generate() {\n\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t    _ref$min = _ref.min,\n\t    min = _ref$min === undefined ? 0 : _ref$min,\n\t    max = _ref.max,\n\t    _ref$pad = _ref.pad,\n\t    pad = _ref$pad === undefined ? false : _ref$pad;\n\n\tvar currentParameters = function currentParameters() {\n\t\treturn '(min = ' + min + ' | max = ' + (max || 'not supplied') + ')';\n\t};\n\n\tif (!max && isNaN(max)) return issueWarning('please supply a \"max\" parameter ' + currentParameters());\n\tif (min > max) return issueWarning('your \"min\" is greater than your \"max\" parameter ' + currentParameters());\n\n\tvar randomNumber = Math.random() * (max - min + 1) + min;\n\tvar roundedNumber = Math.floor(randomNumber);\n\n\treturn pad ? padOutNumber(roundedNumber, max) : roundedNumber;\n}\n\nmodule.exports = generate;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/number.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/number.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction warn(issue) {\n\n\tthrow new Error(issue);\n}\n\nmodule.exports = warn;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/warn.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/warn.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar randomNumber = __webpack_require__(0);\nvar issueWarning = __webpack_require__(1);\n\nfunction generateRefinedTags(tags, refinedIndex) {\n\n\treturn refinedIndex.map(function (index) {\n\t\treturn tags[index];\n\t});\n}\n\nfunction generateRefinedIndex(indexOptions, quantity) {\n\n\treturn new Array(quantity).fill(0)\n\n\t// Take the index of the current loop and randomly insert it into a new\n\t// array to create the random set of indexes to pull out of the supplied\n\t// indexOptions argument.\n\t.reduce(function (reduction, v, i) {\n\n\t\tvar randomIndex = randomNumber({ max: i });\n\n\t\treturn [].concat(_toConsumableArray(reduction.slice(0, randomIndex)), [i], _toConsumableArray(reduction.slice(randomIndex)));\n\t}, [])\n\n\t// Take the value from the randomised index array and use it to pull out the\n\t// corresponding value at that index key.\n\t.map(function (value) {\n\t\treturn indexOptions[value];\n\t});\n}\n\nfunction generateIndexOptions(tags) {\n\n\treturn new Array(tags.length).fill(0).map(function (v, i) {\n\t\treturn i;\n\t});\n}\n\nfunction generate() {\n\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t    _ref$tags = _ref.tags,\n\t    tags = _ref$tags === undefined ? [] : _ref$tags,\n\t    _ref$quantity = _ref.quantity,\n\t    quantity = _ref$quantity === undefined ? tags.length : _ref$quantity;\n\n\tif (!Array.isArray(tags)) return issueWarning('the \"tags\" parameter must be an array (currently a ' + (typeof tags === 'undefined' ? 'undefined' : _typeof(tags)) + ')');\n\tif (!tags.length) return issueWarning('please supply a populated \"tags\" parameter e.g. [\"foo\", \"bar\", \"baz\"]');\n\tif (quantity > tags.length) return issueWarning('the \"quantity\" parameter (' + quantity + ') is greater than the supplied \"tags\" total (' + tags.length + ')');\n\n\tvar indexOptions = generateIndexOptions(tags);\n\tvar refinedIndex = generateRefinedIndex(indexOptions, quantity);\n\tvar refinedTags = generateRefinedTags(tags, refinedIndex);\n\n\treturn refinedTags;\n}\n\nmodule.exports = generate;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/tags.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/tags.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomNumber = __webpack_require__(0);\nvar issueWarning = __webpack_require__(1);\n\nvar wordLength = { min: 2, max: 6 };\nvar letters = 'abcdefghijklmnopqrstuvwxyz'.split('');\n\nfunction capitaliseFirstLetter(text) {\n\n\tvar firstLetter = text.substr(0, 1).toUpperCase();\n\tvar restOfText = text.substr(1);\n\n\treturn '' + firstLetter + restOfText;\n}\n\nfunction generateCharacters(characters) {\n\n\treturn new Array(characters).fill('').map(function () {\n\n\t\tvar index = randomNumber({ max: letters.length - 1 });\n\n\t\treturn letters[index];\n\t}).join('');\n}\n\nfunction generateWords(words) {\n\n\treturn new Array(words).fill('').map(function () {\n\n\t\tvar characters = randomNumber(wordLength);\n\n\t\treturn generateCharacters(characters);\n\t}).join(' ');\n}\n\nfunction generate() {\n\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t    characters = _ref.characters,\n\t    words = _ref.words;\n\n\tvar warning = function warning(issue) {\n\t\treturn 'please supply either a \"character\" or \"words\" parameter (Currently ' + issue + ' params supplied)';\n\t};\n\n\tif (!characters && !words) return issueWarning(warning('no'));\n\tif (characters && words) return issueWarning(warning('multiple'));\n\n\tvar text = characters ? generateCharacters(characters) : generateWords(words) + '.';\n\n\treturn capitaliseFirstLetter(text);\n}\n\nmodule.exports = {\n\tgenerate: generate,\n\tcapitaliseFirstLetter: capitaliseFirstLetter\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/text.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/text.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomNumber = __webpack_require__(0);\nvar randomText = __webpack_require__(3).generate;\nvar randomTags = __webpack_require__(2);\nvar enrichWords = __webpack_require__(5);\n\nmodule.exports = {\n\trandomNumber: randomNumber,\n\trandomText: randomText,\n\trandomTags: randomTags,\n\tenrichWords: enrichWords\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar randomNumber = __webpack_require__(0);\nvar randomTags = __webpack_require__(2);\n\nvar _require = __webpack_require__(3),\n    capitaliseFirstLetter = _require.capitaliseFirstLetter;\n\nvar issueWarning = __webpack_require__(1);\n\nfunction refineKeyWords(keyWords) {\n\n\tvar quantity = randomNumber({\n\t\tmin: 1,\n\t\tmax: keyWords.length - 1\n\t});\n\n\treturn randomTags({\n\t\ttags: keyWords,\n\t\tquantity: quantity\n\t});\n}\n\nfunction generate(_ref) {\n\tvar _ref$text = _ref.text,\n\t    text = _ref$text === undefined ? '' : _ref$text,\n\t    _ref$keyWords = _ref.keyWords,\n\t    keyWords = _ref$keyWords === undefined ? [] : _ref$keyWords;\n\n\n\tif (typeof text !== 'string') return issueWarning('please supply a string of words to enrich');\n\tif (!Array.isArray(keyWords) || !keyWords.length) return issueWarning('please supply an array of key words to enrich into your text');\n\n\tvar refinedkeyWords = refineKeyWords(keyWords);\n\tvar textWords = text.toLowerCase().split(' ');\n\tvar combinedWords = [].concat(_toConsumableArray(refinedkeyWords), _toConsumableArray(textWords));\n\tvar shuffledWords = randomTags({ tags: combinedWords });\n\tvar compiledString = shuffledWords.join(' ');\n\n\treturn capitaliseFirstLetter(compiledString);\n}\n\nmodule.exports = generate;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/enrich.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/enrich.js?");

/***/ })
/******/ ]);
});