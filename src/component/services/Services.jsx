import "./services.scss"
import { animate, motion, useInView } from "framer-motion"


const variants ={
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>What will I Do for You..</p>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt= ""/>
                <h1>My Services</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>QA Engineer</h2>
                <p>Ensures software quality and reliability through testing, bug detection, and performance optimization for a seamless user experience.</p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>UI / UX Designer</h2>
                <p>Create user interfaces that are attractive to the eye and give customers a positive first impression.</p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>   
                <h2>Frontend Developer</h2>
                <p>Produces visually appealing apps and websites that allow consumers to engage with the site or app.
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}> 
                <h2>Full Stack Developer</h2>
                <p>Professional creation of websites of excellent standards with latest technologies.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
};

export default Services