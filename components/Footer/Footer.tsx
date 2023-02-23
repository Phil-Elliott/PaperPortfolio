import React from "react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" overflow-hidden">
      <div className="relative border-b-2 border-Secondary pb-6 flex items-center gap-12 ">
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
          className="uppercase text-4xl font-bold flex items-center tracking-widest"
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
            className="text-Primary bg-Secondary rounded-sm ml-3 p-1 hover:bg-Tertiary"
            aria-label="Email"
            href="mailto:PhillipPElliott@gmail.com"
          >
            EMAIL ME
          </a>
        </motion.h1>
      </div>
      <div className="pt-6 flex justify-between text-xl font-bold uppercase items-center">
        <h1 className="">Phillip Elliott</h1>
        <div className="flex gap-6 items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*




*/
