import React from "react";

const Burgermenu = props => {
  return (
    <div className="wrapper" onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  );
};

export default Burgermenu;
