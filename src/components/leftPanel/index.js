import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import "./styles.css";

const LeftPanel = (props) => {
  const { onClickLink, linkList = [], logo } = props;

  return <div className="left-panel">
    <div className="main-logo-wrapper">
      <img src={logo.src} alt="logo" title="logo" />
    </div>
    <div className="links-wrapper">
      {linkList.map(item => {
        return <Link onClick={() => onClickLink(item)} key={item.link} className={`link-item ${item.isActive ? `active` : ``}`} to={item.link}>
          <FontAwesomeIcon icon={item.icon} />
          <div>{item.title}</div>
        </Link>
      })}
    </div>
  </div>
}

export default LeftPanel;