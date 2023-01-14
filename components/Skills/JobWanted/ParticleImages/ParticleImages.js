import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import react from "../../../../assets/svgs/react.svg";
import css3 from "../../../../assets/svgs/css3.svg";
import git from "../../../../assets/svgs/git.svg";
import html5 from "../../../../assets/svgs/html5.svg";
import javascript from "../../../../assets/svgs/javascript.svg";
import nextjs from "../../../../assets/svgs/nextjs.svg";
import redux from "../../../../assets/svgs/redux.svg";
import sass from "../../../../assets/svgs/sass.svg";

const ParticleImages = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="h-full absolute">
      <Particles
        className="h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          height: "100%",
          // background: {
          //   color: {
          //     value: "#adadad",
          //   },
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "images",
              images: [
                react,
                css3,
                git,
                html5,
                javascript,
                nextjs,
                redux,
                sass,
              ],
              // type: "icon",
              // fill: FaReact,
            },
            size: {
              value: { min: 10, max: 50 },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleImages;
