
const PhilosophyCard = ({philosophy}) => {
    const {title, description, icon} = philosophy || {};
  return (
    <div className="p-[32px] flex flex-col items-start rounded-3xl">
        <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img src={icon} className="w-full" alt="" />
        </div>
        <h1 className="mt-6 text-[#0b305b] font-montserrat text-[24px] font-[600] leading-[31.2px]">{title}</h1>
        <p className="mt-6 font-[400] text-[#164377] leading-[25.6px]">{description}</p>
    </div>
  )
}

export default PhilosophyCard