import React from "react";
import ProjectImage1 from "../../assets/images/FitMax.png";
import ProjectImage2 from "../../assets/images/news.png";
import Project from "./Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ProjectsInfo = [
  {
    name: "FitMax",
    description:
      "This a fitness app that I have worked on. It is amazing and I am so proud of it.",
    image: ProjectImage1,
  },
  {
    name: "News App",
    description:
      "This is the News project that I have worked on. It is amazing and I am so proud of it.",
    image: ProjectImage2,
  },
];

const ProjectsBanner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      simulateTouch={true}
      initialSlide={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        300: {
          slidesPerView: 1,
          initialSlide: 2,
        },
        984: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      className="my-6 border-Border items-center justify-between h-72 cursor-grab active:cursor-grabbing"
    >
      <SwiperSlide>
        <Project
          name={ProjectsInfo[1].name}
          description={ProjectsInfo[1].description}
          image={ProjectsInfo[1].image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[0].name}
          description={ProjectsInfo[0].description}
          image={ProjectsInfo[0].image}
          newProject={true}
        />
      </SwiperSlide>
      <SwiperSlide className="py-4 flex flex-col items-center justify-between text-center font-bold font-serif lg:border-x-2 border-Border px-8 h-full">
        <h1 className="text-4xl ">Recent Projects</h1>
        <h2 className="text-xl leading-relaxed">
          Here are some projects that I have worked on. Click on the project to
          see.
        </h2>
        <h3 className="text-xl text-Tertiary">
          ← You can drag left and right →
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[1].name}
          description={ProjectsInfo[1].description}
          image={ProjectsInfo[1].image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[0].name}
          description={ProjectsInfo[0].description}
          image={ProjectsInfo[0].image}
          newProject={true}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectsBanner;

/*

  

*/
