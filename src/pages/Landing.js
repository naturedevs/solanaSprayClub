import { Button } from "@material-tailwind/react";
import { useState } from "react";

import Hero from "./sections/Hero";
import HeroText from "./sections/HeroText";
import RoadMap from "./sections/RoadMap";
import OurTeam from "./sections/OurTeam";
import Credit from "./sections/Credit";
import { motion } from "framer-motion";

const hiddenStatu = "opacity-0 translate-x-full transition";
const visibleStatu = "opacity-100 translate-x-0";
const hiddenMask = "kkk";
const visibleMask = "kkk";
function MotionDiv({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        whileInView={{opacity:1}}
        transition={{ duration: 2, delay: 0.3 }}
        viewport={{ once: false }}
        onViewportEnter={() => {setIsInView(true); setIsLoaded(true)}}
        onViewportLeave={() => {setIsInView(false); setIsLoaded(false)}}
        className={`transition-all duration-700 ease-out  ${isInView?visibleStatu:hiddenStatu}`}
      >
        <div onLoad={() => setIsLoaded(true)} >{children}</div>
        
      </motion.div>
    </section>
  );
}
export default function Landing() {
    return (
        <div className="w-full overflow-x-hidden items-center ">
            <MotionDiv><Hero/></MotionDiv>
            <MotionDiv><HeroText/></MotionDiv>
            <MotionDiv><RoadMap/></MotionDiv>
            <MotionDiv><OurTeam/></MotionDiv>
            <MotionDiv><Credit/></MotionDiv>          
        </div>
    )
}