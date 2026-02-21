import React from 'react'
import useAnimationVariants from '../hooks/useAnimationVariants';
import { motion } from 'motion/react';
import Button from '../components/Button'
import { useForm } from "react-hook-form"
import { useUser } from '../context/UserProvider';

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

    //React Hook Form 
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    // Use Context 
    const { onSubmit } = useUser();

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
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-[90%] border-2 mx-auto mt-5 shadow-[5px_5px_0px_0px_#000000] lg:shadow-[10px_10px_0px_0px_#000000]'>

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
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1 '
                                htmlFor="full_name">
                                Full Name
                            </label>
                            <input
                                {...register("fullName",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 4, message: "name must be more than 4 alphabets" },
                                        maxLength: { value: 20, message: "name must be below 20 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md focus:outline-none'
                                type="text"
                                id='fullName'
                                name='fullName' placeholder='Enter your Name' />
                            {errors.fullName && (<p className='text-white outline-black'>{errors.fullName.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                Age
                            </label>
                            <input
                                {...register("age", {
                                    required: { value: true, message: "field required*" },
                                    min: { value: 18, message: "age must be above 18yr" },
                                    max: { value: 99, message: "age must be below 99yr" },
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="number"
                                id='age'
                                name='age' placeholder='Enter your Age' />
                            {errors.age && (<p className='text-white outline-black'>{errors.age.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                Place
                            </label>
                            <input
                                {...register("place", {
                                    required: { value: true, message: "field required*" },
                                    minLength: { value: 4, message: "place must be more than 4 alphabets" },
                                    maxLength: { value: 20, message: "place must be below 20 alphabets" },
                                    pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='place'
                                name='place' placeholder='Where do you live' />
                            {errors.place && (<p className='text-white  outline-black'>{errors.place.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                Hobby
                            </label>
                            <input
                                {...register("hobby", {
                                    required: { value: true, message: "field required*" },
                                    minLength: { value: 4, message: "hobby must be more than 4 alphabets" },
                                    maxLength: { value: 20, message: "hobby must be below 20 alphabets" },
                                    pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='hobby'
                                name='hobby' placeholder='What is your hobby ' />
                            {errors.hobby && (<p className='text-white  outline-black'>{errors.hobby.message}</p>)}
                        </div>

                    </div>

                </div> 

                {/* LIFELONG COMPANION DIV */}
                {/* <div className='w-full py-5 mx-auto' >
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
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' value="">BIKE TYPE</label>
                            <select
                                {...register("bikeType", {
                                    required: { value: true, message: "field required*" },
                                })}
                                className="py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md">
                                <option>
                                    Select your bike type
                                </option>
                                {bikeTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.bikeType && (<p className='text-white  outline-black'>{errors.bikeType.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >

                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                BIKE NICKNAME
                            </label>

                            <input
                                {...register("nickName",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 3, message: "name must be more than 3 alphabets" },
                                        maxLength: { value: 10, message: "name must be below 10 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='nickName'
                                name='nickName'
                                placeholder='Enter your Bike Nickname' />

                            {errors.nickName && (<p className='text-white  outline-black'>{errors.nickName.message}</p>)}

                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' value="">BIKE BRAND</label>
                            <select
                                {...register("bikeBrand", {
                                    required: { value: true, message: "field required*" },
                                })}
                                className="py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md">
                                <option>
                                    Select your bike brand
                                </option>
                                {bikeBrands.map((type) => (
                                    <option key={type} value={type.toLowerCase()}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.bikeBrand && (<p className='text-white  outline-black'>{errors.bikeBrand.message}</p>)}
                        </div>


                    </div>
                </div> */}

                {/* The Road Counted Everything */}
                {/* <div className='w-full py-5 mx-auto' >

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
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1 '
                                htmlFor="full_name">
                                KMS RIDDEN
                            </label>

                            <input
                                {...register("kmsRidden", {
                                    required: { value: true, message: "field required*" },
                                    min: { value: 1, message: "kms must be adove 1km" },
                                    max: { value: 100000, message: "kms must be below 100000km" },
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="number"
                                id='kmsRidden'
                                name='kmsRidden'
                                placeholder='Total kilometers Ridden in a year' />
                            {errors.kmsRidden && (<p className='text-white  outline-black'>{errors.kmsRidden.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >

                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                RIDES TAKEN
                            </label>

                            <input
                                {...register("ridesTaken", {
                                    required: { value: true, message: "field required*" },
                                    min: { value: 1, message: "should have atleast done 1 ride" },
                                    max: { value: 10000, message: "rides must be below 10000km" },
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="number"
                                id='ridesTaken'
                                name='ridesTaken'
                                placeholder='Total Rides Taken'
                            />
                            {errors.ridesTaken && (<p className='text-white  outline-black'>{errors.ridesTaken.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                LONGEST RIDE (km)
                            </label>

                            <input
                                {...register("longestRide", {
                                    required: { value: true, message: "field required*" },
                                    min: { value: 1, message: "should have atleast ridden 1km" },
                                    max: { value: 10000, message: "rides must be below 10000km" },
                                })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="number"
                                id='longestRide' name='longestRide'
                                placeholder='Your Longest Ride Taken'
                            />
                            {errors.longestRide && (<p className='text-white  outline-black'>{errors.longestRide.message}</p>)}
                        </div>

                    </div>

                </div> */}

                {/* YEAR DEFINING MOMENTS */}
                {/* <div className='w-full py-5 mx-auto' >

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
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1 '
                                htmlFor="full_name">
                                FAVOURITE RIDE
                            </label>

                            <input
                                {...register("favRide",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 4, message: "must be above 4 alphabets" },
                                        maxLength: { value: 20, message: "must be below 20 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='favRide'
                                name='favRide'
                                placeholder='Favourite Ride of the Year'
                            />
                            {errors.favRide && (<p className='text-white  outline-black'>{errors.favRide.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold font-sans uppercase text-text-primary mb-1' htmlFor="full_name">HARDEST RIDE</label>
                            <input
                                {...register("hardestRide",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 4, message: "must be above 4 alphabets" },
                                        maxLength: { value: 20, message: "must be below 20 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='hardestRide'
                                name='hardestRide'
                                placeholder='Hardest Ride of the Year'
                            />
                            {errors.hardestRide && (<p className='text-white  outline-black'>{errors.hardestRide.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="full_name">
                                FAVOUTITE LOCATION
                            </label>
                            <input
                                {...register("favLocation",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 4, message: "must be above 4 alphabets" },
                                        maxLength: { value: 20, message: "must be below 20 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='favLocation'
                                name='favLocation'
                                placeholder='Favourite Location of the Year'
                            />
                            {errors.favLocation && (<p className='text-white  outline-black'>{errors.favLocation.message}</p>)}
                        </div>


                    </div>

                </div> */}

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
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1 '
                                htmlFor="full_name">
                                ONE WORD SAYS IT ALL
                            </label>
                            <input
                                {...register("oneWord",
                                    {
                                        required: { value: true, message: "field required*" },
                                        minLength: { value: 1, message: "must be above a alphabet" },
                                        maxLength: { value: 20, message: "must be below 20 alphabets" },
                                        pattern: { value: /^[A-Za-z\s]+$/i, message: "only alphabets are allowed" }
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="text"
                                id='oneWord'
                                name='oneWord'
                                placeholder='One Word for your Riding Year' />

                            {errors.oneWord && (<p className='text-white outline-black'>{errors.oneWord.message}</p>)}
                        </div>

                        <div className='flex flex-col my-5 w-[90%] mx-auto'>
                            <label
                                className='font-semibold font-sans uppercase text-text-primary mb-1'
                                htmlFor="fav_photo">
                                Favourite Photo
                            </label>
                            <input
                                {...register('favPhoto',
                                    {
                                        required: { value: true, message: "field required*" },
                                    })}
                                className='py-2 px-3 border border-black w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md'
                                type="file"
                                accept="image/*"
                                id='favPhoto'
                                name='favPhoto'
                            />

                            {errors.favPhoto && (<p className='text-white outline-black'>{errors.favPhoto.message}</p>)}
                        </div>


                    </div>

                </div>

                <div className=' w-[30%] mx-auto mb-3 sm:my:5 md:my-6 lg:my-8 flex justify-center items-center'>
                    <Button value="SUBMIT" delay={false} type="submit" isSubmitting={isSubmitting} />
                </div>

            </form>

        </div>
    )
}

export default Form