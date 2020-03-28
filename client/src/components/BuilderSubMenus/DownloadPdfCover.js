import React from "react";

const DownloadPdfCover = props => {
  return (
    <div className="download-btn" onClick={props.handleCoverDownload}>
      <div className="downloadDiv">
        {props.downloadCoverState && null}
        {!props.downloadCoverState && (
          <span className="tool-icon first-icon">⤓</span>
        )}
        <span className="tool-desc tool-download">
          {props.downloadCoverState && (
            <i
              className="fas fa-circle-notch fa-spin"
              style={{ marginRight: 5 }}
            ></i>
          )}
          {props.downloadCoverState && <span>Downloading</span>}
          {!props.downloadCoverState && <span>Download</span>}
        </span>
      </div>
    </div>
  );
};

export default DownloadPdfCover;
