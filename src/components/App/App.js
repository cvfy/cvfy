import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'
import Jumbotron_Dashboard from '../Jumbotron_Dashboard'
import '../Jumbotron_D.css'
import './App.css'
import '../../styles/animate.css'
import Footer from '../Footer'
import '../Footer.css'

import GlobalStyle from '../../styles/Global'
import CV_Dashboard from '../CV_Dashboard';
import Cover_Dashboard from '../Cover_Dashboard';
import ScrollAnimation from 'react-animate-on-scroll';

const App = () => {

  return (
    <div className="MainPage">
      <Navbar />
      <Jumbotron_Dashboard />
      <div className="dashboard">
      <CV_Dashboard />
      <Cover_Dashboard />
      </div>
      <Footer />
      <GlobalStyle />
      </div>
  
  );
}

export default App;
