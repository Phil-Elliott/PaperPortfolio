import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { BsDot } from "react-icons/bs";

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="flex" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className=" overflow-hidden">
      <div className="relative border-b-2 lg2:border-Secondary lg2:pb-6 flex items-center gap-12 w-[360vw]">
        <ParallaxText baseVelocity={-3}>
          <h1 className="uppercase text-4xl font-bold hidden lg2:flex items-center tracking-widest ">
            Let's set up an interview
            <a
              className="text-Primary bg-Secondary rounded-sm ml-3 mr-5 p-1 hover:bg-Tertiary duration-500 px-2 "
              aria-label="Email"
              href="mailto:PhillipPElliott@gmail.com"
            >
              EMAIL ME
            </a>
          </h1>
        </ParallaxText>
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
}
