import React from 'react'
import '../styles/components/Testimonial.scss';
import { motion } from 'framer-motion';

const Testimonial = ({ description, name, content, variants , animate}) => {
  return (
    <motion.div className="test-container" variants={variants} animate={animate}>
      <div className="quote">
        <span>&#10077;</span>
      </div>
      <div className="content">{content}</div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </motion.div>
  );
};

export default Testimonial