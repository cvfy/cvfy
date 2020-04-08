import React from "react";
import Image from "../../assets/workinprogress.svg";

const Section4 = () => {
  return (
    <div className="LPContainer ReversedRow">
      <div className="DescriptionSide">
        <h2>Job-winning content</h2>
        <p>
          We give you expert resume writing tips from start to finish. No more
          worrying about missing jobs or wasting time with the wrong resume
          content. When you finish, your Resumes and Cover Letters will be
          mesmerizing.
        </p>
      </div>
      <div className="PictureSide">
        <img src={Image} alt="sec4_image" />
      </div>
    </div>
  );
};
export default Section4;
