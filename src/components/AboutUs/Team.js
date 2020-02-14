import React from "react";
import Member from "../../assets/user.png";
import "../../styles/team.css";

const Team = () => {
  return (
    <div className="teamWrapper">
      <div className="divH2Team">
        <h2 className="h2Team">Our team</h2>
      </div>

      <div className="gang">
        <div className="memberDiv">
          <div className="memberPhoto">
            <img src={Member} className="memberImg" alt="member"></img>
          </div>
          <div className="memberName">ALBERT EDELMANN</div>
          <div className="memberTitle">Frontend</div>
          <div className="memberContact">
            <div className="portfolio">
              Portfolio:{" "}
              <a href="https://ajedelmann.github.io/portfolio/">
                https://ajedelmann.github.io/portfolio/
              </a>
            </div>
            <div className="gitHub">
              <a href="https://github.com/AJEdelmann">
                <i class="fab fa-github githubIcon"></i>
                https://github.com/AJEdelmann
              </a>
            </div>
          </div>
        </div>

        <div className="memberDiv">
          <div className="memberPhoto">
            <img src={Member} className="memberImg" alt="member"></img>
          </div>
          <div className="memberName">ALEXANDR MELNIC</div>
          <div className="memberTitle">Frontend</div>
          <div className="memberContact">
            <div className="portfolio">
              Portfolio:{" "}
              <a href="https://ajedelmann.github.io/portfolio/">
                https://ajedelmann.github.io/portfolio/
              </a>
            </div>
            <div className="gitHub">
              <a href="https://github.com/AJEdelmann">
                <i class="fab fa-github githubIcon"></i>
                https://github.com/AJEdelmann
              </a>
            </div>
          </div>
        </div>

        <div className="memberDiv">
          <div className="memberPhoto">
            <img src={Member} className="memberImg" alt="member"></img>
          </div>
          <div className="memberName">VLAD HARAGEA</div>
          <div className="memberTitle">Frontend</div>
          <div className="memberContact">
            <div className="portfolio">
              Portfolio:{" "}
              <a href="https://ajedelmann.github.io/portfolio/">
                https://ajedelmann.github.io/portfolio/
              </a>
            </div>
            <div className="gitHub">
              <a href="https://github.com/AJEdelmann">
                <i class="fab fa-github githubIcon"></i>
                https://github.com/AJEdelmann
              </a>
            </div>
          </div>
        </div>

        <div className="memberDiv">
          <div className="memberPhoto">
            <img src={Member} className="memberImg" alt="member"></img>
          </div>
          <div className="memberName">ALMAS</div>
          <div className="memberTitle">Frontend</div>
          <div className="memberContact">
            <div className="portfolio">
              Portfolio:{" "}
              <a href="https://ajedelmann.github.io/portfolio/">
                https://ajedelmann.github.io/portfolio/
              </a>
            </div>
            <div className="gitHub">
              <a href="https://github.com/AJEdelmann">
                <i class="fab fa-github githubIcon"></i>
                https://github.com/AJEdelmann
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
