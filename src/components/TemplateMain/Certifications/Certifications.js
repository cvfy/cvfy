import React from "react";

class Certifications extends React.Component {
  render() {
    return (
      <div className="cert">
        <div className="cert-label">CERTIFICATIONS</div>
        <div className="cert-body">
          <div className="cert-group">
            <div>
              <textarea
                className="cert-desc"
                max-rows="1"
                cols="37"
                placeholder="- best dog 2020 - who let the dogs out award"
                maxlength="80"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
