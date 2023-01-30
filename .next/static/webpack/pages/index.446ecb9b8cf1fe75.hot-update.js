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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst skills = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"React\",\n    \"Next.js\",\n    \"Redux\",\n    \"SCSS\",\n    \"Tailwind\",\n    \"PostgreSQL\"\n];\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"Html\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"Sass\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"Css\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n\r\n  if letter is capitalized have the number there\r\n\r\n  maybe just set all the jumbers accordinly\r\n\r\n  */ const cellValue = (i, j, cell)=>{\n        var _attempt_find;\n        if (((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase()) {\n            return cell;\n        } else if ((newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j) {\n            return newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt;\n        } else {\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 grid grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: grid.map((row, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                        children: row.map((cell, j)=>{\n                            var _attempt_find, _attempt_find1;\n                            return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"cell-\".concat(i, \"-\").concat(j),\n                                className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                                \"data-row\": i,\n                                \"data-col\": j,\n                                maxLength: 1,\n                                value: cellValue(i, j, cell),\n                                readOnly: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase(),\n                                onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                                onFocus: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 231,\n                                columnNumber: 19\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: cell\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 259,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 225,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 222,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pl-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl pb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \" font-semibold mb-6\",\n                                children: \"Skills Include:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 272,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-disc list-inside flex flex-wrap gap-8\",\n                                children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"\",\n                                        children: skill\n                                    }, skill, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 275,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 273,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 271,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-3 text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 281,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 267,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 220,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTUMsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBYTtRQUN6RFMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1nQixPQUFPO1FBQ1hDLFFBQVE7WUFDTjtnQkFDRVIsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFFQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1NBQ0Q7UUFDREssTUFBTTtZQUNKO2dCQUNFVCxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZ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Q0FBQ0MsSUFDVHpCLGNBQ0V5QixFQUFFQyxNQUFNLENBQUNKLEtBQUssQ0FBQ1QsV0FBVyxJQUMxQlgsS0FBS1csV0FBVyxJQUNoQnBCLEdBQ0FpQjtnQ0FHSmlCLFNBQ0U1RCxDQUFBQSxDQUFBQTsrQkFwQkcyQzs7OztxREEyQlAsUUFBQ0k7MENBQWFaOytCQUFKUTs7Ozt5Q0FDWDs7dUJBbENFakI7Ozs7O2dCQXNDWDs7Ozs7OztnQkFHR3NCLFdBQVU7Ozt3QkFJUkE7O2dHQUNIO2dDQUFJQTs7Ozs7OzswQ0FDSixRQUFDYztnQ0FBR2QsV0FBVTswQ0FDWGxELE9BQU9tRCxHQUFHLENBQUMsQ0FBQ2Msc0JBQ1gsUUFBQ0M7d0NBQUdoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNUEEsV0FBVTtrQ0FDVjVDLFlBQVlFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQWpRTVA7S0FBQUE7QUFtUU4sZUFBZUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvQ3Jvc3N3b3JkL0Nyb3Nzd29yZC50c3g/NzE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVJbWFnZXMgZnJvbSBcIi4vUGFydGljbGVJbWFnZXMvUGFydGljbGVJbWFnZXNcIjtcclxuXHJcbnR5cGUgQXR0ZW1wdE9iamVjdCA9IHtcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBhdHRlbXB0OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIERhdGFPYmplY3QgPSB7XHJcbiAgY2x1ZTogc3RyaW5nO1xyXG4gIGFuc3dlcjogc3RyaW5nO1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIG51bTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3Qgc2tpbGxzID0gW1xyXG4gIFwiSFRNTFwiLFxyXG4gIFwiQ1NTXCIsXHJcbiAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgXCJSZWFjdFwiLFxyXG4gIFwiTmV4dC5qc1wiLFxyXG4gIFwiUmVkdXhcIixcclxuICBcIlNDU1NcIixcclxuICBcIlRhaWx3aW5kXCIsXHJcbiAgXCJQb3N0Z3JlU1FMXCIsXHJcbl07XHJcblxyXG5jb25zdCBDcm9zc3dvcmRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2F0dGVtcHQsIHNldEF0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdFtdPihbXSk7XHJcbiAgY29uc3QgW25ld0F0dGVtcHQsIHNldE5ld0F0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdD4oKTtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlPERhdGFPYmplY3Q+KHtcclxuICAgIGNsdWU6IFwiQ2xpY2sgb24gYSBib3ggdG8gc3RhcnQuIFVzZSB0aGUgc2tpbGxzIGZvciBhbnN3ZXJzLlwiLFxyXG4gICAgYW5zd2VyOiBcInN0cmluZ1wiLFxyXG4gICAgcm93OiAwLFxyXG4gICAgY29sOiAwLFxyXG4gICAgbnVtOiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzdGF0ZURpcmVjdGlvbiwgc2V0U3RhdGVEaXJlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgYWNyb3NzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBtYWtlcyBhIHdlYnNpdGUgY29tZSBhbGl2ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0IGRvIHlvdSBjYWxsIHRoZSBidWlsZGluZyBibG9ja3Mgb2YgYSB3ZWJzaXRlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJIdG1sXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDYsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgQ1NTIHByZXByb2Nlc3NvciB0aGF0IGhlbHBzIHlvdSBkcmVzcyB1cCBhIHdlYnNpdGVcIixcclxuICAgICAgICBhbnN3ZXI6IFwiU2Fzc1wiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA3LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3Uga2VlcCBhIHdlYnNpdGUncyBkYXRhIGluIG9yZGVyLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWR1eFwiLFxyXG4gICAgICAgIHJvdzogOSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiA4LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGRvd246IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBmcmFtZXdvcmsgdGhhdCBtYWtlcyBidWlsZGluZyBzZXJ2ZXItcmVuZGVyZWQgUmVhY3QgYXBwcyBhIGJyZWV6ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiTmV4dFwiLFxyXG4gICAgICAgIHJvdzogMCxcclxuICAgICAgICBjb2w6IDksXHJcbiAgICAgICAgbnVtOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBidWlsZCBhIHdlYnNpdGUncyBwZXJzb25hbGl0eS5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVhY3RcIixcclxuICAgICAgICByb3c6IDEsXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSB1dGlsaXR5LWZpcnN0IENTUyBmcmFtZXdvcmsgdGhhdCBoZWxwcyB5b3UgY3JlYXRlIGEgd2Vic2l0ZSdzIHVuaXF1ZSBsb29rLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJUYWlsd2luZFwiLFxyXG4gICAgICAgIHJvdzogMixcclxuICAgICAgICBjb2w6IDMsXHJcbiAgICAgICAgbnVtOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgZ2l2ZXMgYSB3ZWJzaXRlIGEgbWFrZW92ZXI/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkNzc1wiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA1LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICAvLyBDcmVhdGVzIHRoZSBncmlkXHJcbiAgY29uc3Qgcm93cyA9IDEwO1xyXG4gIGNvbnN0IGNvbHMgPSAxMDtcclxuICBjb25zdCBncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PlxyXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY29scyB9LCAoKSA9PiBcIlwiKVxyXG4gICk7XHJcbiAgY29uc3QgeyBhY3Jvc3MsIGRvd24gfSA9IGRhdGE7XHJcbiAgLy9pbnNlcnQgdGhlIGFuc3dlcnMgYWNyb3NzIGFuZCBkb3duIGludG8gdGhlIGdyaWRcclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhhY3Jvc3MpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3ddW3dvcmQuY29sICsgaV0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvdyArIGldW3dvcmQuY29sXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTW92ZXMgdG8gdGhlIG5leHQgY2VsbFxyXG4gIGZ1bmN0aW9uIG5leHRDZWxsKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXh0XCIsIHN0YXRlRGlyZWN0aW9uKTtcclxuICAgIGxldCBuZXh0Q2VsbDtcclxuICAgIC8vIGxldCBkaXJlY3Rpb24gPSBmaW5kV29yZChyb3csIGNvbCk7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3d9LSR7Y29sICsgMX1gKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3cgKyAxfS0ke2NvbH1gKTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0Q2VsbCkgbmV4dENlbGwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8vIERlY2lkZXMgaWYgdGhlIGlucHV0IGlzIGNvcnJlY3RcclxuICBmdW5jdGlvbiBhdHRlbXB0TGV0dGVyKFxyXG4gICAgbGV0dGVyOiBzdHJpbmcsXHJcbiAgICBjZWxsOiBzdHJpbmcsXHJcbiAgICByb3c6IG51bWJlcixcclxuICAgIGNvbDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobGV0dGVyID09PSBjZWxsKSB7XHJcbiAgICAgIHNldEF0dGVtcHQoKHByZXZBdHRlbXB0KSA9PiBbXHJcbiAgICAgICAgLi4ucHJldkF0dGVtcHQsXHJcbiAgICAgICAgeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9LFxyXG4gICAgICBdKTtcclxuICAgICAgbmV4dENlbGwocm93LCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmV3QXR0ZW1wdCh7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmluZHMgdGhlIHdvcmQgdGhhdCB0aGUgY2VsbCBpcyBpblxyXG4gIGZ1bmN0aW9uIGZpbmRXb3JkKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIGFjcm9zc0NoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBkb3duQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiXCIpIHtcclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgICAgICBkb3duQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgICAgIGFjcm9zc0NoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWNyb3NzQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5yb3cgPT09IHJvdyAmJiB3b3JkLmNvbCA8PSBjb2wgJiYgd29yZC5jb2wgKyBsZW4gPiBjb2wpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImFjcm9zc1wiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImFjcm9zc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvd25DaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLmNvbCA9PT0gY29sICYmIHdvcmQucm93IDw9IHJvdyAmJiB3b3JkLnJvdyArIGxlbiA+IHJvdykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiZG93blwiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLypcclxuXHJcbiAgaWYgbGV0dGVyIGlzIGNhcGl0YWxpemVkIGhhdmUgdGhlIG51bWJlciB0aGVyZVxyXG5cclxuICBtYXliZSBqdXN0IHNldCBhbGwgdGhlIGp1bWJlcnMgYWNjb3JkaW5seVxyXG5cclxuICAqL1xyXG5cclxuICBjb25zdCBjZWxsVmFsdWUgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIsIGNlbGw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKT8uYXR0ZW1wdCA9PT1cclxuICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICB9IGVsc2UgaWYgKG5ld0F0dGVtcHQ/LnJvdyA9PT0gaSAmJiBuZXdBdHRlbXB0Py5jb2wgPT09IGopIHtcclxuICAgICAgcmV0dXJuIG5ld0F0dGVtcHQ/LmF0dGVtcHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcHgtNiBncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5EYWlseSBDcm9zc3dvcmQ8L2gxPiAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Z3JpZC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb2xscy0xMCB6LTlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGopID0+XHJcbiAgICAgICAgICAgICAgICBjZWxsICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BjZWxsLSR7aX0tJHtqfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHB5LTEgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIGZvbnQtYmxhY2sgdGV4dC1tZCB6LTEwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXJvdz17aX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbD17an1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbGxWYWx1ZShpLCBqLCBjZWxsKX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmF0dGVtcHQgPT09IGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TGV0dGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmF0dGVtcHQgPT09IGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgpID0+IG5leHRDZWxsKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKCkgPT4gZmluZFdvcmQoaSwgailcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+e2NlbGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNlwiPlxyXG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtVGVydGlhcnkgZm9udC1ib2xkIGxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgIFVzZSB0aGUgc2tpbGxzIHRvIHNvbHZlIHRoZSBjcm9zc3dvcmQgcHV6emxlLlxyXG4gICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHBiLTZcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCIgZm9udC1zZW1pYm9sZCBtYi02XCI+U2tpbGxzIEluY2x1ZGU6PC9oMz5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgZmxleCBmbGV4LXdyYXAgZ2FwLThcIj5cclxuICAgICAgICAgICAge3NraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiIGtleT17c2tpbGx9PlxyXG4gICAgICAgICAgICAgICAge3NraWxsfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0zIHRleHQtU2Vjb25kYXJ5IHRleHQteGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICB7Y3VycmVudFdvcmQuY2x1ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNraWxscyIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsIm5leHRDZWxsIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImF0dGVtcHRMZXR0ZXIiLCJsZXR0ZXIiLCJjZWxsIiwicHJldkF0dGVtcHQiLCJmaW5kV29yZCIsImRpcmVjdGlvbiIsImFjcm9zc0NoZWNrIiwiZG93bkNoZWNrIiwibGVuIiwiY2VsbFZhbHVlIiwiaiIsImZpbmQiLCJhIiwidG9VcHBlckNhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbnB1dCIsImlkIiwiZGF0YS1yb3ciLCJkYXRhLWNvbCIsIm1heExlbmd0aCIsInZhbHVlIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkZvY3VzIiwiaDMiLCJ1bCIsInNraWxsIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});