import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import TvImage from "../../../assets/images/tv.png";
import TvStatic from "../../../assets/images/TvStatic.gif";
import Code from "../../assets/images/code.jpg";
import Board from "../../../assets/images/Board.gif";
import Board2 from "../../../assets/images/Board2.gif";
import Board3 from "../../../assets/images/Board3.gif";
import Board4 from "../../../assets/images/Board6.gif";

const Channels: { [key: number]: StaticImageData } = {
  1: TvStatic,
  2: Board3,
  3: Board,
  4: Board2,
  5: TvStatic,
  6: Board4,
};

const Tv = () => {
  const [tvOn, setTvOn] = useState(false);
  const [tvChannel, setTvChannel] = useState(false);
  const [channelNumber, setChannelNumber] = useState<number>(1);
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
        setChannelNumber(6);
      } else {
        setChannelNumber(channelNumber - 1);
      }
    } else if (direction === "up") {
      if (channelNumber === 6) {
        setChannelNumber(1);
      } else {
        setChannelNumber(channelNumber + 1);
      }
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0">
      <div className="relative w-full h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply">
        <Image
          src={TvImage}
          alt="FrontPageImage"
          height={400}
          // width={500}
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
              >
                <Image
                  src={TvStatic}
                  alt="TvStatic"
                  height={275}
                  width={372}
                  className="h-full w-full"
                />
              </motion.div>
            ) : (
              <div className="grayscale">
                <Image
                  src={Channels[channelNumber]}
                  alt="TvStatic"
                  height={275}
                  width={372}
                  className={`z-0 w-full h-[285px] bg-Secondary ${
                    Channels[channelNumber] !== TvStatic && "px-1 py-0"
                  }`}
                />
                <p className="absolute font-bold font-pixel text-Primary text-3xl ml-[330px] mt-[-260px] z-30">
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
      <h3 className="text-lg xs:text-xl text-Tertiary font-black">
        <button
          className={`mr-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary`}
        />
        Push the buttons
        <button
          className={`ml-5 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green`}
        />
      </h3>

      {/* <div className="flex flex-col px-2 font-bold border-Secondary border-2 h-2/3 w-1/4 bg-Secondary text-Primary shadow-lg rounded">
        <p className="pt-4 pb-2 mx-auto font-bold text-xl">TV Guide</p>
        <p className="">1 - PM APP</p>
        <p>2 - News App</p>
        <p>3 - Blog</p>
        <p>4 - Coming Soon</p>
        <p>5 - Coming Soon</p>
        <p>6 - Coming Soon</p>
        <p>Use bttns</p>
      </div> */}
    </div>
  );
};

export default Tv;
