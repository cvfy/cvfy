import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import DropdownMenu from "./navbar/DropdownMenu";

const BuilderCollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, 0, 0, 0]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <ul className="minMenu">
          <li>
            <a href="/create-cv" onClick={props.handleNavbar}>
              Create CV
            </a>
          </li>
          <li>
            <a href="/create-cover-letter" onClick={props.handleNavbar}>
              Create Cover Letter
            </a>
          </li>
          <li>
            <a href="/cv-templates" onClick={props.handleNavbar}>
              CV Templates
            </a>
          </li>
          <li>
            <a href="/cover_letter-templates" onClick={props.handleNavbar}>
              Cover Letter Templates
            </a>
          </li>
          <li>
            <a href="/my-documents" onClick={props.handleNavbar}>
              My Documents
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Log Out
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

export default BuilderCollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  top: 3.7rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  height: 100%;
`;
