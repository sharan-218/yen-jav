import React from "react";
import locIcon from "../../assets/icons/locationIcon.png";
import "./loccard.css";
const LocationCard = () => {
  return (
    <div className="loc-card">
      <div className="loc-icon">
        <img src={locIcon} alt="Location icon" />
      </div>
      <p id="loc-text">
        <strong>Ambedkar Nagar,Secunderabad,Telangana</strong>
      </p>
    </div>
  );
};

export default LocationCard;
