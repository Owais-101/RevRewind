import React from 'react'
import { motion } from 'motion/react'
import Button from './Button'

const Test = ({ imgSrc, children, summary }) => {



    return (
        <>
            <div className='w-full h-screen bg-bg-primary lg:flex lg:justify-center lg:items-center overflow-hidden' >

                {/* Content Div */}
                <div className=' w-[90%] h-[49%] mx-auto pt-5 lg:pt-0 flex justify-center items-center'>

                    <p className=' px-4 lg:pl-24 '>
                        {children}
                    </p>


                </div>

                {/* Image Div */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className='w-[90%] h-[49%] mx-auto flex flex-col items-center justify-center relative '>

                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className='w-[70%] h-[90%]   lg:w-full lg:h-full'>

                        <motion.img
                            initial={{ filter: "drop-shadow(0px 0px 0px #F6C515)" }}
                            animate={{ filter: "drop-shadow(0px 0px 18px #F6C515)" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            src={imgSrc}
                            alt="Biker"
                            className='w-full h-full object-contain absolute bottom-20'
                        />
                    </motion.div>

                    {summary &&
                        <div className='absolute bottom-0 lg:-bottom-30'>
                            <Button value={"summary"} page={"/summary"} link={true} />
                        </div>
                    }

                </motion.div>




            </div>
        </>
    )
}

export default Test