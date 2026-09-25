import React from 'react'
 import hero from "@/assets/banner.png"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex  items-center justify-between container mx-auto p-12 mt-[70px] bg-[#15171D] rounded-4xl '>
       <div className=' space-y-4 '>
        <p className='text-[#C2F800] ' >WORKOUT LIBRARY</p>
        <h1 className='text-[#FFFFFF] font-bold text-5xl ' >TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
        <p className='max-w-[450px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
       

 <a href="#library">
  <button className='btn bg-[#C2F800] text-[#000000]' >BROWSE WORKOUTS</button>
</a>
       </div>
       <div>
          <Image className='h-[400px] w-[400px]' src={hero} alt="hero" width={100} height={100} />
       </div>
    </div>
  )
}

export default Hero
