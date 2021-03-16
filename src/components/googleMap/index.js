import React from "react";

import "./styles.css";

const GoogleMap = (props) => {
  const { title, query, width, height } = props;
  return (
    <div className="map-wrapper">
      <iframe
        title={title}
        width={width}
        height={height}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src={`https://maps.google.com/maps?width=${width}&height=${height}&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
