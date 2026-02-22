import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Button from '../components/Button'
import useAnimationVariants from '../hooks/useAnimationVariants';
import { useUser } from '../context/UserProvider';
import Audio from '../components/Audio';

const Confirmation = () => {

    const { fadeInAnimationVariant, StaticMarqueePopUpVariant, } = useAnimationVariants();
    const { user, setAudio } = useUser();
    const [created, setCreated] = useState(false);
    const headline = ["YOUR ", "REWIND ", "IS ", "READY ", "TO ", "GO "];


    useEffect(() => {
        const creating = async () => {
            // Fake delay to enhance user experience
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setCreated(!created)
        };

        creating();

    }, [])


    return (
        <div className='w-full h-screen bg-bg-primary flex flex-col justify-center items-center'>

            <div className='relative' >
                <motion.h1
                    className='font-bebas text-3xl sm:text-6xl md:text-7xl lg:text-9xl  text-shadow-3d text-white' >
                    {created ?
                        <>

                            <motion.span
                                variants={StaticMarqueePopUpVariant(0.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-yellow-500' >
                                {user?.fullName ? user.fullName : "User"} <br />
                            </motion.span>

                            {headline.map((char, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={fadeInAnimationVariant}
                                    initial="initial"
                                    whileInView="whileInView"
                                    custom={idx}>

                                    {char}
                                </motion.span>
                            ))}
                        </>
                        :
                        "Creating"}
                </motion.h1>

                <p className='text-xl md:text-2xl lg:text-3xl  font-semibold text-text-primary'>{!created && "Please Wait ..."} </p>
            </div>

            <div
                onClick={() => setAudio(prev => !prev)}
                className='mt-10 md:mt-16 lg:mt-24'>
                {created && <Button value={'Lets Go'} page={'/rewind'} link={true} />}
            </div>

        </div>
    )
}

export default Confirmation