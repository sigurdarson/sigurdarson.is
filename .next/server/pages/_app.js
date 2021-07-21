/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/panelbear.js":
/*!****************************!*\
  !*** ./hooks/panelbear.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePanelbear\": function() { return /* binding */ usePanelbear; }\n/* harmony export */ });\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @panelbear/panelbear-js */ \"@panelbear/panelbear-js\");\n/* harmony import */ var _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst usePanelbear = (site, config = {}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.load(site, config); // Trigger initial page view\n\n    _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview(); // Add on route change handler for client-side navigation\n\n    const handleRouteChange = () => _panelbear_panelbear_js__WEBPACK_IMPORTED_MODULE_0__.trackPageview();\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, []);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWd1cmRhcnNvbi8uL2hvb2tzL3BhbmVsYmVhci5qcz9iOTkzIl0sIm5hbWVzIjpbInVzZVBhbmVsYmVhciIsInNpdGUiLCJjb25maWciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJQYW5lbGJlYXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHLENBQUNDLElBQUQsRUFBT0MsTUFBTSxHQUFHLEVBQWhCLEtBQXVCO0FBQ2pELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLDZEQUFBLENBQWVMLElBQWYsRUFBcUJDLE1BQXJCLEVBRGMsQ0FHZDs7QUFDQUksc0VBQUEsR0FKYyxDQU1kOztBQUNBLFVBQU1DLGlCQUFpQixHQUFHLE1BQU1ELGtFQUFBLEVBQWhDOztBQUNBSCxVQUFNLENBQUNLLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NGLGlCQUF4QztBQUVBLFdBQU8sTUFBTTtBQUNYSixZQUFNLENBQUNLLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNILGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0QsQ0FqQk0iLCJmaWxlIjoiLi9ob29rcy9wYW5lbGJlYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQYW5lbGJlYXIgZnJvbSAnQHBhbmVsYmVhci9wYW5lbGJlYXItanMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxiZWFyID0gKHNpdGUsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUGFuZWxiZWFyLmxvYWQoc2l0ZSwgY29uZmlnKTtcblxuICAgIC8vIFRyaWdnZXIgaW5pdGlhbCBwYWdlIHZpZXdcbiAgICBQYW5lbGJlYXIudHJhY2tQYWdldmlldygpO1xuXG4gICAgLy8gQWRkIG9uIHJvdXRlIGNoYW5nZSBoYW5kbGVyIGZvciBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiBQYW5lbGJlYXIudHJhY2tQYWdldmlldygpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/panelbear.js\n");

