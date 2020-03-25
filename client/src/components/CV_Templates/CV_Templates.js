import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import CV1 from "../../assets/CV1.jpeg";
import Basic from "../../assets/basic-template.jpg";
import Modern from "../../assets/modern-template.jpg";
import Professional from "../../assets/professional-template.jpg";
import Executive from "../../assets/executive-template.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Jumbotron from "./Jumbotron";
import { frontUrl } from "../../config";

class CV_Templates extends Component {
  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = `${frontUrl}/create-cv`;
  };

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <div className="CVTemplates_Container">
          <ScrollAnimation
            className="cvBox"
            animateIn="fadeIn"
            animateOnce="true"
            duration="0.5s"
          >
            <img src={Executive} onClick={() => this.setLocalStorage("")} />
          </ScrollAnimation>
          <ScrollAnimation
            className="cvBox"
            animateIn="fadeIn"
            animateOnce="true"
            duration="0.5s"
          >
            <img src={Modern} onClick={() => this.setLocalStorage("")} />
          </ScrollAnimation>
          <ScrollAnimation
            className="cvBox"
            animateIn="fadeIn"
            animateOnce="true"
            duration="0.5s"
          >
            <img src={Professional} onClick={() => this.setLocalStorage("")} />
          </ScrollAnimation>{" "}
          <ScrollAnimation
            className="cvBox"
            animateIn="fadeIn"
            animateOnce="true"
            duration="0.5s"
          >
            <img src={CV1} />
          </ScrollAnimation>{" "}
          <ScrollAnimation
            className="cvBox"
            animateIn="fadeIn"
            animateOnce="true"
            duration="0.5s"
          >
            <img src={Basic} onClick={() => this.setLocalStorage("")} />
          </ScrollAnimation>
        </div>
        <Footer />
      </>
    );
  }
}

export default CV_Templates;
