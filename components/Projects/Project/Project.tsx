import React from "react";
import Button from "../../shared/Button/Button";

type ProjectProps = {
  title: string[];
  description: string;
  skills: string[];
  demo: string;
};

const Project = ({ title, description, skills, demo }: ProjectProps) => {
  return (
    <div className="">
      <div className="flex flex-wrap">
        {title.map((word, index) => {
          return (
            <h1
              key={index}
              className="inline-flex text-fluid-9xl font-bold mb-4 p-2 bg-Secondary text-Primary rounded-sm mr-2"
            >
              {word}
            </h1>
          );
        })}
      </div>
      <p className="article-text mt-6">{description}</p>
      <ul className="flex flex-wrap mt-5">
        {skills.map((skill, index) => {
          return (
            <li
              key={index}
              className="mr-4 text-lg bg-Tertiary text-Primary p-1 rounded-sm"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Project;

/*

Same design as for each project but alternate

Left
    - title (black background on each word top and bottom very little padding)
    - description (Article text)
    - skills used
    - Button for Demo
Right 
    - image

*/
