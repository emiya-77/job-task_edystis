
const Footer = () => {
  return (
    <div className="">
        <div className="flex flex-col items-center side-pd bg-[#002045]">
            <div className="w-full flex justify-between items-center py-[44px] px-[30px]">
                <div>
                    <img className='w-[90%]' src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="" />
                </div>
                <div className="flex text-[#00e9ea] items-center">
                    <h2 className="py-[16px] px-[24px] border-r-[0.8px] border-[#164377]">Our Solutions</h2>
                    <div className="flex">
                        <h3 className="pl-6 py-4">AnyCaaS</h3>
                        <h3 className="pl-6 py-4">AnyBaaS</h3>
                        <h3 className="pl-6 py-4">AnyPaaS</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center side-pd bg-[#00152D]">
            <div className="w-full flex justify-between items-center py-[24px] px-[30px]">
                <div>
                    <h2 className="text-[#1f80f0] leading-[19.2px] text-[12px] font-[600]">
                        <span className="font-[900]">©2023 All rights reserved.</span> Any Technology Pte Ltd.
                    </h2>
                </div>
                <div className="text-[#1f80f0] leading-[19.2px] text-[12px] font-[600]">
                    <h2 className="">Privacy Policy</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer