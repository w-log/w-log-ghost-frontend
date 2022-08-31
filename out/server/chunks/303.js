"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 8837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Card = ({
  className,
  bgClass,
  href,
  children
}) => {
  const isLink = typeof href === 'string';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("article", {
    className: `relative rounded-lg ${bgClass ?? 'bg-primary-2 text-white dark:bg-secondary dark:text-primary-1'}  ${className ?? ''}`,
    children: [isLink && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        target: '_blank',
        className: "absolute top-3.5 right-3.5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .OutLink */ .Kk, {})
      })
    }), isLink ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        children: children
      })
    }) : children]
  });
};

/***/ }),

/***/ 7483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ Tag)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./hooks/useClickAccessHandler.ts


const useClickAccessHandler = (eventFn, disabled) => {
  const handleKeyPress = external_react_default().useCallback(e => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === 'Space' || e.charCode === 13 || e.charCode === 32) {
      e.preventDefault();
      eventFn && eventFn();
    }
  }, [eventFn, disabled]);
  const handleClick = external_react_default().useCallback(() => !disabled && eventFn && eventFn(), [eventFn, disabled]);
  return {
    tabIndex: disabled || !eventFn ? undefined : 0,
    'aria-disabled': !!disabled,
    onClick: handleClick,
    onKeyPress: handleKeyPress
  };
};

/* harmony default export */ const hooks_useClickAccessHandler = (useClickAccessHandler);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Tag.tsx
const _excluded = ["reverse", "children", "className", "onClick"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Tag = _ref => {
  let {
    reverse,
    children,
    className,
    onClick
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  const events = hooks_useClickAccessHandler(onClick, false);
  return /*#__PURE__*/jsx_runtime_.jsx("span", _objectSpread(_objectSpread(_objectSpread({}, otherProps), {}, {
    className: `rounded-full text-xs sm:text-base py-0.5 px-2.5 ${reverse ? 'bg-primary-2 text-white dark:text-primary-1 dark:bg-secondary' : 'text-primary-2 bg-white dark:bg-primary-1 dark:text-secondary'} ${className}`
  }, events), {}, {
    children: children
  }));
};

/***/ })

};
;