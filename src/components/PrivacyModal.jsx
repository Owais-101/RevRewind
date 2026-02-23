import { useState } from 'react'
import { CgDanger } from "react-icons/cg";
import { useNavigate } from 'react-router';


const PrivacyModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()


    // func when modal is opened
    const openModal = () => {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset'
    }

    const deleteData = () => {
        localStorage.clear()
        document.body.style.overflow = 'unset'
        setIsOpen(false)
        alert('Your data has been deleted ✅');
        navigate('/')
    }

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={openModal}
                className=' cursor-pointer px-5 py-3 rounded-xl mt-16 bg-red-600 outline-none text-white font-sans flex items-center gap-5'> Privacy and Data <span className='text-2xl'><CgDanger /></span> </button>

            {/* Modal */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed h-screen inset-0 bg-black/70 flex items-center justify-center z-[999]'
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='bg-gradient-to-br from-[#0E5F5B] to-[#0a4a46] border-2 border-[#F6C515]/40 rounded-xl p-8 max-w-[420px] w-[90%] shadow-[6px_6px_0px_0px_#000]'
                    >
                        {/* Icon */}
                        <p className='text-4xl text-center mb-3'>🔒</p>

                        {/* Title */}
                        <h2 className='font-bebas text-2xl text-text-primary tracking-widest text-center mb-4'>
                            Your Data, Your Control
                        </h2>

                        {/* Text */}
                        <p className='font-barlow text-sm text-white/85 leading-7 mb-6 text-center'>
                            Your photo and personal details are saved only in your device's{' '}
                            <strong className='text-text-primary'>Local Storage</strong>.
                            <br /><br />
                            The developer of this app has{' '}
                            <strong className='text-text-primary'>absolutely no access</strong> to your data. Nothing is sent to any server or stored in any database.
                            <br /><br />
                            If you wish to delete your data, press the button below.
                        </p>

                        {/* Buttons */}
                        <div className='flex gap-3'>
                            <button
                                onClick={deleteData}
                                className='flex-1 font-bebas text-lg tracking-widest bg-[#e8352a] text-white border-none rounded-lg px-2 py-3 cursor-pointer'
                            >
                                Delete My Data
                            </button>

                            <button
                                onClick={closeModal}
                                className='flex-1 font-bebas text-lg tracking-widest bg-transparent text-text-primary border border-text-primary rounded-lg py-3 cursor-pointer'
                            >
                                Got It ✓
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default PrivacyModal