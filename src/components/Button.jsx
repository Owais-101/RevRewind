import React, { useState } from 'react'
import { motion } from 'motion/react'

const Button = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 1.4 }}
            whileTap={{ scale: 0.5 }}
            style={{ transformOrigin: "left" }}
            className={`transition-shadow duration-300 ease-in-out ${isHover && 'shadow-[6px_6px_0px_0px_#000000]'}`}>

            {/* Inner div handles overflow for circle animation */}
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="relative overflow-hidden border-2 border-black">
                <button
                    className="relative cursor-pointer px-5 py-3 sm:px-8 sm:py-4 md:px-14 md:py-6 lg:px-20 lg:py-7 uppercase font-bebas text-shadow-3d text-white text-xl sm:text-2xl lg:text-4xl tracking-widest z-10 bg-transparent w-full">
                    Create my Rewind
                </button>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isHover ? 1200  : 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[0.5px] rounded-full bg-text-primary"
                />

            </div>
        </motion.div>
    )
}

export default Button