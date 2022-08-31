"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 5823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ getStrapiMedia),
/* harmony export */   "pK": () => (/* binding */ getStrapiURL)
/* harmony export */ });
/* unused harmony export isEmptyMedia */
const getStrapiURL = (path = '') => {
  return `${"http://127.0.0.1:1337" || 0}${path}`;
};
const isEmptyMedia = media => {
  return media.data === null;
};
const getStrapiMedia = media => {
  var _media$data;

  if (!media || isEmptyMedia(media)) return null;
  const {
    url
  } = (_media$data = media.data) === null || _media$data === void 0 ? void 0 : _media$data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
};

/***/ }),

/***/ 8532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fetchAPI)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5823);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      'Content-Type': 'application/json'
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject, {
    encode: true
  });
  const requestUrl = `${(0,_common__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiURL */ .pK)(`/api${path}${queryString ? `?${queryString}` : ''}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.log(await response.json());
    throw new Error(`An error occured please try again : ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

/***/ }),

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "To": () => (/* binding */ getStaticPostListProps),
/* harmony export */   "Xs": () => (/* binding */ getStaticPostViewProps),
/* harmony export */   "e9": () => (/* binding */ getStaticGlobalProps),
/* harmony export */   "wb": () => (/* binding */ getStaticAboutProps)
/* harmony export */ });
/* harmony import */ var _lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8532);


const md = __webpack_require__(9653)({
  html: true
});

const getStaticGlobalProps = async () => {
  const response = await (0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/global', {
    populate: ['*', 'default_seo', 'default_seo.og_image', 'contact']
  });
  return {
    props: {
      global: response.data
    }
  };
};
const getStaticPostViewProps = async ctx => {
  var _ctx$params, _post$attributes;

  const slug = ((_ctx$params = ctx.params) === null || _ctx$params === void 0 ? void 0 : _ctx$params.slug) ?? '';
  const postViewResponse = await (0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/posts', {
    sort: ['createdAt:desc'],
    populate: '*',
    filters: {
      slug
    }
  });
  const [post] = (postViewResponse === null || postViewResponse === void 0 ? void 0 : postViewResponse.data) ?? [];

  if (!post) {
    return {
      notFound: true
    };
  }

  const contentHtml = md.render(((_post$attributes = post.attributes) === null || _post$attributes === void 0 ? void 0 : _post$attributes.content) ?? '');
  return {
    props: {
      post: post === null || post === void 0 ? void 0 : post.attributes,
      contentHtml
    }
  };
};
const getStaticPostListProps = async ctx => {
  var _ctx$params2, _ctx$params2$category;

  const currentCategory = ((_ctx$params2 = ctx.params) === null || _ctx$params2 === void 0 ? void 0 : (_ctx$params2$category = _ctx$params2.category) === null || _ctx$params2$category === void 0 ? void 0 : _ctx$params2$category[0]) ?? '';
  const [categoryResponse, postListResponse] = await Promise.all([(0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/post-categories', {
    populate: '*'
  }), (0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/posts', {
    sort: ['createdAt:desc'],
    populate: '*',
    filters: currentCategory ? {
      post_categories: {
        slug: currentCategory
      }
    } : {}
  })]);
  return {
    props: {
      currentCategory,
      categories: categoryResponse.data,
      posts: postListResponse.data
    }
  };
};
const getStaticAboutProps = async () => {
  const [aboutRes, recentPostRes] = await Promise.all([(0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/about', {
    populate: '*'
  }), (0,_lib_strapi_fetch__WEBPACK_IMPORTED_MODULE_0__/* .fetchAPI */ .I)('/posts', {
    sort: ['createdAt:desc'],
    populate: '*',
    pagination: {
      start: 0,
      limit: 2
    }
  })]);
  return {
    props: {
      about: aboutRes.data,
      recentPosts: recentPostRes.data
    }
  };
};

/***/ })

};
;