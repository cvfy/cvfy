import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import ADD from "../../assets/add.png";
import CV2 from "../../assets/CV2.png";
import CV3 from "../../assets/CV3.jpg";
import CV4 from "../../assets/CV4.png";
import mOB from "../../assets/more-options-btn.png";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import store from "./../../store.js";

const CvDashboard = () => {
  let [resume, setResumes] = useState([]);
  function getUserId() {
    var newState = store.getState();
    return newState.auth.user.id;
  }
  useEffect(() => {
    // code to run on component mount
    axios
      .get(`http://localhost:5000/api/users/resume/cv/allCV/${getUserId()}`)
      .then(response => setResumes(response.data));
    // console.log(response.data)
    // setCVs({allCVs: response.data})
    // cvIDs = response.data.map(el => (<ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-1s"><img src="#" alt={el.id}/></ScrollAnimation>));
    //  cvIDs = response.data.map(el => el.id);
    //cvIDs.map( el => (<ScrollAnimation className="cvBox2" animateIn="fadeInUp delay-1s"><img src="#" alt={el.id}/></ScrollAnimation>))
  }, []);
  const setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = "http://localhost:3000/create-cv";
  };
  console.log(resume);
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
          <img onClick={() => setLocalStorage("")} className="ADD" src={ADD} />
          <p>ADD New CV</p>
        </div>
      </div>
      {resume.map(el => (
        <div className="cvBox2">
          <img
            onClick={() => setLocalStorage(el.id)}
            src={`http://localhost:5000/static/${el.id}.jpg`}
            alt={el.id}
          />
          <div className="MoreOptions">
            <img src={mOB} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CvDashboard;
