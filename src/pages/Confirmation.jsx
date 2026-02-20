import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Button from '../components/Button'
import useAnimationVariants from '../hooks/useAnimationVariants';


const Confirmation = () => {
    const { fadeInAnimationVariant } = useAnimationVariants();

    const [created, setCreated] = useState(false);


    useEffect(() => {
        const creating = async () => {

            // Fake delay to enhance user experience
            await new Promise((resolve) => setTimeout(resolve, 5000));
            setCreated(!created)
        };

        creating();

    }, [])


    return (
        <div className='w-full h-screen bg-bg-primary flex flex-col justify-center items-center'>

            <div className='' >
                <motion.h1
                    variants={fadeInAnimationVariant}
                    initial={"initial"}
                    whileInView="whileInView"
                    className='font-bebas text-3xl sm:text-6xl md:text-7xl lg:text-9xl  text-shadow-3d text-white' >{created ?
                        <> <span className='text-yellow-500' >Owais <br /></span>
                            your Rewind is ready to go </>
                        : "Creating"}</motion.h1>
                <p className='text-xl md:text-2xl lg:text-3xl  font-semibold text-text-primary'>{!created && "Please Wait ..."} </p>
            </div>

            <div className='mt-10 md:mt-16 lg:mt-24'>
                {created && <Button value={'Lets Go'} page={'/test'} link={true} />}
            </div>

        </div>
    )
}

export default Confirmation