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

/***/ "./components/AboutMe/Article.tsx":
/*!****************************************!*\
  !*** ./components/AboutMe/Article.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Article = (param)=>{\n    let { title , description , index , handleHover , hovered  } = param;\n    _s();\n    const [translateX, setTranslateX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"lg2:translate-x-0\",\n        \"lg2:translate-x-[-75%]\",\n        \"lg2:translate-x-[-150%]\",\n        \"lg2:translate-x-[-222%]\"\n    ]);\n    const [translateY, setTranslateY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"translate-y-0\",\n        \"translate-y-[-50%]\",\n        \"translate-y-[-120%]\",\n        \"translate-y-[-175%]\"\n    ]);\n    // const x = \"lg2:translate-x-\";\n    const y = \"translate-y-\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hovered === 0) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-8%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 1) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 2) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 3) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-222%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        }\n    }, [\n        hovered\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: ()=>handleHover(index),\n        onMouseLeave: ()=>handleHover(3),\n        className: \"shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-\".concat(index, \" bg-Primary transition-all duration-500 ease-in-out w-full translate-x-0 \").concat(translateX[index]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            // style={{\n            //   paddingRight: index !== 3 ? `9%` : \"0%\",\n            // }}\n            className: \"h-full px-6 pb-4 border-Secondary outline-dotted rounded lg:pr-${index}\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"article-header text-Tertiary text-3xl sm:text-5xl pt-4\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"article-text text-lg lg:text-xl leading-relaxed lg:leading-loose first-letter:text-2xl lg:first-letter:text-4xl\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Article, \"8NP++vufeSSFaFMN44FGhSEDcZs=\");\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article); // first-letter:text-fluid-5xl\n // import React, { useEffect, useState } from \"react\";\n // import { motion } from \"framer-motion\";\n // type ArticleProps = {\n //   title: string;\n //   description: string;\n //   index: number;\n //   handleHover: (index: number) => void;\n //   hovered: number;\n // };\n // const Article = ({\n //   title,\n //   description,\n //   index,\n //   handleHover,\n //   hovered,\n // }: ArticleProps) => {\n //   const [x, setX] = useState<number[]>([0, -75, -150, -222]);\n //   // const [translateX, setTranslateX] = useState<string[]>([\n //   //   `lg2:translate-x-0`,\n //   //   `lg2:translate-x-[-75%]`,\n //   //   `lg2:translate-x-[-150%]`,\n //   //   `lg2:translate-x-[-222%]`,\n //   // ]);\n //   // const [translateY, setTranslateY] = useState<string[]>([\n //   //   `translate-y-0`,\n //   //   `translate-y-[-50%]`,\n //   //   `translate-y-[-120%]`,\n //   //   `translate-y-[-175%]`,\n //   // ]);\n //   // // const x = \"lg2:translate-x-\";\n //   // const Y = \"translate-y-\";\n //   // useEffect(() => {\n //   //   if (hovered === 0) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-8%]`,\n //   //       `lg2:translate-x-[-85%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 1) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-85%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 2) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-150%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 3) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-150%]`,\n //   //       `lg2:translate-x-[-222%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   }\n //   // }, [hovered]);\n //   console.log(hovered);\n //   return (\n //     <motion.div\n //       onMouseOver={() => handleHover(index)}\n //       onMouseLeave={() => handleHover(3)}\n //       className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary`}\n //       // transition={{ type: \"spring\" }}\n //       animate={{ x: x[hovered] }}\n //     >\n //       <div\n //         style={{\n //           paddingRight: index !== 3 ? `9%` : \"0%\",\n //         }}\n //         className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\n //       >\n //         <h1 className=\"article-header text-Tertiary text-3xl sm:text-5xl pt-4\">\n //           {title}\n //         </h1>\n //         <p className=\"article-text  leading-relaxed lg2:leading-loose\">\n //           {description}\n //         </p>\n //       </div>\n //     </motion.div>\n //   );\n // };\n // export default Article;\n // // first-letter:text-fluid-5xl\n // /*\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixrQ0FBa0M7Q0FDbEMsc0NBQXNDO0NBQ3RDLHVDQUF1QztDQUN2Qyx3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNmLGlGQUFpRjtDQUNqRixxQ0FBcUM7Q0FDckMsMkJBQTJCO0NBQzNCLGtDQUFrQztDQUNsQyx1Q0FBdUM7Q0FDdkMsdUNBQXVDO0NBQ3ZDLHdDQUF3QztDQUN4QyxlQUFlO0NBQ2YsaUZBQWlGO0NBQ2pGLHFDQUFxQztDQUNyQywyQkFBMkI7Q0FDM0Isa0NBQWtDO0NBQ2xDLHVDQUF1QztDQUN2Qyx3Q0FBd0M7Q0FDeEMsd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZixpRkFBaUY7Q0FDakYscUNBQXFDO0NBQ3JDLDJCQUEyQjtDQUMzQixrQ0FBa0M7Q0FDbEMsdUNBQXVDO0NBQ3ZDLHdDQUF3QztDQUN4Qyx3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNmLGlGQUFpRjtDQUNqRixXQUFXO0NBQ1gsc0JBQXNCO0NBRXRCLDBCQUEwQjtDQUUxQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLCtDQUErQztDQUMvQyw0Q0FBNEM7Q0FDNUMsc0dBQXNHO0NBQ3RHLDJDQUEyQztDQUMzQyxvQ0FBb0M7Q0FDcEMsUUFBUTtDQUNSLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIscURBQXFEO0NBQ3JELGFBQWE7Q0FDYiwrRUFBK0U7Q0FDL0UsVUFBVTtDQUNWLGtGQUFrRjtDQUNsRixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLDBFQUEwRTtDQUMxRSwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsT0FBTztDQUNQLEtBQUs7Q0FFTCwwQkFBMEI7Q0FFMUIsaUNBQWlDO0NBRWpDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BYm91dE1lL0FydGljbGUudHN4PzBlY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbnR5cGUgQXJ0aWNsZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGhhbmRsZUhvdmVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBob3ZlcmVkOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBpbmRleCxcclxuICBoYW5kbGVIb3ZlcixcclxuICBob3ZlcmVkLFxyXG59OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4gICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuICAgIGBsZzI6dHJhbnNsYXRlLXgtWy03NSVdYCxcclxuICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbiAgICBgbGcyOnRyYW5zbGF0ZS14LVstMjIyJV1gLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZLCBzZXRUcmFuc2xhdGVZXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXHJcbiAgICBgdHJhbnNsYXRlLXktMGAsXHJcbiAgICBgdHJhbnNsYXRlLXktWy01MCVdYCxcclxuICAgIGB0cmFuc2xhdGUteS1bLTEyMCVdYCxcclxuICAgIGB0cmFuc2xhdGUteS1bLTE3NSVdYCxcclxuICBdKTtcclxuXHJcbiAgLy8gY29uc3QgeCA9IFwibGcyOnRyYW5zbGF0ZS14LVwiO1xyXG4gIGNvbnN0IHkgPSBcInRyYW5zbGF0ZS15LVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGhvdmVyZWQgPT09IDApIHtcclxuICAgICAgc2V0VHJhbnNsYXRlWChbXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstOCVdYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstODUlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAxKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy04NSVdYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDIpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlWChbXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE1MCVdYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDMpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlWChbXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE1MCVdYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMjIyJV1gLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9XHJcbiAgfSwgW2hvdmVyZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IGhhbmRsZUhvdmVyKGluZGV4KX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVIb3ZlcigzKX1cclxuICAgICAgY2xhc3NOYW1lPXtgc2hhZG93LWxnIHAtMyBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHJvdW5kZWQtbWQgbGVmdC0wIHotJHtpbmRleH0gYmctUHJpbWFyeSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdy1mdWxsIHRyYW5zbGF0ZS14LTAgJHt0cmFuc2xhdGVYW2luZGV4XX1gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAvLyAgIHBhZGRpbmdSaWdodDogaW5kZXggIT09IDMgPyBgOSVgIDogXCIwJVwiLFxyXG4gICAgICAgIC8vIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgcGItNCBib3JkZXItU2Vjb25kYXJ5IG91dGxpbmUtZG90dGVkIHJvdW5kZWQgbGc6cHItJHtpbmRleH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtVGVydGlhcnkgdGV4dC0zeGwgc206dGV4dC01eGwgcHQtNFwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0IHRleHQtbGcgbGc6dGV4dC14bCAgbGVhZGluZy1yZWxheGVkIGxnOmxlYWRpbmctbG9vc2UgZmlyc3QtbGV0dGVyOnRleHQtMnhsIGxnOmZpcnN0LWxldHRlcjp0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuXHJcbi8vIGZpcnN0LWxldHRlcjp0ZXh0LWZsdWlkLTV4bFxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbi8vIHR5cGUgQXJ0aWNsZVByb3BzID0ge1xyXG4vLyAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuLy8gICBpbmRleDogbnVtYmVyO1xyXG4vLyAgIGhhbmRsZUhvdmVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuLy8gICBob3ZlcmVkOiBudW1iZXI7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBBcnRpY2xlID0gKHtcclxuLy8gICB0aXRsZSxcclxuLy8gICBkZXNjcmlwdGlvbixcclxuLy8gICBpbmRleCxcclxuLy8gICBoYW5kbGVIb3ZlcixcclxuLy8gICBob3ZlcmVkLFxyXG4vLyB9OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuLy8gICBjb25zdCBbeCwgc2V0WF0gPSB1c2VTdGF0ZTxudW1iZXJbXT4oWzAsIC03NSwgLTE1MCwgLTIyMl0pO1xyXG5cclxuLy8gICAvLyBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4vLyAgIC8vICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuLy8gICAvLyAgIGBsZzI6dHJhbnNsYXRlLXgtWy03NSVdYCxcclxuLy8gICAvLyAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbi8vICAgLy8gICBgbGcyOnRyYW5zbGF0ZS14LVstMjIyJV1gLFxyXG4vLyAgIC8vIF0pO1xyXG4vLyAgIC8vIGNvbnN0IFt0cmFuc2xhdGVZLCBzZXRUcmFuc2xhdGVZXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXHJcbi8vICAgLy8gICBgdHJhbnNsYXRlLXktMGAsXHJcbi8vICAgLy8gICBgdHJhbnNsYXRlLXktWy01MCVdYCxcclxuLy8gICAvLyAgIGB0cmFuc2xhdGUteS1bLTEyMCVdYCxcclxuLy8gICAvLyAgIGB0cmFuc2xhdGUteS1bLTE3NSVdYCxcclxuLy8gICAvLyBdKTtcclxuXHJcbi8vICAgLy8gLy8gY29uc3QgeCA9IFwibGcyOnRyYW5zbGF0ZS14LVwiO1xyXG4vLyAgIC8vIGNvbnN0IFkgPSBcInRyYW5zbGF0ZS15LVwiO1xyXG5cclxuLy8gICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIC8vICAgaWYgKGhvdmVyZWQgPT09IDApIHtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWChbXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstOCVdYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstODUlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuLy8gICAvLyAgICAgXSk7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4vLyAgIC8vICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAxKSB7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy04NSVdYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxyXG4vLyAgIC8vICAgICBdKTtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbi8vICAgLy8gICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDIpIHtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWChbXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE1MCVdYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxyXG4vLyAgIC8vICAgICBdKTtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbi8vICAgLy8gICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDMpIHtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWChbXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE1MCVdYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMjIyJV1gLFxyXG4vLyAgIC8vICAgICBdKTtcclxuLy8gICAvLyAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbi8vICAgLy8gICB9XHJcbi8vICAgLy8gfSwgW2hvdmVyZWRdKTtcclxuXHJcbi8vICAgY29uc29sZS5sb2coaG92ZXJlZCk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8bW90aW9uLmRpdlxyXG4vLyAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gaGFuZGxlSG92ZXIoaW5kZXgpfVxyXG4vLyAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUhvdmVyKDMpfVxyXG4vLyAgICAgICBjbGFzc05hbWU9e2BzaGFkb3ctbGcgcC0zIGJvcmRlci0yIGJvcmRlci1TZWNvbmRhcnkgcm91bmRlZC1tZCBsZWZ0LTAgei0ke2luZGV4fSBiZy1QcmltYXJ5YH1cclxuLy8gICAgICAgLy8gdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiIH19XHJcbi8vICAgICAgIGFuaW1hdGU9e3sgeDogeFtob3ZlcmVkXSB9fVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgIHBhZGRpbmdSaWdodDogaW5kZXggIT09IDMgPyBgOSVgIDogXCIwJVwiLFxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgcGItNCBib3JkZXItU2Vjb25kYXJ5IG91dGxpbmUtZG90dGVkIHJvdW5kZWRcIlxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtVGVydGlhcnkgdGV4dC0zeGwgc206dGV4dC01eGwgcHQtNFwiPlxyXG4vLyAgICAgICAgICAge3RpdGxlfVxyXG4vLyAgICAgICAgIDwvaDE+XHJcbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0ICBsZWFkaW5nLXJlbGF4ZWQgbGcyOmxlYWRpbmctbG9vc2VcIj5cclxuLy8gICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuLy8gICAgICAgICA8L3A+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9tb3Rpb24uZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG5cclxuLy8gLy8gZmlyc3QtbGV0dGVyOnRleHQtZmx1aWQtNXhsXHJcblxyXG4vLyAvKlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGljbGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5kZXgiLCJoYW5kbGVIb3ZlciIsImhvdmVyZWQiLCJ0cmFuc2xhdGVYIiwic2V0VHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzZXRUcmFuc2xhdGVZIiwieSIsImRpdiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AboutMe/Article.tsx\n"));

/***/ })

});