import React from "react";
import "./Register.css";
import google from "../../images/google.jpg";

const Register = () => {
  return (
    <div className="registerWrapper">
      <div className="registerContainer">
        <div className="registerLeftDiv">
          <div className="closeRegistrationForm">X</div>
          <div className="form_wrapper">
            <div className="form_container">
              <div className="title_container">
                <h2>Sign up</h2>
              </div>

              <div className="autoRegistration">
                <div className="googleSignUpDiv">
                  <img src={google} className="googleIcon" alt="googleIcon" />
                  <span className="googleText">Sign up with google</span>
                </div>
              </div>

              <div className="break-line">
                <hr />
                <span className="orText">OR</span>
                <hr />
              </div>

              <div className="row clearfix">
                <div className="">
                  <form>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        placeholder="Repeat your Password"
                        required
                      />
                    </div>

                    {/* <div className="input_field radio_option">
                      <input type="radio" name="radiogroup1" id="rd1" />
                      <label for="rd1">Male</label>
                      <input type="radio" name="radiogroup1" id="rd2" />
                      <label for="rd2">Female</label>
                    </div>
                    <div className="input_field select_option">
                      <select>
                        <option>Select a country</option>
                        <option>Germany</option>
                        <option>Babylon</option>
                        <option>Romania</option>
                        <option>Moldova</option>
                        <option>Brazil</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div> */}
                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb1" />
                      <label for="cb1">I agree with terms and conditions</label>
                    </div>
                    <div className="submitDiv">
                      <input
                        className="button"
                        type="submit"
                        value="Register"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="alreadyMember">
            Already a member? <span className="addLink">Click here</span>
          </div>
        </div>

        <div className="registerRightDiv"></div>
      </div>
    </div>
  );
};

export default Register;
