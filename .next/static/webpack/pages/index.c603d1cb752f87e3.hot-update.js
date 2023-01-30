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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"HTML\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"SASS\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"CSS\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    /*\r\n    1) Need to make sure question is showing when clicked and not after starting to type\r\n            - use the focus instead of change\r\n\r\n\r\n    Put the number inside of the 1st cell of a word\r\n\r\n  */ // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Creates the cells that are displayed\n    const cells = grid.map((row, i)=>{\n        return row.map((cell, j)=>{\n            var _attempt_find, _attempt_find1, _attempt_find2;\n            return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"cell-\".concat(i, \"-\").concat(j),\n                className: \"bg-Primary border-2 border-Secondary text-center uppercase py-1 font-black text-md z-10\",\n                \"data-row\": i,\n                \"data-col\": j,\n                maxLength: 1,\n                value: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase() ? cell : (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j ? newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt : \"\",\n                defaultValue: \"\",\n                readOnly: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase(),\n                onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                onFocus: ((_attempt_find2 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find2 === void 0 ? void 0 : _attempt_find2.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n            }, j, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: cell\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, undefined);\n        });\n    });\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n      Get numbers in the box\r\n      Display the question on the bottom \r\n      Jump over cells that are done \r\n\r\n  */ // useEffect(() => {\n    //   console.log(currentWord);\n    // }, [currentWord]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full pl-6 col-span-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header text-center\",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                children: cells\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 254,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                    children: currentWord.clue\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 264,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 258,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 252,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  1) Loose the particles \r\n  2) Remove the skills \r\n  3) Have a hint button \r\n  4) Have an autofill button\r\n  5) Have a reset button\r\n  6) Maybe cache where they are with it\r\n\r\n\r\n\r\n\r\n\r\nPut particles in black background and have them bouncing around but make sure the white is above it somehow\r\n\r\n\r\n\r\n\r\nCreate an algorithm that will position the words\r\nGives each item a row and a column\r\n\r\nCreate a grid \r\n  - 10 x 10\r\n  - bCan have your object created by the algorithm inserted into those blocks on the grid\r\n  - \r\n\r\n\r\n\r\n\r\n\r\nHave a front and a back \r\nHow to make it flip?\r\n  Have a button that flips it\r\n\r\n- Front\r\n    - Crossword Puzzle\r\n- Back\r\n    - Questions\r\n      - Answers to questions\r\n      - Maybe black out and have it reveal the answer when you click on it\r\n\r\n\r\n- Functionality \r\n      - can write in the blocks \r\n      - when answer is correct the letters stay in the block\r\n      - when answer is incorrect the letters disapear\r\n\r\n      -\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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S0EsT0FBT2MsS0FBS2YsR0FBRztnQkFDOUJILGVBQWVrQjtnQkFDZlg7OztZQUdGLENBQUM7UUFDSDtRQUVBLE9BQU84QztJQUNUO0lBRUE7SUFRQSw4QkFBOEI7SUFDOUI7SUFFQTtRQUNPekI7Ozs7MEJBQ3dDOzs7Ozs7O2dCQUN0Q0EsU0FBQUEsNkRBQVU7MEJBQ1pOOzs7Ozs7MEJBR0gsUUFBQ3VCO2dCQUFJakIsV0FBVTswQkFNYjt5QkFBR0E7dUZBQ0E3QixTQUFZRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7R0E1UE1QO0tBQUFBO0FBOFBOLGVBQWVBLGdCQUFnQixDQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeD83MTliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZUltYWdlcyBmcm9tIFwiLi9QYXJ0aWNsZUltYWdlcy9QYXJ0aWNsZUltYWdlc1wiO1xyXG5cclxudHlwZSBBdHRlbXB0T2JqZWN0ID0ge1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIGF0dGVtcHQ6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgRGF0YU9iamVjdCA9IHtcclxuICBjbHVlOiBzdHJpbmc7XHJcbiAgYW5zd2VyOiBzdHJpbmc7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgbnVtOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBDcm9zc3dvcmRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2F0dGVtcHQsIHNldEF0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdFtdPihbXSk7XHJcbiAgY29uc3QgW25ld0F0dGVtcHQsIHNldE5ld0F0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdD4oKTtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlPERhdGFPYmplY3Q+KHtcclxuICAgIGNsdWU6IFwiQ2xpY2sgb24gYSBib3ggdG8gc3RhcnQuIFVzZSB0aGUgc2tpbGxzIGZvciBhbnN3ZXJzLlwiLFxyXG4gICAgYW5zd2VyOiBcInN0cmluZ1wiLFxyXG4gICAgcm93OiAwLFxyXG4gICAgY29sOiAwLFxyXG4gICAgbnVtOiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzdGF0ZURpcmVjdGlvbiwgc2V0U3RhdGVEaXJlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgYWNyb3NzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBtYWtlcyBhIHdlYnNpdGUgY29tZSBhbGl2ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0IGRvIHlvdSBjYWxsIHRoZSBidWlsZGluZyBibG9ja3Mgb2YgYSB3ZWJzaXRlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJIVE1MXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDYsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgQ1NTIHByZXByb2Nlc3NvciB0aGF0IGhlbHBzIHlvdSBkcmVzcyB1cCBhIHdlYnNpdGVcIixcclxuICAgICAgICBhbnN3ZXI6IFwiU0FTU1wiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA3LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3Uga2VlcCBhIHdlYnNpdGUncyBkYXRhIGluIG9yZGVyLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWR1eFwiLFxyXG4gICAgICAgIHJvdzogOSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiA4LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGRvd246IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBmcmFtZXdvcmsgdGhhdCBtYWtlcyBidWlsZGluZyBzZXJ2ZXItcmVuZGVyZWQgUmVhY3QgYXBwcyBhIGJyZWV6ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiTmV4dFwiLFxyXG4gICAgICAgIHJvdzogMCxcclxuICAgICAgICBjb2w6IDksXHJcbiAgICAgICAgbnVtOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBidWlsZCBhIHdlYnNpdGUncyBwZXJzb25hbGl0eS5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVhY3RcIixcclxuICAgICAgICByb3c6IDEsXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSB1dGlsaXR5LWZpcnN0IENTUyBmcmFtZXdvcmsgdGhhdCBoZWxwcyB5b3UgY3JlYXRlIGEgd2Vic2l0ZSdzIHVuaXF1ZSBsb29rLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJUYWlsd2luZFwiLFxyXG4gICAgICAgIHJvdzogMixcclxuICAgICAgICBjb2w6IDMsXHJcbiAgICAgICAgbnVtOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgZ2l2ZXMgYSB3ZWJzaXRlIGEgbWFrZW92ZXI/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkNTU1wiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA1LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICAvKlxyXG4gICAgMSkgTmVlZCB0byBtYWtlIHN1cmUgcXVlc3Rpb24gaXMgc2hvd2luZyB3aGVuIGNsaWNrZWQgYW5kIG5vdCBhZnRlciBzdGFydGluZyB0byB0eXBlXHJcbiAgICAgICAgICAgIC0gdXNlIHRoZSBmb2N1cyBpbnN0ZWFkIG9mIGNoYW5nZVxyXG5cclxuXHJcbiAgICBQdXQgdGhlIG51bWJlciBpbnNpZGUgb2YgdGhlIDFzdCBjZWxsIG9mIGEgd29yZFxyXG5cclxuICAqL1xyXG5cclxuICAvLyBDcmVhdGVzIHRoZSBncmlkXHJcbiAgY29uc3Qgcm93cyA9IDEwO1xyXG4gIGNvbnN0IGNvbHMgPSAxMDtcclxuICBjb25zdCBncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PlxyXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY29scyB9LCAoKSA9PiBcIlwiKVxyXG4gICk7XHJcbiAgY29uc3QgeyBhY3Jvc3MsIGRvd24gfSA9IGRhdGE7XHJcbiAgLy9pbnNlcnQgdGhlIGFuc3dlcnMgYWNyb3NzIGFuZCBkb3duIGludG8gdGhlIGdyaWRcclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhhY3Jvc3MpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3ddW3dvcmQuY29sICsgaV0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvdyArIGldW3dvcmQuY29sXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgY2VsbHMgdGhhdCBhcmUgZGlzcGxheWVkXHJcbiAgY29uc3QgY2VsbHMgPSBncmlkLm1hcCgocm93LCBpKSA9PlxyXG4gICAgcm93Lm1hcCgoY2VsbCwgaikgPT5cclxuICAgICAgY2VsbCAhPT0gXCJcIiA/IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgIGlkPXtgY2VsbC0ke2l9LSR7an1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHRleHQtY2VudGVyIHVwcGVyY2FzZSBweS0xIGZvbnQtYmxhY2sgdGV4dC1tZCB6LTEwXCJcclxuICAgICAgICAgIGRhdGEtcm93PXtpfVxyXG4gICAgICAgICAgZGF0YS1jb2w9e2p9XHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICA/IGNlbGxcclxuICAgICAgICAgICAgICA6IG5ld0F0dGVtcHQ/LnJvdyA9PT0gaSAmJiBuZXdBdHRlbXB0Py5jb2wgPT09IGpcclxuICAgICAgICAgICAgICA/IG5ld0F0dGVtcHQ/LmF0dGVtcHRcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICByZWFkT25seT17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgYXR0ZW1wdExldHRlcihcclxuICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25Gb2N1cz17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICA/ICgpID0+IG5leHRDZWxsKGksIGopXHJcbiAgICAgICAgICAgICAgOiAoKSA9PiBmaW5kV29yZChpLCBqKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57Y2VsbH08L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIC8vIE1vdmVzIHRvIHRoZSBuZXh0IGNlbGxcclxuICBmdW5jdGlvbiBuZXh0Q2VsbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBzdGF0ZURpcmVjdGlvbik7XHJcbiAgICBsZXQgbmV4dENlbGw7XHJcbiAgICAvLyBsZXQgZGlyZWN0aW9uID0gZmluZFdvcmQocm93LCBjb2wpO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93fS0ke2NvbCArIDF9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93ICsgMX0tJHtjb2x9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dENlbGwpIG5leHRDZWxsLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWNpZGVzIGlmIHRoZSBpbnB1dCBpcyBjb3JyZWN0XHJcbiAgZnVuY3Rpb24gYXR0ZW1wdExldHRlcihcclxuICAgIGxldHRlcjogc3RyaW5nLFxyXG4gICAgY2VsbDogc3RyaW5nLFxyXG4gICAgcm93OiBudW1iZXIsXHJcbiAgICBjb2w6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGxldHRlciA9PT0gY2VsbCkge1xyXG4gICAgICBzZXRBdHRlbXB0KChwcmV2QXR0ZW1wdCkgPT4gW1xyXG4gICAgICAgIC4uLnByZXZBdHRlbXB0LFxyXG4gICAgICAgIHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIG5leHRDZWxsKHJvdywgY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5ld0F0dGVtcHQoeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZpbmRzIHRoZSB3b3JkIHRoYXQgdGhlIGNlbGwgaXMgaW5cclxuICBmdW5jdGlvbiBmaW5kV29yZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBcIlwiO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBhY3Jvc3NDaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgZG93bkNoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICAgICAgZG93bkNoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgICAgICBhY3Jvc3NDaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjcm9zc0NoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQucm93ID09PSByb3cgJiYgd29yZC5jb2wgPD0gY29sICYmIHdvcmQuY29sICsgbGVuID4gY29sKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJhY3Jvc3NcIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhY3Jvc3NcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb3duQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5jb2wgPT09IGNvbCAmJiB3b3JkLnJvdyA8PSByb3cgJiYgd29yZC5yb3cgKyBsZW4gPiByb3cpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICAgIEdldCBudW1iZXJzIGluIHRoZSBib3hcclxuICAgICAgRGlzcGxheSB0aGUgcXVlc3Rpb24gb24gdGhlIGJvdHRvbSBcclxuICAgICAgSnVtcCBvdmVyIGNlbGxzIHRoYXQgYXJlIGRvbmUgXHJcblxyXG4gICovXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50V29yZCk7XHJcbiAgLy8gfSwgW2N1cnJlbnRXb3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwbC02IGNvbC1zcGFuLTFcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImFydGljbGUtaGVhZGVyIHRleHQtY2VudGVyXCI+RGFpbHkgQ3Jvc3N3b3JkPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb2xscy0xMCB6LTlcIj5cclxuICAgICAgICB7Y2VsbHN9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+XHJcbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1UZXJ0aWFyeSBmb250LWJvbGQgbGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgIFVzZSB0aGUgYmVsb3cgc2tpbGxzIHRvIHNvbHZlIHRoZSBjcm9zc3dvcmQgcHV6emxlLiBDbGljayBvbiBhIGJveCB0b1xyXG4gICAgICAgIHJldmVhbCB0aGUgcXVlc3Rpb24uXHJcbiAgICAgIDwvcD4gKi99XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtU2Vjb25kYXJ5IHRleHQteGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICB7Y3VycmVudFdvcmQuY2x1ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgMSkgTG9vc2UgdGhlIHBhcnRpY2xlcyBcclxuICAyKSBSZW1vdmUgdGhlIHNraWxscyBcclxuICAzKSBIYXZlIGEgaGludCBidXR0b24gXHJcbiAgNCkgSGF2ZSBhbiBhdXRvZmlsbCBidXR0b25cclxuICA1KSBIYXZlIGEgcmVzZXQgYnV0dG9uXHJcbiAgNikgTWF5YmUgY2FjaGUgd2hlcmUgdGhleSBhcmUgd2l0aCBpdFxyXG5cclxuXHJcblxyXG5cclxuXHJcblB1dCBwYXJ0aWNsZXMgaW4gYmxhY2sgYmFja2dyb3VuZCBhbmQgaGF2ZSB0aGVtIGJvdW5jaW5nIGFyb3VuZCBidXQgbWFrZSBzdXJlIHRoZSB3aGl0ZSBpcyBhYm92ZSBpdCBzb21laG93XHJcblxyXG5cclxuXHJcblxyXG5DcmVhdGUgYW4gYWxnb3JpdGhtIHRoYXQgd2lsbCBwb3NpdGlvbiB0aGUgd29yZHNcclxuR2l2ZXMgZWFjaCBpdGVtIGEgcm93IGFuZCBhIGNvbHVtblxyXG5cclxuQ3JlYXRlIGEgZ3JpZCBcclxuICAtIDEwIHggMTBcclxuICAtIGJDYW4gaGF2ZSB5b3VyIG9iamVjdCBjcmVhdGVkIGJ5IHRoZSBhbGdvcml0aG0gaW5zZXJ0ZWQgaW50byB0aG9zZSBibG9ja3Mgb24gdGhlIGdyaWRcclxuICAtIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbkhhdmUgYSBmcm9udCBhbmQgYSBiYWNrIFxyXG5Ib3cgdG8gbWFrZSBpdCBmbGlwP1xyXG4gIEhhdmUgYSBidXR0b24gdGhhdCBmbGlwcyBpdFxyXG5cclxuLSBGcm9udFxyXG4gICAgLSBDcm9zc3dvcmQgUHV6emxlXHJcbi0gQmFja1xyXG4gICAgLSBRdWVzdGlvbnNcclxuICAgICAgLSBBbnN3ZXJzIHRvIHF1ZXN0aW9uc1xyXG4gICAgICAtIE1heWJlIGJsYWNrIG91dCBhbmQgaGF2ZSBpdCByZXZlYWwgdGhlIGFuc3dlciB3aGVuIHlvdSBjbGljayBvbiBpdFxyXG5cclxuXHJcbi0gRnVuY3Rpb25hbGl0eSBcclxuICAgICAgLSBjYW4gd3JpdGUgaW4gdGhlIGJsb2NrcyBcclxuICAgICAgLSB3aGVuIGFuc3dlciBpcyBjb3JyZWN0IHRoZSBsZXR0ZXJzIHN0YXkgaW4gdGhlIGJsb2NrXHJcbiAgICAgIC0gd2hlbiBhbnN3ZXIgaXMgaW5jb3JyZWN0IHRoZSBsZXR0ZXJzIGRpc2FwZWFyXHJcblxyXG4gICAgICAtXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsImNlbGxzIiwibWFwIiwiY2VsbCIsImoiLCJpbnB1dCIsImlkIiwiY2xhc3NOYW1lIiwiZGF0YS1yb3ciLCJkYXRhLWNvbCIsIm1heExlbmd0aCIsInZhbHVlIiwiZmluZCIsImEiLCJ0b1VwcGVyQ2FzZSIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5Iiwib25DaGFuZ2UiLCJlIiwiYXR0ZW1wdExldHRlciIsInRhcmdldCIsIm9uRm9jdXMiLCJuZXh0Q2VsbCIsImZpbmRXb3JkIiwiZGl2IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImxldHRlciIsInByZXZBdHRlbXB0IiwiZGlyZWN0aW9uIiwiYWNyb3NzQ2hlY2siLCJkb3duQ2hlY2siLCJsZW4iLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});