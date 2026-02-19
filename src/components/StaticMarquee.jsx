import React from 'react'
import { motion } from 'motion/react';

const StaticMarquee = () => {

    const marqueeContent = new Array(10).fill("LIVE * RIDE * LOVE * FREEDOM * ")
    console.log(marqueeContent);
    
    const popupVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 25,
                delay: 2,
            }
        }
    };


    return (
        <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "center center" }}
            className='text-shadow-white text-xl md:text-3xl lg:text-6xl py-4 font-extrabold font-bebas tracking-wider whitespace-nowrap w-full bg-yellow-400 absolute bottom-20 lg:bottom-10 overflow-hidden flex ' >

            {marqueeContent.map((marquee, idx) => (
                <p key={idx} className='flex' >{marquee}&nbsp;</p>
            ))}

        </motion.div>
    )
}

export default StaticMarquee