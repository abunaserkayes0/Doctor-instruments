import React from "react";
import "./RandomItem.css";
const RandomItem = ({ randomItem }) => {
  const { name, image } = randomItem;
  return (
    <div className="selected-items">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default RandomItem;
