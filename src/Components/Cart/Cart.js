import React from "react";
import "./Cart.css";
const Cart = ({cart}) => {
  const { image, name } = cart;
  return (
    <div className="single-cart-container">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Cart;
