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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontPage/FrontPage */ \"./components/FrontPage/FrontPage.tsx\");\n/* harmony import */ var _components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectsBanner/ProjectsBanner */ \"./components/ProjectsBanner/ProjectsBanner.tsx\");\n/* harmony import */ var _components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutMe/AboutMe */ \"./components/AboutMe/AboutMe.tsx\");\n/* harmony import */ var _components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skills/Skills */ \"./components/Skills/Skills.tsx\");\n/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects/Projects */ \"./components/Projects/Projects.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({\n        initial: {\n            rotate: 0,\n            scale: 0.75,\n            y: 0\n        },\n        animate: {\n            rotate: [\n                0,\n                0,\n                360\n            ],\n            scale: [\n                0.75,\n                0.75,\n                1\n            ],\n            y: [\n                0,\n                -300,\n                0\n            ]\n        },\n        transition: {\n            duration: 3\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if ( true && window.innerWidth >= 768) {\n            setBoxVariants({\n                initial: {\n                    rotate: 0,\n                    scale: 0.75,\n                    y: 0\n                },\n                animate: {\n                    rotate: [\n                        0,\n                        0,\n                        360\n                    ],\n                    scale: [\n                        0.75,\n                        0.75,\n                        1\n                    ],\n                    y: [\n                        0,\n                        -300,\n                        0\n                    ]\n                },\n                transition: {\n                    duration: 3\n                }\n            });\n        } else {\n            setIsMobile(true);\n        }\n    }, []);\n    // let boxVariants = {};\n    // // const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)\n    // useEffect(() => {\n    // if (typeof window !== \"undefined\" && window.innerWidth >= 768) {\n    //   boxVariants = {\n    //     initial: {\n    //       rotate: 0,\n    //       scale: 0.75,\n    //       y: 0,\n    //     },\n    //     animate: {\n    //       rotate: [0, 0, 360],\n    //       scale: [0.75, 0.75, 1],\n    //       y: [0, -300, 0],\n    //     },\n    //     transition: {\n    //       duration: 3,\n    //     },\n    //   };\n    //   // }\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        console.log(isMobile);\n    }, [\n        isMobile\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-Secondary\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n            // initial={{ rotate: 0, scale: 0.75, y: 0 }}\n            // animate={{\n            //   rotate: [0, 0, 360],\n            //   scale: [0.75, 0.75, 1],\n            //   y: [0, -300, 0],\n            // }}\n            // transition={{ duration: 3 }}\n            initial: !isMobile ? \"initial\" : \"\",\n            animate: !isMobile ? \"animate\" : \"\",\n            transition: !isMobile ? {\n                duration: 3\n            } : \"\",\n            variants: boxVariants,\n            className: \"bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Portfolio | Phillip Elliott\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Phillip Elliott Portfolio Website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsBanner_ProjectsBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrontPage_FrontPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills_Skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n} /*\r\n\r\nFirst animation \r\n- Slide up \r\n- Spin and zoom in\r\n\r\nAnimate zoom in with project images\r\n\r\nHave everything slide up on scroll\r\n\r\n\r\n\r\n\r\n\r\n3) Add some animations\r\n\r\n4) Make hamburger menu\r\n5) Make responsive content look better\r\n6) Write documentation\r\n\r\n\r\nmake hidden scroll bar\r\n\r\n*/ \n_s(Home, \"JgDUvO/mD3QIIkeVWPsxCauoQ/A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZyb250UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlXCI7XHJcbmltcG9ydCBQcm9qZWN0c0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c0Jhbm5lci9Qcm9qZWN0c0Jhbm5lclwiO1xyXG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dE1lL0Fib3V0TWVcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzXCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm94VmFyaWFudHMsIHNldEJveFZhcmlhbnRzXSA9IHVzZVN0YXRlPGFueT4oe1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICByb3RhdGU6IDAsXHJcbiAgICAgIHNjYWxlOiAwLjc1LFxyXG4gICAgICB5OiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgcm90YXRlOiBbMCwgMCwgMzYwXSxcclxuICAgICAgc2NhbGU6IFswLjc1LCAwLjc1LCAxXSxcclxuICAgICAgeTogWzAsIC0zMDAsIDBdLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDMsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XHJcbiAgICAgIHNldEJveFZhcmlhbnRzKHtcclxuICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICByb3RhdGU6IDAsXHJcbiAgICAgICAgICBzY2FsZTogMC43NSxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICByb3RhdGU6IFswLCAwLCAzNjBdLFxyXG4gICAgICAgICAgc2NhbGU6IFswLjc1LCAwLjc1LCAxXSxcclxuICAgICAgICAgIHk6IFswLCAtMzAwLCAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBsZXQgYm94VmFyaWFudHMgPSB7fTtcclxuICAvLyAvLyBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4OyAvL0FkZCB0aGUgd2lkdGggeW91IHdhbnQgdG8gY2hlY2sgZm9yIGhlcmUgKG5vdyA3NjhweClcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcclxuICAvLyAgIGJveFZhcmlhbnRzID0ge1xyXG4gIC8vICAgICBpbml0aWFsOiB7XHJcbiAgLy8gICAgICAgcm90YXRlOiAwLFxyXG4gIC8vICAgICAgIHNjYWxlOiAwLjc1LFxyXG4gIC8vICAgICAgIHk6IDAsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGFuaW1hdGU6IHtcclxuICAvLyAgICAgICByb3RhdGU6IFswLCAwLCAzNjBdLFxyXG4gIC8vICAgICAgIHNjYWxlOiBbMC43NSwgMC43NSwgMV0sXHJcbiAgLy8gICAgICAgeTogWzAsIC0zMDAsIDBdLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgLy8gICAgICAgZHVyYXRpb246IDMsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlzTW9iaWxlKTtcclxuICB9LCBbaXNNb2JpbGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5XCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgLy8gaW5pdGlhbD17eyByb3RhdGU6IDAsIHNjYWxlOiAwLjc1LCB5OiAwIH19XHJcbiAgICAgICAgLy8gYW5pbWF0ZT17e1xyXG4gICAgICAgIC8vICAgcm90YXRlOiBbMCwgMCwgMzYwXSxcclxuICAgICAgICAvLyAgIHNjYWxlOiBbMC43NSwgMC43NSwgMV0sXHJcbiAgICAgICAgLy8gICB5OiBbMCwgLTMwMCwgMF0sXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICAvLyB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAzIH19XHJcbiAgICAgICAgaW5pdGlhbD17IWlzTW9iaWxlID8gXCJpbml0aWFsXCIgOiBcIlwifVxyXG4gICAgICAgIGFuaW1hdGU9eyFpc01vYmlsZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1cclxuICAgICAgICB0cmFuc2l0aW9uPXshaXNNb2JpbGUgPyB7IGR1cmF0aW9uOiAzIH0gOiBcIlwifVxyXG4gICAgICAgIHZhcmlhbnRzPXtib3hWYXJpYW50c31cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IHRleHQtU2Vjb25kYXJ5IHNtOnAtMiBmb250LXNhbnMgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlBvcnRmb2xpbyB8IFBoaWxsaXAgRWxsaW90dDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiUGhpbGxpcCBFbGxpb3R0IFBvcnRmb2xpbyBXZWJzaXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Ym9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSBwLTQgbGc6cC02IG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8UHJvamVjdHNCYW5uZXIgLz5cclxuICAgICAgICAgIDxGcm9udFBhZ2UgLz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICA8QWJvdXRNZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLypcclxuXHJcbkZpcnN0IGFuaW1hdGlvbiBcclxuLSBTbGlkZSB1cCBcclxuLSBTcGluIGFuZCB6b29tIGluXHJcblxyXG5BbmltYXRlIHpvb20gaW4gd2l0aCBwcm9qZWN0IGltYWdlc1xyXG5cclxuSGF2ZSBldmVyeXRoaW5nIHNsaWRlIHVwIG9uIHNjcm9sbFxyXG5cclxuXHJcblxyXG5cclxuXHJcbjMpIEFkZCBzb21lIGFuaW1hdGlvbnNcclxuXHJcbjQpIE1ha2UgaGFtYnVyZ2VyIG1lbnVcclxuNSkgTWFrZSByZXNwb25zaXZlIGNvbnRlbnQgbG9vayBiZXR0ZXJcclxuNikgV3JpdGUgZG9jdW1lbnRhdGlvblxyXG5cclxuXHJcbm1ha2UgaGlkZGVuIHNjcm9sbCBiYXJcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGcm9udFBhZ2UiLCJQcm9qZWN0c0Jhbm5lciIsIkFib3V0TWUiLCJTa2lsbHMiLCJQcm9qZWN0cyIsIkZvb3RlciIsIkhlYWQiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiYm94VmFyaWFudHMiLCJzZXRCb3hWYXJpYW50cyIsImluaXRpYWwiLCJyb3RhdGUiLCJzY2FsZSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});