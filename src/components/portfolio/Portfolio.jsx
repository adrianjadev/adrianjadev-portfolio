import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Welcome to our React Commerce portfolio, where cutting-edge technology meets seamless user experiences in the world of online retail. At the intersection of innovation and functionality, our team has crafted dynamic and responsive e-commerce solutions using the powerful React library.",
    },
    {
        id: 2,
        title: "Next.js Commerce",
        img: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Step into the future of e-commerce with our Next.js Commerce portfolio, where speed, versatility, and exceptional user experiences converge. Harnessing the power of Next.js, our team has crafted innovative online shopping solutions that prioritize performance, scalability, and a seamless developer experience.",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Welcome to our Vanilla.js E-commerce portfolio, where simplicity meets versatility in the realm of online retail. Our team takes pride in delivering efficient, lightweight, and user-friendly e-commerce solutions powered by the pure essence of JavaScript — Vanilla.js.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Embark on a harmonious journey through our Vanilla.js Music App portfolio, where the artistry of code meets the rhythm of seamless user experiences. Our team is passionate about delivering music applications that are elegantly crafted with Vanilla.js, ensuring a lightweight, responsive, and immersive musical adventure.",
    }
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"
                        ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 50,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar">
                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div >
    )
}

export default Portfolio
