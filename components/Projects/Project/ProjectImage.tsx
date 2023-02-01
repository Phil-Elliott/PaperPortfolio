import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "../../shared/Button/Button";

type ProjectImageProps = {
  images: StaticImageData[];
  index: number;
};

const ProjectImage = ({ images, index }: ProjectImageProps) => {
  const isEven = index % 2 === 0;
  const border = !isEven ? "border-r-2 pr-6" : "border-l-2 pl-6";

  return (
    <div className={` border-Secondary  ${border}`}>
      <div className="relative grid grid-cols-2 gap-5 py-6 h-full">
        {images.map((image, index) => {
          return (
            <div className="relative">
              <Image
                key={index}
                alt="project image"
                src={image.src}
                fill
                className="object-cover object-left-top grayscale  rounded-sm shadow-sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectImage;

/*
- need to have magnifying glass on hover
- popup on click


{/* <Image
        alt="project image"
        src={image.src}
        fill
        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}
      /> 

*/
