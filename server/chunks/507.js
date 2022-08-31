"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleTheme": () => (/* binding */ ToggleTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ToggleTheme = () => {
  const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const onToggleTheme = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    const doc = document.documentElement;

    const _theme = theme === 'dark' ? 'light' : 'dark';

    if (_theme === 'dark') {
      !doc.classList.contains('dark') && doc.classList.add('dark');
    } else {
      doc.classList.contains('dark') && doc.classList.remove('dark');
    }

    setTheme(_theme);
    localStorage.setItem('theme', _theme === 'dark' ? _theme : '');
  }, [theme]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect(() => {
    const isDarkTheme = localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDarkTheme ? 'dark' : 'light');
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    className: "inline-flex text-primary-2 dark:text-secondary",
    "aria-label": "change theme",
    onClick: onToggleTheme,
    children: theme === 'dark' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Sun */ .kO, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .Moon */ .JF, {})
  });
};

/***/ })

};
;