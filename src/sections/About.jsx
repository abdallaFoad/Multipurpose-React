import React from "react";
import Title from "../components/Title";
import "../styles/sections/About.scss";
import Button from "../components/Button";
import Card from "../components/Card";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import { aboutTextAnimate } from "../Animation";
import { useScroll } from "../components/useScroll";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          variants={aboutTextAnimate}
          animate={controls}
          transition={{ delay: 0.2, stiffness: 300 }}
        >
          <Title content="About CRYO" color="blue" />
          <p>
            We Believe that everyone deserves to have a website or online store.
            Innovation and simplicity make us happy. Our mission is to help
            people achieve what they have passionate about it.
          </p>
          <p>
            We are excited to simplify SEO for everyone through software,
            education, or community.
          </p>
          <Button content="Why cryo?" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card icon={<BsFillCalendarFill />} content="Innovative Ideas"  controls={controls}/>
          <Card icon={<BiSupport />} content="Planning"  controls={controls}/>
          <Card icon={<HiLightBulb />} content="Communication"  controls={controls}/>
          <Card icon={<SiGooglemessages />} content="24 * 7 Support" controls={controls} />
        </div>
      </div>
    </div>
  );
};

export default About;
