import "./portfolio.scss"
import { motion, useScroll, useSpring} from "framer-motion"
import { useRef } from "react"

const items = [
  {
    id: 1,
    title: "Blog App",
    img: "animated-portfolio/public/blog.PNG",
    desc: "UniBlog app is the blogging platform for university student to share their ideas and informations.. "
  },

  {
    id: 2,
    title: "Blog App",
    img: "animated-portfolio/public/blog.PNG",
    desc: "UniBlog app is the blogging platform for university student to share their ideas and informations.. "
  },

  {
    id: 3,
    title: "Pizza Dilivery App",
    img: "animated-portfolio/public/blog.PNG",
    desc: "UniBlog app is the blogging platform for university student to share their ideas and informations.. "
  },

  {
    id: 4,
    title: "Blog App",
    img: "animated-portfolio/public/blog.PNG",
    desc: "UniBlog app is the blogging platform for university student to share their ideas and informations.. "
  },
];

const Single =({ item }) => {
  return<section>{item.title}</section>;
}
const Portfolio = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({ 
    target: ref, 
    offset: ["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
      <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Portfolio