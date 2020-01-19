import React from 'react';
import './CV_Templates.css'
import Cover1 from '../images/Cover1.png'
import Cover2 from '../images/Cover2.png'
import Cover3 from '../images/Cover3.png'
import Cover4 from '../images/Cover4.png'
import Cover5 from '../images/Cover5.png'
import Cover6 from '../images/Cover6.png'
import ScrollAnimation from 'react-animate-on-scroll';

const CV_Templates = () => {

  return (
  <div className="CV_Templates_MainContainer">
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-0s"><img src={Cover1} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-1s"><img src={Cover2} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-2s"><img src={Cover3} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-0s"><img src={Cover4} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-1s"><img src={Cover5} /></ScrollAnimation>
      <ScrollAnimation className="cvBox" animateIn="fadeInUp delay-2s"><img src={Cover6} /></ScrollAnimation>
  </div>
  );
}

export default CV_Templates;