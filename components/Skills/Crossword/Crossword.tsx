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
        answer: "HTML",
        row: 5,
        col: 0,
        num: 6,
      },
      {
        clue: "A CSS preprocessor that helps you dress up a website",
        answer: "SASS",
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
        answer: "CSS",
        row: 3,
        col: 5,
        num: 5,
      },
    ],
  };

  /*
    1) Need to make sure question is showing when clicked and not after starting to type
            - use the focus instead of change


    Put the number inside of the 1st cell of a word

  */

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

  // Creates the cells that are displayed
  const cells = grid.map((row, i) =>
    row.map((cell, j) =>
      cell !== "" ? (
        <input
          key={j}
          id={`cell-${i}-${j}`}
          className="bg-Primary border-2 border-Secondary text-center uppercase font-medium text-xl p-2 z-10"
          data-row={i}
          data-col={j}
          maxLength={1}
          value={
            attempt.find((a) => a.row === i && a.col === j)?.attempt ===
            cell.toUpperCase()
              ? cell
              : newAttempt?.row === i && newAttempt?.col === j
              ? newAttempt?.attempt
              : ""
          }
          defaultValue=""
          readOnly={
            attempt.find((a) => a.row === i && a.col === j)?.attempt ===
            cell.toUpperCase()
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
            attempt.find((a) => a.row === i && a.col === j)?.attempt ===
            cell.toUpperCase()
              ? () => nextCell(i, j)
              : () => findWord(i, j)
          }
        />
      ) : (
        <div className="">{cell}</div>
      )
    )
  );

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
      Get numbers in the box
      Display the question on the bottom 
      Jump over cells that are done 

  */

  // useEffect(() => {
  //   console.log(currentWord);
  // }, [currentWord]);

  return (
    <div className="h-full px-6">
      <h1 className="text-center text-6xl text-Secondary font-bold font-serif pb-4 tracking-widest px-8">
        Daily Crossword
      </h1>
      <div className="relative">
        <ParticleImages />

        <div className="bg-Secondary grid grid-cols-10 grid-rolls-10 z-10">
          {cells}
        </div>
      </div>
      <div className="py-4">
        <p className="text-Secondary text-2xl font-bold font-serif">
          {currentWord.clue}
        </p>
      </div>
    </div>
  );
};

export default CrosswordPuzzle;

/*

Put particles in black background and have them bouncing around but make sure the white is above it somehow




Create an algorithm that will position the words
Gives each item a row and a column

Create a grid 
  - 10 x 10
  - bCan have your object created by the algorithm inserted into those blocks on the grid
  - 





Have a front and a back 
How to make it flip?
  Have a button that flips it

- Front
    - Crossword Puzzle
- Back
    - Questions
      - Answers to questions
      - Maybe black out and have it reveal the answer when you click on it


- Functionality 
      - can write in the blocks 
      - when answer is correct the letters stay in the block
      - when answer is incorrect the letters disapear

      -

*/
