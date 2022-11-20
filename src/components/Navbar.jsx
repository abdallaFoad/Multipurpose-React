import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { motion } from "framer-motion";
import { navbarAnimate } from "../Animation";
import BrandName from "./BrandName";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navbarToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <motion.div
      className={`navbar ${toggleNav === true ? "active" : ""}`}
      variants={navbarAnimate}
      transition={{ delay: 0.3 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapsible-button">
          {!toggleNav ? (
            <GiHamburgerMenu onClick={navbarToggle} />
          ) : (
            <MdClose onClick={navbarToggle} />
          )}
        </div>
      </div>
      <div className="nav">
        <div className="links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#why">Services</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#blogs">Blog</a>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
