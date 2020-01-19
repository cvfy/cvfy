import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'
import Jumbotron from '../Jumbotron'
import '../Jumbotron.css'
import './App.css'
import '../../styles/animate.css'
import Footer from '../Footer'
import '../Footer.css'

import GlobalStyle from '../../styles/Global'
import CV_Templates from '../CV_Templates';

const App = () => {

  return (
    <div className="MainPage">
      <Navbar />
      <Jumbotron />
      <CV_Templates />
      <Footer />
      <GlobalStyle />
      </div>
  
  );
}

export default App;
