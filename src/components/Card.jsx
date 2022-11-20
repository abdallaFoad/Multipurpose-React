import React from "react";
import "../styles/components/Card.scss";
import { motion } from "framer-motion";
import { cardAnimate } from "../Animation";

const Card = ({ icon, content, controls }) => {
  return (
    <motion.div
      className="card"
      variants={cardAnimate}
      animate={controls}
      transition={{ delay: 0.1 }}
    >
      <div>{icon}</div>
      <h2>{content}</h2>
    </motion.div>
  );
};

export default Card;
