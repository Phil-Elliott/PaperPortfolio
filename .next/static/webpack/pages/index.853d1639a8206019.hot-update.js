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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n/* harmony import */ var _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/Board.gif */ \"./assets/images/Board.gif\");\n/* harmony import */ var _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/Board2.gif */ \"./assets/images/Board2.gif\");\n/* harmony import */ var _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/Board3.gif */ \"./assets/images/Board3.gif\");\n/* harmony import */ var _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/Board6.gif */ \"./assets/images/Board6.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Channels = {\n    1: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    2: _assets_images_Board3_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    3: _assets_images_Board_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    4: _assets_images_Board2_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    5: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    6: _assets_images_Board6_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n};\nconst Tv = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [channelNumber, setChannelNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    // used to turn the tv on and off\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    // used to change the channel\n    function changeChannel(direction) {\n        if (direction === \"down\") {\n            if (channelNumber === 1) {\n                setChannelNumber(9);\n            } else {\n                setChannelNumber(channelNumber - 1);\n            }\n        } else if (direction === \"up\") {\n            if (channelNumber === 9) {\n                setChannelNumber(1);\n            } else {\n                setChannelNumber(channelNumber + 1);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"FrontPageImage\",\n                        height: 400,\n                        // width={500}\n                        sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                        loading: \"eager\",\n                        priority: true,\n                        className: \"object-cover object-center absolute z-10 grayscale\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute \".concat(tvChannel ? \"bg-Primary\" : \"bg-Secondary\", \" flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded\"),\n                        children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            transition: {\n                                duration: 1\n                            },\n                            initial: \"initial\",\n                            animate: \"animate\",\n                            variants: boxVariants,\n                            className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                height: 275,\n                                width: 372,\n                                className: \"h-full w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grayscale\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: Channels[channelNumber],\n                                    alt: \"TvStatic\",\n                                    height: 275,\n                                    width: 372,\n                                    className: \"z-0 w-full h-[285px] bg-Secondary \".concat(Channels[channelNumber] !== _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && \"px-1 py-0\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-30\",\n                                    children: channelNumber\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary h-[295px] w-[400px] mr-28 mb-14\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>toggleTv()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[54px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"up\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"animate-pulse z-20 absolute ml-[372px] mt-[104px] h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                        onClick: ()=>changeChannel(\"down\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg xs:text-xl text-Tertiary font-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mr-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Push the buttons\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"ml-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Tv\\\\Tv.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tv, \"krV/0rBqG2vBQtSmwi2RLmMs3qI=\");\n_c = Tv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tv);\nvar _c;\n$RefreshReg$(_c, \"Tv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yzt3QkFBSUMsV0FBVTs7Ozs7aUNBQ2hCO2tDQUNELDhEQUFDVTt3QkFDQ1YsV0FBVyw4RUFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ4QixTQUFTLElBQU1oQjs7Ozs7O2tDQUVqQiw4REFBQ2U7d0JBQ0NWLFdBQVcsbUZBRVYsT0FEQ25CLE9BQU8sYUFBYSxhQUFhLEVBQ2xDO3dCQUVEOEIsU0FBUyxJQUFNZCxjQUFjOzs7Ozs7a0NBRS9CLDhEQUFDYTt3QkFDQ1YsV0FBVyxvRkFFVixPQURDbkIsT0FBTyxhQUFhLGFBQWEsRUFDbEM7d0JBRUQ4QixTQUFTLElBQU1kLGNBQWM7Ozs7Ozs7Ozs7OzswQkFHakMsOERBQUNlO2dCQUFHWixXQUFVOztrQ0FDWiw4REFBQ1U7d0JBQ0NWLFdBQVk7Ozs7OztvQkFDWjtrQ0FFRiw4REFBQ1U7d0JBQ0NWLFdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCdEI7R0FwSk1wQjtLQUFBQTtBQXNKTiwrREFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxscy9Udi9Udi50c3g/MTFlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEltYWdlLCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBUdkltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R2LnBuZ1wiO1xyXG5pbXBvcnQgVHZTdGF0aWMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvVHZTdGF0aWMuZ2lmXCI7XHJcbmltcG9ydCBDb2RlIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NvZGUuanBnXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZC5naWZcIjtcclxuaW1wb3J0IEJvYXJkMiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Cb2FyZDIuZ2lmXCI7XHJcbmltcG9ydCBCb2FyZDMgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm9hcmQzLmdpZlwiO1xyXG5pbXBvcnQgQm9hcmQ0IGZyb20gXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0JvYXJkNi5naWZcIjtcclxuXHJcbmNvbnN0IENoYW5uZWxzOiB7IFtrZXk6IG51bWJlcl06IFN0YXRpY0ltYWdlRGF0YSB9ID0ge1xyXG4gIDE6IFR2U3RhdGljLFxyXG4gIDI6IEJvYXJkMyxcclxuICAzOiBCb2FyZCxcclxuICA0OiBCb2FyZDIsXHJcbiAgNTogVHZTdGF0aWMsXHJcbiAgNjogQm9hcmQ0LFxyXG59O1xyXG5cclxuY29uc3QgVHYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3R2T24sIHNldFR2T25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0dkNoYW5uZWwsIHNldFR2Q2hhbm5lbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5uZWxOdW1iZXIsIHNldENoYW5uZWxOdW1iZXJdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCBbYm94VmFyaWFudHMsIHNldEJveFZhcmlhbnRzXSA9IHVzZVN0YXRlPGFueT4oe1xyXG4gICAgaW5pdGlhbDoge1xyXG4gICAgICBzY2FsZVg6IDAsXHJcbiAgICAgIHNjYWxlWTogMCxcclxuICAgIH0sXHJcbiAgICBhbmltYXRlOiB7XHJcbiAgICAgIHNjYWxlWDogWzAsIDQsIDM5LCAzOV0sXHJcbiAgICAgIHNjYWxlWTogWzAsIDAuNSwgMC41LCAzMF0sXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIHVzZWQgdG8gdHVybiB0aGUgdHYgb24gYW5kIG9mZlxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVR2KCkge1xyXG4gICAgaWYgKHR2T24gPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFR2Q2hhbm5lbCh0cnVlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUdkNoYW5uZWwoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VHZPbighdHZPbik7XHJcbiAgfVxyXG5cclxuICAvLyB1c2VkIHRvIGNoYW5nZSB0aGUgY2hhbm5lbFxyXG4gIGZ1bmN0aW9uIGNoYW5nZUNoYW5uZWwoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIGlmIChjaGFubmVsTnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcig5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDaGFubmVsTnVtYmVyKGNoYW5uZWxOdW1iZXIgLSAxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgICBpZiAoY2hhbm5lbE51bWJlciA9PT0gOSkge1xyXG4gICAgICAgIHNldENoYW5uZWxOdW1iZXIoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q2hhbm5lbE51bWJlcihjaGFubmVsTnVtYmVyICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgbGczOmJvcmRlci1iLTAgbGVhZGluZy1sb29zZSBsZzM6Ym9yZGVyLXItMiBib3JkZXItU2Vjb25kYXJ5IGxnMzpwci02IGNvbC1zcGFuLTIgcGItNiBsZzM6cGItMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVs0MDBweF0gbGczOmgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaXgtYmxlbmQtbXVsdGlwbHlcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17VHZJbWFnZX1cclxuICAgICAgICAgIGFsdD1cIkZyb250UGFnZUltYWdlXCJcclxuICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgLy8gd2lkdGg9ezUwMH1cclxuICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNzY4cHgpIDEwMHZ3LFxyXG4gICAgICAgICAgICAgIChtYXgtd2lkdGg6IDEyMDBweCkgNTB2dyxcclxuICAgICAgICAgICAgICAzM3Z3XCJcclxuICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXHJcbiAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgYWJzb2x1dGUgei0xMCBncmF5c2NhbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3R2T24gPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlICR7XHJcbiAgICAgICAgICAgICAgdHZDaGFubmVsID8gXCJiZy1QcmltYXJ5XCIgOiBcImJnLVNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIH0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1QcmltYXJ5IGgtWzI4NnB4XSB3LVszNzdweF0gbXItMjggbWItMTEgcm91bmRlZGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshdHZDaGFubmVsID8gKFxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17Ym94VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtWzFweF1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e1R2U3RhdGljfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJUdlN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Mjc1fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzcyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheXNjYWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtDaGFubmVsc1tjaGFubmVsTnVtYmVyXX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHZTdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3NX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3Mn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgei0wIHctZnVsbCBoLVsyODVweF0gYmctU2Vjb25kYXJ5ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbHNbY2hhbm5lbE51bWJlcl0gIT09IFR2U3RhdGljICYmIFwicHgtMSBweS0wXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1ib2xkIGZvbnQtcGl4ZWwgdGV4dC1QcmltYXJ5IHRleHQtM3hsIG1sLVszMzBweF0gbXQtWy0yNjBweF0gei0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7Y2hhbm5lbE51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVNlY29uZGFyeSBoLVsyOTVweF0gdy1bNDAwcHhdIG1yLTI4IG1iLTE0XCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzM3MnB4XSBtdC0xIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCAke1xyXG4gICAgICAgICAgICB0dk9uID8gXCJiZy1HcmVlblwiIDogXCJiZy1UZXJ0aWFyeVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVR2KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhbmltYXRlLXB1bHNlIHotMjAgYWJzb2x1dGUgbWwtWzM3MnB4XSBtdC1bNTRweF0gaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIHR2T24gPyBcImJnLUdyZWVuXCIgOiBcImJnLVRlcnRpYXJ5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2hhbm5lbChcInVwXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYW5pbWF0ZS1wdWxzZSB6LTIwIGFic29sdXRlIG1sLVszNzJweF0gbXQtWzEwNHB4XSBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDaGFubmVsKFwiZG93blwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgeHM6dGV4dC14bCB0ZXh0LVRlcnRpYXJ5IGZvbnQtYmxhY2tcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Btci01IGFuaW1hdGUtcHVsc2Ugei0yMCBoLVsxMHB4XSB3LVsxMHB4XSByb3VuZGVkLWZ1bGwgYmctVGVydGlhcnlgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgUHVzaCB0aGUgYnV0dG9uc1xyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTUgYW5pbWF0ZS1wdWxzZSB6LTIwIGgtWzEwcHhdIHctWzEwcHhdIHJvdW5kZWQtZnVsbCBiZy1HcmVlbmB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtMiBmb250LWJvbGQgYm9yZGVyLVNlY29uZGFyeSBib3JkZXItMiBoLTIvMyB3LTEvNCBiZy1TZWNvbmRhcnkgdGV4dC1QcmltYXJ5IHNoYWRvdy1sZyByb3VuZGVkXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNCBwYi0yIG14LWF1dG8gZm9udC1ib2xkIHRleHQteGxcIj5UViBHdWlkZTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj4xIC0gUE0gQVBQPC9wPlxyXG4gICAgICAgIDxwPjIgLSBOZXdzIEFwcDwvcD5cclxuICAgICAgICA8cD4zIC0gQmxvZzwvcD5cclxuICAgICAgICA8cD40IC0gQ29taW5nIFNvb248L3A+XHJcbiAgICAgICAgPHA+NSAtIENvbWluZyBTb29uPC9wPlxyXG4gICAgICAgIDxwPjYgLSBDb21pbmcgU29vbjwvcD5cclxuICAgICAgICA8cD5Vc2UgYnR0bnM8L3A+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJJbWFnZSIsIlR2SW1hZ2UiLCJUdlN0YXRpYyIsIkJvYXJkIiwiQm9hcmQyIiwiQm9hcmQzIiwiQm9hcmQ0IiwiQ2hhbm5lbHMiLCJUdiIsInR2T24iLCJzZXRUdk9uIiwidHZDaGFubmVsIiwic2V0VHZDaGFubmVsIiwiY2hhbm5lbE51bWJlciIsInNldENoYW5uZWxOdW1iZXIiLCJib3hWYXJpYW50cyIsInNldEJveFZhcmlhbnRzIiwiaW5pdGlhbCIsInNjYWxlWCIsInNjYWxlWSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0b2dnbGVUdiIsInNldFRpbWVvdXQiLCJjaGFuZ2VDaGFubmVsIiwiZGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwic2l6ZXMiLCJsb2FkaW5nIiwicHJpb3JpdHkiLCJ2YXJpYW50cyIsIndpZHRoIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Tv/Tv.tsx\n"));

/***/ })

});