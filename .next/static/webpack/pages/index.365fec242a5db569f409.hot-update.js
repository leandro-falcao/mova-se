webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: CountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountDown\", function() { return CountDown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ \"./src/styles/components/CountDown.module.css\");\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/le/Desktop/mova-se/src/components/CountDown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countDownTimeout;\nfunction CountDown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.2 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinish = _useState3[0],\n      setHasFinish = _useState3[1]; // tempo do relogio contados dado em minutos X segundos\n\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountDown() {\n    setIsActive(true);\n  } //pausar nosso relogio e iniciar de onde parou.\n  // function pauseCountDown(){\n  //    clearTimeout(countDownTimeout);\n  //    setIsActive(false)\n  // }\n  // resetar para os 25 novamente!\n\n\n  function resetCountDown() {\n    clearTimeout(countDownTimeout);\n    setIsActive(false);\n    setTime(0.2 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive === true && time > 0) {\n      countDownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      // setHasFinish(true);\n      // setIsActive(false);\n      console.log(\"finalizou o contador\");\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 10\n    }, this), isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton, \" \").concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButtonActive),\n      onClick: resetCountDown,\n      children: \"Reset Contador\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton,\n      onClick: startCountDown,\n      children: \"Start Contador\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 7\n  }, this);\n}\n\n_s(CountDown, \"/qrdlc+SZ/LS61iVm+WYDp14YEA=\");\n\n_c = CountDown;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeD81NjEzIl0sIm5hbWVzIjpbImNvdW50RG93blRpbWVvdXQiLCJDb3VudERvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaCIsInNldEhhc0ZpbmlzaCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnREb3duIiwicmVzZXRDb3VudERvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvdW50RG93bkNvbnRhaW5lciIsImNvdW50RG93bkJ1dHRvbiIsImNvdW50RG93bkJ1dHRvbkFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUVBQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQUZSO0FBQUEsTUFFakJDLElBRmlCO0FBQUEsTUFFWEMsT0FGVzs7QUFBQSxtQkFHUUYsc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHakJHLFFBSGlCO0FBQUEsTUFHUEMsV0FITzs7QUFBQSxtQkFJVUosc0RBQVEsQ0FBQyxLQUFELENBSmxCO0FBQUEsTUFJakJLLFNBSmlCO0FBQUEsTUFJTkMsWUFKTSxrQkFNeEI7OztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCOztBQVJ3Qiw4QkFVVVUsTUFBTSxDQUFDSixPQUFELENBQU4sQ0FBZ0JLLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQVZWO0FBQUE7QUFBQSxNQVVqQkMsVUFWaUI7QUFBQSxNQVVMQyxXQVZLOztBQUFBLCtCQVlVSixNQUFNLENBQUNELE9BQUQsQ0FBTixDQUFnQkUsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBWlY7QUFBQTtBQUFBLE1BWWpCRyxVQVppQjtBQUFBLE1BWUxDLFdBWks7O0FBY3hCLFdBQVNDLGNBQVQsR0FBeUI7QUFDdEJkLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRixHQWhCdUIsQ0FrQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsV0FBU2UsY0FBVCxHQUF5QjtBQUN0QkMsZ0JBQVksQ0FBQ3RCLGdCQUFELENBQVo7QUFDQU0sZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRixXQUFPLENBQUMsTUFBTSxFQUFQLENBQVA7QUFDTDs7QUFFRW1CLHlEQUFTLENBQUUsWUFBSTtBQUNaLFFBQUlsQixRQUFRLEtBQUssSUFBYixJQUFxQkYsSUFBSSxHQUFHLENBQWhDLEVBQWtDO0FBQy9CSCxzQkFBZ0IsR0FBR3dCLFVBQVUsQ0FBQyxZQUFNO0FBQzlCcEIsZUFBTyxDQUFFRCxJQUFJLEdBQUcsQ0FBVCxDQUFQO0FBQ0YsT0FGeUIsRUFFdkIsSUFGdUIsQ0FBN0I7QUFHRixLQUpELE1BSU8sSUFBR0UsUUFBUSxJQUFJRixJQUFJLEtBQUssQ0FBeEIsRUFBMEI7QUFDOUI7QUFDQTtBQUNBc0IsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFFRjtBQUdILEdBYlEsRUFhTixDQUFDckIsUUFBRCxFQUFXRixJQUFYLENBYk0sQ0FBVDtBQWVBLHNCQUNHO0FBQUEsNEJBRUc7QUFBSyxlQUFTLEVBQUV3Qiw4RUFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFDRztBQUFBLGdDQUNHO0FBQUEsb0JBQU9aO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUVHO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQU1HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkgsZUFRRztBQUFBLGdDQUNHO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUVHO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSCxFQWlCSWQsUUFBUSxnQkFFRjtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQ0UsZUFBUyxZQUFLc0IsOEVBQU0sQ0FBQ0UsZUFBWixjQUErQkYsOEVBQU0sQ0FBQ0cscUJBQXRDLENBRFg7QUFFRSxhQUFPLEVBQUVULGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRSxnQkFVTjtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQ0csZUFBUyxFQUFFTSw4RUFBTSxDQUFDRSxlQURyQjtBQUVHLGFBQU8sRUFBRVQsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQXFDRjs7R0FuRmVuQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3MnO1xuXG5sZXQgY291bnREb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7IFxuXG5leHBvcnQgZnVuY3Rpb24gQ291bnREb3duKCl7XG5cbiAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMiAqIDYwKTtcbiAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW2hhc0ZpbmlzaCwgc2V0SGFzRmluaXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgLy8gdGVtcG8gZG8gcmVsb2dpbyBjb250YWRvcyBkYWRvIGVtIG1pbnV0b3MgWCBzZWd1bmRvc1xuICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTsgXG4gICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpOyBcbiAgIFxuICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTsgXG5cbiAgIGZ1bmN0aW9uIHN0YXJ0Q291bnREb3duKCl7XG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgIH1cbiAgIFxuICAgLy9wYXVzYXIgbm9zc28gcmVsb2dpbyBlIGluaWNpYXIgZGUgb25kZSBwYXJvdS5cbiAgIC8vIGZ1bmN0aW9uIHBhdXNlQ291bnREb3duKCl7XG4gICAvLyAgICBjbGVhclRpbWVvdXQoY291bnREb3duVGltZW91dCk7XG4gICAvLyAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgIC8vIH1cbiAgIFxuICAgLy8gcmVzZXRhciBwYXJhIG9zIDI1IG5vdmFtZW50ZSFcbiAgIGZ1bmN0aW9uIHJlc2V0Q291bnREb3duKCl7XG4gICAgICBjbGVhclRpbWVvdXQoY291bnREb3duVGltZW91dCk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgIHNldFRpbWUoMC4yICogNjApXG59XG5cbiAgIHVzZUVmZmVjdCggKCk9PntcbiAgICAgIGlmKCBpc0FjdGl2ZSA9PT0gdHJ1ZSAmJiB0aW1lID4gMCl7XG4gICAgICAgICBjb3VudERvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICBzZXRUaW1lKCB0aW1lIC0gMSApICAgICBcbiAgICAgICAgICAgIH0sIDEwMDApOyBcbiAgICAgIH0gZWxzZSBpZihpc0FjdGl2ZSAmJiB0aW1lID09PSAwKXtcbiAgICAgICAgIC8vIHNldEhhc0ZpbmlzaCh0cnVlKTtcbiAgICAgICAgIC8vIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluYWxpem91IG8gY29udGFkb3JcIik7XG4gICAgICAgICBcbiAgICAgIH1cblxuXG4gICB9LCBbaXNBY3RpdmUsIHRpbWVdKVxuICAgXG4gICByZXR1cm4oXG4gICAgICA8ZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50RG93bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAge2lzQWN0aXZlID8gXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudERvd25CdXR0b259ICR7c3R5bGVzLmNvdW50RG93bkJ1dHRvbkFjdGl2ZX1gfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnREb3dufT5cbiAgICAgICAgICAgICAgICAgIFJlc2V0IENvbnRhZG9yXG4gICAgICAgICAgICAgICA8L2J1dHRvbj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkgXG4gICAgICAgICA6IFxuICAgICAgICAgKFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERvd25CdXR0b259IFxuICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudERvd259PlxuICAgICAgICAgICAgICAgU3RhcnQgQ29udGFkb3JcbiAgICAgICAgICAgIDwvYnV0dG9uPiAgIFxuICAgICAgICAgKSAgICBcbiAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CountDown.tsx\n");

/***/ })

})