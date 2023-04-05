import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import FrontPageImage from "../../assets/images/tv.png";
import TvStatic from "../../assets/images/TvStatic.gif";
import Code from "../../assets/images/code.jpg";

const Channels: { [key: number]: StaticImageData } = {
  1: TvStatic,
  2: Code,
  3: TvStatic,
  4: Code,
  5: TvStatic,
  6: Code,
  7: TvStatic,
  8: Code,
  9: TvStatic,
};

const FrontPage = () => {
  const [tvOn, setTvOn] = useState(false);
  const [tvChannel, setTvChannel] = useState(false);
  const [channelNumber, setChannelNumber] = useState<number>(3);
  const [boxVariants, setBoxVariants] = useState<any>({
    initial: {
      scaleX: 0,
      scaleY: 0,
    },
    animate: {
      scaleX: [0, 4, 39, 39],
      scaleY: [0, 0.5, 0.5, 30],
    },
    transition: {
      duration: 2,
    },
  });

  // used to turn the tv on and off
  function toggleTv() {
    if (tvOn === false) {
      setTimeout(() => {
        setTvChannel(true);
      }, 1000);
    } else {
      setTvChannel(false);
    }
    setTvOn(!tvOn);
  }

  // used to change the channel
  function changeChannel(direction: string) {
    if (direction === "down") {
      if (channelNumber === 1) {
        setChannelNumber(9);
      } else {
        setChannelNumber(channelNumber - 1);
      }
    } else if (direction === "up") {
      if (channelNumber === 9) {
        setChannelNumber(1);
      } else {
        setChannelNumber(channelNumber + 1);
      }
    }
  }

  return (
    <div
      className="pt-6 border-t-2 border-Secondary gap-x-8 grid lg:grid-cols-4"
      id="front"
    >
      <div className="lg:border-r-2 border-Border lg:pr-8 col-span-2 ">
        <h1 className="article-header lg:text-5xl text-fluid-9xl leading-normal lg:leading-normal">
          Aspiring Frontend Developer Seeking First Dev Role
        </h1>
        <p className="article-text lg:text-justify">
          Hello! I'm a frontend developer with expertise in HTML, CSS,
          JavaScript, and React. I create visually appealing and user-friendly
          websites and continuously strive to improve my skills with the latest
          technologies. I'm eager to join a dev team as a frontend developer and
          contribute to exciting projects. Check out my portfolio for examples
          of my work, and feel free to contact me with any questions.
        </p>
      </div>
      <div className="hidden lg:inline relative border-0 border-Border col-span-2">
        <div className="relative w-full h-full flex justify-center items-center mix-blend-multiply">
          <Image
            src={FrontPageImage}
            alt="FrontPageImage"
            height={400}
            // width={0}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            loading="eager"
            priority
            className="object-cover object-center absolute z-10 grayscale"
          />
          {tvOn ? (
            <div
              className={`absolute ${
                tvChannel ? "bg-Primary" : "bg-Secondary"
              } flex items-center justify-center text-Primary h-[286px] w-[377px] mr-28 mb-11 rounded`}
            >
              {!tvChannel ? (
                <motion.div
                  transition={{ duration: 1 }}
                  initial="initial"
                  animate="animate"
                  variants={boxVariants}
                  className="bg-Primary h-[10px] w-[10px] rounded-[1px]"
                ></motion.div>
              ) : (
                <div className="grayscale">
                  <Image
                    src={Channels[channelNumber]}
                    alt="TvStatic"
                    height={275}
                    width={372}
                    className="z-0 w-full h-[285px]"
                  />
                  <p className="absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-10">
                    {channelNumber}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-Secondary h-[295px] w-[400px] mr-28 mb-14"></div>
          )}
          <button
            className={`animate-pulse z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full ${
              tvOn ? "bg-Green" : "bg-Tertiary"
            }
              `}
            onClick={() => toggleTv()}
          />
          <button
            className={`animate-pulse z-20 absolute ml-[372px] mt-[54px] h-[10px] w-[10px] rounded-full ${
              tvOn ? "bg-Green" : "bg-Tertiary"
            }
              `}
            onClick={() => changeChannel("up")}
          />
          <button
            className={`animate-pulse z-20 absolute ml-[372px] mt-[104px] h-[10px] w-[10px] rounded-full ${
              tvOn ? "bg-Green" : "bg-Tertiary"
            }
              `}
            onClick={() => changeChannel("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

/*

  1) Make move channel back button or add to change channel function
  2) Make the gifs for the projects  




  Have a channel guide and instruction or a remote for the tv or a short sentence below the tv



  Tetris Website faller or just an image broken into blocks (could be image of me or something)
  Do tetris with your photo (try to cartoonize it even more or midjourney cartoonize it)


   Cartoonize your image here (you in front of a computer)
     https://www.befunky.com/create/photo-to-cartoon/



     // <div
                //   className={`bg-Secondary flex flex-col w-full h-full py-6 px-8 transition-all duration-1000 ease-in-out`}
                // >
                //   <h1 className="text-xl pb-5">The Channel Guide</h1>
                //   <div className="">
                //     <div className="grid gap-5 grid-cols-3">
                //       <div
                //         className="bg-Primary h-[85px] rounded cursor-pointer z-20"
                //         onClick={() => console.log("hello")}
                //       ></div>
                //       <div className="bg-Primary h-[85px] rounded cursor-pointer z-20"></div>
                //       <div className="bg-Primary h-[85px] rounded cursor-pointer z-20"></div>
                //     </div>
                //     <div className="grid gap-5 grid-cols-2 pt-5">
                //       <div className="bg-Primary h-[85px] rounded cursor-pointer z-20"></div>
                //       <div className="bg-Primary h-[85px] rounded cursor-pointer z-20"></div>
                //     </div>
                //   </div>
                // </div>


                   <Image
              src={TvStatic}
              alt="TvStatic"
              height={275}
              width={372}
              className="mr-28 mb-12 z-0 rounded"
            /> 
*/

/*
I am eager to
          put my skills to work and contribute to a dev team as a frontend
          developer. 

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
  const x = "lg2:translate-x-";
  const y = "translate-y-";

  const [translate, setTranslate] = useState<string[]>([
    `${x}0`,
    `${x}[-75%]`,
    `${x}[-150%]`,
    `${x}[-222%]`,
  ]);
  const [translateY, setTranslateY] = useState<string[]>([
    `${y}0`,
    `${y}[-50%]`,
    `${y}[-120%]`,
    `${y}[-175%]`,
  ]);

  useEffect(() => {
    if (hovered === 0) {
      setTranslate([`${x}0`, `${x}[-8%]`, `${x}[-85%]`, `${x}[-160%]`]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 1) {
      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-85%]`, `${x}[-160%]`]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 2) {
      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-160%]`]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    } else if (hovered === 3) {
      setTranslate([`${x}0`, `${x}[-75%]`, `${x}[-150%]`, `${x}[-222%]`]);
      setTranslateY([`${y}0`, `${y}[-50%]`, `${y}[-120%]`, `${y}[-175%]`]);
    }
    console.log(hovered);
  }, [hovered]);

  return (
    <div
      onMouseOver={() => handleHover(index)}
      onMouseLeave={() => handleHover(3)}
      className={`shadow-lg p-3 border-2 border-Secondary rounded-md left-0 z-${index} bg-Primary transition-all duration-500 ease-in-out w-full ${translate[index]} ${translateY[index]} lg2:translate-y-0`}
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



{/* <p className="article-text lg:text-justify">
          Hello! I am a frontend developer with a strong foundation in HTML,
          CSS, JavaScript, and React. I am passionate about creating
          user-friendly and visually appealing websites, and I am always looking
          to improve my skills and stay up-to-date with the latest
          technologies.I am eager to put my skills to work and contribute to a
          dev team as a frontend developer. Please take a look at my portfolio
          to see some of my work, and don't hesitate to get in touch if you have
          any questions about my experience or abilities.
        </p> 


*/
