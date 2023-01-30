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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"Html\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"Sass\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"Css\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n\r\n  if letter is capitalized have the number there\r\n\r\n  maybe just set all the jumbers accordinly\r\n\r\n  */ const cellValue = (i, j, cell)=>{\n        var _attempt_find;\n        if (((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase()) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: cell\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 199,\n                columnNumber: 14\n            }, undefined);\n        } else if ((newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j) {\n            return newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt;\n        } else {\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 col-span-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"article-header text-center\",\n                children: \"Daily Crossword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 209,\n                columnNumber: 7\n            }, undefined),\n            grid.map((row, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                    children: row.map((cell, j)=>{\n                        var _attempt_find, _attempt_find1;\n                        return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"cell-\".concat(i, \"-\").concat(j),\n                            className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                            \"data-row\": i,\n                            \"data-col\": j,\n                            maxLength: 1,\n                            value: cellValue(i, j, cell),\n                            readOnly: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase(),\n                            onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                            onFocus: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                        }, j, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                            lineNumber: 218,\n                            columnNumber: 17\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cell\n                        }, j, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                            lineNumber: 254,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 212,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-Tertiary font-bold leading-loose\",\n                        children: \"Use the skills to solve the crossword puzzle.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 262,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-3 text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 265,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 261,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 208,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FB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VyxJQUMxQlgsS0FBS1csV0FBVyxJQUNoQnBCLEdBQ0FpQjs0QkFHSm1CLFNBQ0U5RCxDQUFBQSxDQUFBQTsyQkE1QkcyQzs7OztpREFtQ1AsUUFBQ0s7c0NBQWFiOzJCQUFKUTs7OztxQ0FDWDs7bUJBMUNFakI7Ozs7O1lBOENYOzBCQUVBO2dCQUFLdUIsV0FBVTs7a0NBQ2I7NkJBQUdBOzs7Ozs7O2tDQUdILFFBQUNGO3dCQUFFRSxXQUFVO2tDQUNWN0MsWUFBWUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBN1BNUDtLQUFBQTtBQStQTixlQUFlQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeD83MTliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJ0aWNsZUltYWdlcyBmcm9tIFwiLi9QYXJ0aWNsZUltYWdlcy9QYXJ0aWNsZUltYWdlc1wiO1xyXG5cclxudHlwZSBBdHRlbXB0T2JqZWN0ID0ge1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIGF0dGVtcHQ6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgRGF0YU9iamVjdCA9IHtcclxuICBjbHVlOiBzdHJpbmc7XHJcbiAgYW5zd2VyOiBzdHJpbmc7XHJcbiAgcm93OiBudW1iZXI7XHJcbiAgY29sOiBudW1iZXI7XHJcbiAgbnVtOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBDcm9zc3dvcmRQdXp6bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2F0dGVtcHQsIHNldEF0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdFtdPihbXSk7XHJcbiAgY29uc3QgW25ld0F0dGVtcHQsIHNldE5ld0F0dGVtcHRdID0gdXNlU3RhdGU8QXR0ZW1wdE9iamVjdD4oKTtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlPERhdGFPYmplY3Q+KHtcclxuICAgIGNsdWU6IFwiQ2xpY2sgb24gYSBib3ggdG8gc3RhcnQuIFVzZSB0aGUgc2tpbGxzIGZvciBhbnN3ZXJzLlwiLFxyXG4gICAgYW5zd2VyOiBcInN0cmluZ1wiLFxyXG4gICAgcm93OiAwLFxyXG4gICAgY29sOiAwLFxyXG4gICAgbnVtOiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzdGF0ZURpcmVjdGlvbiwgc2V0U3RhdGVEaXJlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgYWNyb3NzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgbGFuZ3VhZ2UgdGhhdCBtYWtlcyBhIHdlYnNpdGUgY29tZSBhbGl2ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0IGRvIHlvdSBjYWxsIHRoZSBidWlsZGluZyBibG9ja3Mgb2YgYSB3ZWJzaXRlP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJIdG1sXCIsXHJcbiAgICAgICAgcm93OiA1LFxyXG4gICAgICAgIGNvbDogMCxcclxuICAgICAgICBudW06IDYsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgQ1NTIHByZXByb2Nlc3NvciB0aGF0IGhlbHBzIHlvdSBkcmVzcyB1cCBhIHdlYnNpdGVcIixcclxuICAgICAgICBhbnN3ZXI6IFwiU2Fzc1wiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA3LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3Uga2VlcCBhIHdlYnNpdGUncyBkYXRhIGluIG9yZGVyLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJSZWR1eFwiLFxyXG4gICAgICAgIHJvdzogOSxcclxuICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgbnVtOiA4LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGRvd246IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBmcmFtZXdvcmsgdGhhdCBtYWtlcyBidWlsZGluZyBzZXJ2ZXItcmVuZGVyZWQgUmVhY3QgYXBwcyBhIGJyZWV6ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiTmV4dFwiLFxyXG4gICAgICAgIHJvdzogMCxcclxuICAgICAgICBjb2w6IDksXHJcbiAgICAgICAgbnVtOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIEphdmFTY3JpcHQgbGlicmFyeSB0aGF0IGhlbHBzIHlvdSBidWlsZCBhIHdlYnNpdGUncyBwZXJzb25hbGl0eS5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVhY3RcIixcclxuICAgICAgICByb3c6IDEsXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSB1dGlsaXR5LWZpcnN0IENTUyBmcmFtZXdvcmsgdGhhdCBoZWxwcyB5b3UgY3JlYXRlIGEgd2Vic2l0ZSdzIHVuaXF1ZSBsb29rLlwiLFxyXG4gICAgICAgIGFuc3dlcjogXCJUYWlsd2luZFwiLFxyXG4gICAgICAgIHJvdzogMixcclxuICAgICAgICBjb2w6IDMsXHJcbiAgICAgICAgbnVtOiAzLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgZ2l2ZXMgYSB3ZWJzaXRlIGEgbWFrZW92ZXI/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkNzc1wiLFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICBjb2w6IDUsXHJcbiAgICAgICAgbnVtOiA1LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICAvLyBDcmVhdGVzIHRoZSBncmlkXHJcbiAgY29uc3Qgcm93cyA9IDEwO1xyXG4gIGNvbnN0IGNvbHMgPSAxMDtcclxuICBjb25zdCBncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PlxyXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY29scyB9LCAoKSA9PiBcIlwiKVxyXG4gICk7XHJcbiAgY29uc3QgeyBhY3Jvc3MsIGRvd24gfSA9IGRhdGE7XHJcbiAgLy9pbnNlcnQgdGhlIGFuc3dlcnMgYWNyb3NzIGFuZCBkb3duIGludG8gdGhlIGdyaWRcclxuICBmb3IgKGxldCBba2V5LCB3b3JkXSBvZiBPYmplY3QuZW50cmllcyhhY3Jvc3MpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3ddW3dvcmQuY29sICsgaV0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ3JpZFt3b3JkLnJvdyArIGldW3dvcmQuY29sXSA9IHdvcmQuYW5zd2VyW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTW92ZXMgdG8gdGhlIG5leHQgY2VsbFxyXG4gIGZ1bmN0aW9uIG5leHRDZWxsKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXh0XCIsIHN0YXRlRGlyZWN0aW9uKTtcclxuICAgIGxldCBuZXh0Q2VsbDtcclxuICAgIC8vIGxldCBkaXJlY3Rpb24gPSBmaW5kV29yZChyb3csIGNvbCk7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3d9LSR7Y29sICsgMX1gKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGVEaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgIG5leHRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwtJHtyb3cgKyAxfS0ke2NvbH1gKTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0Q2VsbCkgbmV4dENlbGwuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8vIERlY2lkZXMgaWYgdGhlIGlucHV0IGlzIGNvcnJlY3RcclxuICBmdW5jdGlvbiBhdHRlbXB0TGV0dGVyKFxyXG4gICAgbGV0dGVyOiBzdHJpbmcsXHJcbiAgICBjZWxsOiBzdHJpbmcsXHJcbiAgICByb3c6IG51bWJlcixcclxuICAgIGNvbDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobGV0dGVyID09PSBjZWxsKSB7XHJcbiAgICAgIHNldEF0dGVtcHQoKHByZXZBdHRlbXB0KSA9PiBbXHJcbiAgICAgICAgLi4ucHJldkF0dGVtcHQsXHJcbiAgICAgICAgeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9LFxyXG4gICAgICBdKTtcclxuICAgICAgbmV4dENlbGwocm93LCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TmV3QXR0ZW1wdCh7IHJvdzogcm93LCBjb2w6IGNvbCwgYXR0ZW1wdDogbGV0dGVyIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmluZHMgdGhlIHdvcmQgdGhhdCB0aGUgY2VsbCBpcyBpblxyXG4gIGZ1bmN0aW9uIGZpbmRXb3JkKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImFjcm9zc1wiKSB7XHJcbiAgICAgIGFjcm9zc0NoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBkb3duQ2hlY2soY3VycmVudFdvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiXCIpIHtcclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoZG93bikpIHtcclxuICAgICAgICBkb3duQ2hlY2sod29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgICAgIGFjcm9zc0NoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWNyb3NzQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5yb3cgPT09IHJvdyAmJiB3b3JkLmNvbCA8PSBjb2wgJiYgd29yZC5jb2wgKyBsZW4gPiBjb2wpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImFjcm9zc1wiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImFjcm9zc1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvd25DaGVjayh3b3JkOiBEYXRhT2JqZWN0KSB7XHJcbiAgICAgIGxldCBsZW4gPSB3b3JkLmFuc3dlci5sZW5ndGg7XHJcbiAgICAgIGlmICh3b3JkLmNvbCA9PT0gY29sICYmIHdvcmQucm93IDw9IHJvdyAmJiB3b3JkLnJvdyArIGxlbiA+IHJvdykge1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHdvcmQpO1xyXG4gICAgICAgIHNldFN0YXRlRGlyZWN0aW9uKFwiZG93blwiKTtcclxuICAgICAgICBkaXJlY3Rpb24gPSBcImRvd25cIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLypcclxuXHJcbiAgaWYgbGV0dGVyIGlzIGNhcGl0YWxpemVkIGhhdmUgdGhlIG51bWJlciB0aGVyZVxyXG5cclxuICBtYXliZSBqdXN0IHNldCBhbGwgdGhlIGp1bWJlcnMgYWNjb3JkaW5seVxyXG5cclxuICAqL1xyXG5cclxuICBjb25zdCBjZWxsVmFsdWUgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIsIGNlbGw6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBhdHRlbXB0LmZpbmQoKGEpID0+IGEucm93ID09PSBpICYmIGEuY29sID09PSBqKT8uYXR0ZW1wdCA9PT1cclxuICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIDxwPntjZWxsfTwvcD47XHJcbiAgICB9IGVsc2UgaWYgKG5ld0F0dGVtcHQ/LnJvdyA9PT0gaSAmJiBuZXdBdHRlbXB0Py5jb2wgPT09IGopIHtcclxuICAgICAgcmV0dXJuIG5ld0F0dGVtcHQ/LmF0dGVtcHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcHgtNiBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciB0ZXh0LWNlbnRlclwiPkRhaWx5IENyb3Nzd29yZDwvaDE+XHJcbiAgICAgIHtncmlkLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1TZWNvbmRhcnkgZ3JpZCBncmlkLWNvbHMtMTAgZ3JpZC1yb2xscy0xMCB6LTlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgaikgPT5cclxuICAgICAgICAgICAgICBjZWxsICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGtleT17an1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2BjZWxsLSR7aX0tJHtqfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVByaW1hcnkgYm9yZGVyLTIgYm9yZGVyLVNlY29uZGFyeSBweS0xIHRleHQtY2VudGVyIHVwcGVyY2FzZSBmb250LWJsYWNrIHRleHQtbWQgei0xMFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcm93PXtpfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWNvbD17an1cclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbFZhbHVlKGksIGosIGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA/IGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDogbmV3QXR0ZW1wdD8ucm93ID09PSBpICYmIG5ld0F0dGVtcHQ/LmNvbCA9PT0galxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPyBuZXdBdHRlbXB0Py5hdHRlbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRMZXR0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICgpID0+IG5leHRDZWxsKGksIGopXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICgpID0+IGZpbmRXb3JkKGksIGopXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfT57Y2VsbH08L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1UZXJ0aWFyeSBmb250LWJvbGQgbGVhZGluZy1sb29zZVwiPlxyXG4gICAgICAgICAgVXNlIHRoZSBza2lsbHMgdG8gc29sdmUgdGhlIGNyb3Nzd29yZCBwdXp6bGUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTMgdGV4dC1TZWNvbmRhcnkgdGV4dC14bCBmb250LWJvbGQgZm9udC1zZXJpZiBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgIHtjdXJyZW50V29yZC5jbHVlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3N3b3JkUHV6emxlO1xyXG5cclxuLypcclxuICBcclxuXHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3Jvc3N3b3JkUHV6emxlIiwiYXR0ZW1wdCIsInNldEF0dGVtcHQiLCJuZXdBdHRlbXB0Iiwic2V0TmV3QXR0ZW1wdCIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJjbHVlIiwiYW5zd2VyIiwicm93IiwiY29sIiwibnVtIiwic3RhdGVEaXJlY3Rpb24iLCJzZXRTdGF0ZURpcmVjdGlvbiIsImRhdGEiLCJhY3Jvc3MiLCJkb3duIiwicm93cyIsImNvbHMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwia2V5Iiwid29yZCIsIk9iamVjdCIsImVudHJpZXMiLCJpIiwibmV4dENlbGwiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwiYXR0ZW1wdExldHRlciIsImxldHRlciIsImNlbGwiLCJwcmV2QXR0ZW1wdCIsImZpbmRXb3JkIiwiZGlyZWN0aW9uIiwiYWNyb3NzQ2hlY2siLCJkb3duQ2hlY2siLCJsZW4iLCJjZWxsVmFsdWUiLCJqIiwiZmluZCIsImEiLCJ0b1VwcGVyQ2FzZSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlucHV0IiwiaWQiLCJkYXRhLXJvdyIsImRhdGEtY29sIiwibWF4TGVuZ3RoIiwidmFsdWUiLCJyZWFkT25seSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uRm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});