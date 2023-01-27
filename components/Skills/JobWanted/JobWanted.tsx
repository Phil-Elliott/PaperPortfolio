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

const JobWanted = () => {
  return (
    <div className="text-2xl leading-loose border-r-2 border-Secondary rounded pr-6 col-span-3">
      <h1 className="article-header bg-Tertiary text-center  text-Primary font-serif py-2 tracking-widest px-4">
        JOB WANTED!
      </h1>
      <div>
        <h2 className="text-3xl font-bold text-center mt-6">
          WEB DEVELOPER POSITION
        </h2>
        <p className="my-6 article-text">
          I am seeking opportunities to use my skills and knowledge to build
          effective and engaging websites and applications. I am a proactive
          problem-solver and enjoy working in collaborative environments. I am
          confident that my technical skills, combined with my ability to work
          well with others, make me a valuable asset to any team.
        </p>

        <p className="text-xl text-Tertiary font-bold leading-loose">
          Use the below skills to solve the crossword puzzle. Click on a box to
          reveal the question.
        </p>

        <div className="text-xl">
          <h3 className=" font-semibold my-6">Skills Include:</h3>
          <ul className="list-disc list-inside grid grid-cols-3 gap-4">
            {skills.map((skill) => (
              <li className="" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobWanted;

/*

     Use react particles js for multiple images floating on screen




    dark mode where you have a flashlight


*/
