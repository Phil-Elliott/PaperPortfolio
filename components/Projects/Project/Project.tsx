import React from "react";
import { MdLaunch } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = {
  title: string[];
  description: string;
  skills: string[];
  demo: string;
  code: string;
  index: number;
};

const Project = ({
  title,
  description,
  skills,
  demo,
  code,
  index,
}: ProjectProps) => {
  const isEven = index % 2 === 0;
  const border = !isEven ? "" : "lg3:border-r-2 lg3:pr-6";

  return (
    <div className={` border-Secondary  ${border}`}>
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
      {title[0] === "Simple" && (
        <p className="mt-6 text-xl leading-loose">
          <strong>Demo Account </strong>/ Email: user@gmail.com / Password:
          user1234
        </p>
      )}
      <div className="md:grid grid-cols-3 mt-5 lg3:mt-10 font-semibold">
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
            className="flex items-center text-Primary bg-Secondary p-2 rounded-sm hover:bg-Tertiary duration-500"
          >
            <MdLaunch className="mr-2" />
            Demo
          </Link>
          <Link
            href={code}
            className="flex items-center text-Primary bg-Secondary p-2 rounded-sm hover:bg-Tertiary duration-500"
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
