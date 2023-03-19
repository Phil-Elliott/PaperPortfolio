import React from "react";
import ProjectImage1 from "../../assets/images/PM-Dashboard.png";
import ProjectImage2 from "../../assets/images/News-Home.png";
import ProjectImage3 from "../../assets/images/BlogHome.png";
import ProjectImage4 from "../../assets/images/Portfolio.png";
import Project from "./Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ProjectsInfo = [
  {
    name: "Project Management APP",
    description:
      "This is a project management app that is inspired by Trello's interface and functionality.",
    image: ProjectImage1,
    link: "https://timely-lollipop-f90b7b.netlify.app/",
  },
  {
    name: "Personal Blog",
    description: "A blog built with Next.js and Sanity.io",
    image: ProjectImage3,
    link: "https://www.philelliottblog.com/",
  },
  {
    name: "News Website",
    description:
      "Draws inspiration from the BBC News website in terms of design and functionality.",
    image: ProjectImage2,
    link: "https://pedantic-bhabha-23f3dd.netlify.app/",
  },
  {
    name: "This Portfolio",
    description: "Built with Next.js, Tailwind, and Framer Motion.",
    image: ProjectImage4,
    link: "https://github.com/Phil-Elliott/PaperPortfolio",
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
      className="my-6 border-Border items-center justify-between h-72 sm:h-60 cursor-grab active:cursor-grabbing select-none"
    >
      <SwiperSlide>
        <Project
          name={ProjectsInfo[2].name}
          description={ProjectsInfo[2].description}
          image={ProjectsInfo[2].image}
          link={ProjectsInfo[2].link}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[0].name}
          description={ProjectsInfo[0].description}
          image={ProjectsInfo[0].image}
          newProject={true}
          link={ProjectsInfo[0].link}
        />
      </SwiperSlide>
      <SwiperSlide className="border-Border border-t-2 lg:border-t-0 py-4 flex flex-col items-center justify-between text-center font-bold font-serif lg:border-x-2 border-Border xs:px-8 h-full">
        <h1 className="text-fluid-9xl sm:text-4xl pt-3 lg:pt-0">
          Recent Projects
        </h1>
        <h2 className="leading-relaxed xs:leading-relaxed text-lg xs:text-xl">
          Here are some projects that I have worked on. Click on the project to
          see.
        </h2>
        <h3 className="text-lg xs:text-xl text-Tertiary">
          ← Drag left and right →
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[1].name}
          description={ProjectsInfo[1].description}
          image={ProjectsInfo[1].image}
          link={ProjectsInfo[1].link}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          name={ProjectsInfo[3].name}
          description={ProjectsInfo[3].description}
          image={ProjectsInfo[3].image}
          link={ProjectsInfo[3].link}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectsBanner;

/*

  
h-72 md:
*/
