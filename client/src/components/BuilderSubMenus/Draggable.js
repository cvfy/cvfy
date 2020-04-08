import React from "react";
import Card from "./Card";
import { ThemeContext } from "../../contexts/ThemeContext";

function Draggable(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    e.target.appendChild(card);
    let target = e.target;
    console.log(target.id);
    target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <>
            <div
              id="board-1"
              className={
                context.style.displayOneColumn
                  ? "layoutOneColumn board"
                  : "layoutCV board"
              }
              onDrop={e => drop(e)}
              onDragOver={e => dragOver(e)}
            >
              <div id="leftCvSection">{props.children}</div>
              <div id="rightCvSection">{props.children}</div>
            </div>

            <div className="dndText">
              Drag and drop to add or remove sections
            </div>

            <div
              id="board-2"
              className="dndContainer board"
              onDrop={e => drop(e)}
              onDragOver={e => dragOver(e)}
            >
              {props.children}

              <Card
                id="card-1"
                className="dndSection"
                name="experience"
                draggable="true"
              >
                <p className="dndSectionP">Experience</p>
              </Card>
              <Card
                id="card-2"
                className="dndSection"
                name="education"
                draggable="true"
              >
                <p className="dndSectionP">Education</p>
              </Card>
              <Card
                id="card-3"
                className="dndSection"
                name="skills"
                draggable="true"
              >
                <p className="dndSectionP">Skills</p>
              </Card>
              <Card
                id="card-4"
                className="dndSection"
                name="projects"
                draggable="true"
              >
                <p className="dndSectionP">Projects</p>
              </Card>
              <Card
                id="card-5"
                className="dndSection"
                name="certifications"
                draggable="true"
              >
                <p className="dndSectionP">Certifications</p>
              </Card>
              <Card
                id="card-6"
                className="dndSection"
                name="achievements"
                draggable="true"
              >
                <p className="dndSectionP">Achievements</p>
              </Card>
              <Card
                id="card-7"
                className="dndSection"
                name="courses"
                draggable="true"
              >
                <p className="dndSectionP">Courses</p>
              </Card>
              <Card
                id="card-8"
                className="dndSection"
                name="languages"
                draggable="true"
              >
                <p className="dndSectionP">Languages</p>
              </Card>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Draggable;
