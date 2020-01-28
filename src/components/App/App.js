import React from "react";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";
import Jumbotron from "../AboutUs/AboutUs";
import "./App.css";
import "../../styles/animate.css";
import Footer from "../Footer/Footer";
import GlobalStyle from "../../styles/Global";

const App = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <Jumbotron />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
