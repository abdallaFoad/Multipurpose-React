import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../styles/sections/Footer.scss";
import BrandName from "../components/BrandName";
import Contact from "../components/Contact";
import Icon from "../components/Icon";
import { motion } from "framer-motion";
import { fromDown, fromUp, videoWhyAnimate } from "../Animation";
import { useScroll } from "../components/useScroll";

const Footer = () => {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="top">
          <motion.div
            className="newsLetter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName inFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <div className="email">
              <input
                type="email"
                placeholder="Please Enter Your Email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) =>
                  (e.target.placeholder = "Please Enter Your Email")
                }
              />
              <button>
                <RiSendPlaneFill />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h4>Industries</h4>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Mobile App Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">IOS App Development</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h4>Get In Touch</h4>
            <div className="all-info">
              <div className="info">
                <NavLink
                  to="/map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={<HiOutlineMail />} />
                </NavLink>
                <Contact name="Email" address="foadabdalla314@gmail.com" />
              </div>
              <div className="info">
                <a href="#phone">
                  <Icon icon={<AiFillPhone />} />
                </a>
                <Contact name="Phone" address="01144704339" />
              </div>
              <div className="info">
                <NavLink to="/map">
                  <Icon icon={<GoLocation />} />
                </NavLink>
                <Contact name="Location" address="Egypt" />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="bottom"
          variants={videoWhyAnimate}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <div className="copyRight">
            <p>Copyright &copy; 2022. All Rights Reserved.</p>
          </div>
          <div className="links">
            <a
              href="https://www.facebook.com/abdalla.foad.50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<RiFacebookFill className="facebook" />} />
            </a>
            <a
              href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR3cVpszml-H46u4m3b6Kmr51ag8abvsL1f9SFGVBqndZrlMraBAHrKSzM8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<AiFillInstagram className="instagram" />} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdofoad1179674/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<AiFillLinkedin className="linkedin" />} />
            </a>
            <a
              href="https://twitter.com/abdallafoad74?fbclid=IwAR3kCOmht_taY7AnJT7rgRTqX5pdG0PrDRQ5bBWcJlUipBvMrp_IwWRMFM0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<AiOutlineTwitter className="twitter" />} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
