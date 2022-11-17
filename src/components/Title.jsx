import React from 'react'
import '../styles/components/Title.scss';


const Title = ({content, color, lineCenter = false}) => {
  return (
    <div className={`title ${lineCenter === true ? "center" : ""}`}>
      <h2>{content}</h2>
      <div className={`${color}`}>
        <span></span>
      </div>
    </div>
  );
}

export default Title