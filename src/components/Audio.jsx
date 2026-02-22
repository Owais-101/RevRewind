import React, { useEffect } from 'react'
import { useRef } from 'react'
import summer from '../assets/audio/summer.mp3'
import { useUser } from '../context/UserProvider'

const Audio = () => {

    const { audio } = useUser()
    const audioRef = useRef()

    useEffect(() => {
        console.log("useEffect chala", audio);
        if (audio) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [audio]);


    return (
        <div>

            <audio ref={audioRef} src={summer}></audio>

        </div>
    )
}

export default Audio