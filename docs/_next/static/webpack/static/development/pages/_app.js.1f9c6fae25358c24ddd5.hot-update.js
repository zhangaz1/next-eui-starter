webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/chrome/breadcrumbs.tsx":
/*!***********************************************!*\
  !*** ./src/components/chrome/breadcrumbs.tsx ***!
  \***********************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");
var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/chrome/breadcrumbs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * This component demonstrates a very simple use of the Next router to
 * render a breadcrumb. It's not particularly useful, but gives an idea.
 */

var Breadcrumbs = function Breadcrumbs() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var pathToBreadcrumb = {
    '/': 'Home',
    '/page-2': 'Page 2'
  };
  var pathname = router.asPath; // router.pathname gives the path on disk

  var breadcrumbs = [{
    text: pathToBreadcrumb[pathname] || pathname,
    href: pathname,
    onClick: function onClick(e) {
      e.preventDefault();
      var assetPrefix = "";
      var asTarget = pathname.startsWith('/') ? assetPrefix + pathname : assetPrefix + '/' + pathname;
      router.push(router.pathname, asTarget);
    },
    'data-test-subj': 'breadcrumbsAnimals',
    className: 'customClass'
  }];
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHeaderBreadcrumbs"], {
    breadcrumbs: breadcrumbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.1f9c6fae25358c24ddd5.hot-update.js.map