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

/***/ "./components/ProjectsBanner/ProjectsBanner.tsx":
/*!******************************************************!*\
  !*** ./components/ProjectsBanner/ProjectsBanner.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_FitMax_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/FitMax.png */ \"./assets/images/FitMax.png\");\n/* harmony import */ var _assets_images_news_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/news.png */ \"./assets/images/news.png\");\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project/Project */ \"./components/ProjectsBanner/Project/Project.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/swiper-bundle.css */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst ProjectsInfo = [\n    {\n        name: \"Project Management APP\",\n        description: \"Draws inspiration from Trello's interface and functionality.\",\n        image: _assets_images_FitMax_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        link: \"https://timely-lollipop-f90b7b.netlify.app/\"\n    },\n    {\n        name: \"Personal Blog\",\n        description: \"Blog built with Next.js and Sanity.io\",\n        image: _assets_images_news_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"https://www.philelliottblog.com/\"\n    },\n    {\n        name: \"News Website\",\n        description: \"draws inspiration from the BBC News website in terms of design and functionality.\",\n        image: _assets_images_news_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"https://pedantic-bhabha-23f3dd.netlify.app/\"\n    },\n    {\n        name: \"Coming Soon\",\n        description: \"I am always working on new projects, so check back soon to see what I have been up to!\",\n        image: _assets_images_news_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"/\"\n    }\n];\nconst ProjectsBanner = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n        spaceBetween: 50,\n        slidesPerView: 3,\n        simulateTouch: true,\n        initialSlide: 1,\n        // onSlideChange={() => console.log(\"slide change\")}\n        // onSwiper={(swiper) => console.log(swiper)}\n        breakpoints: {\n            300: {\n                slidesPerView: 1,\n                initialSlide: 2\n            },\n            984: {\n                slidesPerView: 2,\n                spaceBetween: 30,\n                initialSlide: 2\n            },\n            1400: {\n                slidesPerView: 3\n            }\n        },\n        className: \"my-6 border-Border items-center justify-between h-60 cursor-grab active:cursor-grabbing select-none\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: ProjectsInfo[2].name,\n                    description: ProjectsInfo[2].description,\n                    image: ProjectsInfo[2].image,\n                    link: ProjectsInfo[2].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: ProjectsInfo[0].name,\n                    description: ProjectsInfo[0].description,\n                    image: ProjectsInfo[0].image,\n                    newProject: true,\n                    link: ProjectsInfo[0].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                className: \"py-4 flex flex-col items-center justify-between text-center font-bold font-serif lg:border-x-2 border-Border xs:px-8 h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-fluid-9xl sm:text-4xl\",\n                        children: \"Recent Projects\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"leading-relaxed xs:leading-relaxed text-lg xs:text-xl \",\n                        children: \"Here are some projects that I have worked on. Click on the project to see.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg xs:text-xl text-Tertiary\",\n                        children: \"← Drag me left and right →\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: ProjectsInfo[1].name,\n                    description: ProjectsInfo[1].description,\n                    image: ProjectsInfo[1].image,\n                    link: ProjectsInfo[1].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: ProjectsInfo[3].name,\n                    description: ProjectsInfo[3].description,\n                    image: ProjectsInfo[3].image,\n                    link: ProjectsInfo[3].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectsBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBanner); /*\r\n\r\n  \r\nh-72 md:\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ProjectsBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzQmFubmVyL1Byb2plY3RzQmFubmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2lDO0FBQ0Y7QUFDakI7QUFDVztBQUNqQjtBQUVsQyxNQUFNTSxlQUFlO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPUixpRUFBYUE7UUFDcEJTLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPUCwrREFBYUE7UUFDcEJRLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPUCwrREFBYUE7UUFDcEJRLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPUCwrREFBYUE7UUFDcEJRLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsaUJBQWlCLElBQU07SUFDM0IscUJBQ0UsOERBQUNQLGdEQUFNQTtRQUNMUSxjQUFjO1FBQ2RDLGVBQWU7UUFDZkMsZUFBZSxJQUFJO1FBQ25CQyxjQUFjO1FBQ2Qsb0RBQW9EO1FBQ3BELDZDQUE2QztRQUM3Q0MsYUFBYTtZQUNYLEtBQUs7Z0JBQ0hILGVBQWU7Z0JBQ2ZFLGNBQWM7WUFDaEI7WUFDQSxLQUFLO2dCQUNIRixlQUFlO2dCQUNmRCxjQUFjO2dCQUNkRyxjQUFjO1lBQ2hCO1lBQ0EsTUFBTTtnQkFDSkYsZUFBZTtZQUNqQjtRQUNGO1FBQ0FJLFdBQVU7OzBCQUVWLDhEQUFDWixxREFBV0E7MEJBQ1YsNEVBQUNGLHdEQUFPQTtvQkFDTkksTUFBTUQsWUFBWSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtvQkFDMUJDLGFBQWFGLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVc7b0JBQ3hDQyxPQUFPSCxZQUFZLENBQUMsRUFBRSxDQUFDRyxLQUFLO29CQUM1QkMsTUFBTUosWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDTCxxREFBV0E7MEJBQ1YsNEVBQUNGLHdEQUFPQTtvQkFDTkksTUFBTUQsWUFBWSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtvQkFDMUJDLGFBQWFGLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVc7b0JBQ3hDQyxPQUFPSCxZQUFZLENBQUMsRUFBRSxDQUFDRyxLQUFLO29CQUM1QlMsWUFBWSxJQUFJO29CQUNoQlIsTUFBTUosWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDTCxxREFBV0E7Z0JBQUNZLFdBQVU7O2tDQUNyQiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzNDLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBeUQ7Ozs7OztrQ0FJdkUsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFtQzs7Ozs7Ozs7Ozs7OzBCQUluRCw4REFBQ1oscURBQVdBOzBCQUNWLDRFQUFDRix3REFBT0E7b0JBQ05JLE1BQU1ELFlBQVksQ0FBQyxFQUFFLENBQUNDLElBQUk7b0JBQzFCQyxhQUFhRixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXO29CQUN4Q0MsT0FBT0gsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csS0FBSztvQkFDNUJDLE1BQU1KLFlBQVksQ0FBQyxFQUFFLENBQUNJLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ0wscURBQVdBOzBCQUNWLDRFQUFDRix3REFBT0E7b0JBQ05JLE1BQU1ELFlBQVksQ0FBQyxFQUFFLENBQUNDLElBQUk7b0JBQzFCQyxhQUFhRixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXO29CQUN4Q0MsT0FBT0gsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csS0FBSztvQkFDNUJDLE1BQU1KLFlBQVksQ0FBQyxFQUFFLENBQUNJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0tBdEVNQztBQXdFTiwrREFBZUEsY0FBY0EsRUFBQyxDQUU5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzQmFubmVyL1Byb2plY3RzQmFubmVyLnRzeD8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RJbWFnZTEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvRml0TWF4LnBuZ1wiO1xyXG5pbXBvcnQgUHJvamVjdEltYWdlMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzLnBuZ1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0L1Byb2plY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL3N3aXBlci1idW5kbGUuY3NzXCI7XHJcblxyXG5jb25zdCBQcm9qZWN0c0luZm8gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcm9qZWN0IE1hbmFnZW1lbnQgQVBQXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEcmF3cyBpbnNwaXJhdGlvbiBmcm9tIFRyZWxsbydzIGludGVyZmFjZSBhbmQgZnVuY3Rpb25hbGl0eS5cIixcclxuICAgIGltYWdlOiBQcm9qZWN0SW1hZ2UxLFxyXG4gICAgbGluazogXCJodHRwczovL3RpbWVseS1sb2xsaXBvcC1mOTBiN2IubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBlcnNvbmFsIEJsb2dcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2cgYnVpbHQgd2l0aCBOZXh0LmpzIGFuZCBTYW5pdHkuaW9cIixcclxuICAgIGltYWdlOiBQcm9qZWN0SW1hZ2UyLFxyXG4gICAgbGluazogXCJodHRwczovL3d3dy5waGlsZWxsaW90dGJsb2cuY29tL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOZXdzIFdlYnNpdGVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcImRyYXdzIGluc3BpcmF0aW9uIGZyb20gdGhlIEJCQyBOZXdzIHdlYnNpdGUgaW4gdGVybXMgb2YgZGVzaWduIGFuZCBmdW5jdGlvbmFsaXR5LlwiLFxyXG4gICAgaW1hZ2U6IFByb2plY3RJbWFnZTIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGVkYW50aWMtYmhhYmhhLTIzZjNkZC5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29taW5nIFNvb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgYW0gYWx3YXlzIHdvcmtpbmcgb24gbmV3IHByb2plY3RzLCBzbyBjaGVjayBiYWNrIHNvb24gdG8gc2VlIHdoYXQgSSBoYXZlIGJlZW4gdXAgdG8hXCIsXHJcbiAgICBpbWFnZTogUHJvamVjdEltYWdlMixcclxuICAgIGxpbms6IFwiL1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0c0Jhbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICBzbGlkZXNQZXJWaWV3PXszfVxyXG4gICAgICBzaW11bGF0ZVRvdWNoPXt0cnVlfVxyXG4gICAgICBpbml0aWFsU2xpZGU9ezF9XHJcbiAgICAgIC8vIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKFwic2xpZGUgY2hhbmdlXCIpfVxyXG4gICAgICAvLyBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cclxuICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAzMDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5ODQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJteS02IGJvcmRlci1Cb3JkZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTYwIGN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmcgc2VsZWN0LW5vbmVcIlxyXG4gICAgPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFByb2plY3RcclxuICAgICAgICAgIG5hbWU9e1Byb2plY3RzSW5mb1syXS5uYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e1Byb2plY3RzSW5mb1syXS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGltYWdlPXtQcm9qZWN0c0luZm9bMl0uaW1hZ2V9XHJcbiAgICAgICAgICBsaW5rPXtQcm9qZWN0c0luZm9bMl0ubGlua31cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFByb2plY3RcclxuICAgICAgICAgIG5hbWU9e1Byb2plY3RzSW5mb1swXS5uYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e1Byb2plY3RzSW5mb1swXS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGltYWdlPXtQcm9qZWN0c0luZm9bMF0uaW1hZ2V9XHJcbiAgICAgICAgICBuZXdQcm9qZWN0PXt0cnVlfVxyXG4gICAgICAgICAgbGluaz17UHJvamVjdHNJbmZvWzBdLmxpbmt9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInB5LTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtY2VudGVyIGZvbnQtYm9sZCBmb250LXNlcmlmIGxnOmJvcmRlci14LTIgYm9yZGVyLUJvcmRlciB4czpweC04IGgtZnVsbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWZsdWlkLTl4bCBzbTp0ZXh0LTR4bFwiPlJlY2VudCBQcm9qZWN0czwvaDE+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCB4czpsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZyB4czp0ZXh0LXhsIFwiPlxyXG4gICAgICAgICAgSGVyZSBhcmUgc29tZSBwcm9qZWN0cyB0aGF0IEkgaGF2ZSB3b3JrZWQgb24uIENsaWNrIG9uIHRoZSBwcm9qZWN0IHRvXHJcbiAgICAgICAgICBzZWUuXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyB4czp0ZXh0LXhsIHRleHQtVGVydGlhcnlcIj5cclxuICAgICAgICAgIOKGkCBEcmFnIG1lIGxlZnQgYW5kIHJpZ2h0IOKGklxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgbmFtZT17UHJvamVjdHNJbmZvWzFdLm5hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17UHJvamVjdHNJbmZvWzFdLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaW1hZ2U9e1Byb2plY3RzSW5mb1sxXS5pbWFnZX1cclxuICAgICAgICAgIGxpbms9e1Byb2plY3RzSW5mb1sxXS5saW5rfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgbmFtZT17UHJvamVjdHNJbmZvWzNdLm5hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17UHJvamVjdHNJbmZvWzNdLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaW1hZ2U9e1Byb2plY3RzSW5mb1szXS5pbWFnZX1cclxuICAgICAgICAgIGxpbms9e1Byb2plY3RzSW5mb1szXS5saW5rfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNCYW5uZXI7XHJcblxyXG4vKlxyXG5cclxuICBcclxuaC03MiBtZDpcclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvamVjdEltYWdlMSIsIlByb2plY3RJbWFnZTIiLCJQcm9qZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQcm9qZWN0c0luZm8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImxpbmsiLCJQcm9qZWN0c0Jhbm5lciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJzaW11bGF0ZVRvdWNoIiwiaW5pdGlhbFNsaWRlIiwiYnJlYWtwb2ludHMiLCJjbGFzc05hbWUiLCJuZXdQcm9qZWN0IiwiaDEiLCJoMiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectsBanner/ProjectsBanner.tsx\n"));

/***/ })

});