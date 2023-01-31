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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst skills = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"React\",\n    \"Next.js\",\n    \"Redux\",\n    \"SCSS\",\n    \"Tailwind\",\n    \"PostgreSQL\"\n];\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"Html\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"Sass\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"Css\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n\r\n  if letter is capitalized have the number there\r\n\r\n  maybe just set all the jumbers accordinly\r\n\r\n  */ const cellValue = (i, j, cell)=>{\n        var _attempt_find;\n        if (((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase()) {\n            return cell;\n        } else if ((newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j) {\n            return newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt;\n        } else {\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full lg3:px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"uppercase text-fluid-9xl xs:text-5xl article-header bg-Secondary text-center text-Primary font-serif py-2 tracking-widest px-4 mb-6 rounded-sm \",\n                children: \"Code Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 221,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" md:grid grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: grid.map((row, i)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                                children: row.map((cell, j)=>{\n                                    var _attempt_find, _attempt_find1;\n                                    return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"cell-\".concat(i, \"-\").concat(j),\n                                        className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                                        \"data-row\": i,\n                                        \"data-col\": j,\n                                        maxLength: 1,\n                                        value: cellValue(i, j, cell),\n                                        readOnly: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase(),\n                                        onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                                        onFocus: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                                    }, j, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 234,\n                                        columnNumber: 21\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: cell\n                                    }, j, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 262,\n                                        columnNumber: 21\n                                    }, undefined);\n                                })\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 228,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 225,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:pl-6 pt-2 font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl pb-6 text-Tertiary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"mt-6 md:mt-0 font-semibold mb-6 text-Secondary\",\n                                        children: \"Skills Include:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 272,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"list-disc list-inside flex flex-wrap gap-7 \",\n                                        children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"\",\n                                                children: skill\n                                            }, skill, false, {\n                                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                                lineNumber: 277,\n                                                columnNumber: 17\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                        lineNumber: 275,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 271,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-Secondary text-xl font-serif leading-loose\",\n                                children: currentWord.clue\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                                lineNumber: 283,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 270,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 224,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 220,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTUMsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBYTtRQUN6RFMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1nQixPQUFPO1FBQ1hDLFFBQVE7WUFDTjtnQkFDRVIsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFFQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1NBQ0Q7UUFDREssTUFBTTtZQUNKO2dCQUNFVCxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtJQUNIO0lBRUEsbUJBQW1CO0lBQ25CLE1BQU1NLE9BQU87SUFDYixNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsT0FBT0MsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVFMO0lBQUssR0FBRyxJQUN4Q0csTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVFKO1FBQUssR0FBRyxJQUFNO0lBRXJDLE1BQU0sRUFBRUgsT0FBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Y7SUFDekIsa0RBQWtEO0lBQ2xELEtBQUssSUFBSSxDQUFDUyxLQUFLQyxLQUFLLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1gsUUFBUztRQUM5QyxJQUFLLElBQUlZLElBQUksR0FBR0EsSUFBSUgsS0FBS2hCLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFSyxJQUFLO1lBQzNDUixJQUFJLENBQUNLLEtBQUtmLEdBQUcsQ0FBQyxDQUFDZSxLQUFLZCxHQUFHLEdBQUdpQixFQUFFLEdBQUdILEtBQUtoQixNQUFNLENBQUNtQixFQUFFO1FBQy9DO0lBQ0Y7SUFDQSxLQUFLLElBQUksQ0FBQ0osTUFBS0MsTUFBSyxJQUFJQyxPQUFPQyxPQUFPLENBQUNWLE1BQU87UUFDNUMsSUFBSyxJQUFJVyxLQUFJLEdBQUdBLEtBQUlILE1BQUtoQixNQUFNLENBQUNjLE1BQU0sRUFBRUssS0FBSztZQUMzQ1IsSUFBSSxDQUFDSyxNQUFLZixHQUFHLEdBQUdrQixHQUFFLENBQUNILE1BQUtkLEdBQUcsQ0FBQyxHQUFHYyxNQUFLaEIsTUFBTSxDQUFDbUIsR0FBRTtRQUMvQztJQUNGO0lBRUEseUJBQXlCO0lBQ3pCLFNBQVNDLFNBQVNuQixHQUFXLEVBQUVDLEdBQVcsRUFBRTtRQUMxQ21CLFFBQVFDLEdBQUcsQ0FBQyxRQUFRbEI7UUFDcEIsSUFBSWdCO1FBQ0osc0NBQXNDO1FBRXRDLElBQUloQixtQkFBbUIsVUFBVTtZQUMvQmdCLFdBQVdHLFNBQVNDLGNBQWMsQ0FBQyxRQUFldEIsT0FBUEQsS0FBSSxLQUFXLE9BQVJDLE1BQU07UUFDMUQsT0FBTyxJQUFJRSxtQkFBbUIsUUFBUTtZQUNwQ2dCLFdBQVdHLFNBQVNDLGNBQWMsQ0FBQyxRQUFtQnRCLE9BQVhELE1BQU0sR0FBRSxLQUFPLE9BQUpDO1FBQ3hELENBQUM7UUFDRCxJQUFJa0IsVUFBVUEsU0FBU0ssS0FBSztJQUM5QjtJQUVBLGtDQUFrQztJQUNsQyxTQUFTQyxjQUNQQyxNQUFjLEVBQ2RDLElBQVksRUFDWjNCLEdBQVcsRUFDWEMsR0FBVyxFQUNYO1FBQ0EsSUFBSXlCLFdBQVdDLE1BQU07WUFDbkJsQyxXQUFXLENBQUNtQyxjQUFnQjt1QkFDdkJBO29CQUNIO3dCQUFFNUIsS0FBS0E7d0JBQUtDLEtBQUtBO3dCQUFLVCxTQUFTa0M7b0JBQU87aUJBQ3ZDO1lBQ0RQLFNBQVNuQixLQUFLQztRQUNoQixPQUFPO1lBQ0xOLGNBQWM7Z0JBQUVLLEtBQUtBO2dCQUFLQyxLQUFLQTtnQkFBS1QsU0FBU2tDO1lBQU87UUFDdEQsQ0FBQztJQUNIO0lBRUEscUNBQXFDO0lBQ3JDLFNBQVNHLFNBQVM3QixHQUFXLEVBQUVDLEdBQVcsRUFBRTtRQUMxQyxJQUFJNkIsWUFBWTtRQUVoQixJQUFJM0IsbUJBQW1CLFVBQVU7WUFDL0I0QixZQUFZbkM7UUFDZCxPQUFPLElBQUlrQyxjQUFjLFFBQVE7WUFDL0JFLFVBQVVwQztRQUNaLENBQUM7UUFFRCxJQUFJa0MsY0FBYyxJQUFJO1lBQ3BCLEtBQUssSUFBSSxDQUFDaEIsS0FBS0MsS0FBSyxJQUFJQyxPQUFPQyxPQUFPLENBQUNWLE1BQU87Z0JBQzVDeUIsVUFBVWpCO1lBQ1o7WUFDQSxLQUFLLElBQUksQ0FBQ0QsTUFBS0MsTUFBSyxJQUFJQyxPQUFPQyxPQUFPLENBQUNYLFFBQVM7Z0JBQzlDeUIsWUFBWWhCO1lBQ2Q7UUFDRixDQUFDO1FBRUQsU0FBU2dCLFlBQVloQixJQUFnQixFQUFFO1lBQ3JDLElBQUlrQixNQUFNbEIsS0FBS2hCLE1BQU0sQ0FBQ2MsTUFBTTtZQUM1QixJQUFJRSxLQUFLZixHQUFHLEtBQUtBLE9BQU9lLEtBQUtkLEdBQUcsSUFBSUEsT0FBT2MsS0FBS2QsR0FBRyxHQUFHZ0MsTUFBTWhDLEtBQUs7Z0JBQy9ESixlQUFla0I7Z0JBQ2ZYLGtCQUFrQjtnQkFDbEIwQixZQUFZO2dCQUNaO1lBQ0YsQ0FBQztRQUNIO1FBRUEsU0FBU0UsVUFBVWpCLElBQWdCLEVBQUU7WUFDbkMsSUFBSWtCLE1BQU1sQixLQUFLaEIsTUFBTSxDQUFDYyxNQUFNO1lBQzVCLElBQUlFLEtBQUtkLEdBQUcsS0FBS0EsT0FBT2MsS0FBS2YsR0FBRyxJQUFJQSxPQUFPZSxLQUFLZixHQUFHLEdBQUdpQyxNQUFNakMsS0FBSztnQkFDL0RILGVBQWVrQjtnQkFDZlgsa0JBQWtCO2dCQUNsQjBCLFlBQVk7Z0JBQ1o7WUFDRixDQUFDO1FBQ0g7UUFFQSxPQUFPQTtJQUNUO0lBRUE7O1FBU0UsSUFDRXRDLENBQUFBLENBQUFBLGdCQUFBQSxRQUFRNEMsSUFBSSxDQUFDLENBQUNDLElBQU1BOztRQUl0QixPQUFPLElBQUkzQyxDQUFBQSx1QkFBQUE7O1FBRVgsT0FBTztZQUNMLE9BQU87UUFDVCxDQUFDO0lBQ0g7SUFFQSxxQkFDRSxRQUFDNkM7UUFBSUMsV0FBVTs7Ozs7Ozs7OzswQkFJYixRQUFDRDtnQkFBSUMsV0FBVTs7Ozs7dUZBTUxBOzBDQUVDeEMsSUFBSTBDLEdBQUcsQ0FBQzs7K0ZBQ1BmLEVBQUFBO3dDQUdJaUIsSUFBSSxRQUFhVDt3Q0FDakJLLFNBQUFBLDZEQUFVO3dDQUNWSyxZQUFVM0I7d0NBQ1Y0QixZQUFVWDt3Q0FDVlksV0FBVzt3Q0FDWEMsT0FBT2QsVUFBVWhCLEdBQUdpQixHQUFHUixRQUFBQSw2REFBQUE7d0NBQ3ZCc0IsVUFDRXpELENBQUFBLENBQUFBLGdCQUFBQSxRQUFRNEM7d0NBR1ZjLFVBQVUsQ0FBQ0MsSUFDVDFCLGNBQ0UwQixFQUFFQyxNQUFNLENBQUNKLEtBQUssQ0FBQ1YsV0FBVyxJQUMxQlgsS0FBS1csV0FBVyxJQUNoQnBCLEdBQ0FpQjt3Q0FHSmtCLFNBQ0U3RCxDQUFBQSxDQUFBQTt1Q0FwQkcyQzs7Ozs2REEyQlAsUUFBQ0k7a0RBQWFaO3VDQUFKUTs7OztpREFDWDs7K0JBbENFakI7Ozs7O3dCQXNDWDs7Ozs7Ozt3QkFHR3NCLFdBQVU7OztnQ0FDUkE7O3dHQUNIO3dDQUFJQSxXQUFVOzs7Ozs7O2tEQUdkLFFBQUNlO3dDQUFHZixXQUFVO2tEQUNYbEQsT0FBT29ELEdBQUcsQ0FBQyxDQUFDYyxzQkFDWCxRQUFDQztnREFBR2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU1QQSxXQUFVOzBDQUNWNUMsWUFBWUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBcFFNUDtLQUFBQTtBQXNRTixlQUFlQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeD83MTliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZUltYWdlcyBmcm9tIFwiLi9QYXJ0aWNsZUltYWdlcy9QYXJ0aWNsZUltYWdlc1wiO1xyXG5cclxudHlwZSBBdHRlbXB0T2JqZWN0ID0ge1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIGF0dGVtcHQ6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgRGF0YU9iamVjdCA9IHtcclxuICBjbHVlOiBzdHJpbmc7XHJcbiAgYW5zd2VyOiBzdHJpbmc7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgbnVtOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBza2lsbHMgPSBbXHJcbiAgXCJIVE1MXCIsXHJcbiAgXCJDU1NcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIlJlYWN0XCIsXHJcbiAgXCJOZXh0LmpzXCIsXHJcbiAgXCJSZWR1eFwiLFxyXG4gIFwiU0NTU1wiLFxyXG4gIFwiVGFpbHdpbmRcIixcclxuICBcIlBvc3RncmVTUUxcIixcclxuXTtcclxuXHJcbmNvbnN0IENyb3Nzd29yZFB1enpsZSA9ICgpID0+IHtcclxuICBjb25zdCBbYXR0ZW1wdCwgc2V0QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0W10+KFtdKTtcclxuICBjb25zdCBbbmV3QXR0ZW1wdCwgc2V0TmV3QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0PigpO1xyXG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGU8RGF0YU9iamVjdD4oe1xyXG4gICAgY2x1ZTogXCJDbGljayBvbiBhIGJveCB0byBzdGFydC4gVXNlIHRoZSBza2lsbHMgZm9yIGFuc3dlcnMuXCIsXHJcbiAgICBhbnN3ZXI6IFwic3RyaW5nXCIsXHJcbiAgICByb3c6IDAsXHJcbiAgICBjb2w6IDAsXHJcbiAgICBudW06IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXRlRGlyZWN0aW9uLCBzZXRTdGF0ZURpcmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBhY3Jvc3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IG1ha2VzIGEgd2Vic2l0ZSBjb21lIGFsaXZlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQgZG8geW91IGNhbGwgdGhlIGJ1aWxkaW5nIGJsb2NrcyBvZiBhIHdlYnNpdGU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkh0bWxcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBDU1MgcHJlcHJvY2Vzc29yIHRoYXQgaGVscHMgeW91IGRyZXNzIHVwIGEgd2Vic2l0ZVwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJTYXNzXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDcsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBrZWVwIGEgd2Vic2l0ZSdzIGRhdGEgaW4gb3JkZXIuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgcm93OiA5LFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDgsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZG93bjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGZyYW1ld29yayB0aGF0IG1ha2VzIGJ1aWxkaW5nIHNlcnZlci1yZW5kZXJlZCBSZWFjdCBhcHBzIGEgYnJlZXplP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJOZXh0XCIsXHJcbiAgICAgICAgcm93OiAwLFxyXG4gICAgICAgIGNvbDogOSxcclxuICAgICAgICBudW06IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGJ1aWxkIGEgd2Vic2l0ZSdzIHBlcnNvbmFsaXR5LlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWFjdFwiLFxyXG4gICAgICAgIHJvdzogMSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiAyLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIHV0aWxpdHktZmlyc3QgQ1NTIGZyYW1ld29yayB0aGF0IGhlbHBzIHlvdSBjcmVhdGUgYSB3ZWJzaXRlJ3MgdW5pcXVlIGxvb2suXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlRhaWx3aW5kXCIsXHJcbiAgICAgICAgcm93OiAyLFxyXG4gICAgICAgIGNvbDogMyxcclxuICAgICAgICBudW06IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBnaXZlcyBhIHdlYnNpdGUgYSBtYWtlb3Zlcj9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiQ3NzXCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIC8vIENyZWF0ZXMgdGhlIGdyaWRcclxuICBjb25zdCByb3dzID0gMTA7XHJcbiAgY29uc3QgY29scyA9IDEwO1xyXG4gIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sICgpID0+XHJcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb2xzIH0sICgpID0+IFwiXCIpXHJcbiAgKTtcclxuICBjb25zdCB7IGFjcm9zcywgZG93biB9ID0gZGF0YTtcclxuICAvL2luc2VydCB0aGUgYW5zd2VycyBhY3Jvc3MgYW5kIGRvd24gaW50byB0aGUgZ3JpZFxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvd11bd29yZC5jb2wgKyBpXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhkb3duKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93ICsgaV1bd29yZC5jb2xdID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNb3ZlcyB0byB0aGUgbmV4dCBjZWxsXHJcbiAgZnVuY3Rpb24gbmV4dENlbGwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5leHRcIiwgc3RhdGVEaXJlY3Rpb24pO1xyXG4gICAgbGV0IG5leHRDZWxsO1xyXG4gICAgLy8gbGV0IGRpcmVjdGlvbiA9IGZpbmRXb3JkKHJvdywgY29sKTtcclxuXHJcbiAgICBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiYWNyb3NzXCIpIHtcclxuICAgICAgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbC0ke3Jvd30tJHtjb2wgKyAxfWApO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbC0ke3JvdyArIDF9LSR7Y29sfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHRDZWxsKSBuZXh0Q2VsbC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVjaWRlcyBpZiB0aGUgaW5wdXQgaXMgY29ycmVjdFxyXG4gIGZ1bmN0aW9uIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICBsZXR0ZXI6IHN0cmluZyxcclxuICAgIGNlbGw6IHN0cmluZyxcclxuICAgIHJvdzogbnVtYmVyLFxyXG4gICAgY29sOiBudW1iZXJcclxuICApIHtcclxuICAgIGlmIChsZXR0ZXIgPT09IGNlbGwpIHtcclxuICAgICAgc2V0QXR0ZW1wdCgocHJldkF0dGVtcHQpID0+IFtcclxuICAgICAgICAuLi5wcmV2QXR0ZW1wdCxcclxuICAgICAgICB7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICBuZXh0Q2VsbChyb3csIGNvbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROZXdBdHRlbXB0KHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaW5kcyB0aGUgd29yZCB0aGF0IHRoZSBjZWxsIGlzIGluXHJcbiAgZnVuY3Rpb24gZmluZFdvcmQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gXCJcIjtcclxuXHJcbiAgICBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiYWNyb3NzXCIpIHtcclxuICAgICAgYWNyb3NzQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIGRvd25DaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJcIikge1xyXG4gICAgICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhkb3duKSkge1xyXG4gICAgICAgIGRvd25DaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhhY3Jvc3MpKSB7XHJcbiAgICAgICAgYWNyb3NzQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3Jvc3NDaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLnJvdyA9PT0gcm93ICYmIHdvcmQuY29sIDw9IGNvbCAmJiB3b3JkLmNvbCArIGxlbiA+IGNvbCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiYWNyb3NzXCIpO1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IFwiYWNyb3NzXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZG93bkNoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQuY29sID09PSBjb2wgJiYgd29yZC5yb3cgPD0gcm93ICYmIHdvcmQucm93ICsgbGVuID4gcm93KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKlxyXG5cclxuICBpZiBsZXR0ZXIgaXMgY2FwaXRhbGl6ZWQgaGF2ZSB0aGUgbnVtYmVyIHRoZXJlXHJcblxyXG4gIG1heWJlIGp1c3Qgc2V0IGFsbCB0aGUganVtYmVycyBhY2NvcmRpbmx5XHJcblxyXG4gICovXHJcblxyXG4gIGNvbnN0IGNlbGxWYWx1ZSA9IChpOiBudW1iZXIsIGo6IG51bWJlciwgY2VsbDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gY2VsbDtcclxuICAgIH0gZWxzZSBpZiAobmV3QXR0ZW1wdD8ucm93ID09PSBpICYmIG5ld0F0dGVtcHQ/LmNvbCA9PT0gaikge1xyXG4gICAgICByZXR1cm4gbmV3QXR0ZW1wdD8uYXR0ZW1wdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBsZzM6cHgtNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZmx1aWQtOXhsIHhzOnRleHQtNXhsIGFydGljbGUtaGVhZGVyIGJnLVNlY29uZGFyeSB0ZXh0LWNlbnRlciB0ZXh0LVByaW1hcnkgZm9udC1zZXJpZiBweS0yIHRyYWNraW5nLXdpZGVzdCBweC00IG1iLTYgcm91bmRlZC1zbSBcIj5cclxuICAgICAgICBDb2RlIENyb3Nzd29yZFxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDpncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtncmlkLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGdyaWQgZ3JpZC1jb2xzLTEwIGdyaWQtcm9sbHMtMTAgei05XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgaikgPT5cclxuICAgICAgICAgICAgICAgICAgY2VsbCAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgY2VsbC0ke2l9LSR7an1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHB5LTEgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIGZvbnQtYmxhY2sgdGV4dC1tZCB6LTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcm93PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb2w9e2p9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2VsbFZhbHVlKGksIGosIGNlbGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8uYXR0ZW1wdCA9PT0gY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8uYXR0ZW1wdCA9PT0gY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKSA9PiBuZXh0Q2VsbChpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogKCkgPT4gZmluZFdvcmQoaSwgailcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfT57Y2VsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnBsLTYgcHQtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBwYi02IHRleHQtVGVydGlhcnlcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTYgbWQ6bXQtMCBmb250LXNlbWlib2xkIG1iLTYgdGV4dC1TZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICBTa2lsbHMgSW5jbHVkZTpcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBmbGV4IGZsZXgtd3JhcCBnYXAtNyBcIj5cclxuICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIiBrZXk9e3NraWxsfT5cclxuICAgICAgICAgICAgICAgICAge3NraWxsfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1TZWNvbmRhcnkgdGV4dC14bCBmb250LXNlcmlmIGxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgICAge2N1cnJlbnRXb3JkLmNsdWV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNraWxscyIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsIm5leHRDZWxsIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImF0dGVtcHRMZXR0ZXIiLCJsZXR0ZXIiLCJjZWxsIiwicHJldkF0dGVtcHQiLCJmaW5kV29yZCIsImRpcmVjdGlvbiIsImFjcm9zc0NoZWNrIiwiZG93bkNoZWNrIiwibGVuIiwiY2VsbFZhbHVlIiwiaiIsImZpbmQiLCJhIiwidG9VcHBlckNhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlucHV0IiwiaWQiLCJkYXRhLXJvdyIsImRhdGEtY29sIiwibWF4TGVuZ3RoIiwidmFsdWUiLCJyZWFkT25seSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uRm9jdXMiLCJoMyIsInVsIiwic2tpbGwiLCJsaSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});