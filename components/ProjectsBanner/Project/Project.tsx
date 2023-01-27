import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  name: string;
  description: string;
  image: StaticImageData;
  newProject?: boolean;
};

const Project = ({ name, description, image, newProject }: ProjectProps) => {
  return (
    <div className="h-full">
      <div className="relative grayscale mix-blend-multiply rounded h-3/5">
        <Image
          src={image.src}
          alt={name}
          fill
          className="object-cover object-left-top"
        />
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="text-2xl font-black font-serif my-4">{name}</h1>
          {newProject && (
            <div className="text-md bg-Tertiary text-Primary font-bold text-center rounded ml-4 px-2">
              New
            </div>
          )}
        </div>
        <p className="text-xl font-serif leading-relaxed ">{description}</p>
      </div>
    </div>
  );
};

export default Project;

/*

    picture
    Name
    Description

    w-6


*/
