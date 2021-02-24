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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CompleteChallenges.tsx":
/*!***********************************************!*\
  !*** ./src/components/CompleteChallenges.tsx ***!
  \***********************************************/
/*! exports provided: CompletChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CompletChallenges\", function() { return CompletChallenges; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_CompleteChallenges_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/CompleteChallenges.module.css */ \"./src/styles/components/CompleteChallenges.module.css\");\n/* harmony import */ var _styles_components_CompleteChallenges_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompleteChallenges_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/le/\\xC1rea de Trabalho/mova-se/src/components/CompleteChallenges.tsx\";\n\nfunction CompletChallenges() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_CompleteChallenges_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.completeChallengesContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"desafios completos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"3\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUNoYWxsZW5nZXMudHN4P2JlYmUiXSwibmFtZXMiOlsiQ29tcGxldENoYWxsZW5nZXMiLCJzdHlsZXMiLCJjb21wbGV0ZUNoYWxsZW5nZXNDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxpQkFBVCxHQUE0QjtBQUNoQyxzQkFDRztBQUFLLGFBQVMsRUFBRUMsdUZBQU0sQ0FBQ0MsMkJBQXZCO0FBQUEsNEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFNRiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvbXBsZXRlQ2hhbGxlbmdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlQ2hhbGxlbmdlcy5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBsZXRDaGFsbGVuZ2VzKCl7XG4gICByZXR1cm4oIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZUNoYWxsZW5nZXNDb250YWluZXJ9PlxuICAgICAgICAgPHNwYW4+ZGVzYWZpb3MgY29tcGxldG9zPC9zcGFuPlxuICAgICAgICAgPHNwYW4+Mzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CompleteChallenges.tsx\n");

