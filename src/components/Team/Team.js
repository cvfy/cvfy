import React from "react";
import Member from "../../images/user.png";
import "./Team.css";

const Team = () => {
  return (
    <div className="teamWrapper">
      <div className="divH2Team">
        <h2 className="h2Team">Our team</h2>
      </div>

      <div className="gang">
        <div className="memberPhoto">
          <img src={Member} className="memberImg" alt="member"></img>
        </div>
        <div className="memberName">ALBERT EDELMANN</div>
        <div className="memberTitle">Frontend</div>
        <div className="memberContact">
          <div className="portfolio">
            Portfolio: <a href="https://ajedelmann.github.io/portfolio/"></a>
          </div>
          <div className="gitHub">Github account</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
