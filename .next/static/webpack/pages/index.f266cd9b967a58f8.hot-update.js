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

/***/ "./components/Projects/Project/ProjectImage.tsx":
/*!******************************************************!*\
  !*** ./components/Projects/Project/ProjectImage.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProjectImage = (param)=>{\n    let { images , index  } = param;\n    const isEven = index % 2 === 0;\n    const border = !isEven ? \"lg3:border-r-2 lg3:pr-6\" : \"lg3:border-l-2 lg3:pl-6\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" border-Secondary  \".concat(border),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative h-60 lg3:h-full mt-8 lg3:mt-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                alt: \"project image\",\n                src: images[0].src,\n                fill: true,\n                className: \"object-cover object-left-top grayscale border-2 border-Border rounded-sm shadow-sm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectImage); /*\r\n- need to have magnifying glass on hover\r\n- popup on click\r\n\r\n\r\n{/* <Image\r\n        alt=\"project image\"\r\n        src={image.src}\r\n        fill\r\n        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}\r\n      /> \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ProjectImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QvUHJvamVjdEltYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFFSztBQVMvQixNQUFNRSxlQUFlLFNBQTBDO1FBQXpDLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFxQjtJQUN4RCxNQUFNQyxTQUFTRCxRQUFRLE1BQU07SUFDN0IsTUFBTUUsU0FBUyxDQUFDRCxTQUNaLDRCQUNBLHlCQUF5QjtJQUU3QixxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVyxzQkFBNkIsT0FBUEY7a0JBZXBDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDUCxtREFBS0E7Z0JBQ0pRLEtBQUk7Z0JBQ0pDLEtBQUtQLE1BQU0sQ0FBQyxFQUFFLENBQUNPLEdBQUc7Z0JBQ2xCQyxJQUFJO2dCQUNKSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0tBakNNTjtBQW1DTiwrREFBZUEsWUFBWUEsRUFBQyxDQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QvUHJvamVjdEltYWdlLnRzeD8yNTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG50eXBlIFByb2plY3RJbWFnZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmdbXTtcclxuICBpbWFnZXM6IFN0YXRpY0ltYWdlRGF0YVtdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBQcm9qZWN0SW1hZ2UgPSAoeyBpbWFnZXMsIGluZGV4IH06IFByb2plY3RJbWFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgaXNFdmVuID0gaW5kZXggJSAyID09PSAwO1xyXG4gIGNvbnN0IGJvcmRlciA9ICFpc0V2ZW5cclxuICAgID8gXCJsZzM6Ym9yZGVyLXItMiBsZzM6cHItNlwiXHJcbiAgICA6IFwibGczOmJvcmRlci1sLTIgbGczOnBsLTZcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgIGJvcmRlci1TZWNvbmRhcnkgICR7Ym9yZGVyfWB9PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdyaWQtY29scy0yIGdhcC01IGgtZnVsbFwiPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9qZWN0IGltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcCBncmF5c2NhbGUgIGJvcmRlci0yIGJvcmRlci1Cb3JkZXIgcm91bmRlZC1zbSBzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02MCBsZzM6aC1mdWxsIG10LTggbGczOm10LTBcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcCBncmF5c2NhbGUgIGJvcmRlci0yIGJvcmRlci1Cb3JkZXIgcm91bmRlZC1zbSBzaGFkb3ctc21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEltYWdlO1xyXG5cclxuLypcclxuLSBuZWVkIHRvIGhhdmUgbWFnbmlmeWluZyBnbGFzcyBvbiBob3ZlclxyXG4tIHBvcHVwIG9uIGNsaWNrXHJcblxyXG5cclxuey8qIDxJbWFnZVxyXG4gICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxyXG4gICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgIGZpbGxcclxuICAgICAgICBjbGFzc05hbWU9e2BvYmplY3QtY292ZXIgb2JqZWN0LWxlZnQtdG9wIGdyYXlzY2FsZSBtaXgtYmxlbmQtbXVsdGlwbHkgYm9yZGVyLVNlY29uZGFyeSAke2JvcmRlcn1gfVxyXG4gICAgICAvPiBcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUHJvamVjdEltYWdlIiwiaW1hZ2VzIiwiaW5kZXgiLCJpc0V2ZW4iLCJib3JkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Project/ProjectImage.tsx\n"));

/***/ })

});