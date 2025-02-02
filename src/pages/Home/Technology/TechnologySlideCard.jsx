
const TechnologySlideCard = ({content}) => {
    const {title, subtitle, content1, content2, image} = content || {};

  return (
    <div className='w-full flex justify-between rounded-3xl overflow-hidden p-[64px] gap-4'>
        <div className='w-1/2'>
            <h2 className='font-montserrat text-[#1f80f0] font-[700] tracking-[2.56px]'>
                {subtitle}
            </h2>
            <h1 className='mt-6 text-[#0b305b] font-montserrat text-[40px] font-[600] leading-[48px]'>
                {title}
            </h1>
            <p className='mt-6 font-[700] text-[#164377] leading-[25.6px]'>
                {content1}
            </p>
            <p className='mt-6 font-[400] text-[#164377] leading-[25.6px]'>
                {content2}
            </p>
        </div>
        <div className='w-1/2 flex justify-center'>
            <div className='w-[480px] h-[420px] bg-blue-400 overflow-hidden rounded-2xl'>
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
  )
}

export default TechnologySlideCard