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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontPage/FrontPage */ \"./components/FrontPage/FrontPage.tsx\");\n/* harmony import */ var _components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectsBanner/ProjectsBanner */ \"./components/ProjectsBanner/ProjectsBanner.tsx\");\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.tsx\");\n/* harmony import */ var _components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skills/Skills */ \"./components/Skills/Skills.tsx\");\n/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects/Projects */ \"./components/Projects/Projects.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({\n        initial: {\n            rotate: 0,\n            scale: 0.75,\n            y: 0\n        },\n        animate: {\n            rotate: [\n                0,\n                0,\n                360\n            ],\n            scale: [\n                0.75,\n                0.75,\n                1\n            ],\n            y: [\n                0,\n                -300,\n                0\n            ]\n        },\n        transition: {\n            duration: 3\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if ( true && window.innerWidth <= 768) {\n            setBoxVariants({});\n        }\n    }, []);\n    // let boxVariants = {};\n    // // const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)\n    // useEffect(() => {\n    // if (typeof window !== \"undefined\" && window.innerWidth >= 768) {\n    //   boxVariants = {\n    //     initial: {\n    //       rotate: 0,\n    //       scale: 0.75,\n    //       y: 0,\n    //     },\n    //     animate: {\n    //       rotate: [0, 0, 360],\n    //       scale: [0.75, 0.75, 1],\n    //       y: [0, -300, 0],\n    //     },\n    //     transition: {\n    //       duration: 3,\n    //     },\n    //   };\n    //   // }\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        console.log(boxVariants);\n    }, [\n        boxVariants\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-Secondary\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n            // initial={{ rotate: 0, scale: 0.75, y: 0 }}\n            // animate={{\n            //   rotate: [0, 0, 360],\n            //   scale: [0.75, 0.75, 1],\n            //   y: [0, -300, 0],\n            // }}\n            // transition={{ duration: 3 }}\n            initial: \"initial\",\n            animate: \"animate\",\n            transition: {\n                duration: 3\n            },\n            variants: boxVariants,\n            className: \"bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Portfolio | Phillip Elliott\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Phillip Elliott Portfolio Website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n} /*\r\n\r\nFirst animation \r\n- Slide up \r\n- Spin and zoom in\r\n\r\nAnimate zoom in with project images\r\n\r\nHave everything slide up on scroll\r\n\r\n\r\n\r\n\r\n\r\n3) Add some animations\r\n\r\n4) Make hamburger menu\r\n5) Make responsive content look better\r\n6) Write documentation\r\n\r\n\r\nmake hidden scroll bar\r\n\r\n*/ \n_s(Home, \"JgDUvO/mD3QIIkeVWPsxCauoQ/A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ1M7QUFDZTtBQUNyQjtBQUNIO0FBQ007QUFDTjtBQUVwQjtBQUNVO0FBQ0s7QUFFN0IsU0FBU1csT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFNO1FBQ2xETSxTQUFTO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxHQUFHO1FBQ0w7UUFDQUMsU0FBUztZQUNQSCxRQUFRO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUk7WUFDbkJDLE9BQU87Z0JBQUM7Z0JBQU07Z0JBQU07YUFBRTtZQUN0QkMsR0FBRztnQkFBQztnQkFBRyxDQUFDO2dCQUFLO2FBQUU7UUFDakI7UUFDQUUsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxLQUE2QixJQUFJYyxPQUFPQyxVQUFVLElBQUksS0FBSztZQUM3RFQsZUFBZSxDQUFDO1FBQ2xCLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCx3QkFBd0I7SUFDeEIsc0dBQXNHO0lBRXRHLG9CQUFvQjtJQUNwQixtRUFBbUU7SUFDbkUsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFFVk4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0IsUUFBUUMsR0FBRyxDQUFDWjtJQUNkLEdBQUc7UUFBQ0E7S0FBWTtJQUVoQixxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3BCLHNEQUFVO1lBQ1QsNkNBQTZDO1lBQzdDLGFBQWE7WUFDYix5QkFBeUI7WUFDekIsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQixLQUFLO1lBQ0wsK0JBQStCO1lBQy9CUSxTQUFRO1lBQ1JJLFNBQVE7WUFDUkMsWUFBWTtnQkFBRUMsVUFBVTtZQUFFO1lBQzFCTyxVQUFVZjtZQUNWYyxXQUFVOzs4QkFFViw4REFBQ3JCLGtEQUFJQTs7c0NBQ0gsOERBQUN1QjtzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUM1QixpRUFBTUE7Ozs7O3NDQUNQLDhEQUFDRSxpRkFBY0E7Ozs7O3NDQUNmLDhEQUFDRCx1RUFBU0E7Ozs7O3NDQUNWLDhEQUFDMEI7NEJBQUlPLElBQUc7c0NBQ04sNEVBQUMvQixtRUFBT0E7Ozs7Ozs7Ozs7c0NBRVYsOERBQUNDLGlFQUFNQTs7Ozs7c0NBQ1AsOERBQUNDLHFFQUFRQTs7Ozs7c0NBQ1QsOERBQUNDLGlFQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQixDQUFDLENBRUQ7O0tBMUZ3QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGcm9udFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZVwiO1xyXG5pbXBvcnQgUHJvamVjdHNCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHNCYW5uZXIvUHJvamVjdHNCYW5uZXJcIjtcclxuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRNZS9BYm91dE1lXCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tpbGxzL1NraWxsc1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2JveFZhcmlhbnRzLCBzZXRCb3hWYXJpYW50c10gPSB1c2VTdGF0ZTxhbnk+KHtcclxuICAgIGluaXRpYWw6IHtcclxuICAgICAgcm90YXRlOiAwLFxyXG4gICAgICBzY2FsZTogMC43NSxcclxuICAgICAgeTogMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHJvdGF0ZTogWzAsIDAsIDM2MF0sXHJcbiAgICAgIHNjYWxlOiBbMC43NSwgMC43NSwgMV0sXHJcbiAgICAgIHk6IFswLCAtMzAwLCAwXSxcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgICBzZXRCb3hWYXJpYW50cyh7fSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBsZXQgYm94VmFyaWFudHMgPSB7fTtcclxuICAvLyAvLyBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4OyAvL0FkZCB0aGUgd2lkdGggeW91IHdhbnQgdG8gY2hlY2sgZm9yIGhlcmUgKG5vdyA3NjhweClcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAvLyAgIGJveFZhcmlhbnRzID0ge1xyXG4gIC8vICAgICBpbml0aWFsOiB7XHJcbiAgLy8gICAgICAgcm90YXRlOiAwLFxyXG4gIC8vICAgICAgIHNjYWxlOiAwLjc1LFxyXG4gIC8vICAgICAgIHk6IDAsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGFuaW1hdGU6IHtcclxuICAvLyAgICAgICByb3RhdGU6IFswLCAwLCAzNjBdLFxyXG4gIC8vICAgICAgIHNjYWxlOiBbMC43NSwgMC43NSwgMV0sXHJcbiAgLy8gICAgICAgeTogWzAsIC0zMDAsIDBdLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgLy8gICAgICAgZHVyYXRpb246IDMsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGJveFZhcmlhbnRzKTtcclxuICB9LCBbYm94VmFyaWFudHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5XCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgLy8gaW5pdGlhbD17eyByb3RhdGU6IDAsIHNjYWxlOiAwLjc1LCB5OiAwIH19XHJcbiAgICAgICAgLy8gYW5pbWF0ZT17e1xyXG4gICAgICAgIC8vICAgcm90YXRlOiBbMCwgMCwgMzYwXSxcclxuICAgICAgICAvLyAgIHNjYWxlOiBbMC43NSwgMC43NSwgMV0sXHJcbiAgICAgICAgLy8gICB5OiBbMCwgLTMwMCwgMF0sXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICAvLyB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAzIH19XHJcbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAzIH19XHJcbiAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgdGV4dC1TZWNvbmRhcnkgc206cC0yIGZvbnQtc2FucyBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+UG9ydGZvbGlvIHwgUGhpbGxpcCBFbGxpb3R0PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJQaGlsbGlwIEVsbGlvdHQgUG9ydGZvbGlvIFdlYnNpdGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHAtNCBsZzpwLTYgbWluLWgtc2NyZWVuIG1pbi13LXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxQcm9qZWN0c0Jhbm5lciAvPlxyXG4gICAgICAgICAgPEZyb250UGFnZSAvPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgIDxBYm91dE1lIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vKlxyXG5cclxuRmlyc3QgYW5pbWF0aW9uIFxyXG4tIFNsaWRlIHVwIFxyXG4tIFNwaW4gYW5kIHpvb20gaW5cclxuXHJcbkFuaW1hdGUgem9vbSBpbiB3aXRoIHByb2plY3QgaW1hZ2VzXHJcblxyXG5IYXZlIGV2ZXJ5dGhpbmcgc2xpZGUgdXAgb24gc2Nyb2xsXHJcblxyXG5cclxuXHJcblxyXG5cclxuMykgQWRkIHNvbWUgYW5pbWF0aW9uc1xyXG5cclxuNCkgTWFrZSBoYW1idXJnZXIgbWVudVxyXG41KSBNYWtlIHJlc3BvbnNpdmUgY29udGVudCBsb29rIGJldHRlclxyXG42KSBXcml0ZSBkb2N1bWVudGF0aW9uXHJcblxyXG5cclxubWFrZSBoaWRkZW4gc2Nyb2xsIGJhclxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZyb250UGFnZSIsIlByb2plY3RzQmFubmVyIiwiQWJvdXRNZSIsIlNraWxscyIsIlByb2plY3RzIiwiRm9vdGVyIiwiSGVhZCIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJib3hWYXJpYW50cyIsInNldEJveFZhcmlhbnRzIiwiaW5pdGlhbCIsInJvdGF0ZSIsInNjYWxlIiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});