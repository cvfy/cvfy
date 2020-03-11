import React from "react";
import Linkedin from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {" "}
      <div className="FooterRow">
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
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/cookies-policy">Cookies Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="FooterRow">
        <div className="Copyright">
          <p className="copyright-text">
            Copyright &copy; 2020 All Rights Reserved by <a href="#">CV|FY</a>.
          </p>
        </div>
        <ul className="social-icons">
          <li>
            <a className="facebook" href="#">
              <img className="socialIcon" src={Linkedin} alt="icon" />
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <img className="socialIcon" src={Facebook} alt="icon" />
            </a>
          </li>
          <li>
            <a className="dribbble" href="#">
              <img className="socialIcon" src={Twitter} alt="icon" />
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <img className="socialIcon" src={Instagram} alt="icon" />
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  );
};

export default Footer;
