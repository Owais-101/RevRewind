import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const scrambleVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const ScrambleText = ({ text, trigger }) => {

    const [displayText, setDisplayText] = useState(() =>
        text.split('').map(() =>
            chars[Math.floor(Math.random() * chars.length)]
        ).join('')
    );

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split('').map((char, i) => {
                    if (i < iteration) return char;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('')
            );
            iteration += 0.5;
            if (iteration >= text.length) clearInterval(interval);
        }, 50);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return (
        <motion.span
            variants={scrambleVariant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className='text-4xl md:text-6xl font-bebas text-white tracking-wider text-shadow-3d flex items-center'
        >
            {displayText}
        </motion.span>
    );
};

export default ScrambleText;