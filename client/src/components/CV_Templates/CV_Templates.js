import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import CV1 from "../../assets/CV1.jpeg";
import Basic from "../../assets/basic-template.jpg";
import Modern from "../../assets/modern-template.jpg";
import Professional from "../../assets/professional-template.jpg";
import Executive from "../../assets/executive-template.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Jumbotron from "./Jumbotron";

const CV_Templates = () => {
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
          <img src={Executive} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Modern} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Professional} />
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
          <img src={Basic} />
        </ScrollAnimation>
      </div>
      <Footer />
    </>
  );
};

export default CV_Templates;
