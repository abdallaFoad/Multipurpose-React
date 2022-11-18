import React from 'react';
import '../styles/components/Blog.scss';
import Button from './Button';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Blog = ({ img, title, description }) => {
  return (
    <div className="blog-container">
      <div className="img">
        <img src={img} alt="imgBlog" />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Button content="Read More" icon={<HiOutlineArrowNarrowRight 
        />} color='white'/>
      </div>
    </div>
  );
};

export default Blog;