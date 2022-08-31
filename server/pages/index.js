"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./lib/utils/staticProps.ts
var staticProps = __webpack_require__(9850);
// EXTERNAL MODULE: ./lib/utils/index.ts
var utils = __webpack_require__(5443);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./lib/strapi/common.ts
var common = __webpack_require__(5823);
// EXTERNAL MODULE: ./context/global.ts
var global = __webpack_require__(9791);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layout/Seo.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Seo = ({
  seo
}) => {
  const {
    default_seo,
    app_name
  } = (0,global/* useGlobalContext */.b)();

  const seoWithDefaults = _objectSpread(_objectSpread({}, default_seo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // seo data 전달 시 template render
    title: seo ? `${seoWithDefaults.title} | ${app_name}` : app_name,
    // Get full image URL
    og_image: (0,common/* getStrapiMedia */.$0)(seoWithDefaults.og_image)
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [fullSeo.title && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: fullSeo.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: fullSeo.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.title
      })]
    }), fullSeo.description && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: fullSeo.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: fullSeo.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.description
      })]
    }), fullSeo.keyword && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "keyword",
        content: fullSeo.keyword
      })
    }), fullSeo.og_image && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: fullSeo.og_image
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.og_image
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "image",
        content: fullSeo.og_image
      })]
    }), fullSeo.is_article && /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ const layout_Seo = (Seo);
// EXTERNAL MODULE: ./components/icons/index.tsx + 1 modules
var icons = __webpack_require__(2256);
// EXTERNAL MODULE: ./components/layout/Container.tsx
var Container = __webpack_require__(8155);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/layout/CommonLinks.tsx
var CommonLinks = __webpack_require__(1713);
;// CONCATENATED MODULE: ./lib/event.ts
const debounceEvent = (callback, time = 100, timer = null) => e => {
  if (timer) clearTimeout(timer);
  timer = window.setTimeout(callback, time, e);
};
const throttleEvent = (callback, time = 100) => {
  let throttled = false,
      savedArgs;

  const wrapper = (...args) => {
    savedArgs = args;

    if (throttled) {
      return;
    }

    throttled = true;
    setTimeout(() => {
      throttled = false;
      callback(...savedArgs);
    }, time);
  };

  return wrapper;
};
;// CONCATENATED MODULE: ./hooks/useResize.ts


function useResize(handlerFn, debounceDelay) {
  (0,external_react_.useEffect)(() => {
    const debounceFn = debounceEvent(handlerFn, debounceDelay ?? 250);
    window.addEventListener('resize', debounceFn);
    handlerFn();
    return () => window.removeEventListener('resize', debounceFn);
  }, [handlerFn, debounceDelay]);
}
;// CONCATENATED MODULE: ./lib/background/ShootingStar.ts
function ShootingStar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ShootingStar {
  constructor(ctx) {
    var _document, _document$body;

    this.ctx = ctx;

    ShootingStar_defineProperty(this, "x", 0);

    ShootingStar_defineProperty(this, "y", 0);

    ShootingStar_defineProperty(this, "len", 0);

    ShootingStar_defineProperty(this, "speed", 0);

    ShootingStar_defineProperty(this, "size", 0);

    ShootingStar_defineProperty(this, "waitTime", 0);

    ShootingStar_defineProperty(this, "height", 0);

    ShootingStar_defineProperty(this, "active", false);

    this.reset();
    this.height = ((_document = document) === null || _document === void 0 ? void 0 : (_document$body = _document.body) === null || _document$body === void 0 ? void 0 : _document$body.offsetHeight) ?? 0;
  }

  reset() {
    var _window;

    this.x = Math.random() * ((_window = window) === null || _window === void 0 ? void 0 : _window.innerWidth) * 2 ?? 0;
    this.y = 0;
    this.len = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() * 0.5 + 0.1; // this is used so the shooting stars arent constant

    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
    this.active = false;
  }

  update() {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;

      if (this.x < -10 || this.y >= this.height + 10) {
        this.reset();
      } else {
        if (this.ctx) {
          this.ctx.lineWidth = this.size;
          this.ctx.beginPath();
          this.ctx.moveTo(this.x, this.y);
          this.ctx.lineTo(this.x + this.len, this.y - this.len);
          this.ctx.stroke();
        }
      }
    } else {
      if (this.waitTime < new Date().getTime()) {
        this.active = true;
      }
    }
  }

}
;// CONCATENATED MODULE: ./components/home/HomeBackground.tsx




