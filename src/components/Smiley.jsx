import React from 'react'
import smiley from '../assets/images/smiley_bg.png';
import { motion } from 'motion/react';

const Smiley = ({directionOne , directionTwo}) => {
    
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
        <>
            <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                style={{ transformOrigin: "center center" }}
                onAnimationStart={() => document.body.style.overflow = 'hidden'}
                onAnimationComplete={() => document.body.style.overflow = 'unset'}
                className={`absolute 
                ${directionOne}-1/2 ${directionTwo}-5 -translate-x-1/2 
                sm:${directionOne}-1/2 sm:${directionTwo}-5 sm:-translate-x-1/2 
                md:${directionOne}-1/2 md:${directionTwo}-6 md:-translate-x-1/2 

                lg:${directionOne}-20 lg:${directionTwo}-32 lg:translate-x-0 top-2
    
                /* Perfect Size Progression */
                w-44 h-36      /* Mobile: 48px 
                md:w-64 md:h-5w-52 /* MD: 80px 
                lg:w-72 lg:h-60 /* LG: 288x208px 
    
                flex justify-center items-center rounded-full`}
            >
                <img src={smiley} className='w-full h-full object-cover sm:my-15' alt="" />
            </motion.div>
        </>
    )
}

export default Smiley


