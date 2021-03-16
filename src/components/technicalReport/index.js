import React from "react";

import "./styles.css";

const TechnicalReport = (props) => {
  const {
    title,
    noteTitle,
    description,
    demageListTitle,
    demageList,
    demagePicturesTitle,
    demageValue,
    imageList,
    fallback
  } = props;
  
  if(fallback) {
    return <div>Please select a claim</div>
  }

  return (
    <div className="detailed-report">
      <div className="detailed-title">{title}</div>
      <div className="details-wrapper">
        <div className="detailed-left-section">
          <div className="notes-title">{noteTitle}</div>
          <div className="notes-description">{description}</div>
          <div className="notes-title">{demageListTitle}</div>
          <div className="notes-description">
            {demageList.map((item, index) => {
              return (
                <div key={`image-${index}`} className="demage-item">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="detailed-right-section">
          <div className="notes-title">{demagePicturesTitle}</div>
          <div className="notes-description">{demageValue}</div>
          <div className="image-wrapper">
            {(imageList || []).slice(0, 3).map((image, index) => {
              return (
                <img
                  src={image}
                  key={`image-${index}`}
                  alt={`demage-${index}`}
                />
              );
            })}
            {imageList.length === 4 ? (
              <img src={imageList[3]} key={`image-4`} alt={`demage-4`} />
            ) : imageList.length < 4 ? null : (
              <div className="more-image">+{imageList.length - 3} More</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalReport;
