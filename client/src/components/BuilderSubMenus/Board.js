import React from "react";

const Board = props => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);

    card.style.opacity = "1";
    card.style.display = "flex";
    let target = e.target;
    target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className="board"
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
