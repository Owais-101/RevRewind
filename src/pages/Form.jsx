import React from 'react'

const Form = () => {
    return (
        <div className='w-full bg-bg-primary pb-10'>

            <h1 className='text-center text-white text-shadow-3d text-2xl md:text-4xl lg:text-6xl tracking-wide font-bebas pt-10' >Please fill the form below</h1>

            <form className='w-[90%] h-screen border-2 mx-auto mt-5 shadow-[5px_5px_0px_0px_#000000] lg:shadow-[10px_10px_0px_0px_#000000] '>

                {/* BASIC DETAILS DIV */}
                <div className='w-full py-5 mx-auto' >

                    <h2 className='text-center text-white text-shadow-3d font-bebas text-xl md:text-3xl lg:text-5xl mb-3'>BASIC INFO</h2>

                    <div className='w-[90%] py-2 border-2 border-black mx-auto font-barlow' >

                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold text-white mb-1 ' htmlFor="full_name">Full Name</label>
                            <input className='py-2 px-3 border border-white w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Enter your Name' />
                        </div>
                        <div className='flex flex-col my-5 w-[90%] mx-auto' >
                            <label className='font-semibold text-white mb-1' htmlFor="full_name">Age</label>
                            <input className='py-2 px-3 border border-white w-full mx-auto bg-[#082e2c] text-[#e0f5f4] rounded-md' type="text" id='full_name' name='full_name' placeholder='Enter your Age' />
                        </div>
                        
                        

                    </div>

                </div>

            </form>

        </div>
    )
}

export default Form