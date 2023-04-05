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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Board.gif */ \"./assets/images/Board.gif\");\n/* harmony import */ var _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Board2.gif */ \"./assets/images/Board2.gif\");\n/* harmony import */ var _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Board3.gif */ \"./assets/images/Board3.gif\");\n/* harmony import */ var _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/Board6.gif */ \"./assets/images/Board6.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    5: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    6: _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    7: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    8: _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    9: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(9);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 9) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full h-full flex justify-center items-center mix-blend-multiply\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"FrontPageImage\",\n                    height: 400,\n                    // width={0}\n                    sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                    loading: \"eager\",\n                    priority: true,\n                    className: \"object-cover object-center absolute z-10 grayscale\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute \".concat(tvChannel ? \"bg-Primary\" : \"bg-Secondary\", \" flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded\"),\n                    children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                        transition: {\n                            duration: 1\n                        },\n                        initial: \"initial\",\n                        animate: \"animate\",\n                        variants: boxVariants,\n                        className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"TvStatic\",\n                            height: 275,\n                            width: 372,\n                            className: \"h-full w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grayscale\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: Channels[channelNumber],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"z-0 w-full h-[285px] bg-Secondary \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-30\",\n                                children: channelNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-Secondary h-[295px] w-[400px] mr-28 mb-14\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                    onClick: ()=>toggleTv()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"animate-pulse z-20 absolute ml-[372px] mt-[54px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                    onClick: ()=>changeChannel(\"up\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"animate-pulse z-20 absolute ml-[372px] mt-[104px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                    onClick: ()=>changeChannel(\"down\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv);\nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQ0FBRVQsV0FBVTswQ0FDVmY7Ozs7Ozs7Ozs7O2lDQUdOOzs7Ozs4Q0FHSCw4REFBQ2M7b0JBQUlDLFdBQVU7Ozs7OzZCQUNoQjs4QkFDRCw4REFBQ1U7b0JBQ0NWLFdBQVcsOEVBRVYsT0FEQ25CLE9BQU8sYUFBYSxhQUFhLEVBQ2xDO29CQUVEOEIsU0FBUyxJQUFNaEI7Ozs7Ozs4QkFFakIsOERBQUNlO29CQUNDVixXQUFXLG1GQUVWLE9BRENuQixPQUFPLGFBQWEsYUFBYSxFQUNsQztvQkFFRDhCLFNBQVMsSUFBTWQsY0FBYzs7Ozs7OzhCQUUvQiw4REFBQ2E7b0JBQ0NWLFdBQVcsb0ZBRVYsT0FEQ25CLE9BQU8sYUFBYSxhQUFhLEVBQ2xDO29CQUVEOEIsU0FBUyxJQUFNZCxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQWhJTWpCO0tBQUFBO0FBa0lOLCtEQUFlQSxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzL1R2L1R2LnRzeD8xMWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UsIHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFR2SW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHYucG5nXCI7XHJcbmltcG9ydCBUdlN0YXRpYyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9UdlN0YXRpYy5naWZcIjtcclxuaW1wb3J0IENvZGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY29kZS5qcGdcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkLmdpZlwiO1xyXG5pbXBvcnQgQm9hcmQyIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkMi5naWZcIjtcclxuaW1wb3J0IEJvYXJkMyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZDMuZ2lmXCI7XHJcbmltcG9ydCBCb2FyZDQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQ2LmdpZlwiO1xyXG5cclxuY29uc3QgQ2hhbm5lbHM6IHsgW2tleTogbnVtYmVyXTogU3RhdGljSW1hZ2VEYXRhIH0gPSB7XHJcbiAgMTogVHZTdGF0aWMsXHJcbiAgMjogQm9hcmQzLFxyXG4gIDM6IEJvYXJkLFxyXG4gIDQ6IFR2U3RhdGljLFxyXG4gIDU6IFR2U3RhdGljLFxyXG4gIDY6IEJvYXJkMixcclxuICA3OiBUdlN0YXRpYyxcclxuICA4OiBCb2FyZDQsXHJcbiAgOTogVHZTdGF0aWMsXHJcbn07XHJcblxyXG5jb25zdCBUdiA9ICgpID0+IHtcclxuICBjb25zdCBbdHZPbiwgc2V0VHZPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3R2Q2hhbm5lbCwgc2V0VHZDaGFubmVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhbm5lbE51bWJlciwgc2V0Q2hhbm5lbE51bWJlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtib3hWYXJpYW50cywgc2V0Qm94VmFyaWFudHNdID0gdXNlU3RhdGU8YW55Pih7XHJcbiAgICBpbml0aWFsOiB7XHJcbiAgICAgIHNjYWxlWDogMCxcclxuICAgICAgc2NhbGVZOiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgc2NhbGVYOiBbMCwgNCwgMzksIDM5XSxcclxuICAgICAgc2NhbGVZOiBbMCwgMC41LCAwLjUsIDMwXSxcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gdXNlZCB0byB0dXJuIHRoZSB0diBvbiBhbmQgb2ZmXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVHYoKSB7XHJcbiAgICBpZiAodHZPbiA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VHZDaGFubmVsKHRydWUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFR2Q2hhbm5lbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRUdk9uKCF0dk9uKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZWQgdG8gY2hhbmdlIHRoZSBjaGFubmVsXHJcbiAgZnVuY3Rpb24gY2hhbmdlQ2hhbm5lbChkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgaWYgKGNoYW5uZWxOdW1iZXIgPT09IDEpIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKDkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoY2hhbm5lbE51bWJlciAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgIGlmIChjaGFubmVsTnVtYmVyID09PSA5KSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcigxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKGNoYW5uZWxOdW1iZXIgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLWItMiBsZzM6Ym9yZGVyLWItMCBsZWFkaW5nLWxvb3NlIGxnMzpib3JkZXItci0yIGJvcmRlci1TZWNvbmRhcnkgbGczOnByLTYgY29sLXNwYW4tMiBwYi02IGxnMzpwYi0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaXgtYmxlbmQtbXVsdGlwbHlcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17VHZJbWFnZX1cclxuICAgICAgICAgIGFsdD1cIkZyb250UGFnZUltYWdlXCJcclxuICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgLy8gd2lkdGg9ezB9XHJcbiAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dyxcclxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXHJcbiAgICAgICAgICAgICAgMzN2d1wiXHJcbiAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGFic29sdXRlIHotMTAgZ3JheXNjYWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0dk9uID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke1xyXG4gICAgICAgICAgICAgIHR2Q2hhbm5lbCA/IFwiYmctUHJpbWFyeVwiIDogXCJiZy1TZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSBoLVsyODZweF0gdy1bMzc3cHhdIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXR2Q2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLVsxcHhdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtUdlN0YXRpY31cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHZTdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3NX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3Mn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXlzY2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Q2hhbm5lbHNbY2hhbm5lbE51bWJlcl19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHotMCB3LWZ1bGwgaC1bMjg1cHhdIGJnLVNlY29uZGFyeSAke1xyXG4gICAgICAgICAgICAgICAgICAgIENoYW5uZWxzW2NoYW5uZWxOdW1iZXJdICE9PSBUdlN0YXRpYyAmJiBcInB4LTEgcHktMFwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtYm9sZCBmb250LXBpeGVsIHRleHQtUHJpbWFyeSB0ZXh0LTN4bCBtbC1bMzMwcHhdIG10LVstMjYwcHhdIHotMzBcIj5cclxuICAgICAgICAgICAgICAgICAge2NoYW5uZWxOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgaC1bMjk1cHhdIHctWzQwMHB4XSBtci0yOCBtYi0xNFwiPjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtMSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUdigpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtWzU0cHhdIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNoYW5uZWwoXCJ1cFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFuaW1hdGUtcHVsc2Ugei0yMCBhYnNvbHV0ZSBtbC1bMzcycHhdIG10LVsxMDRweF0gaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcImRvd25cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiSW1hZ2UiLCJUdkltYWdlIiwiVHZTdGF0aWMiLCJCb2FyZCIsIkJvYXJkMiIsIkJvYXJkMyIsIkJvYXJkNCIsIkNoYW5uZWxzIiwiVHYiLCJ0dk9uIiwic2V0VHZPbiIsInR2Q2hhbm5lbCIsInNldFR2Q2hhbm5lbCIsImNoYW5uZWxOdW1iZXIiLCJzZXRDaGFubmVsTnVtYmVyIiwiYm94VmFyaWFudHMiLCJzZXRCb3hWYXJpYW50cyIsImluaXRpYWwiLCJzY2FsZVgiLCJzY2FsZVkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidG9nZ2xlVHYiLCJzZXRUaW1lb3V0IiwiY2hhbmdlQ2hhbm5lbCIsImRpcmVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsInNpemVzIiwibG9hZGluZyIsInByaW9yaXR5IiwidmFyaWFudHMiLCJ3aWR0aCIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});