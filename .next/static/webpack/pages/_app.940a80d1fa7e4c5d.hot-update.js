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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".App {\\n  position: relative;\\n}\\n/* index -------------------------------------------------------- */\\n/* index-ends -------------------------------------------------------- */\\n/* navbar -------------------------------------------------------- */\\nheader {\\n  width: 100%;\\n  height: 100vh;\\n  background-color: var(--navbar-color);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.navbar {\\n  width: 100%;\\n  height: 62px;\\n  background-color: var(--navbar-color);\\n  position: -webkit-sticky;\\n  position: sticky;\\n  top: 0;\\n}\\n.navbar > .navbar-header {\\n  display: inline;\\n  padding: 0 0 0 30px;\\n}\\n.navbar > .navbar-header > .navbar-title {\\n  display: inline-block;\\n  font-size: 20px;\\n  color: var(--text-color);\\n  padding: 17px;\\n}\\n.navbar > .navbar-btn {\\n  display: none;\\n}\\n.navbar > .navbar-links {\\n  display: inline;\\n  float: right;\\n  font-size: 16px;\\n  padding: 0 30px 0 0;\\n}\\n.navbar > .navbar-links > a {\\n  display: inline-block;\\n  padding: 17px 10px 17px 10px;\\n  text-decoration: none;\\n  color: #efefef;\\n}\\n.navbar > .navbar-links > a:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border-radius: 15px;\\n}\\n.navbar > #navbar-check {\\n  display: none;\\n}\\n.search {\\n    width: 450px;\\n    height: 50px;\\n    border-radius: 25px 0 0 25px;\\n    padding-left: 30px;\\n}\\n.search-btn {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 0 25px 25px 0;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border: 1px solid var(--navbar-color);\\n  cursor: pointer;\\n}\\n/* navbar-ends -------------------------------------------------------- */\\n\\n/* index -------------------------------------------------------- */\\nmain {\\n  background-color: rgb(10, 12, 16);\\n  width: 100%;\\n  display: flex;\\n  padding : 5vh 5vw;\\n  color: white;\\n}\\n/* index-ends -------------------------------------------------------- */\\n\\n/* footer -------------------------------------------------------- */\\nfooter {\\n  background-color: rgb(10, 12, 16) ;\\n  height: 15vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer-inner {\\n  height: 15vh;\\n  width: 60%;\\n  border-top: 1px solid white;\\n}\\n/* footer-ends -------------------------------------------------------- */\\n\\n/* media  -------------------------------------------------------------------------- */\\n/* media (max-width: 800px) -------------------------------------------------------- */\\n/* media  -------------------------------------------------------------------------- */\\n@media (max-width: 800px) {\\n  .navbar > .navbar-btn {\\n    display: inline-block;\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n  }\\n  .navbar > .navbar-btn > label {\\n    display: inline-block;\\n    width: 62px;\\n    height: 62px;\\n    padding: 13px;\\n  }\\n  .navbar > .navbar-btn > label:hover,.nav  #navbar-check:checked ~ .nav-btn > label {\\n    background-color: rgba(0, 0, 0, 0.3);\\n  }\\n  .navbar > .navbar-btn > label > span {\\n    display: block;\\n    width: 25px;\\n    height: 10px;\\n    border-top: 2px solid #eee;\\n  }\\n  .navbar > .navbar-links {\\n    position: absolute;\\n    display: block;\\n    width: 100%;\\n    background-color: #333;\\n    height: 0px;\\n    transition: all 0.3s ease-in;\\n    overflow-y: hidden;\\n    top: 60px;\\n    left: 0px;\\n  }\\n  .navbar > .navbar-links > a {\\n    display: block;\\n    width: 100%;\\n  }\\n  .navbar > #navbar-check:not(:checked) ~ .navBAR-links {\\n    height: 0px;\\n  }\\n  .nav > #nav-check:checked ~ .nav-links {\\n    height: calc(100vh - 62px);\\n    overflow-y: auto;\\n  }\\n}\\n/* *********************** */\\n.article {\\n  padding: 20;\\n  border-bottom: \\\"1px solid #ccc\\\";\\n  height: 200px;\\n}\\n.hr-white {\\n  color: white;\\n  background-color: #fff;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/App.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;AACpB;AACA,mEAAmE;AACnE,wEAAwE;AACxE,oEAAoE;AACpE;EACE,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,wBAAgB;EAAhB,gBAAgB;EAChB,MAAM;AACR;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,oCAAoC;EACpC,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;AACtB;AACA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,oCAAoC;EACpC,qCAAqC;EACrC,eAAe;AACjB;AACA,yEAAyE;;AAEzE,mEAAmE;AACnE;EACE,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;AACA,wEAAwE;;AAExE,oEAAoE;AACpE;EACE,kCAAkC;EAClC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,UAAU;EACV,2BAA2B;AAC7B;AACA,yEAAyE;;AAEzE,sFAAsF;AACtF,sFAAsF;AACtF,sFAAsF;AACtF;EACE;IACE,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,QAAQ;EACV;EACA;IACE,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,aAAa;EACf;EACA;IACE,oCAAoC;EACtC;EACA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,sBAAsB;IACtB,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,SAAS;EACX;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;AACF;AACA,4BAA4B;AAC5B;EACE,WAAW;EACX,+BAA+B;EAC/B,aAAa;AACf;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB\",\"sourcesContent\":[\".App {\\n  position: relative;\\n}\\n/* index -------------------------------------------------------- */\\n/* index-ends -------------------------------------------------------- */\\n/* navbar -------------------------------------------------------- */\\nheader {\\n  width: 100%;\\n  height: 100vh;\\n  background-color: var(--navbar-color);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.navbar {\\n  width: 100%;\\n  height: 62px;\\n  background-color: var(--navbar-color);\\n  position: sticky;\\n  top: 0;\\n}\\n.navbar > .navbar-header {\\n  display: inline;\\n  padding: 0 0 0 30px;\\n}\\n.navbar > .navbar-header > .navbar-title {\\n  display: inline-block;\\n  font-size: 20px;\\n  color: var(--text-color);\\n  padding: 17px;\\n}\\n.navbar > .navbar-btn {\\n  display: none;\\n}\\n.navbar > .navbar-links {\\n  display: inline;\\n  float: right;\\n  font-size: 16px;\\n  padding: 0 30px 0 0;\\n}\\n.navbar > .navbar-links > a {\\n  display: inline-block;\\n  padding: 17px 10px 17px 10px;\\n  text-decoration: none;\\n  color: #efefef;\\n}\\n.navbar > .navbar-links > a:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border-radius: 15px;\\n}\\n.navbar > #navbar-check {\\n  display: none;\\n}\\n.search {\\n    width: 450px;\\n    height: 50px;\\n    border-radius: 25px 0 0 25px;\\n    padding-left: 30px;\\n}\\n.search-btn {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 0 25px 25px 0;\\n  background-color: rgba(0, 0, 0, 0.3);\\n  border: 1px solid var(--navbar-color);\\n  cursor: pointer;\\n}\\n/* navbar-ends -------------------------------------------------------- */\\n\\n/* index -------------------------------------------------------- */\\nmain {\\n  background-color: rgb(10, 12, 16);\\n  width: 100%;\\n  display: flex;\\n  padding : 5vh 5vw;\\n  color: white;\\n}\\n/* index-ends -------------------------------------------------------- */\\n\\n/* footer -------------------------------------------------------- */\\nfooter {\\n  background-color: rgb(10, 12, 16) ;\\n  height: 15vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer-inner {\\n  height: 15vh;\\n  width: 60%;\\n  border-top: 1px solid white;\\n}\\n/* footer-ends -------------------------------------------------------- */\\n\\n/* media  -------------------------------------------------------------------------- */\\n/* media (max-width: 800px) -------------------------------------------------------- */\\n/* media  -------------------------------------------------------------------------- */\\n@media (max-width: 800px) {\\n  .navbar > .navbar-btn {\\n    display: inline-block;\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n  }\\n  .navbar > .navbar-btn > label {\\n    display: inline-block;\\n    width: 62px;\\n    height: 62px;\\n    padding: 13px;\\n  }\\n  .navbar > .navbar-btn > label:hover,.nav  #navbar-check:checked ~ .nav-btn > label {\\n    background-color: rgba(0, 0, 0, 0.3);\\n  }\\n  .navbar > .navbar-btn > label > span {\\n    display: block;\\n    width: 25px;\\n    height: 10px;\\n    border-top: 2px solid #eee;\\n  }\\n  .navbar > .navbar-links {\\n    position: absolute;\\n    display: block;\\n    width: 100%;\\n    background-color: #333;\\n    height: 0px;\\n    transition: all 0.3s ease-in;\\n    overflow-y: hidden;\\n    top: 60px;\\n    left: 0px;\\n  }\\n  .navbar > .navbar-links > a {\\n    display: block;\\n    width: 100%;\\n  }\\n  .navbar > #navbar-check:not(:checked) ~ .navBAR-links {\\n    height: 0px;\\n  }\\n  .nav > #nav-check:checked ~ .nav-links {\\n    height: calc(100vh - 62px);\\n    overflow-y: auto;\\n  }\\n}\\n/* *********************** */\\n.article {\\n  padding: 20;\\n  border-bottom: \\\"1px solid #ccc\\\";\\n  height: 200px;\\n}\\n.hr-white {\\n  color: white;\\n  background-color: #fff;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0FwcC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdEQUFnRCx1QkFBdUIsR0FBRyxrT0FBa08sZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsMENBQTBDLDZCQUE2QixxQkFBcUIsV0FBVyxHQUFHLDRCQUE0QixvQkFBb0Isd0JBQXdCLEdBQUcsNENBQTRDLDBCQUEwQixvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRywyQkFBMkIsb0JBQW9CLGlCQUFpQixvQkFBb0Isd0JBQXdCLEdBQUcsK0JBQStCLDBCQUEwQixpQ0FBaUMsMEJBQTBCLG1CQUFtQixHQUFHLHFDQUFxQyx5Q0FBeUMsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLFdBQVcsbUJBQW1CLG1CQUFtQixtQ0FBbUMseUJBQXlCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLGlDQUFpQyx5Q0FBeUMsMENBQTBDLG9CQUFvQixHQUFHLDRKQUE0SixzQ0FBc0MsZ0JBQWdCLGtCQUFrQixzQkFBc0IsaUJBQWlCLEdBQUcsOEpBQThKLHVDQUF1QyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGVBQWUsZ0NBQWdDLEdBQUcsc1hBQXNYLDJCQUEyQiw0QkFBNEIseUJBQXlCLGlCQUFp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QUFtQyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixLQUFLLGlDQUFpQyxxQkFBcUIsa0JBQWtCLEtBQUssMkRBQTJELGtCQUFrQixLQUFLLDRDQUE0QyxpQ0FBaUMsdUJBQXVCLEtBQUssR0FBRywyQ0FBMkMsZ0JBQWdCLHNDQUFzQyxrQkFBa0IsR0FBRyxhQUFhLGlCQUFpQiwyQkFBMkIsR0FBRyxtQkFBbUI7QUFDbnhSO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcC5jc3M/NjdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItaGVhZGVyID4gLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAxN3B4O1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMCAzMHB4IDAgMDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDE3cHggMTBweCAxN3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2VmZWZlZjtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYXZiYXIgPiAjbmF2YmFyLWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWFyY2gge1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4uc2VhcmNoLWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBuYXZiYXItZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nIDogNXZoIDV2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNikgO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXItaW5uZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLyogZm9vdGVyLWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjJweDtcXG4gICAgaGVpZ2h0OiA2MnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItYnRuID4gbGFiZWw6aG92ZXIsLm5hdiAgI25hdmJhci1jaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsID4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWxpbmtzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm5hdmJhciA+ICNuYXZiYXItY2hlY2s6bm90KDpjaGVja2VkKSB+IC5uYXZCQVItbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG4gIC5uYXYgPiAjbmF2LWNoZWNrOmNoZWNrZWQgfiAubmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmFydGljbGUge1xcbiAgcGFkZGluZzogMjA7XFxuICBib3JkZXItYm90dG9tOiBcXFwiMXB4IHNvbGlkICNjY2NcXFwiO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmhyLXdoaXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLG1FQUFtRTtBQUNuRSx3RUFBd0U7QUFDeEUsb0VBQW9FO0FBQ3BFO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCO0FBQ0EseUVBQXlFOztBQUV6RSxtRUFBbUU7QUFDbkU7RUFDRSxpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0Esd0VBQXdFOztBQUV4RSxvRUFBb0U7QUFDcEU7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDJCQUEyQjtBQUM3QjtBQUNBLHlFQUF5RTs7QUFFekUsc0ZBQXNGO0FBQ3RGLHNGQUFzRjtBQUN0RixzRkFBc0Y7QUFDdEY7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7RUFDVjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0EsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtFQUMvQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItaGVhZGVyID4gLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAxN3B4O1xcbn1cXG4ubmF2YmFyID4gLm5hdmJhci1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3Mge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMCAzMHB4IDAgMDtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDE3cHggMTBweCAxN3B4IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2VmZWZlZjtcXG59XFxuLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbi5uYXZiYXIgPiAjbmF2YmFyLWNoZWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWFyY2gge1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4uc2VhcmNoLWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBuYXZiYXItZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGluZGV4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nIDogNXZoIDV2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLyogaW5kZXgtZW5kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDEyLCAxNikgO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXItaW5uZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLyogZm9vdGVyLWVuZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjJweDtcXG4gICAgaGVpZ2h0OiA2MnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItYnRuID4gbGFiZWw6aG92ZXIsLm5hdiAgI25hdmJhci1jaGVjazpjaGVja2VkIH4gLm5hdi1idG4gPiBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWJ0biA+IGxhYmVsID4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcXG4gIH1cXG4gIC5uYXZiYXIgPiAubmF2YmFyLWxpbmtzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbiAgLm5hdmJhciA+IC5uYXZiYXItbGlua3MgPiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm5hdmJhciA+ICNuYXZiYXItY2hlY2s6bm90KDpjaGVja2VkKSB+IC5uYXZCQVItbGlua3Mge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gIH1cXG4gIC5uYXYgPiAjbmF2LWNoZWNrOmNoZWNrZWQgfiAubmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjJweCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmFydGljbGUge1xcbiAgcGFkZGluZzogMjA7XFxuICBib3JkZXItYm90dG9tOiBcXFwiMXB4IHNvbGlkICNjY2NcXFwiO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmhyLXdoaXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/App.css\n"));

/***/ })

});