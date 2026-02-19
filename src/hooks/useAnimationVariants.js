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

    return {
        fadeInAnimationVariant
    }

}

export default useAnimationVariants