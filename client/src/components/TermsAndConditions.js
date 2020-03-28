import React from "react";
import "../styles/TermsAndConditions.css";
import Navbar from "./navbar/Navbar";
import "../styles/Navbar.css";
import Footer from "./Footer";
import scrollToComponent from "react-scroll-to-component";

class TermsAndConditions extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick() {
    scrollToComponent(this.className);
  }

  render() {
    return (
      <div className="mainContainer">
        <Navbar />
        <div className="intro">
          <h1>
            CVFY
            <br />
            Terms of Use
          </h1>

          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.
          </p>
        </div>
        <div className="table-of-content">
          <section>
            <h2>Table Of Content:</h2>
            <ul>
              <li key="1">
                <button onClick={() => scrollToComponent(this.CvfyContent)}>
                  The CVFY Content
                </button>
              </li>
              <li key="2">
                <button onClick={() => scrollToComponent(this.AcceptableUse)}>
                  Acceptable Use
                </button>
              </li>
              <li key="3">
                <button onClick={() => scrollToComponent(this.Security)}>
                  Security
                </button>
              </li>
              <li key="4">
                <button
                  onClick={() =>
                    scrollToComponent(this.SoftwareWebsitesServices)
                  }
                >
                  Links to Other Software/Websites/Services
                </button>
              </li>
              <li key="5">
                <button
                  onClick={() => scrollToComponent(this.WarrantyRefundsPremium)}
                >
                  Warranty, Refunds and Premium Account
                </button>
              </li>
              <li key="6">
                <button onClick={() => scrollToComponent(this.GoverningLaw)}>
                  Governing Law
                </button>
              </li>
              <li key="7">
                <button onClick={() => scrollToComponent(this.Changes)}>
                  Changes
                </button>
              </li>
              <li key="8">
                <button onClick={() => scrollToComponent(this.Breaches)}>
                  Breaches of these terms of use
                </button>
              </li>
              <li key="9">
                <button onClick={() => scrollToComponent(this.Termination)}>
                  Termination
                </button>
              </li>
            </ul>
          </section>
          <section>
            <div id="cvfyContent" className="termsParagraphs">
              <h2
                ref={section => {
                  this.CvfyContent = section;
                }}
              >
                The CVFY Content
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.AcceptableUse = section;
                }}
              >
                Acceptable Use
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.Security = section;
                }}
              >
                Security
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.SoftwareWebsitesServices = section;
                }}
              >
                Links To Other Software/Websites/Services
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.WarrantyRefundsPremium = section;
                }}
              >
                Warranty, Refunds and Premium Account
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.GoverningLaw = section;
                }}
              >
                Governing Law
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.Changes = section;
                }}
              >
                Changes
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.Breaches = section;
                }}
              >
                Breaches of these Terms of Use
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.Termination = section;
                }}
              >
                Termination
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TermsAndConditions;
