import React from 'react';
import './CV_Templates.css'
import ADD from '../images/add.png'
import CV2 from '../images/CV2.png'
import CV3 from '../images/CV3.jpg'
import CV4 from '../images/CV4.png'
import CV5 from '../images/CV5.jpg'
import CV6 from '../images/CV6.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

const CV_Dashboard = () => {

  return (
  <div className="CV_Dashboard_MainContainer">
        <div className="CVTitle"><ScrollAnimation animateIn="fadeInLeft delay-0s"><p>Your CV's</p></ScrollAnimation></div>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-0s"><div className="AddCV"><img className="ADD" src={ADD} /><p>ADD New CV</p></div></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-1s"><img src={CV2} /></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-2s"><img src={CV3} /></ScrollAnimation>
      <ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-0s"><img src={CV4} /></ScrollAnimation>
  </div>
  );
}

export default CV_Dashboard;