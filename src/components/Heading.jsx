import React, { useState } from 'react'
import { motion } from 'motion/react'
import { PiRewindLight } from "react-icons/pi";


const Heading = () => {

    const heading1 = "Rev";
    const heading2 = "Rewind"
    const subHeading = "Relive Every Kilometer";
    const [showDivider, setShowDivider] = useState(false);

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
        // Main Heading and Sub-Heading Container Div
        <div className='flex flex-col items-center '>

            {/* Main Heading  */}
            {/* Rev */}
            <div className='flex '>
                {heading1.split("").map((char, idx) => (
                    <motion.h1
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx}
                        key={idx}
                        className="text-5xl md:text-7xl lg:text-8xl text-text-primary font-bebas font-bold uppercase tracking-wider text-shadow-3d"
                    >
                        {char}
                    </motion.h1>
                ))}

                {/* Divider that appears after Rev finishes */}
                {showDivider && (
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, ease:"easeInOut" }}
                        style={{ transformOrigin: "left" }}
                        className='bg-yellow-400 mx-2 rounded-lg flex justify-center items-center px-2 h-12 md:h-16 lg:h-20 shadow-[6px_6px_0px_0px_#000000]'
                    >
                        <PiRewindLight className='text-4xl md:text-5xl lg:text-7xl text-bl ' />
                    </motion.div>
                )}
                {/* Rewind */}
                {heading2.split("").map((char, idx) => (
                    <motion.h1
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx + heading1.length}
                        onAnimationComplete={idx === heading2.length - 1 ? () => setShowDivider(true) : undefined}
                        key={idx}
                        className="text-5xl md:text-7xl lg:text-8xl text-text-primary font-bebas font-bold uppercase tracking-wider text-shadow-3d"
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
                className='relative bg-amber-300 flex mt-4 border-2 shadow-[6px_6px_0px_0px_#000000] px-5 py-4'>
                {subHeading.split("").map((char, idx) => (
                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        animate={"animate"}
                        custom={idx + (heading1.length + heading2.length)}
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