import React, { useState } from "react";
import Button from "../shared/Button/Button";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ResponsiveMenu
        menuOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
      <div className="flex justify-between items-center pb-6">
        <div className="hidden lg:flex items-center space-x-4 text-xl">
          <SlSocialLinkedin />
          <RiGithubLine />
          <AiOutlineMail />
        </div>
        <h1 className="font-bold text-fluid-5xl lg:text-4xl tracking-wide">
          PHILLIP ELLIOTT
        </h1>
        <div className="hidden lg:flex">
          <Button>Resume</Button>
        </div>
        <div className="lg:hidden space-y-2" onClick={() => setMenuOpen(true)}>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center py-2 border-y-2 border-Border text-md font-bold">
        <h2>Front Page</h2>
        <h2>Editorial</h2>
        <h2>Tech Beat</h2>
        <h2>Featured Projects</h2>
        <h2>Letters to the Editor</h2>
      </div>
      <div className="bg-Tertiary text-Primary pb-1 sm:pb-0 pt-2 lg:mt-6 rounded-sm px-3">
        <h3 className="lg:tracking-wide text-fluid-9xl font-bold text-center ">
          FRONT END DEVELOPER
        </h3>
      </div>
    </>
  );
};

export default Header;

/*

    


*/
