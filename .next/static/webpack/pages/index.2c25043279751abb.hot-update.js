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

/***/ "./components/FrontPage/FrontPage.tsx":
/*!********************************************!*\
  !*** ./components/FrontPage/FrontPage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/tv.png */ \"./assets/images/tv.png\");\n/* harmony import */ var _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/TvStatic.gif */ \"./assets/images/TvStatic.gif\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FrontPage = ()=>{\n    _s();\n    const [tvOn, setTvOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [tvChannel, setTvChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boxVariants, setBoxVariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initial: {\n            scaleX: 0,\n            scaleY: 0\n        },\n        animate: {\n            scaleX: [\n                0,\n                4,\n                39,\n                39\n            ],\n            scaleY: [\n                0,\n                0.5,\n                0.5,\n                30\n            ]\n        },\n        transition: {\n            duration: 2\n        }\n    });\n    function toggleTv() {\n        if (tvOn === false) {\n            setTimeout(()=>{\n                setTvChannel(true);\n            }, 1000);\n        } else {\n            setTvChannel(false);\n        }\n        setTvOn(!tvOn);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 border-t-2 border-Secondary gap-x-8 grid lg:grid-cols-4\",\n        id: \"front\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:border-r-2 border-Border lg:pr-8 col-span-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"article-header lg:text-5xl text-fluid-9xl leading-normal lg:leading-normal\",\n                        children: \"Aspiring Frontend Developer Seeking First Dev Role\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"article-text lg:text-justify\",\n                        children: \"Hello! I'm a frontend developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites and continuously strive to improve my skills with the latest technologies. I'm eager to join a dev team as a frontend developer and contribute to exciting projects. Check out my portfolio for examples of my work, and feel free to contact me with any questions.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:inline relative border-0 border-Border col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-full flex justify-center items-center mix-blend-multiply\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_images_tv_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"FrontPageImage\",\n                            height: 400,\n                            // width={0}\n                            sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\",\n                            loading: \"eager\",\n                            priority: true,\n                            className: \"object-cover object-center absolute z-10 grayscale\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        tvOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute \".concat(tvChannel ? \"bg-Primary\" : \"bg-Secondary\", \" flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded\"),\n                            children: !tvChannel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                transition: {\n                                    duration: 1\n                                },\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                variants: boxVariants,\n                                className: \"bg-Primary h-[10px] w-[10px] rounded-[1px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, undefined) : // <div\n                            //   className={`bg-Secondary flex flex-col w-full h-full py-6 px-8 transition-all duration-1000 ease-in-out`}\n                            // >\n                            //   <h1 className=\"text-xl pb-5\">The Channel Guide</h1>\n                            //   <div className=\"\">\n                            //     <div className=\"grid gap-5 grid-cols-3\">\n                            //       <div\n                            //         className=\"bg-Primary h-[85px] rounded cursor-pointer z-20\"\n                            //         onClick={() => console.log(\"hello\")}\n                            //       ></div>\n                            //       <div className=\"bg-Primary h-[85px] rounded cursor-pointer z-20\"></div>\n                            //       <div className=\"bg-Primary h-[85px] rounded cursor-pointer z-20\"></div>\n                            //     </div>\n                            //     <div className=\"grid gap-5 grid-cols-2 pt-5\">\n                            //       <div className=\"bg-Primary h-[85px] rounded cursor-pointer z-20\"></div>\n                            //       <div className=\"bg-Primary h-[85px] rounded cursor-pointer z-20\"></div>\n                            //     </div>\n                            //   </div>\n                            // </div>\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_images_TvStatic_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"TvStatic\",\n                                // height={275}\n                                // width={372}\n                                className: \"z-0 rounded w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-Secondary h-[295px] w-[400px] mr-28 mb-14\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full \".concat(tvOn ? \"bg-Green\" : \"bg-Tertiary\", \"\\n              \"),\n                            onClick: ()=>toggleTv()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FrontPage, \"8aT4Hp9iBwmvSW6Grbxlj/PwQeI=\");\n_c = FrontPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontPage); /*\r\n\r\n  Have channels that the user can go through\r\n  Have a channel guide and instruction or a remote for the tv or a short sentence below the tv\r\n\r\n\r\n\r\n  Tetris Website faller or just an image broken into blocks (could be image of me or something)\r\n  Do tetris with your photo (try to cartoonize it even more or midjourney cartoonize it)\r\n\r\n\r\n   Cartoonize your image here (you in front of a computer)\r\n     https://www.befunky.com/create/photo-to-cartoon/\r\n*/  /*\r\nI am eager to\r\n          put my skills to work and contribute to a dev team as a frontend\r\n          developer. \r\n\r\nimport React, { useEffect, useState } from \"react\";\r\n\r\ntype ArticleProps = {\r\n  title: string;\r\n  description: string;\r\n  index: number;\r\n  handleHover: (index: number) => void;\r\n  hovered: number;\r\n};\r\n\r\nconst Article = ({\r\n  title,\r\n  description,\r\n  index,\r\n  handleHover,\r\n  hovered,\r\n}: ArticleProps) => {\r\n  const x = \"lg2:translate-x-\";\r\n  const y = \"translate-y-\";\r\n\r\n  const [translate, setTranslate] = useState<string[]>([\r\n    `${x}0`,\r\n    `${x}[-75%]`,\r\n    `${x}[-150%]`,\r\n    `${x}[-222%]`,\r\n  ]);\r\n  const [translateY, setTranslateY] = useState<string[]>([\r\n    `${y}0`,\r\n    `${y}[-50%]`,\r\n    `${y}[-120%]`,\r\n    `${y}[-175%]`,\r\n  ]);\r\n\r\n  useEffect(() => {\r\n    if (hovered === 0) {\r\n      setTranslate([`${x}0`, `${x}[-8%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 1) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 2) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 3) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-222%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    }\r\n    console.log(hovered);\r\n  }, [hovered]);\r\n\r\n  return (\r\n    <div\r\n      onMouseOver={() => handleHover(index)}\r\n      onMouseLeave={() => handleHover(3)}\r\n      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full ${translate[index]} ${translateY[index]} lg2:translate-y-0`}\r\n    >\r\n      <div\r\n        style={{\r\n          paddingRight: index !== 3 ? `9%` : \"\",\r\n        }}\r\n        className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\r\n      >\r\n        <h1 className=\"article-header text-Tertiary text-3xl sm:text-6xl\">\r\n          {title}\r\n        </h1>\r\n        <p className=\"article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose\">\r\n          {description}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Article;\r\n\r\n\r\n\r\n{/* <p className=\"article-text lg:text-justify\">\r\n          Hello! I am a frontend developer with a strong foundation in HTML,\r\n          CSS, JavaScript, and React. I am passionate about creating\r\n          user-friendly and visually appealing websites, and I am always looking\r\n          to improve my skills and stay up-to-date with the latest\r\n          technologies.I am eager to put my skills to work and contribute to a\r\n          dev team as a frontend developer. Please take a look at my portfolio\r\n          to see some of my work, and don't hesitate to get in touch if you have\r\n          any questions about my experience or abilities.\r\n        </p> \r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"FrontPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zyb250UGFnZS9Gcm9udFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDVDtBQUNRO0FBQ2lCO0FBQ0E7QUFFeEQsTUFBTU0sWUFBWSxJQUFNOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQU07UUFDbERZLFNBQVM7WUFDUEMsUUFBUTtZQUNSQyxRQUFRO1FBQ1Y7UUFDQUMsU0FBUztZQUNQRixRQUFRO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFJO2FBQUc7WUFDdEJDLFFBQVE7Z0JBQUM7Z0JBQUc7Z0JBQUs7Z0JBQUs7YUFBRztRQUMzQjtRQUNBRSxZQUFZO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBRUEsU0FBU0MsV0FBVztRQUNsQixJQUFJWixTQUFTLEtBQUssRUFBRTtZQUNsQmEsV0FBVyxJQUFNO2dCQUNmVixhQUFhLElBQUk7WUFDbkIsR0FBRztRQUNMLE9BQU87WUFDTEEsYUFBYSxLQUFLO1FBQ3BCLENBQUM7UUFDREYsUUFBUSxDQUFDRDtJQUNYO0lBRUEscUJBQ0UsOERBQUNjO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBRUgsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTZFOzs7Ozs7a0NBRzNGLDhEQUFDRzt3QkFBRUgsV0FBVTtrQ0FBK0I7Ozs7Ozs7Ozs7OzswQkFTOUMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNwQixtREFBS0E7NEJBQ0p3QixLQUFLdEIsNkRBQWNBOzRCQUNuQnVCLEtBQUk7NEJBQ0pDLFFBQVE7NEJBQ1IsWUFBWTs0QkFDWkMsT0FBTTs0QkFHTkMsU0FBUTs0QkFDUkMsUUFBUTs0QkFDUlQsV0FBVTs7Ozs7O3dCQUVYZixxQkFDQyw4REFBQ2M7NEJBQ0NDLFdBQVcsWUFFVixPQURDYixZQUFZLGVBQWUsY0FBYyxFQUMxQztzQ0FFQSxDQUFDQSwwQkFDQSw4REFBQ04scURBQVU7Z0NBQ1RjLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUU7Z0NBQzFCTCxTQUFRO2dDQUNSRyxTQUFRO2dDQUNSZ0IsVUFBVXJCO2dDQUNWVyxXQUFVOzs7Ozs0Q0FXWixPQUFPOzRCQUNQLDhHQUE4Rzs0QkFDOUcsSUFBSTs0QkFDSix3REFBd0Q7NEJBQ3hELHVCQUF1Qjs0QkFDdkIsK0NBQStDOzRCQUMvQyxhQUFhOzRCQUNiLHNFQUFzRTs0QkFDdEUsK0NBQStDOzRCQUMvQyxnQkFBZ0I7NEJBQ2hCLGdGQUFnRjs0QkFDaEYsZ0ZBQWdGOzRCQUNoRixhQUFhOzRCQUNiLG9EQUFvRDs0QkFDcEQsZ0ZBQWdGOzRCQUNoRixnRkFBZ0Y7NEJBQ2hGLGFBQWE7NEJBQ2IsV0FBVzs0QkFDWCxTQUFTOzBDQUNULDhEQUFDcEIsbURBQUtBO2dDQUNKd0IsS0FBS3JCLG1FQUFRQTtnQ0FDYnNCLEtBQUk7Z0NBQ0osZUFBZTtnQ0FDZixjQUFjO2dDQUNkTCxXQUFVOzs7Ozt5Q0FFYjs7Ozs7c0RBR0gsOERBQUNEOzRCQUFJQyxXQUFVOzs7OztxQ0FTaEI7c0NBQ0QsOERBQUNXOzRCQUNDWCxXQUFXLDhFQUVWLE9BRENmLE9BQU8sYUFBYSxhQUFhLEVBQ2xDOzRCQUVEMkIsU0FBUyxJQUFNZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0I7R0FySU1iO0tBQUFBO0FBdUlOLCtEQUFlQSxTQUFTQSxFQUFDLENBRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnJvbnRQYWdlL0Zyb250UGFnZS50c3g/ZDMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBGcm9udFBhZ2VJbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90di5wbmdcIjtcclxuaW1wb3J0IFR2U3RhdGljIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL1R2U3RhdGljLmdpZlwiO1xyXG5cclxuY29uc3QgRnJvbnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0dk9uLCBzZXRUdk9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdHZDaGFubmVsLCBzZXRUdkNoYW5uZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib3hWYXJpYW50cywgc2V0Qm94VmFyaWFudHNdID0gdXNlU3RhdGU8YW55Pih7XHJcbiAgICBpbml0aWFsOiB7XHJcbiAgICAgIHNjYWxlWDogMCxcclxuICAgICAgc2NhbGVZOiAwLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IHtcclxuICAgICAgc2NhbGVYOiBbMCwgNCwgMzksIDM5XSxcclxuICAgICAgc2NhbGVZOiBbMCwgMC41LCAwLjUsIDMwXSxcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVHYoKSB7XHJcbiAgICBpZiAodHZPbiA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VHZDaGFubmVsKHRydWUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFR2Q2hhbm5lbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRUdk9uKCF0dk9uKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB0LTYgYm9yZGVyLXQtMiBib3JkZXItU2Vjb25kYXJ5IGdhcC14LTggZ3JpZCBsZzpncmlkLWNvbHMtNFwiXHJcbiAgICAgIGlkPVwiZnJvbnRcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmJvcmRlci1yLTIgYm9yZGVyLUJvcmRlciBsZzpwci04IGNvbC1zcGFuLTIgXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIGxnOnRleHQtNXhsIHRleHQtZmx1aWQtOXhsIGxlYWRpbmctbm9ybWFsIGxnOmxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAgICAgICBBc3BpcmluZyBGcm9udGVuZCBEZXZlbG9wZXIgU2Vla2luZyBGaXJzdCBEZXYgUm9sZVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0IGxnOnRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgSGVsbG8hIEknbSBhIGZyb250ZW5kIGRldmVsb3BlciB3aXRoIGV4cGVydGlzZSBpbiBIVE1MLCBDU1MsXHJcbiAgICAgICAgICBKYXZhU2NyaXB0LCBhbmQgUmVhY3QuIEkgY3JlYXRlIHZpc3VhbGx5IGFwcGVhbGluZyBhbmQgdXNlci1mcmllbmRseVxyXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIGNvbnRpbnVvdXNseSBzdHJpdmUgdG8gaW1wcm92ZSBteSBza2lsbHMgd2l0aCB0aGUgbGF0ZXN0XHJcbiAgICAgICAgICB0ZWNobm9sb2dpZXMuIEknbSBlYWdlciB0byBqb2luIGEgZGV2IHRlYW0gYXMgYSBmcm9udGVuZCBkZXZlbG9wZXIgYW5kXHJcbiAgICAgICAgICBjb250cmlidXRlIHRvIGV4Y2l0aW5nIHByb2plY3RzLiBDaGVjayBvdXQgbXkgcG9ydGZvbGlvIGZvciBleGFtcGxlc1xyXG4gICAgICAgICAgb2YgbXkgd29yaywgYW5kIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIHdpdGggYW55IHF1ZXN0aW9ucy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcmVsYXRpdmUgYm9yZGVyLTAgYm9yZGVyLUJvcmRlciBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1peC1ibGVuZC1tdWx0aXBseVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17RnJvbnRQYWdlSW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD1cIkZyb250UGFnZUltYWdlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgIC8vIHdpZHRoPXswfVxyXG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dyxcclxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXHJcbiAgICAgICAgICAgICAgMzN2d1wiXHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXHJcbiAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGFic29sdXRlIHotMTAgZ3JheXNjYWxlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dHZPbiA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlICR7XHJcbiAgICAgICAgICAgICAgICB0dkNoYW5uZWwgPyBcImJnLVByaW1hcnlcIiA6IFwiYmctU2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtUHJpbWFyeSBoLVsyODZweF0gdy1bMzc3cHhdIG1yLTI4IG1iLTExIHJvdW5kZWRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgeyF0dkNoYW5uZWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17Ym94VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1bMXB4XVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1R2U3RhdGljfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezI3NX1cclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MzcyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMCB3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIC8vIDxkaXZcclxuICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtgYmctU2Vjb25kYXJ5IGZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBweS02IHB4LTggdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dGB9XHJcbiAgICAgICAgICAgICAgICAvLyA+XHJcbiAgICAgICAgICAgICAgICAvLyAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHBiLTVcIj5UaGUgQ2hhbm5lbCBHdWlkZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgaC1bODVweF0gcm91bmRlZCBjdXJzb3ItcG9pbnRlciB6LTIwXCJcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJoZWxsb1wiKX1cclxuICAgICAgICAgICAgICAgIC8vICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVs4NXB4XSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHotMjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBoLVs4NXB4XSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHotMjBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTUgZ3JpZC1jb2xzLTIgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IGgtWzg1cHhdIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgei0yMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IGgtWzg1cHhdIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgei0yMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17VHZTdGF0aWN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlR2U3RhdGljXCJcclxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXszNzJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMCByb3VuZGVkIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGgtWzI5NXB4XSB3LVs0MDBweF0gbXItMjggbWItMTRcIj5cclxuICAgICAgICAgICAgICB7LyogPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtUdlN0YXRpY31cclxuICAgICAgICAgICAgICBhbHQ9XCJUdlN0YXRpY1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNzV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezM3Mn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yOCBtYi0xMiB6LTAgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFuaW1hdGUtcHVsc2Ugei0yMCBhYnNvbHV0ZSBtbC1bMzcycHhdIG10LTEgaC1bMTBweF0gdy1bMTBweF0gcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgICAgdHZPbiA/IFwiYmctR3JlZW5cIiA6IFwiYmctVGVydGlhcnlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVHYoKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb250UGFnZTtcclxuXHJcbi8qXHJcblxyXG4gIEhhdmUgY2hhbm5lbHMgdGhhdCB0aGUgdXNlciBjYW4gZ28gdGhyb3VnaFxyXG4gIEhhdmUgYSBjaGFubmVsIGd1aWRlIGFuZCBpbnN0cnVjdGlvbiBvciBhIHJlbW90ZSBmb3IgdGhlIHR2IG9yIGEgc2hvcnQgc2VudGVuY2UgYmVsb3cgdGhlIHR2XHJcblxyXG5cclxuXHJcbiAgVGV0cmlzIFdlYnNpdGUgZmFsbGVyIG9yIGp1c3QgYW4gaW1hZ2UgYnJva2VuIGludG8gYmxvY2tzIChjb3VsZCBiZSBpbWFnZSBvZiBtZSBvciBzb21ldGhpbmcpXHJcbiAgRG8gdGV0cmlzIHdpdGggeW91ciBwaG90byAodHJ5IHRvIGNhcnRvb25pemUgaXQgZXZlbiBtb3JlIG9yIG1pZGpvdXJuZXkgY2FydG9vbml6ZSBpdClcclxuXHJcblxyXG4gICBDYXJ0b29uaXplIHlvdXIgaW1hZ2UgaGVyZSAoeW91IGluIGZyb250IG9mIGEgY29tcHV0ZXIpXHJcbiAgICAgaHR0cHM6Ly93d3cuYmVmdW5reS5jb20vY3JlYXRlL3Bob3RvLXRvLWNhcnRvb24vXHJcbiovXHJcblxyXG4vKlxyXG5JIGFtIGVhZ2VyIHRvXHJcbiAgICAgICAgICBwdXQgbXkgc2tpbGxzIHRvIHdvcmsgYW5kIGNvbnRyaWJ1dGUgdG8gYSBkZXYgdGVhbSBhcyBhIGZyb250ZW5kXHJcbiAgICAgICAgICBkZXZlbG9wZXIuIFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgQXJ0aWNsZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGhhbmRsZUhvdmVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBob3ZlcmVkOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBpbmRleCxcclxuICBoYW5kbGVIb3ZlcixcclxuICBob3ZlcmVkLFxyXG59OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuICBjb25zdCB4ID0gXCJsZzI6dHJhbnNsYXRlLXgtXCI7XHJcbiAgY29uc3QgeSA9IFwidHJhbnNsYXRlLXktXCI7XHJcblxyXG4gIGNvbnN0IFt0cmFuc2xhdGUsIHNldFRyYW5zbGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4gICAgYCR7eH0wYCxcclxuICAgIGAke3h9Wy03NSVdYCxcclxuICAgIGAke3h9Wy0xNTAlXWAsXHJcbiAgICBgJHt4fVstMjIyJV1gLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZLCBzZXRUcmFuc2xhdGVZXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXHJcbiAgICBgJHt5fTBgLFxyXG4gICAgYCR7eX1bLTUwJV1gLFxyXG4gICAgYCR7eX1bLTEyMCVdYCxcclxuICAgIGAke3l9Wy0xNzUlXWAsXHJcbiAgXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaG92ZXJlZCA9PT0gMCkge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy04JV1gLCBgJHt4fVstODUlXWAsIGAke3h9Wy0xNjAlXWBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDEpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlKFtgJHt4fTBgLCBgJHt4fVstNzUlXWAsIGAke3h9Wy04NSVdYCwgYCR7eH1bLTE2MCVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMikge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy03NSVdYCwgYCR7eH1bLTE1MCVdYCwgYCR7eH1bLTE2MCVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMykge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy03NSVdYCwgYCR7eH1bLTE1MCVdYCwgYCR7eH1bLTIyMiVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGhvdmVyZWQpO1xyXG4gIH0sIFtob3ZlcmVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpbmRleCl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlSG92ZXIoMyl9XHJcbiAgICAgIGNsYXNzTmFtZT17YHNoYWRvdy1sZyBwLTMgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSByb3VuZGVkLW1kIGxlZnQtMCB6LSR7aW5kZXh9IGJnLVByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHctZnVsbCAke3RyYW5zbGF0ZVtpbmRleF19ICR7dHJhbnNsYXRlWVtpbmRleF19IGxnMjp0cmFuc2xhdGUteS0wYH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IGluZGV4ICE9PSAzID8gYDklYCA6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgcHgtNiBwYi00IGJvcmRlci1TZWNvbmRhcnkgb3V0bGluZS1kb3R0ZWQgcm91bmRlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZWFkZXIgdGV4dC1UZXJ0aWFyeSB0ZXh0LTN4bCBzbTp0ZXh0LTZ4bFwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0IGZpcnN0LWxldHRlcjp0ZXh0LWZsdWlkLTV4bCBsZzI6Zmlyc3QtbGV0dGVyOnRleHQtNnhsIGxlYWRpbmctcmVsYXhlZCBsZzI6bGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuXHJcblxyXG5cclxuey8qIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCBsZzp0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgIEhlbGxvISBJIGFtIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgZm91bmRhdGlvbiBpbiBIVE1MLFxyXG4gICAgICAgICAgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QuIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZ1xyXG4gICAgICAgICAgdXNlci1mcmllbmRseSBhbmQgdmlzdWFsbHkgYXBwZWFsaW5nIHdlYnNpdGVzLCBhbmQgSSBhbSBhbHdheXMgbG9va2luZ1xyXG4gICAgICAgICAgdG8gaW1wcm92ZSBteSBza2lsbHMgYW5kIHN0YXkgdXAtdG8tZGF0ZSB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgIHRlY2hub2xvZ2llcy5JIGFtIGVhZ2VyIHRvIHB1dCBteSBza2lsbHMgdG8gd29yayBhbmQgY29udHJpYnV0ZSB0byBhXHJcbiAgICAgICAgICBkZXYgdGVhbSBhcyBhIGZyb250ZW5kIGRldmVsb3Blci4gUGxlYXNlIHRha2UgYSBsb29rIGF0IG15IHBvcnRmb2xpb1xyXG4gICAgICAgICAgdG8gc2VlIHNvbWUgb2YgbXkgd29yaywgYW5kIGRvbid0IGhlc2l0YXRlIHRvIGdldCBpbiB0b3VjaCBpZiB5b3UgaGF2ZVxyXG4gICAgICAgICAgYW55IHF1ZXN0aW9ucyBhYm91dCBteSBleHBlcmllbmNlIG9yIGFiaWxpdGllcy5cclxuICAgICAgICA8L3A+IFxyXG5cclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJtb3Rpb24iLCJGcm9udFBhZ2VJbWFnZSIsIlR2U3RhdGljIiwiRnJvbnRQYWdlIiwidHZPbiIsInNldFR2T24iLCJ0dkNoYW5uZWwiLCJzZXRUdkNoYW5uZWwiLCJib3hWYXJpYW50cyIsInNldEJveFZhcmlhbnRzIiwiaW5pdGlhbCIsInNjYWxlWCIsInNjYWxlWSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0b2dnbGVUdiIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgxIiwicCIsInNyYyIsImFsdCIsImhlaWdodCIsInNpemVzIiwibG9hZGluZyIsInByaW9yaXR5IiwidmFyaWFudHMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FrontPage/FrontPage.tsx\n"));

/***/ })

});