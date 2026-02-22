import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useUser } from '../context/UserProvider'

const Audio = ({ rewindAudio, summaryAudio }) => {

    const { audio } = useUser()
    const rewindAudioRef = useRef()
    const summaryAudioRef = useRef()

    useEffect(() => {
        if (audio && rewindAudioRef.current) {
            rewindAudioRef.current.play();
        } else if (rewindAudioRef.current) {
            rewindAudioRef.current.pause();
        }
    }, [audio]);

    useEffect(() => {
        if (summaryAudio && summaryAudioRef.current) {
            summaryAudioRef.current.play();
        }
    }, [summaryAudio]);

    return (
        <div>

            <audio ref={rewindAudioRef} src={rewindAudio} loop></audio>
            <audio ref={summaryAudioRef} src={summaryAudio}></audio>

        </div>
    )
}

export default Audio