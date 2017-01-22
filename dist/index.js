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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar issueWarning = __webpack_require__(1);\n\nfunction padOutNumber(roundedNumber, max) {\n\n\tvar totalZeros = ('' + max).length - ('' + roundedNumber).length;\n\tvar paddedZeros = new Array(totalZeros).fill('0').join('');\n\n\treturn '' + paddedZeros + roundedNumber;\n}\n\nfunction generate() {\n\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t    _ref$min = _ref.min,\n\t    min = _ref$min === undefined ? 0 : _ref$min,\n\t    max = _ref.max,\n\t    _ref$pad = _ref.pad,\n\t    pad = _ref$pad === undefined ? false : _ref$pad;\n\n\tvar currentParameters = function currentParameters() {\n\t\treturn '(min = ' + min + ' | max = ' + (max || 'not supplied') + ')';\n\t};\n\n\tif (!max) return issueWarning('Please supply a \"max\" parameter ' + currentParameters());\n\tif (min > max) return issueWarning('Your \"min\" is greater than your \"max\" parameter ' + currentParameters());\n\n\tvar randomNumber = Math.random() * (max - min + 1) + min;\n\tvar roundedNumber = Math.floor(randomNumber);\n\n\treturn pad ? padOutNumber(roundedNumber, max) : roundedNumber;\n}\n\nmodule.export = generate;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/number.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/number.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction warn(issue) {\n\n\tconsole.warn(issue);\n}\n\nmodule.exports = warn;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/warn.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/warn.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar generateNumber = __webpack_require__(0);\nvar issueWarning = __webpack_require__(1);\n\nvar wordLength = { min: 2, max: 6 };\nvar letters = 'abcdefghijklmnopqrstuvwxyz'.split('');\n\nfunction capitaliseFirstLetter(text) {\n\n\tvar firstLetter = text.substr(0, 1).toUpperCase();\n\tvar restOfText = text.substr(1);\n\n\treturn '' + firstLetter + restOfText;\n}\n\nfunction generateCharacters(characters) {\n\n\treturn new Array(characters).fill('').map(function () {\n\n\t\tvar index = generateNumber({ max: letters.length - 1 });\n\n\t\treturn letters[index];\n\t}).join('');\n}\n\nfunction generateWords(words) {\n\n\treturn new Array(words).fill('').map(function () {\n\n\t\tvar characters = generateNumber(wordLength);\n\n\t\treturn generateCharacters(characters);\n\t}).join(' ');\n}\n\nfunction generate() {\n\tvar _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t    characters = _ref.characters,\n\t    words = _ref.words;\n\n\tvar warning = function warning(issue) {\n\t\treturn 'Please supply either a \"character\" or \"words\" parameter (Currently ' + issue + ' params supplied)';\n\t};\n\n\tif (!characters && !words) return issueWarning(warning('no'));\n\tif (characters && words) return issueWarning(warning('multiple'));\n\n\tvar text = characters ? generateCharacters(characters) : generateWords(words) + '.';\n\n\treturn capitaliseFirstLetter(text);\n}\n\nmodule.exports = generate;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/text.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/text.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// (webpack)/buildin/module.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar generateNumber = __webpack_require__(0);\nvar generateText = __webpack_require__(2);\n\nmodule.exports = {\n\tnumber: generateNumber,\n\ttext: generateText\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
/******/ ]);