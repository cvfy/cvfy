import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Section1 = () => {
  return (
    <div className="LPContainer CardsContainer">
      <h1>Benefits of using CVFY</h1>
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
          <h2>Draggable Layout</h2>
          <p>
            Our powerful layout optimizer will make sure that your content is
            perfectly aligned.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card2_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/color/48/000000/add.png" />
          </div>
          <h2>Templates</h2>
          <p>
            Choose from a wide variety of modern and edgy templates that fit
            your needs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card3_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/color/48/000000/connectdevelop.png" />
          </div>
          <h2>Import data</h2>
          <p>
            Import your Linkedin profile and edit the data to have a perfect
            resume in a mather of seconds!
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          className="Section_1_Card Card4_color"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="S1_Card_Icon">
            <img src="https://img.icons8.com/nolan/64/combo-chart.png" />
          </div>
          <h2>PDF Format</h2>
          <p>
            Finished your edits? Download the Template in PDF format to have it
            always on hand.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Section1;
