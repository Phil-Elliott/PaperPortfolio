import React from "react";
import Crossword from "./Crossword/Crossword";
import JobWanted from "./JobWanted/JobWanted";

const Skills = () => {
  return (
    <div className="grid grid-cols-5 border-t-2 border-Secondary py-6">
      <JobWanted />
      <Crossword />
    </div>
  );
};

export default Skills;

/*

Skills
- Left
    - Job Wanted
- Right
    - Crossword Puzzle

*/
