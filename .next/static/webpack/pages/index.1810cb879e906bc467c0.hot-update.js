webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/CountDown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/CountDown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".CountDown_countDownContainer__1Fj-6{\\n   display: flex;\\n   align-items: center;\\n   font-family: Rajdhani;\\n   font-weight: 600;\\n   color: var(--title);\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div{\\n   flex: 1 1;\\n   display: flex;\\n   align-items: center;\\n   justify-content: space-evenly;\\n\\n   background: var(--white);\\n   box-shadow: 0 0 60x rgba(0, 0, 0, 0.85);\\n   border-radius: 5px;\\n   font-size: 8.5rem;\\n   text-align: center;\\n\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div span{\\n   flex: 1 1;\\n\\n}\\n\\n\\n.CountDown_countDownContainer__1Fj-6 > div span:first-child{\\n   border-right: 1px solid #f0f1f3;\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div span:last-child{\\n   border-left: 1px solid #f0f1f3;\\n   \\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > span{\\n   font-size: 6.25rem;\\n   margin: 0 0.25rem\\n}\\n\\n.CountDown_countDownButton__6Wz7e{\\n   display: flex;\\n   align-items: center;\\n   justify-content:center;\\n\\n   width: 100%;\\n   height: 5rem; \\n   margin-top: 2rem;\\n   border: 0em;\\n   border-radius: 5px;\\n   background: var(--blue);\\n   color: var(--white);\\n\\n   font-size: 1.25rem;\\n   font-weight: 600;\\n\\n   transition: background-color 0.56s;\\n}\\n\\n.CountDown_countDownButton__6Wz7e:hover{\\n   background-color: var(--blue-dark);\\n}\\n\\n.CountDown_countDownButtonActive__3-2iz{\\n   background: #c20a69;\\n   color: var(--title);\\n}\\n\\n.CountDown_countDownButtonActive__3-2iz:hover{\\n   background: var(--red);\\n   color: #fff;\\n}\\n\\n.CountDown_countDownButton__6Wz7e:not(:disabled):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.CountDown_countDownButtonActive__3-2iz:not([disabled]):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.CountDown_countDownButton__6Wz7e:disabled {\\n   background: #fff;\\n   color: var(--text);\\n   cursor: pointer;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/CountDown.module.css\"],\"names\":[],\"mappings\":\"AAAA;GACG,aAAa;GACb,mBAAmB;GACnB,qBAAqB;GACrB,gBAAgB;GAChB,mBAAmB;AACtB;;AAEA;GACG,SAAO;GACP,aAAa;GACb,mBAAmB;GACnB,6BAA6B;;GAE7B,wBAAwB;GACxB,uCAAuC;GACvC,kBAAkB;GAClB,iBAAiB;GACjB,kBAAkB;;AAErB;;AAEA;GACG,SAAO;;AAEV;;;AAGA;GACG,+BAA+B;AAClC;;AAEA;GACG,8BAA8B;;AAEjC;;AAEA;GACG,kBAAkB;GAClB;AACH;;AAEA;GACG,aAAa;GACb,mBAAmB;GACnB,sBAAsB;;GAEtB,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,WAAW;GACX,kBAAkB;GAClB,uBAAuB;GACvB,mBAAmB;;GAEnB,kBAAkB;GAClB,gBAAgB;;GAEhB,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,mBAAmB;GACnB,mBAAmB;AACtB;;AAEA;GACG,sBAAsB;GACtB,WAAW;AACd;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,eAAe;AAClB\",\"sourcesContent\":[\".countDownContainer{\\n   display: flex;\\n   align-items: center;\\n   font-family: Rajdhani;\\n   font-weight: 600;\\n   color: var(--title);\\n}\\n\\n.countDownContainer > div{\\n   flex: 1;\\n   display: flex;\\n   align-items: center;\\n   justify-content: space-evenly;\\n\\n   background: var(--white);\\n   box-shadow: 0 0 60x rgba(0, 0, 0, 0.85);\\n   border-radius: 5px;\\n   font-size: 8.5rem;\\n   text-align: center;\\n\\n}\\n\\n.countDownContainer > div span{\\n   flex: 1;\\n\\n}\\n\\n\\n.countDownContainer > div span:first-child{\\n   border-right: 1px solid #f0f1f3;\\n}\\n\\n.countDownContainer > div span:last-child{\\n   border-left: 1px solid #f0f1f3;\\n   \\n}\\n\\n.countDownContainer > span{\\n   font-size: 6.25rem;\\n   margin: 0 0.25rem\\n}\\n\\n.countDownButton{\\n   display: flex;\\n   align-items: center;\\n   justify-content:center;\\n\\n   width: 100%;\\n   height: 5rem; \\n   margin-top: 2rem;\\n   border: 0em;\\n   border-radius: 5px;\\n   background: var(--blue);\\n   color: var(--white);\\n\\n   font-size: 1.25rem;\\n   font-weight: 600;\\n\\n   transition: background-color 0.56s;\\n}\\n\\n.countDownButton:hover{\\n   background-color: var(--blue-dark);\\n}\\n\\n.countDownButtonActive{\\n   background: #c20a69;\\n   color: var(--title);\\n}\\n\\n.countDownButtonActive:hover{\\n   background: var(--red);\\n   color: #fff;\\n}\\n\\n.countDownButton:not(:disabled):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.countDownButtonActive:not([disabled]):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.countDownButton:disabled {\\n   background: #fff;\\n   color: var(--text);\\n   cursor: pointer;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countDownContainer\": \"CountDown_countDownContainer__1Fj-6\",\n\t\"countDownButton\": \"CountDown_countDownButton__6Wz7e\",\n\t\"countDownButtonActive\": \"CountDown_countDownButtonActive__3-2iz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzPzA5NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHdDQUF3QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IseUJBQXlCLEdBQUcsK0NBQStDLGVBQWUsbUJBQW1CLHlCQUF5QixtQ0FBbUMsZ0NBQWdDLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLHdCQUF3QixLQUFLLG9EQUFvRCxlQUFlLEtBQUssa0VBQWtFLHFDQUFxQyxHQUFHLCtEQUErRCxvQ0FBb0MsUUFBUSxnREFBZ0Qsd0JBQXdCLHlCQUF5QixzQ0FBc0MsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLDBCQUEwQixzQkFBc0IsMENBQTBDLEdBQUcsNENBQTRDLHdDQUF3QyxHQUFHLDRDQUE0Qyx5QkFBeUIseUJBQXlCLEdBQUcsa0RBQWtELDRCQUE0QixpQkFBaUIsR0FBRywyREFBMkQsd0NBQXdDLEdBQUcsb0VBQW9FLHdDQUF3QyxHQUFHLGtEQUFrRCxzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLFNBQVMsMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLDhDQUE4QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IseUJBQXlCLEdBQUcsOEJBQThCLGFBQWEsbUJBQW1CLHlCQUF5QixtQ0FBbUMsZ0NBQWdDLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLHdCQUF3QixLQUFLLG1DQUFtQyxhQUFhLEtBQUssaURBQWlELHFDQUFxQyxHQUFHLDhDQUE4QyxvQ0FBb0MsUUFBUSwrQkFBK0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLDBCQUEwQixzQkFBc0IsMENBQTBDLEdBQUcsMkJBQTJCLHdDQUF3QyxHQUFHLDJCQUEyQix5QkFBeUIseUJBQXlCLEdBQUcsaUNBQWlDLDRCQUE0QixpQkFBaUIsR0FBRywwQ0FBMEMsd0NBQXdDLEdBQUcsbURBQW1ELHdDQUF3QyxHQUFHLGlDQUFpQyxzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUNscEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNntcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2e1xcbiAgIGZsZXg6IDEgMTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgIGJveC1zaGFkb3c6IDAgMCA2MHggcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBkaXYgc3BhbntcXG4gICBmbGV4OiAxIDE7XFxuXFxufVxcblxcblxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdiBzcGFuOmZpcnN0LWNoaWxke1xcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdiBzcGFuOmxhc3QtY2hpbGR7XFxuICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbiAgIFxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBzcGFue1xcbiAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gICBtYXJnaW46IDAgMC4yNXJlbVxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbl9fNld6N2V7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuXFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiA1cmVtOyBcXG4gICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgIGJvcmRlcjogMGVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41NnM7XFxufVxcblxcbi5Db3VudERvd25fY291bnREb3duQnV0dG9uX182V3o3ZTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fMy0yaXp7XFxuICAgYmFja2dyb3VuZDogI2MyMGE2OTtcXG4gICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fMy0yaXo6aG92ZXJ7XFxuICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLkNvdW50RG93bl9jb3VudERvd25CdXR0b25fXzZXejdlOm5vdCg6ZGlzYWJsZWQpOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufSAgXFxuXFxuLkNvdW50RG93bl9jb3VudERvd25CdXR0b25BY3RpdmVfXzMtMml6Om5vdChbZGlzYWJsZWRdKTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn0gIFxcblxcbi5Db3VudERvd25fY291bnREb3duQnV0dG9uX182V3o3ZTpkaXNhYmxlZCB7XFxuICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixxQkFBcUI7R0FDckIsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLFNBQU87R0FDUCxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLDZCQUE2Qjs7R0FFN0Isd0JBQXdCO0dBQ3hCLHVDQUF1QztHQUN2QyxrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLGtCQUFrQjs7QUFFckI7O0FBRUE7R0FDRyxTQUFPOztBQUVWOzs7QUFHQTtHQUNHLCtCQUErQjtBQUNsQzs7QUFFQTtHQUNHLDhCQUE4Qjs7QUFFakM7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEI7QUFDSDs7QUFFQTtHQUNHLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsc0JBQXNCOztHQUV0QixXQUFXO0dBQ1gsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLHVCQUF1QjtHQUN2QixtQkFBbUI7O0dBRW5CLGtCQUFrQjtHQUNsQixnQkFBZ0I7O0dBRWhCLGtDQUFrQztBQUNyQzs7QUFFQTtHQUNHLGtDQUFrQztBQUNyQzs7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxzQkFBc0I7R0FDdEIsV0FBVztBQUNkOztBQUVBO0dBQ0csa0NBQWtDO0FBQ3JDOztBQUVBO0dBQ0csa0NBQWtDO0FBQ3JDOztBQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLGtCQUFrQjtHQUNsQixlQUFlO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudERvd25Db250YWluZXJ7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXZ7XFxuICAgZmxleDogMTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgIGJveC1zaGFkb3c6IDAgMCA2MHggcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW57XFxuICAgZmxleDogMTtcXG5cXG59XFxuXFxuXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmZpcnN0LWNoaWxke1xcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYgc3BhbjpsYXN0LWNoaWxke1xcbiAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG4gICBcXG59XFxuXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IHNwYW57XFxuICAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgIG1hcmdpbjogMCAwLjI1cmVtXFxufVxcblxcbi5jb3VudERvd25CdXR0b257XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuXFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiA1cmVtOyBcXG4gICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgIGJvcmRlcjogMGVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41NnM7XFxufVxcblxcbi5jb3VudERvd25CdXR0b246aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLmNvdW50RG93bkJ1dHRvbkFjdGl2ZXtcXG4gICBiYWNrZ3JvdW5kOiAjYzIwYTY5O1xcbiAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5jb3VudERvd25CdXR0b25BY3RpdmU6aG92ZXJ7XFxuICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvdW50RG93bkJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn0gIFxcblxcbi5jb3VudERvd25CdXR0b25BY3RpdmU6bm90KFtkaXNhYmxlZF0pOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufSAgXFxuXFxuLmNvdW50RG93bkJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudERvd25Db250YWluZXJcIjogXCJDb3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNlwiLFxuXHRcImNvdW50RG93bkJ1dHRvblwiOiBcIkNvdW50RG93bl9jb3VudERvd25CdXR0b25fXzZXejdlXCIsXG5cdFwiY291bnREb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnREb3duX2NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fMy0yaXpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/CountDown.module.css\n");

/***/ })

})