import React from "react";
import { MdLaunch } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = {
  title: string[];
  description: string;
  skills: string[];
  demo: string;
};

const Project = ({ title, description, skills, demo }: ProjectProps) => {
  return (
    <div className="">
      <div className="hidden lg3:flex flex-wrap">
        {title.map((word, index) => {
          return (
            <h1
              key={index}
              className="uppercase inline-flex text-fluid-7xl font-bold mb-4 px-2 pt-1 bg-Secondary text-Primary rounded-sm mr-2"
            >
              {word}
            </h1>
          );
        })}
      </div>
      <p className="article-text mt-6">{description}</p>
      <div className="md:grid grid-cols-3 mt-10 font-semibold">
        <ul className="flex flex-wrap gap-4 col-span-2 items-center">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className=" text-lg bg-Tertiary text-Primary p-1 rounded-sm"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="flex ml-auto items-start gap-4 text-lg pt-5 md:pt-0 ">
          <Link
            href={demo}
            className="flex items-center text-Primary bg-Secondary p-2 rounded-sm hover:bg-Tertiary"
          >
            <MdLaunch className="mr-2" />
            Demo
          </Link>
          <Link
            href={demo}
            className="flex items-center text-Primary bg-Secondary p-2 rounded-sm hover:bg-Tertiary"
          >
            <FaGithubSquare className="mr-2" />
            Code
          </Link>
        </div>
      </div>
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
