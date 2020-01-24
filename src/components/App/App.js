import React from "react";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";
import Jumbotron from "../Jumbotron";
import "../Jumbotron.css";
import "./App.css";
import "../../styles/animate.css";
import Footer from "../Footer";
import "../Footer.css";
import Register from "../Register/Register";

import GlobalStyle from "../../styles/Global";

const App = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <Jumbotron />
      <Register />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
