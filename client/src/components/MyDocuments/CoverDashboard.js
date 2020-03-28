import React from "react";
import ADD2 from "../../assets/add.png";
import "../../styles/dashboard.css";
import axios from "axios";
import store from "./../../store.js";
import { url, frontUrl } from "../../config";

let status = false;
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
    this.deleteCover = this.deleteCover.bind(this);
    this.duplicateCover = this.duplicateCover.bind(this);
  }

  getUserId() {
    var newState = store.getState();
    return newState.auth.user.id;
  }

  componentDidMount() {
    axios
      .get(`${url}/api/users/resume/cover/allCovers/${this.getUserId()}`)
      .then(
        res => this.setState({ covers: res.data }) //this.setState(res.data)
      );
  }

  deleteCover = async (e, id) => {
    // console.log("delete cover");
    // e.preventDefault()
    const response = await axios.post(
      `${url}/api/users/resume/cover/deleteCover/${this.getUserId()}/${id}`
    );
    // ).then(
    //   res => this.setState({ covers: res.data }) //this.setState(res.data)
    // );

    this.setState({ covers: response.data });
  };
  setLocalStorage = id => {
    localStorage.setItem("currentCover", id);
    window.location.href = `${frontUrl}/create-cover-letter`;
  };

  duplicateCover = async obj => {
    if (status === false) {
      status = true;
      // console.log("duplicate cover");
      obj.id = idG;
      const response = await axios.post(
        `${url}/api/users/resume/cover/duplicateCover/${this.getUserId()}`,
        obj
      ); //this.setState(res.data)
      // console.log(response.data);
      await this.setState({ covers: response.data });
      // console.log(this.state.covers);
      status = false;
    } else {
    }
  };
  render() {
    return (
      <div className="Cover_Dashboard_MainContainer">
        <div className="cvBox2">
          <div className="AddCV">
            <img
              className="ADD"
              src={ADD2}
              onClick={() => this.setLocalStorage("")}
              alt="addCover_pic"
            />
            <p style={{ textAlign: "center" }}>ADD New Cover Letter</p>
          </div>
        </div>

        {this.state.covers.map((el, i) => (
          <div className="cvBox2" key={i}>
            <img src={`${url}/static/${el.id}.jpg`} alt={el.id}
            onClick={() => this.setLocalStorage(el.id)} />
            <div
              className="MoreOptions"
              // tabIndex="0"
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
                  onClick={() => this.duplicateCover(el)}
                  data-id={el.id}
                >
                  <i className="far fa-clone cloneOption" title="clone"></i>
                  <span>Clone</span>
                </div>

                <div
                  className="optionInnerDiv deleteDiv"
                  data-id={el.id}
                  onClick={e => this.deleteCover(e, el.id)}
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
