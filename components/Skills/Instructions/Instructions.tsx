import React from "react";

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

const Instructions = () => {
  return (
    <div className="leading-loose pl-6">
      <h1 className="uppercase article-header bg-Secondary text-center text-Primary font-serif py-2 tracking-wide px-4 mb-4 rounded ">
        Skills Crossword Puzzle
      </h1>
      {/* <p className="text-xl leading-loose indent-10 pt-2">
        I have experience creating dynamic and engaging user interfaces using
        technologies such as HTML, CSS, JavaScript, and React. I am constantly
        seeking to improve my skills and expand my knowledge, and I am always
        eager to learn new technologies and approaches.
      </p> */}
      {/* <p className="text-xl text-Tertiary font-bold leading-loose">
        Use the below skills to solve the crossword puzzle. Click on a box to
        reveal the question.
      </p> */}

      {/* <div className="text-xl pb-6">
        <h3 className=" font-semibold my-6">Skills Include:</h3>
        <ul className="list-disc list-inside flex flex-wrap gap-8">
          {skills.map((skill) => (
            <li className="" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Instructions;
