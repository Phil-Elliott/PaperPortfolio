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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/FrontPageImage.png */ \"./assets/images/FrontPageImage.png\");\n\n\n\n\nconst FrontPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-6 border-y-2 border-Secondary gap-x-8 grid lg:grid-cols-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-r-2 border-Border pr-8 col-span-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"article-header\",\n                        children: \"Aspiring Frontend Developer Seeking First Dev Role\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"article-text text-justify\",\n                        children: \"Hello! I am a frontend developer with a strong foundation in HTML, CSS, and JavaScript. I am passionate about creating user-friendly and visually appealing websites, and I am always looking to improve my skills and stay up-to-date with the latest technologies. I am eager to put my skills to work and contribute to a dev team as a frontend developer. Please take a look at my portfolio to see some of my work, and dont hesitate to get in touch if you have any questions about my experience or abilities.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grayscale mix-blend-multiply border-2 border-Border rounded shadow-md col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_images_FrontPageImage_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"FrontPageImage\",\n                    fill: true,\n                    className: \"object-cover object-bottom\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\FrontPage\\\\FrontPage.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FrontPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontPage); /*\r\n  Can make a headline component\r\n  Can also make a component for the first letter of the text so that it can be styled differently on left\r\n\r\n\r\n   Cartoonize your image here (you in front of a computer)\r\n     https://www.befunky.com/create/photo-to-cartoon/\r\n*/  /*\r\n\r\n\r\nimport React, { useEffect, useState } from \"react\";\r\n\r\ntype ArticleProps = {\r\n  title: string;\r\n  description: string;\r\n  index: number;\r\n  handleHover: (index: number) => void;\r\n  hovered: number;\r\n};\r\n\r\nconst Article = ({\r\n  title,\r\n  description,\r\n  index,\r\n  handleHover,\r\n  hovered,\r\n}: ArticleProps) => {\r\n  const x = \"lg2:translate-x-\";\r\n  const y = \"translate-y-\";\r\n\r\n  const [translate, setTranslate] = useState<string[]>([\r\n    `${x}0`,\r\n    `${x}[-75%]`,\r\n    `${x}[-150%]`,\r\n    `${x}[-222%]`,\r\n  ]);\r\n  const [translateY, setTranslateY] = useState<string[]>([\r\n    `${y}0`,\r\n    `${y}[-50%]`,\r\n    `${y}[-120%]`,\r\n    `${y}[-175%]`,\r\n  ]);\r\n\r\n  useEffect(() => {\r\n    if (hovered === 0) {\r\n      setTranslate([`${x}0`, `${x}[-8%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 1) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-85%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 2) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-160%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    } else if (hovered === 3) {\r\n      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-222%]`]);\r\n      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);\r\n    }\r\n    console.log(hovered);\r\n  }, [hovered]);\r\n\r\n  return (\r\n    <div\r\n      onMouseOver={() => handleHover(index)}\r\n      onMouseLeave={() => handleHover(3)}\r\n      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full ${translate[index]} ${translateY[index]} lg2:translate-y-0`}\r\n    >\r\n      <div\r\n        style={{\r\n          paddingRight: index !== 3 ? `9%` : \"\",\r\n        }}\r\n        className=\"h-full px-6 pb-4 border-Secondary outline-dotted rounded\"\r\n      >\r\n        <h1 className=\"article-header text-Tertiary text-3xl sm:text-6xl\">\r\n          {title}\r\n        </h1>\r\n        <p className=\"article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose\">\r\n          {description}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Article;\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"FrontPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zyb250UGFnZS9Gcm9udFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUNxQztBQUVwRSxNQUFNRyxZQUFZLElBQU07SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFpQjs7Ozs7O2tDQUcvQiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQTRCOzs7Ozs7Ozs7Ozs7MEJBVzNDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0osbURBQUtBO29CQUNKTyxLQUFLTix5RUFBY0E7b0JBQ25CTyxLQUFJO29CQUNKQyxJQUFJO29CQUNKTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtLQTVCTUY7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMsQ0FFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gcm9udFBhZ2UvRnJvbnRQYWdlLnRzeD9kMzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBGcm9udFBhZ2VJbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Gcm9udFBhZ2VJbWFnZS5wbmdcIjtcclxuXHJcbmNvbnN0IEZyb250UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS02IGJvcmRlci15LTIgYm9yZGVyLVNlY29uZGFyeSBnYXAteC04IGdyaWQgbGc6Z3JpZC1jb2xzLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci0yIGJvcmRlci1Cb3JkZXIgcHItOCBjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICBBc3BpcmluZyBGcm9udGVuZCBEZXZlbG9wZXIgU2Vla2luZyBGaXJzdCBEZXYgUm9sZVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0IHRleHQtanVzdGlmeVwiPlxyXG4gICAgICAgICAgSGVsbG8hIEkgYW0gYSBmcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBmb3VuZGF0aW9uIGluIEhUTUwsXHJcbiAgICAgICAgICBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJIGFtIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgdXNlci1mcmllbmRseSBhbmRcclxuICAgICAgICAgIHZpc3VhbGx5IGFwcGVhbGluZyB3ZWJzaXRlcywgYW5kIEkgYW0gYWx3YXlzIGxvb2tpbmcgdG8gaW1wcm92ZSBteVxyXG4gICAgICAgICAgc2tpbGxzIGFuZCBzdGF5IHVwLXRvLWRhdGUgd2l0aCB0aGUgbGF0ZXN0IHRlY2hub2xvZ2llcy4gSSBhbSBlYWdlciB0b1xyXG4gICAgICAgICAgcHV0IG15IHNraWxscyB0byB3b3JrIGFuZCBjb250cmlidXRlIHRvIGEgZGV2IHRlYW0gYXMgYSBmcm9udGVuZFxyXG4gICAgICAgICAgZGV2ZWxvcGVyLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgbXkgcG9ydGZvbGlvIHRvIHNlZSBzb21lIG9mIG15IHdvcmssXHJcbiAgICAgICAgICBhbmQgZG9udCBoZXNpdGF0ZSB0byBnZXQgaW4gdG91Y2ggaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCBteVxyXG4gICAgICAgICAgZXhwZXJpZW5jZSBvciBhYmlsaXRpZXMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmF5c2NhbGUgbWl4LWJsZW5kLW11bHRpcGx5IGJvcmRlci0yIGJvcmRlci1Cb3JkZXIgcm91bmRlZCBzaGFkb3ctbWQgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtGcm9udFBhZ2VJbWFnZX1cclxuICAgICAgICAgIGFsdD1cIkZyb250UGFnZUltYWdlXCJcclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtYm90dG9tXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9udFBhZ2U7XHJcblxyXG4vKlxyXG4gIENhbiBtYWtlIGEgaGVhZGxpbmUgY29tcG9uZW50XHJcbiAgQ2FuIGFsc28gbWFrZSBhIGNvbXBvbmVudCBmb3IgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzdHlsZWQgZGlmZmVyZW50bHkgb24gbGVmdFxyXG5cclxuXHJcbiAgIENhcnRvb25pemUgeW91ciBpbWFnZSBoZXJlICh5b3UgaW4gZnJvbnQgb2YgYSBjb21wdXRlcilcclxuICAgICBodHRwczovL3d3dy5iZWZ1bmt5LmNvbS9jcmVhdGUvcGhvdG8tdG8tY2FydG9vbi9cclxuKi9cclxuXHJcbi8qXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgQXJ0aWNsZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGhhbmRsZUhvdmVyOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBob3ZlcmVkOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBpbmRleCxcclxuICBoYW5kbGVIb3ZlcixcclxuICBob3ZlcmVkLFxyXG59OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuICBjb25zdCB4ID0gXCJsZzI6dHJhbnNsYXRlLXgtXCI7XHJcbiAgY29uc3QgeSA9IFwidHJhbnNsYXRlLXktXCI7XHJcblxyXG4gIGNvbnN0IFt0cmFuc2xhdGUsIHNldFRyYW5zbGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xyXG4gICAgYCR7eH0wYCxcclxuICAgIGAke3h9Wy03NSVdYCxcclxuICAgIGAke3h9Wy0xNTAlXWAsXHJcbiAgICBgJHt4fVstMjIyJV1gLFxyXG4gIF0pO1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZLCBzZXRUcmFuc2xhdGVZXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXHJcbiAgICBgJHt5fTBgLFxyXG4gICAgYCR7eX1bLTUwJV1gLFxyXG4gICAgYCR7eX1bLTEyMCVdYCxcclxuICAgIGAke3l9Wy0xNzUlXWAsXHJcbiAgXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaG92ZXJlZCA9PT0gMCkge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy04JV1gLCBgJHt4fVstODUlXWAsIGAke3h9Wy0xNjAlXWBdKTtcclxuICAgICAgc2V0VHJhbnNsYXRlWShbYCR7eX0wYCwgYCR7eX1bLTUwJV1gLCBgJHt5fVstMTIwJV1gLCBgJHt5fVstMTc1JV1gXSk7XHJcbiAgICB9IGVsc2UgaWYgKGhvdmVyZWQgPT09IDEpIHtcclxuICAgICAgc2V0VHJhbnNsYXRlKFtgJHt4fTBgLCBgJHt4fVstNzUlXWAsIGAke3h9Wy04NSVdYCwgYCR7eH1bLTE2MCVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMikge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy03NSVdYCwgYCR7eH1bLTE1MCVdYCwgYCR7eH1bLTE2MCVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH0gZWxzZSBpZiAoaG92ZXJlZCA9PT0gMykge1xyXG4gICAgICBzZXRUcmFuc2xhdGUoW2Ake3h9MGAsIGAke3h9Wy03NSVdYCwgYCR7eH1bLTE1MCVdYCwgYCR7eH1bLTIyMiVdYF0pO1xyXG4gICAgICBzZXRUcmFuc2xhdGVZKFtgJHt5fTBgLCBgJHt5fVstNTAlXWAsIGAke3l9Wy0xMjAlXWAsIGAke3l9Wy0xNzUlXWBdKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGhvdmVyZWQpO1xyXG4gIH0sIFtob3ZlcmVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBoYW5kbGVIb3ZlcihpbmRleCl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlSG92ZXIoMyl9XHJcbiAgICAgIGNsYXNzTmFtZT17YHNoYWRvdy1sZyBwLTMgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSByb3VuZGVkLW1kIGxlZnQtMCB6LSR7aW5kZXh9IGJnLVByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHctZnVsbCAke3RyYW5zbGF0ZVtpbmRleF19ICR7dHJhbnNsYXRlWVtpbmRleF19IGxnMjp0cmFuc2xhdGUteS0wYH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IGluZGV4ICE9PSAzID8gYDklYCA6IFwiXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgcHgtNiBwYi00IGJvcmRlci1TZWNvbmRhcnkgb3V0bGluZS1kb3R0ZWQgcm91bmRlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZWFkZXIgdGV4dC1UZXJ0aWFyeSB0ZXh0LTN4bCBzbTp0ZXh0LTZ4bFwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS10ZXh0IGZpcnN0LWxldHRlcjp0ZXh0LWZsdWlkLTV4bCBsZzI6Zmlyc3QtbGV0dGVyOnRleHQtNnhsIGxlYWRpbmctcmVsYXhlZCBsZzI6bGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkZyb250UGFnZUltYWdlIiwiRnJvbnRQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3JjIiwiYWx0IiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FrontPage/FrontPage.tsx\n"));

/***/ })

});