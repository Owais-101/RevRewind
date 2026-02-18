import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'

const LandingPage = () => {
    return (
        <main className=' relative h-screen w-full bg-[#0E5F5B] flex flex-col justify-center items-center'>
            <Heading />
            <div className='mt-36'>
                <Button />
            </div>
        </main>
    )
}

export default LandingPage