/***/ }),

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: CountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountDown\", function() { return CountDown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ \"./src/styles/components/CountDown.module.css\");\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/le/\\xC1rea de Trabalho/mova-se/src/components/CountDown.tsx\";\n\n\nlet countDownTimeout;\nfunction CountDown() {\n  const {\n    0: time,\n    1: setTime\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(25 * 60);\n  const {\n    0: isActive,\n    1: setIsActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const minutes = Math.floor(time / 60);\n  const seconds = time % 60;\n  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');\n  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');\n\n  function startCountDown() {\n    setIsActive(true);\n  }\n  /*  //pausar nosso relogio e iniciar de onde parou.\n  function resetCountDown(){\n     clearTimeout(countDownTimeout);\n     setIsActive(false)\n  }\n  */\n  // resetar para os 25 novamente!\n\n\n  function resetCountDown() {\n    clearTimeout(countDownTimeout);\n    setIsActive(false);\n    setTime(25 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (isActive === true && time > 0) {\n      countDownTimeout = setTimeout(() => {\n        setTime(time - 1);\n      }, 1000);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countDownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 10\n    }, this), isActive == false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countDownButton,\n      onClick: startCountDown,\n      children: \"Start Contador\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 16\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.testes1,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countDownButton} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.countDownButtonActive}`,\n          onClick: resetCountDown,\n          children: \"Reset Contador\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \" pause \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 16\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudERvd24udHN4PzU2MTMiXSwibmFtZXMiOlsiY291bnREb3duVGltZW91dCIsIkNvdW50RG93biIsInRpbWUiLCJzZXRUaW1lIiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3RhcnRDb3VudERvd24iLCJyZXNldENvdW50RG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudERvd25Db250YWluZXIiLCJjb3VudERvd25CdXR0b24iLCJ0ZXN0ZXMxIiwiY291bnREb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBb0I7QUFFeEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUssRUFBTixDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxLQUFELENBQXhDO0FBR0EsUUFBTUcsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsUUFBTVEsT0FBTyxHQUFHUixJQUFJLEdBQUcsRUFBdkI7QUFFQSxRQUFNLENBQUNTLFVBQUQsRUFBYUMsV0FBYixJQUE0QkMsTUFBTSxDQUFDTixPQUFELENBQU4sQ0FBZ0JPLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQUFsQztBQUVBLFFBQU0sQ0FBQ0MsVUFBRCxFQUFhQyxXQUFiLElBQTRCSixNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBQWxDOztBQUVBLFdBQVNHLGNBQVQsR0FBeUI7QUFDdEJaLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRjtBQUVEO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVHOzs7QUFDQSxXQUFTYSxjQUFULEdBQXlCO0FBQ3RCQyxnQkFBWSxDQUFDcEIsZ0JBQUQsQ0FBWjtBQUNBTSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FILFdBQU8sQ0FBQyxLQUFLLEVBQU4sQ0FBUDtBQUNMOztBQUVFa0IseURBQVMsQ0FBRSxNQUFJO0FBQ1osUUFBSWhCLFFBQVEsS0FBSyxJQUFiLElBQXFCSCxJQUFJLEdBQUcsQ0FBaEMsRUFBa0M7QUFDL0JGLHNCQUFnQixHQUFHc0IsVUFBVSxDQUFDLE1BQU07QUFDOUJuQixlQUFPLENBQUVELElBQUksR0FBRyxDQUFULENBQVA7QUFDRixPQUZ5QixFQUV2QixJQUZ1QixDQUE3QjtBQUlGO0FBQ0gsR0FQUSxFQU9OLENBQUNHLFFBQUQsRUFBV0gsSUFBWCxDQVBNLENBQVQ7QUFTQSxzQkFDRztBQUFBLDRCQUVHO0FBQUssZUFBUyxFQUFFcUIsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0c7QUFBQSxnQ0FDRztBQUFBLG9CQUFPYjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZUFFRztBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFNRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5ILGVBUUc7QUFBQSxnQ0FDRztBQUFBLG9CQUFPSTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZUFFRztBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkgsRUFpQklaLFFBQVEsSUFBSSxLQUFaLGdCQUVLO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFDRyxlQUFTLEVBQUVrQiw4RUFBTSxDQUFDRSxlQURyQjtBQUVHLGFBQU8sRUFBRVAsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZMLGdCQVNLO0FBQUEsNkJBQ0E7QUFBTSxpQkFBUyxFQUFFSyw4RUFBTSxDQUFDRyxPQUF4QjtBQUFBLGdDQUVBO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFDQSxtQkFBUyxFQUFHLEdBQUVILDhFQUFNLENBQUNFLGVBQWdCLElBQUdGLDhFQUFNLENBQUNJLHFCQUFzQixFQURyRTtBQUVBLGlCQUFPLEVBQUVSLGNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxxQkExQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUE0Q0YiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudERvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzcyc7XG5cbmxldCBjb3VudERvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDsgXG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudERvd24oKXtcblxuICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7XG4gICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApOyBcbiAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cbiAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJyk7IFxuICAgXG4gICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpOyBcblxuICAgZnVuY3Rpb24gc3RhcnRDb3VudERvd24oKXtcbiAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgfVxuICAgXG4gICAvKiAgLy9wYXVzYXIgbm9zc28gcmVsb2dpbyBlIGluaWNpYXIgZGUgb25kZSBwYXJvdS5cbiAgIGZ1bmN0aW9uIHJlc2V0Q291bnREb3duKCl7XG4gICAgICBjbGVhclRpbWVvdXQoY291bnREb3duVGltZW91dCk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgIH1cbiAgICovXG5cbiAgIC8vIHJlc2V0YXIgcGFyYSBvcyAyNSBub3ZhbWVudGUhXG4gICBmdW5jdGlvbiByZXNldENvdW50RG93bigpe1xuICAgICAgY2xlYXJUaW1lb3V0KGNvdW50RG93blRpbWVvdXQpO1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgICBzZXRUaW1lKDI1ICogNjApXG59XG5cbiAgIHVzZUVmZmVjdCggKCk9PntcbiAgICAgIGlmKCBpc0FjdGl2ZSA9PT0gdHJ1ZSAmJiB0aW1lID4gMCl7XG4gICAgICAgICBjb3VudERvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICBzZXRUaW1lKCB0aW1lIC0gMSApICAgICBcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBcbiAgICAgIH1cbiAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pXG4gICBcbiAgIHJldHVybihcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnREb3duQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XG4gICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICB7aXNBY3RpdmUgPT0gZmFsc2UgPyBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnREb3duQnV0dG9ufSBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnREb3dufT5cbiAgICAgICAgICAgICAgICAgIFN0YXJ0IENvbnRhZG9yXG4gICAgICAgICAgICAgICA8L2J1dHRvbj4gICBcbiAgICAgICAgICAgICkgXG4gICAgICAgICA6XG4gICAgICAgICAgICAoICA8PlxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGVzdGVzMX0+XG5cbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnREb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudERvd25CdXR0b25BY3RpdmV9YH0gXG4gICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50RG93bn0+XG4gICAgICAgICAgICAgICAgICBSZXNldCBDb250YWRvclxuICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICA8c3Bhbj4gcGF1c2UgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSBcbiAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CountDown.tsx\n");

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExperienceBar\", function() { return ExperienceBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ \"./src/styles/components/ExperienceBar.module.css\");\n/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/le/\\xC1rea de Trabalho/mova-se/src/components/ExperienceBar.tsx\";\n\nfunction ExperienceBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.experienceBar,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"0 xp\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          width: '50%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.currenteExperience,\n        style: {\n          left: '50%'\n        },\n        children: \"300 xp\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 10\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"600 xp\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLnRzeD85NGJjIl0sIm5hbWVzIjpbIkV4cGVyaWVuY2VCYXIiLCJzdHlsZXMiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJjdXJyZW50ZUV4cGVyaWVuY2UiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsYUFBVCxHQUF5QjtBQUM3QixzQkFDRztBQUFRLGFBQVMsRUFBRUMsa0ZBQU0sQ0FBQ0MsYUFBMUI7QUFBQSw0QkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBRUc7QUFBQSw4QkFDRztBQUFLLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUM7QUFBUDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUdHO0FBQU0saUJBQVMsRUFBRUYsa0ZBQU0sQ0FBQ0csa0JBQXhCO0FBQTRDLGFBQUssRUFBRTtBQUFDQyxjQUFJLEVBQUU7QUFBUCxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZILGVBVUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQWNGIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIEV4cGVyaWVuY2VCYXIoKSB7XG4gICByZXR1cm4oXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VCYXJ9PiAgICBcbiAgICAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XG4gICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonNTAlJ319IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRlRXhwZXJpZW5jZX0gc3R5bGU9e3tsZWZ0OiAnNTAlJ319PlxuICAgICAgICAgICAgICAgICAgMzAwIHhwXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPHNwYW4+NjAwIHhwPC9zcGFuPlxuICAgICAgPC9oZWFkZXI+XG4gICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ExperienceBar.tsx\n");

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Profile\", function() { return Profile; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ \"./src/styles/components/Profile.module.css\");\n/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/le/\\xC1rea de Trabalho/mova-se/src/components/Profile.tsx\";\n\nfunction Profile() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"https://github.com/leandro-falcao.png\",\n      alt: \"minha foto leandro\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \" leandro falcao\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/level.svg\",\n          alt: \"icone level\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 16\n        }, this), \"leval 1\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLnRzeD9mY2E2Il0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzdHlsZXMiLCJwcm9maWxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsT0FBVCxHQUFrQjtBQUN0QixzQkFDRztBQUFLLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0c7QUFBSyxTQUFHLEVBQUMsdUNBQVQ7QUFDRyxTQUFHLEVBQUM7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFLRztBQUFBLDhCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFFRztBQUFBLGdDQUNHO0FBQUssYUFBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBZUYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoKXtcbiAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9sZWFuZHJvLWZhbGNhby5wbmdcIiBcbiAgICAgICAgICAgIGFsdD1cIm1pbmhhIGZvdG8gbGVhbmRyb1wiIFxuICAgICAgICAgLz5cblxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHJvbmc+IGxlYW5kcm8gZmFsY2FvPC9zdHJvbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwiaWNvbmUgbGV2ZWxcIiAvPlxuICAgICAgICAgICAgICAgbGV2YWwgMTwvcD5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Profile.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExperienceBar */ \"./src/components/ExperienceBar.tsx\");\n/* harmony import */ var _components_CompleteChallenges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CompleteChallenges */ \"./src/components/CompleteChallenges.tsx\");\n/* harmony import */ var _components_CountDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CountDown */ \"./src/components/CountDown.tsx\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ \"./src/components/Profile.tsx\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ \"./src/styles/pages/Home.module.css\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/le/\\xC1rea de Trabalho/mova-se/src/pages/index.tsx\";\n\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \" mova se - inicio \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_2__[\"ExperienceBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__[\"Profile\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CompleteChallenges__WEBPACK_IMPORTED_MODULE_3__[\"CompletChallenges\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CountDown__WEBPACK_IMPORTED_MODULE_4__[\"CountDown\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBFeHBlcmllbmNlQmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyJztcbmltcG9ydCB7IENvbXBsZXRDaGFsbGVuZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0ZUNoYWxsZW5nZXMnO1xuaW1wb3J0IHsgQ291bnREb3duIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudERvd24nO1xuXG5cbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gbW92YSBzZSAtIGluaWNpbyA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8RXhwZXJpZW5jZUJhciAvPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgICA8Q29tcGxldENoYWxsZW5nZXMgLz5cbiAgICAgICAgICA8Q291bnREb3duIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgICA8ZGl2PjwvZGl2PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/styles/components/CompleteChallenges.module.css":
/*!*************************************************************!*\
  !*** ./src/styles/components/CompleteChallenges.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"completeChallengesContainer\": \"CompleteChallenges_completeChallengesContainer__x1fMe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ29tcGxldGVDaGFsbGVuZ2VzLm1vZHVsZS5jc3M/NmM0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZUNoYWxsZW5nZXMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbXBsZXRlQ2hhbGxlbmdlc0NvbnRhaW5lclwiOiBcIkNvbXBsZXRlQ2hhbGxlbmdlc19jb21wbGV0ZUNoYWxsZW5nZXNDb250YWluZXJfX3gxZk1lXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/components/CompleteChallenges.module.css\n");

/***/ }),

