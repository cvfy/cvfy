import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import "../styles/modal.css";
import google from "../assets/google.jpg";
import Navbar from "./navbar/Navbar";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/my-documents");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/my-documents"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;

    return (
      <>
        <Navbar />
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
                      <img
                        src={google}
                        className="googleIcon"
                        alt="googleIcon"
                      />
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
                      <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                          <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                              invalid: errors.email || errors.emailnotfound
                            })}
                          />
                          <label htmlFor="email">Email</label>
                          <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                          </span>
                        </div>
                        <div className="input-field col s12">
                          <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                              invalid:
                                errors.password || errors.passwordincorrect
                            })}
                          />
                          <label htmlFor="password">Password</label>
                          <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                          </span>
                        </div>
                        {/* <div className="rememberAndForgotPasswordDiv"> */}
                        {/* <div className="input_field checkbox_option">
                         <input type="checkbox" id="cb1" />
                         <label for="cb1">Remember me</label>
                       </div>
                       <div className="input_field changePassword">
                         Forgot password
                       </div>
                     </div> */}

                        <div className="submitDiv">
                          <input
                            className="button"
                            type="submit"
                            value="Login"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="alreadyMember">
                  Don't have an account yet?{" "}
                  <a href="/register">
                    <span className="addLink">Click here</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="registerRightDiv"></div>
          </div>
        </div>
      </>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Login);

// import React from "react";
// import "../styles/modal.css";
// import google from "../assets/google.jpg";

// const Login = () => {
//   return (
//     <div className="registerWrapper">
//       <div className="registerContainer">
//         <div className="registerLeftDiv">
//           <div className="closeRegistrationForm">X</div>
//           <div className="form_wrapper">
//             <div className="form_container">
//               <div className="title_container">
//                 <h2>Welcome back!</h2>
//                 <span className="pleaseLoginText">
//                   Please login to your account.
//                 </span>
//               </div>

//               <div className="autoRegistration">
//                 <div className="googleSignUpDiv">
//                   <img src={google} className="googleIcon" alt="googleIcon" />
//                   <span className="googleText">Login with google</span>
//                 </div>
//               </div>

//               <div className="break-line">
//                 <hr />
//                 <span className="orText">OR</span>
//                 <hr />
//               </div>

//               <div className="row clearfix">
//                 <div className="">
//                   <form>
//                     <div className="input_field">
//                       <span>
//                         <i aria-hidden="true" className="fa fa-envelope"></i>
//                       </span>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email address"
//                         required
//                       />
//                     </div>

//                     <div className="input_field">
//                       <span>
//                         <i aria-hidden="true" className="fa fa-lock"></i>
//                       </span>
//                       <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         required
//                       />
//                     </div>

//                     <div className="rememberAndForgotPasswordDiv">
//                       <div className="input_field checkbox_option">
//                         <input type="checkbox" id="cb1" />
//                         <label for="cb1">Remember me</label>
//                       </div>
//                       <div className="input_field changePassword">
//                         Forgot password
//                       </div>
//                     </div>

//                     <div className="submitDiv">
//                       <input className="button" type="submit" value="Login" />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="alreadyMember">
//               Don't have an account yet?{" "}
//               <span className="addLink">Click here</span>
//             </div>
//           </div>
//         </div>

//         <div className="registerRightDiv"></div>
//       </div>
//     </div>
//   );
// };

// export default Login;
