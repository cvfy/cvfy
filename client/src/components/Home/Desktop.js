import React from "react";
import wallpaper from "../../assets/mainPagePic.svg";

const Desktop = () => {
  return (
    <div className="LPContainer">
      <div className="DesktopLeft">
        <h1>Here will be a very very cool Title!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>
        <div className="GroupButtons">
          <button className="signUpButton">Sign Up</button>
          <button className="learnMoreButton">Learn More</button>
        </div>
      </div>
      <div className="DesktopRight">
        <img src={wallpaper} alt="wallpaper" />
      </div>
    </div>
  );
};

export default Desktop;
