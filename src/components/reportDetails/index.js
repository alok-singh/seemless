import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const ReportDetails = (props) => {
  const { taskText, customer = {}, notes, progress = {}, editIcon } = props;

  return (
    <div className="progress-report">
      <div className="task-title">{taskText}</div>
      <div className="name-section-wrapper">
        <div className="name-section">{customer.name}</div>
        <FontAwesomeIcon icon={editIcon} />
      </div>
      <div className="notes-text">{notes}</div>
      <div className="notes-text">Email: {customer.email}</div>
      <div className="notes-text">Phone: {customer.contact}</div>
      <div className="location-section">
        <FontAwesomeIcon icon={customer.locationIcon} />
        <div className="address-section">{customer.address}</div>
      </div>
      <div className="image-wrapper">
        {(progress.imageList || []).slice(0, 3).map((image, index) => {
          return (
            <img src={image} key={`image-${index}`} alt={`demage-${index}`} />
          );
        })}
      </div>
      <div className="icon-list-wrapper">
        <div className="image-background">
          <img src={customer.callIcon} alt="call" title="call" />
        </div>
        <div className="icon-text">{customer.callText}</div>
      </div>
      <div className="icon-list-wrapper">
        <div className="image-background">
          <img src={customer.messageIcon} alt="message" title="message" />
        </div>
        <div className="icon-text">{customer.messageText}</div>
      </div>
    </div>
  );
};

export default ReportDetails;
