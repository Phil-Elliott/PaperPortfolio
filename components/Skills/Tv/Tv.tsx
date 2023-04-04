import React, { useState } from "react";
import Image from "next/image";
import TvImage from "../../../assets/images/tv.png";

const Tv = () => {
  const [tvOn, setTvOn] = useState(false);

  function toggleTv() {
    setTvOn(!tvOn);
  }
  return (
    <div className="border-b-2 lg3:border-b-0 leading-loose lg3:border-r-2 border-Secondary lg3:pr-6 col-span-2 pb-6 lg3:pb-0">
      {/* <div className="hidden lg:inline relative border-0 border-Border col-span-2"> */}
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={TvImage}
          alt="FrontPageImage"
          height={400}
          // width={0}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          loading="eager"
          priority
          className="object-cover object-center  z-10 grayscale mix-blend-multiply"
        />
        {tvOn ? (
          <div className="absolute bg-Secondary text-Primary h-[285px] w-[400px] mr-28 mb-10">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-4xl pb-4">Hello!</h1>
              <p className="text-2xl">I'm a frontend developer</p>
            </div>
          </div>
        ) : (
          <div className="absolute bg-Secondary text-Primary h-[285px] w-[400px] mr-28 mb-10"></div>
        )}
        <button
          className={`z-20 absolute ml-[372px] mt-1 h-[10px] w-[10px] rounded-full ${
            tvOn ? "bg-Green" : "bg-Tertiary"
          }
              `}
          onClick={() => toggleTv()}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Tv;
