// IMPORTED PACKAGES
const Validator = require("validator");
const isEmpty = require("is-empty");

// EXPORTING THE VALIDATION FUNCTION THAT TAKES AS ARGUMENT FORM DATA FROM THE REQEST BODY AND DOES THE VALIDATIONS
module.exports = function validateRegisterInput(data) {

// CREATE EMPTY OBJECT TO STORE THE ERRORS RECEIVED FROM VALIDATORS
    let errors = {};

// CONVERT EMPTY FIELDS TO AN EMPTY STRING SO WE CAN USE VALIDATOR FUNCTIONS
data.name = !isEmpty(data.name) ? data.name : "";
data.email = !isEmpty(data.email) ? data.email : "";
data.password = !isEmpty(data.password) ? data.password : "";
data.password2 = !isEmpty(data.password2) ? data.password2 : "";

//NAME CHECKS(ONLY CHECKS IF THE FIELD IS EMPTY, NO OTHER CHECKS IMPLEMENTED)
if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field in required';
}

//EMAIL CHECKS(CHECKS IF THE FIELD IS EMPTY AND IF IT IS IS A VALID EMAIL)
if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field in required';
} else  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
}

//PASSWORD CHECKS(CHECKS IF BOTH PASSWORD FIELDS ARE EMPTY, SETS A LENGTH REQUIREMENT FOR THE PASSWORD AND CHECKS IF PASSWORD FIELDS MATCH)
if(Validator.isEmpty(data.password)){
    errors.password = "Password field is required";
}
if(Validator.isEmpty(data.password2)){
    errors.password = "Confirm password field is required";
}
if (!Validator.isLength(data.password, { min: 6, max: 30 })) // <--- YOU CAN ADJUST LENGTH REQUIREMENTS HERE
{
    errors.password = "Password must be at least 6 characters";
  }if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

// WE RETURN ALL GATHERED ERRORS AS ERROR OBJECT THAT IS PASSED TO BE DISPLAYED ON THE FRONT END
return  {
    errors,
    isValid: isEmpty(errors)
}

}