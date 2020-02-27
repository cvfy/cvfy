import React from "react";
import Board from "./Board";
import Card from "./Card";

function Draggable() {
  return (
    <>
      <Board id="board-1" className="layoutCV"></Board>

      <div className="dndText">Drag and drop to add or remove sections</div>

      <Board id="board-2" className="dndContainer">
        <Card id="card-1" className="dndSection" draggable="true">
          <p className="dndSectionP">Experience</p>
        </Card>
        <Card id="card-2" className="dndSection" draggable="true">
          <p className="dndSectionP">Education</p>
        </Card>
        <Card id="card-3" className="dndSection" draggable="true">
          <p className="dndSectionP">Skills</p>
        </Card>
        <Card id="card-4" className="dndSection" draggable="true">
          <p className="dndSectionP">Projects</p>
        </Card>
        <Card id="card-5" className="dndSection" draggable="true">
          <p className="dndSectionP">Certifications</p>
        </Card>
        <Card id="card-6" className="dndSection" draggable="true">
          <p className="dndSectionP">Achievements</p>
        </Card>
        <Card id="card-7" className="dndSection" draggable="true">
          <p className="dndSectionP">Languages</p>
        </Card>
      </Board>
    </>
  );
}

export default Draggable;
