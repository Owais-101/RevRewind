import React from 'react'
import smiley from '../assets/images/smiley_bg.png';
import { easeIn, motion } from 'motion/react';
import { delay } from 'motion';

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


// {/* <motion.div
//                 variants={popupVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className='absolute 
    
//     /* Laptop ya smaller: BOTTOM MIDDLE */
//     left-1/2 bottom-6 -translate-x-1/2
//     sm:left-1/2 sm:bottom-8 sm:-translate-x-1/2
//     md:left-1/2 md:bottom-10 md:-translate-x-1/2
    
//     /* Sirf XL+ pe right-bottom */
//     lg:right-20 lg:bottom-20 lg:left-auto lg:translate-x-0
    
//      w-44 h-36      /* Mobile: 48px circle */
//     sm:w-52 sm:h-44 /* Tablet: 56px circle */
//     md:w-64 md:h-5w-52 /* MD: 80px circle */
//     lg:w-72 lg:h-60 /* LG: 288x208px rect */
    
//     flex justify-center items-center rounded-full'
//             >
//                 <img src={smiley} className='w-full h-full object-cover rounded-full sm:mt-15' alt="" />
//             </motion.div> */}