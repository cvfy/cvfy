import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/QuickLinks.scss";
import Member from "../../assets/user.png";

class AboutUs extends Component {
  state = {
    text:
      "„Casamentiss faiz malandris se pirulitá. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Aenean aliquam molestie leo, vitae iaculis nisl.”"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeText = e => {
    // console.log(e.currentTarget.title);
    if (e.currentTarget.title === "mission") {
      this.setState({
        text:
          "„Mais vale um bebadis conhecidiss, zque um alcoolatra anonimis. Viva Forevis aptent taciti sociosqu ad litora torquent.  Atirei o pau no gatis, per gatis num morreus. Mé faiz elementum girarzis, nisi eros vermeio.”"
      });
    } else if (e.currentTarget.title === "vision") {
      return this.setState({
        text:
          "„Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Si num tem leite então bota uma pinga aí cumpadi!”"
      });
    } else {
      return this.setState({
        text:
          "„Casamentiss faiz malandris se pirulitá. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Aenean aliquam molestie leo, vitae iaculis nisl.”"
      });
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="AboutUsWrapper">
          <div className="topCont ainer">
            <div className="textDiv">
              <p>{this.state.text}</p>
            </div>
            <div className="diagram">
              <div className="whatWeDo" title="weDo" onClick={this.changeText}>
                <p className="diagramText">What we do?</p>
              </div>
              <div
                className="ourMission"
                title="mission"
                onClick={this.changeText}
              >
                <p className="diagramText">Our Mission</p>
              </div>
              <div
                className="ourVision"
                title="vision"
                onClick={this.changeText}
              >
                <p className="diagramText">Our Vision</p>
              </div>
            </div>
          </div>

          <div className="teamWrapper">
            <h2>Our team</h2>

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
                      <i className="fab fa-github githubIcon"></i>
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
                <div className="memberTitle">Backend</div>
                <div className="memberContact">
                  <div className="portfolio">
                    Portfolio:{" "}
                    <a href="https://ajedelmann.github.io/portfolio/">
                      https://ajedelmann.github.io/portfolio/
                    </a>
                  </div>
                  <div className="gitHub">
                    <a href="https://github.com/AJEdelmann">
                      <i className="fab fa-github githubIcon"></i>
                      https://github.com/AlexandrMel
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
                      <i className="fab fa-github githubIcon"></i>
                      https://github.com/vladharagea
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default AboutUs;
