import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import "./styles.css";

const RequestCard = (props) => {
  const { appointment, taskText, actionButton, customer, notes, isActive, onClickClaim, link } = props;

  return <Link to={link} className={`request-card ${isActive ? `active` : ``}`} onClick={onClickClaim}>
    <div className="card-top-section">
      <div className="date-section">
        <div className="month" style={{background: appointment.topColor}}>{appointment.month}</div>
        <div className="date" style={{background: appointment.topColor}}>{appointment.date}</div>
        <div className="time" style={{background: appointment.bottomColor}}>{appointment.time}</div>
      </div>
      <div className="details-section">
        <div className="task-text">{taskText}</div>
        <div className="name-section">{customer.name}</div>
        <div className="notes-text">{notes}</div>
        <div className="location-section">
          <FontAwesomeIcon icon={customer.locationIcon} />
          <div className="address-section">{customer.address}</div>
        </div>
      </div>
    </div>
    <div className="card-bottom-section">
      <div className="action-buttom" style={{background: actionButton.backgroundColor}}>{actionButton.text}</div>
    </div>
  </Link>
}

export default RequestCard;