import React from 'react';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'
import './App.css'
import '../../styles/animate.css'
import Footer from '../Footer'
import '../Footer.css'
import Desktop from '../Desktop_Comp/Desktop_Comp'
import Section_1 from '../Section_1/Section_1'
import Section_2 from '../Section_2/Section_2'
import Section_3 from '../Section_3/Section_3'
import Section_4 from '../Section_4/Section_4'
import Section_5 from '../Section_5/Section_5'

import GlobalStyle from '../../styles/Global'

const App = () => {

  return (
    <div className="MainPage">
      <Navbar />
      <Desktop />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Footer />
      <GlobalStyle />
      </div>
  
  );
}

export default App;
