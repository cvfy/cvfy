import React from "react";
import ADD from "../../assets/add.png";
import "../../styles/dashboard.css";
import axios from "axios";
import store from "./../../store.js";
import { url, frontUrl } from "../../config";

function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
const idG = guidGenerator();

class CvDashboard extends React.Component {
  constructor() {
    super();
    this.state = { resume: [] };
  }

  getUserId() {
    var newState = store.getState();
    return newState.auth.user.id;
  }

  componentDidMount() {
    axios
      .get(`${url}/api/users/resume/cv/allCV/${this.getUserId()}`)
      .then(res => this.setState({ resume: res.data }));
  }

  deleteCV = id => {
    axios
      .post(`${url}/api/users/resume/cv/delete/${this.getUserId()}/${id}`)
      .then(res => this.setState({ resume: res.data }));
      // console.log(this.state.resume)
  };
  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = `${frontUrl}/create-cv`;
  };

  duplicateCV = obj => {
    obj.id = idG;
    axios
      .post(`${url}/api/users/resume/cv/duplicate/${this.getUserId()}`, obj)
      .then(res => this.setState({ resume: res.data }));
  };

  render() {
    return (
      <div className="CV_Dashboard_MainContainer">
        <div className="cvBox2">
          <div className="AddCV">
            <img
              onClick={() => this.setLocalStorage("")}
              className="ADD"
              src={ADD}
              alt="newCV_pic"
            />
            <p>ADD New CV</p>
          </div>
        </div>

        {this.state.resume.map((el, i) => (
          <div className="cvBox2" key={i}>
            <img
              src={`${url}/static/${el.id}.jpg`}
              alt={el.id}
              onClick={() => this.setLocalStorage(el.id)}
            />
            <div
              className="MoreOptions"
              tabIndex="0"
              onFocus={() => this.setState({ display: "" })}
              onBlur={() => this.setState({ display: "none" })}
            >
              <i className="fas fa-ellipsis-h icon3Dots"></i>

              <div className="optionsMenuDiv">
                <div
                  className="optionInnerDiv gotBorder"
                  onClick={() => this.setLocalStorage(el.id)}
                >
                  <i className="far fa-edit editOption" title="edit"></i>
                  <span>Edit</span>
                </div>
                <div
                  className="optionInnerDiv gotBorder"
                  data-id={el.id}
                  onClick={() => this.duplicateCV(el)}
                >
                  <i className="far fa-clone cloneOption" title="clone"></i>
                  <span>Clone</span>
                </div>

                <div
                  className="optionInnerDiv deleteDiv"
                  data-id={el.id}
                  onClick={() => this.deleteCV(el.id)}
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
