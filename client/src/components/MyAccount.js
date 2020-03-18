import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import ProfilePicture from "../assets/user.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/myAccount.css";
import store from "./../store";

function aFunction(type) {
  var newState = store.getState();
  return newState.auth.user[type];
}
const MyAccount = () => {
  return (
    <>
      <Navbar />
      <div className="Jumbotron">
        <div className="ProfilePicContainer">
          <ScrollAnimation animateIn="fadeIn delay-0s">
            <div className="ProfilePic">
              <img src={ProfilePicture} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp delay-1s">
            <h1>{aFunction("name")}</h1>
          </ScrollAnimation>
        </div>
        <div className="ProfileData">
          <ScrollAnimation
            className="ProfileMainData"
            animateIn="fadeInRight delay-0s"
          >
            <ScrollAnimation className="FieldRow" animateIn="fadeIn delay-1s">
              <h1>Account Details</h1>
            </ScrollAnimation>
            <div className="FieldRow">
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
                <label>Full Name</label>
                <div className="FirstNameField">{aFunction("name")}</div>
              </ScrollAnimation>
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
                <label>Email</label>
                <div className="EmailField">{aFunction("email")}</div>
              </ScrollAnimation>
            </div>
            <div className="FieldRow">
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
              <label>Password</label>
                <div className="PasswordField">**********</div>
              </ScrollAnimation>
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
                <label>Password</label>
                <div className="PasswordField">**********</div>
              </ScrollAnimation>
            </div>
            <div className="FieldRow">
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
                <a className="linkField" href="#">
                  View my stored Personal Data
                </a>
              </ScrollAnimation>
              <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
                <a className="linkField" href="#">
                  Deleted My Account
                </a>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              className="checkboxField"
              animateIn="fadeInUp delay-1s"
            >
              <div>
                <input type="checkbox" />
              </div>
              <h3>I want to receive email notifications from CV|FY</h3>
            </ScrollAnimation>
          </ScrollAnimation>
          <ScrollAnimation
            className="ProfileMainDataSmall"
            animateIn="fadeInRight delay-1s"
          ></ScrollAnimation>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  );
};

store.subscribe(aFunction);

export default MyAccount;
