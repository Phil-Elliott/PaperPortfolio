import React from "react";
import Button from "../shared/Button/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center">
          <SlSocialLinkedin className="text-3xl" />
          <RiGithubLine className="text-3xl ml-4" />
          <AiOutlineMail className="text-3xl ml-4" />
        </div>
        <h1 className="font-bold text-5xl font-serif tracking-WIDE">
          PHILLIP ELLIOTT
        </h1>
        <Button>Resume</Button>
      </div>
      <div className="flex justify-between items-center py-4 border-y-2 border-Border text-lg font-medium">
        <h2>Front Page</h2>
        <h2>Editorial</h2>
        <h2>Tech Beat</h2>
        <h2>Feature Stories</h2>
        <h2>Letters to the Editor</h2>
      </div>
      <div className="bg-Tertiary text-Primary py-4 my-6 rounded-sm px-6">
        <h3 className="text-fluid-9xl font-black font-serif text-center tracking-wider">
          FRONT END DEVELOPER
        </h3>
      </div>
    </>
  );
};

export default Header;

/*

    Responsive

    Name
    Hamburger (full page menu)
    - Links
    - Resume
    - Socials
    - Wavy tear

    below 
    - Front End Developer Banner


*/
