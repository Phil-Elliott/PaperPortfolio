import React from "react";
import Crossword from "./Crossword/Crossword";
import Instructions from "./Instructions/Instructions";
import JobWanted from "./JobWanted/JobWanted";

const Skills = () => {
  return (
    <div
      className="lg3:grid grid-cols-5 border-t-2 border-Secondary py-6"
      id="skills"
    >
      <JobWanted />
      <div className="grid grid-cols-1 col-span-3">
        {/* <Instructions /> */}
        <Crossword />
      </div>
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
