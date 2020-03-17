import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import CV1 from "../../assets/CV1.jpeg";
import CV2 from "../../assets/CV2.png";
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
          <img src={CV1} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={CV2} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={CV2} />
        </ScrollAnimation>{" "}
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={CV2} />
        </ScrollAnimation>{" "}
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={CV2} />
        </ScrollAnimation>
      </div>
      <Footer />
    </>
  );
};

export default CV_Templates;
