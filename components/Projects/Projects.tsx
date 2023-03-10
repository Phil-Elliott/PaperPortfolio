import React from "react";
import Project from "./Project/Project";
import ProjectImage1 from "../../assets/images/PM-Dashboard.png";
import ProjectImage2 from "../../assets/images/News-Home.png";
import ProjectImage3 from "../../assets/images/BlogHome.png";
import ProjectImage from "./Project/ProjectImage";

const projectData = [
  {
    title: ["Simple", "Plan"],
    description:
      "This is a React-based application designed for task tracking within a project. It enables users to create projects and tasks, as well as move tasks across various sections using drag-and-drop functionality. Each task includes key details such as its due date, description, a comments section, and the assigned members for streamlined collaboration.",
    skills: ["React", "TypeScript", "SCSS", "Redux", "Strapi API"],
    demo: "https://timely-lollipop-f90b7b.netlify.app/",
    code: "https://github.com/Phil-Elliott/Project_Management-App",
    images: [ProjectImage1, ProjectImage1, ProjectImage1, ProjectImage1],
  },
  {
    title: ["Personal", "Blog"],
    description:
      "A blog built with Next.js and Sanity.io. I enjoyed building this a lot, but I have not written too many articles. With a clean and minimalist design, my blog aims to deliver content in an easy-to-read format that is accessible to all. Thanks to the power of Next.js, users can navigate through the site with ease and enjoy a fast, seamless experience. On the backend, I use Sanity.io to manage and organize my content.",
    skills: ["Next.js", "SCSS", "Sanity API"],
    demo: "https://www.philelliottblog.com/",
    code: "https://github.com/Phil-Elliott/Phillip_Elliott_Blog",
    images: [ProjectImage3, ProjectImage3, ProjectImage3, ProjectImage3],
  },
  {
    title: ["News", "Website"],
    description:
      "This news application is built using React, TypeScript, and SCSS, and it connects to the Guardian API to provide users with a diverse range of news tags to choose from. The user-friendly interface includes a search bar that enables users to quickly find specific news articles of interest.",
    skills: ["React", "TypeScript", "SCSS"],
    demo: "https://pedantic-bhabha-23f3dd.netlify.app/",
    code: "https://github.com/Phil-Elliott/News-Website",
    images: [ProjectImage2, ProjectImage2, ProjectImage2, ProjectImage2],
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="border-y-2 border-Secondary sm:text-5xl text-fluid-9xl leading-snug text-center py-4 font-bold tracking-wide">
        Featured Projects
      </h1>
      <div className="pt-6">
        {projectData.map((project, index) => {
          return index % 2 === 0 ? (
            <div
              key={index}
              className="flex flex-col-reverse lg3:grid grid-cols-2 gap-6 mb-6 border-b-2 border-Secondary pb-6"
            >
              <Project
                title={project.title}
                description={project.description}
                skills={project.skills}
                demo={project.demo}
                code={project.code}
              />
              <ProjectImage
                title={project.title}
                images={project.images}
                index={index}
              />
            </div>
          ) : (
            <div
              key={index}
              className="lg3:grid grid-cols-2 gap-6 mb-6 border-b-2 border-Secondary pb-6"
            >
              <ProjectImage
                title={project.title}
                images={project.images}
                index={index}
              />
              <Project
                key={index}
                title={project.title}
                description={project.description}
                skills={project.skills}
                demo={project.demo}
                code={project.code}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

/*

1) Make left side responsive
  - Have Right bttns go under tags


2) Have the images go below the project (maybe just one image)
3) Add magnifying glass to the images

*/
