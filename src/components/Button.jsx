import React from 'react';
import '../styles/components/Button.scss';


const Button = ({content, icon='', color = 'blue'}) => {
  return  <button className={`${color}`}>
      {content} {icon}
    </button>
  
}

export default Button;