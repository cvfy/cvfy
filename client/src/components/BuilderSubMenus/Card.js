import React from "react";

const Card = props => {
  const dragStart = e => {
    const target = e.target;
    // console.log(target);

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.opacity = "0.5";
    }, 0);

    // add a script to return opacity on failure
  };

  const dragOver = e => {
    // const target = e.target;
    // console.log(target.classList);
    // if (target.classList == "dndSection") {
    //   target.style.backgroundColor = "red";
    // }
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      name={props.name}
    >
      {props.children}
    </div>
  );
};

export default Card;
