import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RequestCard from "../../components/requestCard";
import TechnicalReport from "../../components/technicalReport";
import ReportDetails from "../../components/reportDetails";
import ProgressCheckList from "../../components/progressCheckList";
import ButtonList from "../../components/buttonList";
import GoogleMap from "../../components/googleMap";
import FullscreenPopup from "../../components/fullScreenPopup";

import getNestedItem from "../../utils/getDeeplyNestedItems";

import "./styles.css";

const Claims = (props) => {
  const { config } = props;
  const [popupState, setPopupState] = useState(false);
  const [claimsList, setClaimList] = useState(
    config.requestList.map((item) => {
      const link = `/claims/${item.id}`;
      item.link = link;
      item.isActive = link === window.location.pathname;
      return item;
    })
  );

  const onClickPopupActionButton = () => {
    setPopupState(false);
  }

  const onClickProgressButton = (state) => {
    // logic for authorization error or success
    if(state && config.popup[state]) {
      setPopupState(config.popup[state].error);
    } else {
      setPopupState(false);
    }
  }

  const onClickClaim = (cliamSelected) => {
    setClaimList(
      claimsList.map((item) => {
        item.isActive = false;
        if (item.id === cliamSelected.id) {
          item.isActive = true;
        }
        return item;
      })
    );
  };

  const activeClaim = claimsList.find((item) => item.isActive);

  return (
    <div className="claims-container">
      <div className="left-section">
        <div className="top-panel">
          <div className="top-left">
            <h1>{config.mainText}</h1>
            <FontAwesomeIcon icon={config.addIcon} />
          </div>
          <div className="top-right">
            <FontAwesomeIcon icon={config.filterIcon} />
            <FontAwesomeIcon icon={config.sortIcon} />
          </div>
          <div className="search-input">
            <input placeholder={config.placeHolderText} />
            <FontAwesomeIcon icon={config.searchIcon} />
          </div>
        </div>
        <div className="card-wrapper">
          {claimsList.map((item) => {
            return (
              <RequestCard {...item} onClickClaim={() => onClickClaim(item)} />
            );
          })}
        </div>
      </div>
      {activeClaim ? (
        <div className="right-section">
          <div className="report-details">
            <div className="checklist-section">
              <ReportDetails {...(activeClaim || {})} />
              <div className="report-checklist-wrapper">
                <ProgressCheckList {...(activeClaim || {})} />
                <ButtonList
                  status={getNestedItem(activeClaim, "progress.status", {
                    fallback: true,
                  })}
                  onClickButton={onClickProgressButton}
                />
              </div>
            </div>
            <div className="section-map">
              <GoogleMap {...getNestedItem(activeClaim, "map", {})} />
            </div>
          </div>
          <TechnicalReport {...(activeClaim.report || { fallback: true })} />
        </div>
      ) : <div className="fallback-right-section">
        Please select a claim to see details  
      </div>}
      {popupState ? <FullscreenPopup popup={popupState} onClickActionButton={onClickPopupActionButton} /> : null}
    </div>
  );
};

export default Claims;
