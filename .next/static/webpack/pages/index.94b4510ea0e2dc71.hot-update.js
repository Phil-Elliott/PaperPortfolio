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

/***/ "./components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @motionone/utils */ \"./node_modules/@motionone/utils/dist/index.es.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ParallaxText(param) {\n    let { children , baseVelocity =100  } = param;\n    _s();\n    const baseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);\n    const { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    const scrollVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useVelocity)(scrollY);\n    const smoothVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollVelocity, {\n        damping: 50,\n        stiffness: 400\n    });\n    const velocityFactor = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(smoothVelocity, [\n        0,\n        1000\n    ], [\n        0,\n        5\n    ], {\n        clamp: false\n    });\n    /**\r\n   * This is a magic wrapping for the length of the text - you\r\n   * have to replace for wrapping that works for you or dynamically\r\n   * calculate\r\n   */ const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(baseX, (v)=>\"\".concat((0,_motionone_utils__WEBPACK_IMPORTED_MODULE_3__.wrap)(-20, -45, v), \"%\"));\n    const directionFactor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimationFrame)((t, delta)=>{\n        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);\n        /**\r\n     * This is what changes the direction of the scroll once we\r\n     * switch scrolling directions.\r\n     */ if (velocityFactor.get() < 0) {\n            directionFactor.current = -1;\n        } else if (velocityFactor.get() > 0) {\n            directionFactor.current = 1;\n        }\n        moveBy += directionFactor.current * moveBy * velocityFactor.get();\n        baseX.set(baseX.get() + moveBy);\n    });\n    /**\r\n   * The number of times to repeat the child text should be dynamically calculated\r\n   * based on the size of the text and viewport. Likewise, the x motion value is\r\n   * currently wrapped between -20 and -45% - this 25% is derived from the fact\r\n   * we have four children (100% / 4). This would also want deriving from the\r\n   * dynamically generated number of children.\r\n   */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"parallax\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                x\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(ParallaxText, \"vXPtw7zOnTipFF1aeUa9IWqP1xA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useVelocity,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimationFrame\n    ];\n});\n_c = ParallaxText;\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative border-b-2 lg2:border-Secondary lg2:pb-6 flex items-center gap-12 w-[300vw]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ParallaxText, {\n                    baseVelocity: -1,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"uppercase text-4xl font-bold hidden lg2:flex items-center tracking-widest \",\n                        children: [\n                            \"Let's set up an interview\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                // className=\"text-Primary bg-Secondary rounded-sm ml-3 mr-5 p-1 hover:bg-Tertiary duration-500 px-2 \"\n                                // className=\"flex items-center text-Primary bg-Secondary rounded-sm ml-3 mr-5 p-1 hover:bg-Tertiary duration-500 px-2 py-1\"\n                                \"aria-label\": \"Email\",\n                                href: \"mailto:PhillipPElliott@gmail.com\",\n                                children: \"EMAIL ME\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg2:pt-6 gap-6 lg2:gap-0 flex flex-col lg2:flex-row justify-between text-md xs:text-lg sm:text-xl font-bold uppercase items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\",\n                        children: \"Phillip Elliott\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-0 xs:gap-6 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                \"aria-label\": \"LinkedIn\",\n                                href: \"https://www.linkedin.com/in/phil-p-elliott/\",\n                                className: \"hover:text-Tertiary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"LinkedIN\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsDot, {\n                                className: \"text-3xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"hover:text-Tertiary\",\n                                \"aria-label\": \"Github\",\n                                href: \"https://github.com/Phil-Elliott\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsDot, {\n                                className: \"text-3xl lg2:hidden flex\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"hover:text-Tertiary flex lg2:hidden\",\n                                \"aria-label\": \"Email\",\n                                href: \"mailto:PhillipPElliott@gmail.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"EMAIL\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ParallaxText\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBU2Y7QUFDaUI7QUFDRDtBQU92QyxTQUFTVyxhQUFhLEtBQStDLEVBQUU7UUFBakQsRUFBRUMsU0FBUSxFQUFFQyxjQUFlLElBQUcsRUFBaUIsR0FBL0M7O0lBQ3BCLE1BQU1DLFFBQVFSLDZEQUFjQSxDQUFDO0lBQzdCLE1BQU0sRUFBRVMsUUFBTyxFQUFFLEdBQUdaLHdEQUFTQTtJQUM3QixNQUFNYSxpQkFBaUJULDBEQUFXQSxDQUFDUTtJQUNuQyxNQUFNRSxpQkFBaUJiLHdEQUFTQSxDQUFDWSxnQkFBZ0I7UUFDL0NFLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0EsTUFBTUMsaUJBQWlCZiwyREFBWUEsQ0FBQ1ksZ0JBQWdCO1FBQUM7UUFBRztLQUFLLEVBQUU7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUNyRUksT0FBTyxLQUFLO0lBQ2Q7SUFFQTtJQU9BLE1BQU1HLGtCQUFrQnZCLE9BQWU7SUFDdkNPLGtCQUFrQixDQUFDaUIsR0FBR0MsUUFBVTtRQUM5QixJQUFJQztRQUVKO1lBS0VILGdCQUFnQkksNkNBQUFBLENBQU8sR0FBRztvRUFDakJSLGFBQWVTO1lBQ3hCTCxnQkFBZ0JJLE9BQU8sR0FBRztRQUM1QixDQUFDO1FBRURELFVBQVVILGdCQUFnQkksT0FBTyxHQUFHRCxTQUFTUDtRQUU3Q04sTUFBTWdCLEdBQUcsQ0FBQ2hCLE1BQU1lLEdBQUcsS0FBS0Y7SUFDMUI7SUFFQTtRQVFPSyxXQUFVO2tCQUNiLHNCQUFDOUI7O2dCQUFvQm9CO1lBQUU7Ozs7d0JBQ2RWO3dCQUFTOzs7Ozs7Ozs7O3dCQUNBOzs7Ozs7OzhCQUNoQjs7d0JBQU9BO3dCQUFTOzs7Ozs7OzhCQUNoQjs7d0JBQU9BO3dCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0F2RFNEOztRQUNPTDtRQUNNSDtRQUNHSTtRQUNBSDtRQUlBQztRQVNiQTtRQUdWRzs7O0tBcEJPRztBQXlEVDtJQUNFLHFCQUNFLFFBQUNvQjtRQUFJQzs7OzhEQUNFQTs7K0RBQ1duQjs7b0VBQ1JtQjs7OztpQkFHQTtzRkFDQTtnQ0FDQU07O2dHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1QLFFBQUNQO2dCQUFJQyxXQUFVOztrQ0FDYjt3QkFBSUEsV0FBVTtrQ0FBRzs7Ozs7Ozs7OzBDQUVmLFFBQUNLOztnQ0FFQ0UsRUFBQUEsNkRBQUs7Z0NBQ0xQOzBDQUVBOzs7Ozs7Ozs7Ozs7MENBRUYsUUFBQ3RCO2dDQUFNc0IsV0FBVTs7Ozs7OztnQ0FFZkEsV0FBVTtnQ0FDVk0sY0FBVztnQ0FDWEMsTUFBSzswQ0FFTDs7Ozs7Ozs7Ozs7OzBDQUVGLFFBQUM3QjtnQ0FBTXNCLFdBQVU7Ozs7Ozs7Z0NBRWZBLFdBQVU7Z0NBQ1ZNLGNBQVc7Z0NBQ1hDLE1BQUs7MENBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aLENBQUM7TUFoRHVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Pzk0MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIG1vdGlvbixcclxuICB1c2VTY3JvbGwsXHJcbiAgdXNlU3ByaW5nLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VNb3Rpb25WYWx1ZSxcclxuICB1c2VWZWxvY2l0eSxcclxuICB1c2VBbmltYXRpb25GcmFtZSxcclxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSBcIkBtb3Rpb25vbmUvdXRpbHNcIjtcclxuaW1wb3J0IHsgQnNEb3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmludGVyZmFjZSBQYXJhbGxheFByb3BzIHtcclxuICBjaGlsZHJlbjogYW55O1xyXG4gIGJhc2VWZWxvY2l0eTogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJhbGxheFRleHQoeyBjaGlsZHJlbiwgYmFzZVZlbG9jaXR5ID0gMTAwIH06IFBhcmFsbGF4UHJvcHMpIHtcclxuICBjb25zdCBiYXNlWCA9IHVzZU1vdGlvblZhbHVlKDApO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlU2Nyb2xsKCk7XHJcbiAgY29uc3Qgc2Nyb2xsVmVsb2NpdHkgPSB1c2VWZWxvY2l0eShzY3JvbGxZKTtcclxuICBjb25zdCBzbW9vdGhWZWxvY2l0eSA9IHVzZVNwcmluZyhzY3JvbGxWZWxvY2l0eSwge1xyXG4gICAgZGFtcGluZzogNTAsXHJcbiAgICBzdGlmZm5lc3M6IDQwMCxcclxuICB9KTtcclxuICBjb25zdCB2ZWxvY2l0eUZhY3RvciA9IHVzZVRyYW5zZm9ybShzbW9vdGhWZWxvY2l0eSwgWzAsIDEwMDBdLCBbMCwgNV0sIHtcclxuICAgIGNsYW1wOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIG1hZ2ljIHdyYXBwaW5nIGZvciB0aGUgbGVuZ3RoIG9mIHRoZSB0ZXh0IC0geW91XHJcbiAgICogaGF2ZSB0byByZXBsYWNlIGZvciB3cmFwcGluZyB0aGF0IHdvcmtzIGZvciB5b3Ugb3IgZHluYW1pY2FsbHlcclxuICAgKiBjYWxjdWxhdGVcclxuICAgKi9cclxuICBjb25zdCB4ID0gdXNlVHJhbnNmb3JtKGJhc2VYLCAodikgPT4gYCR7d3JhcCgtMjAsIC00NSwgdil9JWApO1xyXG5cclxuICBjb25zdCBkaXJlY3Rpb25GYWN0b3IgPSB1c2VSZWY8bnVtYmVyPigxKTtcclxuICB1c2VBbmltYXRpb25GcmFtZSgodCwgZGVsdGEpID0+IHtcclxuICAgIGxldCBtb3ZlQnkgPSBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCAqIGJhc2VWZWxvY2l0eSAqIChkZWx0YSAvIDEwMDApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyB3aGF0IGNoYW5nZXMgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2Nyb2xsIG9uY2Ugd2VcclxuICAgICAqIHN3aXRjaCBzY3JvbGxpbmcgZGlyZWN0aW9ucy5cclxuICAgICAqL1xyXG4gICAgaWYgKHZlbG9jaXR5RmFjdG9yLmdldCgpIDwgMCkge1xyXG4gICAgICBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCA9IC0xO1xyXG4gICAgfSBlbHNlIGlmICh2ZWxvY2l0eUZhY3Rvci5nZXQoKSA+IDApIHtcclxuICAgICAgZGlyZWN0aW9uRmFjdG9yLmN1cnJlbnQgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVCeSArPSBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCAqIG1vdmVCeSAqIHZlbG9jaXR5RmFjdG9yLmdldCgpO1xyXG5cclxuICAgIGJhc2VYLnNldChiYXNlWC5nZXQoKSArIG1vdmVCeSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBjaGlsZCB0ZXh0IHNob3VsZCBiZSBkeW5hbWljYWxseSBjYWxjdWxhdGVkXHJcbiAgICogYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIHRleHQgYW5kIHZpZXdwb3J0LiBMaWtld2lzZSwgdGhlIHggbW90aW9uIHZhbHVlIGlzXHJcbiAgICogY3VycmVudGx5IHdyYXBwZWQgYmV0d2VlbiAtMjAgYW5kIC00NSUgLSB0aGlzIDI1JSBpcyBkZXJpdmVkIGZyb20gdGhlIGZhY3RcclxuICAgKiB3ZSBoYXZlIGZvdXIgY2hpbGRyZW4gKDEwMCUgLyA0KS4gVGhpcyB3b3VsZCBhbHNvIHdhbnQgZGVyaXZpbmcgZnJvbSB0aGVcclxuICAgKiBkeW5hbWljYWxseSBnZW5lcmF0ZWQgbnVtYmVyIG9mIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4XCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHggfX0+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLWItMiBsZzI6Ym9yZGVyLVNlY29uZGFyeSBsZzI6cGItNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMTIgdy1bMzAwdnddXCI+XHJcbiAgICAgICAgPFBhcmFsbGF4VGV4dCBiYXNlVmVsb2NpdHk9ey0xfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC00eGwgZm9udC1ib2xkIGhpZGRlbiBsZzI6ZmxleCBpdGVtcy1jZW50ZXIgdHJhY2tpbmctd2lkZXN0IFwiPlxyXG4gICAgICAgICAgICBMZXQncyBzZXQgdXAgYW4gaW50ZXJ2aWV3XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwidGV4dC1QcmltYXJ5IGJnLVNlY29uZGFyeSByb3VuZGVkLXNtIG1sLTMgbXItNSBwLTEgaG92ZXI6YmctVGVydGlhcnkgZHVyYXRpb24tNTAwIHB4LTIgXCJcclxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LVByaW1hcnkgYmctU2Vjb25kYXJ5IHJvdW5kZWQtc20gbWwtMyBtci01IHAtMSBob3ZlcjpiZy1UZXJ0aWFyeSBkdXJhdGlvbi01MDAgcHgtMiBweS0xXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86UGhpbGxpcFBFbGxpb3R0QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFTUFJTCBNRVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvUGFyYWxsYXhUZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzI6cHQtNiBnYXAtNiBsZzI6Z2FwLTAgZmxleCBmbGV4LWNvbCBsZzI6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHRleHQtbWQgeHM6dGV4dC1sZyBzbTp0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPlBoaWxsaXAgRWxsaW90dDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0wIHhzOmdhcC02IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmtlZEluXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9waGlsLXAtZWxsaW90dC9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVRlcnRpYXJ5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPkxpbmtlZElOPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxCc0RvdCBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiIC8+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdpdGh1YlwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUGhpbC1FbGxpb3R0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPkdpdGh1YjwvaDI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8QnNEb3QgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGcyOmhpZGRlbiBmbGV4XCIgLz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtVGVydGlhcnkgZmxleCBsZzI6aGlkZGVuXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpQaGlsbGlwUEVsbGlvdHRAZ21haWwuY29tXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPkVNQUlMPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRyYW5zZm9ybSIsInVzZU1vdGlvblZhbHVlIiwidXNlVmVsb2NpdHkiLCJ1c2VBbmltYXRpb25GcmFtZSIsIndyYXAiLCJCc0RvdCIsIlBhcmFsbGF4VGV4dCIsImNoaWxkcmVuIiwiYmFzZVZlbG9jaXR5IiwiYmFzZVgiLCJzY3JvbGxZIiwic2Nyb2xsVmVsb2NpdHkiLCJzbW9vdGhWZWxvY2l0eSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eUZhY3RvciIsImNsYW1wIiwieCIsInYiLCJkaXJlY3Rpb25GYWN0b3IiLCJ0IiwiZGVsdGEiLCJtb3ZlQnkiLCJjdXJyZW50IiwiZ2V0Iiwic2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzcGFuIiwiRm9vdGVyIiwiaDEiLCJhIiwiYXJpYS1sYWJlbCIsImhyZWYiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer/Footer.tsx\n"));

/***/ })

});