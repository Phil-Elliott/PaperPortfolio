import Header from "../components/Header/Header";
import FrontPage from "../components/FrontPage/FrontPage";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-Primary text-Secondary sm:p-2 font-sans overflow-hidden">
      <Head>
        <title>Portfolio | Phillip Elliott</title>
        <meta name="description" content="Phillip Elliott Portfolio Website" />
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
    </div>
  );
}

/*

Fix writing on everything 
Add pictures to everything
Fix up resume 
Add resume 
Add gsap or framer motion animations


*/
