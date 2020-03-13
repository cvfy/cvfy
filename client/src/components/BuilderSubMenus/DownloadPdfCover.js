import React from "react";

const DownloadPdfCover = props => {
  return (
    <div className="download-btn" onClick={props.handleCoverDownload}>
      <div className="downloadDiv">
        <span className="tool-icon first-icon">⤓</span>
        <span className="tool-desc tool-download">
          {props.downloadCoverState && (
            <i class="fas fa-spinner fa-spin" style={{ marginRight: 5 }}></i>
          )}
          {props.downloadCoverState && <span>Downloading</span>}
          {!props.downloadCoverState && <span>Download</span>}
        </span>
      </div>
    </div>
  );
};

export default DownloadPdfCover;
