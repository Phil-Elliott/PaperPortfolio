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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"HTML\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"SASS\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"CSS\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    console.log(grid);\n    // Creates the cells that are displayed\n    const cells = grid.map((row, i)=>{\n        var _attempt_find, _attempt_find1, _attempt_find2;\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                'row.map((cell, j) => cell !== \"\" ? (',\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"cell-\".concat(i, \"-\").concat(j),\n                    className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                    \"data-row\": i,\n                    \"data-col\": j,\n                    maxLength: 1,\n                    value: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase() ? cell : (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j ? newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt : \"\",\n                    defaultValue: \"\",\n                    readOnly: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase(),\n                    onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                    onFocus: ((_attempt_find2 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find2 === void 0 ? void 0 : _attempt_find2.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                }, j, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined),\n                \") : (\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: cell\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, undefined),\n                \") )\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n            lineNumber: 116,\n            columnNumber: 5\n        }, undefined);\n    });\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell1, row, col) {\n        if (letter === cell1) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 col-span-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header text-center\",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 237,\n                columnNumber: 7\n            }, undefined),\n            cells,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-Tertiary font-bold leading-loose\",\n                        children: \"Use the skills to solve the crossword puzzle.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 243,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-3 text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 246,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 242,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 236,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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L0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvQ3Jvc3N3b3JkL0Nyb3Nzd29yZC50c3g/NzE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVJbWFnZXMgZnJvbSBcIi4vUGFydGljbGVJbWFnZXMvUGFydGljbGVJbWFnZXNcIjtcclxuXHJcbnR5cGUgQXR0ZW1wdE9iamVjdCA9IHtcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBhdHRlbXB0OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIERhdGFPYmplY3QgPSB7XHJcbiAgY2x1ZTogc3RyaW5nO1xyXG4gIGFuc3dlcjogc3RyaW5nO1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIG51bTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQ3Jvc3N3b3JkUHV6emxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdHRlbXB0LCBzZXRBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3RbXT4oW10pO1xyXG4gIGNvbnN0IFtuZXdBdHRlbXB0LCBzZXROZXdBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3Q+KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxEYXRhT2JqZWN0Pih7XHJcbiAgICBjbHVlOiBcIkNsaWNrIG9uIGEgYm94IHRvIHN0YXJ0LiBVc2UgdGhlIHNraWxscyBmb3IgYW5zd2Vycy5cIixcclxuICAgIGFuc3dlcjogXCJzdHJpbmdcIixcclxuICAgIHJvdzogMCxcclxuICAgIGNvbDogMCxcclxuICAgIG51bTogMCxcclxuICB9KTtcclxuICBjb25zdCBbc3RhdGVEaXJlY3Rpb24sIHNldFN0YXRlRGlyZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGFjcm9zczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgbWFrZXMgYSB3ZWJzaXRlIGNvbWUgYWxpdmU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCBkbyB5b3UgY2FsbCB0aGUgYnVpbGRpbmcgYmxvY2tzIG9mIGEgd2Vic2l0ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSFRNTFwiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA2LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIENTUyBwcmVwcm9jZXNzb3IgdGhhdCBoZWxwcyB5b3UgZHJlc3MgdXAgYSB3ZWJzaXRlXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlNBU1NcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGtlZXAgYSB3ZWJzaXRlJ3MgZGF0YSBpbiBvcmRlci5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVkdXhcIixcclxuICAgICAgICByb3c6IDksXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogOCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkb3duOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgZnJhbWV3b3JrIHRoYXQgbWFrZXMgYnVpbGRpbmcgc2VydmVyLXJlbmRlcmVkIFJlYWN0IGFwcHMgYSBicmVlemU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIk5leHRcIixcclxuICAgICAgICByb3c6IDAsXHJcbiAgICAgICAgY29sOiA5LFxyXG4gICAgICAgIG51bTogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3UgYnVpbGQgYSB3ZWJzaXRlJ3MgcGVyc29uYWxpdHkuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgdXRpbGl0eS1maXJzdCBDU1MgZnJhbWV3b3JrIHRoYXQgaGVscHMgeW91IGNyZWF0ZSBhIHdlYnNpdGUncyB1bmlxdWUgbG9vay5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiVGFpbHdpbmRcIixcclxuICAgICAgICByb3c6IDIsXHJcbiAgICAgICAgY29sOiAzLFxyXG4gICAgICAgIG51bTogMyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IGdpdmVzIGEgd2Vic2l0ZSBhIG1ha2VvdmVyP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJDU1NcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gIGNvbnN0IHJvd3MgPSAxMDtcclxuICBjb25zdCBjb2xzID0gMTA7XHJcbiAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT5cclxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvbHMgfSwgKCkgPT4gXCJcIilcclxuICApO1xyXG4gIGNvbnN0IHsgYWNyb3NzLCBkb3duIH0gPSBkYXRhO1xyXG4gIC8vaW5zZXJ0IHRoZSBhbnN3ZXJzIGFjcm9zcyBhbmQgZG93biBpbnRvIHRoZSBncmlkXHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93XVt3b3JkLmNvbCArIGldID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3cgKyBpXVt3b3JkLmNvbF0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGdyaWQpO1xyXG5cclxuICAvLyBDcmVhdGVzIHRoZSBjZWxscyB0aGF0IGFyZSBkaXNwbGF5ZWRcclxuICBjb25zdCBjZWxscyA9IGdyaWQubWFwKChyb3csIGkpID0+XHJcbiAgICA8ZGl2PlxyXG4gICAgcm93Lm1hcCgoY2VsbCwgaikgPT5cclxuICAgICAgY2VsbCAhPT0gXCJcIiA/IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgIGlkPXtgY2VsbC0ke2l9LSR7an1gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctUHJpbWFyeSBib3JkZXItMiBib3JkZXItU2Vjb25kYXJ5IHB5LTEgdGV4dC1jZW50ZXIgdXBwZXJjYXNlIGZvbnQtYmxhY2sgdGV4dC1tZCB6LTEwXCJcclxuICAgICAgICAgIGRhdGEtcm93PXtpfVxyXG4gICAgICAgICAgZGF0YS1jb2w9e2p9XHJcbiAgICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICA/IGNlbGxcclxuICAgICAgICAgICAgICA6IG5ld0F0dGVtcHQ/LnJvdyA9PT0gaSAmJiBuZXdBdHRlbXB0Py5jb2wgPT09IGpcclxuICAgICAgICAgICAgICA/IG5ld0F0dGVtcHQ/LmF0dGVtcHRcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICByZWFkT25seT17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgYXR0ZW1wdExldHRlcihcclxuICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25Gb2N1cz17XHJcbiAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICBjZWxsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICA/ICgpID0+IG5leHRDZWxsKGksIGopXHJcbiAgICAgICAgICAgICAgOiAoKSA9PiBmaW5kV29yZChpLCBqKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57Y2VsbH08L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgLy8gTW92ZXMgdG8gdGhlIG5leHQgY2VsbFxyXG4gIGZ1bmN0aW9uIG5leHRDZWxsKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXh0XCIsIHN0YXRlRGlyZWN0aW9uKTtcclxuICAgIGxldCBuZXh0Q2VsbDtcclxuICAgIC8vIGxldCBkaXJlY3Rpb24gPSBmaW5kV29yZChyb3csIGNvbCk7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3d9LSR7Y29sICsgMX1gKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3cgKyAxfS0ke2NvbH1gKTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0Q2VsbCkgbmV4dENlbGwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8vIERlY2lkZXMgaWYgdGhlIGlucHV0IGlzIGNvcnJlY3RcclxuICBmdW5jdGlvbiBhdHRlbXB0TGV0dGVyKFxyXG4gICAgbGV0dGVyOiBzdHJpbmcsXHJcbiAgICBjZWxsOiBzdHJpbmcsXHJcbiAgICByb3c6IG51bWJlcixcclxuICAgIGNvbDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobGV0dGVyID09PSBjZWxsKSB7XHJcbiAgICAgIHNldEF0dGVtcHQoKHByZXZBdHRlbXB0KSA9PiBbXHJcbiAgICAgICAgLi4ucHJldkF0dGVtcHQsXHJcbiAgICAgICAgeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9LFxyXG4gICAgICBdKTtcclxuICAgICAgbmV4dENlbGwocm93LCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmV3QXR0ZW1wdCh7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmluZHMgdGhlIHdvcmQgdGhhdCB0aGUgY2VsbCBpcyBpblxyXG4gIGZ1bmN0aW9uIGZpbmRXb3JkKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIGFjcm9zc0NoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBkb3duQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiXCIpIHtcclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgICAgICBkb3duQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgICAgIGFjcm9zc0NoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWNyb3NzQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5yb3cgPT09IHJvdyAmJiB3b3JkLmNvbCA8PSBjb2wgJiYgd29yZC5jb2wgKyBsZW4gPiBjb2wpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImFjcm9zc1wiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImFjcm9zc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvd25DaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLmNvbCA9PT0gY29sICYmIHdvcmQucm93IDw9IHJvdyAmJiB3b3JkLnJvdyArIGxlbiA+IHJvdykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiZG93blwiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgY29sLXNwYW4tMVwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1oZWFkZXIgdGV4dC1jZW50ZXJcIj5EYWlseSBDcm9zc3dvcmQ8L2gxPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb2xscy0xMCB6LTlcIj4gKi99XHJcbiAgICAgIHtjZWxsc31cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1UZXJ0aWFyeSBmb250LWJvbGQgbGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgICAgVXNlIHRoZSBza2lsbHMgdG8gc29sdmUgdGhlIGNyb3Nzd29yZCBwdXp6bGUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTMgdGV4dC1TZWNvbmRhcnkgdGV4dC14bCBmb250LWJvbGQgZm9udC1zZXJpZiBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgIHtjdXJyZW50V29yZC5jbHVlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3N3b3JkUHV6emxlO1xyXG5cclxuLypcclxuICBcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3Jvc3N3b3JkUHV6emxlIiwiYXR0ZW1wdCIsInNldEF0dGVtcHQiLCJuZXdBdHRlbXB0Iiwic2V0TmV3QXR0ZW1wdCIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJjbHVlIiwiYW5zd2VyIiwicm93IiwiY29sIiwibnVtIiwic3RhdGVEaXJlY3Rpb24iLCJzZXRTdGF0ZURpcmVjdGlvbiIsImRhdGEiLCJhY3Jvc3MiLCJkb3duIiwicm93cyIsImNvbHMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwia2V5Iiwid29yZCIsIk9iamVjdCIsImVudHJpZXMiLCJpIiwiY29uc29sZSIsImxvZyIsImNlbGxzIiwibWFwIiwiZGl2IiwiaW5wdXQiLCJpZCIsImoiLCJjbGFzc05hbWUiLCJkYXRhLXJvdyIsImRhdGEtY29sIiwibWF4TGVuZ3RoIiwidmFsdWUiLCJmaW5kIiwiYSIsImNlbGwiLCJ0b1VwcGVyQ2FzZSIsImRlZmF1bHRWYWx1ZSIsInJlYWRPbmx5Iiwib25DaGFuZ2UiLCJlIiwiYXR0ZW1wdExldHRlciIsInRhcmdldCIsIm9uRm9jdXMiLCJuZXh0Q2VsbCIsImZpbmRXb3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwibGV0dGVyIiwicHJldkF0dGVtcHQiLCJkaXJlY3Rpb24iLCJhY3Jvc3NDaGVjayIsImRvd25DaGVjayIsImxlbiIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});