import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from "../../shared/Button/Button";
import styles from "../../../styles/wave.module.css";

type ResponsiveMenuProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

const ResponsiveMenu = ({ menuOpen, closeMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${
        menuOpen ? "" : "hidden"
      } w-screen h-screen bg-Secondary z-50 flex flex-col justify-between items-center text-Primary`}
    >
      <div className="flex items-center justify-between w-full pt-6 px-6">
        <h1 className="text-2xl xs:text-3xl font-bold tracking-wide">
          PHILLIP ELLIOTT
        </h1>
        <AiOutlineClose
          className="text-3xl xs:text-4xl text-Tertiary cursor-pointer"
          onClick={closeMenu}
        />
      </div>
      <div className="flex flex-col space-y-24 text-4xl xs:text-4xl py-10 font-medium text-center">
        <Link
          onClick={closeMenu}
          className="hover:text-Tertiary"
          href={"#about"}
        >
          <h2>About</h2>
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:text-Tertiary"
          href={"#skills"}
        >
          <h2>Skills</h2>
        </Link>
        <Link
          onClick={closeMenu}
          className="hover:text-Tertiary"
          href={"#projects"}
        >
          <h2>Projects</h2>
        </Link>
      </div>
      <div className="bg-Primary relative w-full flex items-center flex-col pt-6">
        <div className={styles["custom-shape-divider-bottom-1679038343"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles["shape-fill"]}
            ></path>
          </svg>
        </div>
        <Button>
          <a href="./Resume.pdf">
            <p className="text-2xl xs:text-2xl">Resume</p>
          </a>
        </Button>
        <div className="w-full flex items-center justify-center space-x-6 pt-6 pb-10 text-3xl xs:text-3xl text-Secondary">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/phil-p-elliott/"
            className="hover:text-Tertiary"
          >
            <SlSocialLinkedin />
          </a>
          <a
            className="hover:text-Tertiary"
            aria-label="Github"
            href="https://github.com/Phil-Elliott"
          >
            <RiGithubLine />
          </a>
          <a
            className="hover:text-Tertiary"
            aria-label="Email"
            href="mailto:PhillipPElliott@gmail.com"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

/*

- add to git
- make all links functional
- add bottom wave

*/
