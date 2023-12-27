import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-450%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 100,
        }
    }
};


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    {/* All of the children elements will render the same initial and animate prop of the parent element */}
                    <motion.h3 variants={textVariants} >Hi there! I'm</motion.h3>
                    <motion.h2 variants={textVariants} >ADRIAN JADE MANADAY</motion.h2>
                    <motion.h1 variants={textVariants} >
                        <motion.b whileHover={{ color: "orange" }}>I'm a Full Stack Software Developer;
                        </motion.b> <br /> && <motion.span whileHover={{ color: "#d6204e" }}>UI/UX Designer</motion.span>
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button
                            variants={textVariants}
                            whileHover={{ background: "orange", color: "black" }}
                            href>
                            See the Latest Works
                        </motion.button>
                        <motion.button
                            variants={textVariants}
                            whileHover={{ background: "orange", color: "black" }}>
                            Contact Me!
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" alt="scroll-image" animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                {/* Next.js &#9679; Node.js &#9679; MongoDB &#9679; Express.JS */}

                Full Stack Software Developer
            </motion.div>
            {/* <div className="imageContainer">
                <img src="/adrianjadev-hd.png" alt="adrianjadev-hd" />
            </div> */}
        </div >
    )
}

export default Hero
