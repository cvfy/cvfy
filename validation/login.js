// IMPORTED PACKAGES
const Validator = require("validator");
const isEmpty = require("is-empty");

// EXPORTING THE VALIDATION FUNCTION FOR LOGIN ROUTE THAT TAKES AS ARGUMENT FORM DATA FROM THE REQEST BODY AND DOES THE VALIDATIONS
module.exports = function validateLoginInput(data) {

  // CREATE EMPTY OBJECT TO STORE THE ERRORS RECEIVED FROM VALIDATORS
  let errors = {};
  
// CONVERT EMPTY FIELDS TO AN EMPTY STRING SO WE CAN USE VALIDATOR FUNCTIONS
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";// Email checks

//EMAIL CHECKS(CHECKS IF THE FIELD IS EMPTY AND IF IT IS IS A VALID EMAIL)
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
//PASSWORD CHECKS(CHECKS IF PASSWORD FIELD IS EMPTY)
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }return {
    errors,
    isValid: isEmpty(errors)
  };
};