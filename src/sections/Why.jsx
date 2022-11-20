import React from "react";
import Title from "../components/Title";
import { GoPlay } from "react-icons/go";
import "../styles/sections/Why.scss";
import { motion } from "framer-motion";
import {
  contentWhyAnimate,
  videoWhyAnimate,
  headWhyAnimate,
} from "../Animation";
import { useScroll } from "../components/useScroll";

const Why = () => {
  const [element, controls] = useScroll();
  return (
    <div className="why-container" id="why" ref={element}>
      <div className="container">
        <motion.div
          className="head"
          variants={headWhyAnimate}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title content="Why CRYO ?" color="pink" lineCenter={true} />
          <p>
            Always stay updated with the technologies thus we help our clients
            by giving the best solutions for their needs.
          </p>
        </motion.div>
        <div className="content">
          <motion.div
            className="video"
            variants={videoWhyAnimate}
            animate={controls}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <GoPlay />
          </motion.div>
          <motion.div
            className="info"
            variants={contentWhyAnimate}
            animate={controls}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <ul>
              <li>Over 10+ years of industry wide experience</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to receive service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Why;
