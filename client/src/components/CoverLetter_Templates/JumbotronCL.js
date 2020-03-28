import React from "react";
import JumboPic from "../../assets/JumboPic3.png";
import "../../styles/Templates.scss";

const JumbotronCL = () => {
  return (
    <div className="JumbotronCoverLetterTemplates">
      <div className="JumboLeft">
        <h1>Why should I Use a Cover Letter Template?</h1>
        <p>
          To promote your personal brand, it is recommended to use the same
          design, fonts and color themes on your cover letter template as in
          your resume, and this is possible with the following templates.
        </p>
      </div>
      <div className="JumboRight">
        <img className="animated fadeIn" src={JumboPic} />
      </div>
    </div>
  );
};

export default JumbotronCL;
