import React from 'react';
import '../styles/sections/Blogs.scss';
import Title from '../components/Title';
import Button from '../components/Button';
import Blog from '../components/Blog';
import img1 from '../assets/blogImage1.jpg';
import img2 from '../assets/blogImage2.jpg';
import img3 from '../assets/blogImage3.jpg';
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { cardAnimate, headWhyAnimate } from "../Animation";

const Blogs = () => {
    const [element, controls] = useScroll();
  return (
    <div className="blogs-container" id="blogs" ref={element}>
      <div className="container">
        <motion.div
          className="head"
          variants={headWhyAnimate}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title content="Blogs" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            variants={cardAnimate}
            animate={controls}
            img={img1}
            title="Top list of Mistakes to Avoid During MVP Development"
            description="When there appears an idea to create a startup, have to take into
            account all the risks you will face and values them thought full u.
            Also as a rule..."
          />
          <Blog
            variants={cardAnimate}
            animate={controls}
            img={img2}
            title="A Day in the life on an Engineering Manager"
            description="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
          />
          <Blog
            variants={cardAnimate}
            animate={controls}
            img={img3}
            title="How to Build a Strong Remote Work Culture"
            description="Drink Water is the company VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
          />
        </div>
        <Button content="View All" color="blue" />
      </div>
    </div>
  );
}

export default Blogs;