/***/ }),

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst title = 'Sigurdarson — Brand & Product Designer (UI/UX)';\nconst description = 'Gunnar Sigurðarson a brand and product designer (UI/UX). I help businesses build growth-driven products, brands, and experiences. Currently located in Copenhagen, Denmark.';\nconst SEO = {\n  title,\n  description,\n  canonical: 'https://sigurdarson.is',\n  openGraph: {\n    type: 'website',\n    locale: 'en_IE',\n    url: 'https://sigurdarson.is',\n    title,\n    description,\n    images: [{\n      url: 'https://sigurdarson.is/img/social.png',\n      alt: title,\n      width: 1200,\n      height: 630\n    }]\n  },\n  twitter: {\n    handle: '@gsigurdarson',\n    site: '@gsigurdarson',\n    cardType: 'summary_large_image'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SEO);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWd1cmRhcnNvbi8uL25leHQtc2VvLmNvbmZpZy5qcz9jYjA4Il0sIm5hbWVzIjpbInRpdGxlIiwiZGVzY3JpcHRpb24iLCJTRU8iLCJjYW5vbmljYWwiLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwidXJsIiwiaW1hZ2VzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0d2l0dGVyIiwiaGFuZGxlIiwic2l0ZSIsImNhcmRUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxHQUFHLGdEQUFkO0FBQ0EsTUFBTUMsV0FBVyxHQUNmLDZLQURGO0FBR0EsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZGLE9BRFU7QUFFVkMsYUFGVTtBQUdWRSxXQUFTLEVBQUUsd0JBSEQ7QUFJVkMsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRSxTQURHO0FBRVRDLFVBQU0sRUFBRSxPQUZDO0FBR1RDLE9BQUcsRUFBRSx3QkFISTtBQUlUUCxTQUpTO0FBS1RDLGVBTFM7QUFNVE8sVUFBTSxFQUFFLENBQ047QUFDRUQsU0FBRyxFQUFFLHVDQURQO0FBRUVFLFNBQUcsRUFBRVQsS0FGUDtBQUdFVSxXQUFLLEVBQUUsSUFIVDtBQUlFQyxZQUFNLEVBQUU7QUFKVixLQURNO0FBTkMsR0FKRDtBQW1CVkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSxlQUREO0FBRVBDLFFBQUksRUFBRSxlQUZDO0FBR1BDLFlBQVEsRUFBRTtBQUhIO0FBbkJDLENBQVo7QUEwQkEsK0RBQWViLEdBQWYiLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZSA9ICdTaWd1cmRhcnNvbiDigJQgQnJhbmQgJiBQcm9kdWN0IERlc2lnbmVyIChVSS9VWCknO1xuY29uc3QgZGVzY3JpcHRpb24gPVxuICAnR3VubmFyIFNpZ3Vyw7BhcnNvbiBhIGJyYW5kIGFuZCBwcm9kdWN0IGRlc2lnbmVyIChVSS9VWCkuIEkgaGVscCBidXNpbmVzc2VzIGJ1aWxkIGdyb3d0aC1kcml2ZW4gcHJvZHVjdHMsIGJyYW5kcywgYW5kIGV4cGVyaWVuY2VzLiBDdXJyZW50bHkgbG9jYXRlZCBpbiBDb3BlbmhhZ2VuLCBEZW5tYXJrLic7XG5cbmNvbnN0IFNFTyA9IHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWw6ICdodHRwczovL3NpZ3VyZGFyc29uLmlzJyxcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogJ3dlYnNpdGUnLFxuICAgIGxvY2FsZTogJ2VuX0lFJyxcbiAgICB1cmw6ICdodHRwczovL3NpZ3VyZGFyc29uLmlzJyxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zaWd1cmRhcnNvbi5pcy9pbWcvc29jaWFsLnBuZycsXG4gICAgICAgIGFsdDogdGl0bGUsXG4gICAgICAgIHdpZHRoOiAxMjAwLFxuICAgICAgICBoZWlnaHQ6IDYzMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgdHdpdHRlcjoge1xuICAgIGhhbmRsZTogJ0Bnc2lndXJkYXJzb24nLFxuICAgIHNpdGU6ICdAZ3NpZ3VyZGFyc29uJyxcbiAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0VPO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-seo.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_panelbear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../hooks/panelbear */ \"./hooks/panelbear.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.js\");\n\n\nvar _jsxFileName = \"/Users/gunnar/Documents/development/sigurdarson/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // Load Panelbear only once during the app lifecycle\n  (0,_hooks_panelbear__WEBPACK_IMPORTED_MODULE_2__.usePanelbear)(process.env.YOUR_SITE_ID, {// Uncomment to allow sending events on localhost, and log to console too.\n    // debug: true\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_4__.default), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWd1cmRhcnNvbi8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVBhbmVsYmVhciIsInByb2Nlc3MiLCJlbnYiLCJZT1VSX1NJVEVfSUQiLCJTRU8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkM7QUFDQUMsZ0VBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQWIsRUFBMkIsQ0FDckM7QUFDQTtBQUZxQyxHQUEzQixDQUFaO0FBS0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxnREFBRCxvQkFBZ0JDLHFEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyB1c2VQYW5lbGJlYXIgfSBmcm9tICcuLy4uL2hvb2tzL3BhbmVsYmVhcic7XG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuXG5pbXBvcnQgU0VPIGZyb20gJy4uL25leHQtc2VvLmNvbmZpZyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBMb2FkIFBhbmVsYmVhciBvbmx5IG9uY2UgZHVyaW5nIHRoZSBhcHAgbGlmZWN5Y2xlXG4gIHVzZVBhbmVsYmVhcihwcm9jZXNzLmVudi5ZT1VSX1NJVEVfSUQsIHtcbiAgICAvLyBVbmNvbW1lbnQgdG8gYWxsb3cgc2VuZGluZyBldmVudHMgb24gbG9jYWxob3N0LCBhbmQgbG9nIHRvIGNvbnNvbGUgdG9vLlxuICAgIC8vIGRlYnVnOiB0cnVlXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5TRU99IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@panelbear/panelbear-js":
/*!******************************************!*\
  !*** external "@panelbear/panelbear-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@panelbear/panelbear-js");;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();