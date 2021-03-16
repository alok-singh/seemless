import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const ProgressCheckList = (props) => {
  const { progress = {} } = props;
  const { title, checkList = [] } = progress;
  return (
    <div className="progress-checklist">
      <div className="title">{title}</div>
      <div className="timeline">
        {checkList.map(({ itemIcon, title, dateTime, calendarIcon, isDone }) => {
          return (
            <div className={`checklist-text ${isDone ? `done` : ``}`}>
              <FontAwesomeIcon icon={itemIcon} />
              <div className="vertical-line" />
              <div className="item-right-section">
                <div className="item-text">{title}</div>
                {dateTime ? (
                  <>
                    <FontAwesomeIcon icon={calendarIcon} />
                    <span>{dateTime}</span>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressCheckList;
