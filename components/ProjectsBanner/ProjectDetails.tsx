import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

type ProjectDetailsProps = {
  name: string;
  description: string;
  image: StaticImageData;
  newProject?: boolean;
};

const ProjectDetails = ({
  name,
  description,
  image,
  newProject,
}: ProjectDetailsProps) => {
  return (
    <div className="grid grid-rows-2 h-full w-1/3">
      <div className="relative grayscale mix-blend-multiply border-2 border-Border rounded shadow-md">
        <Image src={image.src} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="text-4xl font-black font-serif my-4">{name}</h1>
          {newProject && (
            <div className="text-lg bg-Tertiary text-Primary font-bold text-center rounded ml-4 px-2 py-1">
              New
            </div>
          )}
        </div>
        <p className="text-2xl font-serif leading-relaxed ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;

/*

    picture
    Name
    Description

    w-6


*/
