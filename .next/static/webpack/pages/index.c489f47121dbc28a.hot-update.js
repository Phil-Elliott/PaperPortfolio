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

/***/ "./assets/images/Portfolio.png":
/*!*************************************!*\
  !*** ./assets/images/Portfolio.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/Portfolio.2ff8b802.png\",\"height\":892,\"width\":1921,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPortfolio.2ff8b802.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":4});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL1BvcnRmb2xpby5wbmcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsdU1BQXVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9pbWFnZXMvUG9ydGZvbGlvLnBuZz9hMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9Qb3J0Zm9saW8uMmZmOGI4MDIucG5nXCIsXCJoZWlnaHRcIjo4OTIsXCJ3aWR0aFwiOjE5MjEsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGUG9ydGZvbGlvLjJmZjhiODAyLnBuZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjo0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/images/Portfolio.png\n"));

/***/ }),

/***/ "./components/ProjectsBanner/ProjectsBanner.tsx":
/*!******************************************************!*\
  !*** ./components/ProjectsBanner/ProjectsBanner.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_PM_Dashboard_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/PM-Dashboard.png */ \"./assets/images/PM-Dashboard.png\");\n/* harmony import */ var _assets_images_News_Home_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/News-Home.png */ \"./assets/images/News-Home.png\");\n/* harmony import */ var _assets_images_BlogHome_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/BlogHome.png */ \"./assets/images/BlogHome.png\");\n/* harmony import */ var _assets_images_Portfolio_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/Portfolio.png */ \"./assets/images/Portfolio.png\");\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Project/Project */ \"./components/ProjectsBanner/Project/Project.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/swiper-bundle.css */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst ProjectsInfo = [\n    {\n        name: \"Project Management APP\",\n        description: \"This is a project management app that is inspired by Trello's interface and functionality.\",\n        image: _assets_images_PM_Dashboard_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        link: \"https://timely-lollipop-f90b7b.netlify.app/\"\n    },\n    {\n        name: \"Personal Blog\",\n        description: \"A blog built with Next.js and Sanity.io\",\n        image: _assets_images_BlogHome_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        link: \"https://www.philelliottblog.com/\"\n    },\n    {\n        name: \"News Website\",\n        description: \"Draws inspiration from the BBC News website in terms of design and functionality.\",\n        image: _assets_images_News_Home_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        link: \"https://pedantic-bhabha-23f3dd.netlify.app/\"\n    },\n    {\n        name: \"This Portfolio\",\n        description: \"I am always working on new projects, so check back soon to see what I have been up to!\",\n        image: _assets_images_Portfolio_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        link: \"/\"\n    }\n];\nconst ProjectsBanner = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {\n        spaceBetween: 50,\n        slidesPerView: 3,\n        simulateTouch: true,\n        initialSlide: 1,\n        // onSlideChange={() => console.log(\"slide change\")}\n        // onSwiper={(swiper) => console.log(swiper)}\n        breakpoints: {\n            300: {\n                slidesPerView: 1,\n                initialSlide: 2\n            },\n            984: {\n                slidesPerView: 2,\n                spaceBetween: 30,\n                initialSlide: 2\n            },\n            1400: {\n                slidesPerView: 3\n            }\n        },\n        className: \"my-6 border-Border items-center justify-between h-72 sm:h-60 cursor-grab active:cursor-grabbing select-none\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: ProjectsInfo[2].name,\n                    description: ProjectsInfo[2].description,\n                    image: ProjectsInfo[2].image,\n                    link: ProjectsInfo[2].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: ProjectsInfo[0].name,\n                    description: ProjectsInfo[0].description,\n                    image: ProjectsInfo[0].image,\n                    newProject: true,\n                    link: ProjectsInfo[0].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                className: \"border-Border border-t-2 lg:border-t-0 py-4 flex flex-col items-center justify-between text-center font-bold font-serif lg:border-x-2 border-Border xs:px-8 h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-fluid-9xl sm:text-4xl pt-3 lg:pt-0\",\n                        children: \"Recent Projects\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"leading-relaxed xs:leading-relaxed text-lg xs:text-xl\",\n                        children: \"Here are some projects that I have worked on. Click on the project to see.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg xs:text-xl text-Tertiary\",\n                        children: \"← Drag left and right →\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: ProjectsInfo[1].name,\n                    description: ProjectsInfo[1].description,\n                    image: ProjectsInfo[1].image,\n                    link: ProjectsInfo[1].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Project_Project__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: ProjectsInfo[3].name,\n                    description: ProjectsInfo[3].description,\n                    image: ProjectsInfo[3].image,\n                    link: ProjectsInfo[3].link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\ProjectsBanner\\\\ProjectsBanner.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectsBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBanner); /*\r\n\r\n  \r\nh-72 md:\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ProjectsBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzQmFubmVyL1Byb2plY3RzQmFubmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDdUM7QUFDSDtBQUNEO0FBQ0M7QUFDdEI7QUFDVztBQUNqQjtBQUVsQyxNQUFNUSxlQUFlO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPVix1RUFBYUE7UUFDcEJXLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPUixtRUFBYUE7UUFDcEJTLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPVCxvRUFBYUE7UUFDcEJVLE1BQU07SUFDUjtJQUNBO1FBQ0VILE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPUCxvRUFBYUE7UUFDcEJRLE1BQU07SUFDUjtDQUNEO0FBRUQsTUFBTUMsaUJBQWlCLElBQU07SUFDM0IscUJBQ0UsOERBQUNQLGdEQUFNQTtRQUNMUSxjQUFjO1FBQ2RDLGVBQWU7UUFDZkMsZUFBZSxJQUFJO1FBQ25CQyxjQUFjO1FBQ2Qsb0RBQW9EO1FBQ3BELDZDQUE2QztRQUM3Q0MsYUFBYTtZQUNYLEtBQUs7Z0JBQ0hILGVBQWU7Z0JBQ2ZFLGNBQWM7WUFDaEI7WUFDQSxLQUFLO2dCQUNIRixlQUFlO2dCQUNmRCxjQUFjO2dCQUNkRyxjQUFjO1lBQ2hCO1lBQ0EsTUFBTTtnQkFDSkYsZUFBZTtZQUNqQjtRQUNGO1FBQ0FJLFdBQVU7OzBCQUVWLDhEQUFDWixxREFBV0E7MEJBQ1YsNEVBQUNGLHdEQUFPQTtvQkFDTkksTUFBTUQsWUFBWSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtvQkFDMUJDLGFBQWFGLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVc7b0JBQ3hDQyxPQUFPSCxZQUFZLENBQUMsRUFBRSxDQUFDRyxLQUFLO29CQUM1QkMsTUFBTUosWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDTCxxREFBV0E7MEJBQ1YsNEVBQUNGLHdEQUFPQTtvQkFDTkksTUFBTUQsWUFBWSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtvQkFDMUJDLGFBQWFGLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVc7b0JBQ3hDQyxPQUFPSCxZQUFZLENBQUMsRUFBRSxDQUFDRyxLQUFLO29CQUM1QlMsWUFBWSxJQUFJO29CQUNoQlIsTUFBTUosWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDTCxxREFBV0E7Z0JBQUNZLFdBQVU7O2tDQUNyQiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTBDOzs7Ozs7a0NBR3hELDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBd0Q7Ozs7OztrQ0FJdEUsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFtQzs7Ozs7Ozs7Ozs7OzBCQUluRCw4REFBQ1oscURBQVdBOzBCQUNWLDRFQUFDRix3REFBT0E7b0JBQ05JLE1BQU1ELFlBQVksQ0FBQyxFQUFFLENBQUNDLElBQUk7b0JBQzFCQyxhQUFhRixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXO29CQUN4Q0MsT0FBT0gsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csS0FBSztvQkFDNUJDLE1BQU1KLFlBQVksQ0FBQyxFQUFFLENBQUNJLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ0wscURBQVdBOzBCQUNWLDRFQUFDRix3REFBT0E7b0JBQ05JLE1BQU1ELFlBQVksQ0FBQyxFQUFFLENBQUNDLElBQUk7b0JBQzFCQyxhQUFhRixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXO29CQUN4Q0MsT0FBT0gsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csS0FBSztvQkFDNUJDLE1BQU1KLFlBQVksQ0FBQyxFQUFFLENBQUNJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0tBeEVNQztBQTBFTiwrREFBZUEsY0FBY0EsRUFBQyxDQUU5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzQmFubmVyL1Byb2plY3RzQmFubmVyLnRzeD8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2plY3RJbWFnZTEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvUE0tRGFzaGJvYXJkLnBuZ1wiO1xyXG5pbXBvcnQgUHJvamVjdEltYWdlMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9OZXdzLUhvbWUucG5nXCI7XHJcbmltcG9ydCBQcm9qZWN0SW1hZ2UzIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0Jsb2dIb21lLnBuZ1wiO1xyXG5pbXBvcnQgUHJvamVjdEltYWdlNCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Qb3J0Zm9saW8ucG5nXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzSW5mbyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlByb2plY3QgTWFuYWdlbWVudCBBUFBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgaXMgYSBwcm9qZWN0IG1hbmFnZW1lbnQgYXBwIHRoYXQgaXMgaW5zcGlyZWQgYnkgVHJlbGxvJ3MgaW50ZXJmYWNlIGFuZCBmdW5jdGlvbmFsaXR5LlwiLFxyXG4gICAgaW1hZ2U6IFByb2plY3RJbWFnZTEsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdGltZWx5LWxvbGxpcG9wLWY5MGI3Yi5uZXRsaWZ5LmFwcC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGVyc29uYWwgQmxvZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBibG9nIGJ1aWx0IHdpdGggTmV4dC5qcyBhbmQgU2FuaXR5LmlvXCIsXHJcbiAgICBpbWFnZTogUHJvamVjdEltYWdlMyxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cucGhpbGVsbGlvdHRibG9nLmNvbS9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTmV3cyBXZWJzaXRlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJEcmF3cyBpbnNwaXJhdGlvbiBmcm9tIHRoZSBCQkMgTmV3cyB3ZWJzaXRlIGluIHRlcm1zIG9mIGRlc2lnbiBhbmQgZnVuY3Rpb25hbGl0eS5cIixcclxuICAgIGltYWdlOiBQcm9qZWN0SW1hZ2UyLFxyXG4gICAgbGluazogXCJodHRwczovL3BlZGFudGljLWJoYWJoYS0yM2YzZGQubmV0bGlmeS5hcHAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlRoaXMgUG9ydGZvbGlvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIGFtIGFsd2F5cyB3b3JraW5nIG9uIG5ldyBwcm9qZWN0cywgc28gY2hlY2sgYmFjayBzb29uIHRvIHNlZSB3aGF0IEkgaGF2ZSBiZWVuIHVwIHRvIVwiLFxyXG4gICAgaW1hZ2U6IFByb2plY3RJbWFnZTQsXHJcbiAgICBsaW5rOiBcIi9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJvamVjdHNCYW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZXJcclxuICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgc2xpZGVzUGVyVmlldz17M31cclxuICAgICAgc2ltdWxhdGVUb3VjaD17dHJ1ZX1cclxuICAgICAgaW5pdGlhbFNsaWRlPXsxfVxyXG4gICAgICAvLyBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZyhcInNsaWRlIGNoYW5nZVwiKX1cclxuICAgICAgLy8gb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XHJcbiAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgMzAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgaW5pdGlhbFNsaWRlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTg0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgIGluaXRpYWxTbGlkZTogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwibXktNiBib3JkZXItQm9yZGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC03MiBzbTpoLTYwIGN1cnNvci1ncmFiIGFjdGl2ZTpjdXJzb3ItZ3JhYmJpbmcgc2VsZWN0LW5vbmVcIlxyXG4gICAgPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFByb2plY3RcclxuICAgICAgICAgIG5hbWU9e1Byb2plY3RzSW5mb1syXS5uYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e1Byb2plY3RzSW5mb1syXS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGltYWdlPXtQcm9qZWN0c0luZm9bMl0uaW1hZ2V9XHJcbiAgICAgICAgICBsaW5rPXtQcm9qZWN0c0luZm9bMl0ubGlua31cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFByb2plY3RcclxuICAgICAgICAgIG5hbWU9e1Byb2plY3RzSW5mb1swXS5uYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e1Byb2plY3RzSW5mb1swXS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGltYWdlPXtQcm9qZWN0c0luZm9bMF0uaW1hZ2V9XHJcbiAgICAgICAgICBuZXdQcm9qZWN0PXt0cnVlfVxyXG4gICAgICAgICAgbGluaz17UHJvamVjdHNJbmZvWzBdLmxpbmt9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImJvcmRlci1Cb3JkZXIgYm9yZGVyLXQtMiBsZzpib3JkZXItdC0wIHB5LTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtY2VudGVyIGZvbnQtYm9sZCBmb250LXNlcmlmIGxnOmJvcmRlci14LTIgYm9yZGVyLUJvcmRlciB4czpweC04IGgtZnVsbFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWZsdWlkLTl4bCBzbTp0ZXh0LTR4bCBwdC0zIGxnOnB0LTBcIj5cclxuICAgICAgICAgIFJlY2VudCBQcm9qZWN0c1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCB4czpsZWFkaW5nLXJlbGF4ZWQgdGV4dC1sZyB4czp0ZXh0LXhsXCI+XHJcbiAgICAgICAgICBIZXJlIGFyZSBzb21lIHByb2plY3RzIHRoYXQgSSBoYXZlIHdvcmtlZCBvbi4gQ2xpY2sgb24gdGhlIHByb2plY3QgdG9cclxuICAgICAgICAgIHNlZS5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIHhzOnRleHQteGwgdGV4dC1UZXJ0aWFyeVwiPlxyXG4gICAgICAgICAg4oaQIERyYWcgbGVmdCBhbmQgcmlnaHQg4oaSXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICBuYW1lPXtQcm9qZWN0c0luZm9bMV0ubmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtQcm9qZWN0c0luZm9bMV0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBpbWFnZT17UHJvamVjdHNJbmZvWzFdLmltYWdlfVxyXG4gICAgICAgICAgbGluaz17UHJvamVjdHNJbmZvWzFdLmxpbmt9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxQcm9qZWN0XHJcbiAgICAgICAgICBuYW1lPXtQcm9qZWN0c0luZm9bM10ubmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtQcm9qZWN0c0luZm9bM10uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBpbWFnZT17UHJvamVjdHNJbmZvWzNdLmltYWdlfVxyXG4gICAgICAgICAgbGluaz17UHJvamVjdHNJbmZvWzNdLmxpbmt9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgIDwvU3dpcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0Jhbm5lcjtcclxuXHJcbi8qXHJcblxyXG4gIFxyXG5oLTcyIG1kOlxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9qZWN0SW1hZ2UxIiwiUHJvamVjdEltYWdlMiIsIlByb2plY3RJbWFnZTMiLCJQcm9qZWN0SW1hZ2U0IiwiUHJvamVjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiUHJvamVjdHNJbmZvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJsaW5rIiwiUHJvamVjdHNCYW5uZXIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3Iiwic2ltdWxhdGVUb3VjaCIsImluaXRpYWxTbGlkZSIsImJyZWFrcG9pbnRzIiwiY2xhc3NOYW1lIiwibmV3UHJvamVjdCIsImgxIiwiaDIiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectsBanner/ProjectsBanner.tsx\n"));

/***/ })

});