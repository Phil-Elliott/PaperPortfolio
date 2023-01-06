import React from "react";

const FrontPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="border-r-2 border-Border pr-16">
        <h1 className="article-header">
          Aspiring Frontend Developer Seeking First Dev Role
        </h1>
        <p className="article-text text-justify">
          Hello! I am a frontend developer with a strong foundation in HTML,
          CSS, and JavaScript. I am passionate about creating user-friendly and
          visually appealing websites, and I am always looking to improve my
          skills and stay up-to-date with the latest technologies. I am eager to
          put my skills to work and contribute to a dev team as a frontend
          developer. Please take a look at my portfolio to see some of my work,
          and dont hesitate to get in touch if you have any questions about my
          experience or abilities.
        </p>
      </div>
      <div className="pl-16">
        <div className="pl-16 bg-Secondary h-full"></div>
      </div>
    </div>
  );
};

export default FrontPage;

/*
  Can make a headline component
  Can also make a component for the first letter of the text so that it can be styled differently on left

*/
