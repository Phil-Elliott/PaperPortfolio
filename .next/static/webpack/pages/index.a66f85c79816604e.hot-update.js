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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"HTML\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"SASS\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"CSS\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    /*\r\n    1) Need to make sure question is showing when clicked and not after starting to type\r\n            - use the focus instead of change\r\n\r\n\r\n    Put the number inside of the 1st cell of a word\r\n\r\n  */ // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Creates the cells that are displayed\n    const cells = grid.map((row, i)=>{\n        return row.map((cell, j)=>{\n            var _attempt_find, _attempt_find1, _attempt_find2;\n            return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"cell-\".concat(i, \"-\").concat(j),\n                className: \"bg-Primary border-2 border-Secondary text-center uppercase font-medium text-xl p-2 z-10\",\n                \"data-row\": i,\n                \"data-col\": j,\n                maxLength: 1,\n                value: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase() ? cell : (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j ? newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt : \"\",\n                defaultValue: \"\",\n                readOnly: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase(),\n                onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                onFocus: ((_attempt_find2 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find2 === void 0 ? void 0 : _attempt_find2.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n            }, j, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: cell\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, undefined);\n        });\n    });\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n      Get numbers in the box\r\n      Display the question on the bottom \r\n      Jump over cells that are done \r\n\r\n  */ // useEffect(() => {\n    //   console.log(currentWord);\n    // }, [currentWord]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 col-span-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header \",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-10\",\n                    children: cells\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 257,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 254,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-Secondary text-2xl font-bold font-serif\",\n                    children: currentWord.clue\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 262,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 261,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 252,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  1) Loose the particles \r\n  2) Remove the skills \r\n  3) Have a hint button \r\n  4) Have an autofill button\r\n  5) Have a reset button\r\n  6) Maybe cache where they are with it\r\n\r\n\r\n\r\n\r\n\r\nPut particles in black background and have them bouncing around but make sure the white is above it somehow\r\n\r\n\r\n\r\n\r\nCreate an algorithm that will position the words\r\nGives each item a row and a column\r\n\r\nCreate a grid \r\n  - 10 x 10\r\n  - bCan have your object created by the algorithm inserted into those blocks on the grid\r\n  - \r\n\r\n\r\n\r\n\r\n\r\nHave a front and a back \r\nHow to make it flip?\r\n  Have a button that flips it\r\n\r\n- Front\r\n    - Crossword Puzzle\r\n- Back\r\n    - Questions\r\n      - Answers to questions\r\n      - Maybe black out and have it reveal the answer when you click on it\r\n\r\n\r\n- Functionality \r\n      - can write in the blocks \r\n      - when answer is correct the letters stay in the block\r\n      - when answer is incorrect the letters disapear\r\n\r\n      -\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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S0EsT0FBT2MsS0FBS2YsR0FBRztnQkFDOUJILGVBQWVrQjtnQkFDZlg7OztZQUdGLENBQUM7UUFDSDtRQUVBLE9BQU84QztJQUNUO0lBRUE7SUFRQSw4QkFBOEI7SUFDOUI7SUFFQTtRQUNPekI7Ozs7MEJBQzZCOzs7Ozs7O2dCQUMzQkEsU0FBQUEsNkRBQVU7MEJBR2I7O3VGQUNHTjs7Ozs7Ozs7Ozs7MEJBR0wsUUFBQ3VCO2dCQUFJakIsV0FBVTswQkFDYjtvQkFBR0EsV0FBVTs4QkFDVjdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBMVBNTDtLQUFBQTtBQTRQTixlQUFlQSxnQkFBZ0IsQ0FFL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvQ3Jvc3N3b3JkL0Nyb3Nzd29yZC50c3g/NzE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVJbWFnZXMgZnJvbSBcIi4vUGFydGljbGVJbWFnZXMvUGFydGljbGVJbWFnZXNcIjtcclxuXHJcbnR5cGUgQXR0ZW1wdE9iamVjdCA9IHtcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBhdHRlbXB0OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIERhdGFPYmplY3QgPSB7XHJcbiAgY2x1ZTogc3RyaW5nO1xyXG4gIGFuc3dlcjogc3RyaW5nO1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIG51bTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQ3Jvc3N3b3JkUHV6emxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdHRlbXB0LCBzZXRBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3RbXT4oW10pO1xyXG4gIGNvbnN0IFtuZXdBdHRlbXB0LCBzZXROZXdBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3Q+KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxEYXRhT2JqZWN0Pih7XHJcbiAgICBjbHVlOiBcIkNsaWNrIG9uIGEgYm94IHRvIHN0YXJ0LiBVc2UgdGhlIHNraWxscyBmb3IgYW5zd2Vycy5cIixcclxuICAgIGFuc3dlcjogXCJzdHJpbmdcIixcclxuICAgIHJvdzogMCxcclxuICAgIGNvbDogMCxcclxuICAgIG51bTogMCxcclxuICB9KTtcclxuICBjb25zdCBbc3RhdGVEaXJlY3Rpb24sIHNldFN0YXRlRGlyZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGFjcm9zczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgbWFrZXMgYSB3ZWJzaXRlIGNvbWUgYWxpdmU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCBkbyB5b3UgY2FsbCB0aGUgYnVpbGRpbmcgYmxvY2tzIG9mIGEgd2Vic2l0ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSFRNTFwiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA2LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIENTUyBwcmVwcm9jZXNzb3IgdGhhdCBoZWxwcyB5b3UgZHJlc3MgdXAgYSB3ZWJzaXRlXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlNBU1NcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGtlZXAgYSB3ZWJzaXRlJ3MgZGF0YSBpbiBvcmRlci5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVkdXhcIixcclxuICAgICAgICByb3c6IDksXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogOCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkb3duOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgZnJhbWV3b3JrIHRoYXQgbWFrZXMgYnVpbGRpbmcgc2VydmVyLXJlbmRlcmVkIFJlYWN0IGFwcHMgYSBicmVlemU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIk5leHRcIixcclxuICAgICAgICByb3c6IDAsXHJcbiAgICAgICAgY29sOiA5LFxyXG4gICAgICAgIG51bTogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3UgYnVpbGQgYSB3ZWJzaXRlJ3MgcGVyc29uYWxpdHkuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgdXRpbGl0eS1maXJzdCBDU1MgZnJhbWV3b3JrIHRoYXQgaGVscHMgeW91IGNyZWF0ZSBhIHdlYnNpdGUncyB1bmlxdWUgbG9vay5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiVGFpbHdpbmRcIixcclxuICAgICAgICByb3c6IDIsXHJcbiAgICAgICAgY29sOiAzLFxyXG4gICAgICAgIG51bTogMyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IGdpdmVzIGEgd2Vic2l0ZSBhIG1ha2VvdmVyP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJDU1NcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgLypcclxuICAgIDEpIE5lZWQgdG8gbWFrZSBzdXJlIHF1ZXN0aW9uIGlzIHNob3dpbmcgd2hlbiBjbGlja2VkIGFuZCBub3QgYWZ0ZXIgc3RhcnRpbmcgdG8gdHlwZVxyXG4gICAgICAgICAgICAtIHVzZSB0aGUgZm9jdXMgaW5zdGVhZCBvZiBjaGFuZ2VcclxuXHJcblxyXG4gICAgUHV0IHRoZSBudW1iZXIgaW5zaWRlIG9mIHRoZSAxc3QgY2VsbCBvZiBhIHdvcmRcclxuXHJcbiAgKi9cclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gIGNvbnN0IHJvd3MgPSAxMDtcclxuICBjb25zdCBjb2xzID0gMTA7XHJcbiAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT5cclxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvbHMgfSwgKCkgPT4gXCJcIilcclxuICApO1xyXG4gIGNvbnN0IHsgYWNyb3NzLCBkb3duIH0gPSBkYXRhO1xyXG4gIC8vaW5zZXJ0IHRoZSBhbnN3ZXJzIGFjcm9zcyBhbmQgZG93biBpbnRvIHRoZSBncmlkXHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93XVt3b3JkLmNvbCArIGldID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3cgKyBpXVt3b3JkLmNvbF0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgdGhlIGNlbGxzIHRoYXQgYXJlIGRpc3BsYXllZFxyXG4gIGNvbnN0IGNlbGxzID0gZ3JpZC5tYXAoKHJvdywgaSkgPT5cclxuICAgIHJvdy5tYXAoKGNlbGwsIGopID0+XHJcbiAgICAgIGNlbGwgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBrZXk9e2p9XHJcbiAgICAgICAgICBpZD17YGNlbGwtJHtpfS0ke2p9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgZm9udC1tZWRpdW0gdGV4dC14bCBwLTIgei0xMFwiXHJcbiAgICAgICAgICBkYXRhLXJvdz17aX1cclxuICAgICAgICAgIGRhdGEtY29sPXtqfVxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKT8uYXR0ZW1wdCA9PT1cclxuICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgPyBjZWxsXHJcbiAgICAgICAgICAgICAgOiBuZXdBdHRlbXB0Py5yb3cgPT09IGkgJiYgbmV3QXR0ZW1wdD8uY29sID09PSBqXHJcbiAgICAgICAgICAgICAgPyBuZXdBdHRlbXB0Py5hdHRlbXB0XHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgcmVhZE9ubHk9e1xyXG4gICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKT8uYXR0ZW1wdCA9PT1cclxuICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICBqXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uRm9jdXM9e1xyXG4gICAgICAgICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKT8uYXR0ZW1wdCA9PT1cclxuICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgPyAoKSA9PiBuZXh0Q2VsbChpLCBqKVxyXG4gICAgICAgICAgICAgIDogKCkgPT4gZmluZFdvcmQoaSwgailcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2NlbGx9PC9kaXY+XHJcbiAgICAgIClcclxuICAgIClcclxuICApO1xyXG5cclxuICAvLyBNb3ZlcyB0byB0aGUgbmV4dCBjZWxsXHJcbiAgZnVuY3Rpb24gbmV4dENlbGwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5leHRcIiwgc3RhdGVEaXJlY3Rpb24pO1xyXG4gICAgbGV0IG5leHRDZWxsO1xyXG4gICAgLy8gbGV0IGRpcmVjdGlvbiA9IGZpbmRXb3JkKHJvdywgY29sKTtcclxuXHJcbiAgICBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiYWNyb3NzXCIpIHtcclxuICAgICAgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbC0ke3Jvd30tJHtjb2wgKyAxfWApO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgbmV4dENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbC0ke3JvdyArIDF9LSR7Y29sfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKG5leHRDZWxsKSBuZXh0Q2VsbC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVjaWRlcyBpZiB0aGUgaW5wdXQgaXMgY29ycmVjdFxyXG4gIGZ1bmN0aW9uIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICBsZXR0ZXI6IHN0cmluZyxcclxuICAgIGNlbGw6IHN0cmluZyxcclxuICAgIHJvdzogbnVtYmVyLFxyXG4gICAgY29sOiBudW1iZXJcclxuICApIHtcclxuICAgIGlmIChsZXR0ZXIgPT09IGNlbGwpIHtcclxuICAgICAgc2V0QXR0ZW1wdCgocHJldkF0dGVtcHQpID0+IFtcclxuICAgICAgICAuLi5wcmV2QXR0ZW1wdCxcclxuICAgICAgICB7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICBuZXh0Q2VsbChyb3csIGNvbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROZXdBdHRlbXB0KHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaW5kcyB0aGUgd29yZCB0aGF0IHRoZSBjZWxsIGlzIGluXHJcbiAgZnVuY3Rpb24gZmluZFdvcmQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gXCJcIjtcclxuXHJcbiAgICBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiYWNyb3NzXCIpIHtcclxuICAgICAgYWNyb3NzQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIGRvd25DaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJcIikge1xyXG4gICAgICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhkb3duKSkge1xyXG4gICAgICAgIGRvd25DaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhhY3Jvc3MpKSB7XHJcbiAgICAgICAgYWNyb3NzQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3Jvc3NDaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLnJvdyA9PT0gcm93ICYmIHdvcmQuY29sIDw9IGNvbCAmJiB3b3JkLmNvbCArIGxlbiA+IGNvbCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiYWNyb3NzXCIpO1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IFwiYWNyb3NzXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZG93bkNoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQuY29sID09PSBjb2wgJiYgd29yZC5yb3cgPD0gcm93ICYmIHdvcmQucm93ICsgbGVuID4gcm93KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJkb3duXCIpO1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IFwiZG93blwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgICBHZXQgbnVtYmVycyBpbiB0aGUgYm94XHJcbiAgICAgIERpc3BsYXkgdGhlIHF1ZXN0aW9uIG9uIHRoZSBib3R0b20gXHJcbiAgICAgIEp1bXAgb3ZlciBjZWxscyB0aGF0IGFyZSBkb25lIFxyXG5cclxuICAqL1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coY3VycmVudFdvcmQpO1xyXG4gIC8vIH0sIFtjdXJyZW50V29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcHgtNiBjb2wtc3Bhbi0zXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciBcIj5EYWlseSBDcm9zc3dvcmQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgey8qIDxQYXJ0aWNsZUltYWdlcyAvPiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb2xscy0xMCB6LTEwXCI+XHJcbiAgICAgICAgICB7Y2VsbHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVNlY29uZGFyeSB0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zZXJpZlwiPlxyXG4gICAgICAgICAge2N1cnJlbnRXb3JkLmNsdWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc3dvcmRQdXp6bGU7XHJcblxyXG4vKlxyXG4gIDEpIExvb3NlIHRoZSBwYXJ0aWNsZXMgXHJcbiAgMikgUmVtb3ZlIHRoZSBza2lsbHMgXHJcbiAgMykgSGF2ZSBhIGhpbnQgYnV0dG9uIFxyXG4gIDQpIEhhdmUgYW4gYXV0b2ZpbGwgYnV0dG9uXHJcbiAgNSkgSGF2ZSBhIHJlc2V0IGJ1dHRvblxyXG4gIDYpIE1heWJlIGNhY2hlIHdoZXJlIHRoZXkgYXJlIHdpdGggaXRcclxuXHJcblxyXG5cclxuXHJcblxyXG5QdXQgcGFydGljbGVzIGluIGJsYWNrIGJhY2tncm91bmQgYW5kIGhhdmUgdGhlbSBib3VuY2luZyBhcm91bmQgYnV0IG1ha2Ugc3VyZSB0aGUgd2hpdGUgaXMgYWJvdmUgaXQgc29tZWhvd1xyXG5cclxuXHJcblxyXG5cclxuQ3JlYXRlIGFuIGFsZ29yaXRobSB0aGF0IHdpbGwgcG9zaXRpb24gdGhlIHdvcmRzXHJcbkdpdmVzIGVhY2ggaXRlbSBhIHJvdyBhbmQgYSBjb2x1bW5cclxuXHJcbkNyZWF0ZSBhIGdyaWQgXHJcbiAgLSAxMCB4IDEwXHJcbiAgLSBiQ2FuIGhhdmUgeW91ciBvYmplY3QgY3JlYXRlZCBieSB0aGUgYWxnb3JpdGhtIGluc2VydGVkIGludG8gdGhvc2UgYmxvY2tzIG9uIHRoZSBncmlkXHJcbiAgLSBcclxuXHJcblxyXG5cclxuXHJcblxyXG5IYXZlIGEgZnJvbnQgYW5kIGEgYmFjayBcclxuSG93IHRvIG1ha2UgaXQgZmxpcD9cclxuICBIYXZlIGEgYnV0dG9uIHRoYXQgZmxpcHMgaXRcclxuXHJcbi0gRnJvbnRcclxuICAgIC0gQ3Jvc3N3b3JkIFB1enpsZVxyXG4tIEJhY2tcclxuICAgIC0gUXVlc3Rpb25zXHJcbiAgICAgIC0gQW5zd2VycyB0byBxdWVzdGlvbnNcclxuICAgICAgLSBNYXliZSBibGFjayBvdXQgYW5kIGhhdmUgaXQgcmV2ZWFsIHRoZSBhbnN3ZXIgd2hlbiB5b3UgY2xpY2sgb24gaXRcclxuXHJcblxyXG4tIEZ1bmN0aW9uYWxpdHkgXHJcbiAgICAgIC0gY2FuIHdyaXRlIGluIHRoZSBibG9ja3MgXHJcbiAgICAgIC0gd2hlbiBhbnN3ZXIgaXMgY29ycmVjdCB0aGUgbGV0dGVycyBzdGF5IGluIHRoZSBibG9ja1xyXG4gICAgICAtIHdoZW4gYW5zd2VyIGlzIGluY29ycmVjdCB0aGUgbGV0dGVycyBkaXNhcGVhclxyXG5cclxuICAgICAgLVxyXG5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDcm9zc3dvcmRQdXp6bGUiLCJhdHRlbXB0Iiwic2V0QXR0ZW1wdCIsIm5ld0F0dGVtcHQiLCJzZXROZXdBdHRlbXB0IiwiY3VycmVudFdvcmQiLCJzZXRDdXJyZW50V29yZCIsImNsdWUiLCJhbnN3ZXIiLCJyb3ciLCJjb2wiLCJudW0iLCJzdGF0ZURpcmVjdGlvbiIsInNldFN0YXRlRGlyZWN0aW9uIiwiZGF0YSIsImFjcm9zcyIsImRvd24iLCJyb3dzIiwiY29scyIsImdyaWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJrZXkiLCJ3b3JkIiwiT2JqZWN0IiwiZW50cmllcyIsImkiLCJjZWxscyIsIm1hcCIsImNlbGwiLCJqIiwiaW5wdXQiLCJpZCIsImNsYXNzTmFtZSIsImRhdGEtcm93IiwiZGF0YS1jb2wiLCJtYXhMZW5ndGgiLCJ2YWx1ZSIsImZpbmQiLCJhIiwidG9VcHBlckNhc2UiLCJkZWZhdWx0VmFsdWUiLCJyZWFkT25seSIsIm9uQ2hhbmdlIiwiZSIsImF0dGVtcHRMZXR0ZXIiLCJ0YXJnZXQiLCJvbkZvY3VzIiwibmV4dENlbGwiLCJmaW5kV29yZCIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJsZXR0ZXIiLCJwcmV2QXR0ZW1wdCIsImRpcmVjdGlvbiIsImFjcm9zc0NoZWNrIiwiZG93bkNoZWNrIiwibGVuIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});