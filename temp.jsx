import React from 'react'

const temp = () => {
    return (
        <div>

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
                        <label className='font-semibold font-sans uppercase text-text-primary mb-1' value="">BIKE TYPE</label>
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

             The Road Counted Everything
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

        </div>
    )
}

export default temp