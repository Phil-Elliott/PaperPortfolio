import Header from "../components/Header/Header";
import FrontPage from "../components/FrontPage/FrontPage";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <div className="bg-Primary text-Secondary sm:p-2 overflow-hidden font-serif">
      <div className="sm:border-2 border-Secondary p-4 lg:p-6 min-h-screen min-w-screen">
        <Header />
        <ProjectsBanner />
        <FrontPage />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

/*
  Make Responsive
  Use Framer Motion
  Add Projects section
  Use contact banner at the bottom


*/
