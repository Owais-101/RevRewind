import React from 'react'
import { motion } from 'motion/react'
import biker from '../assets/images/biker.png'

const Test = () => {
  const handWaveAnimationVariant = {
    initial: {
      rotate: 0,
      opacity: 0
    },
    animate: {
      rotate: [0, 10, -5, 10, 0],
      opacity: 1,
      transition: {
        rotate: {
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        },
      }
    }
  };


  return (
    <div className='w-full h-screen bg-bg-primary lg:flex lg:justify-center lg:items-center' >

      {/* Content Div */}
      <div className=' w-[90%] h-[49%] mx-auto pt-5 flex justify-center items-center '>

        <p className=''>
          <span className='text-xl md:text-2xl font-sans text-text-primary ' >
            Meet
            <motion.span
              variants={handWaveAnimationVariant}
              initial="initial"
              animate="animate">
            </motion.span> 👋 <br />
          </span>

          <span className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d flex items-center' >
            Owais
          </span>

          <span className='text-xl md:text-2xl font-sans text-text-primary' >a &nbsp; <span className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d items-center '>22 &nbsp;</span> year old soul from ,  </span>
          <span className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d items-center '>Pune <br /></span>
          <span className='text-xl md:text-2xl font-sans text-text-primary' >who lives for <span className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d items-center '>Photography</span > <br /></span>
          <span className='text-xl md:text-2xl font-sans text-text-primary' >and the open road. <br /> Every ride tells a story, this one will tell yours</span>
        </p>


      </div>

      {/* Image Div */}
      <div className=' w-[90%] h-[49%] mx-auto flex justify-center items-center'>
        <div className='w-[70%] h-[90%]'>
          <img src={biker} alt="" className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Test