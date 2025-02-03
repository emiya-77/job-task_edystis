import './Legacy.css'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from "framer-motion";

import svg1 from "../../../../public/images/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../../../../public/images/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../../../../public/images/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../../../../public/images/backgrounds/WaveLinesDesktop4.svg";
import { useState } from 'react';

const Legacy = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { innerWidth, innerHeight } = window;
        const x = (event.clientX / innerWidth - 0.5) * 2; // Normalize x to range [-1, 1]
        const y = (event.clientY / innerHeight - 0.5) * 2; // Normalize y to range [-1, 1]
        setMousePosition({ x, y });
      };

  return (
    <div className="relative w-full side-pd angled-legacy overflow-hidden"
    onMouseMove={handleMouseMove}>

        <motion.div className="z-0"
          initial={{ opacity: 0, x: "30%", y: "-30%" }} // Start with 0 opacity
          animate={{ opacity: 1, x: 0, y: 0 }} // Animate to full opacity
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", top: 200, left: 0, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * -30}px`, // Moves horizontally
              translateY: `${mousePosition.y * -30}px`, // Moves vertically
            }}>
                <img src={svg4} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "-30%", y: "-30%" }} // Start with 0 opacity
          animate={{ opacity: 1, x: 0, y: 0 }} // Animate to full opacity
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", top: -800, left: -200, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`, // Moves horizontally
              translateY: `${mousePosition.y * 30}px`, // Moves vertically
            }}>
                <img src={svg2} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "-30%", y: "-30%" }} // Start with 0 opacity
          animate={{ opacity: 1, x: 0, y: 0 }} // Animate to full opacity
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: 200, left: 0, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`, // Moves horizontally
              translateY: `${mousePosition.y * 30}px`, // Moves vertically
            }}>
                <img src={svg1} alt="" />
            </motion.div>
        </motion.div>
        <motion.div className=""
          initial={{ opacity: 0, x: "30%", y: "-30%" }} // Start with 0 opacity
          animate={{ opacity: 1, x: 0, y: 0 }} // Animate to full opacity
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 20, width: "100%", height: "100%" }}
        >
            <motion.div className="parallax-element"
            style={{
              translateX: `${mousePosition.x * 30}px`, // Moves horizontally
              translateY: `${mousePosition.y * 30}px`, // Moves vertically
            }}>
                {/* <img src={svg3} alt="" /> */}
            </motion.div>
        </motion.div>

        <div className="text-white font-[600] h-full flex items-center px-[30px]" style={{ position: "relative", zIndex: 10 }}>
            <div className="">
                <h1 className="font-montserrat text-[56px] leading-[61.6px] mb-6">
                    Legacy no longer
                </h1>
                <p className="font-montserrat text-[20px] leading-[28px] mb-[30px]">
                    Talk to us to find out how we can transform your organisation for the future
                </p>
                <button className="mt-8 bg-white text-[18px] text-[#0B305B] hover:bg-[#0B305B] hover:text-white font-[600] px-10 py-[14px] rounded shadow-md cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-2">
                    <h1>Contact Us</h1>
                    <IoIosArrowForward size={16} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Legacy