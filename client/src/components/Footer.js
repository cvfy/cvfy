import React from "react";
import Linkedin from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import { NavLink } from "react-router-dom";
import { Lottie } from "@crello/react-lottie";
import facebookIcon from "../assets/Animated-Icons/facebook.json";
import instagramIcon from "../assets/Animated-Icons/instagram.json";
import linkedinIcon from "../assets/Animated-Icons/linkedin.json";
import twitterIcon from "../assets/Animated-Icons/twitter.json";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   facebook: { playingState: "stopped" },
    //   instagram: { playingState: "stopped" },
    //   linkedin: { playingState: "stopped" },
    //   twitter: { playingState: "stopped" }
    // };
    // this.facebookHover = this.facebookHover.bind(this);
    // this.instagramHover = this.instagramHover.bind(this);
    // this.linkedinHover = this.linkedinHover.bind(this);
    // this.twitterHover = this.twitterHover.bind(this);
  }

  // facebookHover() {
  //   this.setState({ facebook: { playingState: "playing" } });
  // }
  // instagramHover() {
  //   this.setState({ instagram: { playingState: "playing" } });
  // }
  // linkedinHover() {
  //   this.setState({ linkedin: { playingState: "playing" } });
  // }
  // twitterHover() {
  //   this.setState({ twitter: { playingState: "playing" } });
  // }

  render() {
    // const facebookOptions = {
    //   loop: false,
    //   autoplay: false,
    //   animationData: facebookIcon,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    // const instagramOptions = {
    //   loop: false,
    //   autoplay: false,
    //   animationData: instagramIcon,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    // const linkedinOptions = {
    //   loop: false,
    //   autoplay: false,
    //   animationData: linkedinIcon,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    // const twitterOptions = {
    //   loop: false,
    //   autoplay: false,
    //   animationData: twitterIcon,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    return (
      <footer>
        <div className="FooterRow FooterAround">
          <div className="columns">
            <h3>ABOUT</h3>
            <p>
              CVFY.io Filling CV was never so Easy is an initiative to help the
              upcoming programmers with the code. Scanfcode focuses on providing
              the most efficient code or snippets as the code wants to be
              simple.
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
        <div className="FooterRow FooterSpace">
          <div className="Copyright">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by <a href="#">CV|FY</a>
              .
            </p>
          </div>
          <ul className="social-icons">
            <li onMouseEnter={this.facebookHover}>
              {/* <Lottie
                config={facebookOptions}
                playingState={this.state.facebook.playingState}
                height={40}
                width={40}
                lottieEventListeners={[
                  {
                    callback: () => {
                      this.setState({ facebook: { playingState: "stopped" } });
                    },
                    name: "complete"
                  }
                ]}
              /> */}
            </li>
            <li onMouseEnter={this.instagramHover}>
              {/* <Lottie
                config={instagramOptions}
                playingState={this.state.instagram.playingState}
                height={40}
                width={40}
                lottieEventListeners={[
                  {
                    callback: () => {
                      this.setState({ instagram: { playingState: "stopped" } });
                    },
                    name: "complete"
                  }
                ]}
              /> */}
            </li>
            <li onMouseEnter={this.linkedinHover}>
              {/* <Lottie
                config={linkedinOptions}
                playingState={this.state.linkedin.playingState}
                height={40}
                width={40}
                lottieEventListeners={[
                  {
                    callback: () => {
                      this.setState({ linkedin: { playingState: "stopped" } });
                    },
                    name: "complete"
                  }
                ]}
              /> */}
            </li>
            <li onMouseEnter={this.twitterHover}>
              {/* <Lottie
                config={twitterOptions}
                playingState={this.state.twitter.playingState}
                height={40}
                width={40}
                lottieEventListeners={[
                  {
                    callback: () => {
                      this.setState({ twitter: { playingState: "stopped" } });
                    },
                    name: "complete"
                  }
                ]}
              /> */}
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
