import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const padding = "lg2:pr-16";
  return (
    <div
      onMouseOver={() => handleHover(index)}
      onMouseLeave={() => handleHover(3)}
      className={`border-t-2 mb-6 pt-4 lg2:shadow-lg lg2:p-3 lg2:border-2 border-Secondary lg2:rounded-md left-0 z-${index} lg2:bg-Primary transition-all duration-500 ease-in-out w-full translate-x-0 ${translateX[index]}`}
    >
      <div
        className={`h-full lg2:p-6 border-Secondary lg2:outline-dotted rounded ${
          index !== 3 && padding
        }`}
      >
        <h1 className="article-header text-Tertiary text-3xl xs:text-fluid-5xl lg:text-5xl">
          {title}
        </h1>
        <p className="article-text lg2:text-2xl leading-[1.75] lg2:leading-[1.75]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Article;

// first-letter:text-fluid-5xl

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// type ArticleProps = {
//   title: string;
//   description: string;
//   index: number;
//   handleHover: (index: number) => void;
//   hovered: number;
// };

// const Article = ({
//   title,
//   description,
//   index,
//   handleHover,
//   hovered,
// }: ArticleProps) => {
//   const [x, setX] = useState<number[]>([0, -75, -150, -222]);

//   // const [translateX, setTranslateX] = useState<string[]>([
//   //   `lg2:translate-x-0`,
//   //   `lg2:translate-x-[-75%]`,
//   //   `lg2:translate-x-[-150%]`,
//   //   `lg2:translate-x-[-222%]`,
//   // ]);
//   // const [translateY, setTranslateY] = useState<string[]>([
//   //   `translate-y-0`,
//   //   `translate-y-[-50%]`,
//   //   `translate-y-[-120%]`,
//   //   `translate-y-[-175%]`,
//   // ]);

//   // // const x = "lg2:translate-x-";
//   // const Y = "translate-y-";

//   // useEffect(() => {
//   //   if (hovered === 0) {
//   //     setTranslateX([
//   //       `lg2:translate-x-0`,
//   //       `lg2:translate-x-[-8%]`,
//   //       `lg2:translate-x-[-85%]`,
//   //       `lg2:translate-x-[-160%]`,
//   //     ]);
//   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
//   //   } else if (hovered === 1) {
//   //     setTranslateX([
//   //       `lg2:translate-x-0`,
//   //       `lg2:translate-x-[-75%]`,
//   //       `lg2:translate-x-[-85%]`,
//   //       `lg2:translate-x-[-160%]`,
//   //     ]);
//   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
//   //   } else if (hovered === 2) {
//   //     setTranslateX([
//   //       `lg2:translate-x-0`,
//   //       `lg2:translate-x-[-75%]`,
//   //       `lg2:translate-x-[-150%]`,
//   //       `lg2:translate-x-[-160%]`,
//   //     ]);
//   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
//   //   } else if (hovered === 3) {
//   //     setTranslateX([
//   //       `lg2:translate-x-0`,
//   //       `lg2:translate-x-[-75%]`,
//   //       `lg2:translate-x-[-150%]`,
//   //       `lg2:translate-x-[-222%]`,
//   //     ]);
//   //     setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
//   //   }
//   // }, [hovered]);

//   console.log(hovered);

//   return (
//     <motion.div
//       onMouseOver={() => handleHover(index)}
//       onMouseLeave={() => handleHover(3)}
//       className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary`}
//       // transition={{ type: "spring" }}
//       animate={{ x: x[hovered] }}
//     >
//       <div
//         style={{
//           paddingRight: index !== 3 ? `9%` : "0%",
//         }}
//         className="h-full px-6 pb-4 border-Secondary outline-dotted rounded"
//       >
//         <h1 className="article-header text-Tertiary text-3xl sm:text-5xl pt-4">
//           {title}
//         </h1>
//         <p className="article-text  leading-relaxed lg2:leading-loose">
//           {description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Article;

// // first-letter:text-fluid-5xl

// /*
