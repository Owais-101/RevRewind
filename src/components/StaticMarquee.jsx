import React from 'react'
import { motion } from 'motion/react';

// Wrap karo ek div mein jo overflow handle kare
const StaticMarquee = ({ position }) => {

    const marqueeContent = new Array(10).fill("LIVE * RIDE * LOVE * FREEDOM * ")

    const popupVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 25,
                delay: 2,
            }
        }
    };

    return (
        <div className={`w-full overflow-hidden ${position === "top" ? "absolute top-20 lg:top-10" : "absolute bottom-20 lg:bottom-10"}`}>
            <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                className='text-shadow-white text-xl md:text-3xl lg:text-6xl py-4 font-extrabold font-bebas tracking-wider whitespace-nowrap w-full bg-yellow-400 flex'>

                {marqueeContent.map((marquee, idx) => (
                    <p key={idx} className='flex'>{marquee}&nbsp;</p>
                ))}

            </motion.div>
        </div>
    )
}

export default StaticMarquee