import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Smiley from '../components/Smiley'
import StaticMarquee from '../components/StaticMarquee'

const LandingPage = () => {

    return (
        <>



            <main className=' relative h-screen w-full bg-bg-primary flex flex-col justify-center items-center'>

                <Heading />
                <div className='mt-20 sm:mt-24 md:mt-28 lg:mt-16'>
                    <Button page={'/form'} value={"CREATE MY REWIND"} />
                </div>
            </main>

            <StaticMarquee />
            <StaticMarquee position="top" />


        </>
    )
}

export default LandingPage