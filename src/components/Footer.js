import React from 'react';
import Linkedin from '../images/Linkedin.png';
import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import Instagram from '../images/Instagram.png';
import ScrollAnimation from 'react-animate-on-scroll';


const Footer = () => {

  return (
      <div className="FooterContainer">
        <div className="FooterUpperBorder"></div>
    <footer class="site-footer">
      <div class="container">
        <div class="FirstFooterRow">
        <ScrollAnimation animateIn="fadeInLeft delay-0s">
          <div class="FooterAboutSection">
            <h6>ABOUT</h6>
            <br />
            <hr />
            <br />
            <p class="text-justify">CVFY.io<i>Filling CV was never so Easy </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. </p>
          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn delay-0s"><div class="FooterCategoriesSection">
            <h6>CAREER RESOURCES</h6>
            <br />
            <hr />
            <br />
            <ul class="footer-links">
              <li><a href="#">How to Write a CV</a></li>
              <li><a href="#">How to Write a Cover Letter</a></li>
              <li><a href="#">Job Search Platforms</a></li>
              <li><a href="#">Professional Platforms</a></li>
              <li><a href="#">Platforms to enhance your Skills</a></li>
            </ul>
          </div></ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight delay-0s">
            <div class="LinksSection">
            <h6>QUICK LINKS</h6>
            <br />
            <hr />
            <br />
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
          </ScrollAnimation>
        </div>
        <hr />
      </div>
      <div class="SecondFooterRow">
    <div class="Copyright">
    <ScrollAnimation animateIn="bounceInUp delay-0s"><p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by     <a href="#">CV|FY</a>.
            </p></ScrollAnimation>
          </div>
          <div class="SocialMedia">
          <ScrollAnimation animateIn="bounceInRight delay-0s"><ul class="social-icons">
              <li><a class="facebook" href="#"><img className="socialIcon"  src={Linkedin} alt="icon" /></a></li>
              <li><a class="twitter" href="#"><img className="socialIcon" src={Facebook} alt="icon" /></a></li>
              <li><a class="dribbble" href="#"><img className="socialIcon" src={Twitter} alt="icon" /></a></li>
              <li><a class="linkedin" href="#"><img className="socialIcon" src={Instagram} alt="icon" /></a></li>   
            </ul></ScrollAnimation>
          </div>
      </div>
</footer>
</div>
  );
}

export default Footer;