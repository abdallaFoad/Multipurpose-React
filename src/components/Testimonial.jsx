import React from 'react'
import '../styles/components/Testimonial.scss';


const Testimonial = ({ description ,name,content}) => {
  return (
    <div className="test-container">
      <div className='quote'>
        <span>&#10077;</span>
      </div>
      <div className="content">{content}</div>
      <div className="info">
        <div className="name">{name}</div> 
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Testimonial