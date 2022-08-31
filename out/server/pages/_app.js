"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({
  className,
  children
}, ref) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    ref: ref,
    className: `max-w-screen-lg mx-auto w-full ${className ?? ''}`,
    children: children
  });
});
Container.displayName = 'Container';

/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./context/global.ts
var context_global = __webpack_require__(9791);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/layout/Container.tsx
var Container = __webpack_require__(8155);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layout/HeaderTitle.tsx



const HeaderTitle = () => {
  const {
    app_name
  } = (0,context_global/* useGlobalContext */.b)();
  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "text-3xl font-dm-sans-bold text-primary-2 dark:text-secondary",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: '/',
      children: app_name
    })
  });
};
;// CONCATENATED MODULE: ./components/layout/HeaderLink.tsx
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const HeaderLink = _ref => {
  let {
    children
  } = _ref,
      linkProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), _objectSpread(_objectSpread({}, linkProps), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "inline-flex font-medium px-1.5 h-6 text-primary-2 dark:text-secondary text-base sm:text-lg",
      children: children
    })
  }));
};
;// CONCATENATED MODULE: ./components/layout/Header.tsx






const ToggleTheme = dynamic_default()(() => __webpack_require__.e(/* import() */ 507).then(__webpack_require__.bind(__webpack_require__, 507)).then(result => result.ToggleTheme).catch(error => error), {
  ssr: false,
  loadableGenerated: {
    modules: ["../components/layout/Header.tsx -> " + '@components/ToggleTheme']
  }
});
const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "fixed top-0 left-0 z-20 flex w-full h-20 text-primary-2 dark:text-secondary bg-white dark:bg-primary-1",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      className: "w-100 flex flex-1 px-6 flex-row justify-between items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderTitle, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "inline-flex space-x-4 items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(HeaderLink, {
            href: "/posts",
            children: "Posts"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(ToggleTheme, {})
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/layout/CommonLinks.tsx
var CommonLinks = __webpack_require__(1713);
;// CONCATENATED MODULE: ./components/layout/Footer.tsx




const Footer = () => /*#__PURE__*/jsx_runtime_.jsx("footer", {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
    className: "flex relative px-6 pb-6 sm:px-12 sm:pb-12 font-bold justify-between dark:text-secondary text-primary-2",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      id: "copyright",
      children: ["\xA9 ", new Date().getFullYear(), " W Log"]
    }), /*#__PURE__*/jsx_runtime_.jsx(CommonLinks/* default */.Z, {})]
  })
});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/Main.tsx


const Main = ({
  className,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "text-primary-2 dark:text-secondary bg-white dark:bg-primary-1 mt-20",
    children: children
  });
};
;// CONCATENATED MODULE: ./components/layout/index.tsx







const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Main, {
    children: children
  }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
});

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function WLogApp({
  Component,
  pageProps
}) {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/jsx_runtime_.jsx(context_global/* GlobalContext.Provider */.k.Provider, {
    value: (global === null || global === void 0 ? void 0 : global.attributes) ?? {},
    children: /*#__PURE__*/jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (WLogApp);

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("@styled-icons/styled-icon");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,82,664,152,256,713], () => (__webpack_exec__(778)));
module.exports = __webpack_exports__;

})();