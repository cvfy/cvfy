import React, { Component } from "react";
import "./AboutUs.css";
import Team from "../Team/Team";

class AboutUs extends Component {
  state = {
    text:
      "„Casamentiss faiz malandris se pirulitá. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Aenean aliquam molestie leo, vitae iaculis nisl.”"
  };

  changeText = e => {
    console.log(e.currentTarget.title);
    if (e.currentTarget.title === "mission") {
      this.setState({
        text:
          "„Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Viva Forevis aptent taciti sociosqu ad litora torquent.  Atirei o pau no gatis, per gatis num morreus. Mé faiz elementum girarzis, nisi eros vermeio.”"
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
      <div className="wrapper">
        <div className="topContainer">
          <div className="textDiv">{this.state.text}</div>
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
            <div className="ourVision" title="vision" onClick={this.changeText}>
              <p className="diagramText">Our Vision</p>
            </div>
          </div>
        </div>
        <div className="bottomContainer"></div>

        <Team></Team>

        <div className="contactUs">Contact us</div>
      </div>
    );
  }
}

export default AboutUs;
