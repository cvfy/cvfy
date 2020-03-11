import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class ColorSubMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { changeColor } = context;
          return (
            <div>
              <div className="theme-btn " onClick={this.showMenu}>
                <span className="tool-icon">✎</span>
                <span className="tool-desc">Color</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="colorSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="colorOptionsDiv">
                    <button
                      name="brown"
                      className="colorBtn brownBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="purple"
                      className="colorBtn purpleBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#ff5e6c"
                      className="colorBtn yellowBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#2d545e"
                      className="colorBtn aquaBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#479099"
                      className="colorBtn greenBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#2dbcad"
                      className="colorBtn darkgreyBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="cornflowerblue"
                      className="colorBtn cornflowerblueBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="blue"
                      className="colorBtn blueBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#12343b"
                      className="colorBtn blackBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#c89666"
                      className="colorBtn burlywoodBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="#7c677f"
                      className="colorBtn orangeBtn"
                      onClick={changeColor}
                    />
                    <button
                      name="tomato"
                      className="colorBtn tomatoBtn"
                      onClick={changeColor}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ColorSubMenu;
