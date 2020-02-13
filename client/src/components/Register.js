import React, {
  Component
} from "react";
import "../styles/modal.css";
import google from "../assets/google.jpg";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
      super();
      this.state = {
          name: "",
          email: "",
          password: "",
          password2: "",
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
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  onChange = e => {
      this.setState({
          [e.target.id]: e.target.value
      });
  };
  onSubmit = e => {
      e.preventDefault();
      const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
      };
      console.log(newUser);
      this.props.registerUser(newUser, this.props.history); 
};
render() {
 const { errors } = this.state;
return (
//     <div className="container">
//       <div className="row">
//         <div className="col s8 offset-s2">
//           <Link to="/" className="btn-flat waves-effect">
//             <i className="material-icons left">keyboard_backspace</i> Back to
//             home
//           </Link>
//           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//             <h4>
//               <b>Register</b> below
//             </h4>
//             <p className="grey-text text-darken-1">
//               Already have an account? <Link to="/login">Log in</Link>
//             </p>
//           </div>
//           <form noValidate onSubmit={this.onSubmit}>
//             <div className="input-field col s12">
//               <input
//                 onChange={this.onChange}
//                 value={this.state.name}
//                 error={errors.name}
//                 id="name"
//                 type="text"
//                 className={classnames("", {
//                   invalid: errors.name
//                 })}
//               />
//               <label htmlFor="name">Name</label>
//               <span className="red-text">{errors.name}</span>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={this.onChange}
//                 value={this.state.email}
//                 error={errors.email}
//                 id="email"
//                 type="email"
//                 className={classnames("", {
//                   invalid: errors.email
//                 })}
//               />
//               <label htmlFor="email">Email</label>
//               <span className="red-text">{errors.email}</span>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={this.onChange}
//                 value={this.state.password}
//                 error={errors.password}
//                 id="password"
//                 type="password"
//                 className={classnames("", {
//                   invalid: errors.password
//                 })}
//               />
//               <label htmlFor="password">Password</label>
//               <span className="red-text">{errors.password}</span>
//             </div>
//             <div className="input-field col s12">
//               <input
//                 onChange={this.onChange}
//                 value={this.state.password2}
//                 error={errors.password2}
//                 id="password2"
//                 type="password"
//                 className={classnames("", {
//                   invalid: errors.password2
//                 })}
//               />
//               <label htmlFor="password2">Confirm Password</label>
//               <span className="red-text">{errors.password2}</span>
//             </div>
//             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//               <button
//                 style={{
//                   width: "150px",
//                   borderRadius: "3px",
//                   letterSpacing: "1.5px",
//                   marginTop: "1rem"
//                 }}
//                 type="submit"
//                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// }Register.propTypes = {
// registerUser: PropTypes.func.isRequired,
// auth: PropTypes.object.isRequired,
// errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
// auth: state.auth,
// errors: state.errors
// });
// export default connect(
// mapStateToProps,
// { registerUser }
// )(withRouter(Register));


//import React from "react";


// const Register = () => {
//   return (
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
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
                           <label htmlFor="name">Name</label>
               <div className="red-text">{errors.name}</div>
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
               <label htmlFor="email">Email</label>
               <div className="red-text">{errors.email}</div>
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-lock"></i>
                      </span>
                    <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
               <label htmlFor="password">Password</label>
               <div className="red-text">{errors.password}</div>
                    </div>

                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-lock"></i>
                      </span>
                      <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
              <label htmlFor="password2">Confirm Password</label>
               <div className="red-text">{errors.password2}</div>
                    </div>

                    <div className="input_field checkbox_option">
                      <input type="checkbox" id="cb1" />
                      <label for="cb1">
                        I agree with{" "}
                        <span className="addLink"> terms and conditions</span>
                      </label>
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
            <div className="alreadyMember">
              Already a member? <span className="addLink"><a href="/login">Click here</a></span>
            </div>
          </div>
        </div>

        <div className="registerRightDiv"></div>
      </div>
    </div>
  );
}
}
Register.propTypes = {
registerUser: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
auth: state.auth,
errors: state.errors
});
export default connect(
mapStateToProps,
{ registerUser }
)(withRouter(Register));


