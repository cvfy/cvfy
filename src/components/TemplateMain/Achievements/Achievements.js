import React from "react";

class Achievements extends React.Component {
  render() {
    return (
      <div className="achiev">
        <div className="achiev-label">ACHIEVEMENTS</div>
        <div className="achiev-body">
          <div className="achiev-group">
            <div>
              <textarea
                className="cert-desc"
                max-rows="2"
                cols="37"
                placeholder="- Won the 2nd prize at DCI Hackathon 2019"
                maxlength="100"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
