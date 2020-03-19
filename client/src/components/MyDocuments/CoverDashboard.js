import React from "react";
import "../../styles/dashboard.css";
import ADD2 from "../../assets/add.png";
import Cover2 from "../../assets/Cover2.png";
import Cover3 from "../../assets/Cover3.png";
import Cover4 from "../../assets/Cover4.png";

const CoverDashboard = () => {
  return (
    <div className="Cover_Dashboard_MainContainer">
      <div className="cvBox2">
        <div className="AddCV">
          <img className="ADD" src={ADD2} />
          <p style={{ textAlign: "center" }}>ADD New Cover Letter</p>
        </div>
      </div>

      <div className="cvBox2">
        <img src={Cover2} />
      </div>

      <div className="cvBox2">
        <img src={Cover3} />
      </div>

      <div className="cvBox2">
        <img src={Cover4} />
      </div>
    </div>
  );
};

export default CoverDashboard;
