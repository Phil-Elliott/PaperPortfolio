import React, { useEffect, useState } from "react";

type AttemptObject = {
  row: number;
  col: number;
  attempt: string;
};

type DataObject = {
  clue: string;
  answer: string;
  row: number;
  col: number;
  num: number;
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next",
  "Redux",
  "SASS",
  "Tailwind",
  "Node",
  "Express",
  "MongoDB",
  "Mongoose",
];

const CrosswordPuzzle = () => {
  const [attempt, setAttempt] = useState<AttemptObject[]>([]);
  const [newAttempt, setNewAttempt] = useState<AttemptObject>();
  const [currentWord, setCurrentWord] = useState<DataObject>({
    clue: "Click on a box to start. Use the skills for answers.",
    answer: "string",
    row: 0,
    col: 0,
    num: 0,
  });
  const [stateDirection, setStateDirection] = useState<string>("");

  const data = {
    across: [
      {
        clue: "A web application framework for Node.js",
        answer: "express",
        row: 2,
        col: 0,
        num: 3,
      },
      {
        clue: "The scripting language that adds interactivity to web pages",
        answer: "javascript",
        row: 4,
        col: 2,
        num: 7,
      },
      {
        clue: "The standard markup language for web pages",
        answer: "html",
        row: 6,
        col: 2,
        num: 8,
      },
      {
        clue: "A predictable state container for JavaScript apps",
        answer: "redux",
        row: 9,
        col: 7,
        num: 10,
      },
      {
        clue: "A popular NoSQL database",
        answer: "mongodb",
        row: 10,
        col: 0,
        num: 11,
      },
      {
        clue: "A JavaScript runtime built on Chrome's V8 engine",
        answer: "node",
        row: 13,
        col: 1,
        num: 12,
      },
    ],
    down: [
      {
        clue: "A React framework for production-ready apps with server-side rendering",
        answer: "next",
        row: 0,
        col: 1,
        num: 1,
      },
      {
        clue: "The style sheet language used for describing the look of a web page",
        answer: "CSS",
        row: 0,
        col: 5,
        num: 2,
      },
      {
        clue: "A popular JavaScript library for building user interfaces",
        answer: "react",
        row: 2,
        col: 3,
        num: 4,
      },
      {
        clue: "A powerful CSS preprocessor",
        answer: "sass",
        row: 2,
        col: 6,
        num: 5,
      },
      {
        clue: "A utility-first CSS framework for modern web design",
        answer: "tailwind",
        row: 2,
        col: 9,
        num: 6,
      },
      {
        clue: "An ODM library for MongoDB and Node.js",
        answer: "mongoose",
        row: 6,
        col: 4,
        num: 9,
      },
    ],
  };

  const rows = 14;
  const cols = 12;
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => "")
  );
  const numbers = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
  const { across, down } = data;

  //insert the answers across and down into the grid
  for (let [key, word] of Object.entries(across)) {
    for (let i = 0; i < word.answer.length; i++) {
      grid[word.row][word.col + i] = word.answer[i];
      if (i === 0) {
        numbers[word.row][word.col] = word.num;
      }
    }
  }
  for (let [key, word] of Object.entries(down)) {
    for (let i = 0; i < word.answer.length; i++) {
      // Check if the indices are within the bounds of the grid array
      if (word.row + i < rows && word.col < cols) {
        grid[word.row + i][word.col] = word.answer[i];
        if (i === 0) {
          numbers[word.row][word.col] = word.num;
        }
      }
    }
  }

  // Moves to the next cell
  function nextCell(row: number, col: number) {
    let nextCell;
    // let direction = findWord(row, col);

    if (stateDirection === "across") {
      nextCell = document.getElementById(`cell-${row}-${col + 1}`);
    } else if (stateDirection === "down") {
      nextCell = document.getElementById(`cell-${row + 1}-${col}`);
    }
    if (nextCell) nextCell.focus();
  }

  // Decides if the input is correct
  function attemptLetter(
    letter: string,
    cell: string,
    row: number,
    col: number
  ) {
    if (letter === cell) {
      setAttempt((prevAttempt) => [
        ...prevAttempt,
        { row: row, col: col, attempt: letter },
      ]);
      nextCell(row, col);
    } else {
      setNewAttempt({ row: row, col: col, attempt: letter });
    }
  }

  // Finds the word that the cell is in
  function findWord(row: number, col: number) {
    let direction = "";

    if (stateDirection === "across") {
      acrossCheck(currentWord);
    } else if (direction === "down") {
      downCheck(currentWord);
    }

    if (direction === "") {
      for (let [key, word] of Object.entries(down)) {
        downCheck(word);
      }
      for (let [key, word] of Object.entries(across)) {
        acrossCheck(word);
      }
    }

    function acrossCheck(word: DataObject) {
      let len = word.answer.length;
      if (word.row === row && word.col <= col && word.col + len > col) {
        setCurrentWord(word);
        setStateDirection("across");
        direction = "across";
        return;
      }
    }

    function downCheck(word: DataObject) {
      let len = word.answer.length;
      if (word.col === col && word.row <= row && word.row + len > row) {
        setCurrentWord(word);
        setStateDirection("down");
        direction = "down";
        return;
      }
    }

    return direction;
  }

  const cellValue = (i: number, j: number, cell: string) => {
    if (
      attempt.find((a) => a.row === i && a.col === j)?.attempt ===
      cell.toUpperCase()
    ) {
      return cell;
    } else if (newAttempt?.row === i && newAttempt?.col === j) {
      return newAttempt?.attempt;
    } else {
      return "";
    }
  };

  return (
    <div className="h-full lg3:px-6">
      <h1 className="text-fluid-9xl sm:text-5xl article-header uppercase md:tracking-widest leading-snug mb-2 pb-4 pt-4 lg3:pt-0">
        Skills Crossword
      </h1>
      <div className=" md:grid grid-cols-2">
        <div className="">
          {grid.map((row, i) => {
            return (
              <div
                key={i}
                className="bg-Secondary grid z-9"
                style={{
                  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                  // gridTemplateRows: "repeat(15, minmax(0, 1fr))",
                }}
              >
                {row.map((cell, j) =>
                  cell !== "" ? (
                    <div
                      key={j}
                      className="bg-Primary border-2 border-Secondary text-center uppercase font-black text-sm z-5 relative"
                    >
                      {numbers[i][j] !== 0 && (
                        <span className="absolute text-Secondary opacity-75 text-sm p-0 font-black z-10 pointer-events-none">
                          {numbers[i][j]}
                        </span>
                      )}
                      <input
                        aria-label="cell"
                        id={`cell-${i}-${j}`}
                        type="text"
                        className="bg-Primary py-1 text-center uppercase font-black z-8 w-full h-full focus:outline-none"
                        data-row={i}
                        data-col={j}
                        maxLength={1}
                        value={cellValue(i, j, cell)}
                        readOnly={
                          attempt.find((a) => a.row === i && a.col === j)
                            ?.attempt === cell.toUpperCase()
                        }
                        onChange={(e) =>
                          attemptLetter(
                            e.target.value.toUpperCase(),
                            cell.toUpperCase(),
                            i,
                            j
                          )
                        }
                        onClick={() => findWord(i, j)}
                        onFocus={
                          attempt.find((a) => a.row === i && a.col === j)
                            ?.attempt === cell.toUpperCase()
                            ? () => nextCell(i, j)
                            : () => console.log()
                        }
                      />
                    </div>
                  ) : (
                    <div key={j}>{cell}</div>
                  )
                )}
              </div>
            );
          })}
        </div>

        <div className="md:pl-6 lg3:pl-0 pt-10 md:pt-0 font-bold lg3:border-l-0 border-Secondary lg3:ml-6">
          <div className="text-xl pb-0 text-Tertiary h-full flex flex-col justify-between">
            <p className="text-Secondary pb-6 text-2xl font-serif leading-relaxed">
              {currentWord.num === 0
                ? `${currentWord.clue}`
                : `${currentWord.num}. ${currentWord.clue}`}
            </p>
            <div>
              <p className="pt-6 md:mt-0 mb-6 text-Secondary lg3:border-t-2 border-Secondary">
                Skills Include:
              </p>
              <ul className="list-disc list-inside flex flex-wrap gap-5 text-xl ">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPuzzle;

/*
  leading-relaxed uppercase text-fluid-9xl xs:text-5xl article-header bg-Secondary text-center text-Primary font-serif py-4 tracking-widest px-4 mb-6 rounded-sm 

https://crosswordlabs.com/


  
*/
