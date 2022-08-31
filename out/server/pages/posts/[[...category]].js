"use strict";
(() => {
var exports = {};
exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 2817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _category_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./lib/strapi/fetch.ts
var fetch = __webpack_require__(8532);
// EXTERNAL MODULE: ./lib/utils/index.ts
var utils = __webpack_require__(5443);
// EXTERNAL MODULE: ./lib/utils/staticProps.ts
var staticProps = __webpack_require__(9850);
// EXTERNAL MODULE: ./components/layout/Container.tsx
var Container = __webpack_require__(8155);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./components/Card.tsx
var Card = __webpack_require__(8837);
// EXTERNAL MODULE: ./components/Tag.tsx + 1 modules
var Tag = __webpack_require__(7483);
// EXTERNAL MODULE: ./components/icons/index.tsx + 1 modules
var icons = __webpack_require__(2256);
// EXTERNAL MODULE: ./components/post/PostImage.tsx
var PostImage = __webpack_require__(634);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/post/PostThumb.tsx







const PostThumbnail = ({
  post
}) => {
  var _post$post_categories;

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex px-3 mb-8 sm:mb-12 w-full sm:w-6/12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
      className: "flex-1",
      href: `/post-view/${post.slug}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(PostImage/* PostImage */.N, {
        src: 'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg',
        loading: 'lazy'
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-3 pb-3 sm:px-6 sm:pb-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-1xl sm:text-2xl font-bold mb-3",
          children: post.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "flex flex-row justify-between items-center my-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "inline-flex space-x-2",
              children: (((_post$post_categories = post.post_categories) === null || _post$post_categories === void 0 ? void 0 : _post$post_categories.data) ?? []).map(({
                id,
                attributes
              }) => /*#__PURE__*/jsx_runtime_.jsx(Tag/* Tag */.V, {
                children: attributes.label
              }, id))
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "inline-flex font-medium items-center text-xs sm:text-base",
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons/* Date */.Ej, {
              className: "w-4 h-4 mr-1"
            }), external_dayjs_default()(post.createdAt).format('YYYY.MM.DD')]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm sm:text-lg",
          children: `${post.description}`.substring(0, 120)
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/post/PostCategories.tsx






const PostCategories = ({
  currentCategory,
  categories
}) => {
  const router = (0,router_.useRouter)();
  const handleTagClick = external_react_default().useCallback(slug => currentCategory !== slug && router.push(`/posts/${slug}`), [currentCategory]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
    className: "bg-primary-2 text-white dark:bg-secondary dark:text-primary-1 mx-3 my-6 p-3 sm:px-6 sm:py-4 w-full overflow-auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "font-bold text-1xl sm:text-2xl mb-3 sm:mb-2 left-0 sticky",
      children: "\uC8FC\uC81C"
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "inline-flex w-auto pr-3 sm:pr-6",
      children: [{
        id: 0,
        attributes: {
          slug: '',
          label: 'All'
        }
      }, ...categories].map(({
        id,
        attributes
      }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "my-1 mr-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(Tag/* Tag */.V, {
          onClick: () => handleTagClick(attributes.slug),
          reverse: currentCategory === attributes.slug,
          className: currentCategory === attributes.slug ? 'cursor-default' : 'cursor-pointer',
          children: attributes.label
        })
      }, id))
    })]
  });
};
;// CONCATENATED MODULE: ./pages/posts/[[...category]].tsx









const Posts = ({
  currentCategory,
  categories,
  posts
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
    className: "pt-6 sm:pt-12  flex flex-wrap flex-row",
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostCategories, {
      currentCategory: currentCategory,
      categories: categories ?? []
    }), posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostThumbnail, {
      post: post.attributes
    }, post.id))]
  });
};

const getStaticPaths = async () => {
  const categoryListResponse = await (0,fetch/* fetchAPI */.I)('/post-categories', {
    populate: '*'
  });
  return {
    paths: [{
      params: {
        category: ['']
      }
    }, ...categoryListResponse.data.map(({
      attributes
    }) => ({
      params: {
        category: [attributes.slug]
      }
    }))],
    fallback: false
  };
};
const getStaticProps = (0,utils/* mergeStaticProps */.X)([staticProps/* getStaticGlobalProps */.e9, staticProps/* getStaticPostListProps */.To], 1);
/* harmony default export */ const _category_ = (Posts);

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("@styled-icons/styled-icon");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 9653:
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [922,82,664,675,256,850,176,303,634], () => (__webpack_exec__(2817)));
module.exports = __webpack_exports__;

})();