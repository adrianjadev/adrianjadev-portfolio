import "./techstacks.scss"
import { motion } from "framer-motion"
import Icon from "./Icon"

const sliderIconVariants = {
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
}

const Techstacks = () => {
    return (
        <div className="techstacks">
            <div className="textContainer">
                <h1>My Tech Stacks</h1>
            </div>
            <div className="container">
                <div className="wrapper">
                    <div className="iconContainer">
                        <Icon />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Techstacks
