import React from 'react';
import ProfilePicture from '../images/user.png'

const Jumbotron = () => {

  return (
  <div className="Jumbotron">
    <div className="ProfilePicContainer"><div className="ProfilePic"><img src={ProfilePicture} /></div><h1>Michael Levinschi</h1></div>
    <div className="ProfileData">
      <div className="ProfileMainData"></div>
      <div className="ProfileMainDataSmall"></div>
    </div>
  </div>
  );
}

export default Jumbotron;