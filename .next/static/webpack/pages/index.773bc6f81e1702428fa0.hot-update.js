webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: CountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountDown\", function() { return CountDown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ \"./src/styles/components/CountDown.module.css\");\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/le/Desktop/mova-se/src/components/CountDown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countDownTimeout;\nfunction CountDown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1]; // tempo do relogio contados dado em minutos X segundos\n\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountDown() {\n    setIsActive(true);\n  } // resetar para os 25 novamente!\n\n\n  function resetCountDown() {\n    clearTimeout(countDownTimeout);\n    setIsActive(false);\n    setTime(0.05 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive === true && time > 0) {\n      countDownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 10\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"TERMINOUo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, this) : null, isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton, \" \").concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButtonActive),\n      onClick: resetCountDown,\n      children: \"Reset Contador\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton,\n      onClick: startCountDown,\n      children: \"Start Contador\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 16\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 7\n  }, this);\n}\n\n_s(CountDown, \"DMYJDcVHa71AbcQY8f6edp+Tdio=\");\n\n_c = CountDown;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeD81NjEzIl0sIm5hbWVzIjpbImNvdW50RG93blRpbWVvdXQiLCJDb3VudERvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluaXNoZWQiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdGFydENvdW50RG93biIsInJlc2V0Q291bnREb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInN0eWxlcyIsImNvdW50RG93bkNvbnRhaW5lciIsImNvdW50RG93bkJ1dHRvbiIsImNvdW50RG93bkJ1dHRvbkFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUVBQyxzREFBUSxDQUFDLE9BQU8sRUFBUixDQUZSO0FBQUEsTUFFakJDLElBRmlCO0FBQUEsTUFFWEMsT0FGVzs7QUFBQSxtQkFHUUYsc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHakJHLFFBSGlCO0FBQUEsTUFHUEMsV0FITzs7QUFBQSxtQkFJZUosc0RBQVEsQ0FBQyxLQUFELENBSnZCO0FBQUEsTUFJakJLLFdBSmlCO0FBQUEsTUFJSkMsY0FKSSxrQkFNeEI7OztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCOztBQVJ3Qiw4QkFVVVUsTUFBTSxDQUFDSixPQUFELENBQU4sQ0FBZ0JLLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQVZWO0FBQUE7QUFBQSxNQVVqQkMsVUFWaUI7QUFBQSxNQVVMQyxXQVZLOztBQUFBLCtCQVlVSixNQUFNLENBQUNELE9BQUQsQ0FBTixDQUFnQkUsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBWlY7QUFBQTtBQUFBLE1BWWpCRyxVQVppQjtBQUFBLE1BWUxDLFdBWks7O0FBY3hCLFdBQVNDLGNBQVQsR0FBeUI7QUFDdEJkLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRixHQWhCdUIsQ0FrQnhCOzs7QUFDQSxXQUFTZSxjQUFULEdBQXlCO0FBQ3RCQyxnQkFBWSxDQUFDdEIsZ0JBQUQsQ0FBWjtBQUNBTSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FGLFdBQU8sQ0FBQyxPQUFPLEVBQVIsQ0FBUDtBQUNMOztBQUVFbUIseURBQVMsQ0FBRSxZQUFJO0FBQ1osUUFBSWxCLFFBQVEsS0FBSyxJQUFiLElBQXFCRixJQUFJLEdBQUcsQ0FBaEMsRUFBa0M7QUFDL0JILHNCQUFnQixHQUFHd0IsVUFBVSxDQUFDLFlBQU07QUFDOUJwQixlQUFPLENBQUVELElBQUksR0FBRyxDQUFULENBQVA7QUFDRixPQUZ5QixFQUV2QixJQUZ1QixDQUE3QjtBQUdGLEtBSkQsTUFJTyxJQUFHRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF4QixFQUEwQjtBQUM5Qkssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRjtBQUNILEdBVFEsRUFTTixDQUFDRCxRQUFELEVBQVdGLElBQVgsQ0FUTSxDQUFUO0FBV0Esc0JBQ0c7QUFBQSw0QkFFRztBQUFLLGVBQVMsRUFBRXNCLDhFQUFNLENBQUNDLGtCQUF2QjtBQUFBLDhCQUNHO0FBQUEsZ0NBQ0c7QUFBQSxvQkFBT1Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBRUc7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBTUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSCxlQVFHO0FBQUEsZ0NBQ0c7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBRUc7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZILEVBaUJLWixXQUFXLGdCQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFUsR0FFVCxJQW5CUCxFQXVCSUYsUUFBUSxnQkFFRjtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQ0UsZUFBUyxZQUFLb0IsOEVBQU0sQ0FBQ0UsZUFBWixjQUErQkYsOEVBQU0sQ0FBQ0cscUJBQXRDLENBRFg7QUFFRSxhQUFPLEVBQUVQLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRSxnQkFVSDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQ0csZUFBUyxFQUFFSSw4RUFBTSxDQUFDRSxlQURyQjtBQUVHLGFBQU8sRUFBRVAsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQTJDRjs7R0EvRWVuQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3MnO1xuXG5sZXQgY291bnREb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7IFxuXG5leHBvcnQgZnVuY3Rpb24gQ291bnREb3duKCl7XG5cbiAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMDUgKiA2MCk7XG4gICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgLy8gdGVtcG8gZG8gcmVsb2dpbyBjb250YWRvcyBkYWRvIGVtIG1pbnV0b3MgWCBzZWd1bmRvc1xuICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTsgXG4gICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpOyBcbiAgIFxuICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTsgXG5cbiAgIGZ1bmN0aW9uIHN0YXJ0Q291bnREb3duKCl7XG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgIH1cbiAgIFxuICAgLy8gcmVzZXRhciBwYXJhIG9zIDI1IG5vdmFtZW50ZSFcbiAgIGZ1bmN0aW9uIHJlc2V0Q291bnREb3duKCl7XG4gICAgICBjbGVhclRpbWVvdXQoY291bnREb3duVGltZW91dCk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgIHNldFRpbWUoMC4wNSAqIDYwKVxufVxuXG4gICB1c2VFZmZlY3QoICgpPT57XG4gICAgICBpZiggaXNBY3RpdmUgPT09IHRydWUgJiYgdGltZSA+IDApe1xuICAgICAgICAgY291bnREb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgc2V0VGltZSggdGltZSAtIDEgKSAgICAgXG4gICAgICAgICAgICB9LCAxMDAwKTsgXG4gICAgICB9IGVsc2UgaWYoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCl7XG4gICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKVxuICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpOyAgICAgICAgIFxuICAgICAgfVxuICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcbiAgIFxuICAgcmV0dXJuKFxuICAgICAgPGRpdj5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERvd25Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIHsgaGFzRmluaXNoZWQgPyAoXG4gICAgICAgICAgICA8cD5URVJNSU5PVW88L3A+XG4gICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgIHtpc0FjdGl2ZSA/IFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnREb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudERvd25CdXR0b25BY3RpdmV9YH0gXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50RG93bn0+XG4gICAgICAgICAgICAgICAgICBSZXNldCBDb250YWRvclxuICAgICAgICAgICAgICAgPC9idXR0b24+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApIFxuICAgICAgICAgICAgOiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnREb3duQnV0dG9ufSBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnREb3dufT5cbiAgICAgICAgICAgICAgICAgIFN0YXJ0IENvbnRhZG9yXG4gICAgICAgICAgICAgICA8L2J1dHRvbj4gICBcbiAgICAgICAgICAgICkgICAgXG4gICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CountDown.tsx\n");

/***/ })

})