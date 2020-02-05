import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import DropdownMenu from "./DropdownMenu";
import "../../styles/Navbar.css";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const [navbarState, setNavbarState] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const toggleSidebar = e => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("slide-right");
  };

  const active = {
    color: "#6bc774"
  };

  return (
    <>
      <NavBar style={barAnimation} className="navWrapper">
        <div className="FlexContainer">
          <Brand />
          <NavLinks style={linkAnimation}>
            <div>
              <NavLink to="/cv-templates">CV Templates</NavLink>
            </div>
            <div>
              <NavLink to="/cover_letter-templates">
                Cover Letter Templates
              </NavLink>
            </div>
            <div>
              <NavLink to="/my-documents">My Documents</NavLink>
            </div>
            <div className="DropMenu">
              <DropdownMenu />
            </div>
          </NavLinks>
          <div className="BurgerWrapper">
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </div>
        </div>
      </NavBar>
      <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 2px 2px 2px 2px rgba(34, 36, 38, 0.15);
  z-index: 1;
  font-size: 1.4rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  & div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a {
    color: black;
    height: 100%;
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.8;
    text-shadow: 1px;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    & img {
      height: 20px;
    }
    &:hover {
      color: #2438f1;
      border-bottom: 1px solid #2438f1;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
