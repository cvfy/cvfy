import React from "react";
import wallpaper from "../../assets/mainPagePic.svg";
import { NavLink } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="LPContainer">
      <div className="DesktopLeft">
        <h1>The smart, flexible CV builder you'll love!</h1>
        <p>
          Creating a Professional Resume and Cover Letter has never been so{" "}
          <b>simple</b>!
        </p>
        <div className="GroupButtons">
          <button className="signUpButton" style={{ cursor: "pointer" }}>
            <NavLink
              to="/register"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sign Up
            </NavLink>
          </button>
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
