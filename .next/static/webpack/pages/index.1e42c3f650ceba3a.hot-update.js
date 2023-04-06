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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_PM_Vid_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/PM-Vid.gif */ \"./assets/images/PM-Vid.gif\");\n/* harmony import */ var _assets_images_News_Vid_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/News-Vid.gif */ \"./assets/images/News-Vid.gif\");\n/* harmony import */ var _assets_images_Blog_Vid_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Blog-Vid.gif */ \"./assets/images/Blog-Vid.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Blog_Vid_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_PM_Vid_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    5: _assets_images_News_Vid_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(5);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 5) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[300px] sm2:h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"FrontPageImage\",\n                        height: 400,\n                        // width={500}\n                        loading: \"eager\",\n                        priority: true,\n                        className: \" z-10 grayscale h-[250px] w-[320px] sm2:h-[400px] sm2:w-[575px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] h-[186px] ml-12 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded\",\n                        children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            transition: {\n                                duration: 1\n                            },\n                            initial: \"initial\",\n                            animate: \"animate\",\n                            variants: boxVariants,\n                            className: \"bg-Primary h-[4px] sm2:w-[4px] sm2:h-[10px] sm2:w-[10px] rounded-[1px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"h-full w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grayscale bg-Secondary\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: Channels[channelNumber],\n                                    alt: \"Project video\",\n                                    height: 275,\n                                    width: 372,\n                                    className: \"z-0 w-auto h-[170px] sm2:h-[275px] \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute font-bold font-pixel text-Primary text-2xl sm2:text-3xl ml-[180px] sm2:ml-[330px] mt-[-165px] sm2:mt-[-260px] z-30\",\n                                    children: channelNumber\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary h-[195px] w-[220px] sm2:h-[295px] sm2:w-[400px] mr-14 mb-10 sm2:mr-28 sm2:mb-14 absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-1 h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>toggleTv()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[34px] sm2:mt-[54px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"up\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[64px] sm2:mt-[104px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"down\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"leading-relaxed shadow-lg rounded p-2 border-y-2 border-Secondary text-sm xs:text-base text-Primary bg-Secondary font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mr-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Buttons / Top - Power / Middle - Channel Up / Bottom - Channel Down\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv); /*\r\n\r\nCould widen the width of the tv screen to render a better image for the site\r\n\r\n\r\n            className={`absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-14 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded`}\r\n\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsRUFDbEM7d0JBRUQ2QixTQUFTLElBQU1mOzs7Ozs7a0NBRWpCLDhEQUFDYzt3QkFDQ1QsV0FBVyx3SUFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ2QixTQUFTLElBQU1iLGNBQWM7Ozs7OztrQ0FFL0IsOERBQUNZO3dCQUNDVCxXQUFXLHlJQUVWLE9BRENuQixPQUFPLGFBQWEsYUFBYSxFQUNsQzt3QkFFRDZCLFNBQVMsSUFBTWIsY0FBYzs7Ozs7Ozs7Ozs7OzBCQUdqQyw4REFBQ2M7Z0JBQUdYLFdBQVU7O2tDQUNaLDhEQUFDUzt3QkFDQ1QsV0FBWTs7Ozs7O29CQUNaO2tDQUVGLDhEQUFDUzt3QkFDQ1QsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBdElNcEI7S0FBQUE7QUF3SU4sK0RBQWVBLEVBQUVBLEVBQUMsQ0FFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvVHYvVHYudHN4PzExZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgVHZJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90di5wbmdcIjtcclxuaW1wb3J0IFR2U3RhdGljIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1R2U3RhdGljLmdpZlwiO1xyXG5pbXBvcnQgUE0gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUE0tVmlkLmdpZlwiO1xyXG5pbXBvcnQgTmV3cyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9OZXdzLVZpZC5naWZcIjtcclxuaW1wb3J0IEJsb2cgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQmxvZy1WaWQuZ2lmXCI7XHJcblxyXG5jb25zdCBDaGFubmVsczogeyBba2V5OiBudW1iZXJdOiBTdGF0aWNJbWFnZURhdGEgfSA9IHtcclxuICAxOiBUdlN0YXRpYyxcclxuICAyOiBCbG9nLFxyXG4gIDM6IFBNLFxyXG4gIDQ6IFR2U3RhdGljLFxyXG4gIDU6IE5ld3MsXHJcbn07XHJcblxyXG5jb25zdCBUdiA9ICgpID0+IHtcclxuICBjb25zdCBbdHZPbiwgc2V0VHZPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3R2Q2hhbm5lbCwgc2V0VHZDaGFubmVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhbm5lbE51bWJlciwgc2V0Q2hhbm5lbE51bWJlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtib3hWYXJpYW50cywgc2V0Qm94VmFyaWFudHNdID0gdXNlU3RhdGU8YW55Pih7XHJcbiAgICBpbml0aWFsOiB7XHJcbiAgICAgIHNjYWxlWDogMCxcclxuICAgICAgc2NhbGVZOiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgc2NhbGVYOiBbMCwgNCwgMzksIDM5XSxcclxuICAgICAgc2NhbGVZOiBbMCwgMC41LCAwLjUsIDMwXSxcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gdXNlZCB0byB0dXJuIHRoZSB0diBvbiBhbmQgb2ZmXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVHYoKSB7XHJcbiAgICBpZiAodHZPbiA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VHZDaGFubmVsKHRydWUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFR2Q2hhbm5lbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRUdk9uKCF0dk9uKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZWQgdG8gY2hhbmdlIHRoZSBjaGFubmVsXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ2hhbm5lbChkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgaWYgKGNoYW5uZWxOdW1iZXIgPT09IDEpIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKDUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoY2hhbm5lbE51bWJlciAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgIGlmIChjaGFubmVsTnVtYmVyID09PSA1KSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcigxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKGNoYW5uZWxOdW1iZXIgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBsZzM6Ym9yZGVyLWItMCBsZWFkaW5nLWxvb3NlIGxnMzpib3JkZXItci0yIGJvcmRlci1TZWNvbmRhcnkgbGczOnByLTYgY29sLXNwYW4tMiBwYi02IGxnMzpwYi0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzMwMHB4XSBzbTI6aC1bNDAwcHhdIGxnMzpoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWl4LWJsZW5kLW11bHRpcGx5XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e1R2SW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJGcm9udFBhZ2VJbWFnZVwiXHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIC8vIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB6LTEwIGdyYXlzY2FsZSBoLVsyNTBweF0gdy1bMzIwcHhdIHNtMjpoLVs0MDBweF0gc20yOnctWzU3NXB4XVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7dHZPbiA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctU2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSB3LVsyMTBweF0gaC1bMTg2cHhdIG1sLTEyIHB0LTUgc20yOnB0LTAgc20yOmgtWzI4NnB4XSBzbTI6dy1bMzc3cHhdIHNtMjptbC0wIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctU2Vjb25kYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSB3LVsyMTBweF0gbWwtMTQgcHQtNSBzbTI6cHQtMCBzbTI6aC1bMjg2cHhdIHNtMjp3LVs0OTdweF0gc20yOm1sLTMyIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXR2Q2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVs0cHhdIHNtMjp3LVs0cHhdIHNtMjpoLVsxMHB4XSBzbTI6dy1bMTBweF0gcm91bmRlZC1bMXB4XVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17VHZTdGF0aWN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5c2NhbGUgYmctU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtDaGFubmVsc1tjaGFubmVsTnVtYmVyXX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdCB2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjc1fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzcyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B6LTAgdy1hdXRvIGgtWzE3MHB4XSBzbTI6aC1bMjc1cHhdICR7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbHNbY2hhbm5lbE51bWJlcl0gIT09IFR2U3RhdGljICYmIFwicHgtMSBweS0wXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1ib2xkIGZvbnQtcGl4ZWwgdGV4dC1QcmltYXJ5IHRleHQtMnhsIHNtMjp0ZXh0LTN4bCBtbC1bMTgwcHhdIHNtMjptbC1bMzMwcHhdIG10LVstMTY1cHhdIHNtMjptdC1bLTI2MHB4XSB6LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFubmVsTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGgtWzE5NXB4XSB3LVsyMjBweF0gIHNtMjpoLVsyOTVweF0gc20yOnctWzQwMHB4XSBtci0xNCBtYi0xMCBzbTI6bXItMjggc20yOm1iLTE0IGFic29sdXRlXCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC0xIGgtWzVweF0gdy1bNXB4XSBzbTI6aC1bMTBweF0gc20yOnctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR2KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC1bMzRweF0gc20yOm10LVs1NHB4XSBoLVs1cHhdIHctWzVweF0gc20yOmgtWzEwcHhdIHNtMjp3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDaGFubmVsKFwidXBcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzIwOXB4XSBzbTI6bWwtWzM3MnB4XSBtdC1bNjRweF0gc20yOm10LVsxMDRweF0gaC1bNXB4XSB3LVs1cHhdIHNtMjpoLVsxMHB4XSBzbTI6dy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcImRvd25cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgc2hhZG93LWxnIHJvdW5kZWQgcC0yIGJvcmRlci15LTIgYm9yZGVyLVNlY29uZGFyeSB0ZXh0LXNtIHhzOnRleHQtYmFzZSB0ZXh0LVByaW1hcnkgYmctU2Vjb25kYXJ5IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTMgYW5pbWF0ZS1wdWxzZSB6LTIwIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCBiZy1UZXJ0aWFyeWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBCdXR0b25zIC8gVG9wIC0gUG93ZXIgLyBNaWRkbGUgLSBDaGFubmVsIFVwIC8gQm90dG9tIC0gQ2hhbm5lbCBEb3duXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWwtMyBhbmltYXRlLXB1bHNlIHotMjAgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsIGJnLUdyZWVuYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR2O1xyXG5cclxuLypcclxuXHJcbkNvdWxkIHdpZGVuIHRoZSB3aWR0aCBvZiB0aGUgdHYgc2NyZWVuIHRvIHJlbmRlciBhIGJldHRlciBpbWFnZSBmb3IgdGhlIHNpdGVcclxuXHJcblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1TZWNvbmRhcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1QcmltYXJ5IHctWzIxMHB4XSBtbC0xNCBwdC01IHNtMjpwdC0wIHNtMjpoLVsyODZweF0gc20yOnctWzM3N3B4XSBzbTI6bWwtMCBtci0yOCBtYi0xMSByb3VuZGVkYH1cclxuXHJcblxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJJbWFnZSIsIlR2SW1hZ2UiLCJUdlN0YXRpYyIsIlBNIiwiTmV3cyIsIkJsb2ciLCJDaGFubmVscyIsIlR2IiwidHZPbiIsInNldFR2T24iLCJ0dkNoYW5uZWwiLCJzZXRUdkNoYW5uZWwiLCJjaGFubmVsTnVtYmVyIiwic2V0Q2hhbm5lbE51bWJlciIsImJveFZhcmlhbnRzIiwic2V0Qm94VmFyaWFudHMiLCJpbml0aWFsIiwic2NhbGVYIiwic2NhbGVZIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRvZ2dsZVR2Iiwic2V0VGltZW91dCIsImNoYW5nZUNoYW5uZWwiLCJkaXJlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJsb2FkaW5nIiwicHJpb3JpdHkiLCJ2YXJpYW50cyIsIndpZHRoIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});