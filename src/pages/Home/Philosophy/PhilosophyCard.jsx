import { PiTreeStructureFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const iconMap = {
  PiTreeStructureFill: PiTreeStructureFill,
  FaMicrochip: FaMicrochip,
  FaLightbulb: FaLightbulb,
};

const PhilosophyCard = ({philosophy}) => {
    const {title, description, icon} = philosophy || {};
    const IconComponent = iconMap[icon];

    useEffect(() => {
      AOS.init({
        duration: 700,
        once: false,
        easing: "ease-in-out",
      });
    }, []);

  return (
    <div data-aos="fade-up" className="p-[32px] flex flex-col items-start rounded-3xl shadow-md bg-[#F8FCFF]">
        <div className="w-[50px] h-[50px] bg-[#E9F3FF] flex items-center justify-center rounded-full overflow-hidden">
          <IconComponent />
        </div>
        <h1 className="mt-6 text-[#0b305b] font-montserrat text-[24px] font-[600] leading-[31.2px]">{title}</h1>
        <p className="mt-6 font-[400] text-[#164377] leading-[25.6px]">{description}</p>
    </div>
  )
}

export default PhilosophyCard