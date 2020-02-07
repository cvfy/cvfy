import React from "react";
import "./Section_1.css";
import ScrollAnimation from "react-animate-on-scroll";

const Section1 = () => {
  return (
    <div className="Section_1_Main_Container">
      <ScrollAnimation
        className="Section_1_Card Card1_color"
        animateIn="fadeInUp delay-0s"
      >
        <div className="Section_1_Card Card1_color">
          <div className="S1_Card_Icon">
            <img
              src="https://img.icons8.com/cotton/64/000000/rocket.png"
              alt="icon"
            />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="Section_1_Card Card2_color"
        animateIn="fadeInUp delay-1s"
      >
        <div className="Section_1_Card Card2_color">
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/color/48/000000/add.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="Section_1_Card Card3_color"
        animateIn="fadeInUp delay-2s"
      >
        <div className="Section_1_Card Card3_color">
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/color/48/000000/connectdevelop.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="Section_1_Card Card4_color"
        animateIn="fadeInUp delay-3s"
      >
        <div className="Section_1_Card Card4_color">
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/nolan/64/combo-chart.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Section1;
