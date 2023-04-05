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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Board.gif */ \"./assets/images/Board.gif\");\n/* harmony import */ var _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Board2.gif */ \"./assets/images/Board2.gif\");\n/* harmony import */ var _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Board3.gif */ \"./assets/images/Board3.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    5: _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(5);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 5) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"FrontPageImage\",\n                        height: 400,\n                        // width={500}\n                        sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                        loading: \"eager\",\n                        priority: true,\n                        className: \"object-cover object-center absolute z-10 grayscale\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute \".concat(tvChannel ? \"bg-Primary\" : \"bg-Secondary\", \" flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded\"),\n                        children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            transition: {\n                                duration: 1\n                            },\n                            initial: \"initial\",\n                            animate: \"animate\",\n                            variants: boxVariants,\n                            className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"h-full w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grayscale\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: Channels[channelNumber],\n                                    alt: \"TvStatic\",\n                                    height: 275,\n                                    width: 372,\n                                    className: \"z-0 w-full h-[285px] bg-Secondary \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-30\",\n                                    children: channelNumber\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary h-[295px] w-[400px] mr-28 mb-14\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>toggleTv()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[54px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"up\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[104px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"down\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"bg-Secondary text-lg xs:text-xl text-Tertiary font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mr-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Push the buttons\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv);\nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ0QsOERBQUNVO3dCQUNDVixXQUFXLDhFQUVWLE9BRENuQixPQUFPLGFBQWEsYUFBYSxFQUNsQzt3QkFFRDhCLFNBQVMsSUFBTWhCOzs7Ozs7a0NBRWpCLDhEQUFDZTt3QkFDQ1YsV0FBVyxtRkFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ4QixTQUFTLElBQU1kLGNBQWM7Ozs7OztrQ0FFL0IsOERBQUNhO3dCQUNDVixXQUFXLG9GQUVWLE9BRENuQixPQUFPLGFBQWEsYUFBYSxFQUNsQzt3QkFFRDhCLFNBQVMsSUFBTWQsY0FBYzs7Ozs7Ozs7Ozs7OzBCQUdqQyw4REFBQ2U7Z0JBQUdaLFdBQVU7O2tDQUNaLDhEQUFDVTt3QkFDQ1YsV0FBWTs7Ozs7O29CQUNaO2tDQUVGLDhEQUFDVTt3QkFDQ1YsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J0QjtHQXBKTXBCO0tBQUFBO0FBc0pOLCtEQUFlQSxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzL1R2L1R2LnRzeD8xMWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UsIHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFR2SW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHYucG5nXCI7XHJcbmltcG9ydCBUdlN0YXRpYyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9UdlN0YXRpYy5naWZcIjtcclxuaW1wb3J0IENvZGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY29kZS5qcGdcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkLmdpZlwiO1xyXG5pbXBvcnQgQm9hcmQyIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkMi5naWZcIjtcclxuaW1wb3J0IEJvYXJkMyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZDMuZ2lmXCI7XHJcbmltcG9ydCBCb2FyZDQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQ2LmdpZlwiO1xyXG5cclxuY29uc3QgQ2hhbm5lbHM6IHsgW2tleTogbnVtYmVyXTogU3RhdGljSW1hZ2VEYXRhIH0gPSB7XHJcbiAgMTogVHZTdGF0aWMsXHJcbiAgMjogQm9hcmQzLFxyXG4gIDM6IEJvYXJkLFxyXG4gIDQ6IFR2U3RhdGljLFxyXG4gIDU6IEJvYXJkMixcclxufTtcclxuXHJcbmNvbnN0IFR2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0dk9uLCBzZXRUdk9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdHZDaGFubmVsLCBzZXRUdkNoYW5uZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFubmVsTnVtYmVyLCBzZXRDaGFubmVsTnVtYmVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgY29uc3QgW2JveFZhcmlhbnRzLCBzZXRCb3hWYXJpYW50c10gPSB1c2VTdGF0ZTxhbnk+KHtcclxuICAgIGluaXRpYWw6IHtcclxuICAgICAgc2NhbGVYOiAwLFxyXG4gICAgICBzY2FsZVk6IDAsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICBzY2FsZVg6IFswLCA0LCAzOSwgMzldLFxyXG4gICAgICBzY2FsZVk6IFswLCAwLjUsIDAuNSwgMzBdLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyB1c2VkIHRvIHR1cm4gdGhlIHR2IG9uIGFuZCBvZmZcclxuICBmdW5jdGlvbiB0b2dnbGVUdigpIHtcclxuICAgIGlmICh0dk9uID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUdkNoYW5uZWwodHJ1ZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VHZDaGFubmVsKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldFR2T24oIXR2T24pO1xyXG4gIH1cclxuXHJcbiAgLy8gdXNlZCB0byBjaGFuZ2UgdGhlIGNoYW5uZWxcclxuICBmdW5jdGlvbiBjaGFuZ2VDaGFubmVsKGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBpZiAoY2hhbm5lbE51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoNSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcihjaGFubmVsTnVtYmVyIC0gMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgICAgaWYgKGNoYW5uZWxOdW1iZXIgPT09IDUpIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoY2hhbm5lbE51bWJlciArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIGxnMzpib3JkZXItYi0wIGxlYWRpbmctbG9vc2UgbGczOmJvcmRlci1yLTIgYm9yZGVyLVNlY29uZGFyeSBsZzM6cHItNiBjb2wtc3Bhbi0yIHBiLTYgbGczOnBiLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1bNDAwcHhdIGxnMzpoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWl4LWJsZW5kLW11bHRpcGx5XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e1R2SW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJGcm9udFBhZ2VJbWFnZVwiXHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIC8vIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dyxcclxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXHJcbiAgICAgICAgICAgICAgMzN2d1wiXHJcbiAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGFic29sdXRlIHotMTAgZ3JheXNjYWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0dk9uID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke1xyXG4gICAgICAgICAgICAgIHR2Q2hhbm5lbCA/IFwiYmctUHJpbWFyeVwiIDogXCJiZy1TZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSBoLVsyODZweF0gdy1bMzc3cHhdIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXR2Q2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLVsxcHhdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtUdlN0YXRpY31cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHZTdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3NX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3Mn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXlzY2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Q2hhbm5lbHNbY2hhbm5lbE51bWJlcl19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHotMCB3LWZ1bGwgaC1bMjg1cHhdIGJnLVNlY29uZGFyeSAke1xyXG4gICAgICAgICAgICAgICAgICAgIENoYW5uZWxzW2NoYW5uZWxOdW1iZXJdICE9PSBUdlN0YXRpYyAmJiBcInB4LTEgcHktMFwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtYm9sZCBmb250LXBpeGVsIHRleHQtUHJpbWFyeSB0ZXh0LTN4bCBtbC1bMzMwcHhdIG10LVstMjYwcHhdIHotMzBcIj5cclxuICAgICAgICAgICAgICAgICAge2NoYW5uZWxOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgaC1bMjk1cHhdIHctWzQwMHB4XSBtci0yOCBtYi0xNFwiPjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtMSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUdigpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtWzU0cHhdIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNoYW5uZWwoXCJ1cFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFuaW1hdGUtcHVsc2Ugei0yMCBhYnNvbHV0ZSBtbC1bMzcycHhdIG10LVsxMDRweF0gaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcImRvd25cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgdGV4dC1sZyB4czp0ZXh0LXhsIHRleHQtVGVydGlhcnkgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbXItNSBhbmltYXRlLXB1bHNlIHotMjAgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsIGJnLVRlcnRpYXJ5YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFB1c2ggdGhlIGJ1dHRvbnNcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BtbC01IGFuaW1hdGUtcHVsc2Ugei0yMCBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgYmctR3JlZW5gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTIgZm9udC1ib2xkIGJvcmRlci1TZWNvbmRhcnkgYm9yZGVyLTIgaC0yLzMgdy0xLzQgYmctU2Vjb25kYXJ5IHRleHQtUHJpbWFyeSBzaGFkb3ctbGcgcm91bmRlZFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTQgcGItMiBteC1hdXRvIGZvbnQtYm9sZCB0ZXh0LXhsXCI+VFYgR3VpZGU8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+MSAtIFBNIEFQUDwvcD5cclxuICAgICAgICA8cD4yIC0gTmV3cyBBcHA8L3A+XHJcbiAgICAgICAgPHA+MyAtIEJsb2c8L3A+XHJcbiAgICAgICAgPHA+NCAtIENvbWluZyBTb29uPC9wPlxyXG4gICAgICAgIDxwPjUgLSBDb21pbmcgU29vbjwvcD5cclxuICAgICAgICA8cD42IC0gQ29taW5nIFNvb248L3A+XHJcbiAgICAgICAgPHA+VXNlIGJ0dG5zPC9wPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiSW1hZ2UiLCJUdkltYWdlIiwiVHZTdGF0aWMiLCJCb2FyZCIsIkJvYXJkMiIsIkJvYXJkMyIsIkNoYW5uZWxzIiwiVHYiLCJ0dk9uIiwic2V0VHZPbiIsInR2Q2hhbm5lbCIsInNldFR2Q2hhbm5lbCIsImNoYW5uZWxOdW1iZXIiLCJzZXRDaGFubmVsTnVtYmVyIiwiYm94VmFyaWFudHMiLCJzZXRCb3hWYXJpYW50cyIsImluaXRpYWwiLCJzY2FsZVgiLCJzY2FsZVkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidG9nZ2xlVHYiLCJzZXRUaW1lb3V0IiwiY2hhbmdlQ2hhbm5lbCIsImRpcmVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsInNpemVzIiwibG9hZGluZyIsInByaW9yaXR5IiwidmFyaWFudHMiLCJ3aWR0aCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});