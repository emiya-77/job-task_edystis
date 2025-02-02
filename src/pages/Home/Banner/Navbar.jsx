import './Banner.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="px-[30px] py-[17px] flex justify-between items-center text-white">
        <div className="">
            <img className='w-[90%]' src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="" />
        </div>
        <div className='navlinks'>
            <ul className="flex font-[400]">
                <li className="sol-menu relative flex items-center justify-center gap-2">
                  <h1>Solutions</h1>
                  <IoIosArrowDown size={13} />
                  <ul className="sol-sub absolute top-[100%] left-0 mt-0 text-[#0b305b]">
                      <li className='drop-border-btm'>AnyCaaS</li>
                      <li className='drop-border-btm'>AnyBaaS</li>
                      <li className='drop-border-btm'>AnyPaaS</li>
                  </ul>
                </li>
                <li>Services</li>
                <li>About Us</li>
                <li className="lang-menu relative flex items-center justify-center gap-2">
                  <FaGlobe size={13} />
                  <h1>EN</h1>
                  <IoIosArrowDown size={13} />
                  <ul className="lang-sub absolute top-[100%] left-0 mt-0 text-[#0b305b]">
                      <li className='drop-border-btm'>EN (English)</li>
                      <li className='drop-border-btm'>TH (Thai)</li>
                      <li className='drop-border-btm'>ID (Bahasa Indonesia)</li>
                      <li className='drop-border-btm'>TW (Traditional Chinese)</li>
                  </ul>
                </li>
            </ul>
        </div>
        <div>
            <button className="px-6 py-3 font-[600] text-[18px] border-1 flex items-center gap-2 rounded hover:bg-white hover:text-blue-600 hover:shadow-md hover:border-white hover:gap-4 cursor-pointer transition-all duration-300 ease-in-out">
              <h1>Contact Us</h1>
              <IoIosArrowForward size={16} />
            </button>
        </div>
    </div>
  )
}

export default Navbar