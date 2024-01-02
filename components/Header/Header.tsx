import React, { useState } from "react";
import Button from "../shared/Button/Button";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";
import { StyledTooltip } from "../shared/ToolTips/Tooltip";

type HeaderProps = {
  toggleMenu: () => void;
};

const Header = ({ toggleMenu }: HeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center pb-6">
        <div className="hidden lg:flex items-center space-x-4 text-xl">
          <StyledTooltip title="LinkedIn">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/phil-p-elliott/"
              className="hover:text-Tertiary duration-200"
            >
              <SlSocialLinkedin />
            </a>
          </StyledTooltip>
          <StyledTooltip title="Github">
            <a
              className="hover:text-Tertiary duration-200"
              aria-label="Github"
              href="https://github.com/Phil-Elliott"
            >
              <RiGithubLine />
            </a>
          </StyledTooltip>
          <StyledTooltip title="Email">
            <a
              className="hover:text-Tertiary duration-200"
              aria-label="Email"
              href="mailto:PhillipPElliott@gmail.com"
            >
              <AiOutlineMail />
            </a>
          </StyledTooltip>
        </div>
        <h1 className="font-bold text-fluid-5xl lg:text-4xl tracking-wide">
          PHILLIP ELLIOTT
        </h1>
        <div className="hidden lg:flex">
          <a href="./Resume.pdf">
            <Button>Resume</Button>
          </a>
        </div>
        <div
          className="lg:hidden space-y-2 cursor-pointer"
          onClick={() => toggleMenu()}
        >
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center py-3 border-y-2 border-Border text-lg font-semibold">
        <Link href={"#front"}>
          <h2 className="hover:text-Tertiary duration-200">Front Page</h2>
        </Link>
        <Link className="hover:text-Tertiary duration-200" href={"#about"}>
          <h2>About Me</h2>
        </Link>
        <Link className="hover:text-Tertiary duration-200" href={"#skills"}>
          <h2>My Skills</h2>
        </Link>
        <Link className="hover:text-Tertiary duration-200" href={"#projects"}>
          <h2>Featured Projects</h2>
        </Link>
      </div>
      <div className="bg-Tertiary text-Primary pb-1 sm:pb-0 pt-2 lg:mt-6 rounded-sm px-3">
        <h3 className="lg:tracking-wide text-fluid-9xl font-bold text-center ">
          FRONT-END DEVELOPER
        </h3>
      </div>
    </>
  );
};

export default Header;

/*

    


*/
