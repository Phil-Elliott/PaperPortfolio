import React, { useState } from "react";
import Article from "./Article";

const AboutMe = () => {
  const [hovered, setHovered] = useState(3);

  const handleHover = (index: number) => {
    setHovered(index);
  };

  const Articles = [
    {
      title: "Teacher",
      description:
        "Having experience as an ESL teacher, teaching both online and in-person to students of all ages and abilities, I can harness several transferable skills, including my high level of patience, keen attention to detail, and remarkable adaptability.",
    },
    {
      title: "Interests",
      description:
        "In my free time, I love traveling to new places and immersing myself in different cultures. Nature hikes are my go-to for clearing my mind and finding inspiration. I'm an avid reader who's always seeking new knowledge and learning opportunities.",
    },
    {
      title: "Education",
      description:
        "Regarding my education, with a degree in Business Administration, I possess a strong foundation in finance, marketing, and management principles. This education equips me with the versatility and adaptability needed to thrive in a range of challenges and opportunities.",
    },
    {
      title: "Programming",
      description:
        "Engaging with programming for the past two years has been an immensely enjoyable experience for me. It has quickly become one of my favorite hobbies and I am always enthusiastic about exploring new ways to expand my knowledge and skills in this exciting field.",
    },
  ];

  return (
    <div className="lg2:gap-0 mt-6 relative lg2:flex justify-center lg2:w-[225%] h-full">
      {Articles.map((article, index) => (
        <Article
          key={article.title}
          title={article.title}
          description={article.description}
          index={index}
          handleHover={handleHover}
          hovered={hovered}
        />
      ))}
    </div>
  );
};

export default AboutMe;

/*

grid lg:grid-cols-2 grid-cols-1 gap-5

Left to Right
1) Business
2) Education
3) International

Header (name above)
Short article

const Articles = [
    {
      title: "Teacher",
      description:
        "I have experience teaching both online and in-person, and have taught students of all ages and abilities. My most recent teaching experience was as an English as a Second Language (ESL) teacher in China, where I developed and implemented lesson plans, provided individualized instruction, and evaluated student progress. Prior to that, I also taught online English courses to students in other countries. I am committed to helping students learn and grow, and strive to create a positive and engaging learning environment.",
      translate: "",
    },
    {
      title: "Interests",
      description:
        "In my spare time, I enjoy reading, traveling, and hiking. Reading helps me relax and escape from the daily stresses of life, and also expands my knowledge and understanding of the world around me. I have visited several countries in Europe and Asia, and am always looking for new opportunities to explore new places and learn about local history and traditions. I also enjoy spending time in nature and find that hiking helps me stay fit, clear my mind, and appreciate the beauty of the natural world.",
      translate: "",
    },
    {
      title: "Education",
      description:
        "I have a degree in Business Administration, which has given me a strong foundation in business principles and practices. During my studies, I took courses in finance, marketing, and management, and gained practical experience through internships and case studies. I am proficient in Microsoft Office and have strong analytical and problem-solving skills, which have helped me excel in various business-related roles. I am always seeking new opportunities to learn and grow in my career, and believe that my business education has prepared me for a wide range of challenges and opportunities.",
      translate: "",
    },
    {
      title: "Web Development",
      description:
        "I have a degree in Business Administration, which has given me a strong foundation in business principles and practices. During my studies, I took courses in finance, marketing, and management, and gained practical experience through internships and case studies. I am proficient in Microsoft Office and have strong analytical and problem-solving skills, which have helped me excel in various business-related roles. I am always seeking new opportunities to learn and grow in my career, and believe that my business education has prepared me for a wide range of challenges and opportunities.",
      translate: "",
    },
  ];



  I have a background in business and teaching. I received my bachelors in business in 2016. I then spent the majority of the past six years, teaching children overseas, in schools or online. These past experiences have provided me with many transferable skills that will pair well with a career in this field.

  In 2016, I graduated with a bachelor's degree in Business Administration with a concentration in project management. 


  The majority of my experience has been with the frontend. I have been spending a lot of time recently getting better with React and styling applications. I do have interest in learning the backend. 

  */
