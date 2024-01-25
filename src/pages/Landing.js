import { Button } from "@material-tailwind/react";
import { useState } from "react";

import Hero from "./sections/Hero";
import HeroText from "./sections/HeroText";
import RoadMap from "./sections/RoadMap";
import OurTeam from "./sections/OurTeam";
import Credit from "./sections/Credit";
import { motion } from "framer-motion";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 60px, rgba(0,0,0,1) 60px, rgba(0,0,0,1) 60px)`;
// const visibleMask = ` repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 60px)`;
// const hiddenMask = `opacity-0  transition-all`;
// const visibleMask = `opacity-100  transition-all`;
const hiddenStatu = "opacity-0 translate-x-full transition";
const visibleStatu = "opacity-100 translate-x-0";
const hiddenMask = "";
const visibleMask = "";
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