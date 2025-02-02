import './Finance.css';

const Finance = () => {
  return (
    <div className="angled-finance side-pd flex items-center">
        <div className='w-full -mt-44 flex justify-between px-[30px]'>
            <div className='w-1/2'>
                <h2 className='font-montserrat text-[#1f80f0] font-[700] tracking-[2.56px]'>
                    POWERING THE FUTURE OF FINANCE
                </h2>
                <h1 className='mt-6 text-[#0b305b] font-montserrat text-[56px] font-[600] leading-[61.6px]'>
                    Uncovering new <br />ways to delight <br />customers
                </h1>
                <p className='mt-6 font-[700] text-[#164377] leading-[25.6px]'>
                        AnyTech is revolutionising financial technology by introducing <br />innovative and real-time transaction account processing capabilities, <br />specifically designed for retail financial services.
                </p>
                <p className='mt-6 font-[400] text-[#164377] leading-[25.6px]'>
                    Our modern approach surpasses traditional banking and card processing <br />systems, empowering you with the most advanced technology for lasting <br />success.
                </p>
            </div>
            <div className='w-1/2 flex justify-center'>
                <div className='w-[430px] h-[520px] bg-blue-400 overflow-hidden'>
                    <img className='w-full h-full object-cover cursor-zoom-in' src="./images/home/finance-1.jpg" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Finance