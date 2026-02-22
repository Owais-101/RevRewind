import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useUser } from '../context/UserProvider'

const Audio = ({ rewindAudio , summaryAudio }) => {

    const { audio } = useUser()
    const rewindAudioRef = useRef()
    const summaryAudioRef = useRef()

    useEffect(() => {
        if (audio) {
            rewindAudioRef.current.play();
        } else {
            rewindAudioRef.current.pause();
        }

        summaryAudioRef.current.play();
    }, [audio]);


    return (
        <div>

            <audio ref={rewindAudioRef} src={rewindAudio}></audio>
            <audio ref={summaryAudioRef} src={summaryAudio}></audio>

        </div>
    )
}

export default Audio