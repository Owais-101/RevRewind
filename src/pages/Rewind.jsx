import React, { useState } from 'react';
import RewindSection from '../components/RewindSection';
import { motion } from 'motion/react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import ScrambleText from '../components/ScrambleText';
import { useUser } from '../context/UserProvider';
import Audio from '../components/Audio';
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import summer from '../assets/audio/summer.mp3'


const Rewind = () => {
    const [current, setCurrent] = useState(0);
    const { user, setAudio, audio } = useUser();

    const handWaveAnimationVariant = {
        initial: {
            rotate: 0,
            opacity: 0
        },
        animate: {
            rotate: [0, 10, -5, 10, 0],
            opacity: 1,
            transition: {
                rotate: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
            }
        }
    };

    const sections = [

        // BASIC INFO 
        <RewindSection >
            <span className='text-xl md:text-2xl lg:text-3xl font-sans text-text-primary uppercase'>
                Meet
                <motion.span
                    variants={handWaveAnimationVariant}
                    initial="initial"
                    animate="animate"
                    style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
                >
                    &nbsp;👋
                </motion.span>
                <br />
            </span>

            <ScrambleText text={user?.fullName} trigger={true} />

            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase' ><span className='inline-block uppercase'><ScrambleText text={String(user?.age)} /></span> &nbsp; years old <br />
            </span>

            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase '> hails from <span className='inline-block'><ScrambleText text={user?.place} /></span> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase' > <br /> and lives for the open road.</span>
        </RewindSection >,

        // // BIKE INFO
        <RewindSection >

            <span className='inline-block'><ScrambleText text={user?.bikeBrand} trigger={current} /> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase' > &nbsp; that rides like a <br /> <span className='inline-block uppercase'>
                <ScrambleText text={user?.bikeType} trigger={current} /></span> <br />
            </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase ' >rules like a king <br /> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase' >the streets had one name for it <br /> </span>
            <span className='text-4xl md:text-6xl lg:text-7xl font-bebas text-white tracking-wider text-shadow-3d items-center inline-block '> <span className='inline-block'><ScrambleText text={user?.nickName} trigger={current} /></span> ... </span>

        </RewindSection >,

        // RIDING RELATED STATS
        <RewindSection >

            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'><span className='inline-block'><ScrambleText text={String(user?.kmsRidden)} trigger={current} /></span> kilometers of scars, <br /> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'> <span className='inline-block'><ScrambleText text={String(user?.ridesTaken)} trigger={current} /></span> stories worth telling, <br /> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'> <span className='inline-block'><ScrambleText text={String(user?.longestRide)} trigger={current} /></span> km stretch that changed everything. </span>

        </RewindSection >,

        // RIDES RELATED FAV,HARDEST
        <RewindSection >

            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'><span className='inline-block'><ScrambleText text={user?.favRide} trigger={current} /></span> softened him, <br /> </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'> <span className='inline-block'><ScrambleText text={user?.hardestRide} trigger={current} /></span> ? &nbsp; that was a war, and he won.  <br /> </span>

        </RewindSection >,

        // ONE WORD 
        <RewindSection summary={true}  >

            <span className='text-xl md:text-2xl lg:text-4xl font-sans text-text-primary uppercase'> if this year had a name, it would be <br /> </span>
            <span className='inline-block'><ScrambleText text={user?.oneWord} trigger={current} /></span>

        </RewindSection >,


    ]

    let indexing = sections.length - 1;

    return (
        <>
            <Audio rewindAudio={summer} />
            <div className="h-screen overflow-hidden relative">
                <motion.div
                    animate={{ y: `-${current * 100}vh` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="flex flex-col"
                >
                    {sections.map((section, i) => (
                        <div key={i} className="h-screen">
                            {section}
                        </div>
                    ))}
                </motion.div>

                {/* Button */}
                {current < indexing &&
                    <button onClick={() => setCurrent(prev => prev + 1)}
                        className={`fixed bottom-10 right-10 z-50 bg-bg-primary border-2 outline-none text-text-primary p-3 flex justify-center items-center rounded-full font-bebas text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:bg-text-primary hover:text-black transition-all`}>
                        <FaChevronDown />
                    </button>}

                {current > 0 &&
                    <button
                        className={`fixed bottom-10 right-25 md:right-27 lg:right-30 z-50 bg-bg-primary border-2 outline-none text-text-primary p-3 flex justify-center items-center rounded-full font-bebas text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:bg-text-primary hover:text-black transition-all`}>
                        <FaChevronUp onClick={() => setCurrent(prev => prev - 1)} />
                    </button>
                }

                {!audio &&
                    <button onClick={() => setAudio(prev => !prev)}
                        className={`fixed bottom-10 right-55 md:right-58 lg:right-62 z-50 bg-bg-primary border-2 outline-none text-text-primary p-3 flex justify-center items-center rounded-full font-bebas text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:bg-text-primary hover:text-black transition-all`}>
                        <FaPlayCircle />
                    </button>}

                {audio &&
                    <button onClick={() => setAudio(prev => !prev)}
                        className={`fixed bottom-10 right-55 md:right-58 lg:right-62 z-50 bg-bg-primary border-2 outline-none text-text-primary p-3 flex justify-center items-center rounded-full font-bebas text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:bg-text-primary hover:text-black transition-all`}>
                        <FaPauseCircle />
                    </button>}

            </div>



        </>
    )
}

export default Rewind