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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Article = (param)=>{\n    let { title , description , index , handleHover , hovered  } = param;\n    _s();\n    const [translateX, setTranslateX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"lg2:translate-x-0\",\n        \"lg2:translate-x-[-75%]\",\n        \"lg2:translate-x-[-150%]\",\n        \"lg2:translate-x-[-222%]\"\n    ]);\n    const [translateY, setTranslateY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"translate-y-0\",\n        \"translate-y-[-50%]\",\n        \"translate-y-[-120%]\",\n        \"translate-y-[-175%]\"\n    ]);\n    // const x = \"lg2:translate-x-\";\n    const y = \"translate-y-\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hovered === 0) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-8%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"$lg2:translate-x-[-160%]\"\n            ]);\n        // setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\n        } else if (hovered === 1) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-85%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 2) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-160%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        } else if (hovered === 3) {\n            setTranslateX([\n                \"lg2:translate-x-0\",\n                \"lg2:translate-x-[-75%]\",\n                \"lg2:translate-x-[-150%]\",\n                \"lg2:translate-x-[-222%]\"\n            ]);\n            setTranslateY([\n                \"\".concat(y, \"0\"),\n                \"\".concat(y, \"[-50%]\"),\n                \"\".concat(y, \"[-120%]\"),\n                \"\".concat(y, \"[-175%]\")\n            ]);\n        }\n        console.log(hovered);\n    }, [\n        hovered\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseOver: ()=>handleHover(index),\n        onMouseLeave: ()=>handleHover(3),\n        className: \"shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-\".concat(index, \" bg-Primary transition-all duration-500 ease-in-out w-full translate-x-0 \").concat(translateX[index], \" \").concat(translateY[index], \" lg2:translate-y-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                paddingRight: index !== 3 ? \"9%\" : \"\"\n            },\n            className: \"h-full px-6 pb-4 border-Secondary outline-dotted rounded\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"article-header text-Tertiary text-3xl sm:text-6xl\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/portfolio-projects/updated/PaperPortfolio/components/AboutMe/Article.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/portfolio-projects/updated/PaperPortfolio/components/AboutMe/Article.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/portfolio-projects/updated/PaperPortfolio/components/AboutMe/Article.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/portfolio-projects/updated/PaperPortfolio/components/AboutMe/Article.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Article, \"Vl+0N0RObUxMZOtE4Aq8icxU2gE=\");\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0TWUvQXJ0aWNsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBbUQ7QUFVbkQsTUFBTUcsVUFBVSxTQU1JO1FBTkgsRUFDZkMsTUFBSyxFQUNMQyxZQUFXLEVBQ1hDLE1BQUssRUFDTEMsWUFBVyxFQUNYQyxRQUFPLEVBQ007O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFXO1FBQ3BEO1FBQ0E7UUFDQTtRQUNBO0tBQ0Y7SUFDRCxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQVc7UUFDcEQ7UUFDQTtRQUNBO1FBQ0E7S0FDRjtJQUVELGdDQUFnQztJQUNoQyxNQUFNVyxJQUFJO0lBRVZaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTyxZQUFZLEdBQUc7WUFDakJFLGNBQWM7Z0JBQ1g7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRjtRQUNELHdFQUF3RTtRQUMxRSxPQUFPLElBQUlGLFlBQVksR0FBRztZQUN4QkUsY0FBYztnQkFDWDtnQkFDQTtnQkFDQTtnQkFDQTthQUNGO1lBQ0RFLGNBQWM7Z0JBQUUsR0FBSSxPQUFGQyxHQUFFO2dCQUFLLEdBQUksT0FBRkEsR0FBRTtnQkFBVSxHQUFJLE9BQUZBLEdBQUU7Z0JBQVcsR0FBSSxPQUFGQSxHQUFFO2FBQVM7UUFDckUsT0FBTyxJQUFJTCxZQUFZLEdBQUc7WUFDeEJFLGNBQWM7Z0JBQ1g7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRjtZQUNERSxjQUFjO2dCQUFFLEdBQUksT0FBRkMsR0FBRTtnQkFBSyxHQUFJLE9BQUZBLEdBQUU7Z0JBQVUsR0FBSSxPQUFGQSxHQUFFO2dCQUFXLEdBQUksT0FBRkEsR0FBRTthQUFTO1FBQ3JFLE9BQU8sSUFBSUwsWUFBWSxHQUFHO1lBQ3hCRSxjQUFjO2dCQUNYO2dCQUNBO2dCQUNBO2dCQUNBO2FBQ0Y7WUFDREUsY0FBYztnQkFBRSxHQUFJLE9BQUZDLEdBQUU7Z0JBQUssR0FBSSxPQUFGQSxHQUFFO2dCQUFVLEdBQUksT0FBRkEsR0FBRTtnQkFBVyxHQUFJLE9BQUZBLEdBQUU7YUFBUztRQUNyRSxDQUFDO1FBQ0RDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDZCxHQUFHO1FBQUNBO0tBQVE7SUFFWixxQkFDRSw4REFBQ1E7UUFDQ0MsYUFBYSxJQUFNVixZQUFZRDtRQUMvQlksY0FBYyxJQUFNWCxZQUFZO1FBQ2hDWSxXQUFXLCtEQUFnSlYsT0FBakZILE9BQU0sNkVBQWdHSyxPQUFyQkYsVUFBVSxDQUFDSCxNQUFNLEVBQUMsS0FBcUIsT0FBbEJLLFVBQVUsQ0FBQ0wsTUFBTSxFQUFDO2tCQUVsTSw0RUFBQ1U7WUFDQ0ksT0FBTztnQkFDTEMsY0FBY2YsVUFBVSxJQUFLLE9BQU0sRUFBRTtZQUN2QztZQUNBYSxXQUFVOzs4QkFFViw4REFBQ0c7b0JBQUdILFdBQVU7OEJBQ1hmOzs7Ozs7OEJBRUgsOERBQUNtQjtvQkFBRUosV0FBVTs4QkFDVmQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FqRk1GO0tBQUFBO0FBbUZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXRNZS9BcnRpY2xlLnRzeD8wZWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgQXJ0aWNsZVByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICBoYW5kbGVIb3ZlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIGhvdmVyZWQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IEFydGljbGUgPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGluZGV4LFxuICBoYW5kbGVIb3ZlcixcbiAgaG92ZXJlZCxcbn06IEFydGljbGVQcm9wcykgPT4ge1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xuICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXG4gICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxuICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXG4gICAgYGxnMjp0cmFuc2xhdGUteC1bLTIyMiVdYCxcbiAgXSk7XG4gIGNvbnN0IFt0cmFuc2xhdGVZLCBzZXRUcmFuc2xhdGVZXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXG4gICAgYHRyYW5zbGF0ZS15LTBgLFxuICAgIGB0cmFuc2xhdGUteS1bLTUwJV1gLFxuICAgIGB0cmFuc2xhdGUteS1bLTEyMCVdYCxcbiAgICBgdHJhbnNsYXRlLXktWy0xNzUlXWAsXG4gIF0pO1xuXG4gIC8vIGNvbnN0IHggPSBcImxnMjp0cmFuc2xhdGUteC1cIjtcbiAgY29uc3QgeSA9IFwidHJhbnNsYXRlLXktXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaG92ZXJlZCA9PT0gMCkge1xuICAgICAgc2V0VHJhbnNsYXRlWChbXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtMGAsXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy04JV1gLFxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstODUlXWAsXG4gICAgICAgIGAkbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxuICAgICAgXSk7XG4gICAgICAvLyBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDEpIHtcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LTBgLFxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy04NSVdYCxcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTE2MCVdYCxcbiAgICAgIF0pO1xuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAyKSB7XG4gICAgICBzZXRUcmFuc2xhdGVYKFtcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC0wYCxcbiAgICAgICAgYGxnMjp0cmFuc2xhdGUteC1bLTc1JV1gLFxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTUwJV1gLFxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstMTYwJV1gLFxuICAgICAgXSk7XG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDMpIHtcbiAgICAgIHNldFRyYW5zbGF0ZVgoW1xuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LTBgLFxuICAgICAgICBgbGcyOnRyYW5zbGF0ZS14LVstNzUlXWAsXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0xNTAlXWAsXG4gICAgICAgIGBsZzI6dHJhbnNsYXRlLXgtWy0yMjIlXWAsXG4gICAgICBdKTtcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhob3ZlcmVkKTtcbiAgfSwgW2hvdmVyZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpbmRleCl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUhvdmVyKDMpfVxuICAgICAgY2xhc3NOYW1lPXtgc2hhZG93LWxnIHAtMyBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHJvdW5kZWQtbWQgbGVmdC0wIHotJHtpbmRleH0gYmctUHJpbWFyeSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdy1mdWxsIHRyYW5zbGF0ZS14LTAgJHt0cmFuc2xhdGVYW2luZGV4XX0gJHt0cmFuc2xhdGVZW2luZGV4XX0gbGcyOnRyYW5zbGF0ZS15LTBgfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IGluZGV4ICE9PSAzID8gYDklYCA6IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBweC02IHBiLTQgYm9yZGVyLVNlY29uZGFyeSBvdXRsaW5lLWRvdHRlZCByb3VuZGVkXCJcbiAgICAgID5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtVGVydGlhcnkgdGV4dC0zeGwgc206dGV4dC02eGxcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCBmaXJzdC1sZXR0ZXI6dGV4dC1mbHVpZC01eGwgbGcyOmZpcnN0LWxldHRlcjp0ZXh0LTZ4bCBsZWFkaW5nLXJlbGF4ZWQgbGcyOmxlYWRpbmctbG9vc2VcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aWNsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImhhbmRsZUhvdmVyIiwiaG92ZXJlZCIsInRyYW5zbGF0ZVgiLCJzZXRUcmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNldFRyYW5zbGF0ZVkiLCJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AboutMe/Article.tsx\n"));

/***/ })

});