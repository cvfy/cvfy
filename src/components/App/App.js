import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";

import "./App.css";
import "../../styles/animate.css";
import Footer from "../Footer";
import "../Footer.css";

import FormContainer from "../FormContainer/FormContainer";

import GlobalStyle from "../../styles/Global";
const App = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <FormContainer />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
