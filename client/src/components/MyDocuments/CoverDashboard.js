import React from "react";
import "../../styles/dashboard.css";
import ADD2 from "../../assets/add.png";
import Cover2 from "../../assets/Cover2.png";
import Cover3 from "../../assets/Cover3.png";
import Cover4 from "../../assets/Cover4.png";
import ScrollAnimation from "react-animate-on-scroll";

const CoverDashboard = () => {
  return (
    <div className="Cover_Dashboard_MainContainer">
      <div className="CoverLetterTitle">
        <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="0.5s">
          <p>Your Cover Letters</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        className="cvBox2"
        animateIn="fadeIn"
        animateOnce="true"
        duration="0.5s"
      >
        <div className="AddCV">
          <img className="ADD" src={ADD2} />
          <p>ADD New Cover Letter</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="cvBox2"
        animateIn="fadeIn"
        animateOnce="true"
        duration="0.5s"
      >
        <img src={Cover2} />
      </ScrollAnimation>
      <ScrollAnimation
        className="cvBox2"
        animateIn="fadeIn"
        animateOnce="true"
        duration="0.5s"
      >
        <img src={Cover3} />
      </ScrollAnimation>
      <ScrollAnimation
        className="cvBox2"
        animateIn="fadeIn"
        animateOnce="true"
        duration="0.5s"
      >
        <img src={Cover4} />
      </ScrollAnimation>
    </div>
  );
};

export default CoverDashboard;
