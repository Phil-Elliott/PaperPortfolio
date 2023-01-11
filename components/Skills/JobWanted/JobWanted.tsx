import React from "react";
import ParticleImages from "./ParticleImages/ParticleImages";

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
    <div className="text-xl leading-loose border-x-2 border-Secondary rounded px-6">
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
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <h3 className="text-xl font-medium">Skills Include:</h3>
            <ul className="list-disc list-inside mt-4 mb-6">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-3">
            <ParticleImages />
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
