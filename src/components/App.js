import React from "react";
import "../styles/App.css";
import "../styles/animate.css";
import GlobalStyle from "../styles/Global";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="MainPage">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
