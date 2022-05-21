import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Instrument from "../Instrument/Instrument";
import "./Instruments.css";
const Instruments = () => {
  const [instruments, setInstruments] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("instruments.json")
      .then((res) => res.json())
      .then((data) => setInstruments(data));
  }, []);
  const handelAddToCart = (product) => {
    const newInstruments = [...cart, product];
    setCart(newInstruments);
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
        <div>
            {
                cart.map(cart =><Cart key={cart.id} cart={cart}></Cart> )
            }
        </div>
      </div>
    </div>
  );
};

export default Instruments;
