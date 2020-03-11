import React from "react";
import Card from "./Card";
import { ThemeContext } from "../../contexts/ThemeContext";

function Draggable(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);

    card.style.opacity = "1";
    card.style.display = "flex";
    let target = e.target;
    console.log(target.id);

    // if (target.nodeName.includes("DIV")) {
    //   target.style.backgroundColor = "";
    // } else target.style.backgroundColor = "red";
    // console.log(target.id);
    // if (target.id !== "board-1") {
    //   target.style.height = "50%";
    // }
    // not perfect, need to improve this solution, maybe a promise
    // setTimeout(() => {
    //   target.appendChild(card);
    // }, 200);

    target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <ThemeContext.Consumer>
      {context => {
        const defArr = ["experience", "education", "skills", "projects", "certifications", "achievements", "courses", "languages"]
        return (
          <>
            <div
              id="board-1"
              className="board"
              className={
                context.style.displayOneColumn ? "layoutOneColumn" : "layoutCV"
              }
              onDrop={drop}
              onDragOver={dragOver}
            >
              <div id="leftCvSection">
                {context.style.leftSide.map(el => (
  <Card
  id="card-1"
  className="dndSection"
  name={el}
  draggable="true"
>
  <p className="dndSectionP">{el}</p>
</Card>
) )}
                {props.children}</div>
              <div id="rightCvSection">
              {context.style.rightSide.map((el, i) => (
  <Card
  id='card-{i}'
  className="dndSection"
  name={el}
  draggable="true"
>
  <p className="dndSectionP">{el}</p>
</Card>
) )}{props.children}</div>
            </div>

            <div className="dndText">
              Drag and drop to add or remove sections
            </div>

            <div
              id="board-2"
              className="board"
              className="dndContainer"
              onDrop={drop}
              onDragOver={dragOver}
            >
{defArr.filter(el => !context.style.oneColumnArr.includes(el)).map(el => (
  <Card
  id="card-1"
  className="dndSection"
  name={el}
  draggable="true"
>
  <p className="dndSectionP">{el}</p>
</Card>
))}
              {/* <Card
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
              </Card> */}
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Draggable;
