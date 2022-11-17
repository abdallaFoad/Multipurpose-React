import React from 'react'
import "../styles/components/Card.scss";


const Card = ({icon, content}) => {
  return (
    <div className='card'>
      <div>
        {icon}
      </div>
      <h2>{content}</h2>
    </div>
  )
}

export default Card