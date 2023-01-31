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
        "Having gained valuable skills in communication and problem-solving as an English as a Second Language (ESL) teacher, I have honed my ability to think critically and adapt to different learning styles through my experience in developing and implementing lesson plans and providing individualized instruction. In addition, evaluating student progress has taught me the importance of setting goals and tracking progress towards them.",
    },
    {
      title: "Interests",
      description:
        "In my spare time, I enjoy exploring new places and immersing myself in different cultures through travel. I also find that getting out into nature and hiking helps me clear my mind and find inspiration. These activities help me stay energized and motivated in my pursuit of web development. I am also an avid reader, constantly seeking new knowledge and learning opportunities. Reading helps me relax and escape from the daily stresses of life, and also expands my understanding of the world around me.",
    },
    {
      title: "Education",
      description:
        "Receiving my bachelor's degree in Business Administration from Towson University in 2016, I gained a strong foundation in business principles and developed valuable skills in leadership, communication, and problem-solving. My focus during my studies was on project management. These skills have already helped me as a teacher and will surely benefit me in my future career as a web developer.",
    },
    {
      title: "Programming",
      description:
        "Ever since I discovered my passion for programming, I have been excited to embark on a new journey as a web developer. With a desire to create dynamic, user-friendly websites and applications, I have been diligently working to acquire the skills and knowledge necessary to excel in this field. I am eager to put my skills to the test in a professional setting and as I continue to grow and learn, I am confident that my passion for web development will translate into a fulfilling and successful career.",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg2:gap-0 my-6 relative lg2:flex justify-center lg2:w-[225%] h-full">
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
*/
