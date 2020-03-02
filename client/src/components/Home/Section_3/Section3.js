import React from "react";
import "./Section_3.css";
import Image from "../../../assets/undraw_folder.png";
import ScrollAnimation from "react-animate-on-scroll";

const Section5 = () => {
  return (
    <div className="Section_5_Main_Container">
      <ScrollAnimation
        className="Section_5_Main_Container"
        animateIn="fadeInUp delay-0s"
        animateOnce="true"
      >
        <iframe
          className="video_container"
          src="https://fast.wistia.net/embed/iframe/lcu5575a21"
        />
      </ScrollAnimation>
    </div>
  );
};
export default Section5;