const HomeBackground = () => {
  const bgCavans = external_react_default().useRef(null);
  const [viewportWidth, setViewportWidth] = external_react_default().useState(0);
  const [viewportHeight, setViewportHeight] = external_react_default().useState(0);
  const [entities, setEntities] = external_react_default().useState([]);
  const handleResize = external_react_default().useCallback(() => {
    var _document, _document$body;

    setViewportWidth(window.innerWidth ?? 0);
    setViewportHeight(((_document = document) === null || _document === void 0 ? void 0 : (_document$body = _document.body) === null || _document$body === void 0 ? void 0 : _document$body.offsetHeight) ?? 0);
  }, []);
  const initialze = external_react_default().useCallback(() => {
    var _document2, _document2$body;

    if (!bgCavans.current) return;
    const width = window.innerWidth ?? 0;
    const height = ((_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$body = _document2.body) === null || _document2$body === void 0 ? void 0 : _document2$body.offsetHeight) ?? 0;
    const ctx = bgCavans.current.getContext('2d');
    const _entities = []; // for (var i = 0; i < height * 0.4; i++) {
    //     _entities.push(
    //         new Star(
    //             {
    //                 x: Math.random() * width,
    //                 y: Math.random() * height,
    //             },
    //             ctx
    //         )
    //     );
    // }

    _entities.push(new ShootingStar(ctx));

    _entities.push(new ShootingStar(ctx));

    _entities.push(new ShootingStar(ctx));

    setViewportWidth(width);
    setViewportHeight(height);
    setEntities(_entities);
  }, []);
  useResize(handleResize, 250);
  external_react_default().useEffect(() => {
    initialze();
  }, []);
  (0,external_react_.useEffect)(() => {
    var _bgCavans$current;

    if (entities.length === 0 || !bgCavans.current) return;
    const ctx = (_bgCavans$current = bgCavans.current) === null || _bgCavans$current === void 0 ? void 0 : _bgCavans$current.getContext('2d');
    let id = 0;
    /**
        'primary-1': '#0F1521',
        'primary-2': '#022650',
        secondary: '#E5E9F2',
        'typo-1': '#8D6A4C',
        'typo-2': '#5E341B',
        white: '#fff',
     */

    const animate = () => {
      if (ctx) {
        ctx.fillStyle = '#0F1521';
        ctx.fillRect(0, 0, viewportWidth, viewportHeight);
        ctx.fillStyle = '#E5E9F2';
        ctx.strokeStyle = '#E5E9F2';
      }

      entities.forEach(entity => entity.update());
      id = requestAnimationFrame(animate);
    };

    id = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(id);
    };
  }, [entities, viewportWidth, viewportHeight]);
  return /*#__PURE__*/jsx_runtime_.jsx("canvas", {
    className: "fixed left-0 top-0 z-0",
    width: viewportWidth,
    height: viewportHeight,
    ref: bgCavans
  });
};
;// CONCATENATED MODULE: ./components/home/HomeMainSection.tsx






const HomeMainSection = ({
  title,
  titleContent,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "fixed left-0 z-0 top-20 bottom-0 w-full flex justify-start items-center bg-white dark:bg-primary-1 text-primary-2 dark:text-secondary",
    children: [/*#__PURE__*/jsx_runtime_.jsx(HomeBackground, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      className: "px-8 sm:px-12 z-[1]",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-4xl",
        "aria-label": title,
        children: titleContent
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-base sm:text-lg font-medium mt-2 mb-7 ",
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx(CommonLinks/* default */.Z, {})]
    })]
  });
};
;// CONCATENATED MODULE: ./components/home/HomeTitle.tsx


const HomeTitleContent = ({
  text
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: text
  });
};
;// CONCATENATED MODULE: ./components/home/HomeContent.tsx



