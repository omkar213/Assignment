import React, { useEffect, useState } from "react";

const Location = () => {
  const [currentLoc, setCurretLoc] = useState({});

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const {latitude, longitude} = position.coords;
          setCurretLoc({latitude, longitude});
        });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getGeoLocation();
  })

  return (
  <div>
    <h2>Current Location</h2>
    <p>latitude: {currentLoc.latitude}</p>
    <p>longitude: {currentLoc.longitude}</p>
  </div>);
};

export default Location;
