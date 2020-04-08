import React from "react";
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="FooterRow FooterAround">
        <div className="columns">
          <h3>ABOUT</h3>
          <p>
            CVFY.io Filling CV was never so Easy is an initiative to help the
            upcoming programmers with the code. Scanfcode focuses on providing
            the most efficient code or snippets as the code wants to be simple.
          </p>
        </div>
        <div className="columns">
          <h3>QUICK LINKS</h3>
          <ul>
            <li key="1">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li key="2">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li key="3">
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li key="4">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li key="5">
              <NavLink to="/cookies-policy">Cookies Policy</NavLink>
            </li>
            <li key="6">
              <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </li>
            <li key="7">
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="FooterRow FooterSpace">
        <div className="Copyright">
          <p className="copyright-text">
            Copyright &copy; 2020 All Rights Reserved by <a href="/#">CV|FY</a>.
          </p>
        </div>
        <ul className="social-icons">
          <li>
            <a href="/#">
              <img alt="iconImage" className="IconImage" src={Facebook} />
            </a>
          </li>
          <li>
            <a href="/#">
              <img alt="iconImage" className="IconImage" src={Linkedin} />
            </a>
          </li>
          <li>
            <a href="/#">
              <img alt="iconImage" className="IconImage" src={Instagram} />
            </a>
          </li>
          <li>
            <a href="/#">
              <img alt="iconImage" className="IconImage" src={Twitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
