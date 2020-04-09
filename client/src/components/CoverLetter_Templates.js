import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import "../styles/Templates.scss";
import ExecutiveCover from "../assets/executive-cover-template.jpg";
import ModernCover from "../assets/modern-cover-template.jpg";
import ProfessionalCover from "../assets/professional-cover-template.jpg";
import BasicCover from "../assets/basic-cover-template.jpg";
import Cover6 from "../assets/Cover6.png";
import ScrollAnimation from "react-animate-on-scroll";
import JumboPic from "../assets/JumboPic3.png";
import { CoverLetterContext } from "../contexts/CoverLetterContext";

const CoverLetter_Templates = () => {
  // This function make sure we scroll the page view to top when we enter the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CoverLetterContext.Consumer>
      {context => {
        const {
          goToProfessionalCoverTemplate,
          goToModernCoverTemplate,
          goToBasicCoverTemplate,
          goToExecutiveCoverTemplate
        } = context;
        return (
          <>
            <Navbar />
            {/*  Here starts Jumbotron section*/}
            <div className="JumbotronCoverLetterTemplates">
              <div className="JumboLeft">
                <h1>Why should I Use a Cover Letter Template?</h1>
                <p>
                  To promote your personal brand, it is recommended to use the
                  same design, fonts and color themes on your cover letter
                  template as in your resume, and this is possible with the
                  following templates.
                </p>
              </div>
              <div className="JumboRight">
                <img
                  alt="jumboPic"
                  className="animated fadeIn"
                  src={JumboPic}
                />
              </div>
            </div>
            {/*  Here ends Jumbotron section*/}

            <div className="CLTemplates_Container">
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="executiveCover_pic"
                  src={ExecutiveCover}
                  onClick={goToExecutiveCoverTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="modernCover_pic"
                  src={ModernCover}
                  onClick={goToModernCoverTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="professionalCover_pic"
                  src={ProfessionalCover}
                  onClick={goToProfessionalCoverTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="basicCover_pic"
                  src={BasicCover}
                  onClick={goToBasicCoverTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img alt="cover6_pic" src={Cover6} />
              </ScrollAnimation>
            </div>
            <Footer />
          </>
        );
      }}
    </CoverLetterContext.Consumer>
  );
};

export default CoverLetter_Templates;
