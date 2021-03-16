import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const FullscreenPopup = (props) => {
  const { popup, onClickActionButton } = props;
  const { icon, color, title, description, actionButton } = popup;
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="top-section">
          <div className="icon-wrapper" style={{ color }}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="title">{title}</div>
        </div>
        <div className="description">{description}</div>
        <div className="popup-button">
          <button style={{ background: actionButton.backgroundColor }} onClick={onClickActionButton}>
            {actionButton.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenPopup;
