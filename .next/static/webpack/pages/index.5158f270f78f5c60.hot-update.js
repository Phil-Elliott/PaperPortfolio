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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectImage = (param)=>{\n    let { title , images , index , demo  } = param;\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isEven = index % 2 === 0;\n    const border = !isEven ? \"lg3:border-r-2 lg3:pr-6\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" border-Secondary  \".concat(border),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap lg3:hidden\",\n                children: title.map((word, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"uppercase inline-flex text-4xl xs:text-6xl sm:text-fluid-7xl font-bold mb-4 px-2 pt-1 bg-Secondary text-Primary rounded-sm mr-2\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: demo,\n                className: \"relative h-60 lg3:h-full w-60 mt-2 lg3:mt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"project image\",\n                    src: images[0].src,\n                    fill: true,\n                    className: \"object-cover object-left-top grayscale border-2 border-Border rounded-sm shadow-sm\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectImage, \"6tRyBKpA6Tf8zEXxvntvrffDmeA=\");\n_c = ProjectImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectImage); /*\r\n\r\nconst [selectedId, setSelectedId] = useState(null)\r\n \r\n{items.map(item => (\r\n  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>\r\n    <motion.h5>{item.subtitle}</motion.h5>\r\n    <motion.h2>{item.title}</motion.h2>\r\n  </motion.div>\r\n))}\r\n\r\n<AnimatePresence>\r\n  {selectedId && (\r\n    <motion.div layoutId={selectedId}>\r\n      <motion.h5>{item.subtitle}</motion.h5>\r\n      <motion.h2>{item.title}</motion.h2>\r\n      <motion.button onClick={() => setSelectedId(null)} />\r\n    </motion.div>\r\n  )}\r\n</AnimatePresence>\r\n\r\n\r\n\r\n\r\n- need to have magnifying glass on hover\r\n- popup on click\r\n\r\n\r\n{/* <Image\r\n        alt=\"project image\"\r\n        src={image.src}\r\n        fill\r\n        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}\r\n      /> \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ProjectImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QvUHJvamVjdEltYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFFVDtBQUVGO0FBUzdCLE1BQU1JLGVBQWUsU0FBdUQ7UUFBdEQsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFxQjs7SUFDckUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFFakQsTUFBTVUsU0FBU0osUUFBUSxNQUFNO0lBQzdCLE1BQU1LLFNBQVMsQ0FBQ0QsU0FBUyw0QkFBNEIsRUFBRTtJQUV2RCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVyxzQkFBNkIsT0FBUEY7OzBCQWVwQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1pULE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxRQUFVO29CQUMxQixxQkFDRSw4REFBQ1U7d0JBRUNILFdBQVU7a0NBRVRFO3VCQUhJVDs7Ozs7Z0JBTVg7Ozs7OzswQkFHRiw4REFBQ0osa0RBQUlBO2dCQUFDZSxNQUFNVjtnQkFBTU0sV0FBVTswQkFDMUIsNEVBQUNaLG1EQUFLQTtvQkFDSmlCLEtBQUk7b0JBQ0pDLEtBQUtkLE1BQU0sQ0FBQyxFQUFFLENBQUNjLEdBQUc7b0JBQ2xCQyxJQUFJO29CQUNKUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtHQS9DTVY7S0FBQUE7QUFpRE4sK0RBQWVBLFlBQVlBLEVBQUMsQ0FFNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0L1Byb2plY3RJbWFnZS50c3g/MjUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbnR5cGUgUHJvamVjdEltYWdlUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZ1tdO1xyXG4gIGltYWdlczogU3RhdGljSW1hZ2VEYXRhW107XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBkZW1vOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBQcm9qZWN0SW1hZ2UgPSAoeyB0aXRsZSwgaW1hZ2VzLCBpbmRleCwgZGVtbyB9OiBQcm9qZWN0SW1hZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09IDA7XHJcbiAgY29uc3QgYm9yZGVyID0gIWlzRXZlbiA/IFwibGczOmJvcmRlci1yLTIgbGczOnByLTZcIiA6IFwiXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCBib3JkZXItU2Vjb25kYXJ5ICAke2JvcmRlcn1gfT5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBoLWZ1bGxcIj5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvamVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtbGVmdC10b3AgZ3JheXNjYWxlICBib3JkZXItMiBib3JkZXItQm9yZGVyIHJvdW5kZWQtc20gc2hhZG93LXNtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGxnMzpoaWRkZW5cIj5cclxuICAgICAgICB7dGl0bGUubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgaW5saW5lLWZsZXggdGV4dC00eGwgeHM6dGV4dC02eGwgc206dGV4dC1mbHVpZC03eGwgZm9udC1ib2xkIG1iLTQgcHgtMiBwdC0xIGJnLVNlY29uZGFyeSB0ZXh0LVByaW1hcnkgcm91bmRlZC1zbSBtci0yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt3b3JkfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjAgbGczOmgtZnVsbCBtdC0yIGxnMzptdC0wXCI+ICovfVxyXG4gICAgICA8TGluayBocmVmPXtkZW1vfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTYwIGxnMzpoLWZ1bGwgdy02MCBtdC0yIGxnMzptdC0wXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9XCJwcm9qZWN0IGltYWdlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtbGVmdC10b3AgZ3JheXNjYWxlICBib3JkZXItMiBib3JkZXItQm9yZGVyIHJvdW5kZWQtc20gc2hhZG93LXNtXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJbWFnZTtcclxuXHJcbi8qXHJcblxyXG5jb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gXHJcbntpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e2l0ZW0uaWR9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQoaXRlbS5pZCl9PlxyXG4gICAgPG1vdGlvbi5oNT57aXRlbS5zdWJ0aXRsZX08L21vdGlvbi5oNT5cclxuICAgIDxtb3Rpb24uaDI+e2l0ZW0udGl0bGV9PC9tb3Rpb24uaDI+XHJcbiAgPC9tb3Rpb24uZGl2PlxyXG4pKX1cclxuXHJcbjxBbmltYXRlUHJlc2VuY2U+XHJcbiAge3NlbGVjdGVkSWQgJiYgKFxyXG4gICAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e3NlbGVjdGVkSWR9PlxyXG4gICAgICA8bW90aW9uLmg1PntpdGVtLnN1YnRpdGxlfTwvbW90aW9uLmg1PlxyXG4gICAgICA8bW90aW9uLmgyPntpdGVtLnRpdGxlfTwvbW90aW9uLmgyPlxyXG4gICAgICA8bW90aW9uLmJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKG51bGwpfSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICl9XHJcbjwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cclxuXHJcblxyXG5cclxuLSBuZWVkIHRvIGhhdmUgbWFnbmlmeWluZyBnbGFzcyBvbiBob3ZlclxyXG4tIHBvcHVwIG9uIGNsaWNrXHJcblxyXG5cclxuey8qIDxJbWFnZVxyXG4gICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxyXG4gICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgIGZpbGxcclxuICAgICAgICBjbGFzc05hbWU9e2BvYmplY3QtY292ZXIgb2JqZWN0LWxlZnQtdG9wIGdyYXlzY2FsZSBtaXgtYmxlbmQtbXVsdGlwbHkgYm9yZGVyLVNlY29uZGFyeSAke2JvcmRlcn1gfVxyXG4gICAgICAvPiBcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaW5rIiwiUHJvamVjdEltYWdlIiwidGl0bGUiLCJpbWFnZXMiLCJpbmRleCIsImRlbW8iLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImlzRXZlbiIsImJvcmRlciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIndvcmQiLCJoMSIsImhyZWYiLCJhbHQiLCJzcmMiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Project/ProjectImage.tsx\n"));

/***/ })

});