import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./styles.css";

const ButtonList = (props) => {
  const { status = [], fallback, onClickButton } = props;
  if(fallback) {
    return null;
  }
  return <div className="button-list-wrapper">
    {status.map(item => {
      return <div className="button-wrapper" style={{background: item.backgroundColor}} onClick={() => onClickButton(item.id)}>
        <FontAwesomeIcon icon={item.icon} />
        <div className="button-text">{item.text}</div>
      </div>
    })}
  </div>
}

export default ButtonList;