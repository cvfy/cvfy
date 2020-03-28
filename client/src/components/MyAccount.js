import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import ProfilePicture from "../assets/user.png";
import "../styles/myAccount.scss";
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
          <div className="ProfilePic">
            <img  alt="profilePicture" src={ProfilePicture} />
          </div>
          <h1>{aFunction("name")}</h1>
        </div>
        <div className="ProfileData">
          <div className="ProfileMainData">
            <div className="FieldRow">
              <h1>Account Details</h1>
            </div>
            <div className="FieldRow">
              <div className="field">
                <label>Full Name</label>
                <div className="FirstNameField">{aFunction("name")}</div>
              </div>
              <div className="field">
                <label>Email</label>
                <div className="EmailField">{aFunction("email")}</div>
              </div>
            </div>
            <div className="FieldRow">
              <div className="field">
                <label>Password</label>
                <div className="PasswordField">**********</div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="PasswordField">**********</div>
              </div>
            </div>
            <div>
              <div className="field">
                <a className="linkField" href="/#">
                  View my stored Personal Data
                </a>
              </div>
              <div className="field">
                <a className="linkField" href="/#">
                  Delete my Account
                </a>
              </div>
            </div>
            <div className="checkboxField">
              <h3>I want to receive email notifications from CV|FY</h3>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

store.subscribe(aFunction);

export default MyAccount;
