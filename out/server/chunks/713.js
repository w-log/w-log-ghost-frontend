"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 1713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9791);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const CommonLinks = () => {
  const {
    contact
  } = (0,_context_global__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalContext */ .b)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
    className: "inline-flex space-x-4",
    children: [contact.email && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
      className: "inline-flex justify-center items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: `mailto:${contact.email}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          target: "_blank",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Mail */ .Mh, {})
        })
      })
    }), contact.github && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
      className: "inline-flex justify-center items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: contact.github,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          target: "_blank",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Github */ .Ey, {})
        })
      })
    }), contact.instagram && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
      className: "inline-flex justify-center items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: 'https://instagram.com',
        target: "_blank",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          target: "_blank",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Instagram */ .mr, {})
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonLinks);

/***/ }),

/***/ 9791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useGlobalContext),
/* harmony export */   "k": () => (/* binding */ GlobalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useGlobalContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GlobalContext);

/***/ })

};
;