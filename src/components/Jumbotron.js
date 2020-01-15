import React, { useState } from 'react';
import JumboPic from '../images/JumboPic2.png'


const Jumbotron = () => {

  return (
  <div className="Jumbotron">
      <div className="JumboText"><div className="JumboTextBox"><h1 className="animated fadeInLeft">Here will be a Cool Title</h1><p className="animated fadeInUp delay-1s">Your CV is the first point of contact between you and your next potential employer. It is important that it is succinct and presented in an easy to read format using a simple font, minimal styling and the use of bullet points to break down information. To ensure your CV stands out in your next job application follow our recommended structure and tips below:</p></div></div>
      <div className="JumboPic"><img className="animated fadeIn delay-1s" src={JumboPic} /></div>
  </div>
  );
}

export default Jumbotron;