/***/ "./src/styles/components/CountDown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/CountDown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"countDownContainer\": \"CountDown_countDownContainer__1Fj-6\",\n\t\"countDownButton\": \"CountDown_countDownButton__6Wz7e\",\n\t\"countDownButtonActive\": \"CountDown_countDownButtonActive__3-2iz\",\n\t\"testes1\": \"CountDown_testes1__384RF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3M/Y2NhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvdW50RG93bkNvbnRhaW5lclwiOiBcIkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02XCIsXG5cdFwiY291bnREb3duQnV0dG9uXCI6IFwiQ291bnREb3duX2NvdW50RG93bkJ1dHRvbl9fNld6N2VcIixcblx0XCJjb3VudERvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudERvd25fY291bnREb3duQnV0dG9uQWN0aXZlX18zLTJpelwiLFxuXHRcInRlc3RlczFcIjogXCJDb3VudERvd25fdGVzdGVzMV9fMzg0UkZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/CountDown.module.css\n");

/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"experienceBar\": \"ExperienceBar_experienceBar__2JbAX\",\n\t\"currenteExperience\": \"ExperienceBar_currenteExperience__2rdxN\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzP2NiM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleHBlcmllbmNlQmFyXCI6IFwiRXhwZXJpZW5jZUJhcl9leHBlcmllbmNlQmFyX18ySmJBWFwiLFxuXHRcImN1cnJlbnRlRXhwZXJpZW5jZVwiOiBcIkV4cGVyaWVuY2VCYXJfY3VycmVudGVFeHBlcmllbmNlX18ycmR4TlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/components/ExperienceBar.module.css\n");

/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"profileContainer\": \"Profile_profileContainer__3iYlY\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzP2YxZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcIlByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fM2lZbFlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/Profile.module.css\n");

/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__HbJEc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcz9jMDk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fSGJKRWNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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