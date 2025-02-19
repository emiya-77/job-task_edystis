import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Trust = () => {
    const [stats, setStats] = useState([]);
    const [trustData, setTrustData] = useState([]);
    const [countOn, setCountOn] = useState(true);

    useEffect(() => {
        fetch('./data/trust.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTrustData(data)
        })
    }, [])

    useEffect(() => {
        fetch('./data/stats.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStats(data)
        })
    }, [])

  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
        <div className='side-pd'>
            <div className='text-center px-[30px] mb-6'>
                <h2 className='font-montserrat text-[#1f80f0] font-[700] tracking-[2.56px] mb-[32px]'>
                    TRUSTED BY THE BEST
                </h2>
                <div className="flex items-center gap-20 w-[80%] mx-auto">
                    {
                        stats?.map(stat => 
                            <div key={stat.id} className='w-full flex flex-col justify-between'>
                                <h1 className='font-montserrat bg-gradient-to-b from-[#5ba4f8] via-[#0657b3] to-[#003d83] bg-clip-text text-transparent leading-[144px] font-[600] text-[96px]'>
                                        {stat.symbolLeft || ''}
                                        {
                                            countOn &&
                                            <CountUp start={0} end={stat.number} duration={3} delay={0}/>
                                        }
                                        {stat.symbolRight || ''}
                                </h1>
                                <h2 className='mt-[19px] text-[#151d2f] font-montserrat text-[18px] leading-[28px]'>
                                        {stat.title}
                                </h2>
                            </div>
                        )
                    }
                </div>
                <div className="mt-[128px] px-[30px] grid grid-cols-5 gap-14">
                    {
                        trustData?.map(trust => 
                            <div key={trust.id} className='w-full flex items-center gap-6'>
                                <img className='w-full' src={trust?.img || ''} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </ScrollTrigger>
  )
}

export default Trust