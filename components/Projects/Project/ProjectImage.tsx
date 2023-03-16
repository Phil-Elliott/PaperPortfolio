import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "../../shared/Button/Button";
import Link from "next/link";

type ProjectImageProps = {
  title: string[];
  images: StaticImageData[];
  index: number;
  demo: string;
};

const ProjectImage = ({ title, images, index, demo }: ProjectImageProps) => {
  const [selectedId, setSelectedId] = useState(null);

  const isEven = index % 2 === 0;
  const border = !isEven ? "lg3:border-r-2 lg3:pr-6" : "";

  return (
    <div className={` border-Secondary  ${border}`}>
      {/* <div className="relative grid grid-cols-2 gap-5 h-full">
        {images.map((image, index) => {
          return (
            <div className="relative">
              <Image
                key={index}
                alt="project image"
                src={image.src}
                fill
                className="object-cover object-left-top grayscale  border-2 border-Border rounded-sm shadow-sm"
              />
            </div>
          );
        })} */}
      <div className="flex flex-wrap lg3:hidden">
        {title.map((word, index) => {
          return (
            <h1
              key={index}
              className="uppercase inline-flex text-4xl xs:text-6xl sm:text-fluid-7xl font-bold mb-4 px-2 pt-1 bg-Secondary text-Primary rounded-sm mr-2"
            >
              {word}
            </h1>
          );
        })}
      </div>
      <Link href={demo}>
        <div className="relative h-60 lg3:h-full mt-2 lg3:mt-0">
          <Image
            alt="project image"
            src={images[0].src}
            fill
            className="object-cover object-left-top grayscale  border-2 border-Border rounded-sm shadow-sm"
          />
        </div>
      </Link>
    </div>
    // </div>
  );
};

export default ProjectImage;

/*

const [selectedId, setSelectedId] = useState(null)
 
{items.map(item => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>




- need to have magnifying glass on hover
- popup on click


{/* <Image
        alt="project image"
        src={image.src}
        fill
        className={`object-cover object-left-top grayscale mix-blend-multiply border-Secondary ${border}`}
      /> 

*/
