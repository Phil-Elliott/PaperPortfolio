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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Article = (param)=>{\n    let { title , description , index , handleHover , hovered  } = param;\n    _s();\n    const [translateX, setTranslateX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"lg2:translate-x-0\",\n        \"lg2:translate-x-[-75%]\",\n        \"lg2:translate-x-[-150%]\",\n        \"lg2:translate-x-[-222%]\"\n    ]);\n    const [translateY, setTranslateY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"translate-y-0\",\n        \"translate-y-[-50%]\",\n        \"translate-y-[-120%]\",\n        \"translate-y-[-175%]\"\n    ]);\n    // const x = \"lg2:translate-x-\";\n    const y = \"translate-y-\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hovered === 0) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-8%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 1) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 2) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 3) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-222%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        }\n    }, [\n        hovered\n    ]);\n    const padding = 96;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: ()=>handleHover(index),\n        onMouseLeave: ()=>handleHover(3),\n        className: \"shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-\".concat(index, \" bg-Primary transition-all duration-500 ease-in-out w-full translate-x-0 \").concat(translateX[index]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            // style={{\n            //   paddingRight: index !== 3 ? `9%` : \"0%\",\n            // }}\n            className: \"h-full px-6 pb-4 border-Secondary outline-dotted rounded pr-\".concat(20),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"article-header text-Tertiary text-3xl sm:text-5xl pt-4\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"article-text text-lg lg:text-xl leading-relaxed lg:leading-loose first-letter:text-2xl lg:first-letter:text-4xl\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\AboutMe\\\\Article.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Article, \"8NP++vufeSSFaFMN44FGhSEDcZs=\");\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article); // first-letter:text-fluid-5xl\n // import React, { useEffect, useState } from \"react\";\n // import { motion } from \"framer-motion\";\n // type ArticleProps = {\n //   title: string;\n //   description: string;\n //   index: number;\n //   handleHover: (index: number) => void;\n //   hovered: number;\n // };\n // const Article = ({\n //   title,\n //   description,\n //   index,\n //   handleHover,\n //   hovered,\n // }: ArticleProps) => {\n //   const [x, setX] = useState<number[]>([0, -75, -150, -222]);\n //   // const [translateX, setTranslateX] = useState<string[]>([\n //   //   `lg2:translate-x-0`,\n //   //   `lg2:translate-x-[-75%]`,\n //   //   `lg2:translate-x-[-150%]`,\n //   //   `lg2:translate-x-[-222%]`,\n //   // ]);\n //   // const [translateY, setTranslateY] = useState<string[]>([\n //   //   `translate-y-0`,\n //   //   `translate-y-[-50%]`,\n //   //   `translate-y-[-120%]`,\n //   //   `translate-y-[-175%]`,\n //   // ]);\n //   // // const x = \"lg2:translate-x-\";\n //   // const Y = \"translate-y-\";\n //   // useEffect(() => {\n //   //   if (hovered === 0) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-8%]`,\n //   //       `lg2:translate-x-[-85%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 1) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-85%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 2) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-150%]`,\n //   //       `lg2:translate-x-[-160%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   } else if (hovered === 3) {\n //   //     setTranslateX([\n //   //       `lg2:translate-x-0`,\n //   //       `lg2:translate-x-[-75%]`,\n //   //       `lg2:translate-x-[-150%]`,\n //   //       `lg2:translate-x-[-222%]`,\n //   //     ]);\n //   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n //   //   }\n //   // }, [hovered]);\n //   console.log(hovered);\n //   return (\n //     <motion.div\n //       onMouseOver={() => handleHover(index)}\n //       onMouseLeave={() => handleHover(3)}\n //       className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary`}\n //       // transition={{ type: \"spring\" }}\n //       animate={{ x: x[hovered] }}\n //     >\n //       <div\n //         style={{\n //           paddingRight: index !== 3 ? `9%` : \"0%\",\n //         }}\n //         className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\n //       >\n //         <h1 className=\"article-header text-Tertiary text-3xl sm:text-5xl pt-4\">\n //           {title}\n //         </h1>\n //         <p className=\"article-text  leading-relaxed lg2:leading-loose\">\n //           {description}\n //         </p>\n //       </div>\n //     </motion.div>\n //   );\n // };\n // export default Article;\n // // first-letter:text-fluid-5xl\n // /*\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0TWUvQXJ0aWNsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBbUQ7QUFXbkQsTUFBTUcsVUFBVSxTQU1JO1FBTkgsRUFDZkMsTUFBSyxFQUNMQyxZQUFXLEVBQ1hDLE1BQUssRUFDTEMsWUFBVyxFQUNYQyxRQUFPLEVBQ007O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFXO1FBQ3BEO1FBQ0E7UUFDQTtRQUNBO0tBQ0Y7SUFDRCxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQVc7UUFDcEQ7UUFDQTtRQUNBO1FBQ0E7S0FDRjtJQUVELGdDQUFnQztJQUNoQyxNQUFNVyxJQUFJO0lBRVZaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTyxZQUFZLEdBQUc7WUFDakJFLGNBQWM7Z0JBQ1g7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRjtZQUNERSxjQUFjO2dCQUFFLEdBQUksT0FBRkMsR0FBRTtnQkFBSyxHQUFJLE9BQUZBLEdBQUU7Z0JBQVUsR0FBSSxPQUFGQSxHQUFFO2dCQUFXLEdBQUksT0FBRkEsR0FBRTthQUFTO1FBQ3JFLE9BQU8sSUFBSUwsWUFBWSxHQUFHO1lBQ3hCRSxjQUFjO2dCQUNYO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0Y7WUFDREUsY0FBYztnQkFBRSxHQUFJLE9BQUZDLEdBQUU7Z0JBQUssR0FBSSxPQUFGQSxHQUFFO2dCQUFVLEdBQUksT0FBRkEsR0FBRTtnQkFBVyxHQUFJLE9BQUZBLEdBQUU7YUFBUztRQUNyRSxPQUFPLElBQUlMLFlBQVksR0FBRztZQUN4QkUsY0FBYztnQkFDWDtnQkFDQTtnQkFDQTtnQkFDQTthQUNGO1lBQ0RFLGNBQWM7Z0JBQUUsR0FBSSxPQUFGQyxHQUFFO2dCQUFLLEdBQUksT0FBRkEsR0FBRTtnQkFBVSxHQUFJLE9BQUZBLEdBQUU7Z0JBQVcsR0FBSSxPQUFGQSxHQUFFO2FBQVM7UUFDckUsT0FBTyxJQUFJTCxZQUFZLEdBQUc7WUFDeEJFLGNBQWM7Z0JBQ1g7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRjtZQUNERSxjQUFjO2dCQUFFLEdBQUksT0FBRkMsR0FBRTtnQkFBSyxHQUFJLE9BQUZBLEdBQUU7Z0JBQVUsR0FBSSxPQUFGQSxHQUFFO2dCQUFXLEdBQUksT0FBRkEsR0FBRTthQUFTO1FBQ3JFLENBQUM7SUFDSCxHQUFHO1FBQUNMO0tBQVE7SUFDWixNQUFNTSxVQUFVO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUNDQyxhQUFhLElBQU1ULFlBQVlEO1FBQy9CVyxjQUFjLElBQU1WLFlBQVk7UUFDaENXLFdBQVcsK0RBQWdKVCxPQUFqRkgsT0FBTSw2RUFBNkYsT0FBbEJHLFVBQVUsQ0FBQ0gsTUFBTTtrQkFFNUssNEVBQUNTO1lBQ0MsV0FBVztZQUNYLDZDQUE2QztZQUM3QyxLQUFLO1lBQ0xHLFdBQVcsK0RBQWtFLE9BQUg7OzhCQUUxRSw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQ1hkOzs7Ozs7OEJBRUgsOERBQUNnQjtvQkFBRUYsV0FBVTs4QkFDVmI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FoRk1GO0tBQUFBO0FBa0ZOLCtEQUFlQSxPQUFPQSxFQUFDLENBRXZCLDhCQUE4QjtDQUU5QixzREFBc0Q7Q0FDdEQsMENBQTBDO0NBRTFDLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQiwwQ0FBMEM7Q0FDMUMscUJBQXFCO0NBQ3JCLEtBQUs7Q0FFTCxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsZ0VBQWdFO0NBRWhFLGdFQUFnRTtDQUNoRSw4QkFBOEI7Q0FDOUIsbUNBQW1DO0NBQ25DLG9DQUFvQztDQUNwQyxvQ0FBb0M7Q0FDcEMsV0FBVztDQUNYLGdFQUFnRTtDQUNoRSwwQkFBMEI7Q0FDMUIsK0JBQStCO0NBQy9CLGdDQUFnQztDQUNoQyxnQ0FBZ0M7Q0FDaEMsV0FBVztDQUVYLHdDQUF3QztDQUN4QyxpQ0FBaUM7Q0FFakMseUJBQXlCO0NBQ3pCLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0Isa0NBQWtDO0NBQ2xDLHNDQUFzQztDQUN0Qyx1Q0FBdUM7Q0FDdkMsd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZixpRkFBaUY7Q0FDakYscUNBQXFDO0NBQ3JDLDJCQUEyQjtDQUMzQixrQ0FBa0M7Q0FDbEMsdUNBQXVDO0NBQ3ZDLHVDQUF1QztDQUN2Qyx3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNmLGlGQUFpRjtDQUNqRixxQ0FBcUM7Q0FDckMsMkJBQTJCO0NBQzNCLGtDQUFrQztDQUNsQyx1Q0FBdUM7Q0FDdkMsd0NBQXdDO0NBQ3hDLHdDQUF3QztDQUN4QyxlQUFlO0NBQ2YsaUZBQWlGO0NBQ2pGLHFDQUFxQztDQUNyQywyQkFBMkI7Q0FDM0Isa0NBQWtDO0NBQ2xDLHVDQUF1QztDQUN2Qyx3Q0FBd0M7Q0FDeEMsd0NBQXdDO0NBQ3hDLGVBQWU7Q0FDZixpRkFBaUY7Q0FDakYsV0FBVztDQUNYLHNCQUFzQjtDQUV0QiwwQkFBMEI7Q0FFMUIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiwrQ0FBK0M7Q0FDL0MsNENBQTRDO0NBQzVDLHNHQUFzRztDQUN0RywyQ0FBMkM7Q0FDM0Msb0NBQW9DO0NBQ3BDLFFBQVE7Q0FDUixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFEQUFxRDtDQUNyRCxhQUFhO0NBQ2IsK0VBQStFO0NBQy9FLFVBQVU7Q0FDVixrRkFBa0Y7Q0FDbEYsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQiwwRUFBMEU7Q0FDMUUsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLE9BQU87Q0FDUCxLQUFLO0NBRUwsMEJBQTBCO0NBRTFCLGlDQUFpQztDQUVqQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXRNZS9BcnRpY2xlLnRzeD8wZWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG50eXBlIEFydGljbGVQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBoYW5kbGVIb3ZlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaG92ZXJlZDogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaW5kZXgsXHJcbiAgaGFuZGxlSG92ZXIsXHJcbiAgaG92ZXJlZCxcclxufTogQXJ0aWNsZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcclxuICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbiAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbiAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTUwJV1gLFxyXG4gICAgYGxnMjp0cmFuc2xhdGUteC1bLTIyMiVdYCxcclxuICBdKTtcclxuICBjb25zdCBbdHJhbnNsYXRlWSwgc2V0VHJhbnNsYXRlWV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4gICAgYHRyYW5zbGF0ZS15LTBgLFxyXG4gICAgYHRyYW5zbGF0ZS15LVstNTAlXWAsXHJcbiAgICBgdHJhbnNsYXRlLXktWy0xMjAlXWAsXHJcbiAgICBgdHJhbnNsYXRlLXktWy0xNzUlXWAsXHJcbiAgXSk7XHJcblxyXG4gIC8vIGNvbnN0IHggPSBcImxnMjp0cmFuc2xhdGUteC1cIjtcclxuICBjb25zdCB5ID0gXCJ0cmFuc2xhdGUteS1cIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChob3ZlcmVkID09PSAwKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTglXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTg1JV1gLFxyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNjAlXWAsXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMSkge1xyXG4gICAgICBzZXRUcmFuc2xhdGVYKFtcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LTBgLFxyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy03NSVdYCxcclxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstODUlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAyKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAzKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTIyMiVdYCxcclxuICAgICAgXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfVxyXG4gIH0sIFtob3ZlcmVkXSk7XHJcbiAgY29uc3QgcGFkZGluZyA9IDk2O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpbmRleCl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlSG92ZXIoMyl9XHJcbiAgICAgIGNsYXNzTmFtZT17YHNoYWRvdy1sZyBwLTMgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSByb3VuZGVkLW1kIGxlZnQtMCB6LSR7aW5kZXh9IGJnLVByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHctZnVsbCB0cmFuc2xhdGUteC0wICR7dHJhbnNsYXRlWFtpbmRleF19YH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIC8vIHN0eWxlPXt7XHJcbiAgICAgICAgLy8gICBwYWRkaW5nUmlnaHQ6IGluZGV4ICE9PSAzID8gYDklYCA6IFwiMCVcIixcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGgtZnVsbCBweC02IHBiLTQgYm9yZGVyLVNlY29uZGFyeSBvdXRsaW5lLWRvdHRlZCByb3VuZGVkIHByLSR7MjB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciB0ZXh0LVRlcnRpYXJ5IHRleHQtM3hsIHNtOnRleHQtNXhsIHB0LTRcIj5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCB0ZXh0LWxnIGxnOnRleHQteGwgIGxlYWRpbmctcmVsYXhlZCBsZzpsZWFkaW5nLWxvb3NlIGZpcnN0LWxldHRlcjp0ZXh0LTJ4bCBsZzpmaXJzdC1sZXR0ZXI6dGV4dC00eGxcIj5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XHJcblxyXG4vLyBmaXJzdC1sZXR0ZXI6dGV4dC1mbHVpZC01eGxcclxuXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG4vLyB0eXBlIEFydGljbGVQcm9wcyA9IHtcclxuLy8gICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbi8vICAgaW5kZXg6IG51bWJlcjtcclxuLy8gICBoYW5kbGVIb3ZlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbi8vICAgaG92ZXJlZDogbnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgQXJ0aWNsZSA9ICh7XHJcbi8vICAgdGl0bGUsXHJcbi8vICAgZGVzY3JpcHRpb24sXHJcbi8vICAgaW5kZXgsXHJcbi8vICAgaGFuZGxlSG92ZXIsXHJcbi8vICAgaG92ZXJlZCxcclxuLy8gfTogQXJ0aWNsZVByb3BzKSA9PiB7XHJcbi8vICAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGU8bnVtYmVyW10+KFswLCAtNzUsIC0xNTAsIC0yMjJdKTtcclxuXHJcbi8vICAgLy8gY29uc3QgW3RyYW5zbGF0ZVgsIHNldFRyYW5zbGF0ZVhdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcclxuLy8gICAvLyAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbi8vICAgLy8gICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXHJcbi8vICAgLy8gICBgbGcyOnRyYW5zbGF0ZS14LVstMTUwJV1gLFxyXG4vLyAgIC8vICAgYGxnMjp0cmFuc2xhdGUteC1bLTIyMiVdYCxcclxuLy8gICAvLyBdKTtcclxuLy8gICAvLyBjb25zdCBbdHJhbnNsYXRlWSwgc2V0VHJhbnNsYXRlWV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4vLyAgIC8vICAgYHRyYW5zbGF0ZS15LTBgLFxyXG4vLyAgIC8vICAgYHRyYW5zbGF0ZS15LVstNTAlXWAsXHJcbi8vICAgLy8gICBgdHJhbnNsYXRlLXktWy0xMjAlXWAsXHJcbi8vICAgLy8gICBgdHJhbnNsYXRlLXktWy0xNzUlXWAsXHJcbi8vICAgLy8gXSk7XHJcblxyXG4vLyAgIC8vIC8vIGNvbnN0IHggPSBcImxnMjp0cmFuc2xhdGUteC1cIjtcclxuLy8gICAvLyBjb25zdCBZID0gXCJ0cmFuc2xhdGUteS1cIjtcclxuXHJcbi8vICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAvLyAgIGlmIChob3ZlcmVkID09PSAwKSB7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTglXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTg1JV1gLFxyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNjAlXWAsXHJcbi8vICAgLy8gICAgIF0pO1xyXG4vLyAgIC8vICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuLy8gICAvLyAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMSkge1xyXG4vLyAgIC8vICAgICBzZXRUcmFuc2xhdGVYKFtcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LTBgLFxyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy03NSVdYCxcclxuLy8gICAvLyAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstODUlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuLy8gICAvLyAgICAgXSk7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4vLyAgIC8vICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAyKSB7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcclxuLy8gICAvLyAgICAgXSk7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4vLyAgIC8vICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAzKSB7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVgoW1xyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxyXG4vLyAgIC8vICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXHJcbi8vICAgLy8gICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTIyMiVdYCxcclxuLy8gICAvLyAgICAgXSk7XHJcbi8vICAgLy8gICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4vLyAgIC8vICAgfVxyXG4vLyAgIC8vIH0sIFtob3ZlcmVkXSk7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGhvdmVyZWQpO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPG1vdGlvbi5kaXZcclxuLy8gICAgICAgb25Nb3VzZU92ZXI9eygpID0+IGhhbmRsZUhvdmVyKGluZGV4KX1cclxuLy8gICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVIb3ZlcigzKX1cclxuLy8gICAgICAgY2xhc3NOYW1lPXtgc2hhZG93LWxnIHAtMyBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHJvdW5kZWQtbWQgbGVmdC0wIHotJHtpbmRleH0gYmctUHJpbWFyeWB9XHJcbi8vICAgICAgIC8vIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiB9fVxyXG4vLyAgICAgICBhbmltYXRlPXt7IHg6IHhbaG92ZXJlZF0gfX1cclxuLy8gICAgID5cclxuLy8gICAgICAgPGRpdlxyXG4vLyAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IGluZGV4ICE9PSAzID8gYDklYCA6IFwiMCVcIixcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBweC02IHBiLTQgYm9yZGVyLVNlY29uZGFyeSBvdXRsaW5lLWRvdHRlZCByb3VuZGVkXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciB0ZXh0LVRlcnRpYXJ5IHRleHQtM3hsIHNtOnRleHQtNXhsIHB0LTRcIj5cclxuLy8gICAgICAgICAgIHt0aXRsZX1cclxuLy8gICAgICAgICA8L2gxPlxyXG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCAgbGVhZGluZy1yZWxheGVkIGxnMjpsZWFkaW5nLWxvb3NlXCI+XHJcbi8vICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbi8vICAgICAgICAgPC9wPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvbW90aW9uLmRpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuXHJcbi8vIC8vIGZpcnN0LWxldHRlcjp0ZXh0LWZsdWlkLTV4bFxyXG5cclxuLy8gLypcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpY2xlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZGV4IiwiaGFuZGxlSG92ZXIiLCJob3ZlcmVkIiwidHJhbnNsYXRlWCIsInNldFRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2V0VHJhbnNsYXRlWSIsInkiLCJwYWRkaW5nIiwiZGl2Iiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AboutMe/Article.tsx\n"));

/***/ })

});