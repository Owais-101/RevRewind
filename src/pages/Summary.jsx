import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import Audio from '../components/Audio';
import yay from '../assets/audio/yay.mp3'


const Summary = () => {
  const [pieces, setPieces] = useState(300);
  const { width, height } = useWindowSize();

  useEffect(() => {

    const timer = setTimeout(() => {
      setPieces(0)
    }, 5000)

  }, [])

  return (
    <>
      <Audio summaryAudio={yay} />
      <Confetti
        numberOfPieces={pieces}
        width={width}
        height={height}
      />
      <div className='h-screen w-full bg-bg-primary flex justify-center items-center font-bebas text-8xl tracking-wider '>congratulations</div>
    </>
  )
}

export default Summary