import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="text-white font-[600] h-full flex items-center -mt-28 px-[30px]">
        <div className="">
            <h1 className="font-montserrat text-[80px] leading-[92px]">
                Embrace the <br />future of finance
            </h1>
            <p className="font-montserrat leading-[25.6px] mt-6">
                Reimagine financial services with AnyTech’s open platform, distributed <br />banking solution that powers transformation
            </p>
            <button className="mt-8 bg-white text-[18px] text-[#0B305B] hover:bg-[#0B305B] hover:text-white font-[600] px-10 py-[14px] rounded shadow-md cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-2">
                <h1>Reach Out to Us</h1>
                <IoIosArrowForward size={16} />
            </button>
        </div>
    </div>
  )
}

export default Hero