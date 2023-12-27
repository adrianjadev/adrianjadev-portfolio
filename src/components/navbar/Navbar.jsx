import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <i>adrianja<b>dev/&gt;</b></i>
                </motion.span>
                <div className="social">
                    <a href="https://github.com/adrianjadev">
                        <FaGithubSquare className="react-icon" />
                    </a>
                    <a href="mailto:adrianjademanaday@gmail.com">
                        <TfiEmail className="react-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/adrianjadev">
                        <FaLinkedin className="react-icon" />
                    </a>
                    <a href="#">

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

// // Font awesome pixel sizes relative to the multiplier.
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px