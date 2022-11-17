import React from "react";
import imgWork from "../assets/work.svg";
import Button from "../components/Button";
import "../styles/sections/Starter.scss";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";

const Starter = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <div className="content">
          <h1>
            We Provide Solutions to Help You to Build or Grow Your Business!
          </h1>
          <p>
            A professional web and mobile app development agency with over 100+
            web and app developed. We provide a high- quality service in web and
            mobile app development as well as in design.
          </p>
          <div className="buttons">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </div>
        <div className="image">
          <img src={imgWork} alt="work" />
        </div>
      </div>
    </div>
  );
};

export default Starter;
