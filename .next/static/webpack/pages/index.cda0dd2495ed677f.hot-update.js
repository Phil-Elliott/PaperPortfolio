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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CrosswordPuzzle = ()=>{\n    _s();\n    const [attempt, setAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newAttempt, setNewAttempt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWord, setCurrentWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        clue: \"Click on a box to start. Use the skills for answers.\",\n        answer: \"string\",\n        row: 0,\n        col: 0,\n        num: 0\n    });\n    const [stateDirection, setStateDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const data = {\n        across: [\n            {\n                clue: \"What's the language that makes a website come alive?\",\n                answer: \"Javascript\",\n                row: 3,\n                col: 0,\n                num: 4\n            },\n            {\n                clue: \"What do you call the building blocks of a website?\",\n                answer: \"Html\",\n                row: 5,\n                col: 0,\n                num: 6\n            },\n            {\n                clue: \"A CSS preprocessor that helps you dress up a website\",\n                answer: \"Sass\",\n                row: 5,\n                col: 5,\n                num: 7\n            },\n            {\n                clue: \"A JavaScript library that helps you keep a website's data in order.\",\n                answer: \"Redux\",\n                row: 9,\n                col: 1,\n                num: 8\n            }\n        ],\n        down: [\n            {\n                clue: \"What's the framework that makes building server-rendered React apps a breeze?\",\n                answer: \"Next\",\n                row: 0,\n                col: 9,\n                num: 1\n            },\n            {\n                clue: \"A JavaScript library that helps you build a website's personality.\",\n                answer: \"React\",\n                row: 1,\n                col: 1,\n                num: 2\n            },\n            {\n                clue: \"A utility-first CSS framework that helps you create a website's unique look.\",\n                answer: \"Tailwind\",\n                row: 2,\n                col: 3,\n                num: 3\n            },\n            {\n                clue: \"What's the language that gives a website a makeover?\",\n                answer: \"Css\",\n                row: 3,\n                col: 5,\n                num: 5\n            }\n        ]\n    };\n    // Creates the grid\n    const rows = 10;\n    const cols = 10;\n    const grid = Array.from({\n        length: rows\n    }, ()=>Array.from({\n            length: cols\n        }, ()=>\"\"));\n    const { across , down  } = data;\n    //insert the answers across and down into the grid\n    for (let [key, word] of Object.entries(across)){\n        for(let i = 0; i < word.answer.length; i++){\n            grid[word.row][word.col + i] = word.answer[i];\n        }\n    }\n    for (let [key1, word1] of Object.entries(down)){\n        for(let i1 = 0; i1 < word1.answer.length; i1++){\n            grid[word1.row + i1][word1.col] = word1.answer[i1];\n        }\n    }\n    // Moves to the next cell\n    function nextCell(row, col) {\n        console.log(\"next\", stateDirection);\n        let nextCell;\n        // let direction = findWord(row, col);\n        if (stateDirection === \"across\") {\n            nextCell = document.getElementById(\"cell-\".concat(row, \"-\").concat(col + 1));\n        } else if (stateDirection === \"down\") {\n            nextCell = document.getElementById(\"cell-\".concat(row + 1, \"-\").concat(col));\n        }\n        if (nextCell) nextCell.focus();\n    }\n    // Decides if the input is correct\n    function attemptLetter(letter, cell, row, col) {\n        if (letter === cell) {\n            setAttempt((prevAttempt)=>[\n                    ...prevAttempt,\n                    {\n                        row: row,\n                        col: col,\n                        attempt: letter\n                    }\n                ]);\n            nextCell(row, col);\n        } else {\n            setNewAttempt({\n                row: row,\n                col: col,\n                attempt: letter\n            });\n        }\n    }\n    // Finds the word that the cell is in\n    function findWord(row, col) {\n        let direction = \"\";\n        if (stateDirection === \"across\") {\n            acrossCheck(currentWord);\n        } else if (direction === \"down\") {\n            downCheck(currentWord);\n        }\n        if (direction === \"\") {\n            for (let [key, word] of Object.entries(down)){\n                downCheck(word);\n            }\n            for (let [key1, word1] of Object.entries(across)){\n                acrossCheck(word1);\n            }\n        }\n        function acrossCheck(word) {\n            let len = word.answer.length;\n            if (word.row === row && word.col <= col && word.col + len > col) {\n                setCurrentWord(word);\n                setStateDirection(\"across\");\n                direction = \"across\";\n                return;\n            }\n        }\n        function downCheck(word) {\n            let len = word.answer.length;\n            if (word.col === col && word.row <= row && word.row + len > row) {\n                setCurrentWord(word);\n                setStateDirection(\"down\");\n                direction = \"down\";\n                return;\n            }\n        }\n        return direction;\n    }\n    /*\r\n\r\n  if letter is capitalized have the number there\r\n\r\n  maybe just set all the jumbers accordinly\r\n\r\n  */ const cellValue = (i, j, cell)=>{\n        var _attempt_find;\n        if (((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase()) {\n            return cell;\n        } else if ((newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.row) === i && (newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.col) === j) {\n            return newAttempt === null || newAttempt === void 0 ? void 0 : newAttempt.attempt;\n        } else {\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full px-6 grid-cols-2\",\n        children: [\n            grid.map((row, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-Secondary grid grid-cols-10 grid-rolls-10 z-9\",\n                    children: row.map((cell, j)=>{\n                        var _attempt_find, _attempt_find1;\n                        return cell !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"cell-\".concat(i, \"-\").concat(j),\n                            className: \"bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10\",\n                            \"data-row\": i,\n                            \"data-col\": j,\n                            maxLength: 1,\n                            value: cellValue(i, j, cell),\n                            readOnly: ((_attempt_find = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find === void 0 ? void 0 : _attempt_find.attempt) === cell.toUpperCase(),\n                            onChange: (e)=>attemptLetter(e.target.value.toUpperCase(), cell.toUpperCase(), i, j),\n                            onFocus: ((_attempt_find1 = attempt.find((a)=>a.row === i && a.col === j)) === null || _attempt_find1 === void 0 ? void 0 : _attempt_find1.attempt) === cell.toUpperCase() ? ()=>nextCell(i, j) : ()=>findWord(i, j)\n                        }, j, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                            lineNumber: 218,\n                            columnNumber: 17\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cell\n                        }, j, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                            lineNumber: 246,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                    lineNumber: 212,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-Tertiary font-bold leading-loose\",\n                        children: \"Use the skills to solve the crossword puzzle.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 254,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pt-3 text-Secondary text-xl font-bold font-serif leading-relaxed\",\n                        children: currentWord.clue\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                        lineNumber: 257,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n                lineNumber: 253,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\PaperPortfolio\\\\components\\\\Skills\\\\Crossword\\\\Crossword.tsx\",\n        lineNumber: 208,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrosswordPuzzle, \"2fL04PNyhOB2dUCiL6KWew62/F4=\");\n_c = CrosswordPuzzle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrosswordPuzzle); /*\r\n  \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"CrosswordPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxscy9Dcm9zc3dvcmQvQ3Jvc3N3b3JkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFtRDtBQWlCbkQsTUFBTUUsa0JBQWtCLElBQU07O0lBQzVCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBYTtRQUN6RFEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdELE1BQU1lLE9BQU87UUFDWEMsUUFBUTtZQUNOO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUVBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7U0FDRDtRQUNESyxNQUFNO1lBQ0o7Z0JBQ0VULE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtZQUNBO2dCQUNFSixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQTtnQkFDRUosTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsS0FBSztnQkFDTEMsS0FBSztZQUNQO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLEtBQUs7WUFDUDtTQUNEO0lBQ0g7SUFFQSxtQkFBbUI7SUFDbkIsTUFBTU0sT0FBTztJQUNiLE1BQU1DLE9BQU87SUFDYixNQUFNQyxPQUFPQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUw7SUFBSyxHQUFHLElBQ3hDRyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUUo7UUFBSyxHQUFHLElBQU07SUFFckMsTUFBTSxFQUFFSCxPQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRjtJQUN6QixrREFBa0Q7SUFDbEQsS0FBSyxJQUFJLENBQUNTLEtBQUtDLEtBQUssSUFBSUMsT0FBT0MsT0FBTyxDQUFDWCxRQUFTO1FBQzlDLElBQUssSUFBSVksSUFBSSxHQUFHQSxJQUFJSCxLQUFLaEIsTUFBTSxDQUFDYyxNQUFNLEVBQUVLLElBQUs7WUFDM0NSLElBQUksQ0FBQ0ssS0FBS2YsR0FBRyxDQUFDLENBQUNlLEtBQUtkLEdBQUcsR0FBR2lCLEVBQUUsR0FBR0gsS0FBS2hCLE1BQU0sQ0FBQ21CLEVBQUU7UUFDL0M7SUFDRjtJQUNBLEtBQUssSUFBSSxDQUFDSixNQUFLQyxNQUFLLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1YsTUFBTztRQUM1QyxJQUFLLElBQUlXLEtBQUksR0FBR0EsS0FBSUgsTUFBS2hCLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFSyxLQUFLO1lBQzNDUixJQUFJLENBQUNLLE1BQUtmLEdBQUcsR0FBR2tCLEdBQUUsQ0FBQ0gsTUFBS2QsR0FBRyxDQUFDLEdBQUdjLE1BQUtoQixNQUFNLENBQUNtQixHQUFFO1FBQy9DO0lBQ0Y7SUFFQSx5QkFBeUI7SUFDekIsU0FBU0MsU0FBU25CLEdBQVcsRUFBRUMsR0FBVyxFQUFFO1FBQzFDbUIsUUFBUUMsR0FBRyxDQUFDLFFBQVFsQjtRQUNwQixJQUFJZ0I7UUFDSixzQ0FBc0M7UUFFdEMsSUFBSWhCLG1CQUFtQixVQUFVO1lBQy9CZ0IsV0FBV0csU0FBU0MsY0FBYyxDQUFDLFFBQWV0QixPQUFQRCxLQUFJLEtBQVcsT0FBUkMsTUFBTTtRQUMxRCxPQUFPLElBQUlFLG1CQUFtQixRQUFRO1lBQ3BDZ0IsV0FBV0csU0FBU0MsY0FBYyxDQUFDLFFBQW1CdEIsT0FBWEQsTUFBTSxHQUFFLEtBQU8sT0FBSkM7UUFDeEQsQ0FBQztRQUNELElBQUlrQixVQUFVQSxTQUFTSyxLQUFLO0lBQzlCO0lBRUEsa0NBQWtDO0lBQ2xDLFNBQVNDLGNBQ1BDLE1BQWMsRUFDZEMsSUFBWSxFQUNaM0IsR0FBVyxFQUNYQyxHQUFXLEVBQ1g7UUFDQSxJQUFJeUIsV0FBV0MsTUFBTTtZQUNuQmxDLFdBQVcsQ0FBQ21DLGNBQWdCO3VCQUN2QkE7b0JBQ0g7d0JBQUU1QixLQUFLQTt3QkFBS0MsS0FBS0E7d0JBQUtULFNBQVNrQztvQkFBTztpQkFDdkM7WUFDRFAsU0FBU25CLEtBQUtDO1FBQ2hCLE9BQU87WUFDTE4sY0FBYztnQkFBRUssS0FBS0E7Z0JBQUtDLEtBQUtBO2dCQUFLVCxTQUFTa0M7WUFBTztRQUN0RCxDQUFDO0lBQ0g7SUFFQSxxQ0FBcUM7SUFDckMsU0FBU0csU0FBUzdCLEdBQVcsRUFBRUMsR0FBVyxFQUFFO1FBQzFDLElBQUk2QixZQUFZO1FBRWhCLElBQUkzQixtQkFBbUIsVUFBVTtZQUMvQjRCLFlBQVluQztRQUNkLE9BQU8sSUFBSWtDLGNBQWMsUUFBUTtZQUMvQkUsVUFBVXBDO1FBQ1osQ0FBQztRQUVELElBQUlrQyxjQUFjLElBQUk7WUFDcEIsS0FBSyxJQUFJLENBQUNoQixLQUFLQyxLQUFLLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1YsTUFBTztnQkFDNUN5QixVQUFVakI7WUFDWjtZQUNBLEtBQUssSUFBSSxDQUFDRCxNQUFLQyxNQUFLLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1gsUUFBUztnQkFDOUN5QixZQUFZaEI7WUFDZDtRQUNGLENBQUM7UUFFRCxTQUFTZ0IsWUFBWWhCLElBQWdCLEVBQUU7WUFDckMsSUFBSWtCLE1BQU1sQixLQUFLaEIsTUFBTSxDQUFDYyxNQUFNO1lBQzVCLElBQUlFLEtBQUtmLEdBQUcsS0FBS0EsT0FBT2UsS0FBS2QsR0FBRyxJQUFJQSxPQUFPYyxLQUFLZCxHQUFHLEdBQUdnQyxNQUFNaEMsS0FBSztnQkFDL0RKLGVBQWVrQjtnQkFDZlgsa0JBQWtCO2dCQUNsQjBCLFlBQVk7Z0JBQ1o7WUFDRixDQUFDO1FBQ0g7UUFFQSxTQUFTRSxVQUFVakIsSUFBZ0IsRUFBRTtZQUNuQyxJQUFJa0IsTUFBTWxCLEtBQUtoQixNQUFNLENBQUNjLE1BQU07WUFDNUIsSUFBSUUsS0FBS2QsR0FBRyxLQUFLQSxPQUFPYyxLQUFLZixHQUFHLElBQUlBLE9BQU9lLEtBQUtmLEdBQUcsR0FBR2lDLE1BQU1qQyxLQUFLO2dCQUMvREgsZUFBZWtCO2dCQUNmWCxrQkFBa0I7Z0JBQ2xCMEIsWUFBWTtnQkFDWjtZQUNGLENBQUM7UUFDSDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQTs7UUFTRSxJQUNFdEMsQ0FBQUEsQ0FBQUEsZ0JBQUFBLFFBQVE0QyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUE7O1FBSXRCLE9BQU8sSUFBSTNDLENBQUFBLHVCQUFBQTs7UUFFWCxPQUFPO1lBQ0wsT0FBTztRQUNULENBQUM7SUFDSDtJQUVBLHFCQUNFLFFBQUM2QztRQUFJQyxXQUFVOztZQUVaOUIsS0FBSytCLEdBQUcsQ0FBQyxDQUFDekM7OztzRkFNSkEsRUFBSXlDLEdBQUcsQ0FBQyxDQUFDZDs0QkFXRm5DLGVBWUFBOzs0QkFuQkZtRCxJQUFJOzRCQUNKSCxTQUFBQSw2REFBVTs0QkFDVkksWUFBVTFCOzRCQUNWMkIsWUFBVVY7NEJBQ1ZXLFdBQVc7NEJBQ1hDLE9BQU9iLFVBQVVoQixHQUFHaUIsR0FBR1IsUUFBQUEsNkRBQUFBOzRCQUN2QnFCLFVBQ0V4RCxDQUFBQSxDQUFBQSxnQkFBQUEsUUFBUTRDOzRCQUdWYSxVQUFVLENBQUNDLElBQ1R6QixjQUNFeUIsRUFBRUMsTUFBTSxDQUFDSixLQUFLLENBQUNULFdBQVcsSUFDMUJYLEtBQUtXLFdBQVcsSUFDaEJwQixHQUNBaUI7NEJBR0ppQixTQUNFNUQsQ0FBQUEsQ0FBQUE7MkJBcEJHMkM7Ozs7aURBMkJQLFFBQUNJO3NDQUFhWjsyQkFBSlE7Ozs7cUNBQ1g7O21CQWxDRWpCOzs7OztZQXNDWDswQkFFQTtnQkFBS3NCLFdBQVU7O2tDQUNiOzZCQUFHQTs7Ozs7OztrQ0FHSCxRQUFDYTt3QkFBRWIsV0FBVTtrQ0FDVjVDLFlBQVlFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQXJQTVA7S0FBQUE7QUF1UE4sZUFBZUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbHMvQ3Jvc3N3b3JkL0Nyb3Nzd29yZC50c3g/NzE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFydGljbGVJbWFnZXMgZnJvbSBcIi4vUGFydGljbGVJbWFnZXMvUGFydGljbGVJbWFnZXNcIjtcclxuXHJcbnR5cGUgQXR0ZW1wdE9iamVjdCA9IHtcclxuICByb3c6IG51bWJlcjtcclxuICBjb2w6IG51bWJlcjtcclxuICBhdHRlbXB0OiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIERhdGFPYmplY3QgPSB7XHJcbiAgY2x1ZTogc3RyaW5nO1xyXG4gIGFuc3dlcjogc3RyaW5nO1xyXG4gIHJvdzogbnVtYmVyO1xyXG4gIGNvbDogbnVtYmVyO1xyXG4gIG51bTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgQ3Jvc3N3b3JkUHV6emxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthdHRlbXB0LCBzZXRBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3RbXT4oW10pO1xyXG4gIGNvbnN0IFtuZXdBdHRlbXB0LCBzZXROZXdBdHRlbXB0XSA9IHVzZVN0YXRlPEF0dGVtcHRPYmplY3Q+KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxEYXRhT2JqZWN0Pih7XHJcbiAgICBjbHVlOiBcIkNsaWNrIG9uIGEgYm94IHRvIHN0YXJ0LiBVc2UgdGhlIHNraWxscyBmb3IgYW5zd2Vycy5cIixcclxuICAgIGFuc3dlcjogXCJzdHJpbmdcIixcclxuICAgIHJvdzogMCxcclxuICAgIGNvbDogMCxcclxuICAgIG51bTogMCxcclxuICB9KTtcclxuICBjb25zdCBbc3RhdGVEaXJlY3Rpb24sIHNldFN0YXRlRGlyZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGFjcm9zczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJXaGF0J3MgdGhlIGxhbmd1YWdlIHRoYXQgbWFrZXMgYSB3ZWJzaXRlIGNvbWUgYWxpdmU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiAwLFxyXG4gICAgICAgIG51bTogNCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCBkbyB5b3UgY2FsbCB0aGUgYnVpbGRpbmcgYmxvY2tzIG9mIGEgd2Vic2l0ZT9cIixcclxuICAgICAgICBhbnN3ZXI6IFwiSHRtbFwiLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICBjb2w6IDAsXHJcbiAgICAgICAgbnVtOiA2LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2x1ZTogXCJBIENTUyBwcmVwcm9jZXNzb3IgdGhhdCBoZWxwcyB5b3UgZHJlc3MgdXAgYSB3ZWJzaXRlXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlNhc3NcIixcclxuICAgICAgICByb3c6IDUsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRoYXQgaGVscHMgeW91IGtlZXAgYSB3ZWJzaXRlJ3MgZGF0YSBpbiBvcmRlci5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiUmVkdXhcIixcclxuICAgICAgICByb3c6IDksXHJcbiAgICAgICAgY29sOiAxLFxyXG4gICAgICAgIG51bTogOCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkb3duOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIldoYXQncyB0aGUgZnJhbWV3b3JrIHRoYXQgbWFrZXMgYnVpbGRpbmcgc2VydmVyLXJlbmRlcmVkIFJlYWN0IGFwcHMgYSBicmVlemU/XCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIk5leHRcIixcclxuICAgICAgICByb3c6IDAsXHJcbiAgICAgICAgY29sOiA5LFxyXG4gICAgICAgIG51bTogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiQSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBoZWxwcyB5b3UgYnVpbGQgYSB3ZWJzaXRlJ3MgcGVyc29uYWxpdHkuXCIsXHJcbiAgICAgICAgYW5zd2VyOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgcm93OiAxLFxyXG4gICAgICAgIGNvbDogMSxcclxuICAgICAgICBudW06IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbHVlOiBcIkEgdXRpbGl0eS1maXJzdCBDU1MgZnJhbWV3b3JrIHRoYXQgaGVscHMgeW91IGNyZWF0ZSBhIHdlYnNpdGUncyB1bmlxdWUgbG9vay5cIixcclxuICAgICAgICBhbnN3ZXI6IFwiVGFpbHdpbmRcIixcclxuICAgICAgICByb3c6IDIsXHJcbiAgICAgICAgY29sOiAzLFxyXG4gICAgICAgIG51bTogMyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsdWU6IFwiV2hhdCdzIHRoZSBsYW5ndWFnZSB0aGF0IGdpdmVzIGEgd2Vic2l0ZSBhIG1ha2VvdmVyP1wiLFxyXG4gICAgICAgIGFuc3dlcjogXCJDc3NcIixcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgY29sOiA1LFxyXG4gICAgICAgIG51bTogNSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gIGNvbnN0IHJvd3MgPSAxMDtcclxuICBjb25zdCBjb2xzID0gMTA7XHJcbiAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT5cclxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvbHMgfSwgKCkgPT4gXCJcIilcclxuICApO1xyXG4gIGNvbnN0IHsgYWNyb3NzLCBkb3duIH0gPSBkYXRhO1xyXG4gIC8vaW5zZXJ0IHRoZSBhbnN3ZXJzIGFjcm9zcyBhbmQgZG93biBpbnRvIHRoZSBncmlkXHJcbiAgZm9yIChsZXQgW2tleSwgd29yZF0gb2YgT2JqZWN0LmVudHJpZXMoYWNyb3NzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmFuc3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBncmlkW3dvcmQucm93XVt3b3JkLmNvbCArIGldID0gd29yZC5hbnN3ZXJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQuYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdyaWRbd29yZC5yb3cgKyBpXVt3b3JkLmNvbF0gPSB3b3JkLmFuc3dlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1vdmVzIHRvIHRoZSBuZXh0IGNlbGxcclxuICBmdW5jdGlvbiBuZXh0Q2VsbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBzdGF0ZURpcmVjdGlvbik7XHJcbiAgICBsZXQgbmV4dENlbGw7XHJcbiAgICAvLyBsZXQgZGlyZWN0aW9uID0gZmluZFdvcmQocm93LCBjb2wpO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93fS0ke2NvbCArIDF9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlRGlyZWN0aW9uID09PSBcImRvd25cIikge1xyXG4gICAgICBuZXh0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsLSR7cm93ICsgMX0tJHtjb2x9YCk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dENlbGwpIG5leHRDZWxsLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWNpZGVzIGlmIHRoZSBpbnB1dCBpcyBjb3JyZWN0XHJcbiAgZnVuY3Rpb24gYXR0ZW1wdExldHRlcihcclxuICAgIGxldHRlcjogc3RyaW5nLFxyXG4gICAgY2VsbDogc3RyaW5nLFxyXG4gICAgcm93OiBudW1iZXIsXHJcbiAgICBjb2w6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGxldHRlciA9PT0gY2VsbCkge1xyXG4gICAgICBzZXRBdHRlbXB0KChwcmV2QXR0ZW1wdCkgPT4gW1xyXG4gICAgICAgIC4uLnByZXZBdHRlbXB0LFxyXG4gICAgICAgIHsgcm93OiByb3csIGNvbDogY29sLCBhdHRlbXB0OiBsZXR0ZXIgfSxcclxuICAgICAgXSk7XHJcbiAgICAgIG5leHRDZWxsKHJvdywgY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5ld0F0dGVtcHQoeyByb3c6IHJvdywgY29sOiBjb2wsIGF0dGVtcHQ6IGxldHRlciB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZpbmRzIHRoZSB3b3JkIHRoYXQgdGhlIGNlbGwgaXMgaW5cclxuICBmdW5jdGlvbiBmaW5kV29yZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBcIlwiO1xyXG5cclxuICAgIGlmIChzdGF0ZURpcmVjdGlvbiA9PT0gXCJhY3Jvc3NcIikge1xyXG4gICAgICBhY3Jvc3NDaGVjayhjdXJyZW50V29yZCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgZG93bkNoZWNrKGN1cnJlbnRXb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcIlwiKSB7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGRvd24pKSB7XHJcbiAgICAgICAgZG93bkNoZWNrKHdvcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHdvcmRdIG9mIE9iamVjdC5lbnRyaWVzKGFjcm9zcykpIHtcclxuICAgICAgICBhY3Jvc3NDaGVjayh3b3JkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjcm9zc0NoZWNrKHdvcmQ6IERhdGFPYmplY3QpIHtcclxuICAgICAgbGV0IGxlbiA9IHdvcmQuYW5zd2VyLmxlbmd0aDtcclxuICAgICAgaWYgKHdvcmQucm93ID09PSByb3cgJiYgd29yZC5jb2wgPD0gY29sICYmIHdvcmQuY29sICsgbGVuID4gY29sKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFdvcmQod29yZCk7XHJcbiAgICAgICAgc2V0U3RhdGVEaXJlY3Rpb24oXCJhY3Jvc3NcIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJhY3Jvc3NcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb3duQ2hlY2sod29yZDogRGF0YU9iamVjdCkge1xyXG4gICAgICBsZXQgbGVuID0gd29yZC5hbnN3ZXIubGVuZ3RoO1xyXG4gICAgICBpZiAod29yZC5jb2wgPT09IGNvbCAmJiB3b3JkLnJvdyA8PSByb3cgJiYgd29yZC5yb3cgKyBsZW4gPiByb3cpIHtcclxuICAgICAgICBzZXRDdXJyZW50V29yZCh3b3JkKTtcclxuICAgICAgICBzZXRTdGF0ZURpcmVjdGlvbihcImRvd25cIik7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qXHJcblxyXG4gIGlmIGxldHRlciBpcyBjYXBpdGFsaXplZCBoYXZlIHRoZSBudW1iZXIgdGhlcmVcclxuXHJcbiAgbWF5YmUganVzdCBzZXQgYWxsIHRoZSBqdW1iZXJzIGFjY29yZGlubHlcclxuXHJcbiAgKi9cclxuXHJcbiAgY29uc3QgY2VsbFZhbHVlID0gKGk6IG51bWJlciwgajogbnVtYmVyLCBjZWxsOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgYXR0ZW1wdC5maW5kKChhKSA9PiBhLnJvdyA9PT0gaSAmJiBhLmNvbCA9PT0gaik/LmF0dGVtcHQgPT09XHJcbiAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgfSBlbHNlIGlmIChuZXdBdHRlbXB0Py5yb3cgPT09IGkgJiYgbmV3QXR0ZW1wdD8uY29sID09PSBqKSB7XHJcbiAgICAgIHJldHVybiBuZXdBdHRlbXB0Py5hdHRlbXB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTYgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJhcnRpY2xlLWhlYWRlciB0ZXh0LWNlbnRlclwiPkRhaWx5IENyb3Nzd29yZDwvaDE+ICovfVxyXG4gICAgICB7Z3JpZC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctU2Vjb25kYXJ5IGdyaWQgZ3JpZC1jb2xzLTEwIGdyaWQtcm9sbHMtMTAgei05XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGopID0+XHJcbiAgICAgICAgICAgICAgY2VsbCAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2p9XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtgY2VsbC0ke2l9LSR7an1gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1QcmltYXJ5IGJvcmRlci0yIGJvcmRlci1TZWNvbmRhcnkgcHktMSB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgZm9udC1ibGFjayB0ZXh0LW1kIHotMTBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJvdz17aX1cclxuICAgICAgICAgICAgICAgICAgZGF0YS1jb2w9e2p9XHJcbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbGxWYWx1ZShpLCBqLCBjZWxsKX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0TGV0dGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICBqXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQuZmluZCgoYSkgPT4gYS5yb3cgPT09IGkgJiYgYS5jb2wgPT09IGopPy5hdHRlbXB0ID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAoKSA9PiBuZXh0Q2VsbChpLCBqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAoKSA9PiBmaW5kV29yZChpLCBqKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+e2NlbGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtVGVydGlhcnkgZm9udC1ib2xkIGxlYWRpbmctbG9vc2VcIj5cclxuICAgICAgICAgIFVzZSB0aGUgc2tpbGxzIHRvIHNvbHZlIHRoZSBjcm9zc3dvcmQgcHV6emxlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0zIHRleHQtU2Vjb25kYXJ5IHRleHQteGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICB7Y3VycmVudFdvcmQuY2x1ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3Nzd29yZFB1enpsZTtcclxuXHJcbi8qXHJcbiAgXHJcblxyXG4qL1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyb3Nzd29yZFB1enpsZSIsImF0dGVtcHQiLCJzZXRBdHRlbXB0IiwibmV3QXR0ZW1wdCIsInNldE5ld0F0dGVtcHQiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwiY2x1ZSIsImFuc3dlciIsInJvdyIsImNvbCIsIm51bSIsInN0YXRlRGlyZWN0aW9uIiwic2V0U3RhdGVEaXJlY3Rpb24iLCJkYXRhIiwiYWNyb3NzIiwiZG93biIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImtleSIsIndvcmQiLCJPYmplY3QiLCJlbnRyaWVzIiwiaSIsIm5leHRDZWxsIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImF0dGVtcHRMZXR0ZXIiLCJsZXR0ZXIiLCJjZWxsIiwicHJldkF0dGVtcHQiLCJmaW5kV29yZCIsImRpcmVjdGlvbiIsImFjcm9zc0NoZWNrIiwiZG93bkNoZWNrIiwibGVuIiwiY2VsbFZhbHVlIiwiaiIsImZpbmQiLCJhIiwidG9VcHBlckNhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbnB1dCIsImlkIiwiZGF0YS1yb3ciLCJkYXRhLWNvbCIsIm1heExlbmd0aCIsInZhbHVlIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkZvY3VzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skills/Crossword/Crossword.tsx\n"));

/***/ })

});