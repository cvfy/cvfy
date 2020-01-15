import React from 'react';
import './CV_Templates.css'
import CV1 from '../images/CV1.jpeg'
import CV2 from '../images/CV2.png'
import CV3 from '../images/CV3.jpg'
import CV4 from '../images/CV4.png'
import CV5 from '../images/CV5.jpg'
import CV6 from '../images/CV6.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

const CV_Templates = () => {

  return (
  <div className="CV_Templates_MainContainer">
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-0s"><img src={CV1} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-1s"><img src={CV2} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-2s"><img src={CV3} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-0s"><img src={CV4} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-1s"><img src={CV5} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-2s"><img src={CV6} /></ScrollAnimation>
  </div>
  );
}

export default CV_Templates;