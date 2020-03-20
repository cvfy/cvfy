import React, {getState} from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import store from "./../../../store.js";


function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;}
class CoverLetterBody extends React.Component {
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
                    onBlur={e => modifyCover("text", e.target.innerText)}
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3
                    }}
                  >
                    {this.props.data.text}
                    </span>
                </div>
              </div>

              <div className="editableDiv signatureDiv">
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
                >{aFunction()}</span>
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
