import React from "react";
import "../../styles/touristCard.css";
import CardBtn from "./CardBtn";
const TouristCard = ({ city, text, image, link }) => {
  return (
    <div className="tourist_card">
      <img className="card_img" src={image} alt={city} />
      <h1>{city}</h1>
      <p>{text}</p>
      <CardBtn link={link} />
    </div>
  );
};

export default TouristCard;
