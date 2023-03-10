import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type ProjectProps = {
  name: string;
  description: string;
  image: StaticImageData;
  newProject?: boolean;
  link: string;
};

const Project = ({
  name,
  description,
  image,
  newProject,
  link,
}: ProjectProps) => {
  return (
    <Link href={link}>
      <div className="h-full">
        <div className="relative grayscale mix-blend-multiply rounded h-2/4">
          <Image
            src={image.src}
            alt={name}
            fill
            height={0}
            width={0}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            loading="eager"
            priority
            className="object-cover object-left-top border-2 border-Border rounded-sm shadow-sm"
          />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="text-xl xs:text-2xl font-black font-serif my-4">
              {name}
            </h1>
            {newProject && (
              <div className="bg-Tertiary font-bold text-center rounded ml-4 py-1 px-2">
                <p className="text-sm xs:text-base text-Primary">New</p>
              </div>
            )}
          </div>
          <p className="text-lg xs:text-xl font-serif leading-relaxed xs:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Project;

/*

    picture
    Name
    Description

    w-6


*/
