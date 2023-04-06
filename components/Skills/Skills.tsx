import React from "react";
import Crossword from "./Crossword/Crossword";
import Instructions from "./Instructions/Instructions";
import JobWanted from "./JobWanted/JobWanted";
import Tv from "./Tv/Tv";

const Skills = () => {
  return (
    <div
      className="lg3:grid grid-cols-4 border-t-2 border-Secondary py-6"
      id="skills"
    >
      {/* <JobWanted /> */}
      <Tv />
      <div className="grid grid-cols-1 col-span-2">
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
