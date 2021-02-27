webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: CountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountDown\", function() { return CountDown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ \"./src/styles/components/CountDown.module.css\");\n/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/le/Desktop/mova-se/src/components/CountDown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countDownTimeout;\nfunction CountDown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(ChallengesContext),\n      start = _useContext.start;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1]; // tempo do relogio contados dado em minutos X segundos\n\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_le_Desktop_mova_se_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountDown() {\n    setIsActive(true);\n  } // resetar para os 25 novamente!\n\n\n  function resetCountDown() {\n    clearTimeout(countDownTimeout);\n    setIsActive(false);\n    setTime(0.1 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive === true && time > 0) {\n      countDownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 10\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      type: \"button\",\n      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton,\n      onClick: resetCountDown,\n      children: \"Ciclo Encerrado\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 16\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton, \" \").concat(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButtonActive),\n        onClick: resetCountDown,\n        children: \"Reset Ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 22\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownButton,\n        onClick: startCountDown,\n        children: \"Start Cico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 25\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }, this);\n}\n\n_s(CountDown, \"OpVk6kwE6zxLjQeE1GQ58b0MPcs=\");\n\n_c = CountDown;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duLnRzeD81NjEzIl0sIm5hbWVzIjpbImNvdW50RG93blRpbWVvdXQiLCJDb3VudERvd24iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydCIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnREb3duIiwicmVzZXRDb3VudERvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwic3R5bGVzIiwiY291bnREb3duQ29udGFpbmVyIiwiY291bnREb3duQnV0dG9uIiwiY291bnREb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUVQQyx3REFBVSxDQUFDQyxpQkFBRCxDQUZIO0FBQUEsTUFFakJDLEtBRmlCLGVBRWpCQSxLQUZpQjs7QUFBQSxrQkFJREMsc0RBQVEsQ0FBQyxNQUFNLEVBQVAsQ0FKUDtBQUFBLE1BSWxCQyxJQUprQjtBQUFBLE1BSVpDLE9BSlk7O0FBQUEsbUJBS09GLHNEQUFRLENBQUMsS0FBRCxDQUxmO0FBQUEsTUFLbEJHLFFBTGtCO0FBQUEsTUFLUkMsV0FMUTs7QUFBQSxtQkFNYUosc0RBQVEsQ0FBQyxLQUFELENBTnJCO0FBQUEsTUFNbEJLLFdBTmtCO0FBQUEsTUFNTEMsY0FOSyxrQkFRekI7OztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsSUFB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aWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudERvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzcyc7XG5cbmxldCBjb3VudERvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50RG93bigpIHtcblxuICAgY29uc3QgeyBzdGFydCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG5cbiAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcbiAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIC8vIHRlbXBvIGRvIHJlbG9naW8gY29udGFkb3MgZGFkbyBlbSBtaW51dG9zIFggc2VndW5kb3NcbiAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xuXG4gICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xuXG4gICBmdW5jdGlvbiBzdGFydENvdW50RG93bigpIHtcbiAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgfVxuXG4gICAvLyByZXNldGFyIHBhcmEgb3MgMjUgbm92YW1lbnRlIVxuICAgZnVuY3Rpb24gcmVzZXRDb3VudERvd24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQoY291bnREb3duVGltZW91dCk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgIHNldFRpbWUoMC4xICogNjApXG4gICB9XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmUgPT09IHRydWUgJiYgdGltZSA+IDApIHtcbiAgICAgICAgIGNvdW50RG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpXG4gICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcbiAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpXG4gICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICB9LCBbaXNBY3RpdmUsIHRpbWVdKVxuXG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50RG93bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgeyBoYXNGaW5pc2hlZCA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERvd25CdXR0b259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50RG93bn0+XG4gICAgICAgICAgICAgICAgICBDaWNsbyBFbmNlcnJhZG9cbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnREb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudERvd25CdXR0b25BY3RpdmV9YH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudERvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgQ2ljbG9cbiAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICA6XG5cbiAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERvd25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydENvdW50RG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBDaWNvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgPC9kaXY+XG4gICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CountDown.tsx\n");

/***/ })

})