import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Instrument from "../Instrument/Instrument";
import RandomItem from "../RandomItem/RandomItem";
import "./Instruments.css";
// All-State
const Instruments = () => {
  const [instruments, setInstruments] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomItem, setRandomItem] = useState([]);
  // Load data
  useEffect(() => {
    fetch("instruments.json")
      .then((res) => res.json())
      .then((data) => setInstruments(data));
  }, []);
  // Handel add To cart function
  const handelAddToCart = (product) => {
    const newInstruments = [...cart, product];
    setCart(newInstruments);
  };
  // Handel choose one  function
  const handelChooseOne = (singleProduct) => {
    const randomItems =
      singleProduct[Math.floor(Math.random() * singleProduct.length)];
    setRandomItem(randomItems);
  };
  // Handel Remove cart function
  const handelRemoveToCart = (product) => {
    setCart([]);
  };
  return (
    <div className="instruments-container">
      <div className="instrument-container">
        {instruments.map((instrument) => (
          <Instrument
            key={instrument.id}
            instrument={instrument}
            handelAddToCart={handelAddToCart}
          ></Instrument>
        ))}
      </div>
      <div className="cart-container">
        <h3>Selected Instruments</h3>
        <h2>Selected Item:{cart.length}</h2>
        <div>
          {cart.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>

        <button onClick={() => handelChooseOne(cart)}>Choose One</button>
        <button onClick={() => handelRemoveToCart(cart)}>RemoveItems</button>
        <div>{<RandomItem randomItem={randomItem}></RandomItem>}</div>
      </div>
    </div>
  );
};

export default Instruments;
