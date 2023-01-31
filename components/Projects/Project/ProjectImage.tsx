import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "../../shared/Button/Button";

type ProjectImageProps = {
  image: StaticImageData;
  index: number;
};

const ProjectImage = ({ image, index }: ProjectImageProps) => {
  const isEven = index % 2 === 0;
  const border = !isEven ? "border-r-2 pr-6" : "border-l-2 pl-6";

  return (
    <div className="relative">
      <Image
        alt="project image"
        src={image.src}
        fill
        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}
      />
    </div>
  );
};

export default ProjectImage;
