import React from "react";
import "../../styles/Desktop.css";
import wallpaper from "../../assets/wallpaper.png";
import welcomeCats from "../../assets/welcome_cats.svg";

const Desktop = () => {
  return (
    <div className="Desktop_Main_Container">
      <div className="Desktop_UpperSide">
        <div className="TitleText">
          <h1>Here will be a very very cool Title!</h1>
          <img src={welcomeCats} alt="welcome Cats" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </p>
          <div className="desktop_UpperSide_Buttons_Section">
            <button className="signUpButton">Sign Up</button>
          </div>
        </div>
        <div className="MonitorLeftSide">
          <div className="Monitor">
            <div className="MonitorFrame">
              <img src={wallpaper} alt="wallpaper" />
            </div>
            <div className="MonitorFoot"></div>
            <div className="MonitorStand"></div>
            <button className="learnMoreButton">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
