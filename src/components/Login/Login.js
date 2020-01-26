import React from "react";
import "./Login.css";
import google from "../../images/google.jpg";

const Login = () => {
  return (
    <div className="registerWrapper">
      <div className="registerContainer">
        <div className="registerLeftDiv">
          <div className="closeRegistrationForm">X</div>
          <div className="form_wrapper">
            <div className="form_container">
              <div className="title_container">
                <h2>Welcome back!</h2>
                <span className="pleaseLoginText">
                  Please login to your account.
                </span>
              </div>

              <div className="autoRegistration">
                <div className="googleSignUpDiv">
                  <img src={google} className="googleIcon" alt="googleIcon" />
                  <span className="googleText">Login with google</span>
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
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
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

                    <div className="rememberAndForgotPasswordDiv">
                      <div className="input_field checkbox_option">
                        <input type="checkbox" id="cb1" />
                        <label for="cb1">Remember me</label>
                      </div>
                      <div className="input_field changePassword">
                        Forgot password
                      </div>
                    </div>

                    <div className="submitDiv">
                      <input className="button" type="submit" value="Login" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="alreadyMember">
              Don't have an account yet?{" "}
              <span className="addLink">Click here</span>
            </div>
          </div>
        </div>

        <div className="registerRightDiv"></div>
      </div>
    </div>
  );
};

export default Login;
