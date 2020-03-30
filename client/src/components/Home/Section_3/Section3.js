import React from "react";
import { NavLink } from "react-router-dom";

import Image from "../../../assets/researching.svg";

const Section3 = () => {
  return (
    <div className="LPContainer BlueTintBg">
      <div className="DescriptionSide">
        <h2>Demand Attention!</h2>
        <p>
          Stand out from the herd of job applicants with one of our
          professionally-designed resume templates. Get noticed; get hired!
        </p>
        <div className="GroupButtons">
          <button className="CVTbutton" style={{ cursor: "pointer" }}>
            <NavLink
              to="/cv-templates"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              CV Templates
            </NavLink>
          </button>
          <button className="CLTbutton">
            <NavLink to="/cover_letter-templates">
              Cover Letter Templates
            </NavLink>
          </button>
        </div>
      </div>
      <div className="PictureSide">
        <img src={Image} alt="sec3_image" />
      </div>
    </div>
  );
};
export default Section3;
