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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/FrontPageImage.png */ \"./assets/images/FrontPageImage.png\");\n\n\n\n\nconst FrontPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-6 border-y-2 border-Secondary flex gap-x-8 grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-r-2 border-Border w-2/3 pr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"article-header\",\n                        children: \"Aspiring Frontend Developer Seeking First Dev Role\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"article-text text-justify\",\n                        children: \"Hello! I am a frontend developer with a strong foundation in HTML, CSS, and JavaScript. I am passionate about creating user-friendly and visually appealing websites, and I am always looking to improve my skills and stay up-to-date with the latest technologies. I am eager to put my skills to work and contribute to a dev team as a frontend developer. Please take a look at my portfolio to see some of my work, and dont hesitate to get in touch if you have any questions about my experience or abilities.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grayscale mix-blend-multiply border-2 border-Border rounded shadow-md w-2/5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"FrontPageImage\",\n                    fill: true,\n                    className: \"object-cover object-bottom\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FrontPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontPage); /*\r\n  Can make a headline component\r\n  Can also make a component for the first letter of the text so that it can be styled differently on left\r\n\r\n\r\n   Cartoonize your image here (you in front of a computer)\r\n     https://www.befunky.com/create/photo-to-cartoon/\r\n*/  /*\r\n\r\n\r\nimport React, { useEffect, useState } from \"react\";\r\n\r\ntype ArticleProps = {\r\n  title: string;\r\n  description: string;\r\n  index: number;\r\n  handleHover: (index: number) => void;\r\n  hovered: number;\r\n};\r\n\r\nconst Article = ({\r\n  title,\r\n  description,\r\n  index,\r\n  handleHover,\r\n  hovered,\r\n}: ArticleProps) => {\r\n  const x = \"lg2:translate-x-\";\r\n  const y = \"translate-y-\";\r\n\r\n  const [translate, setTranslate] = useState<string[]>([\r\n    `${x}0`,\r\n    `${x}[-75%]`,\r\n    `${x}[-150%]`,\r\n    `${x}[-222%]`,\r\n  ]);\r\n  const [translateY, setTranslateY] = useState<string[]>([\r\n    `${y}0`,\r\n    `${y}[-50%]`,\r\n    `${y}[-120%]`,\r\n    `${y}[-175%]`,\r\n  ]);\r\n\r\n  useEffect(() => {\r\n    if (hovered === 0) {\r\n      setTranslate([`${x}0`, `${x}[-8%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 1) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 2) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 3) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-222%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    }\r\n    console.log(hovered);\r\n  }, [hovered]);\r\n\r\n  return (\r\n    <div\r\n      onMouseOver={() => handleHover(index)}\r\n      onMouseLeave={() => handleHover(3)}\r\n      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full ${translate[index]} ${translateY[index]} lg2:translate-y-0`}\r\n    >\r\n      <div\r\n        style={{\r\n          paddingRight: index !== 3 ? `9%` : \"\",\r\n        }}\r\n        className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\r\n      >\r\n        <h1 className=\"article-header text-Tertiary text-3xl sm:text-6xl\">\r\n          {title}\r\n        </h1>\r\n        <p className=\"article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose\">\r\n          {description}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Article;\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"FrontPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zyb250UGFnZS9Gcm9udFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUNxQztBQUVwRSxNQUFNRyxZQUFZLElBQU07SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFpQjs7Ozs7O2tDQUcvQiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7MEJBVzNDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0osbURBQUtBO29CQUNKTyxLQUFLTix5RUFBY0E7b0JBQ25CTyxLQUFJO29CQUNKQyxJQUFJO29CQUNKTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtLQTVCTUY7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMsQ0FFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlLnRzeD9kMzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBGcm9udFBhZ2VJbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Gcm9udFBhZ2VJbWFnZS5wbmdcIjtcclxuXHJcbmNvbnN0IEZyb250UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS02IGJvcmRlci15LTIgYm9yZGVyLVNlY29uZGFyeSBmbGV4IGdhcC14LTggZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci0yIGJvcmRlci1Cb3JkZXIgdy0yLzMgcHItOFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlclwiPlxyXG4gICAgICAgICAgQXNwaXJpbmcgRnJvbnRlbmQgRGV2ZWxvcGVyIFNlZWtpbmcgRmlyc3QgRGV2IFJvbGVcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgIEhlbGxvISBJIGFtIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgZm91bmRhdGlvbiBpbiBIVE1MLFxyXG4gICAgICAgICAgQ1NTLCBhbmQgSmF2YVNjcmlwdC4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHVzZXItZnJpZW5kbHkgYW5kXHJcbiAgICAgICAgICB2aXN1YWxseSBhcHBlYWxpbmcgd2Vic2l0ZXMsIGFuZCBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGltcHJvdmUgbXlcclxuICAgICAgICAgIHNraWxscyBhbmQgc3RheSB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMuIEkgYW0gZWFnZXIgdG9cclxuICAgICAgICAgIHB1dCBteSBza2lsbHMgdG8gd29yayBhbmQgY29udHJpYnV0ZSB0byBhIGRldiB0ZWFtIGFzIGEgZnJvbnRlbmRcclxuICAgICAgICAgIGRldmVsb3Blci4gUGxlYXNlIHRha2UgYSBsb29rIGF0IG15IHBvcnRmb2xpbyB0byBzZWUgc29tZSBvZiBteSB3b3JrLFxyXG4gICAgICAgICAgYW5kIGRvbnQgaGVzaXRhdGUgdG8gZ2V0IGluIHRvdWNoIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgbXlcclxuICAgICAgICAgIGV4cGVyaWVuY2Ugb3IgYWJpbGl0aWVzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JheXNjYWxlIG1peC1ibGVuZC1tdWx0aXBseSBib3JkZXItMiBib3JkZXItQm9yZGVyIHJvdW5kZWQgc2hhZG93LW1kIHctMi81XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e0Zyb250UGFnZUltYWdlfVxyXG4gICAgICAgICAgYWx0PVwiRnJvbnRQYWdlSW1hZ2VcIlxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1ib3R0b21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb250UGFnZTtcclxuXHJcbi8qXHJcbiAgQ2FuIG1ha2UgYSBoZWFkbGluZSBjb21wb25lbnRcclxuICBDYW4gYWxzbyBtYWtlIGEgY29tcG9uZW50IGZvciB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHN0eWxlZCBkaWZmZXJlbnRseSBvbiBsZWZ0XHJcblxyXG5cclxuICAgQ2FydG9vbml6ZSB5b3VyIGltYWdlIGhlcmUgKHlvdSBpbiBmcm9udCBvZiBhIGNvbXB1dGVyKVxyXG4gICAgIGh0dHBzOi8vd3d3LmJlZnVua3kuY29tL2NyZWF0ZS9waG90by10by1jYXJ0b29uL1xyXG4qL1xyXG5cclxuLypcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBBcnRpY2xlUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgaGFuZGxlSG92ZXI6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhvdmVyZWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGluZGV4LFxyXG4gIGhhbmRsZUhvdmVyLFxyXG4gIGhvdmVyZWQsXHJcbn06IEFydGljbGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHggPSBcImxnMjp0cmFuc2xhdGUteC1cIjtcclxuICBjb25zdCB5ID0gXCJ0cmFuc2xhdGUteS1cIjtcclxuXHJcbiAgY29uc3QgW3RyYW5zbGF0ZSwgc2V0VHJhbnNsYXRlXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXHJcbiAgICBgJHt4fTBgLFxyXG4gICAgYCR7eH1bLTc1JV1gLFxyXG4gICAgYCR7eH1bLTE1MCVdYCxcclxuICAgIGAke3h9Wy0yMjIlXWAsXHJcbiAgXSk7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZVksIHNldFRyYW5zbGF0ZVldID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcclxuICAgIGAke3l9MGAsXHJcbiAgICBgJHt5fVstNTAlXWAsXHJcbiAgICBgJHt5fVstMTIwJV1gLFxyXG4gICAgYCR7eX1bLTE3NSVdYCxcclxuICBdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChob3ZlcmVkID09PSAwKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZShbYCR7eH0wYCwgYCR7eH1bLTglXWAsIGAke3h9Wy04NSVdYCwgYCR7eH1bLTE2MCVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMSkge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy03NSVdYCwgYCR7eH1bLTg1JV1gLCBgJHt4fVstMTYwJV1gXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAyKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZShbYCR7eH0wYCwgYCR7eH1bLTc1JV1gLCBgJHt4fVstMTUwJV1gLCBgJHt4fVstMTYwJV1gXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAzKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZShbYCR7eH0wYCwgYCR7eH1bLTc1JV1gLCBgJHt4fVstMTUwJV1gLCBgJHt4fVstMjIyJV1gXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaG92ZXJlZCk7XHJcbiAgfSwgW2hvdmVyZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IGhhbmRsZUhvdmVyKGluZGV4KX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVIb3ZlcigzKX1cclxuICAgICAgY2xhc3NOYW1lPXtgc2hhZG93LWxnIHAtMyBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHJvdW5kZWQtbWQgbGVmdC0wIHotJHtpbmRleH0gYmctUHJpbWFyeSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdy1mdWxsICR7dHJhbnNsYXRlW2luZGV4XX0gJHt0cmFuc2xhdGVZW2luZGV4XX0gbGcyOnRyYW5zbGF0ZS15LTBgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmdSaWdodDogaW5kZXggIT09IDMgPyBgOSVgIDogXCJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBweC02IHBiLTQgYm9yZGVyLVNlY29uZGFyeSBvdXRsaW5lLWRvdHRlZCByb3VuZGVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciB0ZXh0LVRlcnRpYXJ5IHRleHQtM3hsIHNtOnRleHQtNnhsXCI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLXRleHQgZmlyc3QtbGV0dGVyOnRleHQtZmx1aWQtNXhsIGxnMjpmaXJzdC1sZXR0ZXI6dGV4dC02eGwgbGVhZGluZy1yZWxheGVkIGxnMjpsZWFkaW5nLWxvb3NlXCI+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG5cclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiRnJvbnRQYWdlSW1hZ2UiLCJGcm9udFBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzcmMiLCJhbHQiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FrontPage/FrontPage.tsx\n"));

/***/ })

});