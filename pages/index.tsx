import Header from "../components/Header/Header";
import FrontPage from "../components/FrontPage/FrontPage";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-Secondary">
      <motion.div
        initial={{ rotate: 0, scale: 0.75, y: 0 }}
        animate={{
          rotate: [0, 0, 360],
          scale: [0.75, 0.75, 1],
          y: [0, -300, 0],
        }}
        transition={{ duration: 3 }}
        className="bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden"
      >
        <Head>
          <title>Portfolio | Phillip Elliott</title>
          <meta
            name="description"
            content="Phillip Elliott Portfolio Website"
          />
        </Head>
        <div className="sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen overflow-hidden">
          <Header />
          <ProjectsBanner />
          <FrontPage />
          <div id="about">
            <AboutMe />
          </div>
          <Skills />
          <Projects />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

/*

First animation 
- Slide up 
- Spin and zoom in

Animate zoom in with project images

Have everything slide up on scroll





3) Add some animations

4) Make hamburger menu
5) Make responsive content look better
6) Write documentation


make hidden scroll bar

*/
