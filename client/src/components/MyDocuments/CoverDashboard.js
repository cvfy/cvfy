import React, { Component } from "react";
import ADD2 from "../../assets/add.png";
import "../../styles/dashboard.css";
import axios from "axios";
import store from "./../../store.js";

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

class CoverDashboard extends React.Component {
  constructor() {
    super();
    this.state = { covers: [] };
  }

  getUserId() {
    var newState = store.getState();
    return newState.auth.user.id;
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/users/resume/cover/allCovers/${this.getUserId()}`
      )
      .then(
        res =>  this.setState({ covers: res.data }) //this.setState(res.data)
      );
  }

  deleteCV = async (e, id) => {
    e.preventDefault()
    const response = await axios.post(
      `http://localhost:5000/api/users/resume/cover/deleteCover/${this.getUserId()}/${id}`
    );
    this.setState({ covers: response.data });
    // window.location.reload(false);
  };
  setLocalStorage = id => {
    localStorage.setItem("currentCover", id);
    window.location.href = "http://localhost:3000/create-cover-letter";
  };

  duplicateCover = async obj => {
    obj.id = idG;
    await axios.post(
      `http://localhost:5000/api/users/resume/cover/duplicateCover/${this.getUserId()}`,
      obj
    );
    // window.location.reload(false);
  };
  


  render() {

    return (
      <div className="Cover_Dashboard_MainContainer">
      <div className="cvBox2">
        <div className="AddCV">
          <img className="ADD" src={ADD2}
          onClick={() => this.setLocalStorage("")} />
          <p style={{ textAlign: "center" }}>ADD New Cover Letter</p>
        </div>
      </div>

        {this.state.covers.map((el, i) => (
          <div className="cvBox2" key={i}>
            <img
              src={`http://localhost:5000/static/${el.id}.jpg`}
              alt={el.id}
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
                  onClick={(e) => this.deleteCV(e, el.id)}
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
export default CoverDashboard;


