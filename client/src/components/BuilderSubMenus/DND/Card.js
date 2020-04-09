import React from "react";

function Card(props) {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.opacity = "0.5";
    }, 0);

    // add a script to return opacity on failure
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      name={props.name}
    >
      {props.children}
    </div>
  );
}

export default Card;
