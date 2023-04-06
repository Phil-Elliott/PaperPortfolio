import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import TvImage from "../../../assets/images/tv.png";
import TvStatic from "../../../assets/images/TvStatic.gif";
import PM from "../../../assets/images/PM-Vid.gif";
import News from "../../../assets/images/News-Vid.gif";
import Blog from "../../../assets/images/Blog-Vid.gif";

const Channels: { [key: number]: StaticImageData } = {
  1: TvStatic,
  2: Blog,
  3: PM,
  4: TvStatic,
  5: News,
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
        setChannelNumber(5);
      } else {
        setChannelNumber(channelNumber - 1);
      }
    } else if (direction === "up") {
      if (channelNumber === 5) {
        setChannelNumber(1);
      } else {
        setChannelNumber(channelNumber + 1);
      }
    }
  }

  return (
    <div className="relative flex flex-col justify-center items-center border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0">
      <div className="relative w-full h-[300px] sm2:h-[400px] lg3:h-full flex justify-center items-center mix-blend-multiply">
        <Image
          src={TvImage}
          alt="FrontPageImage"
          height={400}
          // width={500}
          loading="eager"
          priority
          className=" z-10 grayscale h-[250px] w-[320px] sm2:h-[400px] sm2:w-[575px]"
        />
        {tvOn ? (
          <div
            className={`absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-12 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded`}

            // className={`absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-14 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[497px] sm2:ml-32 mr-28 mb-11 rounded`}
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
              <div className="grayscale bg-Secondary">
                <Image
                  src={Channels[channelNumber]}
                  alt="Project video"
                  height={275}
                  width={372}
                  className={`z-0 w-full h-[170px] sm2:h-[275px] ${
                    Channels[channelNumber] !== TvStatic && "px-1 py-0"
                  }`}
                />
                <p className="absolute font-bold font-pixel text-Primary text-2xl sm2:text-3xl ml-[180px] sm2:ml-[330px] mt-[-165px] sm2:mt-[-260px] z-30">
                  {channelNumber}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-Secondary h-[195px] w-[220px]  sm2:h-[295px] sm2:w-[400px] mr-14 mb-10 sm2:mr-28 sm2:mb-14 absolute"></div>
        )}
        <button
          className={`animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-1 h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full ${
            tvOn ? "bg-Green" : "bg-Tertiary"
          }
              `}
          onClick={() => toggleTv()}
        />
        <button
          className={`animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[34px] sm2:mt-[54px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full ${
            tvOn ? "bg-Green" : "bg-Tertiary"
          }
              `}
          onClick={() => changeChannel("up")}
        />
        <button
          className={`animate-pulse z-20 absolute ml-[209px] sm2:ml-[372px] mt-[64px] sm2:mt-[104px] h-[5px] w-[5px] sm2:h-[10px] sm2:w-[10px] rounded-full ${
            tvOn ? "bg-Green" : "bg-Tertiary"
          }
              `}
          onClick={() => changeChannel("down")}
        />
      </div>
      <h3 className="leading-relaxed shadow-lg rounded p-2 border-y-2 border-Secondary text-sm xs:text-base text-Primary bg-Secondary font-bold">
        <button
          className={`mr-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Tertiary`}
        />
        Buttons / Top - Power / Middle - Channel Up / Bottom - Channel Down
        <button
          className={`ml-3 animate-pulse z-20 h-[10px] w-[10px] rounded-full bg-Green`}
        />
      </h3>
    </div>
  );
};

export default Tv;

/*

Could widen the width of the tv screen to render a better image for the site


            className={`absolute bg-Secondary flex items-center justify-center text-Primary w-[210px] ml-14 pt-5 sm2:pt-0 sm2:h-[286px] sm2:w-[377px] sm2:ml-0 mr-28 mb-11 rounded`}



*/
