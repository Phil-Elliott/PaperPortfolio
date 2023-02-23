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
        <link rel="icon" href="/favicon.ico" />
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
4) Fix cards (figure out text and add more spacing)
5) Fix crossword puzzle (add numbers) 
8) Make responsive 
10) Fix image in main section (maybe start from top or just edit the image)

6) Start adding project information
11) Add projects to banner on top
3) Add resume to button link
  9) Host it

  get good lighthouse score

  could make hamburger nav work or just get rid of it
*/
