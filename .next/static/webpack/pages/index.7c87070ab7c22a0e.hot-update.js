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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Board.gif */ \"./assets/images/Board.gif\");\n/* harmony import */ var _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Board2.gif */ \"./assets/images/Board2.gif\");\n/* harmony import */ var _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Board3.gif */ \"./assets/images/Board3.gif\");\n/* harmony import */ var _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/Board6.gif */ \"./assets/images/Board6.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    5: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    6: _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    7: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    8: _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    9: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(9);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 9) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"FrontPageImage\",\n                        height: 400,\n                        // width={500}\n                        sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                        loading: \"eager\",\n                        priority: true,\n                        className: \"object-cover object-center absolute z-10 grayscale\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute \".concat(tvChannel ? \"bg-Primary\" : \"bg-Secondary\", \" flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded\"),\n                        children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            transition: {\n                                duration: 1\n                            },\n                            initial: \"initial\",\n                            animate: \"animate\",\n                            variants: boxVariants,\n                            className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"h-full w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grayscale\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: Channels[channelNumber],\n                                    alt: \"TvStatic\",\n                                    height: 275,\n                                    width: 372,\n                                    className: \"z-0 w-full h-[285px] bg-Secondary \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-30\",\n                                    children: channelNumber\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary h-[295px] w-[400px] mr-28 mb-14\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>toggleTv()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[54px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"up\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[104px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"down\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-Secondary font-bold font-pixel text-2xl\",\n                    children: \"TV\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv);\nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q21DO29DQUFFVCxXQUFVOzhDQUNWZjs7Ozs7Ozs7Ozs7cUNBR047Ozs7O2tEQUdILDhEQUFDYzt3QkFBSUMsV0FBVTs7Ozs7aUNBQ2hCO2tDQUNELDhEQUFDVTt3QkFDQ1YsV0FBVyw4RUFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ4QixTQUFTLElBQU1oQjs7Ozs7O2tDQUVqQiw4REFBQ2U7d0JBQ0NWLFdBQVcsbUZBRVYsT0FEQ25CLE9BQU8sYUFBYSxhQUFhLEVBQ2xDO3dCQUVEOEIsU0FBUyxJQUFNZCxjQUFjOzs7Ozs7a0NBRS9CLDhEQUFDYTt3QkFDQ1YsV0FBVyxvRkFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ4QixTQUFTLElBQU1kLGNBQWM7Ozs7Ozs7Ozs7OzswQkFHakMsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUztvQkFBRVQsV0FBVTs4QkFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBFO0dBbklNcEI7S0FBQUE7QUFxSU4sK0RBQWVBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvVHYvVHYudHN4PzExZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSwgeyBTdGF0aWNJbWFnZURhdGEgfSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgVHZJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90di5wbmdcIjtcclxuaW1wb3J0IFR2U3RhdGljIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1R2U3RhdGljLmdpZlwiO1xyXG5pbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2RlLmpwZ1wiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQuZ2lmXCI7XHJcbmltcG9ydCBCb2FyZDIgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQyLmdpZlwiO1xyXG5pbXBvcnQgQm9hcmQzIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkMy5naWZcIjtcclxuaW1wb3J0IEJvYXJkNCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZDYuZ2lmXCI7XHJcblxyXG5jb25zdCBDaGFubmVsczogeyBba2V5OiBudW1iZXJdOiBTdGF0aWNJbWFnZURhdGEgfSA9IHtcclxuICAxOiBUdlN0YXRpYyxcclxuICAyOiBCb2FyZDMsXHJcbiAgMzogQm9hcmQsXHJcbiAgNDogVHZTdGF0aWMsXHJcbiAgNTogVHZTdGF0aWMsXHJcbiAgNjogQm9hcmQyLFxyXG4gIDc6IFR2U3RhdGljLFxyXG4gIDg6IEJvYXJkNCxcclxuICA5OiBUdlN0YXRpYyxcclxufTtcclxuXHJcbmNvbnN0IFR2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0dk9uLCBzZXRUdk9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdHZDaGFubmVsLCBzZXRUdkNoYW5uZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFubmVsTnVtYmVyLCBzZXRDaGFubmVsTnVtYmVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgY29uc3QgW2JveFZhcmlhbnRzLCBzZXRCb3hWYXJpYW50c10gPSB1c2VTdGF0ZTxhbnk+KHtcclxuICAgIGluaXRpYWw6IHtcclxuICAgICAgc2NhbGVYOiAwLFxyXG4gICAgICBzY2FsZVk6IDAsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZToge1xyXG4gICAgICBzY2FsZVg6IFswLCA0LCAzOSwgMzldLFxyXG4gICAgICBzY2FsZVk6IFswLCAwLjUsIDAuNSwgMzBdLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyB1c2VkIHRvIHR1cm4gdGhlIHR2IG9uIGFuZCBvZmZcclxuICBmdW5jdGlvbiB0b2dnbGVUdigpIHtcclxuICAgIGlmICh0dk9uID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUdkNoYW5uZWwodHJ1ZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VHZDaGFubmVsKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldFR2T24oIXR2T24pO1xyXG4gIH1cclxuXHJcbiAgLy8gdXNlZCB0byBjaGFuZ2UgdGhlIGNoYW5uZWxcclxuICBmdW5jdGlvbiBjaGFuZ2VDaGFubmVsKGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBpZiAoY2hhbm5lbE51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoOSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcihjaGFubmVsTnVtYmVyIC0gMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgICAgaWYgKGNoYW5uZWxOdW1iZXIgPT09IDkpIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoY2hhbm5lbE51bWJlciArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXItYi0yIGxnMzpib3JkZXItYi0wIGxlYWRpbmctbG9vc2UgbGczOmJvcmRlci1yLTIgYm9yZGVyLVNlY29uZGFyeSBsZzM6cHItNiBjb2wtc3Bhbi0yIHBiLTYgbGczOnBiLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1bNDAwcHhdIGxnMzpoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWl4LWJsZW5kLW11bHRpcGx5XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e1R2SW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJGcm9udFBhZ2VJbWFnZVwiXHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgIC8vIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dyxcclxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXHJcbiAgICAgICAgICAgICAgMzN2d1wiXHJcbiAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGFic29sdXRlIHotMTAgZ3JheXNjYWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0dk9uID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke1xyXG4gICAgICAgICAgICAgIHR2Q2hhbm5lbCA/IFwiYmctUHJpbWFyeVwiIDogXCJiZy1TZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSBoLVsyODZweF0gdy1bMzc3cHhdIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXR2Q2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2JveFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLVsxcHhdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtUdlN0YXRpY31cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHZTdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3NX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3Mn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXlzY2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Q2hhbm5lbHNbY2hhbm5lbE51bWJlcl19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHotMCB3LWZ1bGwgaC1bMjg1cHhdIGJnLVNlY29uZGFyeSAke1xyXG4gICAgICAgICAgICAgICAgICAgIENoYW5uZWxzW2NoYW5uZWxOdW1iZXJdICE9PSBUdlN0YXRpYyAmJiBcInB4LTEgcHktMFwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtYm9sZCBmb250LXBpeGVsIHRleHQtUHJpbWFyeSB0ZXh0LTN4bCBtbC1bMzMwcHhdIG10LVstMjYwcHhdIHotMzBcIj5cclxuICAgICAgICAgICAgICAgICAge2NoYW5uZWxOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgaC1bMjk1cHhdIHctWzQwMHB4XSBtci0yOCBtYi0xNFwiPjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtMSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUdigpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtWzU0cHhdIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNoYW5uZWwoXCJ1cFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFuaW1hdGUtcHVsc2Ugei0yMCBhYnNvbHV0ZSBtbC1bMzcycHhdIG10LVsxMDRweF0gaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcImRvd25cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtU2Vjb25kYXJ5IGZvbnQtYm9sZCBmb250LXBpeGVsIHRleHQtMnhsXCI+VFY8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR2O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkltYWdlIiwiVHZJbWFnZSIsIlR2U3RhdGljIiwiQm9hcmQiLCJCb2FyZDIiLCJCb2FyZDMiLCJCb2FyZDQiLCJDaGFubmVscyIsIlR2IiwidHZPbiIsInNldFR2T24iLCJ0dkNoYW5uZWwiLCJzZXRUdkNoYW5uZWwiLCJjaGFubmVsTnVtYmVyIiwic2V0Q2hhbm5lbE51bWJlciIsImJveFZhcmlhbnRzIiwic2V0Qm94VmFyaWFudHMiLCJpbml0aWFsIiwic2NhbGVYIiwic2NhbGVZIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRvZ2dsZVR2Iiwic2V0VGltZW91dCIsImNoYW5nZUNoYW5uZWwiLCJkaXJlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJzaXplcyIsImxvYWRpbmciLCJwcmlvcml0eSIsInZhcmlhbnRzIiwid2lkdGgiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});