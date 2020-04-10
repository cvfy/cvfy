// IMPORTED PACKAGES
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// IMPORT CONSTANTS
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// REGISTER A USER
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        // GETTING ERRORS FROM VALIDATORS DONE ON SERVER
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// LOGIN -GET USER TOKEN
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // SET TOKEN TO LOCAL STORAGE
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // SET TOKEN TO AUTH HEADER
      setAuthToken(token);
      // DECODE TOKEN TO GET USER DATA
      const decoded = jwt_decode(token);
      // SET CURRENT USER
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// SET LOGGED IN USER
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// USER LOADING
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// LOG USER OUT
export const logoutUser = () => dispatch => {
// REMOVE TOKEN FROM LOCAL STORAGE
  localStorage.removeItem("jwtToken");
// REMOVE AUTH HEADER FROM FUTURE REQUESTS
  setAuthToken(false);
// SET CURRENT USER TO EMPTY  OBJECT {}  WHICH WILL SET ISAUTHENTICATED TO FALSE 
  dispatch(setCurrentUser({}));
};