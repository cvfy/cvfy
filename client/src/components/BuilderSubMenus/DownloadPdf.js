import React from "react";

const DownloadPdf = props => {
  return (
    <div className="download-btn" onClick={props.handleDownload}>
      <div className="downloadDiv">
        <span className="tool-icon first-icon">⤓</span>
        <span className="tool-desc tool-download">
          {props.loadingDownload && (
            <i class="fas fa-spinner fa-spin" style={{ marginRight: 5 }}></i>
          )}
          {props.loadingDownload && <span>Downloading</span>}
          {!props.loadingDownload && <span>Download</span>}
        </span>
      </div>
    </div>
  );
};

export default DownloadPdf;
