import { useState } from "react";
import Hero from "./Hero"
import Navbar from "./Navbar"
import { motion } from "framer-motion";

import svg1 from "../../../../public/images/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../../../../public/images/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../../../../public/images/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../../../../public/images/backgrounds/WaveLinesDesktop4.svg";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 2;
    const y = (event.clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };
  
  return (
    <div className="angled-section relative w-full h-[900px] side-pd overflow-hidden"
    onMouseMove={handleMouseMove}>
        <div className="angled-bg-1"></div>
        <div className="angled-bg-2 hidden md:flex"></div>

        {/* <motion.div className="z-0"
          initial={{ opacity: 0, x: "30%", y: "-30%" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", top: 200, left: 0, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * -30}px`,
              translateY: `${mousePosition.y * -30}px`,
            }}>
                <img src={svg4} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "-30%", y: "-30%" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", top: -800, left: -200, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`,
              translateY: `${mousePosition.y * 30}px`,
            }}>
                <img src={svg2} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "-30%", y: "-30%" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: 200, left: 0, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`,
              translateY: `${mousePosition.y * 30}px`,
            }}>
                <img src={svg1} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "30%", y: "-30%" }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 20, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`,
              translateY: `${mousePosition.y * 30}px`,
            }}>
                
            </motion.div>
        </motion.div> */}

        <Navbar />
        <Hero />
    </div>
  )
}

export default Banner