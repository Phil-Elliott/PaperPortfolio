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

/***/ "./components/Skills/Tv/Tv.tsx":
/*!*************************************!*\
  !*** ./components/Skills/Tv/Tv.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Board.gif */ \"./assets/images/Board.gif\");\n/* harmony import */ var _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Board2.gif */ \"./assets/images/Board2.gif\");\n/* harmony import */ var _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Board3.gif */ \"./assets/images/Board3.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    5: _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(5);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 5) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[300px] sm2:h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"FrontPageImage\",\n                        height: 400,\n                        // width={500}\n                        loading: \"eager\",\n                        priority: true,\n                        className: \" z-0 grayscale h-[250px] w-[320px] sm2:h-[400px] sm2:w-[575px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-14 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded\",\n                        children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            transition: {\n                                duration: 1\n                            },\n                            initial: \"initial\",\n                            animate: \"animate\",\n                            variants: boxVariants,\n                            className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"h-full w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grayscale bg-Secondary\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: Channels[channelNumber],\n                                    alt: \"Project video\",\n                                    height: 275,\n                                    width: 372,\n                                    className: \"z-0 w-full h-[170px] sm2:h-[275px] \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute font-bold font-pixel text-Primary text-2xl sm2:text-3xl ml-[180px] sm2:ml-[330px] mt-[-165px] sm2:mt-[-260px] z-30\",\n                                    children: channelNumber\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary h-[195px] w-[220px] sm2:h-[295px] sm2:w-[400px] mr-14 mb-10 sm2:mr-28 sm2:mb-14 absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-1 h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>toggleTv()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[34px] sm2:mt-[54px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"up\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[64px] sm2:mt-[104px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"down\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"leading-relaxed shadow-lg rounded p-2 border-y-2 border-Secondary text-sm xs:text-base text-Primary bg-Secondary font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mr-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Buttons / Top - Power / Middle - Channel Up / Bottom - Channel Down\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv); /*\r\n\r\nCould widen the width of the tv screen to render a better image for the site\r\n\r\n\r\n            className={`absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-14 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded`}\r\n\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsRUFDbEM7d0JBRUQ2QixTQUFTLElBQU1mOzs7Ozs7a0NBRWpCLDhEQUFDYzt3QkFDQ1QsV0FBVyx3SUFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ2QixTQUFTLElBQU1iLGNBQWM7Ozs7OztrQ0FFL0IsOERBQUNZO3dCQUNDVCxXQUFXLHlJQUVWLE9BRENuQixPQUFPLGFBQWEsYUFBYSxFQUNsQzt3QkFFRDZCLFNBQVMsSUFBTWIsY0FBYzs7Ozs7Ozs7Ozs7OzBCQUdqQyw4REFBQ2M7Z0JBQUdYLFdBQVU7O2tDQUNaLDhEQUFDUzt3QkFDQ1QsV0FBWTs7Ozs7O29CQUNaO2tDQUVGLDhEQUFDUzt3QkFDQ1QsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBdElNcEI7S0FBQUE7QUF3SU4sK0RBQWVBLEVBQUVBLEVBQUMsQ0FFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvVHYvVHYudHN4PzExZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgVHZJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90di5wbmdcIjtcclxuaW1wb3J0IFR2U3RhdGljIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1R2U3RhdGljLmdpZlwiO1xyXG5pbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2RlLmpwZ1wiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQuZ2lmXCI7XHJcbmltcG9ydCBCb2FyZDIgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQyLmdpZlwiO1xyXG5pbXBvcnQgQm9hcmQzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkMy5naWZcIjtcclxuaW1wb3J0IEJvYXJkNCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZDYuZ2lmXCI7XHJcblxyXG5jb25zdCBDaGFubmVsczogeyBba2V5OiBudW1iZXJdOiBTdGF0aWNJbWFnZURhdGEgfSA9IHtcclxuICAxOiBUdlN0YXRpYyxcclxuICAyOiBCb2FyZDMsXHJcbiAgMzogQm9hcmQsXHJcbiAgNDogVHZTdGF0aWMsXHJcbiAgNTogQm9hcmQyLFxyXG59O1xyXG5cclxuY29uc3QgVHYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3R2T24sIHNldFR2T25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0dkNoYW5uZWwsIHNldFR2Q2hhbm5lbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5uZWxOdW1iZXIsIHNldENoYW5uZWxOdW1iZXJdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbYm94VmFyaWFudHMsIHNldEJveFZhcmlhbnRzXSA9IHVzZVN0YXRlPGFueT4oe1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICBzY2FsZVg6IDAsXHJcbiAgICAgIHNjYWxlWTogMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHNjYWxlWDogWzAsIDQsIDM5LCAzOV0sXHJcbiAgICAgIHNjYWxlWTogWzAsIDAuNSwgMC41LCAzMF0sXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHVzZWQgdG8gdHVybiB0aGUgdHYgb24gYW5kIG9mZlxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVR2KCkge1xyXG4gICAgaWYgKHR2T24gPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFR2Q2hhbm5lbCh0cnVlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUdkNoYW5uZWwoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VHZPbighdHZPbik7XHJcbiAgfVxyXG5cclxuICAvLyB1c2VkIHRvIGNoYW5nZSB0aGUgY2hhbm5lbFxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNoYW5uZWwoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIGlmIChjaGFubmVsTnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcig1KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKGNoYW5uZWxOdW1iZXIgLSAxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgICBpZiAoY2hhbm5lbE51bWJlciA9PT0gNSkge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcihjaGFubmVsTnVtYmVyICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgbGczOmJvcmRlci1iLTAgbGVhZGluZy1sb29zZSBsZzM6Ym9yZGVyLXItMiBib3JkZXItU2Vjb25kYXJ5IGxnMzpwci02IGNvbC1zcGFuLTIgcGItNiBsZzM6cGItMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVszMDBweF0gc20yOmgtWzQwMHB4XSBsZzM6aC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1peC1ibGVuZC1tdWx0aXBseVwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtUdkltYWdlfVxyXG4gICAgICAgICAgYWx0PVwiRnJvbnRQYWdlSW1hZ2VcIlxyXG4gICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAvLyB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgei0wIGdyYXlzY2FsZSBoLVsyNTBweF0gdy1bMzIwcHhdIHNtMjpoLVs0MDBweF0gc20yOnctWzU3NXB4XVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7dHZPbiA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctU2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSB3LVsyMTBweF0gbWwtMTQgcHQtNSBzbTI6cHQtMCBzbTI6aC1bMjg2cHhdIHNtMjp3LVszNzdweF0gc20yOm1sLTAgbXItMjggbWItMTEgcm91bmRlZGB9XHJcblxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1TZWNvbmRhcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1QcmltYXJ5IHctWzIxMHB4XSBtbC0xNCBwdC01IHNtMjpwdC0wIHNtMjpoLVsyODZweF0gc20yOnctWzQ5N3B4XSBzbTI6bWwtMCBtci0yOCBtYi0xMSByb3VuZGVkYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyF0dkNoYW5uZWwgPyAoXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtib3hWYXJpYW50c31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1bMXB4XVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17VHZTdGF0aWN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5c2NhbGUgYmctU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtDaGFubmVsc1tjaGFubmVsTnVtYmVyXX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdCB2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjc1fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzcyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B6LTAgdy1mdWxsIGgtWzE3MHB4XSBzbTI6aC1bMjc1cHhdICR7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbHNbY2hhbm5lbE51bWJlcl0gIT09IFR2U3RhdGljICYmIFwicHgtMSBweS0wXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1ib2xkIGZvbnQtcGl4ZWwgdGV4dC1QcmltYXJ5IHRleHQtMnhsIHNtMjp0ZXh0LTN4bCBtbC1bMTgwcHhdIHNtMjptbC1bMzMwcHhdIG10LVstMTY1cHhdIHNtMjptdC1bLTI2MHB4XSB6LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFubmVsTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGgtWzE5NXB4XSB3LVsyMjBweF0gIHNtMjpoLVsyOTVweF0gc20yOnctWzQwMHB4XSBtci0xNCBtYi0xMCBzbTI6bXItMjggc20yOm1iLTE0IGFic29sdXRlXCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC0xIGgtWzVweF0gdy1bNXB4XSBzbTI6aC1bMTBweF0gc20yOnctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR2KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC1bMzRweF0gc20yOm10LVs1NHB4XSBoLVs1cHhdIHctWzVweF0gc20yOmgtWzEwcHhdIHNtMjp3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDaGFubmVsKFwidXBcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC1bNjRweF0gc20yOm10LVsxMDRweF0gaC1bNXB4XSB3LVs1cHhdIHNtMjpoLVsxMHB4XSBzbTI6dy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcImRvd25cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWxnIHJvdW5kZWQgcC0yIGJvcmRlci15LTIgYm9yZGVyLVNlY29uZGFyeSB0ZXh0LXNtIHhzOnRleHQtYmFzZSB0ZXh0LVByaW1hcnkgYmctU2Vjb25kYXJ5IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTMgYW5pbWF0ZS1wdWxzZSB6LTIwIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCBiZy1UZXJ0aWFyeWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBCdXR0b25zIC8gVG9wIC0gUG93ZXIgLyBNaWRkbGUgLSBDaGFubmVsIFVwIC8gQm90dG9tIC0gQ2hhbm5lbCBEb3duXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBhbmltYXRlLXB1bHNlIHotMjAgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsIGJnLUdyZWVuYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR2O1xyXG5cclxuLypcclxuXHJcbkNvdWxkIHdpZGVuIHRoZSB3aWR0aCBvZiB0aGUgdHYgc2NyZWVuIHRvIHJlbmRlciBhIGJldHRlciBpbWFnZSBmb3IgdGhlIHNpdGVcclxuXHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1TZWNvbmRhcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1QcmltYXJ5IHctWzIxMHB4XSBtbC0xNCBwdC01IHNtMjpwdC0wIHNtMjpoLVsyODZweF0gc20yOnctWzM3N3B4XSBzbTI6bWwtMCBtci0yOCBtYi0xMSByb3VuZGVkYH1cclxuXHJcblxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJJbWFnZSIsIlR2SW1hZ2UiLCJUdlN0YXRpYyIsIkJvYXJkIiwiQm9hcmQyIiwiQm9hcmQzIiwiQ2hhbm5lbHMiLCJUdiIsInR2T24iLCJzZXRUdk9uIiwidHZDaGFubmVsIiwic2V0VHZDaGFubmVsIiwiY2hhbm5lbE51bWJlciIsInNldENoYW5uZWxOdW1iZXIiLCJib3hWYXJpYW50cyIsInNldEJveFZhcmlhbnRzIiwiaW5pdGlhbCIsInNjYWxlWCIsInNjYWxlWSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0b2dnbGVUdiIsInNldFRpbWVvdXQiLCJjaGFuZ2VDaGFubmVsIiwiZGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwibG9hZGluZyIsInByaW9yaXR5IiwidmFyaWFudHMiLCJ3aWR0aCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});