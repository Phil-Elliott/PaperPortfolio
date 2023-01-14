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
];

const JobWanted = () => {
  return (
    <div className="text-2xl leading-loose border-x-2 border-Secondary rounded px-6">
      <h1 className="bg-Tertiary text-center text-6xl text-Primary font-bold font-serif py-4 tracking-widest px-8">
        JOB WANTED!
      </h1>
      <div className="">
        <h2 className="text-4xl font-bold text-center tracking-widest mt-6">
          WEB DEVELOPER POSITION
        </h2>
        <p className="my-6">
          I am seeking opportunities to use my skills and knowledge to build
          effective and engaging websites and applications. I am a proactive
          problem-solver and enjoy working in collaborative environments. I am
          confident that my technical skills, combined with my ability to work
          well with others, make me a valuable asset to any team.
        </p>

        <div className="relative">
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mt-6 mb-4">
              Skills Include:
            </h3>
            <ul className="list-disc list-inside mt-4 grid grid-cols-3">
              {skills.map((skill) => (
                <li className="" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
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
