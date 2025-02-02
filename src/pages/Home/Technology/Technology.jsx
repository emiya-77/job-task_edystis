import { useEffect, useState } from "react";
import TechnologySlideCard from "./TechnologySlideCard";
import './Technology.css'

const Technology = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('./data/technology.json')
        .then(res => res.json())
        .then(data => {
            setSlides(data);
        })
    }, []);

    const handleTabClick = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

  return (
    <div className='side-pd mb-36 angled-technology'>
        <div className='px-[30px]'>
            <div className='text-center'>
                <h2 className='font-montserrat text-[#1f80f0] font-[700] tracking-[2.56px]'>
                    TECHNOLOGY BUILT FOR YOU
                </h2>
                <h1 className='mt-6 text-[#0b305b] font-montserrat text-[56px] font-[600] leading-[61.6px]'>
                    The future of finance
                </h1>
            </div>
            <div className="relative w-full">
                
                <div className="flex justify-center my-[32px] gap-4">
                    {slides?.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-[48px] py-[8px] text-[18px] font-[600] rounded-full ${
                        index === currentSlide
                            ? "bg-[#b9d9ff] text-[#1f80f0]"
                            : "bg-transparent text-[#1f80f0]"
                        }`}
                    >
                        {slide.title}
                    </button>
                    ))}
                </div>

                
                <div className="relative overflow-hidden shadow-lg rounded-2xl">
                    <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <TechnologySlideCard content={slide?.content} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Technology