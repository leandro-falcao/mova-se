webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/CountDown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/CountDown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".CountDown_countDownContainer__1Fj-6{\\n   display: flex;\\n   align-items: center;\\n   font-family: Rajdhani;\\n   font-weight: 600;\\n   color: var(--title);\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div{\\n   flex: 1 1;\\n   display: flex;\\n   align-items: center;\\n   justify-content: space-evenly;\\n\\n   background: var(--white);\\n   box-shadow: 0 0 60x rgba(0, 0, 0, 0.85);\\n   border-radius: 5px;\\n   font-size: 8.5rem;\\n   text-align: center;\\n\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div span{\\n   flex: 1 1;\\n\\n}\\n\\n\\n.CountDown_countDownContainer__1Fj-6 > div span:first-child{\\n   border-right: 1px solid #f0f1f3;\\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > div span:last-child{\\n   border-left: 1px solid #f0f1f3;\\n   \\n}\\n\\n.CountDown_countDownContainer__1Fj-6 > span{\\n   font-size: 6.25rem;\\n   margin: 0 0.25rem\\n}\\n\\n.CountDown_countDownButton__6Wz7e{\\n   display: flex;\\n   align-items: center;\\n   justify-content:center;\\n\\n   width: 100%;\\n   height: 5rem; \\n   margin-top: 2rem;\\n   border: 0em;\\n   border-radius: 5px;\\n   background: var(--blue);\\n   color: var(--white);\\n\\n   font-size: 1.25rem;\\n   font-weight: 600;\\n\\n   transition: background-color 0.56s;\\n}\\n\\n.CountDown_countDownButton__6Wz7e:hover{\\n   background-color: var(--blue-dark);\\n}\\n\\n.CountDown_countDownButtonActive__3-2iz{\\n   background: var(--white);\\n   color: var(--title);\\n}\\n\\n.CountDown_countDownButtonActive__3-2iz:hover{\\n   background: var(--red);\\n   color: #fff;\\n}\\n\\n.CountDown_countDownButton__6Wz7e:not(:disabled):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.CountDown_countDownButtonActive__3-2iz:not([disabled]):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.CountDown_countDownButton__6Wz7e:disabled {\\n   background: #fff;\\n   color: var(--text);\\n   cursor: pointer;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/CountDown.module.css\"],\"names\":[],\"mappings\":\"AAAA;GACG,aAAa;GACb,mBAAmB;GACnB,qBAAqB;GACrB,gBAAgB;GAChB,mBAAmB;AACtB;;AAEA;GACG,SAAO;GACP,aAAa;GACb,mBAAmB;GACnB,6BAA6B;;GAE7B,wBAAwB;GACxB,uCAAuC;GACvC,kBAAkB;GAClB,iBAAiB;GACjB,kBAAkB;;AAErB;;AAEA;GACG,SAAO;;AAEV;;;AAGA;GACG,+BAA+B;AAClC;;AAEA;GACG,8BAA8B;;AAEjC;;AAEA;GACG,kBAAkB;GAClB;AACH;;AAEA;GACG,aAAa;GACb,mBAAmB;GACnB,sBAAsB;;GAEtB,WAAW;GACX,YAAY;GACZ,gBAAgB;GAChB,WAAW;GACX,kBAAkB;GAClB,uBAAuB;GACvB,mBAAmB;;GAEnB,kBAAkB;GAClB,gBAAgB;;GAEhB,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,wBAAwB;GACxB,mBAAmB;AACtB;;AAEA;GACG,sBAAsB;GACtB,WAAW;AACd;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,kCAAkC;AACrC;;AAEA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,eAAe;AAClB\",\"sourcesContent\":[\".countDownContainer{\\n   display: flex;\\n   align-items: center;\\n   font-family: Rajdhani;\\n   font-weight: 600;\\n   color: var(--title);\\n}\\n\\n.countDownContainer > div{\\n   flex: 1;\\n   display: flex;\\n   align-items: center;\\n   justify-content: space-evenly;\\n\\n   background: var(--white);\\n   box-shadow: 0 0 60x rgba(0, 0, 0, 0.85);\\n   border-radius: 5px;\\n   font-size: 8.5rem;\\n   text-align: center;\\n\\n}\\n\\n.countDownContainer > div span{\\n   flex: 1;\\n\\n}\\n\\n\\n.countDownContainer > div span:first-child{\\n   border-right: 1px solid #f0f1f3;\\n}\\n\\n.countDownContainer > div span:last-child{\\n   border-left: 1px solid #f0f1f3;\\n   \\n}\\n\\n.countDownContainer > span{\\n   font-size: 6.25rem;\\n   margin: 0 0.25rem\\n}\\n\\n.countDownButton{\\n   display: flex;\\n   align-items: center;\\n   justify-content:center;\\n\\n   width: 100%;\\n   height: 5rem; \\n   margin-top: 2rem;\\n   border: 0em;\\n   border-radius: 5px;\\n   background: var(--blue);\\n   color: var(--white);\\n\\n   font-size: 1.25rem;\\n   font-weight: 600;\\n\\n   transition: background-color 0.56s;\\n}\\n\\n.countDownButton:hover{\\n   background-color: var(--blue-dark);\\n}\\n\\n.countDownButtonActive{\\n   background: var(--white);\\n   color: var(--title);\\n}\\n\\n.countDownButtonActive:hover{\\n   background: var(--red);\\n   color: #fff;\\n}\\n\\n.countDownButton:not(:disabled):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.countDownButtonActive:not([disabled]):hover{\\n   background-color: var(--blue-dark);\\n}  \\n\\n.countDownButton:disabled {\\n   background: #fff;\\n   color: var(--text);\\n   cursor: pointer;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countDownContainer\": \"CountDown_countDownContainer__1Fj-6\",\n\t\"countDownButton\": \"CountDown_countDownButton__6Wz7e\",\n\t\"countDownButtonActive\": \"CountDown_countDownButtonActive__3-2iz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50RG93bi5tb2R1bGUuY3NzPzA5NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHdDQUF3QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IseUJBQXlCLEdBQUcsK0NBQStDLGVBQWUsbUJBQW1CLHlCQUF5QixtQ0FBbUMsZ0NBQWdDLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLHdCQUF3QixLQUFLLG9EQUFvRCxlQUFlLEtBQUssa0VBQWtFLHFDQUFxQyxHQUFHLCtEQUErRCxvQ0FBb0MsUUFBUSxnREFBZ0Qsd0JBQXdCLHlCQUF5QixzQ0FBc0MsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLDBCQUEwQixzQkFBc0IsMENBQTBDLEdBQUcsNENBQTRDLHdDQUF3QyxHQUFHLDRDQUE0Qyw4QkFBOEIseUJBQXlCLEdBQUcsa0RBQWtELDRCQUE0QixpQkFBaUIsR0FBRywyREFBMkQsd0NBQXdDLEdBQUcsb0VBQW9FLHdDQUF3QyxHQUFHLGtEQUFrRCxzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLFNBQVMsMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLDhDQUE4QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IseUJBQXlCLEdBQUcsOEJBQThCLGFBQWEsbUJBQW1CLHlCQUF5QixtQ0FBbUMsZ0NBQWdDLDZDQUE2Qyx3QkFBd0IsdUJBQXVCLHdCQUF3QixLQUFLLG1DQUFtQyxhQUFhLEtBQUssaURBQWlELHFDQUFxQyxHQUFHLDhDQUE4QyxvQ0FBb0MsUUFBUSwrQkFBK0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLDBCQUEwQixzQkFBc0IsMENBQTBDLEdBQUcsMkJBQTJCLHdDQUF3QyxHQUFHLDJCQUEyQiw4QkFBOEIseUJBQXlCLEdBQUcsaUNBQWlDLDRCQUE0QixpQkFBaUIsR0FBRywwQ0FBMEMsd0NBQXdDLEdBQUcsbURBQW1ELHdDQUF3QyxHQUFHLGlDQUFpQyxzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUM1cEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudERvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNntcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50RG93bl9jb3VudERvd25Db250YWluZXJfXzFGai02ID4gZGl2e1xcbiAgIGZsZXg6IDEgMTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgIGJveC1zaGFkb3c6IDAgMCA2MHggcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBkaXYgc3BhbntcXG4gICBmbGV4OiAxIDE7XFxuXFxufVxcblxcblxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdiBzcGFuOmZpcnN0LWNoaWxke1xcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudERvd25fY291bnREb3duQ29udGFpbmVyX18xRmotNiA+IGRpdiBzcGFuOmxhc3QtY2hpbGR7XFxuICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbiAgIFxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTYgPiBzcGFue1xcbiAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gICBtYXJnaW46IDAgMC4yNXJlbVxcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbl9fNld6N2V7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuXFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiA1cmVtOyBcXG4gICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgIGJvcmRlcjogMGVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41NnM7XFxufVxcblxcbi5Db3VudERvd25fY291bnREb3duQnV0dG9uX182V3o3ZTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fMy0yaXp7XFxuICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudERvd25fY291bnREb3duQnV0dG9uQWN0aXZlX18zLTJpejpob3ZlcntcXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbl9fNld6N2U6bm90KDpkaXNhYmxlZCk6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59ICBcXG5cXG4uQ291bnREb3duX2NvdW50RG93bkJ1dHRvbkFjdGl2ZV9fMy0yaXo6bm90KFtkaXNhYmxlZF0pOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XFxufSAgXFxuXFxuLkNvdW50RG93bl9jb3VudERvd25CdXR0b25fXzZXejdlOmRpc2FibGVkIHtcXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7R0FDRyxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLHFCQUFxQjtHQUNyQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0FBQ3RCOztBQUVBO0dBQ0csU0FBTztHQUNQLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsNkJBQTZCOztHQUU3Qix3QkFBd0I7R0FDeEIsdUNBQXVDO0dBQ3ZDLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsa0JBQWtCOztBQUVyQjs7QUFFQTtHQUNHLFNBQU87O0FBRVY7OztBQUdBO0dBQ0csK0JBQStCO0FBQ2xDOztBQUVBO0dBQ0csOEJBQThCOztBQUVqQzs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQjtBQUNIOztBQUVBO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixzQkFBc0I7O0dBRXRCLFdBQVc7R0FDWCxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjs7R0FFbkIsa0JBQWtCO0dBQ2xCLGdCQUFnQjs7R0FFaEIsa0NBQWtDO0FBQ3JDOztBQUVBO0dBQ0csa0NBQWtDO0FBQ3JDOztBQUVBO0dBQ0csd0JBQXdCO0dBQ3hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLHNCQUFzQjtHQUN0QixXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxrQ0FBa0M7QUFDckM7O0FBRUE7R0FDRyxrQ0FBa0M7QUFDckM7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsa0JBQWtCO0dBQ2xCLGVBQWU7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50RG93bkNvbnRhaW5lcntcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IGRpdntcXG4gICBmbGV4OiAxO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgYm94LXNoYWRvdzogMCAwIDYweCByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICBmb250LXNpemU6IDguNXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jb3VudERvd25Db250YWluZXIgPiBkaXYgc3BhbntcXG4gICBmbGV4OiAxO1xcblxcbn1cXG5cXG5cXG4uY291bnREb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGR7XFxuICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50RG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGR7XFxuICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbiAgIFxcbn1cXG5cXG4uY291bnREb3duQ29udGFpbmVyID4gc3BhbntcXG4gICBmb250LXNpemU6IDYuMjVyZW07XFxuICAgbWFyZ2luOiAwIDAuMjVyZW1cXG59XFxuXFxuLmNvdW50RG93bkJ1dHRvbntcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5cXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDVyZW07IFxcbiAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgYm9yZGVyOiAwZW07XFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjU2cztcXG59XFxuXFxuLmNvdW50RG93bkJ1dHRvbjpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uY291bnREb3duQnV0dG9uQWN0aXZle1xcbiAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnREb3duQnV0dG9uQWN0aXZlOmhvdmVye1xcbiAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb3VudERvd25CdXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG59ICBcXG5cXG4uY291bnREb3duQnV0dG9uQWN0aXZlOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbn0gIFxcblxcbi5jb3VudERvd25CdXR0b246ZGlzYWJsZWQge1xcbiAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnREb3duQ29udGFpbmVyXCI6IFwiQ291bnREb3duX2NvdW50RG93bkNvbnRhaW5lcl9fMUZqLTZcIixcblx0XCJjb3VudERvd25CdXR0b25cIjogXCJDb3VudERvd25fY291bnREb3duQnV0dG9uX182V3o3ZVwiLFxuXHRcImNvdW50RG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50RG93bl9jb3VudERvd25CdXR0b25BY3RpdmVfXzMtMml6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/CountDown.module.css\n");

/***/ })

})