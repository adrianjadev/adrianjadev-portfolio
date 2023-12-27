import { motion } from "framer-motion"

const sliderIconVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "0",
        opacity: 900,
        transition: {
            repeat: Infinity,
            // repeatType: "mirror",
            duration: 100,
        }
    }
}

const Icon = () => {
    return (
        <div className="icon">

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

            <svg height="2500" viewBox="3.7 3.7 43.6 43.6" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d" /><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" /><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" /></svg>

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />

        </div >
    )
}

export default Icon
