import React, { useEffect, useState } from "react";
import ParticleImages from "./ParticleImages/ParticleImages";

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
  "Next.js",
  "Redux",
  "SCSS",
  "Tailwind",
  "PostgreSQL",
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
        clue: "What's the language that makes a website come alive?",
        answer: "Javascript",
        row: 3,
        col: 0,
        num: 4,
      },
      {
        clue: "What do you call the building blocks of a website?",
        answer: "Html",
        row: 5,
        col: 0,
        num: 6,
      },
      {
        clue: "A CSS preprocessor that helps you dress up a website",
        answer: "Sass",
        row: 5,
        col: 5,
        num: 7,
      },

      {
        clue: "A JavaScript library that helps you keep a website's data in order.",
        answer: "Redux",
        row: 9,
        col: 1,
        num: 8,
      },
    ],
    down: [
      {
        clue: "What's the framework that makes building server-rendered React apps a breeze?",
        answer: "Next",
        row: 0,
        col: 9,
        num: 1,
      },
      {
        clue: "A JavaScript library that helps you build a website's personality.",
        answer: "React",
        row: 1,
        col: 1,
        num: 2,
      },
      {
        clue: "A utility-first CSS framework that helps you create a website's unique look.",
        answer: "Tailwind",
        row: 2,
        col: 3,
        num: 3,
      },
      {
        clue: "What's the language that gives a website a makeover?",
        answer: "Css",
        row: 3,
        col: 5,
        num: 5,
      },
    ],
  };

  // Creates the grid
  const rows = 10;
  const cols = 10;
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => "")
  );
  const { across, down } = data;
  //insert the answers across and down into the grid
  for (let [key, word] of Object.entries(across)) {
    for (let i = 0; i < word.answer.length; i++) {
      grid[word.row][word.col + i] = word.answer[i];
    }
  }
  for (let [key, word] of Object.entries(down)) {
    for (let i = 0; i < word.answer.length; i++) {
      grid[word.row + i][word.col] = word.answer[i];
    }
  }

  // Moves to the next cell
  function nextCell(row: number, col: number) {
    console.log("next", stateDirection);
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

  /*

  if letter is capitalized have the number there

  maybe just set all the jumbers accordinly

  */

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
      <h1 className="uppercase article-header bg-Secondary text-center text-Primary font-serif py-2 tracking-widest px-4 mb-6 rounded ">
        Code Crossword
      </h1>
      <div className=" md:grid grid-cols-2">
        <div>
          {grid.map((row, i) => {
            return (
              <div
                key={i}
                className="bg-Secondary grid grid-cols-10 grid-rolls-10 z-9"
              >
                {row.map((cell, j) =>
                  cell !== "" ? (
                    <input
                      key={j}
                      id={`cell-${i}-${j}`}
                      className="bg-Primary border-2 border-Secondary py-1 text-center uppercase font-black text-md z-10"
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
                      onFocus={
                        attempt.find((a) => a.row === i && a.col === j)
                          ?.attempt === cell.toUpperCase()
                          ? () => nextCell(i, j)
                          : () => findWord(i, j)
                      }
                    />
                  ) : (
                    <div key={j}>{cell}</div>
                  )
                )}
              </div>
            );
          })}
        </div>

        <div className="md:pl-6 pt-2 font-bold">
          <div className="text-xl pb-6 text-Tertiary">
            <h3 className="mt-6 md:mt-0 font-semibold mb-6 text-Secondary">
              Skills Include:
            </h3>
            <ul className="list-disc list-inside flex flex-wrap gap-7 ">
              {skills.map((skill) => (
                <li className="" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-Secondary text-xl font-serif leading-loose">
            {currentWord.clue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPuzzle;

/*
  

*/
