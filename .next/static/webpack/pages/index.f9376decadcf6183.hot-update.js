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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @motionone/utils */ \"./node_modules/@motionone/utils/dist/index.es.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ParallaxText(param) {\n    let { children , baseVelocity =100  } = param;\n    _s();\n    const baseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);\n    const { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    const scrollVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useVelocity)(scrollY);\n    const smoothVelocity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollVelocity, {\n        damping: 50,\n        stiffness: 400\n    });\n    const velocityFactor = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(smoothVelocity, [\n        0,\n        1000\n    ], [\n        0,\n        5\n    ], {\n        clamp: false\n    });\n    /**\r\n   * This is a magic wrapping for the length of the text - you\r\n   * have to replace for wrapping that works for you or dynamically\r\n   * calculate\r\n   */ const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(baseX, (v)=>\"\".concat((0,_motionone_utils__WEBPACK_IMPORTED_MODULE_3__.wrap)(-20, -45, v), \"%\"));\n    const directionFactor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimationFrame)((t, delta)=>{\n        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);\n        /**\r\n     * This is what changes the direction of the scroll once we\r\n     * switch scrolling directions.\r\n     */ if (velocityFactor.get() < 0) {\n            directionFactor.current = -1;\n        } else if (velocityFactor.get() > 0) {\n            directionFactor.current = 1;\n        }\n        moveBy += directionFactor.current * moveBy * velocityFactor.get();\n        baseX.set(baseX.get() + moveBy);\n    });\n    /**\r\n   * The number of times to repeat the child text should be dynamically calculated\r\n   * based on the size of the text and viewport. Likewise, the x motion value is\r\n   * currently wrapped between -20 and -45% - this 25% is derived from the fact\r\n   * we have four children (100% / 4). This would also want deriving from the\r\n   * dynamically generated number of children.\r\n   */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"parallax\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"uppercase text-4xl font-bold hidden lg2:flex items-center tracking-widest \",\n            style: {\n                x\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(ParallaxText, \"vXPtw7zOnTipFF1aeUa9IWqP1xA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useVelocity,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimationFrame\n    ];\n});\n_c = ParallaxText;\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative border-b-2 lg2:border-Secondary lg2:pb-6 flex items-center gap-12 w-[300vw]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ParallaxText, {\n                    baseVelocity: -1,\n                    children: [\n                        \"Let's set up an interview\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-Primary bg-Secondary rounded-sm my-3 p-1 hover:bg-Tertiary duration-500 px-2 \",\n                            \"aria-label\": \"Email\",\n                            href: \"mailto:PhillipPElliott@gmail.com\",\n                            children: \"EMAIL ME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg2:pt-6 gap-6 lg2:gap-0 flex flex-col lg2:flex-row justify-between text-md xs:text-lg sm:text-xl font-bold uppercase items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\",\n                        children: \"Phillip Elliott\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-0 xs:gap-6 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                \"aria-label\": \"LinkedIn\",\n                                href: \"https://www.linkedin.com/in/phil-p-elliott/\",\n                                className: \"hover:text-Tertiary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"LinkedIN\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsDot, {\n                                className: \"text-3xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"hover:text-Tertiary\",\n                                \"aria-label\": \"Github\",\n                                href: \"https://github.com/Phil-Elliott\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsDot, {\n                                className: \"text-3xl lg2:hidden flex\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"hover:text-Tertiary flex lg2:hidden\",\n                                \"aria-label\": \"Email\",\n                                href: \"mailto:PhillipPElliott@gmail.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"EMAIL\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Footer\\\\Footer.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"ParallaxText\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBU2Y7QUFDaUI7QUFDRDtBQU92QyxTQUFTVyxhQUFhLEtBQStDLEVBQUU7UUFBakQsRUFBRUMsU0FBUSxFQUFFQyxjQUFlLElBQUcsRUFBaUIsR0FBL0M7O0lBQ3BCLE1BQU1DLFFBQVFSLDZEQUFjQSxDQUFDO0lBQzdCLE1BQU0sRUFBRVMsUUFBTyxFQUFFLEdBQUdaLHdEQUFTQTtJQUM3QixNQUFNYSxpQkFBaUJULDBEQUFXQSxDQUFDUTtJQUNuQyxNQUFNRSxpQkFBaUJiLHdEQUFTQSxDQUFDWSxnQkFBZ0I7UUFDL0NFLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBQ0EsTUFBTUMsaUJBQWlCZiwyREFBWUEsQ0FBQ1ksZ0JBQWdCO1FBQUM7UUFBRztLQUFLLEVBQUU7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUNyRUksT0FBTyxLQUFLO0lBQ2Q7SUFFQTtJQU9BLE1BQU1HLGtCQUFrQnZCLE9BQWU7SUFDdkNPLGtCQUFrQixDQUFDaUIsR0FBR0MsUUFBVTtRQUM5QixJQUFJQztRQUVKO1lBS0VILGdCQUFnQkksNkNBQUFBLENBQU8sR0FBRztvRUFDakJSLGFBQWVTO1lBQ3hCTCxnQkFBZ0JJLE9BQU8sR0FBRztRQUM1QixDQUFDO1FBRURELFVBQVVILGdCQUFnQkksT0FBTyxHQUFHRCxTQUFTUDtRQUU3Q04sTUFBTWdCLEdBQUcsQ0FBQ2hCLE1BQU1lLEdBQUcsS0FBS0Y7SUFDMUI7SUFFQTtRQVFPSyxXQUFVO2tCQUNiLHNCQUFDOUI7O1lBRUMrQixPQUFPO2dCQUFFWDs7OzhCQUVULFFBQUNZOzt3QkFBTXRCO3dCQUFTOzs7Ozs7Ozs7O3dCQUNBOzs7Ozs7OzhCQUNoQjs7d0JBQU9BO3dCQUFTOzs7Ozs7OzhCQUNoQjs7d0JBQU9BO3dCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0ExRFNEOztRQUNPTDtRQUNNSDtRQUNHSTtRQUNBSDtRQUlBQztRQVNiQTtRQUdWRzs7O0tBcEJPRztBQTREVDtJQUNFLHFCQUNFLFFBQUNvQjtRQUFJQzs7OzhEQUNFQTs7K0RBQ1duQjs7b0VBQWtCOzs7O2FBSzVCeUIsTUFBSzs0RkFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsUUFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNiO3dCQUFJQSxXQUFVO2tDQUFHOzs7Ozs7Ozs7MENBRWYsUUFBQ0k7O2dDQUVDRSxFQUFBQSw2REFBSztnQ0FDTE47MENBRUE7Ozs7Ozs7Ozs7OzswQ0FFRixRQUFDdEI7Z0NBQU1zQixXQUFVOzs7Ozs7O2dDQUVmQSxXQUFVO2dDQUNWSyxjQUFXO2dDQUNYQyxNQUFLOzBDQUVMOzs7Ozs7Ozs7Ozs7MENBRUYsUUFBQzVCO2dDQUFNc0IsV0FBVTs7Ozs7OztnQ0FFZkEsV0FBVTtnQ0FDVkssY0FBVztnQ0FDWEMsTUFBSzswQ0FFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztNQTdDdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3g/OTQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVNjcm9sbCxcclxuICB1c2VTcHJpbmcsXHJcbiAgdXNlVHJhbnNmb3JtLFxyXG4gIHVzZU1vdGlvblZhbHVlLFxyXG4gIHVzZVZlbG9jaXR5LFxyXG4gIHVzZUFuaW1hdGlvbkZyYW1lLFxyXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHdyYXAgfSBmcm9tIFwiQG1vdGlvbm9uZS91dGlsc1wiO1xyXG5pbXBvcnQgeyBCc0RvdCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuaW50ZXJmYWNlIFBhcmFsbGF4UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBhbnk7XHJcbiAgYmFzZVZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcmFsbGF4VGV4dCh7IGNoaWxkcmVuLCBiYXNlVmVsb2NpdHkgPSAxMDAgfTogUGFyYWxsYXhQcm9wcykge1xyXG4gIGNvbnN0IGJhc2VYID0gdXNlTW90aW9uVmFsdWUoMCk7XHJcbiAgY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VTY3JvbGwoKTtcclxuICBjb25zdCBzY3JvbGxWZWxvY2l0eSA9IHVzZVZlbG9jaXR5KHNjcm9sbFkpO1xyXG4gIGNvbnN0IHNtb290aFZlbG9jaXR5ID0gdXNlU3ByaW5nKHNjcm9sbFZlbG9jaXR5LCB7XHJcbiAgICBkYW1waW5nOiA1MCxcclxuICAgIHN0aWZmbmVzczogNDAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHZlbG9jaXR5RmFjdG9yID0gdXNlVHJhbnNmb3JtKHNtb290aFZlbG9jaXR5LCBbMCwgMTAwMF0sIFswLCA1XSwge1xyXG4gICAgY2xhbXA6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgbWFnaWMgd3JhcHBpbmcgZm9yIHRoZSBsZW5ndGggb2YgdGhlIHRleHQgLSB5b3VcclxuICAgKiBoYXZlIHRvIHJlcGxhY2UgZm9yIHdyYXBwaW5nIHRoYXQgd29ya3MgZm9yIHlvdSBvciBkeW5hbWljYWxseVxyXG4gICAqIGNhbGN1bGF0ZVxyXG4gICAqL1xyXG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oYmFzZVgsICh2KSA9PiBgJHt3cmFwKC0yMCwgLTQ1LCB2KX0lYCk7XHJcblxyXG4gIGNvbnN0IGRpcmVjdGlvbkZhY3RvciA9IHVzZVJlZjxudW1iZXI+KDEpO1xyXG4gIHVzZUFuaW1hdGlvbkZyYW1lKCh0LCBkZWx0YSkgPT4ge1xyXG4gICAgbGV0IG1vdmVCeSA9IGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ICogYmFzZVZlbG9jaXR5ICogKGRlbHRhIC8gMTAwMCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIHdoYXQgY2hhbmdlcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGwgb25jZSB3ZVxyXG4gICAgICogc3dpdGNoIHNjcm9sbGluZyBkaXJlY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBpZiAodmVsb2NpdHlGYWN0b3IuZ2V0KCkgPCAwKSB7XHJcbiAgICAgIGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHZlbG9jaXR5RmFjdG9yLmdldCgpID4gMCkge1xyXG4gICAgICBkaXJlY3Rpb25GYWN0b3IuY3VycmVudCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUJ5ICs9IGRpcmVjdGlvbkZhY3Rvci5jdXJyZW50ICogbW92ZUJ5ICogdmVsb2NpdHlGYWN0b3IuZ2V0KCk7XHJcblxyXG4gICAgYmFzZVguc2V0KGJhc2VYLmdldCgpICsgbW92ZUJ5KTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIGNoaWxkIHRleHQgc2hvdWxkIGJlIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZWRcclxuICAgKiBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgdGV4dCBhbmQgdmlld3BvcnQuIExpa2V3aXNlLCB0aGUgeCBtb3Rpb24gdmFsdWUgaXNcclxuICAgKiBjdXJyZW50bHkgd3JhcHBlZCBiZXR3ZWVuIC0yMCBhbmQgLTQ1JSAtIHRoaXMgMjUlIGlzIGRlcml2ZWQgZnJvbSB0aGUgZmFjdFxyXG4gICAqIHdlIGhhdmUgZm91ciBjaGlsZHJlbiAoMTAwJSAvIDQpLiBUaGlzIHdvdWxkIGFsc28gd2FudCBkZXJpdmluZyBmcm9tIHRoZVxyXG4gICAqIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBudW1iZXIgb2YgY2hpbGRyZW4uXHJcbiAgICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXhcIj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC00eGwgZm9udC1ib2xkIGhpZGRlbiBsZzI6ZmxleCBpdGVtcy1jZW50ZXIgdHJhY2tpbmctd2lkZXN0IFwiXHJcbiAgICAgICAgc3R5bGU9e3sgeCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufSA8L3NwYW4+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLWItMiBsZzI6Ym9yZGVyLVNlY29uZGFyeSBsZzI6cGItNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMTIgICB3LVszMDB2d11cIj5cclxuICAgICAgICA8UGFyYWxsYXhUZXh0IGJhc2VWZWxvY2l0eT17LTF9PlxyXG4gICAgICAgICAgTGV0J3Mgc2V0IHVwIGFuIGludGVydmlld1xyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1QcmltYXJ5IGJnLVNlY29uZGFyeSByb3VuZGVkLXNtIG15LTMgcC0xIGhvdmVyOmJnLVRlcnRpYXJ5IGR1cmF0aW9uLTUwMCBweC0yIFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86UGhpbGxpcFBFbGxpb3R0QGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVNQUlMIE1FXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9QYXJhbGxheFRleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnMjpwdC02IGdhcC02IGxnMjpnYXAtMCBmbGV4IGZsZXgtY29sIGxnMjpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdGV4dC1tZCB4czp0ZXh0LWxnIHNtOnRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+UGhpbGxpcCBFbGxpb3R0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTAgeHM6Z2FwLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BoaWwtcC1lbGxpb3R0L1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtVGVydGlhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDI+TGlua2VkSU48L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEJzRG90IGNsYXNzTmFtZT1cInRleHQtM3hsXCIgLz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtVGVydGlhcnlcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2l0aHViXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QaGlsLUVsbGlvdHRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDI+R2l0aHViPC9oMj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxCc0RvdCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzI6aGlkZGVuIGZsZXhcIiAvPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1UZXJ0aWFyeSBmbGV4IGxnMjpoaWRkZW5cIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBocmVmPVwibWFpbHRvOlBoaWxsaXBQRWxsaW90dEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDI+RU1BSUw8L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwidXNlVHJhbnNmb3JtIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VWZWxvY2l0eSIsInVzZUFuaW1hdGlvbkZyYW1lIiwid3JhcCIsIkJzRG90IiwiUGFyYWxsYXhUZXh0IiwiY2hpbGRyZW4iLCJiYXNlVmVsb2NpdHkiLCJiYXNlWCIsInNjcm9sbFkiLCJzY3JvbGxWZWxvY2l0eSIsInNtb290aFZlbG9jaXR5IiwiZGFtcGluZyIsInN0aWZmbmVzcyIsInZlbG9jaXR5RmFjdG9yIiwiY2xhbXAiLCJ4IiwidiIsImRpcmVjdGlvbkZhY3RvciIsInQiLCJkZWx0YSIsIm1vdmVCeSIsImN1cnJlbnQiLCJnZXQiLCJzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNwYW4iLCJGb290ZXIiLCJhIiwiYXJpYS1sYWJlbCIsImhyZWYiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/Footer.tsx\n"));

/***/ })

});