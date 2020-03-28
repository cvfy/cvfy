import React from "react";
import Image from "../../../assets/undraw_resume.png";

const Section2 = () => {
  return (
    <div className="LPContainer ReversedRow">
      <div className="DescriptionSide">
        <h2>Long long long Title....</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining
        </p>
      </div>
      <div className="PictureSide">
        <img src={Image} alt="sec2_image" />
      </div>
    </div>
  );
};
export default Section2;
