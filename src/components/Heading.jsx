import React from 'react'
import { motion } from 'motion/react'
import { animate, delay } from 'motion';

const Heading = () => {

    const heading = "RevRewind";
    const subHeading = "Relive Every Kilometer";

    // Motion variant for both heading and subheading(extra delay) 
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 100
        },

        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })

    }

    return (

        // Main Heading and Container Div
        <div className='flex flex-col items-center '>

            {/* Main Heading  */}
            {/* Main Heading - REV + REWIND */}
            <div className='flex'>
                {heading.split("").map((char, idx) => (
                    <motion.h1
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx}
                        key={idx}
                        className='text-5xl md:text-7xl lg:text-8xl text-red-500 font-bebas font-bold uppercase tracking-wider [text-shadow:1px_1px_0_black,2px_2px_0_black,3px_3px_0_black,4px_4px_0_black,5px_5px_10px_rgba(0,0,0,1)]'
                    >
                        {char}
                    </motion.h1>
                ))}
            </div>

            {/* Sub-Heading */}
            <div className='flex mt-4'>
                {subHeading.split("").map((char, idx) => (
                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx + heading.length} // Better delay calculation
                        className='text-sm md:text-lg lg:text-2xl font-semibold tracking-wide '
                        key={idx}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.h2>
                ))}
            </div>

        </div>
    )
}

export default Heading