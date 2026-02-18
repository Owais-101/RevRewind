import React from 'react'
import { motion } from 'motion/react';

const Marquee = () => {

    const marqueeArray = new Array(40).fill("🏍️ RIDE • SPEED • FREEDOM • 2025 WRAPPED");


    return (
        <div className=" overflow-hidden">

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0,
                    y: 40
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    duration: 2,
                    ease: "easeOut"
                }}

                className='flex'>


                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-5 pr-3 py-6 shrink-0"
                >
                    {marqueeArray.map((marquee, idx) => (
                        <p key={idx} className="text-xl font-bebas whitespace-nowrap">
                            {marquee}
                        </p>
                    ))}
                </motion.div>


                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-5 py-6 shrink-0"
                >
                    {marqueeArray.map((marquee, idx) => (
                        <p key={idx} className="text-xl font-bebas whitespace-nowrap">
                            {marquee}
                        </p>
                    ))}
                </motion.div>


            </motion.div>

        </div>

    )
}

export default Marquee