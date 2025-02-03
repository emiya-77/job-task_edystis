import {useEffect, useState } from 'react'
import './Philosophy.css'
import PhilosophyCard from './PhilosophyCard'

const Philosophy = () => {
    const [philosophyData, setPhilosophyData] = useState([])

    useEffect(() => {
        fetch('./data/philosophy.json')
        .then(res => res.json())
        .then(data => {
            setPhilosophyData(data);
        })
    }, [])

  return (
    <div className='side-pd mb-36'>
        <div className='px-[30px]'>
            <div className='text-center'>
                <h2 className='font-montserrat text-[#1f80f0] font-[700] tracking-[2.56px]'>
                    OUR PHILOSOPHY
                </h2>
                <h1 className='mt-6 text-[#0b305b] font-montserrat text-[56px] font-[600] leading-[61.6px]'>
                    Human-centred innovation
                </h1>
            </div>
            <div className='my-[32px] w-full'>
                <img className='w-full' src="./images/home/philosophy-1.png" alt="" />
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    philosophyData.map(philosophy => <PhilosophyCard key={philosophy.id} philosophy={philosophy} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Philosophy