import React from "react";
import Card from "./Card";
import { ThemeContext } from "../../contexts/ThemeContext";

function Draggable(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
e.target.appendChild(card)
    // card.style.opacity = "1";
    // card.style.display = "flex";

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
        const BigArr = [...context.style.leftSide, ... context.style.rightSide].map(x => x.name);
        console.log(BigArr)
        const defArr = [{name: "experience", id: "card-1"}, {name: "education", id: "card-2"}, {name: "skills", id: "card-3"}, {name: "projects", id: "card-4"}, {name: "certifications", id: "card-5"}, {name: "achievements", id: "card-6"}, {name: "courses", id: "card-7"}, {name: "languages", id: "card-8"}]
        const newArr = defArr.filter(el => !(BigArr.includes(el.name)))
        console.log(newArr)
        //newArr.map((el) => el ? console.log(el): console.log("nothing to see here"))
        return (
          <>
            <div
              id="board-1"
              className="board"
              className={
                context.style.displayOneColumn ? "layoutOneColumn" : "layoutCV"
              }
              onDrop={(e) => drop(e)}
              onDragOver={(e) => dragOver(e)}
            >
              <div id="leftCvSection">
              {props.children}
                {context.style.leftSide.map(el => (
  <Card
  id={el.id}
  className="dndSection"
  name={el.name}
  draggable="true"
>
  <p className="dndSectionP">{el.name}</p>
</Card>
) )}
                </div>
              <div id="rightCvSection">
              {props.children}
              {context.style.rightSide.map(el => (
  <Card
  id={el.id}
  className="dndSection"
  name={el.name}
  draggable="true"
>
  <p className="dndSectionP">{el.name}</p>
</Card>
) )}
</div>
            </div>

            <div className="dndText">
              Drag and drop to add or remove sections
            </div>

            <div
              id="board-2"
              className="board"
              className="dndContainer"
              onDrop={(e) => drop(e)}
              onDragOver={(e) => dragOver(e)}
            >
               {props.children}
{ newArr.map(el => (
  <Card
  id={el.id}
  className="dndSection"
  name={el.name}
  draggable="true"
>
  <p className="dndSectionP">{el.name}</p>
</Card>
))}
               {/* <Card
                id="card-1"
                className="dndSection"
                name="experience"
                draggable="true"
              >
                <p className="dndSectionP">Experience</p>
              </Card> */}
              {/*<Card
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
