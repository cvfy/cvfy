import React from "react";
import Linkedin from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterUpperBorder"></div>
      <footer className="site-footer">
        <div className="container">
          <div className="FirstFooterRow">
            <div className="FooterAboutSection">
              <h6>ABOUT</h6>
              <br />
              <hr />
              <br />
              <p className="text-justify">
                CVFY.io<i>Filling CV was never so Easy </i> is an initiative to
                help the upcoming programmers with the code. Scanfcode focuses
                on providing the most efficient code or snippets as the code
                wants to be simple.{" "}
              </p>
            </div>
            {/* <div className="FooterCategoriesSection">
              <h6>CAREER RESOURCES</h6>
              <br />
              <hr />
              <br />
              <ul className="footer-links">
                <li>
                  <a href="#">How to Write a CV</a>
                </li>
                <li>
                  <a href="#">How to Write a Cover Letter</a>
                </li>
                <li>
                  <a href="#">Job Search Platforms</a>
                </li>
                <li>
                  <a href="#">Professional Platforms</a>
                </li>
                <li>
                  <a href="#">Platforms to enhance your Skills</a>
                </li>
              </ul>
            </div> */}

            <div className="LinksSection">
              <h6>QUICK LINKS</h6>
              <br />
              <hr />
              <br />
              <ul className="footer-links">
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
                  <NavLink to="/terms-and-conditions">
                    Terms and Conditions
                  </NavLink>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className="SecondFooterRow">
          <div className="Copyright">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by <a href="#">CV|FY</a>
              .
            </p>
          </div>
          <div className="SocialMedia">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
