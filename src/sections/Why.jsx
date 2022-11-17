import React from 'react'
import Title from '../components/Title';
import {GoPlay} from 'react-icons/go';
import '../styles/sections/Why.scss';


const Why = () => {
  return (
    <div className="why-container">
      <div className="container">
        <div className="head">
          <Title content="Why CRYO ?" color="pink" lineCenter={true} />
          <p>
            Always stay updated with the technologies thus we help our clients
            by giving the best solutions for their needs.
          </p>
        </div>
        <div className="content">
          <div className="video">
            <GoPlay />
          </div>
          <div className="info">
            <ul>
              <li>Over 10+ years of industry wide experience</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to receive service request 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why