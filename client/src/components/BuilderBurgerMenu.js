import React from "react";

const BuilderBurgerMenu = props => {
  return (
    <div className="wrapper builderNavBurger" onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span className="builderNavSpanBar">&nbsp;</span>
        <span className="builderNavSpanBar">&nbsp;</span>
        <span className="builderNavSpanBar">&nbsp;</span>
      </div>
    </div>
  );
};

export default BuilderBurgerMenu;
