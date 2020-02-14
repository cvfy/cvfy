import React, { useState } from "react";
import "../../styles/DropdownMenu.css";
import Image from "../../assets/user.png";
import store from "./../../store.js";

function aFunction() {
  var newState = store.getState();
  console.log(newState.auth.user.name);
  return newState.auth.user.name;
}

const DropdownMenu = () => {
  //Here we can set Dropdown Menu to Open or closed
  const [State, SetState] = useState({ OpenMenu: false });

  // Here ypu can modify the Array to change the items from te dropdown menu
  const [DropdownItemsList, SetDropdownItemsList] = useState(
    aFunction()
      ? [{ Title: "My Account", Path: "/my-account" }]
      : [
          { Title: "Sign Up", Path: "/register" },
          { Title: "Login", Path: "/login" }
        ]
  );

  // Here you can set the Main Title of the Dropdown menu in the return of this function
  const setTitle = () => {
    return (
      <div className="centered">
        <img
          className={State.OpenMenu ? "userImg scaling" : "userImg"}
          src={Image}
        />
        <h6 style={{ color: "black", marginLeft: "5px" }}>{aFunction()}</h6>
      </div>
    );
  };

  const onClick = () => {
    SetState({ OpenMenu: !State.OpenMenu });
    console.log(State.OpenMenu);
  };
  const DropdownItems = DropdownItemsList.map(el => (
    <div
      className={
        State.OpenMenu ? "DropdownItemOpen fadeIn" : "DropdownItemClosed"
      }
    >
      <a href={el.Path}>{el.Title}</a>
    </div>
  ));
  return (
    <div className="DropdownContainer">
      <div className="DropdownTitle" onClick={onClick}>
        {setTitle()}
      </div>
      <div
        className={
          State.OpenMenu
            ? "DropdownHiddenContainerOpen"
            : "DropdownHiddenContainerClosed"
        }
      >
        {DropdownItems}
      </div>
    </div>
  );
};
store.subscribe(aFunction);
export default DropdownMenu;
