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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectImage = (param)=>{\n    let { title , images , index  } = param;\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isEven = index % 2 === 0;\n    const border = !isEven ? \"lg3:border-r-2 lg3:pr-6\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" border-Secondary  \".concat(border),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap lg3:hidden\",\n                children: title.map((word, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"uppercase inline-flex text-4xl xs:text-6xl sm:text-fluid-7xl font-bold mb-4 px-2 pt-1 bg-Secondary text-Primary rounded-sm mr-2\",\n                        children: word\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"relative h-60 lg3:h-full mt-2 lg3:mt-0\",\n                layoutId: \"1\",\n                onClick: ()=>setSelectedId(\"1\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"project image\",\n                    src: images[0].src,\n                    fill: true,\n                    className: \"object-cover object-left-top grayscale border-2 border-Border rounded-sm shadow-sm\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                children: selectedId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"absolute h-60 lg3:h-full mt-2 lg3:mt-0 z-100\",\n                    layoutId: selectedId,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"project image\",\n                        src: images[0].src,\n                        fill: true,\n                        className: \"object-cover object-left-top grayscale border-2 border-Border rounded-sm shadow-sm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Projects\\\\Project\\\\ProjectImage.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectImage, \"6tRyBKpA6Tf8zEXxvntvrffDmeA=\");\n_c = ProjectImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectImage); /*\r\n\r\nconst [selectedId, setSelectedId] = useState(null)\r\n \r\n{items.map(item => (\r\n  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>\r\n    <motion.h5>{item.subtitle}</motion.h5>\r\n    <motion.h2>{item.title}</motion.h2>\r\n  </motion.div>\r\n))}\r\n\r\n<AnimatePresence>\r\n  {selectedId && (\r\n    <motion.div layoutId={selectedId}>\r\n      <motion.h5>{item.subtitle}</motion.h5>\r\n      <motion.h2>{item.title}</motion.h2>\r\n      <motion.button onClick={() => setSelectedId(null)} />\r\n    </motion.div>\r\n  )}\r\n</AnimatePresence>\r\n\r\n\r\n\r\n\r\n- need to have magnifying glass on hover\r\n- popup on click\r\n\r\n\r\n{/* <Image\r\n        alt=\"project image\"\r\n        src={image.src}\r\n        fill\r\n        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}\r\n      /> \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ProjectImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3QvUHJvamVjdEltYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUVUO0FBRXlCO0FBUXhELE1BQU1LLGVBQWUsU0FBaUQ7UUFBaEQsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBcUI7O0lBQy9ELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBTSxJQUFJO0lBRXRELE1BQU1VLFNBQVNILFFBQVEsTUFBTTtJQUM3QixNQUFNSSxTQUFTLENBQUNELFNBQVMsNEJBQTRCLEVBQUU7SUFFdkQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVcsc0JBQTZCLE9BQVBGOzswQkFlcEMsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaUixNQUFNUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTVIsUUFBVTtvQkFDMUIscUJBQ0UsOERBQUNTO3dCQUVDSCxXQUFVO2tDQUVURTt1QkFISVI7Ozs7O2dCQU1YOzs7Ozs7MEJBRUYsOERBQUNKLHFEQUFVO2dCQUNUVSxXQUFVO2dCQUNWSSxVQUFVO2dCQUNWQyxTQUFTLElBQU1ULGNBQWM7MEJBRTdCLDRFQUFDUixtREFBS0E7b0JBQ0prQixLQUFJO29CQUNKQyxLQUFLZCxNQUFNLENBQUMsRUFBRSxDQUFDYyxHQUFHO29CQUNsQkMsSUFBSTtvQkFDSlIsV0FBVTs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNYLDBEQUFlQTswQkFDYk0sNEJBQ0MsOERBQUNMLHFEQUFVO29CQUNUVSxXQUFVO29CQUNWSSxVQUFVVDs4QkFHViw0RUFBQ1AsbURBQUtBO3dCQUNKa0IsS0FBSTt3QkFDSkMsS0FBS2QsTUFBTSxDQUFDLEVBQUUsQ0FBQ2MsR0FBRzt3QkFDbEJDLElBQUk7d0JBQ0pSLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0FoRU1UO0tBQUFBO0FBa0VOLCtEQUFlQSxZQUFZQSxFQUFDLENBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdC9Qcm9qZWN0SW1hZ2UudHN4PzI1MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG50eXBlIFByb2plY3RJbWFnZVByb3BzID0ge1xyXG4gIHRpdGxlOiBzdHJpbmdbXTtcclxuICBpbWFnZXM6IFN0YXRpY0ltYWdlRGF0YVtdO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBQcm9qZWN0SW1hZ2UgPSAoeyB0aXRsZSwgaW1hZ2VzLCBpbmRleCB9OiBQcm9qZWN0SW1hZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzRXZlbiA9IGluZGV4ICUgMiA9PT0gMDtcclxuICBjb25zdCBib3JkZXIgPSAhaXNFdmVuID8gXCJsZzM6Ym9yZGVyLXItMiBsZzM6cHItNlwiIDogXCJcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgIGJvcmRlci1TZWNvbmRhcnkgICR7Ym9yZGVyfWB9PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdyaWQtY29scy0yIGdhcC01IGgtZnVsbFwiPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9qZWN0IGltYWdlXCJcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcCBncmF5c2NhbGUgIGJvcmRlci0yIGJvcmRlci1Cb3JkZXIgcm91bmRlZC1zbSBzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbGczOmhpZGRlblwiPlxyXG4gICAgICAgIHt0aXRsZS5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBpbmxpbmUtZmxleCB0ZXh0LTR4bCB4czp0ZXh0LTZ4bCBzbTp0ZXh0LWZsdWlkLTd4bCBmb250LWJvbGQgbWItNCBweC0yIHB0LTEgYmctU2Vjb25kYXJ5IHRleHQtUHJpbWFyeSByb3VuZGVkLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3dvcmR9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTYwIGxnMzpoLWZ1bGwgbXQtMiBsZzM6bXQtMFwiXHJcbiAgICAgICAgbGF5b3V0SWQ9e1wiMVwifVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQoXCIxXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9XCJwcm9qZWN0IGltYWdlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGZpbGxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtbGVmdC10b3AgZ3JheXNjYWxlICBib3JkZXItMiBib3JkZXItQm9yZGVyIHJvdW5kZWQtc20gc2hhZG93LXNtXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAge3NlbGVjdGVkSWQgJiYgKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaC02MCBsZzM6aC1mdWxsIG10LTIgbGczOm10LTAgei0xMDBcIlxyXG4gICAgICAgICAgICBsYXlvdXRJZD17c2VsZWN0ZWRJZH1cclxuICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZChcIjFcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcCBncmF5c2NhbGUgIGJvcmRlci0yIGJvcmRlci1Cb3JkZXIgcm91bmRlZC1zbSBzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJbWFnZTtcclxuXHJcbi8qXHJcblxyXG5jb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gXHJcbntpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e2l0ZW0uaWR9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQoaXRlbS5pZCl9PlxyXG4gICAgPG1vdGlvbi5oNT57aXRlbS5zdWJ0aXRsZX08L21vdGlvbi5oNT5cclxuICAgIDxtb3Rpb24uaDI+e2l0ZW0udGl0bGV9PC9tb3Rpb24uaDI+XHJcbiAgPC9tb3Rpb24uZGl2PlxyXG4pKX1cclxuXHJcbjxBbmltYXRlUHJlc2VuY2U+XHJcbiAge3NlbGVjdGVkSWQgJiYgKFxyXG4gICAgPG1vdGlvbi5kaXYgbGF5b3V0SWQ9e3NlbGVjdGVkSWR9PlxyXG4gICAgICA8bW90aW9uLmg1PntpdGVtLnN1YnRpdGxlfTwvbW90aW9uLmg1PlxyXG4gICAgICA8bW90aW9uLmgyPntpdGVtLnRpdGxlfTwvbW90aW9uLmgyPlxyXG4gICAgICA8bW90aW9uLmJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZElkKG51bGwpfSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICl9XHJcbjwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cclxuXHJcblxyXG5cclxuLSBuZWVkIHRvIGhhdmUgbWFnbmlmeWluZyBnbGFzcyBvbiBob3ZlclxyXG4tIHBvcHVwIG9uIGNsaWNrXHJcblxyXG5cclxuey8qIDxJbWFnZVxyXG4gICAgICAgIGFsdD1cInByb2plY3QgaW1hZ2VcIlxyXG4gICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgIGZpbGxcclxuICAgICAgICBjbGFzc05hbWU9e2BvYmplY3QtY292ZXIgb2JqZWN0LWxlZnQtdG9wIGdyYXlzY2FsZSBtaXgtYmxlbmQtbXVsdGlwbHkgYm9yZGVyLVNlY29uZGFyeSAke2JvcmRlcn1gfVxyXG4gICAgICAvPiBcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJQcm9qZWN0SW1hZ2UiLCJ0aXRsZSIsImltYWdlcyIsImluZGV4Iiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJpc0V2ZW4iLCJib3JkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ3b3JkIiwiaDEiLCJsYXlvdXRJZCIsIm9uQ2xpY2siLCJhbHQiLCJzcmMiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Project/ProjectImage.tsx\n"));

/***/ })

});