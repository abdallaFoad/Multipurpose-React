import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import BrandName from "./BrandName";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navbarToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className={`navbar ${toggleNav === true ? "active" : ""}`}>
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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <Button content='Contact'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
