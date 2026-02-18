import React, { useState } from 'react'
import { motion } from 'motion/react'

const Button = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className={`transition-shadow duration-300 ease-in-out ${isHover && 'shadow-[6px_6px_0px_0px_#000000]'}`}>

            {/* Inner div handles overflow for circle animation */}
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="relative overflow-hidden border-2 border-black"
            >
                <button
                    className="relative cursor-pointer px-5 py-3 sm:px-8 sm:py-4 md:px-14 md:py-6 lg:px-20 lg:py-7 uppercase font-bebas text-shadow-3d text-white text-xl sm:text-2xl lg:text-4xl tracking-widest z-10 bg-transparent w-full"
                >
                    Create my Rewind
                </button>

                <motion.div
                    animate={{ scale: isHover ? 200 : 1 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className='absolute left-10 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F6C515]'
                />
            </div>
        </div>
    )
}

export default Button