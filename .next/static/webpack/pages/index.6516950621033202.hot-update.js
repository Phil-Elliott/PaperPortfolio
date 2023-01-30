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

/***/ "./components/Skills/Crossword/Crossword.tsx":
/*!***************************************************!*\
  !*** ./components/Skills/Crossword/Crossword.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst skills = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"React\",\n    \"Next.js\",\n    \"Redux\",\n    \"SCSS\",\n    \"Tailwind\",\n    \"PostgreSQL\"\n];\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"Html\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"Sass\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"Css\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n\r\n  if letter is capitalized have the number there\r\n\r\n  maybe just set all the jumbers accordinly\r\n\r\n  */ const cellValue = (i, j, cell)=>{\n        var _attempt_find;\n        if (((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase()) {\n            return cell;\n        } else if ((newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j) {\n            return newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt;\n        } else {\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"uppercase article-header bg-Secondary text-center text-Primary font-serif py-2 tracking-wide px-4 mb-4 rounded \",\n                children: \"The Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 221,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: grid.map((row, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                                children: row.map((cell, j)=>{\n                                    var _attempt_find, _attempt_find1;\n                                    return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"cell-\".concat(i, \"-\").concat(j),\n                                        className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                                        \"data-row\": i,\n                                        \"data-col\": j,\n                                        maxLength: 1,\n                                        value: cellValue(i, j, cell),\n                                        readOnly: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase(),\n                                        onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                                        onFocus: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                                    }, j, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 234,\n                                        columnNumber: 21\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: cell\n                                    }, j, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 262,\n                                        columnNumber: 21\n                                    }, undefined);\n                                })\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 228,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 225,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-6 font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl pb-6 text-Tertiary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \" font-semibold mb-6 text-Secondary\",\n                                        children: \"Skills Include:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 275,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-disc list-inside flex flex-wrap gap-8\",\n                                        children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"\",\n                                                children: skill\n                                            }, skill, false, {\n                                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                                lineNumber: 280,\n                                                columnNumber: 17\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 278,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 274,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-Secondary text-xl font-serif leading-relaxed\",\n                                children: currentWord.clue\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 286,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 270,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 224,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 220,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTUMsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBYTtRQUN6RFMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1nQixPQUFPO1FBQ1hDLFFBQVE7WUFDTjtnQkFDRVIsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFFQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1NBQ0Q7UUFDREssTUFBTTtZQUNKO2dCQUNFVCxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZ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QUNUMUIsY0FDRTBCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDVixXQUFXLElBQzFCWCxLQUFLVyxXQUFXLElBQ2hCcEIsR0FDQWlCO3dDQUdKa0IsU0FDRTdELENBQUFBLENBQUFBO3VDQXBCRzJDOzs7OzZEQTJCUCxRQUFDSTtrREFBYVo7dUNBQUpROzs7O2lEQUNYOzsrQkFsQ0VqQjs7Ozs7d0JBc0NYOzs7Ozs7O3dCQUdHc0IsV0FBVTs7O2dDQUlSQTs7d0dBQ0g7d0NBQUlBLFdBQVU7Ozs7Ozs7a0RBR2QsUUFBQ2U7d0NBQUdmLFdBQVU7a0RBQ1hsRCxPQUFPb0QsR0FBRyxDQUFDLENBQUNjLHNCQUNYLFFBQUNDO2dEQUFHakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBTVBBLFdBQVU7MENBQ1Y1QyxZQUFZRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I7R0F2UU1QO0tBQUFBO0FBeVFOLGVBQWVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzL0Nyb3Nzd29yZC9Dcm9zc3dvcmQudHN4PzcxOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcnRpY2xlSW1hZ2VzIGZyb20gXCIuL1BhcnRpY2xlSW1hZ2VzL1BhcnRpY2xlSW1hZ2VzXCI7XHJcblxyXG50eXBlIEF0dGVtcHRPYmplY3QgPSB7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgYXR0ZW1wdDogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBEYXRhT2JqZWN0ID0ge1xyXG4gIGNsdWU6IHN0cmluZztcclxuICBhbnN3ZXI6IHN0cmluZztcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBudW06IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IHNraWxscyA9IFtcclxuICBcIkhUTUxcIixcclxuICBcIkNTU1wiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIlJlZHV4XCIsXHJcbiAgXCJTQ1NTXCIsXHJcbiAgXCJUYWlsd2luZFwiLFxyXG4gIFwiUG9zdGdyZVNRTFwiLFxyXG5dO1xyXG5cclxuY29uc3QgQ3Jvc3N3b3JkUHV6emxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdHRlbXB0LCBzZXRBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3RbXT4oW10pO1xyXG4gIGNvbnN0IFtuZXdBdHRlbXB0LCBzZXROZXdBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3Q+KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxEYXRhT2JqZWN0Pih7XHJcbiAgICBjbHVlOiBcIkNsaWNrIG9uIGEgYm94IHRvIHN0YXJ0LiBVc2UgdGhlIHNraWxscyBmb3IgYW5zd2Vycy5cIixcclxuICAgIGFuc3dlcjogXCJzdHJpbmdcIixcclxuICAgIHJvdzogMCxcclxuICAgIGNvbDogMCxcclxuICAgIG51bTogMCxcclxuICB9KTtcclxuICBjb25zdCBbc3RhdGVEaXJlY3Rpb24sIHNldFN0YXRlRGlyZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGFjcm9zczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgbWFrZXMgYSB3ZWJzaXRlIGNvbWUgYWxpdmU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCBkbyB5b3UgY2FsbCB0aGUgYnVpbGRpbmcgYmxvY2tzIG9mIGEgd2Vic2l0ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSHRtbFwiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA2LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIENTUyBwcmVwcm9jZXNzb3IgdGhhdCBoZWxwcyB5b3UgZHJlc3MgdXAgYSB3ZWJzaXRlXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlNhc3NcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGtlZXAgYSB3ZWJzaXRlJ3MgZGF0YSBpbiBvcmRlci5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVkdXhcIixcclxuICAgICAgICByb3c6IDksXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogOCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkb3duOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgZnJhbWV3b3JrIHRoYXQgbWFrZXMgYnVpbGRpbmcgc2VydmVyLXJlbmRlcmVkIFJlYWN0IGFwcHMgYSBicmVlemU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIk5leHRcIixcclxuICAgICAgICByb3c6IDAsXHJcbiAgICAgICAgY29sOiA5LFxyXG4gICAgICAgIG51bTogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3UgYnVpbGQgYSB3ZWJzaXRlJ3MgcGVyc29uYWxpdHkuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgdXRpbGl0eS1maXJzdCBDU1MgZnJhbWV3b3JrIHRoYXQgaGVscHMgeW91IGNyZWF0ZSBhIHdlYnNpdGUncyB1bmlxdWUgbG9vay5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiVGFpbHdpbmRcIixcclxuICAgICAgICByb3c6IDIsXHJcbiAgICAgICAgY29sOiAzLFxyXG4gICAgICAgIG51bTogMyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IGdpdmVzIGEgd2Vic2l0ZSBhIG1ha2VvdmVyP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJDc3NcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gIGNvbnN0IHJvd3MgPSAxMDtcclxuICBjb25zdCBjb2xzID0gMTA7XHJcbiAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT5cclxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvbHMgfSwgKCkgPT4gXCJcIilcclxuICApO1xyXG4gIGNvbnN0IHsgYWNyb3NzLCBkb3duIH0gPSBkYXRhO1xyXG4gIC8vaW5zZXJ0IHRoZSBhbnN3ZXJzIGFjcm9zcyBhbmQgZG93biBpbnRvIHRoZSBncmlkXHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93XVt3b3JkLmNvbCArIGldID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3cgKyBpXVt3b3JkLmNvbF0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1vdmVzIHRvIHRoZSBuZXh0IGNlbGxcclxuICBmdW5jdGlvbiBuZXh0Q2VsbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBzdGF0ZURpcmVjdGlvbik7XHJcbiAgICBsZXQgbmV4dENlbGw7XHJcbiAgICAvLyBsZXQgZGlyZWN0aW9uID0gZmluZFdvcmQocm93LCBjb2wpO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93fS0ke2NvbCArIDF9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93ICsgMX0tJHtjb2x9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dENlbGwpIG5leHRDZWxsLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWNpZGVzIGlmIHRoZSBpbnB1dCBpcyBjb3JyZWN0XHJcbiAgZnVuY3Rpb24gYXR0ZW1wdExldHRlcihcclxuICAgIGxldHRlcjogc3RyaW5nLFxyXG4gICAgY2VsbDogc3RyaW5nLFxyXG4gICAgcm93OiBudW1iZXIsXHJcbiAgICBjb2w6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGxldHRlciA9PT0gY2VsbCkge1xyXG4gICAgICBzZXRBdHRlbXB0KChwcmV2QXR0ZW1wdCkgPT4gW1xyXG4gICAgICAgIC4uLnByZXZBdHRlbXB0LFxyXG4gICAgICAgIHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIG5leHRDZWxsKHJvdywgY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5ld0F0dGVtcHQoeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZpbmRzIHRoZSB3b3JkIHRoYXQgdGhlIGNlbGwgaXMgaW5cclxuICBmdW5jdGlvbiBmaW5kV29yZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBcIlwiO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBhY3Jvc3NDaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgZG93bkNoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICAgICAgZG93bkNoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgICAgICBhY3Jvc3NDaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjcm9zc0NoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQucm93ID09PSByb3cgJiYgd29yZC5jb2wgPD0gY29sICYmIHdvcmQuY29sICsgbGVuID4gY29sKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJhY3Jvc3NcIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhY3Jvc3NcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb3duQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5jb2wgPT09IGNvbCAmJiB3b3JkLnJvdyA8PSByb3cgJiYgd29yZC5yb3cgKyBsZW4gPiByb3cpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qXHJcblxyXG4gIGlmIGxldHRlciBpcyBjYXBpdGFsaXplZCBoYXZlIHRoZSBudW1iZXIgdGhlcmVcclxuXHJcbiAgbWF5YmUganVzdCBzZXQgYWxsIHRoZSBqdW1iZXJzIGFjY29yZGlubHlcclxuXHJcbiAgKi9cclxuXHJcbiAgY29uc3QgY2VsbFZhbHVlID0gKGk6IG51bWJlciwgajogbnVtYmVyLCBjZWxsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgfSBlbHNlIGlmIChuZXdBdHRlbXB0Py5yb3cgPT09IGkgJiYgbmV3QXR0ZW1wdD8uY29sID09PSBqKSB7XHJcbiAgICAgIHJldHVybiBuZXdBdHRlbXB0Py5hdHRlbXB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTZcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBhcnRpY2xlLWhlYWRlciBiZy1TZWNvbmRhcnkgdGV4dC1jZW50ZXIgdGV4dC1QcmltYXJ5IGZvbnQtc2VyaWYgcHktMiB0cmFja2luZy13aWRlIHB4LTQgbWItNCByb3VuZGVkIFwiPlxyXG4gICAgICAgIFRoZSBEYWlseSBDcm9zc3dvcmRcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7Z3JpZC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVNlY29uZGFyeSBncmlkIGdyaWQtY29scy0xMCBncmlkLXJvbGxzLTEwIHotOVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGopID0+XHJcbiAgICAgICAgICAgICAgICAgIGNlbGwgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YGNlbGwtJHtpfS0ke2p9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSBweS0xIHRleHQtY2VudGVyIHVwcGVyY2FzZSBmb250LWJsYWNrIHRleHQtbWQgei0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJvdz17aX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29sPXtqfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbGxWYWx1ZShpLCBqLCBjZWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LmF0dGVtcHQgPT09IGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TGV0dGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgalxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/LmF0dGVtcHQgPT09IGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKCkgPT4gbmV4dENlbGwoaSwgailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgpID0+IGZpbmRXb3JkKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+e2NlbGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC02IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1UZXJ0aWFyeSBmb250LWJvbGQgbGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgICAgVXNlIHRoZSBza2lsbHMgdG8gc29sdmUgdGhlIGNyb3Nzd29yZCBwdXp6bGUuXHJcbiAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBwYi02IHRleHQtVGVydGlhcnlcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiBmb250LXNlbWlib2xkIG1iLTYgdGV4dC1TZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBTa2lsbHMgSW5jbHVkZTpcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBmbGV4IGZsZXgtd3JhcCBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgIHtza2lsbHMubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiIGtleT17c2tpbGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVNlY29uZGFyeSB0ZXh0LXhsIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgIHtjdXJyZW50V29yZC5jbHVlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc3dvcmRQdXp6bGU7XHJcblxyXG4vKlxyXG4gIFxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJza2lsbHMiLCJDcm9zc3dvcmRQdXp6bGUiLCJhdHRlbXB0Iiwic2V0QXR0ZW1wdCIsIm5ld0F0dGVtcHQiLCJzZXROZXdBdHRlbXB0IiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsImNsdWUiLCJhbnN3ZXIiLCJyb3ciLCJjb2wiLCJudW0iLCJzdGF0ZURpcmVjdGlvbiIsInNldFN0YXRlRGlyZWN0aW9uIiwiZGF0YSIsImFjcm9zcyIsImRvd24iLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJrZXkiLCJ3b3JkIiwiT2JqZWN0IiwiZW50cmllcyIsImkiLCJuZXh0Q2VsbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJhdHRlbXB0TGV0dGVyIiwibGV0dGVyIiwiY2VsbCIsInByZXZBdHRlbXB0IiwiZmluZFdvcmQiLCJkaXJlY3Rpb24iLCJhY3Jvc3NDaGVjayIsImRvd25DaGVjayIsImxlbiIsImNlbGxWYWx1ZSIsImoiLCJmaW5kIiwiYSIsInRvVXBwZXJDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbnB1dCIsImlkIiwiZGF0YS1yb3ciLCJkYXRhLWNvbCIsIm1heExlbmd0aCIsInZhbHVlIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkZvY3VzIiwiaDMiLCJ1bCIsInNraWxsIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});