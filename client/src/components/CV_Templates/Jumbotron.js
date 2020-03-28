import React from "react";
import JumboPic from "../../assets/JumboPic2.png";
import "../../styles/Templates.scss";

const Jumbotron = () => {
  return (
    <div className="JumbotronCVTemplates">
      <div className="JumboLeft">
        <h1>Here will be a Cool Title</h1>
        <p>
          Your CV is the first point of contact between you and your next
          potential employer. It is important that it is succinct and presented
          in an easy to read format using a simple font, minimal styling and the
          use of bullet points to break down information. To ensure your CV
          stands out in your next job application follow our recommended
          structure and tips below:
        </p>
      </div>
      <div className="JumboRight">
        <img alt="jumboPic" className="animated fadeIn" src={JumboPic} />
      </div>
    </div>
  );
};

export default Jumbotron;
