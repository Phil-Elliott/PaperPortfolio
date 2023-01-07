import React, { useState } from "react";
import Button from "../shared/Button/Button";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ResponsiveMenu
        menuOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
      <div className="flex justify-between items-center py-6">
        <div className="hidden lg:flex items-center">
          <SlSocialLinkedin className="text-3xl" />
          <RiGithubLine className="text-3xl ml-4" />
          <AiOutlineMail className="text-3xl ml-4" />
        </div>
        <h1 className="font-bold text-fluid-5xl  sm:text-5xl font-serif tracking-WIDE">
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
      <div className="hidden lg:flex justify-between items-center py-4 border-y-2 border-Border text-lg font-medium">
        <h2>Front Page</h2>
        <h2>Editorial</h2>
        <h2>Tech Beat</h2>
        <h2>Feature Stories</h2>
        <h2>Letters to the Editor</h2>
      </div>
      <div className="bg-Tertiary text-Primary py-4 lg:mt-6 mb-6 rounded-sm px-6">
        <h3 className="text-fluid-9xl font-black font-serif text-center tracking-wider">
          FRONT END DEVELOPER
        </h3>
      </div>
    </>
  );
};

export default Header;

/*

    


*/
