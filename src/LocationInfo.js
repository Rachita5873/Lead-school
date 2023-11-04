import React from 'react';
import "./LocationInfo.css";

const LocationInfo = ({location}) => {
  return (
    <div >
     {location && (
        <div className="place-info">
          <h1><u>Location Information</u></h1>
          <p>Country: {location.country}</p>
          <p>State: {location.places[0]['state']}</p>
          <p>Place: {location.places[0]['place name']}</p>
        </div>
      )}
    </div>
  )
}

export default LocationInfo