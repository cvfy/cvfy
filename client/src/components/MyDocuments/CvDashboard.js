import React, { Component } from "react";
// import React, { useEffect, useState, useRef } from "react";
import ADD from "../../assets/add.png";
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

class CvDashboard extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    // this.myRef = React.createRef();
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
          const newArr = res.data.map(el => { return {obj: el, show: false}})
          return this.setState({ resume: newArr });
        } //this.setState(res.data)
      );
  }
  // componentDidUpdate() {
  //   axios
  //     .get(
  //       `http://localhost:5000/api/users/resume/cv/allCV/${this.getUserId()}`
  //     )
  //     .then(
  //       res => {
  //         const newArr = res.data.map(el => { return {obj: el, show: false}})
  //         return this.setState({ resume: newArr });
  //       } //this.setState(res.data)
  //     );
  // }

deleteCV = async id => {
  const response = await axios
  .post(
    `http://localhost:5000/api/users/resume/cv/delete/${this.getUserId()}/${id}`
  )
  const newArr = response.data.map(el => { return {obj: el, show: false}})
           this.setState({ resume: newArr });
          window.location.reload(false)
}
  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = "http://localhost:3000/create-cv";
  };

duplicateCV = async obj => {
  obj.id = idG;
 await axios
  .post(
    `http://localhost:5000/api/users/resume/cv/duplicate/${this.getUserId()}`, obj)
    // const newArr = response.data.map(el => { return {obj: el, show: false}})
    //        this.setState({ resume: newArr });
          window.location.reload(false)

}
  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = "http://localhost:3000/create-cv";
  };

  showMenu = id => {
    console.log(id)
    const newArr = [...this.state.resume]
    newArr.map( el => { if(el.obj.id === id){ return el.show = true}})
    this.setState({resume: newArr})
    console.log(this.state.resume)
  }
  hideMenu = id => {
    console.log(id)
    const newArr = [...this.state.resume]
    newArr.map( el => { if(el.obj.id === id) return el.show = false})
    this.setState({resume: newArr})
  }
  // cloneDocument = id => {
  //   const newEl = React.cloneElement(this.myRef, {});
  // }

  focusByClassName(className) {
    // let myRef = this.my_refs[className];
    // if (myRef) {
    //   myRef.focus();
    // }

    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.myRef.current.focus();
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

  deleteDocument = item => {
    const newArr = [...this.state.resume];
    const resume = newArr.filter(itm => {
      return item.id !== itm.id;
    });

    this.setState({
      resume: resume
    });
  };

  cloneDocument = e => {
    const itm = e.currentTarget.parentNode.parentNode.parentNode;
    const cln = itm.cloneNode(true);
    const itmParent = itm.parentNode;
    itmParent.appendChild(cln);
  };

  render() {
    const { children } = this.props;
    const { display } = this.state;
    return (
      <div className="CV_Dashboard_MainContainer">
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

        {this.state.resume.map((el, i) => (
          <div className="cvBox2" key={i}>
            <img
              
              src={`http://localhost:5000/static/${el.obj.id}.jpg`}
              alt={el.obj.id}
            />
            <div
              className="MoreOptions"
              tabIndex="0"
              data-id={el.obj.id}
              ref={input => (this.my_refs["MoreOptions"] = input)}
              // ref={el => (this.myRef.current = el)}
              onFocus={() => this.showMenu(el.obj.id)}
              onBlur={() => this.hideMenu(el.obj.id)}
              // onClick={this.focusByClassName}
              // onFocus={() => setDisplay("")}
              // onBlur={() => setDisplay("none")}
            >
              <i className="fas fa-ellipsis-h icon3Dots"></i>

              <div className="optionsMenuDiv"               
              style={{display: `${this.state.resume.filter(x => x.obj.id === el.obj.id)[0].show === false ? "none" : ""}`}}
>
                <div
                  className="optionInnerDiv gotBorder"
                  onClick={() => this.setLocalStorage(el.obj.id)}
                >
                  <i  
                  className="far fa-edit editOption" title="edit"></i>
                  <span>Edit</span>
                </div>
                <div
                  className="optionInnerDiv gotBorder"
                  data-id={el.obj.id}
                  onClick={() => this.duplicateCV(el.obj)}
                >
                  <i className="far fa-clone cloneOption" title="clone"></i>
                  <span>Clone</span>
                </div>

                <div
                  className="optionInnerDiv deleteDiv"
                  data-id={el.obj.id}
                  onClick={() => this.deleteCV(el.obj.id)}
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
