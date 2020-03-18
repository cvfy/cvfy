import React, { Component } from "react";
// import React, { useEffect, useState, useRef } from "react";
import ADD from "../../assets/add.png";
import "../../styles/dashboard.css";
import axios from "axios";
import store from "./../../store.js";

class CvDashboard extends React.Component {
  constructor() {
    super();
    // this.my_refs = {};
    this.myRef = React.createRef();
    this.state = {
      display: "none",
      resume: []
    };

    this.focusByClassName.bind(this);
  }

  getUserId() {
    var newState = store.getState();
    return newState.auth.user.id;
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/users/resume/cv/allCV/${this.getUserId()}`
      )
      .then(
        res => {
          // res.data.cv[0].loadingSaveCv = true;
          return this.setState({ resume: res.data });
        } //this.setState(res.data)
      );
  }

  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = "http://localhost:3000/create-cv";
  };

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }

  // Previous code writted with Hooks
  // const CvDashboard = () => {
  // let [resume, setResumes] = useState([]);
  // let [display, setDisplay] = useState("none");

  // function getUserId() {
  //   var newState = store.getState();
  //   return newState.auth.user.id;
  // }
  // useEffect(() => {
  //   // code to run on component mount
  //   axios
  //     .get(`http://localhost:5000/api/users/resume/cv/allCV/${getUserId()}`)
  //     .then(response => setResumes(response.data));
  // }, []);
  // const setLocalStorage = id => {
  //   localStorage.setItem("currentCV", id);
  //   window.location.href = "http://localhost:3000/create-cv";
  // };

  render() {
    const { display } = this.state;
    return (
      <div className="CV_Dashboard_MainContainer">
        <div className="CVTitle">
          <div animateIn="fadeIn" animateOnce="true" duration="0.5s">
            <p>Your CV's</p>
          </div>
        </div>
        <div
          className="cvBox2"
          animateIn="fadeIn"
          animateOnce="true"
          duration="0.5s"
        >
          <div className="AddCV">
            <img
              onClick={() => this.setLocalStorage("")}
              className="ADD"
              src={ADD}
            />
            <p>ADD New CV</p>
          </div>
        </div>

        {this.state.resume.map(el => (
          <div className="cvBox2">
            <img
              
              src={`http://localhost:5000/static/${el.id}.jpg`}
              alt={el.id}
            />
            <div
              className="MoreOptions"
              tabIndex="0"
              // ref={this.myRef.current}
              // ref={input => (this.my_refs["MoreOptions"] = input)}
              ref={el => (this.myRef.current = el)}
              onFocus={() => this.setState({ display: "" })}
              onBlur={() => this.setState({ display: "none" })}
              // onFocus={() => setDisplay("")}
              // onBlur={() => setDisplay("none")}
            >
              <i class="fas fa-ellipsis-h icon3Dots"></i>

              <div className="optionsMenuDiv" style={{ display: display }}>
                <div
                  onClick={() => this.setLocalStorage(el.id)}
                  className="optionInnerDiv gotBorder"
                  // onClick={() => editDocument(need to write this function)}
                >
                  <i  
                  className="far fa-edit editOption" title="edit"></i>
                  <span>Edit</span>
                </div>
                <div
                  className="optionInnerDiv gotBorder"
                  // onClick={() => cloneDocument(need to write this function)}
                >
                  <i className="far fa-clone cloneOption" title="clone"></i>
                  <span>Clone</span>
                </div>

                <div
                  className="optionInnerDiv deleteDiv"
                  // onClick={() => deleteDocument(need to write this function)}
                >
                  <i
                    className="deleteOption far fa-trash-alt"
                    title="delete"
                  ></i>
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CvDashboard;
