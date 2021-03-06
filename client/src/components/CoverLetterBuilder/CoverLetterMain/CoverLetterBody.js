import React from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import store from "./../../../store.js";

function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;
}

class CoverLetterBody extends React.Component {
  state = { text: "" };
  onchange = e => {
    e.preventDefault();
    this.setState({ text: e.target.innerText });
    if (this.state.text.length > 300) {
      this.props.cont.jumpTo2Page(this.props.index, this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          const { modifyCover } = context;
          return (
            <div className="cover-letter-body-wrapper">
              <div className="cover-letter-body">
                <div className="editableDiv bodyCoverDiv">
                  <span
                    className="coverLetterBody"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onBlur={e =>
                      modifyCover(this.props.index, "text", e.target.innerHTML)
                    }
                    style={{
                      fontSize: context.style.size3,
                      whiteSpace: "pre-line"
                    }}
                  >
                    {this.props.data.text}
                  </span>
                </div>
              </div>

              <div
                className="editableDiv signatureDiv"
                style={{
                  display: `${
                    context.coverLetters.filter(el => el.text !== "").length -
                      1 !==
                    this.props.index
                      ? "none"
                      : "flex"
                  }`
                }}
              >
                <span
                  className="coverLetterRegards"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.style.size3
                  }}
                ></span>
                <span
                  className="coverLetterSignature"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.style.size3
                  }}
                >
                  {aFunction()}
                </span>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}
store.subscribe(aFunction);

export default CoverLetterBody;
