"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/App.css":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/App.css ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".App {\\n  position: relative;\\n}\\n/* index -------------------------------------------------------- */\\n/* index-ends -------------------------------------------------------- */\\n/* navbar -------------------------------------------------------- */\\nheader {\\n  width: 100%;\\n  height: 100vh;\\n  background-color: var(--navbar-color);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.navbar {\\n  width: 100%;\\n  height: 62px;\\n  background-color: var(--navbar-color);\\n  position: -webkit-sticky;\\n  position: sticky;\\n  top: 0;\\n}\\n.navbar > .navbar-header {\\n  display: inline;\\n  padding: 0 0 0 30px;\\n}\\n.navbar > .navbar-header > .navbar-title {\\n  display: inline-block;\\n  font-size: 20px;\\n  color: var(--text-color);\\n  padding: 17px;\\n}\\n.navbar > .navbar-btn {\\n  display: none;\\n}\\n.navbar > .navbar-links {\\n  display: inline;\\n  float: right;\\n  font-size: 16px;\\n  padding: 0 30px 0 0;\\n}\\n.navbar > .navbar-links > a {\\n  display: inline-block;\\n  padding: 17px 10px 17px 10px;\\n  text-decoration: none;\\n  color: #efefef;\\n}\\n.navbar > .navbar-links > a:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border-radius: 15px;\\n}\\n.navbar > #navbar-check {\\n  display: none;\\n}\\n.search {\\n    width: 450px;\\n    height: 50px;\\n    border-radius: 25px 0 0 25px;\\n    padding-left: 30px;\\n}\\n.search-btn {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 0 25px 25px 0;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border: 1px solid var(--navbar-color);\\n  cursor: pointer;\\n}\\n/* navbar-ends -------------------------------------------------------- */\\n\\n/* index -------------------------------------------------------- */\\nmain {\\n  background-color: rgb(10, 12, 16);\\n  width: 100%;\\n  display: flex;\\n  padding : 5vh 5vw;\\n  color: white;\\n}\\n/* index-ends -------------------------------------------------------- */\\n\\n/* footer -------------------------------------------------------- */\\nfooter {\\n  background-color: rgb(10, 12, 16) ;\\n  height: 15vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer-inner {\\n  height: 15vh;\\n  width: 60%;\\n  border-top: 1px solid white;\\n}\\n/* footer-ends -------------------------------------------------------- */\\n\\n/* media  -------------------------------------------------------------------------- */\\n/* media (max-width: 800px) -------------------------------------------------------- */\\n/* media  -------------------------------------------------------------------------- */\\n@media (max-width: 800px) {\\n  .navbar > .navbar-btn {\\n    display: inline-block;\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n  }\\n  .navbar > .navbar-btn > label {\\n    display: inline-block;\\n    width: 62px;\\n    height: 62px;\\n    padding: 13px;\\n  }\\n  .navbar > .navbar-btn > label:hover,.nav  #navbar-check:checked ~ .nav-btn > label {\\n    background-color: rgba(0, 0, 0, 0.3);\\n  }\\n  .navbar > .navbar-btn > label > span {\\n    display: block;\\n    width: 25px;\\n    height: 10px;\\n    border-top: 2px solid #eee;\\n  }\\n  .navbar > .navbar-links {\\n    position: absolute;\\n    display: block;\\n    width: 100%;\\n    background-color: #333;\\n    height: 0px;\\n    transition: all 0.3s ease-in;\\n    overflow-y: hidden;\\n    top: 60px;\\n    left: 0px;\\n  }\\n  .navbar > .navbar-links > a {\\n    display: block;\\n    width: 100%;\\n  }\\n  .navbar > #navbar-check:not(:checked) ~ .navBAR-links {\\n    height: 0px;\\n  }\\n  .nav > #nav-check:checked ~ .nav-links {\\n    height: calc(100vh - 62px);\\n    overflow-y: auto;\\n  }\\n}\\n/* *********************** */\\n.article {\\n  padding: 20;\\n  border-bottom: \\\"1px solid #ccc\\\";\\n}\\n.hr-white {\\n  color: white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/App.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;AACpB;AACA,mEAAmE;AACnE,wEAAwE;AACxE,oEAAoE;AACpE;EACE,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,wBAAgB;EAAhB,gBAAgB;EAChB,MAAM;AACR;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,oCAAoC;EACpC,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;AACtB;AACA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,oCAAoC;EACpC,qCAAqC;EACrC,eAAe;AACjB;AACA,yEAAyE;;AAEzE,mEAAmE;AACnE;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;AACA,wEAAwE;;AAExE,oEAAoE;AACpE;EACE,kCAAkC;EAClC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,UAAU;EACV,2BAA2B;AAC7B;AACA,yEAAyE;;AAEzE,sFAAsF;AACtF,sFAAsF;AACtF,sFAAsF;AACtF;EACE;IACE,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,QAAQ;EACV;EACA;IACE,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,aAAa;EACf;EACA;IACE,oCAAoC;EACtC;EACA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,sBAAsB;IACtB,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,SAAS;EACX;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;AACF;AACA,4BAA4B;AAC5B;EACE,WAAW;EACX,+BAA+B;AACjC;AACA;EACE,YAAY;AACd\",\"sourcesContent\":[\".App {\\n  position: relative;\\n}\\n/* index -------------------------------------------------------- */\\n/* index-ends -------------------------------------------------------- */\\n/* navbar -------------------------------------------------------- */\\nheader {\\n  width: 100%;\\n  height: 100vh;\\n  background-color: var(--navbar-color);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.navbar {\\n  width: 100%;\\n  height: 62px;\\n  background-color: var(--navbar-color);\\n  position: sticky;\\n  top: 0;\\n}\\n.navbar > .navbar-header {\\n  display: inline;\\n  padding: 0 0 0 30px;\\n}\\n.navbar > .navbar-header > .navbar-title {\\n  display: inline-block;\\n  font-size: 20px;\\n  color: var(--text-color);\\n  padding: 17px;\\n}\\n.navbar > .navbar-btn {\\n  display: none;\\n}\\n.navbar > .navbar-links {\\n  display: inline;\\n  float: right;\\n  font-size: 16px;\\n  padding: 0 30px 0 0;\\n}\\n.navbar > .navbar-links > a {\\n  display: inline-block;\\n  padding: 17px 10px 17px 10px;\\n  text-decoration: none;\\n  color: #efefef;\\n}\\n.navbar > .navbar-links > a:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border-radius: 15px;\\n}\\n.navbar > #navbar-check {\\n  display: none;\\n}\\n.search {\\n    width: 450px;\\n    height: 50px;\\n    border-radius: 25px 0 0 25px;\\n    padding-left: 30px;\\n}\\n.search-btn {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 0 25px 25px 0;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border: 1px solid var(--navbar-color);\\n  cursor: pointer;\\n}\\n/* navbar-ends -------------------------------------------------------- */\\n\\n/* index -------------------------------------------------------- */\\nmain {\\n  background-color: rgb(10, 12, 16);\\n  width: 100%;\\n  display: flex;\\n  padding : 5vh 5vw;\\n  color: white;\\n}\\n/* index-ends -------------------------------------------------------- */\\n\\n/* footer -------------------------------------------------------- */\\nfooter {\\n  background-color: rgb(10, 12, 16) ;\\n  height: 15vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer-inner {\\n  height: 15vh;\\n  width: 60%;\\n  border-top: 1px solid white;\\n}\\n/* footer-ends -------------------------------------------------------- */\\n\\n/* media  -------------------------------------------------------------------------- */\\n/* media (max-width: 800px) -------------------------------------------------------- */\\n/* media  -------------------------------------------------------------------------- */\\n@media (max-width: 800px) {\\n  .navbar > .navbar-btn {\\n    display: inline-block;\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n  }\\n  .navbar > .navbar-btn > label {\\n    display: inline-block;\\n    width: 62px;\\n    height: 62px;\\n    padding: 13px;\\n  }\\n  .navbar > .navbar-btn > label:hover,.nav  #navbar-check:checked ~ .nav-btn > label {\\n    background-color: rgba(0, 0, 0, 0.3);\\n  }\\n  .navbar > .navbar-btn > label > span {\\n    display: block;\\n    width: 25px;\\n    height: 10px;\\n    border-top: 2px solid #eee;\\n  }\\n  .navbar > .navbar-links {\\n    position: absolute;\\n    display: block;\\n    width: 100%;\\n    background-color: #333;\\n    height: 0px;\\n    transition: all 0.3s ease-in;\\n    overflow-y: hidden;\\n    top: 60px;\\n    left: 0px;\\n  }\\n  .navbar > .navbar-links > a {\\n    display: block;\\n    width: 100%;\\n  }\\n  .navbar > #navbar-check:not(:checked) ~ .navBAR-links {\\n    height: 0px;\\n  }\\n  .nav > #nav-check:checked ~ .nav-links {\\n    height: calc(100vh - 62px);\\n    overflow-y: auto;\\n  }\\n}\\n/* *********************** */\\n.article {\\n  padding: 20;\\n  border-bottom: \\\"1px solid #ccc\\\";\\n}\\n.hr-white {\\n  color: white;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0FwcC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdEQUFnRCx1QkFBdUIsR0FBRyxrT0FBa08sZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsMENBQTBDLDZCQUE2QixxQkFBcUIsV0FBVyxHQUFHLDRCQUE0QixvQkFBb0Isd0JBQXdCLEdBQUcsNENBQTRDLDBCQUEwQixvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRywyQkFBMkIsb0JBQW9CLGlCQUFpQixvQkFBb0Isd0JBQXdCLEdBQUcsK0JBQStCLDBCQUEwQixpQ0FBaUMsMEJBQTBCLG1CQUFtQixHQUFHLHFDQUFxQyx5Q0FBeUMsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLFdBQVcsbUJBQW1CLG1CQUFtQixtQ0FBbUMseUJBQXlCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLGlDQUFpQyx5Q0FBeUMsMENBQTBDLG9CQUFvQixHQUFHLDRKQUE0SixzQ0FBc0MsZ0JBQWdCLGtCQUFrQixzQkFBc0IsaUJBQWlCLEdBQUcsOEpBQThKLHVDQUF1QyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGVBQWUsZ0NBQWdDLEdBQUcsc1hBQXNYLDJCQUEyQiw0QkFBNEIseUJBQXlCLGlCQUFp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QixLQUFLLGlDQUFpQyxxQkFBcUIsa0JBQWtCLEtBQUssMkRBQTJELGtCQUFrQixLQUFLLDRDQUE0QyxpQ0FBaUMsdUJBQXVCLEtBQUssR0FBRywyQ0FBMkMsZ0JBQWdCLHNDQUFzQyxHQUFHLGFBQWEsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ2xxUjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9BcHAuY3NzPzY3YTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4vKiBpbmRleCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIGluZGV4LWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBuYXZiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDAgMCAwIDMwcHg7XFxufVxcbi5uYXZiYXIgPiAubmF2YmFyLWhlYWRlciA+IC5uYXZiYXItdGl0bGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgcGFkZGluZzogMTdweDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZiYXIgPiAubmF2YmFyLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDA7XFxufVxcbi5uYXZiYXIgPiAubmF2YmFyLWxpbmtzID4gYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxN3B4IDEwcHggMTdweCAxMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNlZmVmZWY7XFxufVxcbi5uYXZiYXIgPiAubmF2YmFyLWxpbmtzID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4ubmF2YmFyID4gI25hdmJhci1jaGVjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VhcmNoIHtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMCAwIDI1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuLnNlYXJjaC1idG4ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogbmF2YmFyLWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBpbmRleCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMiwgMTYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZyA6IDV2aCA1dnc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi8qIGluZGV4LWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBmb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMiwgMTYpIDtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyLWlubmVyIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi8qIGZvb3Rlci1lbmRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogbWVkaWEgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogbWVkaWEgKG1heC13aWR0aDogODAwcHgpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogbWVkaWEgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubmF2YmFyID4gLm5hdmJhci1idG4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICB9XFxuICAubmF2YmFyID4gLm5hdmJhci1idG4gPiBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDYycHg7XFxuICAgIGhlaWdodDogNjJweDtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsOmhvdmVyLC5uYXYgICNuYXZiYXItY2hlY2s6Y2hlY2tlZCB+IC5uYXYtYnRuID4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxuICAubmF2YmFyID4gLm5hdmJhci1idG4gPiBsYWJlbCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XFxuICB9XFxuICAubmF2YmFyID4gLm5hdmJhci1saW5rcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWxpbmtzID4gYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAjbmF2YmFyLWNoZWNrOm5vdCg6Y2hlY2tlZCkgfiAubmF2QkFSLWxpbmtzIHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICB9XFxuICAubmF2ID4gI25hdi1jaGVjazpjaGVja2VkIH4gLm5hdi1saW5rcyB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYycHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5hcnRpY2xlIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYm9yZGVyLWJvdHRvbTogXFxcIjFweCBzb2xpZCAjY2NjXFxcIjtcXG59XFxuLmhyLXdoaXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0EsbUVBQW1FO0FBQ25FLHdFQUF3RTtBQUN4RSxvRUFBb0U7QUFDcEU7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7QUFDQSx5RUFBeUU7O0FBRXpFLG1FQUFtRTtBQUNuRTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQSx3RUFBd0U7O0FBRXhFLG9FQUFvRTtBQUNwRTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCO0FBQ0EseUVBQXlFOztBQUV6RSxzRkFBc0Y7QUFDdEYsc0ZBQXNGO0FBQ3RGLHNGQUFzRjtBQUN0RjtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtFQUNWO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7RUFDWDtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQSw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItaGVhZGVyID4gLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAxN3B4O1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMCAzMHB4IDAgMDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDE3cHggMTBweCAxN3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2VmZWZlZjtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYXZiYXIgPiAjbmF2YmFyLWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWFyY2gge1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4uc2VhcmNoLWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBuYXZiYXItZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nIDogNXZoIDV2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNikgO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXItaW5uZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLyogZm9vdGVyLWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjJweDtcXG4gICAgaGVpZ2h0OiA2MnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItYnRuID4gbGFiZWw6aG92ZXIsLm5hdiAgI25hdmJhci1jaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsID4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWxpbmtzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm5hdmJhciA+ICNuYXZiYXItY2hlY2s6bm90KDpjaGVja2VkKSB+IC5uYXZCQVItbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG4gIC5uYXYgPiAjbmF2LWNoZWNrOmNoZWNrZWQgfiAubmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmFydGljbGUge1xcbiAgcGFkZGluZzogMjA7XFxuICBib3JkZXItYm90dG9tOiBcXFwiMXB4IHNvbGlkICNjY2NcXFwiO1xcbn1cXG4uaHItd2hpdGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/App.css\n"));

/***/ })

});