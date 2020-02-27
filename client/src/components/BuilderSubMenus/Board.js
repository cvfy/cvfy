import React from "react";

const Board = props => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = e => {
    // let section = document.getElementById("board-1");
    // var dragEl;
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";

    let target = e.target;
    console.log(target.name);
    // if (target && target !== dragEl && target.nodeName == "DIV") {
    //   if (target.classList.contains("inside")) {
    //     e.stopPropagation();
    //   } else {
    //     //getBoundinClientRect contains location-info about the element (relative to the viewport)
    //     var targetPos = target.getBoundingClientRect();
    //     //checking that dragEl is dragged over half the target y-axis or x-axis. (therefor the .5)
    //     var next =
    //       (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) >
    //         0.5 ||
    //       (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) >
    //         0.5;
    //     section.insertBefore(dragEl, (next && target.nextSibling) || target);

    //     /*  console.log("oldPos:" + JSON.stringify(oldPos));
    //      console.log("newPos:" + JSON.stringify(newPos)); */
    //     /* console.log(newPos.top === oldPos.top ? 'They are the same' : 'Not the same'); */
    //     console.log(dragEl);
    //   }
    // }
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
