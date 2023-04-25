import React, { useEffect, useState } from "react";
import {TbWorldLatitude, TbWorldLongitude} from 'react-icons/tb'

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
  },[])

  return (
  <div className="location-container">
    <h2>Current Location</h2>
    <p><TbWorldLatitude size={18}/> Latitude: {currentLoc.latitude}</p>
    <p><TbWorldLongitude size={18}/> Longitude: {currentLoc.longitude}</p>
  </div>);
};

export default Location;
