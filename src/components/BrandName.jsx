import React from 'react';
import '../styles/components/BrandName.scss';



const BrandName = ({inFooter = false}) => {
  return (
    <div className='brand'>
      <span className={`span ${inFooter === true ? "inFooter" : ""}`}>cryo</span>
    </div>
  );
}

export default BrandName;