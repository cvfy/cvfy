import React from "react";
import JumboPic from "../../assets/JumboPic2.png";
import "../../styles/Templates.scss";

const Jumbotron = () => {
  return (
    <div className="JumbotronCVTemplates">
      <div className="JumboLeft">
        <h1>Be Bold and use our Job-winning CV Templates</h1>
        <p>
          Each template is expertly designed and follows the exact “resume
          rules” hiring managers look for. Stand out and get hired faster with
          field-tested resume templates.
        </p>
      </div>
      <div className="JumboRight">
        <img alt="jumboPic" className="animated fadeIn" src={JumboPic} />
      </div>
    </div>
  );
};

export default Jumbotron;
