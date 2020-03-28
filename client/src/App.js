import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "./styles/animate.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home/Home";
import CV_Templates from "./components/CV_Templates/CV_Templates";
import CoverLetter_Templates from "./components/CoverLetter_Templates/CoverLetter_Templates";
import MyDocuments from "./components/MyDocuments/MyDocuments";
import Register from "./components/Register";
import Login from "./components/Login";
import MyAccount from "./components/MyAccount";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import CvBuilder from "./components/CvBuilder/CvBuilder";
import CoverLetterBuilder from "./components/CoverLetterBuilder/CoverLetterBuilder";
import PrivateRoute from "./components/private-route/PrivateRoute";
import ThemeContextProvider from "./contexts/ThemeContext";
import CoverLetterContextProvider from "./contexts/CoverLetterContext";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded)); // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser()); // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <CoverLetterContextProvider>
          <Provider store={store}>
            <Router>
              <div className="MainPage">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cv-templates" component={CV_Templates} />
                  <Route
                    exact
                    path="/cover_letter-templates"
                    component={CoverLetter_Templates}
                  />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/about-us" component={AboutUs} />
                  <Route exact path="/contact-us" component={ContactUs} />
                  <Route
                    exact
                    path="/privacy-policy"
                    component={PrivacyPolicy}
                  />
                  <Route
                    exact
                    path="/cookies-policy"
                    component={CookiesPolicy}
                  />
                  <Route
                    exact
                    path="/terms-and-conditions"
                    component={TermsAndConditions}
                  />
                  <PrivateRoute
                    exact
                    path="/create-cover-letter"
                    component={CoverLetterBuilder}
                  />
                  <PrivateRoute exact path="/create-cv" component={CvBuilder} />
                  <PrivateRoute
                    exact
                    path="/my-account"
                    component={MyAccount}
                  />
                  <PrivateRoute
                    exact
                    path="/create-cover-letter"
                    component={CoverLetterBuilder}
                  />
                  <PrivateRoute
                    exact
                    path="/my-documents"
                    component={MyDocuments}
                  />
                </Switch>
              </div>
            </Router>
          </Provider>
        </CoverLetterContextProvider>
      </ThemeContextProvider>
    );
  }
}
export default App;