const HomeContent = ({
  title,
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
  className: "home-content relative flex flex-col justify-around space-y-4 text-base sm:text-lg text-primary-2 dark:text-secondary",
  children: [title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
    className: "font-bold text-2xl mb-4",
    children: title
  }), children]
});
// EXTERNAL MODULE: ./components/Tag.tsx + 1 modules
var Tag = __webpack_require__(7483);
// EXTERNAL MODULE: ./components/Card.tsx
var Card = __webpack_require__(8837);
;// CONCATENATED MODULE: ./components/home/HomePostCard.tsx




const HomePostCard = ({
  title,
  description,
  href,
  tags,
  createdAt
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
  className: "flex-1 p-3.5 sm:p-4.5",
  href: href,
  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
    className: "text-lg sm:text-xl font-bold mb-3 pr-6 sm:pr-8",
    children: title
  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
    className: "text-xs sm:text-base text-ellipsis break-words overflow-hidden h-8 mb-2",
    children: description
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "flex justify-between items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "inline-flex space-x-2 text-xs sm:text-base",
        children: tags.map((category, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Tag/* Tag */.V, {
            children: category.attributes.label
          })
        }, i))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: createdAt
    })]
  })]
});
;// CONCATENATED MODULE: ./components/home/HomeWorkExperienceCard.tsx




const HomeWorkExperienceCard = ({
  name,
  position,
  joinDate,
  outDate
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
  className: "px-6 py-4",
  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
    className: "text-lg sm:text-xl font-bold",
    children: name
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "divide-x divide-solid dark:divide-primary-1 divide-white inline-flex font-medium text-sm sm:text-sm !leading-none",
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "pr-2",
      children: position
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "pl-2",
      children: `${external_dayjs_default()(joinDate).format('YYYY.MM')} - ${outDate ? external_dayjs_default()(outDate).format('YYYY.MM') : 'current'}`
    })]
  })]
});
// EXTERNAL MODULE: ./lib/strapi/components.tsx
var components = __webpack_require__(4009);
;// CONCATENATED MODULE: ./pages/index.tsx

















const Home = props => {
  const {
    about,
    recentPosts
  } = props;
  const {
    main_title,
    main_description,
    works,
    about_me,
    profile_image
  } = about.attributes;
  console.log(recentPosts[0].attributes.post_categories);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Seo, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* Container */.W, {
      className: `home-main w-100 flex flex-col px-8 sm:px-12 flex-column justify-between items-center`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(HomeMainSection, {
        title: main_title,
        titleContent: /*#__PURE__*/jsx_runtime_.jsx(HomeTitleContent, {
          text: main_title
        }),
        description: main_description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(HomeContent, {
        title: "Recent Posts",
        children: [recentPosts.map((post, i) => {
          var _post$attributes$post;

          return /*#__PURE__*/jsx_runtime_.jsx(HomePostCard, {
            title: post.attributes.title,
            description: post.attributes.description,
            tags: (_post$attributes$post = post.attributes.post_categories) === null || _post$attributes$post === void 0 ? void 0 : _post$attributes$post.data,
            href: `/post-view/${post.attributes.slug}`,
            createdAt: external_dayjs_default()(post.attributes.createdAt ?? '').format('YYYY.MM.DD')
          }, post.id);
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: '/posts',
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "inline-flex font-medium items-center text-primary-2 dark:text-secondary",
            children: ['View More', /*#__PURE__*/jsx_runtime_.jsx(icons/* ArrowRight */.ol, {
              className: "ml-0.5 w-4 h-4"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(HomeContent, {
        title: "Work Experience",
        children: works.map((work, i) => /*#__PURE__*/jsx_runtime_.jsx(HomeWorkExperienceCard, {
          name: work.work_name,
          position: work.work_position,
          joinDate: work.work_join_date,
          outDate: work.work_out_date
        }, i))
      }), /*#__PURE__*/jsx_runtime_.jsx(HomeContent, {
        title: "About Me",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "whitespace-pre-wrap font-medium",
          children: about_me
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* Container */.W, {
      className: "m-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(components/* StrapiImage */.p, {
        image: profile_image
      })
    })]
  });
};

const getStaticProps = (0,utils/* mergeStaticProps */.X)([staticProps/* getStaticGlobalProps */.e9, staticProps/* getStaticAboutProps */.wb], 1);
/* harmony default export */ const pages = (Home);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,82,664,675,256,850,176,303,713], () => (__webpack_exec__(9233)));
module.exports = __webpack_exports__;

})();