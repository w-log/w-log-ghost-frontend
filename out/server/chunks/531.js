"use strict";
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 5531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ErrorTemplate)
});

// EXTERNAL MODULE: ./components/icons/index.tsx + 1 modules
var icons = __webpack_require__(2256);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Button.tsx
const _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = _ref => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({}, props), {}, {
    className: `py-2 px-3 text-sm font-medium sm:text-base rounded border-[1px] transition
        bg-primary-2 text-white border-primary-2 hover:text-primary-2 hover:bg-white
        dark:hover:bg-primary-1 dark:bg-secondary dark:text-primary-1  dark:border-secondary dark:hover:border-secondary-1 dark:hover:text-secondary ${className}`,
    children: children
  }));
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/ErrorTemplate.tsx





const ErrorText = {
  404: {
    title: 'Not Found',
    description: '잘못된 접근입니다!'
  },
  500: {
    title: 'Server Error',
    description: '요청 처리중에 에러가 발생했어요!'
  }
};

const ErrorTemplate = ({
  statusCode
}) => {
  const router = (0,router_.useRouter)();
  const error = ErrorText[statusCode];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "error-template",
    className: "flex flex-col items-center justify-center pb-20",
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons/* ExclamationTriangle */.SV, {
      className: "w-12 h-12 sm:w-20 sm:h-20 m-4"
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "font-bold text-3xl sm:text-5xl mb-3 sm:mb-4",
      children: error.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-medium text-base sm:text-lg mb-4 sm:mb-6",
      children: error.description
    }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: () => router.push('/'),
      children: "\uD648\uC73C\uB85C \uC774\uB3D9"
    })]
  });
};

/* harmony default export */ const components_ErrorTemplate = (ErrorTemplate);

/***/ })

};
;