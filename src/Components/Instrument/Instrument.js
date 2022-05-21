import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Instrument.css";
const Instrument = (props) => {
  const { handelAddToCart,instrument } = props;
  const { image, name, price } = instrument;
  return (
    <div className="single-container">
      <div>
        <img src={image} alt="" />
      </div>
      <h4>{name}</h4>
      <h2>${price}</h2>
      <button onClick={() => handelAddToCart(instrument)}>
        Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
      <div>
        
      </div>
    </div>
  );
};

export default Instrument;
