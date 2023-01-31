import React from "react";
import Project from "./Project/Project";
import ProjectImage1 from "../../assets/images/FitMax.png";
import ProjectImage2 from "../../assets/images/news.png";
import ProjectImage from "./Project/ProjectImage";

const projectData = [
  {
    title: ["Simple", "Plan"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat.",
    skills: [
      "React",
      "TypeScript",
      "SCSS",
      "Redux",
      "Strapi API",
      "PostgreSQL",
    ],
    demo: "https://www.google.com",
    image: ProjectImage1,
  },
  {
    title: ["Personal", "Blog"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat.",
    skills: ["Next.Js", "TypeScript", "SCSS", "Sanity API"],
    demo: "https://www.google.com",
    image: ProjectImage2,
  },
  {
    title: ["Ecommerce", "Store"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat.",
    skills: ["React", "TypeScript", "Sass"],
    demo: "https://www.google.com",
    image: ProjectImage1,
  },
  {
    title: ["Card", "Game"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae numquam sapiente ea hic esse quis odit distinctio assumenda, asperiores sed quos minima in, explicabo corporis beatae, excepturi error placeat.",
    skills: ["React", "TypeScript", "Sass"],
    demo: "https://www.google.com",
    image: ProjectImage2,
  },
];

const Projects = () => {
  return (
    <div className="border-t-2 border-Secondary py-6">
      {projectData.map((project, index) => {
        return index % 2 === 0 ? (
          <div className="grid grid-cols-2 gap-6 mb-6 border-b-2 border-Secondary pb-6">
            <Project
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              demo={project.demo}
            />
            <ProjectImage image={project.image} index={index} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 mb-6 border-b-2 border-Secondary pb-6">
            <ProjectImage image={project.image} index={index} />
            <Project
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              demo={project.demo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

/*

Same design as for each project but alternate

Left
    - title
    - description
    - skills used
    - Button for Demo
Right 
    - image

*/
