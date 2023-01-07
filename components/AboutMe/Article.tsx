import React, { useEffect, useState } from "react";

type ArticleProps = {
  title: string;
  description: string;
  index: number;
  handleHover: (index: number) => void;
  hovered: number;
};

const Article = ({
  title,
  description,
  index,
  handleHover,
  hovered,
}: ArticleProps) => {
  const [translateX, setTranslateX] = useState<string[]>([
    `lg2:translate-x-0`,
    `lg2:translate-x-[-75%]`,
    `lg2:translate-x-[-150%]`,
    `lg2:translate-x-[-222%]`,
  ]);
  const [translateY, setTranslateY] = useState<string[]>([
    `translate-y-0`,
    `translate-y-[-50%]`,
    `translate-y-[-120%]`,
    `translate-y-[-175%]`,
  ]);

  // const x = "lg2:translate-x-";
  const y = "translate-y-";

  useEffect(() => {
    if (hovered === 0) {
      setTranslateX([
        `lg2:translate-x-0`,
        `lg2:translate-x-[-8%]`,
        `lg2:translate-x-[-85%]`,
        `lg2:translate-x-[-160%]`,
      ]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 1) {
      setTranslateX([
        `lg2:translate-x-0`,
        `lg2:translate-x-[-75%]`,
        `lg2:translate-x-[-85%]`,
        `lg2:translate-x-[-160%]`,
      ]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 2) {
      setTranslateX([
        `lg2:translate-x-0`,
        `lg2:translate-x-[-75%]`,
        `lg2:translate-x-[-150%]`,
        `lg2:translate-x-[-160%]`,
      ]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 3) {
      setTranslateX([
        `lg2:translate-x-0`,
        `lg2:translate-x-[-75%]`,
        `lg2:translate-x-[-150%]`,
        `lg2:translate-x-[-222%]`,
      ]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    }
  }, [hovered]);

  useEffect(() => {
    console.log(translateX);
  }, [translateX]);

  return (
    <div
      onMouseOver={() => handleHover(index)}
      onMouseLeave={() => handleHover(3)}
      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full translate-x-0 ${translateX[index]} ${translateY[index]} lg2:translate-y-0`}
    >
      <div
        style={{
          paddingRight: index !== 3 ? `9%` : "",
        }}
        className="h-full px-6 pb-4 border-Secondary outline-dotted rounded"
      >
        <h1 className="article-header text-Tertiary text-3xl sm:text-6xl">
          {title}
        </h1>
        <p className="article-text first-letter:text-fluid-5xl lg2:first-letter:text-6xl leading-relaxed lg2:leading-loose">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;
