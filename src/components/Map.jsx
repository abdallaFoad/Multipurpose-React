import React from "react";
import '../styles/components/Map.scss';


const Map = () => {
  return (
    <div className="map-container">
      <iframe
        width="600"
        height="500"
        src="https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scro
        lling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
