import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";

import "./App.css";
import "../../styles/animate.css";
import Footer from "../Footer";
import "../Footer.css";

import IntroPrivacy from "../IntroPrivacy/IntroPrivacy";
import TableOfContent from "../TableOfContent/TableOfContent";

import GlobalStyle from "../../styles/Global";
const App = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <IntroPrivacy />
      <TableOfContent />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
