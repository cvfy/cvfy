import React from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'
import './App.css'
import '../../styles/animate.css'
import Footer from '../Footer'
import '../Footer.css'
import Desktop from '../Desktop_Comp/Desktop_Comp'

import GlobalStyle from '../../styles/Global'

const App = () => {

  return (
    <div className="MainPage">
      <Navbar />
      <Desktop />
      <Footer />
      <GlobalStyle />
      </div>
  
  );
}

export default App;
