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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontPage/FrontPage */ \"./components/FrontPage/FrontPage.tsx\");\n/* harmony import */ var _components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectsBanner/ProjectsBanner */ \"./components/ProjectsBanner/ProjectsBanner.tsx\");\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.tsx\");\n/* harmony import */ var _components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skills/Skills */ \"./components/Skills/Skills.tsx\");\n/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects/Projects */ \"./components/Projects/Projects.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [isNotMobile, setIsNotMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({\n        initial: {\n            rotate: 0,\n            scale: 0.75,\n            y: 0\n        },\n        animate: {\n            rotate: [\n                0,\n                0,\n                360\n            ],\n            scale: [\n                0.75,\n                0.75,\n                1\n            ],\n            y: [\n                0,\n                -300,\n                0\n            ]\n        },\n        transition: {\n            duration: 3\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if ( true && window.innerWidth <= 768) {\n            setIsMobile(true);\n            setIsNotMobile(false);\n            setRender(true);\n        } else {\n            setIsMobile(false);\n            setIsNotMobile(true);\n            setRender(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-Secondary\",\n        children: render === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n            transition: {\n                duration: 3\n            },\n            initial: !isMobile ? \"initial\" : \"\",\n            animate: !isMobile ? \"animate\" : \"\",\n            variants: boxVariants,\n            className: \"bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Portfolio | Phillip Elliott\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Phillip Elliott Portfolio Website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n} /*\r\n\r\nFirst animation \r\n- Slide up \r\n- Spin and zoom in\r\n\r\nAnimate zoom in with project images\r\n\r\nHave everything slide up on scroll\r\n\r\n\r\n\r\n\r\n\r\n3) Add some animations\r\n\r\n4) Make hamburger menu\r\n5) Make responsive content look better\r\n6) Write documentation\r\n\r\n\r\nmake hidden scroll bar\r\n\r\n*/ \n_s(Home, \"qNNlocdbOIahZyxNQV2QclN6pVY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ1M7QUFDZTtBQUNyQjtBQUNIO0FBQ007QUFDTjtBQUVwQjtBQUNVO0FBQ0s7QUFFN0IsU0FBU1csT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFNO1FBQ2xEVSxTQUFTO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxHQUFHO1FBQ0w7UUFDQUMsU0FBUztZQUNQSCxRQUFRO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUk7WUFDbkJDLE9BQU87Z0JBQUM7Z0JBQU07Z0JBQU07YUFBRTtZQUN0QkMsR0FBRztnQkFBQztnQkFBRyxDQUFDO2dCQUFLO2FBQUU7UUFDakI7UUFDQUUsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVBakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksS0FBNkIsSUFBSWtCLE9BQU9DLFVBQVUsSUFBSSxLQUFLO1lBQzdEWCxZQUFZLElBQUk7WUFDaEJGLGVBQWUsS0FBSztZQUNwQkYsVUFBVSxJQUFJO1FBQ2hCLE9BQU87WUFDTEksWUFBWSxLQUFLO1lBQ2pCRixlQUFlLElBQUk7WUFDbkJGLFVBQVUsSUFBSTtRQUNoQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVO2tCQUNabEIsV0FBVyxJQUFJLGtCQUNkLDhEQUFDSixzREFBVTtZQUNUaUIsWUFBWTtnQkFBRUMsVUFBVTtZQUFFO1lBQzFCTixTQUFTLENBQUNKLFdBQVcsWUFBWSxFQUFFO1lBQ25DUSxTQUFTLENBQUNSLFdBQVcsWUFBWSxFQUFFO1lBQ25DZSxVQUFVYjtZQUNWWSxXQUFVOzs4QkFFViw4REFBQ3ZCLGtEQUFJQTs7c0NBQ0gsOERBQUN5QjtzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUM5QixpRUFBTUE7Ozs7O3NDQUNQLDhEQUFDRSxpRkFBY0E7Ozs7O3NDQUNmLDhEQUFDRCx1RUFBU0E7Ozs7O3NDQUNWLDhEQUFDNEI7NEJBQUlPLElBQUc7c0NBQ04sNEVBQUNqQyxtRUFBT0E7Ozs7Ozs7Ozs7c0NBRVYsOERBQUNDLGlFQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLHFFQUFRQTs7Ozs7c0NBQ1QsOERBQUNDLGlFQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQixDQUFDLENBRUQ7O0tBbEV3QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGcm9udFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZVwiO1xyXG5pbXBvcnQgUHJvamVjdHNCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHNCYW5uZXIvUHJvamVjdHNCYW5uZXJcIjtcclxuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRNZS9BYm91dE1lXCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tpbGxzL1NraWxsc1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNOb3RNb2JpbGUsIHNldElzTm90TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm94VmFyaWFudHMsIHNldEJveFZhcmlhbnRzXSA9IHVzZVN0YXRlPGFueT4oe1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICByb3RhdGU6IDAsXHJcbiAgICAgIHNjYWxlOiAwLjc1LFxyXG4gICAgICB5OiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgcm90YXRlOiBbMCwgMCwgMzYwXSxcclxuICAgICAgc2NhbGU6IFswLjc1LCAwLjc1LCAxXSxcclxuICAgICAgeTogWzAsIC0zMDAsIDBdLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDMsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XHJcbiAgICAgIHNldElzTW9iaWxlKHRydWUpO1xyXG4gICAgICBzZXRJc05vdE1vYmlsZShmYWxzZSk7XHJcbiAgICAgIHNldFJlbmRlcih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTW9iaWxlKGZhbHNlKTtcclxuICAgICAgc2V0SXNOb3RNb2JpbGUodHJ1ZSk7XHJcbiAgICAgIHNldFJlbmRlcih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVNlY29uZGFyeVwiPlxyXG4gICAgICB7cmVuZGVyID09PSB0cnVlICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fVxyXG4gICAgICAgICAgaW5pdGlhbD17IWlzTW9iaWxlID8gXCJpbml0aWFsXCIgOiBcIlwifVxyXG4gICAgICAgICAgYW5pbWF0ZT17IWlzTW9iaWxlID8gXCJhbmltYXRlXCIgOiBcIlwifVxyXG4gICAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSB0ZXh0LVNlY29uZGFyeSBzbTpwLTIgZm9udC1zYW5zIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Qb3J0Zm9saW8gfCBQaGlsbGlwIEVsbGlvdHQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlBoaWxsaXAgRWxsaW90dCBQb3J0Zm9saW8gV2Vic2l0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmJvcmRlci0yIGJvcmRlci1TZWNvbmRhcnkgcC00IGxnOnAtNiBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0c0Jhbm5lciAvPlxyXG4gICAgICAgICAgICA8RnJvbnRQYWdlIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxBYm91dE1lIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vKlxyXG5cclxuRmlyc3QgYW5pbWF0aW9uIFxyXG4tIFNsaWRlIHVwIFxyXG4tIFNwaW4gYW5kIHpvb20gaW5cclxuXHJcbkFuaW1hdGUgem9vbSBpbiB3aXRoIHByb2plY3QgaW1hZ2VzXHJcblxyXG5IYXZlIGV2ZXJ5dGhpbmcgc2xpZGUgdXAgb24gc2Nyb2xsXHJcblxyXG5cclxuXHJcblxyXG5cclxuMykgQWRkIHNvbWUgYW5pbWF0aW9uc1xyXG5cclxuNCkgTWFrZSBoYW1idXJnZXIgbWVudVxyXG41KSBNYWtlIHJlc3BvbnNpdmUgY29udGVudCBsb29rIGJldHRlclxyXG42KSBXcml0ZSBkb2N1bWVudGF0aW9uXHJcblxyXG5cclxubWFrZSBoaWRkZW4gc2Nyb2xsIGJhclxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZyb250UGFnZSIsIlByb2plY3RzQmFubmVyIiwiQWJvdXRNZSIsIlNraWxscyIsIlByb2plY3RzIiwiRm9vdGVyIiwiSGVhZCIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInJlbmRlciIsInNldFJlbmRlciIsImlzTm90TW9iaWxlIiwic2V0SXNOb3RNb2JpbGUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiYm94VmFyaWFudHMiLCJzZXRCb3hWYXJpYW50cyIsImluaXRpYWwiLCJyb3RhdGUiLCJzY2FsZSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});