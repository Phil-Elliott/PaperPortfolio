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
  1) Make responsive 
  2) Finish basic layout
  3) Add gsap animations

  Skill section (dev wanted)
  Projects Section 
  Contact Section (Make similar to that resume you saw)


*/

// export default function Home() {
//   return (
//     <div className="bg-Primary text-Secondary">
//       <div className="container mx-auto py-4 px-12 min-h-screen min-w-screen overflow-hidden">
//         <Header />
//         {/* <ProjectsBanner /> */}
//         {/* <FrontPage /> */}
//         {/* <div className="pb-20">
//           <AboutMe />
//         </div> */}
//         {/* <ProjectsBanner /> */}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="bg-Primary text-Secondary p-2 overflow-hidden">
//       <div className="border-2 border-Secondary py-4 px-12 min-h-screen min-w-screen">
//         <Header />
//         {/* <ProjectsBanner /> */}
//         {/* <FrontPage /> */}
//         {/* <div className="pb-20">
//           <AboutMe />
//         </div> */}
//         {/* <ProjectsBanner /> */}
//       </div>
//     </div>
//   );
// }
