import React from 'react'
import useAnimationVariants from '../hooks/useAnimationVariants';
import { motion } from 'motion/react';

const Form = () => {

    const { fadeInAnimationVariant } = useAnimationVariants();

    // TYPES OF BIKE FOR DROPDOWN MENU
    const bikeTypes = [
        "Supersport",
        "Naked",
        "Sport Tourer",
        "Cruiser",
        "Bobber",
        "Adventure",
        "Commuter",
        "Café Racer",
        "Scrambler",
        "Modern Retro",
    ];

    // BIKES BRAND
    const bikeBrands = [
        "Hero MotoCorp",
        "Bajaj Auto",
        "TVS Motor",
        "Honda Motorcycle",
        "Royal Enfield",
        "Yamaha",
        "Suzuki",
        "KTM",
        "Husqvarna",
        "Kawasaki",
        "Jawa",
        "Yezdi",
        "Triumph",
        "Harley-Davidson",
        "BMW Motorrad",
        "Ducati",
        "Aprilia",
    ];

    return (

        // DIV CONTAINING THE WHOLE FORM PAGE
        <div className='w-full bg-bg-primary pb-10'>

            {/* HEADING AND SUB-HEADING OF THE FORM */}
            <div>
                <motion.h1
                    variants={fadeInAnimationVariant}
                    initial={"initial"}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className='text-center text-text-primary text-shadow-3d text-2xl md:text-4xl lg:text-6xl tracking-wide font-bebas pt-10'>
                    fill the form below
                </motion.h1>

                <motion.p
                    variants={fadeInAnimationVariant}
                    initial={"initial"}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className='text-lg lg:text-3xl font-sans text-center font-semibold text-text-secondary'>
                    "Every Ride tells a story, lets tell yours..."
                </motion.p>
            </div>

            {/* HOLDING IT ALL TOGETHER */}
            <form className='w-[90%] border-2 mx-auto mt-5 shadow-[5px_5px_0px_0px_#000000] lg:shadow-[10px_10px_0px_0px_#000000]'>

                {/* BASIC DETAILS DIV */}
                <div className='w-full py-5 mx-auto' >
                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='text-center text-text-primary text-shadow-3d font-bebas text-2xl md:text-3xl lg:text-5xl mb-3'>
                        BEHIND THE HELMET
                    </motion.h2>
                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1 ' htmlFor="full_name">Full Name</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Enter your Name' />
                        </div>
                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">Age</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Enter your Age' />
                        </div>
                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">Place</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Where do you live' />
                        </div>
                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">Hobby</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='What is your hobby ' />
                        </div>



                    </div>
                </div>

                {/* LIFELONG COMPANION DIV */}
                <div className='w-full py-5 mx-auto' >

                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='text-center text-text-primary text-shadow-3d font-bebas text-2xl md:text-3xl lg:text-5xl mb-3'>
                        YOUR LIFELONG COMPANION
                    </motion.h2>

                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <lablel className='font-semibold font-sans uppercase text-text-primary mb-1' value="">BIKE TYPE</lablel>
                            <select className="py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md">
                                <option className='' value="">Select your bike type</option>
                                {bikeTypes.map((type) => (
                                    <option key={type} value={type.toLowerCase().replace(/\s+/g, "_")}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">BIKE NICKNAME</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Enter your Bike Nickname' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' value="">BIKE BRAND</label>
                            <select className="py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md">
                                <option className='' value="">Select your bike type</option>
                                {bikeBrands.map((type) => (
                                    <option key={type} value={type.toLowerCase()}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>


                    </div>

                </div>

                {/* The Road Counted Everything */}
                <div className='w-full py-5 mx-auto' >

                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='text-center text-text-primary text-shadow-3d font-bebas text-2xl md:text-3xl lg:text-5xl mb-3'>
                        The Road Counted Everything
                    </motion.h2>

                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1 ' htmlFor="full_name">KMS RIDDEN</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Total kilometers Ridden' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">RIDES TAKEN</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Total Rides Taken' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">LONGEST SINGLE RIDE</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Longest Ride in One Go' />
                        </div>


                    </div>

                </div>

                {/* YEAR DEFINING MOMENTS */}
                <div className='w-full py-5 mx-auto' >

                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='text-center text-text-primary text-shadow-3d font-bebas text-2xl md:text-3xl lg:text-5xl mb-3'>
                        YEAR DEFINING MOMENTS
                    </motion.h2 >

                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1 ' htmlFor="full_name">FAVOURITE RIDE</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Favourite Ride of the Year' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">HARDEST RIDE</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Hardest Ride of the Year' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">FAVOUTITE LOCATION</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Favourite Location of the Year' />
                        </div>


                    </div>

                </div>

                {/* BEFORE YOU REV OUT */}
                <div className='w-full py-5 mx-auto' >

                    <motion.h2
                        variants={fadeInAnimationVariant}
                        initial={"initial"}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className='text-center text-text-primary text-shadow-3d font-bebas text-2xl md:text-3xl lg:text-5xl mb-3'>
                        BEFORE YOU REV OUT
                    </motion.h2>

                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1 ' htmlFor="full_name">ONE WORD SAYS IT ALL</label>
                            <input className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='One Word for your Riding Year' />
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto'>
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="fav_photo">
                                Favourite Photo
                            </label>
                            <input
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="file"
                                accept="image/*"
                                id='fav_photo'
                                name='fav_photo'
                            />
                        </div>


                    </div>

                </div>

            </form>

        </div>
    )
}

export default Form