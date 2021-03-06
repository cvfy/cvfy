import React from "react";
import "../../../styles/CoverLetterMain.css";
import CoverLetterHeaderExecutive from "./CoverLetterHeaderExecutive";
import CoverLetterBody from "./CoverLetterBody";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";

const CoverLetterExecutive = () => {
  return (
    <CoverLetterContext.Consumer>
      {context => {
        const Pages = context.coverLetters.map((el, i) => {
          if (el.text.length > 0) {
            return (
              <div
                id="container"
                style={{
                  fontFamily: context.style.font,
                  fontSize: context.style.size3
                }}
              >
                {el.contact && (
                  <CoverLetterHeaderExecutive data={el} index={i} />
                )}
                <div className="wrap">
                  <CoverLetterBody
                    cont={context}
                    index={i}
                    data={el}
                  ></CoverLetterBody>
                </div>
              </div>
            );
          } else {
            return "";
          }
        });
        return <div className="alignContainer">{Pages}</div>;
      }}
    </CoverLetterContext.Consumer>
  );
};

export default CoverLetterExecutive;
