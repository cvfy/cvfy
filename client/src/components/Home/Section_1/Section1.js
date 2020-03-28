import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Section1 = () => {
  return (
    <div className="LPContainer CardsContainer">
      <h1>Babadi bubudy bop</h1>
      <div className="Cards">
        <ScrollAnimation
          className="Section_1_Card Card1_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
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
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card2_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img alt="s1_card_icon" src="https://img.icons8.com/color/48/000000/add.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card3_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img alt="s1_card_icon" src="https://img.icons8.com/color/48/000000/connectdevelop.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card4_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img alt="s1_card_icon" src="https://img.icons8.com/nolan/64/combo-chart.png" />
          </div>
          <h2>Title</h2>
          <p>
            here should be some nice description that would be interesting and
            cool
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Section1;
