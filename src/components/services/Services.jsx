import "./services.scss"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const IsInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // whileInView={"animate"}
            ref={ref}
            animate={
                IsInView && "animate"
            }
        >
            <motion.div className="textContainer" variants={variants}>
                <p>Crafting Digital Excellence:<br /> Your Vision, My Code.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{
                        color: "orange"
                    }}>Innovate.</motion.b> Code.</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>Create.</motion.b> Transform.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Responsive Web Design</h2>
                    <p>Crafted for optimal user experience, our responsive web design ensures your site looks stunning and functions seamlessly across various devices, from desktops to smartphones.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Custom Web Development</h2>
                    <p>Elevate your online presence with tailor-made web solutions. We specialize in developing unique, feature-rich websites that align with your brand identity and cater to your specific business needs.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>E-Commerce Solutions</h2>
                    <p>Unlock the potential of online commerce with our comprehensive e-commerce solutions. From user-friendly interfaces to secure payment gateways, we create robust platforms that facilitate smooth and secure transactions for your customers.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Website Maintenance Services</h2>
                    <p>Ensure your website stays fresh and relevant with our reliable maintenance services. We handle updates, security patches, and continuous improvement, allowing you to focus on your business while we keep your online presence running smoothly.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default Services
