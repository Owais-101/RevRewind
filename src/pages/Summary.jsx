import React, { use, useRef } from 'react'
import rider from '../assets/images/rider.jpg'
import { useUser } from '../context/UserProvider';
import PrivacyModal from '../components/PrivacyModal';



const Summary = () => {

  const { user } = useUser();

  // Array for riding stats sections beacuse its repeatitive.
  const { favRide, hardestRide, longestRide } = user;
  const rides = [
    { label: 'Favourite', value: favRide },
    { label: 'Hardest', value: hardestRide },
    { label: 'Longest', value: longestRide },
  ]

  return (
    <div className='w-full py-10 bg-bg-primary flex flex-col items-center justify-center' >

      <div className='w-[90%] md:w-[55%] lg:w-[45%] h-fit py-5 bg-linear-to-br from-bg-primary to-[#0a4a46] rounded-xl px-6 border-2 border-text-primary shadow-[7px_7px_0px_0px_#000000] lg:shadow-[15px_15px_0px_0px_#000000] flex flex-col gap-3 md:gap-4 lg:gap-6'>

        {/* Header */}
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-bebas text-2xl md:text-4xl lg:text-6xl text-text-primary text-shadow-3d'>Rider &nbsp; Rewind</p>
            <p className='font-bebas text-4xl md:text-6xl lg:text-8xl tracking-widest text-white'>2025</p>
          </div>

          <div className='w-22 h-22 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-black border-2 border-text-primary rounded-full overflow-hidden shadow-[0_0_15px_rgba(246,197,21,0.5)]'>
            <img className='w-full h-full object-cover' src={user?.photo} alt="" />
          </div>
        </div>

        {/* Name & Age */}
        <div className='border-t-2 border-t-text-primary/25 pt-3 md:pt-4 lg:pt-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bebas tracking-wider text-shadow-3d text-text-primary'>{user?.fullName}</h1>
          <div className='text-white text-base md:text-lg lg:text-xl'>
            <p>{user?.age} years old, <span className='text-text-primary'>&nbsp;{user?.nickName}</span></p>
          </div>
        </div>

        {/* Total KMs */}
        <div className='border-t-2 border-t-text-primary/25 pt-3 md:pt-4 lg:pt-6 flex flex-col items-center'>
          <p className='text-base md:text-xl lg:text-2xl text-white'>Total Ridden</p>
          <h1 className='text-5xl md:text-7xl lg:text-9xl font-bebas text-shadow-3d text-text-primary tracking-wider'>{user?.kmsRidden}</h1>
          <p className='uppercase text-yellow-400 font-sans text-sm md:text-lg lg:text-xl'>kilometers ...</p>
        </div>

        {/* 3 Rides */}
        <div className='border-t-2 border-t-text-primary/25 pt-3 md:pt-4 lg:pt-6 flex justify-between items-stretch overflow-hidden'>
          {rides.map((label, i) => (
            <div key={i} className='w-[30%] text-center border border-text-primary py-3 px-2 rounded-lg'>
              <p className='uppercase text-text-primary text-sm md:text-xl lg:text-2xl font-bebas tracking-widest '>{label.label}</p>
              <h2 className='font-bebas text-white line-clamp-2 wrap-break-word md:text-2xl lg:text-3xl'>{label.value}</h2>
            </div>
          ))}
        </div>

        {/* Bike & Hobby */}
        <div className='border-t-2 border-t-text-primary/25 pt-3 md:pt-4 lg:pt-6 flex justify-between items-stretch overflow-hidden'>
          <div className='w-[48%] text-center border border-text-primary py-3 px-2 rounded-lg'>
            <p className='uppercase text-text-primary text-sm md:text-xl lg:text-2xl font-bebas tracking-widest'>partner in crime</p>
            <h2 className='font-bebas text-white line-clamp-2 wrap-break-word md:text-2xl lg:text-3xl'>{user?.bikeBrand}</h2>
            <p className='text-[rgba(255,255,255,0.4)] text-sm md:text-lg lg:text-xl'>{user?.bikeType}</p>
          </div>

          <div className='w-[48%] text-center border border-text-primary py-3 px-2 rounded-lg'>
            <p className='uppercase text-text-primary text-sm md:text-xl lg:text-2xl font-bebas tracking-widest'>lives for</p>
            <h2 className='font-bebas text-white line-clamp-2 wrap-break-word md:text-2xl lg:text-3xl'>Bike Riding</h2>
            <p className='text-[rgba(255,255,255,1)] text-sm md:text-lg lg:text-xl'>💛</p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className='border-t-2 border-t-text-primary/25 pt-3 md:pt-4 lg:pt-6'>
          <h1 className='text-md md:text-2xl lg:text-4xl font-bebas text-text-primary'>dont ever stop riding </h1>
        </div>

      </div>

      

      <PrivacyModal />

    </div>
  )
}

export default Summary