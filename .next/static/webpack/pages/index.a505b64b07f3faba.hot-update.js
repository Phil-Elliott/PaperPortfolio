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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/FrontPageImage.png */ \"./assets/images/FrontPageImage.png\");\n\n\n\n\nconst FrontPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-6 border-y-2 border-Secondary gap-x-8 grid lg:grid-cols-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:border-r-2 border-Border lg:pr-8 col-span-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"article-header lg:text-5xl text-fluid-5xl leading-relaxed\",\n                        children: \"Aspiring Frontend Developer Seeking First Dev Role\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"article-text text-justify\",\n                        children: \"Hello! I am a frontend developer with a strong foundation in HTML, CSS, and JavaScript. I am passionate about creating user-friendly and visually appealing websites, and I am always looking to improve my skills and stay up-to-date with the latest technologies. I am eager to put my skills to work and contribute to a dev team as a frontend developer. Please take a look at my portfolio to see some of my work, and don't hesitate to get in touch if you have any questions about my experience or abilities.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:inline relative grayscale mix-blend-multiply border-2 border-Border rounded shadow-md col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"FrontPageImage\",\n                    fill: true,\n                    className: \"object-cover object-bottom\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FrontPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontPage); /*\r\n  Can make a headline component\r\n  Can also make a component for the first letter of the text so that it can be styled differently on left\r\n\r\n\r\n   Cartoonize your image here (you in front of a computer)\r\n     https://www.befunky.com/create/photo-to-cartoon/\r\n*/  /*\r\n\r\n\r\nimport React, { useEffect, useState } from \"react\";\r\n\r\ntype ArticleProps = {\r\n  title: string;\r\n  description: string;\r\n  index: number;\r\n  handleHover: (index: number) => void;\r\n  hovered: number;\r\n};\r\n\r\nconst Article = ({\r\n  title,\r\n  description,\r\n  index,\r\n  handleHover,\r\n  hovered,\r\n}: ArticleProps) => {\r\n  const x = \"lg2:translate-x-\";\r\n  const y = \"translate-y-\";\r\n\r\n  const [translate, setTranslate] = useState<string[]>([\r\n    `${x}0`,\r\n    `${x}[-75%]`,\r\n    `${x}[-150%]`,\r\n    `${x}[-222%]`,\r\n  ]);\r\n  const [translateY, setTranslateY] = useState<string[]>([\r\n    `${y}0`,\r\n    `${y}[-50%]`,\r\n    `${y}[-120%]`,\r\n    `${y}[-175%]`,\r\n  ]);\r\n\r\n  useEffect(() => {\r\n    if (hovered === 0) {\r\n      setTranslate([`${x}0`, `${x}[-8%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 1) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 2) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 3) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-222%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    }\r\n    console.log(hovered);\r\n  }, [hovered]);\r\n\r\n  return (\r\n    <div\r\n      onMouseOver={() => handleHover(index)}\r\n      onMouseLeave={() => handleHover(3)}\r\n      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full ${translate[index]} ${translateY[index]} lg2:translate-y-0`}\r\n    >\r\n      <div\r\n        style={{\r\n          paddingRight: index !== 3 ? `9%` : \"\",\r\n        }}\r\n        className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\r\n      >\r\n        <h1 className=\"article-header text-Tertiary text-3xl sm:text-6xl\">\r\n          {title}\r\n        </h1>\r\n        <p className=\"article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose\">\r\n          {description}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Article;\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"FrontPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zyb250UGFnZS9Gcm9udFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUNxQztBQUVwRSxNQUFNRyxZQUFZLElBQU07SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE0RDs7Ozs7O2tDQUcxRSw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7MEJBVzNDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0osbURBQUtBO29CQUNKTyxLQUFLTix5RUFBY0E7b0JBQ25CTyxLQUFJO29CQUNKQyxJQUFJO29CQUNKTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtLQTVCTUY7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMsQ0FFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlLnRzeD9kMzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBGcm9udFBhZ2VJbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Gcm9udFBhZ2VJbWFnZS5wbmdcIjtcclxuXHJcbmNvbnN0IEZyb250UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS02IGJvcmRlci15LTIgYm9yZGVyLVNlY29uZGFyeSBnYXAteC04IGdyaWQgbGc6Z3JpZC1jb2xzLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpib3JkZXItci0yIGJvcmRlci1Cb3JkZXIgbGc6cHItOCBjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIGxnOnRleHQtNXhsIHRleHQtZmx1aWQtNXhsIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgQXNwaXJpbmcgRnJvbnRlbmQgRGV2ZWxvcGVyIFNlZWtpbmcgRmlyc3QgRGV2IFJvbGVcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgIEhlbGxvISBJIGFtIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgZm91bmRhdGlvbiBpbiBIVE1MLFxyXG4gICAgICAgICAgQ1NTLCBhbmQgSmF2YVNjcmlwdC4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHVzZXItZnJpZW5kbHkgYW5kXHJcbiAgICAgICAgICB2aXN1YWxseSBhcHBlYWxpbmcgd2Vic2l0ZXMsIGFuZCBJIGFtIGFsd2F5cyBsb29raW5nIHRvIGltcHJvdmUgbXlcclxuICAgICAgICAgIHNraWxscyBhbmQgc3RheSB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMuIEkgYW0gZWFnZXIgdG9cclxuICAgICAgICAgIHB1dCBteSBza2lsbHMgdG8gd29yayBhbmQgY29udHJpYnV0ZSB0byBhIGRldiB0ZWFtIGFzIGEgZnJvbnRlbmRcclxuICAgICAgICAgIGRldmVsb3Blci4gUGxlYXNlIHRha2UgYSBsb29rIGF0IG15IHBvcnRmb2xpbyB0byBzZWUgc29tZSBvZiBteSB3b3JrLFxyXG4gICAgICAgICAgYW5kIGRvbid0IGhlc2l0YXRlIHRvIGdldCBpbiB0b3VjaCBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IG15XHJcbiAgICAgICAgICBleHBlcmllbmNlIG9yIGFiaWxpdGllcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmUgcmVsYXRpdmUgZ3JheXNjYWxlIG1peC1ibGVuZC1tdWx0aXBseSBib3JkZXItMiBib3JkZXItQm9yZGVyIHJvdW5kZWQgc2hhZG93LW1kIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17RnJvbnRQYWdlSW1hZ2V9XHJcbiAgICAgICAgICBhbHQ9XCJGcm9udFBhZ2VJbWFnZVwiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWJvdHRvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbnRQYWdlO1xyXG5cclxuLypcclxuICBDYW4gbWFrZSBhIGhlYWRsaW5lIGNvbXBvbmVudFxyXG4gIENhbiBhbHNvIG1ha2UgYSBjb21wb25lbnQgZm9yIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc3R5bGVkIGRpZmZlcmVudGx5IG9uIGxlZnRcclxuXHJcblxyXG4gICBDYXJ0b29uaXplIHlvdXIgaW1hZ2UgaGVyZSAoeW91IGluIGZyb250IG9mIGEgY29tcHV0ZXIpXHJcbiAgICAgaHR0cHM6Ly93d3cuYmVmdW5reS5jb20vY3JlYXRlL3Bob3RvLXRvLWNhcnRvb24vXHJcbiovXHJcblxyXG4vKlxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIEFydGljbGVQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBoYW5kbGVIb3ZlcjogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaG92ZXJlZDogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaW5kZXgsXHJcbiAgaGFuZGxlSG92ZXIsXHJcbiAgaG92ZXJlZCxcclxufTogQXJ0aWNsZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeCA9IFwibGcyOnRyYW5zbGF0ZS14LVwiO1xyXG4gIGNvbnN0IHkgPSBcInRyYW5zbGF0ZS15LVwiO1xyXG5cclxuICBjb25zdCBbdHJhbnNsYXRlLCBzZXRUcmFuc2xhdGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtcclxuICAgIGAke3h9MGAsXHJcbiAgICBgJHt4fVstNzUlXWAsXHJcbiAgICBgJHt4fVstMTUwJV1gLFxyXG4gICAgYCR7eH1bLTIyMiVdYCxcclxuICBdKTtcclxuICBjb25zdCBbdHJhbnNsYXRlWSwgc2V0VHJhbnNsYXRlWV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4gICAgYCR7eX0wYCxcclxuICAgIGAke3l9Wy01MCVdYCxcclxuICAgIGAke3l9Wy0xMjAlXWAsXHJcbiAgICBgJHt5fVstMTc1JV1gLFxyXG4gIF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGhvdmVyZWQgPT09IDApIHtcclxuICAgICAgc2V0VHJhbnNsYXRlKFtgJHt4fTBgLCBgJHt4fVstOCVdYCwgYCR7eH1bLTg1JV1gLCBgJHt4fVstMTYwJV1gXSk7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVkoW2Ake3l9MGAsIGAke3l9Wy01MCVdYCwgYCR7eX1bLTEyMCVdYCwgYCR7eX1bLTE3NSVdYF0pO1xyXG4gICAgfSBlbHNlIGlmIChob3ZlcmVkID09PSAxKSB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZShbYCR7eH0wYCwgYCR7eH1bLTc1JV1gLCBgJHt4fVstODUlXWAsIGAke3h9Wy0xNjAlXWBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDIpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlKFtgJHt4fTBgLCBgJHt4fVstNzUlXWAsIGAke3h9Wy0xNTAlXWAsIGAke3h9Wy0xNjAlXWBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDMpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlKFtgJHt4fTBgLCBgJHt4fVstNzUlXWAsIGAke3h9Wy0xNTAlXWAsIGAke3h9Wy0yMjIlXWBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhob3ZlcmVkKTtcclxuICB9LCBbaG92ZXJlZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gaGFuZGxlSG92ZXIoaW5kZXgpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUhvdmVyKDMpfVxyXG4gICAgICBjbGFzc05hbWU9e2BzaGFkb3ctbGcgcC0zIGJvcmRlci0yIGJvcmRlci1TZWNvbmRhcnkgcm91bmRlZC1tZCBsZWZ0LTAgei0ke2luZGV4fSBiZy1QcmltYXJ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCB3LWZ1bGwgJHt0cmFuc2xhdGVbaW5kZXhdfSAke3RyYW5zbGF0ZVlbaW5kZXhdfSBsZzI6dHJhbnNsYXRlLXktMGB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBpbmRleCAhPT0gMyA/IGA5JWAgOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgcGItNCBib3JkZXItU2Vjb25kYXJ5IG91dGxpbmUtZG90dGVkIHJvdW5kZWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtVGVydGlhcnkgdGV4dC0zeGwgc206dGV4dC02eGxcIj5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGV4dCBmaXJzdC1sZXR0ZXI6dGV4dC1mbHVpZC01eGwgbGcyOmZpcnN0LWxldHRlcjp0ZXh0LTZ4bCBsZWFkaW5nLXJlbGF4ZWQgbGcyOmxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XHJcblxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJGcm9udFBhZ2VJbWFnZSIsIkZyb250UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsInNyYyIsImFsdCIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FrontPage/FrontPage.tsx\n"));

/***/ })

});