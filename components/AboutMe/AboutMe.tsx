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
        "Having taught both online and in-person to students of all ages and abilities, including as an ESL teacher in China, I prioritize creating a positive learning environment. My teaching approach involves developing engaging lesson plans, providing personalized instruction, and carefully tracking student progress.",
    },
    {
      title: "Interests",
      description:
        // "In my spare time, I enjoy exploring new places and immersing myself in different cultures through travel. I also find that getting out into nature and hiking helps me clear my mind and find inspiration. These activities help me stay energized and motivated in my pursuit of web development. I am also an avid reader, constantly seeking new knowledge and learning opportunities. Reading helps me relax and escape from the daily stresses of life, and also expands my understanding of the world around me.",
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
        // "Ever since I discovered my passion for programming, I have been excited to embark on a new journey as a web developer. With a desire to create dynamic, user-friendly websites and applications, I have been diligently working to acquire the skills and knowledge necessary to excel in this field. I am eager to put my skills to the test in a professional setting and as I continue to grow and learn, I am confident that my passion for web development will translate into a fulfilling and successful career.",
        // "Ever since I discovered my passion for programming, I have been excited to embark on a new journey as a web developer. The thrill of creating dynamic, user-friendly websites and applications is what drives me. I take pride in continuously learning and improving my skills to bring my vision to life. The satisfaction of seeing my work used and appreciated by others is what makes it all worth it.",
        // "Energized by the challenge of building dynamic and user-friendly websites and applications, I constantly strive to enhance my skills and bring my ideas to fruition. The joy of witnessing others utilize and appreciate my work is what fuels my passion.",
        "Eager to constantly enhance my skills, my primary experience has been in frontend development. Specifically, I have been honing my expertise in React and creating aesthetically pleasing applications. While my current focus is on frontend, I am also excited about exploring opportunities to broaden my knowledge to include backend development.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg2:gap-0 my-6 relative lg2:flex justify-center lg2:w-[225%] h-full">
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


  The majority of my experience has been with the frontend. I have been spending a lot of time recently getting better with React and styling applications. I do have interest in learning the backend. 

  */
