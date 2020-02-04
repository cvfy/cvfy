import React from "react";
import "../styles/App.css";
import "../styles/animate.css";
import GlobalStyle from "../styles/Global";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer";
import CV_Templates from "./CV_Templates/CV_Templates";

const App = () => {
  return (
    <div className="MainPage">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv-templates" component={CV_Templates} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
