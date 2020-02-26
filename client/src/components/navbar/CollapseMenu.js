import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import DropdownMenu from "./DropdownMenu";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <ul className="minMenu">
          <li>
            <a href="/" onClick={props.handleNavbar}>
              CV Templates
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Cover Letter Templates
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              My Documents
            </a>
          </li>
          <li>
            <div>
              <DropdownMenu />
            </div>
          </li>
        </ul>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1000;
`;
