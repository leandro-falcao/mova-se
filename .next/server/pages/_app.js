module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/le/Desktop/mova-se/src/contexts/ChallengesContext.tsx\";\n //dando tipos\n\nconst ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider({\n  children\n}) {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: currentExperience,\n    1: setCurrentExperience\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: challengesCompleted,\n    1: setChallengesCompleted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n\n  function levelUp() {\n    setLevel(level + 1);\n    setLevel(level);\n  }\n\n  function startNewChallenge() {\n    console.log(` novo challenge`);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: [level, currentExperience, challengesCompleted, levelUp, startNewChallenge],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ViMjgiXSwibmFtZXMiOlsiQ2hhbGxlbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Q0FFQTs7QUFhTyxNQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUdBLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDO0FBQUYsQ0FBNUIsRUFBbUU7QUFFeEUsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLENBQUQsQ0FBbEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNENGLHNEQUFRLENBQUMsQ0FBRCxDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDRyxtQkFBRDtBQUFBLE9BQXNCQztBQUF0QixNQUFnREosc0RBQVEsQ0FBQyxDQUFELENBQTlEOztBQUdBLFdBQVNLLE9BQVQsR0FBbUI7QUFDakJOLFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUVEOztBQUVELFdBQVNRLGlCQUFULEdBQTZCO0FBQzNCQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxpQkFBYjtBQUVEOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFDL0IsQ0FDRVYsS0FERixFQUVFRyxpQkFGRixFQUdFRSxtQkFIRixFQUlFRSxPQUpGLEVBS0VDLGlCQUxGLENBREY7QUFBQSxjQVVHVDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vZGFuZG8gdGlwb3NcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVzUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZXNQcm92aWRlc1Byb3BzKSB7XG5cbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xuXG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgIHNldExldmVsKGxldmVsKVxuXG4gIH1cblxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICBjb25zb2xlLmxvZyhgIG5vdm8gY2hhbGxlbmdlYCk7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtcbiAgICAgIFtcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZVxuICAgICAgXVxuICAgIH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciA+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\nvar _jsxFileName = \"/home/le/Desktop/mova-se/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc1Byb3ZpZGVyID5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });