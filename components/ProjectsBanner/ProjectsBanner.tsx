import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectImage1 from "../../assets/images/FitMax.png";
import ProjectImage2 from "../../assets/images/news.png";

const ProjectsInfo = [
  {
    name: "FitMax",
    description:
      "This a fitness app that I have worked on. It is amazing and I am so proud of it.",
    image: ProjectImage1,
  },
  {
    name: "News App",
    description:
      "This is the News project that I have worked on. It is amazing and I am so proud of it.",
    image: ProjectImage2,
  },
];

const ProjectsBanner = () => {
  return (
    <div className="flex my-6 pb-6 border-b-2 border-Border items-center justify-between h-82 ">
      <ProjectDetails
        name={ProjectsInfo[0].name}
        description={ProjectsInfo[0].description}
        image={ProjectsInfo[0].image}
        newProject={true}
      />
      <div className="text-center font-black font-serif flex-none w-1/3 border-x-2 border-Border px-16 pt-6 mx-6 h-full">
        <h1 className="text-6xl mb-8">Recent Projects</h1>
        <h2 className="text-2xl leading-relaxed my-8">
          Here are some projects that I have worked on. Click on the project to
          see.
        </h2>
        <h3 className="text-2xl my-8 text-Tertiary">
          ← You can drag left and right →
        </h3>
      </div>
      <ProjectDetails
        name={ProjectsInfo[1].name}
        description={ProjectsInfo[1].description}
        image={ProjectsInfo[1].image}
      />
    </div>
  );
};

export default ProjectsBanner;

/*

  1) make a project component
  2) make a center all projects component
  3) Start with 3 items and then figure out how to drag it to the left and right (greensock)

overflow-x-scroll whitespace-nowrap
w-1/3


<div className="text-center font-black font-serif flex-none w-1/3 border-x-2 border-Border px-16 pt-6 mx-4 h-full">
        <h1 className="text-6xl mb-8">All Projects</h1>
        <h2 className="text-2xl leading-relaxed my-8">
          A selection of some of my favorite projects that I have worked on
        </h2>
        <h3 className="text-2xl my-8">← You can drag left and right →</h3>
      </div>

*/
