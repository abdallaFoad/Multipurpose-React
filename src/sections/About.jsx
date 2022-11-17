import React from 'react';
import Title from '../components/Title';
import '../styles/sections/About.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="details">
          <Title content="About CRYO" color="blue" />
          <p>
            We Believe that everyone deserves to have a website or online store.
            Innovation and simplicity make us happy. Our mission is to help
            people achieve what they have passionate about it.
          </p>
          <p>
            We are excited to simplify SEO for everyone through software,
            education, or community.
          </p>
          <Button content="Why cryo?" />
        </div>
        <div className="cards">
          <Card icon={<BsFillCalendarFill />} content="Innovative Ideas" />
          <Card icon={<BiSupport />} content="Planning" />
          <Card icon={<HiLightBulb />} content="Communication" />
          <Card icon={<SiGooglemessages />} content="24 * 7 Support" />
        </div>
      </div>
    </div>
  );
}

export default About