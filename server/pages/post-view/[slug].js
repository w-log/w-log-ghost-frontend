"use strict";
(() => {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 8065:
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

if (typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) {
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 3518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./lib/strapi/fetch.ts
var fetch = __webpack_require__(8532);
// EXTERNAL MODULE: ./lib/strapi/common.ts
var common = __webpack_require__(5823);
// EXTERNAL MODULE: ./lib/utils/index.ts
var utils = __webpack_require__(5443);
// EXTERNAL MODULE: ./lib/utils/staticProps.ts
var staticProps = __webpack_require__(9850);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "sanitize-html"
const external_sanitize_html_namespaceObject = require("sanitize-html");
var external_sanitize_html_default = /*#__PURE__*/__webpack_require__.n(external_sanitize_html_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/HtmlViewer.tsx




const HtmlViewer = ({
  html,
  className
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: `prose dark:prose-invert px-4 pb-12 ${className ?? ''}`,
  dangerouslySetInnerHTML: {
    __html: external_sanitize_html_default()(html, {
      allowedTags: ['img', 'strong', 'p', 'em', 'strong', 'h1', 'h2', 'ul', 'ol', 'li', 'blockquote', 'a', 'u', 'span', 'div', 'iframe'],
      allowedAttributes: {
        span: ['style'],
        div: ['style'],
        '*': ['align', 'data-wrapper-node'],
        img: ['src'],
        a: ['href', 'target'],
        iframe: ['src', 'allow', 'allowfullscreen', 'frameborder']
      }
    })
  }
});

/* harmony default export */ const components_HtmlViewer = (HtmlViewer);
;// CONCATENATED MODULE: ./components/post/PostLine.tsx


const PostLine = () => /*#__PURE__*/jsx_runtime_.jsx("hr", {
  className: "my-12 mx-auto w-[80%] max-w-sm h-[0.125rem] px-1 sm:h-1  bg-primary-2 dark:bg-secondary rounded border-none"
});

/* harmony default export */ const post_PostLine = (PostLine);
;// CONCATENATED MODULE: ./components/post/PostDescription.tsx


const PostDescription = ({
  text
}) => /*#__PURE__*/jsx_runtime_.jsx("p", {
  className: "whitespace-pre-wrap pt-4 px-4 sm:px-6 max-w-xl font-medium text-xl mx-auto",
  children: text
});

/* harmony default export */ const post_PostDescription = (PostDescription);
// EXTERNAL MODULE: ./components/layout/Container.tsx
var Container = __webpack_require__(8155);
// EXTERNAL MODULE: ./components/post/PostImage.tsx
var PostImage = __webpack_require__(634);
;// CONCATENATED MODULE: ./pages/post-view/[slug].tsx












const Post = ({
  post,
  contentHtml
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
    className: "max-w-screen-lg",
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostImage/* PostImage */.N, {
      src: (0,common/* getStrapiMedia */.$0)(post.image) ?? ''
    }), /*#__PURE__*/jsx_runtime_.jsx(post_PostDescription, {
      text: post.description
    }), /*#__PURE__*/jsx_runtime_.jsx(post_PostLine, {}), /*#__PURE__*/jsx_runtime_.jsx(components_HtmlViewer, {
      html: contentHtml ?? ''
    })]
  });
};

const getStaticPaths = async () => {
  const postsResponse = await (0,fetch/* fetchAPI */.I)('/posts', {
    populate: '*'
  });
  return {
    paths: postsResponse.data.map(({
      attributes
    }) => ({
      params: {
        slug: attributes.slug
      }
    })),
    fallback: false
  };
};
const getStaticProps = (0,utils/* mergeStaticProps */.X)([staticProps/* getStaticGlobalProps */.e9, staticProps/* getStaticPostViewProps */.Xs], 1);
/* harmony default export */ const _slug_ = (Post);

/***/ }),

/***/ 9653:
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [82,675,850,176,634], () => (__webpack_exec__(3518)));
module.exports = __webpack_exports__;

})();