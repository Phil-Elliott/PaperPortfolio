"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects/Projects.tsx":
/*!******************************************!*\
  !*** ./components/Projects/Projects.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project/Project */ \"./components/Projects/Project/Project.tsx\");\n/* harmony import */ var _assets_images_PM_Dashboard_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/PM-Dashboard.jpg */ \"./assets/images/PM-Dashboard.jpg\");\n/* harmony import */ var _assets_images_News_Home_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/News-Home.jpg */ \"./assets/images/News-Home.jpg\");\n/* harmony import */ var _assets_images_BlogHome_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/BlogHome.jpg */ \"./assets/images/BlogHome.jpg\");\n/* harmony import */ var _assets_images_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/ecommerce.jpg */ \"./assets/images/ecommerce.jpg\");\n/* harmony import */ var _Project_ProjectImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Project/ProjectImage */ \"./components/Projects/Project/ProjectImage.tsx\");\n\n\n\n\n\n\n\n\nconst projectData = [\n    {\n        title: [\n            \"Simple\",\n            \"Plan\"\n        ],\n        description: \"A React-based application designed for task tracking within a project. It enables users to create projects and tasks, as well as move tasks across various sections using drag-and-drop functionality. Each task includes key details such as its due date, description, a comments section, and the assigned members for streamlined collaboration.\",\n        skills: [\n            \"React\",\n            \"TypeScript\",\n            \"Redux\",\n            \"Node\",\n            \"Express\",\n            \"MongoDB\",\n            \"Mongoose\",\n            \"SCSS\"\n        ],\n        demo: \"https://timely-lollipop-f90b7b.netlify.app/\",\n        code: \"https://github.com/Phil-Elliott/Project_Management-App\",\n        images: [\n            _assets_images_PM_Dashboard_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            _assets_images_PM_Dashboard_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            _assets_images_PM_Dashboard_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            _assets_images_PM_Dashboard_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        ]\n    },\n    {\n        title: [\n            \"Retro\",\n            \"Games\"\n        ],\n        description: \"An E-Commerce app showcasing different products, allowing users to explore and securely purchase their favorite ones, facilitated by an integrated Stripe payment system. It provides a user-centric experience with optimized navigation, enabling users to seamlessly add games to carts or wishlists and engage with the community through a robust review system.\",\n        skills: [\n            \"Next.js\",\n            \"TypeScript\",\n            \"Redux\",\n            \"Node\",\n            \"Express\",\n            \"MongoDB\",\n            \"Mongoose\",\n            \"Stripe API\",\n            \"Tailwind CSS\"\n        ],\n        demo: \"https://ecommerce-seven-opal-44.vercel.app/\",\n        code: \"https://github.com/Phil-Elliott/ecommerce\",\n        images: [\n            _assets_images_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            _assets_images_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            _assets_images_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            _assets_images_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        ]\n    },\n    {\n        title: [\n            \"Blog\",\n            \"Website\"\n        ],\n        description: \"A blog built with Next.js and Sanity.io. I enjoyed building this a lot, but I have not written too many articles. With a clean and minimalist design, my blog aims to deliver content in an easy-to-read format that is accessible to all. Thanks to the power of Next.js, users can navigate through the site with ease and enjoy a fast, seamless experience. On the backend, I use Sanity.io to manage and organize my content.\",\n        skills: [\n            \"Next.js\",\n            \"SCSS\",\n            \"Sanity API\"\n        ],\n        demo: \"https://www.philelliottblog.com/\",\n        code: \"https://github.com/Phil-Elliott/Phillip_Elliott_Blog\",\n        images: [\n            _assets_images_BlogHome_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            _assets_images_BlogHome_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            _assets_images_BlogHome_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            _assets_images_BlogHome_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        ]\n    },\n    {\n        title: [\n            \"News\",\n            \"Website\"\n        ],\n        description: \"This news application is built using React, TypeScript, and SCSS, and it connects to the Guardian API to provide users with a diverse range of news tags to choose from. The user-friendly interface includes a search bar that enables users to quickly find specific news articles of interest.\",\n        skills: [\n            \"React\",\n            \"TypeScript\",\n            \"SCSS\"\n        ],\n        demo: \"https://pedantic-bhabha-23f3dd.netlify.app/\",\n        code: \"https://github.com/Phil-Elliott/News-Website\",\n        images: [\n            _assets_images_News_Home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            _assets_images_News_Home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            _assets_images_News_Home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            _assets_images_News_Home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        ]\n    }\n];\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"border-y-2 border-Secondary sm:text-5xl text-fluid-9xl leading-snug text-center py-4 font-bold tracking-wide\",\n                children: \"Featured Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: projectData.map((project, index)=>{\n                    return index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex flex-col-reverse lg3:grid grid-cols-2 lg3:gap-6 mb-6 border-b-2 border-Secondary pb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: project.title,\n                                description: project.description,\n                                skills: project.skills,\n                                demo: project.demo,\n                                code: project.code,\n                                index: index\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_ProjectImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: project.title,\n                                images: project.images,\n                                index: index,\n                                demo: project.demo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg3:grid grid-cols-2 gap-6 mb-6 border-b-2 border-Secondary pb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_ProjectImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                title: project.title,\n                                images: project.images,\n                                index: index,\n                                demo: project.demo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: project.title,\n                                description: project.description,\n                                skills: project.skills,\n                                demo: project.demo,\n                                code: project.code,\n                                index: index\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Projects.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects); /*\r\n\r\ndemoAccount: \"Demo Account: Email: user@gmail.com Password: user1234\",\r\n\r\n1) Make left side responsive\r\n  - Have Right bttns go under tags\r\n\r\n\r\n2) Have the images go below the project (maybe just one image)\r\n3) Add magnifying glass to the images\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL1Byb2plY3RzL1Byb2plY3RzLnRzeD81NjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC9Qcm9qZWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0SW1hZ2UxIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL1BNLURhc2hib2FyZC5qcGdcIjtcclxuaW1wb3J0IFByb2plY3RJbWFnZTIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvTmV3cy1Ib21lLmpwZ1wiO1xyXG5pbXBvcnQgUHJvamVjdEltYWdlMyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9CbG9nSG9tZS5qcGdcIjtcclxuaW1wb3J0IFByb2plY3RJbWFnZTQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZWNvbW1lcmNlLmpwZ1wiO1xyXG5pbXBvcnQgUHJvamVjdEltYWdlIGZyb20gXCIuL1Byb2plY3QvUHJvamVjdEltYWdlXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0RGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogW1wiU2ltcGxlXCIsIFwiUGxhblwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkEgUmVhY3QtYmFzZWQgYXBwbGljYXRpb24gZGVzaWduZWQgZm9yIHRhc2sgdHJhY2tpbmcgd2l0aGluIGEgcHJvamVjdC4gSXQgZW5hYmxlcyB1c2VycyB0byBjcmVhdGUgcHJvamVjdHMgYW5kIHRhc2tzLCBhcyB3ZWxsIGFzIG1vdmUgdGFza3MgYWNyb3NzIHZhcmlvdXMgc2VjdGlvbnMgdXNpbmcgZHJhZy1hbmQtZHJvcCBmdW5jdGlvbmFsaXR5LiBFYWNoIHRhc2sgaW5jbHVkZXMga2V5IGRldGFpbHMgc3VjaCBhcyBpdHMgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBhIGNvbW1lbnRzIHNlY3Rpb24sIGFuZCB0aGUgYXNzaWduZWQgbWVtYmVycyBmb3Igc3RyZWFtbGluZWQgY29sbGFib3JhdGlvbi5cIixcclxuICAgIHNraWxsczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiTm9kZVwiLFxyXG4gICAgICBcIkV4cHJlc3NcIixcclxuICAgICAgXCJNb25nb0RCXCIsXHJcbiAgICAgIFwiTW9uZ29vc2VcIixcclxuICAgICAgXCJTQ1NTXCIsXHJcbiAgICBdLFxyXG4gICAgZGVtbzogXCJodHRwczovL3RpbWVseS1sb2xsaXBvcC1mOTBiN2IubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9QaGlsLUVsbGlvdHQvUHJvamVjdF9NYW5hZ2VtZW50LUFwcFwiLFxyXG4gICAgaW1hZ2VzOiBbUHJvamVjdEltYWdlMSwgUHJvamVjdEltYWdlMSwgUHJvamVjdEltYWdlMSwgUHJvamVjdEltYWdlMV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogW1wiUmV0cm9cIiwgXCJHYW1lc1wiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIEUtQ29tbWVyY2UgYXBwIHNob3djYXNpbmcgZGlmZmVyZW50IHByb2R1Y3RzLCBhbGxvd2luZyB1c2VycyB0byBleHBsb3JlIGFuZCBzZWN1cmVseSBwdXJjaGFzZSB0aGVpciBmYXZvcml0ZSBvbmVzLCBmYWNpbGl0YXRlZCBieSBhbiBpbnRlZ3JhdGVkIFN0cmlwZSBwYXltZW50IHN5c3RlbS4gSXQgcHJvdmlkZXMgYSB1c2VyLWNlbnRyaWMgZXhwZXJpZW5jZSB3aXRoIG9wdGltaXplZCBuYXZpZ2F0aW9uLCBlbmFibGluZyB1c2VycyB0byBzZWFtbGVzc2x5IGFkZCBnYW1lcyB0byBjYXJ0cyBvciB3aXNobGlzdHMgYW5kIGVuZ2FnZSB3aXRoIHRoZSBjb21tdW5pdHkgdGhyb3VnaCBhIHJvYnVzdCByZXZpZXcgc3lzdGVtLlwiLFxyXG4gICAgc2tpbGxzOiBbXHJcbiAgICAgIFwiTmV4dC5qc1wiLFxyXG4gICAgICBcIlR5cGVTY3JpcHRcIixcclxuICAgICAgXCJSZWR1eFwiLFxyXG4gICAgICBcIk5vZGVcIixcclxuICAgICAgXCJFeHByZXNzXCIsXHJcbiAgICAgIFwiTW9uZ29EQlwiLFxyXG4gICAgICBcIk1vbmdvb3NlXCIsXHJcbiAgICAgIFwiU3RyaXBlIEFQSVwiLFxyXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxyXG4gICAgXSxcclxuICAgIGRlbW86IFwiaHR0cHM6Ly9lY29tbWVyY2Utc2V2ZW4tb3BhbC00NC52ZXJjZWwuYXBwL1wiLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vUGhpbC1FbGxpb3R0L2Vjb21tZXJjZVwiLFxyXG4gICAgaW1hZ2VzOiBbUHJvamVjdEltYWdlNCwgUHJvamVjdEltYWdlNCwgUHJvamVjdEltYWdlNCwgUHJvamVjdEltYWdlNF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogW1wiQmxvZ1wiLCBcIldlYnNpdGVcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIGJsb2cgYnVpbHQgd2l0aCBOZXh0LmpzIGFuZCBTYW5pdHkuaW8uIEkgZW5qb3llZCBidWlsZGluZyB0aGlzIGEgbG90LCBidXQgSSBoYXZlIG5vdCB3cml0dGVuIHRvbyBtYW55IGFydGljbGVzLiBXaXRoIGEgY2xlYW4gYW5kIG1pbmltYWxpc3QgZGVzaWduLCBteSBibG9nIGFpbXMgdG8gZGVsaXZlciBjb250ZW50IGluIGFuIGVhc3ktdG8tcmVhZCBmb3JtYXQgdGhhdCBpcyBhY2Nlc3NpYmxlIHRvIGFsbC4gVGhhbmtzIHRvIHRoZSBwb3dlciBvZiBOZXh0LmpzLCB1c2VycyBjYW4gbmF2aWdhdGUgdGhyb3VnaCB0aGUgc2l0ZSB3aXRoIGVhc2UgYW5kIGVuam95IGEgZmFzdCwgc2VhbWxlc3MgZXhwZXJpZW5jZS4gT24gdGhlIGJhY2tlbmQsIEkgdXNlIFNhbml0eS5pbyB0byBtYW5hZ2UgYW5kIG9yZ2FuaXplIG15IGNvbnRlbnQuXCIsXHJcbiAgICBza2lsbHM6IFtcIk5leHQuanNcIiwgXCJTQ1NTXCIsIFwiU2FuaXR5IEFQSVwiXSxcclxuICAgIGRlbW86IFwiaHR0cHM6Ly93d3cucGhpbGVsbGlvdHRibG9nLmNvbS9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL1BoaWwtRWxsaW90dC9QaGlsbGlwX0VsbGlvdHRfQmxvZ1wiLFxyXG4gICAgaW1hZ2VzOiBbUHJvamVjdEltYWdlMywgUHJvamVjdEltYWdlMywgUHJvamVjdEltYWdlMywgUHJvamVjdEltYWdlM10sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogW1wiTmV3c1wiLCBcIldlYnNpdGVcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIG5ld3MgYXBwbGljYXRpb24gaXMgYnVpbHQgdXNpbmcgUmVhY3QsIFR5cGVTY3JpcHQsIGFuZCBTQ1NTLCBhbmQgaXQgY29ubmVjdHMgdG8gdGhlIEd1YXJkaWFuIEFQSSB0byBwcm92aWRlIHVzZXJzIHdpdGggYSBkaXZlcnNlIHJhbmdlIG9mIG5ld3MgdGFncyB0byBjaG9vc2UgZnJvbS4gVGhlIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlIGluY2x1ZGVzIGEgc2VhcmNoIGJhciB0aGF0IGVuYWJsZXMgdXNlcnMgdG8gcXVpY2tseSBmaW5kIHNwZWNpZmljIG5ld3MgYXJ0aWNsZXMgb2YgaW50ZXJlc3QuXCIsXHJcbiAgICBza2lsbHM6IFtcIlJlYWN0XCIsIFwiVHlwZVNjcmlwdFwiLCBcIlNDU1NcIl0sXHJcbiAgICBkZW1vOiBcImh0dHBzOi8vcGVkYW50aWMtYmhhYmhhLTIzZjNkZC5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL1BoaWwtRWxsaW90dC9OZXdzLVdlYnNpdGVcIixcclxuICAgIGltYWdlczogW1Byb2plY3RJbWFnZTIsIFByb2plY3RJbWFnZTIsIFByb2plY3RJbWFnZTIsIFByb2plY3RJbWFnZTJdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJib3JkZXIteS0yIGJvcmRlci1TZWNvbmRhcnkgc206dGV4dC01eGwgdGV4dC1mbHVpZC05eGwgbGVhZGluZy1zbnVnIHRleHQtY2VudGVyIHB5LTQgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICBGZWF0dXJlZCBQcm9qZWN0c1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICB7cHJvamVjdERhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGxnMzpncmlkIGdyaWQtY29scy0yIGxnMzpnYXAtNiBtYi02IGJvcmRlci1iLTIgYm9yZGVyLVNlY29uZGFyeSBwYi02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2tpbGxzPXtwcm9qZWN0LnNraWxsc31cclxuICAgICAgICAgICAgICAgIGRlbW89e3Byb2plY3QuZGVtb31cclxuICAgICAgICAgICAgICAgIGNvZGU9e3Byb2plY3QuY29kZX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0SW1hZ2VcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtwcm9qZWN0LmltYWdlc31cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGRlbW89e3Byb2plY3QuZGVtb31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnMzpncmlkIGdyaWQtY29scy0yIGdhcC02IG1iLTYgYm9yZGVyLWItMiBib3JkZXItU2Vjb25kYXJ5IHBiLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RJbWFnZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZXM9e3Byb2plY3QuaW1hZ2VzfVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgZGVtbz17cHJvamVjdC5kZW1vfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2tpbGxzPXtwcm9qZWN0LnNraWxsc31cclxuICAgICAgICAgICAgICAgIGRlbW89e3Byb2plY3QuZGVtb31cclxuICAgICAgICAgICAgICAgIGNvZGU9e3Byb2plY3QuY29kZX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG5cclxuLypcclxuXHJcbmRlbW9BY2NvdW50OiBcIkRlbW8gQWNjb3VudDogRW1haWw6IHVzZXJAZ21haWwuY29tIFBhc3N3b3JkOiB1c2VyMTIzNFwiLFxyXG5cclxuMSkgTWFrZSBsZWZ0IHNpZGUgcmVzcG9uc2l2ZVxyXG4gIC0gSGF2ZSBSaWdodCBidHRucyBnbyB1bmRlciB0YWdzXHJcblxyXG5cclxuMikgSGF2ZSB0aGUgaW1hZ2VzIGdvIGJlbG93IHRoZSBwcm9qZWN0IChtYXliZSBqdXN0IG9uZSBpbWFnZSlcclxuMykgQWRkIG1hZ25pZnlpbmcgZ2xhc3MgdG8gdGhlIGltYWdlc1xyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvamVjdCIsIlByb2plY3RJbWFnZTEiLCJQcm9qZWN0SW1hZ2UyIiwiUHJvamVjdEltYWdlMyIsIlByb2plY3RJbWFnZTQiLCJQcm9qZWN0SW1hZ2UiLCJwcm9qZWN0RGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJza2lsbHMiLCJkZW1vIiwiY29kZSIsImltYWdlcyIsIlByb2plY3RzIiwiZGl2IiwiaWQiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2plY3QiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Projects.tsx\n"));

/***/ })

});