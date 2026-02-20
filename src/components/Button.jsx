import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router';

const Wrapper = ({ link, page, children }) => {
    return link ? <Link to={page}>{children}</Link> : <>{children}</>
}

const Button = ({ page, value, delay, type, link, isSubmitting }) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <Wrapper link={link} page={page}>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: delay && 1.4 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformOrigin: "left" }}
                viewport={{ once: true }}
                className={`transition-shadow duration-300 ease-in-out ${isHover && 'shadow-[6px_6px_0px_0px_#000000]'}`}>

                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="relative flex justify-between items-center overflow-hidden border-2 border-black">
                    <button
                        type={type}
                        disabled={isSubmitting}
                        className={`relative cursor-pointer px-5 py-3 lg:py-7 sm:px-8 sm:py-4 md:px-14 md:py-6 lg:px-20 uppercase font-bebas text-shadow-3d text-white text-xl sm:text-2xl ${delay === true ? 'lg:text-4xl' : 'lg:text-5xl'} tracking-widest z-10 bg-transparent w-full`}>
                        {isSubmitting ? "SUBMITTING..." : value}
                    </button>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isHover ? 2000 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[0.5px] rounded-full bg-text-primary"
                    />
                </div>
            </motion.div>
        </Wrapper>
    )
}

export default Button