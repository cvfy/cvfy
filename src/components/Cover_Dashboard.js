import React from 'react';
import './CV_Templates.css'
import ADD2 from '../images/add.png'
import Cover2 from '../images/Cover2.png'
import Cover3 from '../images/Cover3.png'
import Cover4 from '../images/Cover4.png'
import Cover5 from '../images/Cover5.png'
import Cover6 from '../images/Cover6.png'
import ScrollAnimation from 'react-animate-on-scroll';

const Cover_Dashboard = () => {

  return (
  <div className="Cover_Dashboard_MainContainer">
    <div className="CoverLetterTitle"><ScrollAnimation animateIn="fadeInRight delay-0s"><p>Your Cover Letters</p></ScrollAnimation></div>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-0s"><div className="AddCV"><img className="ADD" src={ADD2} /><p>ADD New Cover Letter</p></div></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-1s"><img src={Cover2} /></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-2s"><img src={Cover3} /></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-3s"><img src={Cover4} /></ScrollAnimation>
  </div>
  );
}

export default Cover_Dashboard;