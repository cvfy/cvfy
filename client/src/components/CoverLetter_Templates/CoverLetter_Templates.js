import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/Templates.scss";
import Cover1 from "../../assets/Cover1.png";
import Cover2 from "../../assets/Cover2.png";
import Cover3 from "../../assets/Cover3.png";
import Cover4 from "../../assets/Cover4.png";
import Cover5 from "../../assets/Cover5.png";
import Cover6 from "../../assets/Cover6.png";
import ScrollAnimation from "react-animate-on-scroll";
import JumbotronCL from "./JumbotronCL";

const CoverLetter_Templates = () => {
  return (
    <>
      <Navbar />
      <JumbotronCL />
      <div className="CLTemplates_Container">
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover1} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover2} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover3} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover4} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover5} />
        </ScrollAnimation>
        <ScrollAnimation
          className="cvBox"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <img src={Cover6} />
        </ScrollAnimation>
      </div>
      <Footer />
    </>
  );
};

export default CoverLetter_Templates;
