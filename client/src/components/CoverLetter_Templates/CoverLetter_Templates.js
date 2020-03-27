import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/Templates.scss";
import ExecutiveCover from "../../assets/executive-cover-template.jpg";
import ModernCover from "../../assets/modern-cover-template.jpg";
import ProfessionalCover from "../../assets/professional-cover-template.jpg";
import BasicCover from "../../assets/basic-cover-template.jpg";
import Cover6 from "../../assets/Cover6.png";
import ScrollAnimation from "react-animate-on-scroll";
import JumbotronCL from "./JumbotronCL";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

const CoverLetter_Templates = () => {
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
            <JumbotronCL />
            <div className="CLTemplates_Container">
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
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
                <img src={ModernCover} onClick={goToModernCoverTemplate} />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
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
                <img src={BasicCover} onClick={goToBasicCoverTemplate} />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img src={Cover6} />
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
