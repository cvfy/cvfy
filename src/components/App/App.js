import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";

import "./App.css";
import "../../styles/animate.css";
import Footer from "../Footer";
import "../Footer.css";

import IntroCookie from "../IntroCookie/IntroCookie";
import TableOfContent from "../TableOfContent/TableOfContent";

import GlobalStyle from "../../styles/Global";
const App = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <IntroCookie />
      <TableOfContent />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
