import React from "react";
import "../styles/App.css";
import "../styles/animate.css";
import GlobalStyle from "../styles/Global";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer";
import CV_Templates from "./CV_Templates/CV_Templates";
import CoverLetter_Templates from "./CoverLetter_Templates/CoverLetter_Templates";
import MyDocuments from "./MyDocuments/MyDocuments";
import Register from "./Register";
import Login from "./Login";
import MyAccount from "./MyAccount";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import CvBuilder from "./CvBuilder/CvBuilder";

const App = () => {
  return (
    <div className="MainPage">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv-templates" component={CV_Templates} />
          <Route
            exact
            path="/cover_letter-templates"
            component={CoverLetter_Templates}
          />
          <Route exact path="/my-documents" component={MyDocuments} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/my-account" component={MyAccount} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/create-cv" component={CvBuilder} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
