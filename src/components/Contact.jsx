import React from 'react';
import '../styles/components/Contact.scss';

const Contact = ({name, address}) => {
  return (
    <div className="contact">
          <span>{name}</span>
          <p>{address}</p>
    </div>
  );
}

export default Contact