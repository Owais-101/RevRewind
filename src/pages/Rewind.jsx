import React from 'react'
import RewindSection from '../components/RewindSection'
import biker from '../assets/images/biker.png'
import { motion } from 'motion/react'

const Rewind = () => {
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
        <>
            <RewindSection imgSrc={biker} >
                <span className='text-xl md:text-2xl lg:text-3xl font-sans text-text-primary'>
                    Meet
                    <motion.span
                        variants={handWaveAnimationVariant}
                        initial="initial"
                        animate="animate"
                        style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
                    >
                        &nbsp;👋
                    </motion.span>
                    <br />
                </span>

                <span className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d flex items-center' >
                    Prathamesh Chaudhary
                </span>

                <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary' >a &nbsp; <span className='text-4xl md:text-6xl lg:text-7xl font-bebas text-white tracking-wider text-shadow-3d items-center '>22 &nbsp;</span> year old soul from ,  </span>
                <span className='text-4xl md:text-6xl lg:text-7xl font-bebas text-white tracking-wider text-shadow-3d items-center '>Pune <br /></span>
                <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary' >who lives for <span className='text-4xl md:text-6xl lg:text-7xl font-bebas text-white tracking-wider text-shadow-3d items-center '>Photography</span > <br /></span>
                <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary' >and the open road. <br /> Every ride tells a story, this one will tell yours</span>
            </RewindSection >
        </>
    )
}

export default Rewind