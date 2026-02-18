import React from 'react'
import { motion } from 'motion/react'

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
                delay: 0.08 * index
            }
        })

    };

    //Motion variant for the div holding subHeading
    const popUpAnimationVariant = {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 1,
            transition: {
                delay: 0.5
            }
        }
    };

    return (
        // Main Heading and Container Div
        <div className='flex flex-col items-center '>

            {/* Main Heading  */}
            <div className='flex'>
                {heading.split("").map((char, idx) => (
                    <motion.h1
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx}
                        key={idx}
                        className="text-5xl md:text-7xl lg:text-8xl text-[#F6C515] font-bebas font-bold uppercase tracking-wider text-shadow-3d"

                    >
                        {char}
                    </motion.h1>
                ))}
            </div>

            {/* Sub-Heading */}
            <motion.div
                variants={popUpAnimationVariant}
                initial={'initial'}
                animate={'animate'}
                className='flex mt-4 border-2 shadow-[6px_6px_0px_0px_#000000] px-5 py-4'>
                {subHeading.split("").map((char, idx) => (
                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx + heading.length}
                        className='text-sm md:text-lg lg:text-2xl text-white font-semibold tracking-widest font-bebas text-shadow-3d'
                        key={idx}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.h2>
                ))}
            </motion.div>

        </div>
    )
}

export default Heading