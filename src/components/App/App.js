import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'
import Jumbotron_Cover_Letter from '../Jumbotron_Cover_Letter'
import '../Jumbotron.css'
import './App.css'
import '../../styles/animate.css'
import Footer from '../Footer'
import '../Footer.css'

import GlobalStyle from '../../styles/Global'
import Cover_Templates from '../Cover_Templates';

const App = () => {

  return (
    <div className="MainPage">
      <Navbar />
      <Jumbotron_Cover_Letter />
      <Cover_Templates />
      <Footer />
      <GlobalStyle />
      </div>
  
  );
}

export default App;
