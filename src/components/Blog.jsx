import React from 'react';
import '../styles/components/Blog.scss';
import Button from './Button';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';


const Blog = ({ img, title, description, variants, animate }) => {
  return (
    <motion.div className="blog-container" variants={variants} animate={animate} transition={{duration:1}}>
      <div className="img">
        <img src={img} alt="imgBlog" />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Button
          content="Read More"
          icon={<HiOutlineArrowNarrowRight />}
          color="white"
        />
      </div>
    </motion.div>
  );
};

export default Blog;