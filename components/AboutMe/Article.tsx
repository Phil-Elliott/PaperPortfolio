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
  const [translate, setTranslate] = useState<string[]>([
    "transform translate-x-0",
    "transform translate-x-0",
    "transform translate-x-0",
    "transform translate-x-0",
  ]);

  useEffect(() => {
    if (hovered === 0) {
      setTranslate([
        "transform translate-x-0",
        "transform translate-x-2/3",
        "transform translate-x-2/3",
        "transform translate-x-2/3",
      ]);
    } else if (hovered === 1) {
      setTranslate([
        "transform translate-x-0",
        "transform translate-x-0",
        "transform translate-x-2/3",
        "transform translate-x-2/3",
      ]);
    } else if (hovered === 2) {
      setTranslate([
        "transform translate-x-0",
        "transform translate-x-0",
        "transform translate-x-0",
        "transform translate-x-2/3",
      ]);
    } else if (hovered === 3) {
      setTranslate([
        "transform translate-x-0",
        "transform translate-x-0",
        "transform translate-x-0",
        "transform translate-x-0",
      ]);
    }
  }, [hovered]);

  return (
    <div
      onMouseOver={() => handleHover(index)}
      onMouseLeave={() => handleHover(3)}
      style={{
        height: "30rem",
        marginLeft: index !== 0 ? `${15.5 * index}rem` : "",
      }}
      className={`shadow-lg p-3 border-2 border-Secondary rounded-md absolute left-0 z-${index} flex-grow-1 bg-Primary w-7/12 transition-all duration-500 ease-in-out ${translate[index]}`}
    >
      <div
        style={{
          paddingRight: index !== 3 ? `5.5rem` : "",
        }}
        className="h-full px-6 pb-4  border-Secondary outline-dotted rounded"
      >
        <h1 className="article-header text-Tertiary">{title}</h1>
        <p className="article-text ">{description}</p>
      </div>
    </div>
  );
};

export default Article;

/*

  hover 
  
  index === 0
    move 1 and 2 to the right
  index === 1
    move 1 to the right
  index === 2
    nothing



*/

// const [translate, setTranslate] = useState([
//   "transform translate-x-0",
//   "transform translate-x-1/4",
//   "transform translate-x-2/4",
// ]);

// useEffect(() => {
//   if (hovered === index) {
//     setTranslate([
//       "transform translate-x-0",
//       "transform translate-x-1/4",
//       "transform translate-x-2/4",
//     ]);
//   } else if (hovered === 0) {
//     setTranslate([
//       "transform translate-x-0",
//       "transform translate-x-1/4",
//       "transform translate-x-2/4",
//     ]);
//   } else if (hovered === 1) {
//     setTranslate([
//       "transform translate-x-1/4",
//       "transform translate-x-0",
//       "transform translate-x-1/4",
//     ]);
//   } else if (hovered === 2) {
//     setTranslate([
//       "transform translate-x-0/4",
//       "transform translate-x-1/4",
//       "transform translate-x-0",
//     ]);
//   }
// }, [hovered]);

// useEffect(() => {
//   if (hovered === index) {
//     setTranslate("transform translate-x-0");
//   } else if (hovered === 0) {
//     setTranslate("transform translate-x-0");
//   } else if (hovered === 1) {
//     setTranslate("transform translate-x-1/4");
//   } else if (hovered === 2) {
//     setTranslate("transform translate-x-2/4");
//   }
// }, [hovered]);
