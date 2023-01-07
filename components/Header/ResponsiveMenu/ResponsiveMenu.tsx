import { type } from "os";
import React from "react";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from "../../shared/Button/Button";

type ResponsiveMenuProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

const ResponsiveMenu = ({ menuOpen, closeMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${
        menuOpen ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full bg-Black z-50`}
    >
      <AiOutlineClose
        className="absolute text-5xl top-4 right-4 text-Tertiary cursor-pointer"
        onClick={closeMenu}
      />

      <div className="flex flex-col items-center pt-10 h-full text-Primary">
        <h1 className="text-6xl font-bold font-serif tracking-WIDE mb-20">
          PHILLIP ELLIOTT
        </h1>
        <div className="flex flex-col space-y-20 text-4xl font-medium text-center mb-20">
          <h2>Front Page</h2>
          <h2>Editorial</h2>
          <h2>Tech Beat</h2>
          <h2>Feature Stories</h2>
          <h2>Letters to the Editor</h2>
        </div>
        <Button>Resume</Button>
        <div className="flex items-center space-x-4 mt-8">
          <SlSocialLinkedin className="text-3xl" />
          <RiGithubLine className="text-3xl" />
          <AiOutlineMail className="text-3xl" />
        </div>
        {/* <Image src={SVG} alt="SVG" /> */}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
