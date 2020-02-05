import React from "react";
import ProfilePicture from "../assets/user.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/myAccount.css";

const MyAccount = () => {
  return (
    <div className="Jumbotron">
      <div className="ProfilePicContainer">
        <ScrollAnimation animateIn="fadeIn delay-0s">
          <div className="ProfilePic">
            <img src={ProfilePicture} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp delay-1s">
          <h1>Michael Levinschi</h1>
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
              <label>First Name</label>
              <div className="FirstNameField">Michael</div>
            </ScrollAnimation>
            <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
              <label>Last Name</label>
              <div className="LastNameField">Levitschi</div>
            </ScrollAnimation>
          </div>
          <div className="FieldRow">
            <ScrollAnimation className="field" animateIn="fadeInUp delay-1s">
              <label>Email</label>
              <div className="EmailField">Levitschi@gmail.com</div>
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
            <h3>I want to recieve email notifications from CV|FY</h3>
          </ScrollAnimation>
        </ScrollAnimation>
        <ScrollAnimation
          className="ProfileMainDataSmall"
          animateIn="fadeInRight delay-1s"
        ></ScrollAnimation>
      </div>
    </div>
  );
};

export default MyAccount;
