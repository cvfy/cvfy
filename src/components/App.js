import React from "react";
import "../styles/App.css";
import "../styles/animate.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
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
import CoverLetterBuilder from "./CoverLetterBuilder/CoverLetterBuilder";

const App = () => {
  return (
    <div className="MainPage">
      <BrowserRouter>
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
          <Route
            exact
            path="/create-cover-letter"
            component={CoverLetterBuilder}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
