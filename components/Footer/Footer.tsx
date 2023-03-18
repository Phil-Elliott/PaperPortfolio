import React from "react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" overflow-hidden">
      <div className="relative border-b-2 lg2:border-Secondary lg2:pb-6 flex items-center gap-12 ">
        {/* <motion.h1
          className="text-4xl font-bold flex"
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          exit={{ x: "-150vw" }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          If you are looking for a developer
        </motion.h1> */}
        <motion.h1
          className="uppercase text-4xl font-bold hidden lg2:flex items-center tracking-widest "
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          Let's set up an interview
          <a
            className="text-Primary bg-Secondary rounded-sm ml-3 p-1 hover:bg-Tertiary px-2 "
            aria-label="Email"
            href="mailto:PhillipPElliott@gmail.com"
          >
            EMAIL ME
          </a>
        </motion.h1>
      </div>
      <div className="lg2:pt-6 gap-6 lg2:gap-0 flex flex-col lg2:flex-row justify-between text-md xs:text-lg sm:text-xl font-bold uppercase items-center">
        <h1 className="">Phillip Elliott</h1>
        <div className="flex gap-0 xs:gap-6 items-center">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/phil-p-elliott/"
            className="hover:text-Tertiary"
          >
            <h2>LinkedIN</h2>
          </a>
          <BsDot className="text-3xl" />
          <a
            className="hover:text-Tertiary"
            aria-label="Github"
            href="https://github.com/Phil-Elliott"
          >
            <h2>Github</h2>
          </a>
          <BsDot className="text-3xl lg2:hidden flex" />
          <a
            className="hover:text-Tertiary flex lg2:hidden"
            aria-label="Email"
            href="mailto:PhillipPElliott@gmail.com"
          >
            <h2>EMAIL</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*




*/
