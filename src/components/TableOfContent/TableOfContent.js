import React from "react";
import "./tableOfContent.css";

const handleClick = id => {
  console.log(id);
  let el = document.getElementById(id.target);
};

const TableOfContent = () => {
  return (
    <div className="table-of-content">
      <section>
        <h2>Table Of Content:</h2>
        <ul>
          <li>
            <button onClick={handleClick}>The CVFY Content</button>
          </li>
          <li>
            <button onClick={handleClick}>Acceptable Use</button>
          </li>
          <li>
            <button onClick={handleClick}>Security</button>
          </li>
          <li>
            <button onClick={handleClick}>
              Links to Other Software/Websites/Services
            </button>
          </li>
          <li>
            <button onClick={handleClick}>
              Warranty, Refunds and Premium Account
            </button>
          </li>
          <li>
            <button onClick={handleClick}>Governing Law</button>
          </li>
          <li>
            <button onClick={handleClick}>Changes</button>
          </li>
          <li>
            <button onClick={handleClick}>
              Breaches of these terms of use
            </button>
          </li>
          <li>
            <button onClick={handleClick}>Termination</button>
          </li>
        </ul>
      </section>
      <section>
        <div id="cvfyContent" className="termsParagraphs">
          <h2>The CVFY Content</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="acceptableUse" className="termsParagraphs">
          <h2>Acceptable Use</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="security" className="termsParagraphs">
          <h2>Security</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="linksToOtherSoftware" className="termsParagraphs">
          <h2>Links To Other Software/Websites/Services</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="warranty" className="termsParagraphs">
          <h2>Warranty, Refunds and Premium Account</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="governingLaw" className="termsParagraphs">
          <h2>Governing Law</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="changes" className="termsParagraphs">
          <h2>Changes</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="breaches" className="termsParagraphs">
          <h2>Breaches of these Terms of Use</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
        <div id="termination" className="termsParagraphs">
          <h2>Termination</h2>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
          <p>
            Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin, rump
            biltong burgdoggen prosciutto short loin leberkas turducken. Chuck
            sausage beef ribs ground round strip steak, chicken tongue capicola
            spare ribs t-bone swine turkey tenderloin. Shoulder jowl pancetta
            short loin capicola chuck beef corned beef flank swine. Ham buffalo
            kevin pork chop chuck.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TableOfContent;
