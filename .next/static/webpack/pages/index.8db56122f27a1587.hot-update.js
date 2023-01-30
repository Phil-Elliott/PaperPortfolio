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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"HTML\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"SASS\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"CSS\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    console.log(grid);\n    // Creates the cells that are displayed\n    const cells = grid.map((row, i)=>{\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n            children: row.map((cell, j)=>{\n                var _attempt_find, _attempt_find1, _attempt_find2;\n                return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"cell-\".concat(i, \"-\").concat(j),\n                    className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                    \"data-row\": i,\n                    \"data-col\": j,\n                    maxLength: 1,\n                    value: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase() ? cell : (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j ? newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt : \"\",\n                    defaultValue: \"\",\n                    readOnly: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase(),\n                    onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                    onFocus: ((_attempt_find2 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find2 === void 0 ? void 0 : _attempt_find2.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                }, j, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: cell\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n            lineNumber: 116,\n            columnNumber: 5\n        }, undefined);\n    });\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 col-span-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header text-center\",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 237,\n                columnNumber: 7\n            }, undefined),\n            cells,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-Tertiary font-bold leading-loose\",\n                        children: \"Use the skills to solve the crossword puzzle.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 243,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-3 text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 246,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 242,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 236,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0ExT01QO0tBQUFBO0FBNE9OLCtEQUFlQSxlQUFlQSxFQUFDLENBRS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzL0Nyb3Nzd29yZC9Dcm9zc3dvcmQudHN4PzcxOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcnRpY2xlSW1hZ2VzIGZyb20gXCIuL1BhcnRpY2xlSW1hZ2VzL1BhcnRpY2xlSW1hZ2VzXCI7XHJcblxyXG50eXBlIEF0dGVtcHRPYmplY3QgPSB7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgYXR0ZW1wdDogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBEYXRhT2JqZWN0ID0ge1xyXG4gIGNsdWU6IHN0cmluZztcclxuICBhbnN3ZXI6IHN0cmluZztcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBudW06IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IENyb3Nzd29yZFB1enpsZSA9ICgpID0+IHtcclxuICBjb25zdCBbYXR0ZW1wdCwgc2V0QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0W10+KFtdKTtcclxuICBjb25zdCBbbmV3QXR0ZW1wdCwgc2V0TmV3QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0PigpO1xyXG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGU8RGF0YU9iamVjdD4oe1xyXG4gICAgY2x1ZTogXCJDbGljayBvbiBhIGJveCB0byBzdGFydC4gVXNlIHRoZSBza2lsbHMgZm9yIGFuc3dlcnMuXCIsXHJcbiAgICBhbnN3ZXI6IFwic3RyaW5nXCIsXHJcbiAgICByb3c6IDAsXHJcbiAgICBjb2w6IDAsXHJcbiAgICBudW06IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXRlRGlyZWN0aW9uLCBzZXRTdGF0ZURpcmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBhY3Jvc3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IG1ha2VzIGEgd2Vic2l0ZSBjb21lIGFsaXZlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQgZG8geW91IGNhbGwgdGhlIGJ1aWxkaW5nIGJsb2NrcyBvZiBhIHdlYnNpdGU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkhUTUxcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBDU1MgcHJlcHJvY2Vzc29yIHRoYXQgaGVscHMgeW91IGRyZXNzIHVwIGEgd2Vic2l0ZVwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJTQVNTXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDcsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBrZWVwIGEgd2Vic2l0ZSdzIGRhdGEgaW4gb3JkZXIuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgcm93OiA5LFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDgsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZG93bjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGZyYW1ld29yayB0aGF0IG1ha2VzIGJ1aWxkaW5nIHNlcnZlci1yZW5kZXJlZCBSZWFjdCBhcHBzIGEgYnJlZXplP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJOZXh0XCIsXHJcbiAgICAgICAgcm93OiAwLFxyXG4gICAgICAgIGNvbDogOSxcclxuICAgICAgICBudW06IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGJ1aWxkIGEgd2Vic2l0ZSdzIHBlcnNvbmFsaXR5LlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWFjdFwiLFxyXG4gICAgICAgIHJvdzogMSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiAyLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIHV0aWxpdHktZmlyc3QgQ1NTIGZyYW1ld29yayB0aGF0IGhlbHBzIHlvdSBjcmVhdGUgYSB3ZWJzaXRlJ3MgdW5pcXVlIGxvb2suXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlRhaWx3aW5kXCIsXHJcbiAgICAgICAgcm93OiAyLFxyXG4gICAgICAgIGNvbDogMyxcclxuICAgICAgICBudW06IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBnaXZlcyBhIHdlYnNpdGUgYSBtYWtlb3Zlcj9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiQ1NTXCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIC8vIENyZWF0ZXMgdGhlIGdyaWRcclxuICBjb25zdCByb3dzID0gMTA7XHJcbiAgY29uc3QgY29scyA9IDEwO1xyXG4gIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sICgpID0+XHJcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb2xzIH0sICgpID0+IFwiXCIpXHJcbiAgKTtcclxuICBjb25zdCB7IGFjcm9zcywgZG93biB9ID0gZGF0YTtcclxuICAvL2luc2VydCB0aGUgYW5zd2VycyBhY3Jvc3MgYW5kIGRvd24gaW50byB0aGUgZ3JpZFxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvd11bd29yZC5jb2wgKyBpXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhkb3duKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93ICsgaV1bd29yZC5jb2xdID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhncmlkKTtcclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgY2VsbHMgdGhhdCBhcmUgZGlzcGxheWVkXHJcbiAgY29uc3QgY2VsbHMgPSBncmlkLm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVNlY29uZGFyeSBncmlkIGdyaWQtY29scy0xMCBncmlkLXJvbGxzLTEwIHotOVwiPlxyXG4gICAgICB7cm93Lm1hcCgoY2VsbCwgaikgPT5cclxuICAgICAgICBjZWxsICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgICAgaWQ9e2BjZWxsLSR7aX0tJHtqfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSBweS0xIHRleHQtY2VudGVyIHVwcGVyY2FzZSBmb250LWJsYWNrIHRleHQtbWQgei0xMFwiXHJcbiAgICAgICAgICAgIGRhdGEtcm93PXtpfVxyXG4gICAgICAgICAgICBkYXRhLWNvbD17an1cclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICA/IGNlbGxcclxuICAgICAgICAgICAgICAgIDogbmV3QXR0ZW1wdD8ucm93ID09PSBpICYmIG5ld0F0dGVtcHQ/LmNvbCA9PT0galxyXG4gICAgICAgICAgICAgICAgPyBuZXdBdHRlbXB0Py5hdHRlbXB0XHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICByZWFkT25seT17XHJcbiAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25Gb2N1cz17XHJcbiAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICA/ICgpID0+IG5leHRDZWxsKGksIGopXHJcbiAgICAgICAgICAgICAgICA6ICgpID0+IGZpbmRXb3JkKGksIGopXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2NlbGx9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKSk7XHJcblxyXG4gIC8vIE1vdmVzIHRvIHRoZSBuZXh0IGNlbGxcclxuICBmdW5jdGlvbiBuZXh0Q2VsbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBzdGF0ZURpcmVjdGlvbik7XHJcbiAgICBsZXQgbmV4dENlbGw7XHJcbiAgICAvLyBsZXQgZGlyZWN0aW9uID0gZmluZFdvcmQocm93LCBjb2wpO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93fS0ke2NvbCArIDF9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93ICsgMX0tJHtjb2x9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dENlbGwpIG5leHRDZWxsLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWNpZGVzIGlmIHRoZSBpbnB1dCBpcyBjb3JyZWN0XHJcbiAgZnVuY3Rpb24gYXR0ZW1wdExldHRlcihcclxuICAgIGxldHRlcjogc3RyaW5nLFxyXG4gICAgY2VsbDogc3RyaW5nLFxyXG4gICAgcm93OiBudW1iZXIsXHJcbiAgICBjb2w6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGxldHRlciA9PT0gY2VsbCkge1xyXG4gICAgICBzZXRBdHRlbXB0KChwcmV2QXR0ZW1wdCkgPT4gW1xyXG4gICAgICAgIC4uLnByZXZBdHRlbXB0LFxyXG4gICAgICAgIHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIG5leHRDZWxsKHJvdywgY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5ld0F0dGVtcHQoeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZpbmRzIHRoZSB3b3JkIHRoYXQgdGhlIGNlbGwgaXMgaW5cclxuICBmdW5jdGlvbiBmaW5kV29yZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBcIlwiO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBhY3Jvc3NDaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgZG93bkNoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICAgICAgZG93bkNoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgICAgICBhY3Jvc3NDaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjcm9zc0NoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQucm93ID09PSByb3cgJiYgd29yZC5jb2wgPD0gY29sICYmIHdvcmQuY29sICsgbGVuID4gY29sKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJhY3Jvc3NcIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhY3Jvc3NcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb3duQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5jb2wgPT09IGNvbCAmJiB3b3JkLnJvdyA8PSByb3cgJiYgd29yZC5yb3cgKyBsZW4gPiByb3cpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweC02IGNvbC1zcGFuLTFcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtY2VudGVyXCI+RGFpbHkgQ3Jvc3N3b3JkPC9oMT5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGdyaWQgZ3JpZC1jb2xzLTEwIGdyaWQtcm9sbHMtMTAgei05XCI+ICovfVxyXG4gICAgICB7Y2VsbHN9XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtVGVydGlhcnkgZm9udC1ib2xkIGxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgIFVzZSB0aGUgc2tpbGxzIHRvIHNvbHZlIHRoZSBjcm9zc3dvcmQgcHV6emxlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0zIHRleHQtU2Vjb25kYXJ5IHRleHQteGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICB7Y3VycmVudFdvcmQuY2x1ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJjZWxscyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsImNlbGwiLCJqIiwiaW5wdXQiLCJpZCIsImRhdGEtcm93IiwiZGF0YS1jb2wiLCJtYXhMZW5ndGgiLCJ2YWx1ZSIsImZpbmQiLCJhIiwidG9VcHBlckNhc2UiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsIm9uQ2hhbmdlIiwiZSIsImF0dGVtcHRMZXR0ZXIiLCJ0YXJnZXQiLCJvbkZvY3VzIiwibmV4dENlbGwiLCJmaW5kV29yZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImxldHRlciIsInByZXZBdHRlbXB0IiwiZGlyZWN0aW9uIiwiYWNyb3NzQ2hlY2siLCJkb3duQ2hlY2siLCJsZW4iLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});