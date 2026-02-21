//  CUSTOM HOOK FOR DIFFERENT TYPE OF REPEATING ANIMATIONS FROM FRAMER MOTION

const useAnimationVariants = () => {

    // Motion variant for both heading,sub-Heading and form texts.
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 100
        },

        whileInView: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })

    };

    // Motion variant for static marquee pop-up animation
    const StaticMarqueePopUpVariant = (delay = 0) => ({
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 25,
                delay: delay,
            }
        }
    })

    //Motion variant for the div holding subHeading
    const popUpAnimationVariant = {
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 1,
            transition: {
                delay: 0.5
            }
        }
    };

    return {
        fadeInAnimationVariant,
        StaticMarqueePopUpVariant,
        popUpAnimationVariant,
    }

}

export default useAnimationVariants