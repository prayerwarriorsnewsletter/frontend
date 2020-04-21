import React from "react";
import "./PrayerCard.css";

const PrayerCard = ({ prayer }) => {
  return (
    <div className="fullCard" id="thumbnail">
      <div className="cardContent">
        <div className="cardText">
          <h4>Pray for {prayer.name}</h4>
          <hr />
          <p>{prayer.request}</p>
          <p>{prayer.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
