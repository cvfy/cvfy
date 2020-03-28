import React from "react";
import Image from "../../../assets/signin.svg";

const Section2 = () => {
  return (
    <div className="LPContainer ReversedRow">
      <div className="DescriptionSide">
        <h2>How does it work?</h2>
        <p>
          All you need to do is register an account. After you access your
          account, you will import your Linkedin data using our very easy to use
          system. Using one of the vast amount of Templates that we offer you
          can, drag, drop, shorten, trim, slash, lop, clip, chop, put in a
          nutshell oooor lengthen, expand, enlarge, increase and amplify!
        </p>
      </div>
      <div className="PictureSide">
        <img src={Image} alt="image" />
      </div>
    </div>
  );
};
export default Section2;
