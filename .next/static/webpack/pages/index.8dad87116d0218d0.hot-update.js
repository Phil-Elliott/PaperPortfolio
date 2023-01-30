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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"HTML\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"SASS\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"CSS\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    /*\r\n    1) Need to make sure question is showing when clicked and not after starting to type\r\n            - use the focus instead of change\r\n\r\n\r\n    Put the number inside of the 1st cell of a word\r\n\r\n  */ // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Creates the cells that are displayed\n    const cells = grid.map((row, i)=>{\n        return row.map((cell, j)=>{\n            var _attempt_find, _attempt_find1, _attempt_find2;\n            return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"cell-\".concat(i, \"-\").concat(j),\n                className: \"bg-Primary border-2 border-Secondary text-center uppercase py-1 font-black text-md z-10\",\n                \"data-row\": i,\n                \"data-col\": j,\n                maxLength: 1,\n                value: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase() ? cell : (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j ? newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt : \"\",\n                defaultValue: \"\",\n                readOnly: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase(),\n                onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                onFocus: ((_attempt_find2 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find2 === void 0 ? void 0 : _attempt_find2.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n            }, j, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: cell\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, undefined);\n        });\n    });\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n      Get numbers in the box\r\n      Display the question on the bottom \r\n      Jump over cells that are done \r\n\r\n  */ // useEffect(() => {\n    //   console.log(currentWord);\n    // }, [currentWord]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 col-span-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header text-center\",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                children: cells\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 254,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-Tertiary font-bold leading-loose\",\n                        children: \"Use the skills to solve the crossword puzzle.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 259,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-6 text-Secondary text-xl font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 263,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 258,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 252,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  1) Loose the particles \r\n  2) Remove the skills \r\n  3) Have a hint button \r\n  4) Have an autofill button\r\n  5) Have a reset button\r\n  6) Maybe cache where they are with it\r\n\r\n\r\n\r\n\r\n\r\nPut particles in black background and have them bouncing around but make sure the white is above it somehow\r\n\r\n\r\n\r\n\r\nCreate an algorithm that will position the words\r\nGives each item a row and a column\r\n\r\nCreate a grid \r\n  - 10 x 10\r\n  - bCan have your object created by the algorithm inserted into those blocks on the grid\r\n  - \r\n\r\n\r\n\r\n\r\n\r\nHave a front and a back \r\nHow to make it flip?\r\n  Have a button that flips it\r\n\r\n- Front\r\n    - Crossword Puzzle\r\n- Back\r\n    - Questions\r\n      - Answers to questions\r\n      - Maybe black out and have it reveal the answer when you click on it\r\n\r\n\r\n- Functionality \r\n      - can write in the blocks \r\n      - when answer is correct the letters stay in the block\r\n      - when answer is incorrect the letters disapear\r\n\r\n      -\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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S0EsT0FBT2MsS0FBS2YsR0FBRztnQkFDOUJILGVBQWVrQjtnQkFDZlg7OztZQUdGLENBQUM7UUFDSDtRQUVBLE9BQU84QztJQUNUO0lBRUE7SUFRQSw4QkFBOEI7SUFDOUI7SUFFQTtRQUNPekI7Ozs7MEJBQ3dDOzs7Ozs7O2dCQUN0Q0EsU0FBQUEsNkRBQVU7MEJBQ1pOOzs7Ozs7MEJBR0gsUUFBQ3VCO2dCQUFJakIsV0FBVTs7O3dCQUNWQSxFQUFBQSw2REFBQUEsRUFBVTtrQ0FBZ0Q7Ozs7Ozs7d0JBSTFEQSxFQUFBQSw2REFBQUEsRUFBVTtrQ0FDVjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQTNQTUw7S0FBQUE7QUE2UE4sZUFBZUEsZ0JBQWdCLENBRS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGxzL0Nyb3Nzd29yZC9Dcm9zc3dvcmQudHN4PzcxOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcnRpY2xlSW1hZ2VzIGZyb20gXCIuL1BhcnRpY2xlSW1hZ2VzL1BhcnRpY2xlSW1hZ2VzXCI7XHJcblxyXG50eXBlIEF0dGVtcHRPYmplY3QgPSB7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgYXR0ZW1wdDogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBEYXRhT2JqZWN0ID0ge1xyXG4gIGNsdWU6IHN0cmluZztcclxuICBhbnN3ZXI6IHN0cmluZztcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBudW06IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IENyb3Nzd29yZFB1enpsZSA9ICgpID0+IHtcclxuICBjb25zdCBbYXR0ZW1wdCwgc2V0QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0W10+KFtdKTtcclxuICBjb25zdCBbbmV3QXR0ZW1wdCwgc2V0TmV3QXR0ZW1wdF0gPSB1c2VTdGF0ZTxBdHRlbXB0T2JqZWN0PigpO1xyXG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGU8RGF0YU9iamVjdD4oe1xyXG4gICAgY2x1ZTogXCJDbGljayBvbiBhIGJveCB0byBzdGFydC4gVXNlIHRoZSBza2lsbHMgZm9yIGFuc3dlcnMuXCIsXHJcbiAgICBhbnN3ZXI6IFwic3RyaW5nXCIsXHJcbiAgICByb3c6IDAsXHJcbiAgICBjb2w6IDAsXHJcbiAgICBudW06IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXRlRGlyZWN0aW9uLCBzZXRTdGF0ZURpcmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBhY3Jvc3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IG1ha2VzIGEgd2Vic2l0ZSBjb21lIGFsaXZlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQgZG8geW91IGNhbGwgdGhlIGJ1aWxkaW5nIGJsb2NrcyBvZiBhIHdlYnNpdGU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkhUTUxcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBDU1MgcHJlcHJvY2Vzc29yIHRoYXQgaGVscHMgeW91IGRyZXNzIHVwIGEgd2Vic2l0ZVwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJTQVNTXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDcsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBrZWVwIGEgd2Vic2l0ZSdzIGRhdGEgaW4gb3JkZXIuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgcm93OiA5LFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDgsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZG93bjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGZyYW1ld29yayB0aGF0IG1ha2VzIGJ1aWxkaW5nIHNlcnZlci1yZW5kZXJlZCBSZWFjdCBhcHBzIGEgYnJlZXplP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJOZXh0XCIsXHJcbiAgICAgICAgcm93OiAwLFxyXG4gICAgICAgIGNvbDogOSxcclxuICAgICAgICBudW06IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGJ1aWxkIGEgd2Vic2l0ZSdzIHBlcnNvbmFsaXR5LlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWFjdFwiLFxyXG4gICAgICAgIHJvdzogMSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiAyLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIHV0aWxpdHktZmlyc3QgQ1NTIGZyYW1ld29yayB0aGF0IGhlbHBzIHlvdSBjcmVhdGUgYSB3ZWJzaXRlJ3MgdW5pcXVlIGxvb2suXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlRhaWx3aW5kXCIsXHJcbiAgICAgICAgcm93OiAyLFxyXG4gICAgICAgIGNvbDogMyxcclxuICAgICAgICBudW06IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBnaXZlcyBhIHdlYnNpdGUgYSBtYWtlb3Zlcj9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiQ1NTXCIsXHJcbiAgICAgICAgcm93OiAzLFxyXG4gICAgICAgIGNvbDogNSxcclxuICAgICAgICBudW06IDUsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIC8qXHJcbiAgICAxKSBOZWVkIHRvIG1ha2Ugc3VyZSBxdWVzdGlvbiBpcyBzaG93aW5nIHdoZW4gY2xpY2tlZCBhbmQgbm90IGFmdGVyIHN0YXJ0aW5nIHRvIHR5cGVcclxuICAgICAgICAgICAgLSB1c2UgdGhlIGZvY3VzIGluc3RlYWQgb2YgY2hhbmdlXHJcblxyXG5cclxuICAgIFB1dCB0aGUgbnVtYmVyIGluc2lkZSBvZiB0aGUgMXN0IGNlbGwgb2YgYSB3b3JkXHJcblxyXG4gICovXHJcblxyXG4gIC8vIENyZWF0ZXMgdGhlIGdyaWRcclxuICBjb25zdCByb3dzID0gMTA7XHJcbiAgY29uc3QgY29scyA9IDEwO1xyXG4gIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sICgpID0+XHJcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb2xzIH0sICgpID0+IFwiXCIpXHJcbiAgKTtcclxuICBjb25zdCB7IGFjcm9zcywgZG93biB9ID0gZGF0YTtcclxuICAvL2luc2VydCB0aGUgYW5zd2VycyBhY3Jvc3MgYW5kIGRvd24gaW50byB0aGUgZ3JpZFxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvd11bd29yZC5jb2wgKyBpXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhkb3duKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93ICsgaV1bd29yZC5jb2xdID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGVzIHRoZSBjZWxscyB0aGF0IGFyZSBkaXNwbGF5ZWRcclxuICBjb25zdCBjZWxscyA9IGdyaWQubWFwKChyb3csIGkpID0+XHJcbiAgICByb3cubWFwKChjZWxsLCBqKSA9PlxyXG4gICAgICBjZWxsICE9PSBcIlwiID8gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAga2V5PXtqfVxyXG4gICAgICAgICAgaWQ9e2BjZWxsLSR7aX0tJHtqfWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IGJvcmRlci0yIGJvcmRlci1TZWNvbmRhcnkgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHB5LTEgZm9udC1ibGFjayB0ZXh0LW1kIHotMTBcIlxyXG4gICAgICAgICAgZGF0YS1yb3c9e2l9XHJcbiAgICAgICAgICBkYXRhLWNvbD17an1cclxuICAgICAgICAgIG1heExlbmd0aD17MX1cclxuICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgID8gY2VsbFxyXG4gICAgICAgICAgICAgIDogbmV3QXR0ZW1wdD8ucm93ID09PSBpICYmIG5ld0F0dGVtcHQ/LmNvbCA9PT0galxyXG4gICAgICAgICAgICAgID8gbmV3QXR0ZW1wdD8uYXR0ZW1wdFxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgIHJlYWRPbmx5PXtcclxuICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBhdHRlbXB0TGV0dGVyKFxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgalxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkZvY3VzPXtcclxuICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgID8gKCkgPT4gbmV4dENlbGwoaSwgailcclxuICAgICAgICAgICAgICA6ICgpID0+IGZpbmRXb3JkKGksIGopXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntjZWxsfTwvZGl2PlxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgLy8gTW92ZXMgdG8gdGhlIG5leHQgY2VsbFxyXG4gIGZ1bmN0aW9uIG5leHRDZWxsKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXh0XCIsIHN0YXRlRGlyZWN0aW9uKTtcclxuICAgIGxldCBuZXh0Q2VsbDtcclxuICAgIC8vIGxldCBkaXJlY3Rpb24gPSBmaW5kV29yZChyb3csIGNvbCk7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3d9LSR7Y29sICsgMX1gKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3cgKyAxfS0ke2NvbH1gKTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0Q2VsbCkgbmV4dENlbGwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8vIERlY2lkZXMgaWYgdGhlIGlucHV0IGlzIGNvcnJlY3RcclxuICBmdW5jdGlvbiBhdHRlbXB0TGV0dGVyKFxyXG4gICAgbGV0dGVyOiBzdHJpbmcsXHJcbiAgICBjZWxsOiBzdHJpbmcsXHJcbiAgICByb3c6IG51bWJlcixcclxuICAgIGNvbDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobGV0dGVyID09PSBjZWxsKSB7XHJcbiAgICAgIHNldEF0dGVtcHQoKHByZXZBdHRlbXB0KSA9PiBbXHJcbiAgICAgICAgLi4ucHJldkF0dGVtcHQsXHJcbiAgICAgICAgeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9LFxyXG4gICAgICBdKTtcclxuICAgICAgbmV4dENlbGwocm93LCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmV3QXR0ZW1wdCh7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmluZHMgdGhlIHdvcmQgdGhhdCB0aGUgY2VsbCBpcyBpblxyXG4gIGZ1bmN0aW9uIGZpbmRXb3JkKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIGFjcm9zc0NoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBkb3duQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiXCIpIHtcclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgICAgICBkb3duQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgICAgIGFjcm9zc0NoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWNyb3NzQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5yb3cgPT09IHJvdyAmJiB3b3JkLmNvbCA8PSBjb2wgJiYgd29yZC5jb2wgKyBsZW4gPiBjb2wpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImFjcm9zc1wiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImFjcm9zc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvd25DaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLmNvbCA9PT0gY29sICYmIHdvcmQucm93IDw9IHJvdyAmJiB3b3JkLnJvdyArIGxlbiA+IHJvdykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiZG93blwiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgICAgR2V0IG51bWJlcnMgaW4gdGhlIGJveFxyXG4gICAgICBEaXNwbGF5IHRoZSBxdWVzdGlvbiBvbiB0aGUgYm90dG9tIFxyXG4gICAgICBKdW1wIG92ZXIgY2VsbHMgdGhhdCBhcmUgZG9uZSBcclxuXHJcbiAgKi9cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JkKTtcclxuICAvLyB9LCBbY3VycmVudFdvcmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgY29sLXNwYW4tMVwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5EYWlseSBDcm9zc3dvcmQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVNlY29uZGFyeSBncmlkIGdyaWQtY29scy0xMCBncmlkLXJvbGxzLTEwIHotOVwiPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtVGVydGlhcnkgZm9udC1ib2xkIGxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgIFVzZSB0aGUgc2tpbGxzIHRvIHNvbHZlIHRoZSBjcm9zc3dvcmQgcHV6emxlLlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNiB0ZXh0LVNlY29uZGFyeSB0ZXh0LXhsIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICB7Y3VycmVudFdvcmQuY2x1ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgMSkgTG9vc2UgdGhlIHBhcnRpY2xlcyBcclxuICAyKSBSZW1vdmUgdGhlIHNraWxscyBcclxuICAzKSBIYXZlIGEgaGludCBidXR0b24gXHJcbiAgNCkgSGF2ZSBhbiBhdXRvZmlsbCBidXR0b25cclxuICA1KSBIYXZlIGEgcmVzZXQgYnV0dG9uXHJcbiAgNikgTWF5YmUgY2FjaGUgd2hlcmUgdGhleSBhcmUgd2l0aCBpdFxyXG5cclxuXHJcblxyXG5cclxuXHJcblB1dCBwYXJ0aWNsZXMgaW4gYmxhY2sgYmFja2dyb3VuZCBhbmQgaGF2ZSB0aGVtIGJvdW5jaW5nIGFyb3VuZCBidXQgbWFrZSBzdXJlIHRoZSB3aGl0ZSBpcyBhYm92ZSBpdCBzb21laG93XHJcblxyXG5cclxuXHJcblxyXG5DcmVhdGUgYW4gYWxnb3JpdGhtIHRoYXQgd2lsbCBwb3NpdGlvbiB0aGUgd29yZHNcclxuR2l2ZXMgZWFjaCBpdGVtIGEgcm93IGFuZCBhIGNvbHVtblxyXG5cclxuQ3JlYXRlIGEgZ3JpZCBcclxuICAtIDEwIHggMTBcclxuICAtIGJDYW4gaGF2ZSB5b3VyIG9iamVjdCBjcmVhdGVkIGJ5IHRoZSBhbGdvcml0aG0gaW5zZXJ0ZWQgaW50byB0aG9zZSBibG9ja3Mgb24gdGhlIGdyaWRcclxuICAtIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbkhhdmUgYSBmcm9udCBhbmQgYSBiYWNrIFxyXG5Ib3cgdG8gbWFrZSBpdCBmbGlwP1xyXG4gIEhhdmUgYSBidXR0b24gdGhhdCBmbGlwcyBpdFxyXG5cclxuLSBGcm9udFxyXG4gICAgLSBDcm9zc3dvcmQgUHV6emxlXHJcbi0gQmFja1xyXG4gICAgLSBRdWVzdGlvbnNcclxuICAgICAgLSBBbnN3ZXJzIHRvIHF1ZXN0aW9uc1xyXG4gICAgICAtIE1heWJlIGJsYWNrIG91dCBhbmQgaGF2ZSBpdCByZXZlYWwgdGhlIGFuc3dlciB3aGVuIHlvdSBjbGljayBvbiBpdFxyXG5cclxuXHJcbi0gRnVuY3Rpb25hbGl0eSBcclxuICAgICAgLSBjYW4gd3JpdGUgaW4gdGhlIGJsb2NrcyBcclxuICAgICAgLSB3aGVuIGFuc3dlciBpcyBjb3JyZWN0IHRoZSBsZXR0ZXJzIHN0YXkgaW4gdGhlIGJsb2NrXHJcbiAgICAgIC0gd2hlbiBhbnN3ZXIgaXMgaW5jb3JyZWN0IHRoZSBsZXR0ZXJzIGRpc2FwZWFyXHJcblxyXG4gICAgICAtXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsImNlbGxzIiwibWFwIiwiY2VsbCIsImoiLCJpbnB1dCIsImlkIiwiY2xhc3NOYW1lIiwiZGF0YS1yb3ciLCJkYXRhLWNvbCIsIm1heExlbmd0aCIsInZhbHVlIiwiZmluZCIsImEiLCJ0b1VwcGVyQ2FzZSIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5Iiwib25DaGFuZ2UiLCJlIiwiYXR0ZW1wdExldHRlciIsInRhcmdldCIsIm9uRm9jdXMiLCJuZXh0Q2VsbCIsImZpbmRXb3JkIiwiZGl2IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImxldHRlciIsInByZXZBdHRlbXB0IiwiZGlyZWN0aW9uIiwiYWNyb3NzQ2hlY2siLCJkb3duQ2hlY2siLCJsZW4iLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});