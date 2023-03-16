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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontPage/FrontPage */ \"./components/FrontPage/FrontPage.tsx\");\n/* harmony import */ var _components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectsBanner/ProjectsBanner */ \"./components/ProjectsBanner/ProjectsBanner.tsx\");\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.tsx\");\n/* harmony import */ var _components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skills/Skills */ \"./components/Skills/Skills.tsx\");\n/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects/Projects */ \"./components/Projects/Projects.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({\n        initial: {\n            rotate: 0,\n            scale: 0.75,\n            y: 0\n        },\n        animate: {\n            rotate: [\n                0,\n                0,\n                360\n            ],\n            scale: [\n                0.75,\n                0.75,\n                1\n            ],\n            y: [\n                0,\n                -300,\n                0\n            ]\n        },\n        transition: {\n            duration: 3\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if ( true && window.innerWidth <= 768) {\n            setIsMobile(true);\n            setRender(true);\n        } else {\n            setIsMobile(false);\n            setRender(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-Secondary\",\n        children: render === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n            transition: {\n                duration: 3\n            },\n            initial: !isMobile ? \"initial\" : \"\",\n            animate: !isMobile ? \"animate\" : \"\",\n            variants: boxVariants,\n            className: \"bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Portfolio | Phillip Elliott\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Phillip Elliott Portfolio Website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n} /*\r\n\r\n\r\n\r\nAnimate zoom in with project images\r\n\r\nHave everything slide up on scroll\r\n\r\n\r\n\r\n\r\n\r\n3) Add some animations\r\n\r\n4) Make hamburger menu\r\n5) Make responsive content look better\r\n6) Write documentation\r\n\r\n\r\nmake hidden scroll bar\r\n\r\n*/ \n_s(Home, \"rdd2PqMs3L471zEhwpSQ7mncAoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ1M7QUFDZTtBQUNyQjtBQUNIO0FBQ007QUFDTjtBQUVwQjtBQUNVO0FBQ0s7QUFFN0IsU0FBU1csT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFNO1FBQ2xEUSxTQUFTO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxHQUFHO1FBQ0w7UUFDQUMsU0FBUztZQUNQSCxRQUFRO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUk7WUFDbkJDLE9BQU87Z0JBQUM7Z0JBQU07Z0JBQU07YUFBRTtZQUN0QkMsR0FBRztnQkFBQztnQkFBRyxDQUFDO2dCQUFLO2FBQUU7UUFDakI7UUFDQUUsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxLQUE2QixJQUFJZ0IsT0FBT0MsVUFBVSxJQUFJLEtBQUs7WUFDN0RYLFlBQVksSUFBSTtZQUNoQkYsVUFBVSxJQUFJO1FBQ2hCLE9BQU87WUFDTEUsWUFBWSxLQUFLO1lBQ2pCRixVQUFVLElBQUk7UUFDaEIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNaaEIsV0FBVyxJQUFJLGtCQUNkLDhEQUFDSixzREFBVTtZQUNUZSxZQUFZO2dCQUFFQyxVQUFVO1lBQUU7WUFDMUJOLFNBQVMsQ0FBQ0osV0FBVyxZQUFZLEVBQUU7WUFDbkNRLFNBQVMsQ0FBQ1IsV0FBVyxZQUFZLEVBQUU7WUFDbkNlLFVBQVViO1lBQ1ZZLFdBQVU7OzhCQUVWLDhEQUFDckIsa0RBQUlBOztzQ0FDSCw4REFBQ3VCO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQzVCLGlFQUFNQTs7Ozs7c0NBQ1AsOERBQUNFLGlGQUFjQTs7Ozs7c0NBQ2YsOERBQUNELHVFQUFTQTs7Ozs7c0NBQ1YsOERBQUMwQjs0QkFBSU8sSUFBRztzQ0FDTiw0RUFBQy9CLG1FQUFPQTs7Ozs7Ozs7OztzQ0FFViw4REFBQ0MsaUVBQU1BOzs7OztzQ0FDUCw4REFBQ0MscUVBQVFBOzs7OztzQ0FDVCw4REFBQ0MsaUVBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CLENBQUMsQ0FFRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZyb250UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlXCI7XHJcbmltcG9ydCBQcm9qZWN0c0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c0Jhbm5lci9Qcm9qZWN0c0Jhbm5lclwiO1xyXG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dE1lL0Fib3V0TWVcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib3hWYXJpYW50cywgc2V0Qm94VmFyaWFudHNdID0gdXNlU3RhdGU8YW55Pih7XHJcbiAgICBpbml0aWFsOiB7XHJcbiAgICAgIHJvdGF0ZTogMCxcclxuICAgICAgc2NhbGU6IDAuNzUsXHJcbiAgICAgIHk6IDAsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICByb3RhdGU6IFswLCAwLCAzNjBdLFxyXG4gICAgICBzY2FsZTogWzAuNzUsIDAuNzUsIDFdLFxyXG4gICAgICB5OiBbMCwgLTMwMCwgMF0sXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XHJcbiAgICAgIHNldFJlbmRlcih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTW9iaWxlKGZhbHNlKTtcclxuICAgICAgc2V0UmVuZGVyKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5XCI+XHJcbiAgICAgIHtyZW5kZXIgPT09IHRydWUgJiYgKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAzIH19XHJcbiAgICAgICAgICBpbml0aWFsPXshaXNNb2JpbGUgPyBcImluaXRpYWxcIiA6IFwiXCJ9XHJcbiAgICAgICAgICBhbmltYXRlPXshaXNNb2JpbGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICB2YXJpYW50cz17Ym94VmFyaWFudHN9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IHRleHQtU2Vjb25kYXJ5IHNtOnAtMiBmb250LXNhbnMgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlBvcnRmb2xpbyB8IFBoaWxsaXAgRWxsaW90dDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiUGhpbGxpcCBFbGxpb3R0IFBvcnRmb2xpbyBXZWJzaXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Ym9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSBwLTQgbGc6cC02IG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFByb2plY3RzQmFubmVyIC8+XHJcbiAgICAgICAgICAgIDxGcm9udFBhZ2UgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgICAgPEFib3V0TWUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8qXHJcblxyXG5cclxuXHJcbkFuaW1hdGUgem9vbSBpbiB3aXRoIHByb2plY3QgaW1hZ2VzXHJcblxyXG5IYXZlIGV2ZXJ5dGhpbmcgc2xpZGUgdXAgb24gc2Nyb2xsXHJcblxyXG5cclxuXHJcblxyXG5cclxuMykgQWRkIHNvbWUgYW5pbWF0aW9uc1xyXG5cclxuNCkgTWFrZSBoYW1idXJnZXIgbWVudVxyXG41KSBNYWtlIHJlc3BvbnNpdmUgY29udGVudCBsb29rIGJldHRlclxyXG42KSBXcml0ZSBkb2N1bWVudGF0aW9uXHJcblxyXG5cclxubWFrZSBoaWRkZW4gc2Nyb2xsIGJhclxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZyb250UGFnZSIsIlByb2plY3RzQmFubmVyIiwiQWJvdXRNZSIsIlNraWxscyIsIlByb2plY3RzIiwiRm9vdGVyIiwiSGVhZCIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInJlbmRlciIsInNldFJlbmRlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJib3hWYXJpYW50cyIsInNldEJveFZhcmlhbnRzIiwiaW5pdGlhbCIsInJvdGF0ZSIsInNjYWxlIiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});