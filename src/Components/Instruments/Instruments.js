import React, { useEffect, useState } from 'react';
import Instrument from '../Instrument/Instrument';
import './Instruments.css';
const Instruments = () => {
    const[instruments,setInstruments]=useState([]);
    useEffect(() => {
        fetch('instruments.json')
        .then(res=>res.json())
        .then(data=>setInstruments(data))
    },[])
    return (
        <div className='instruments-container'>
            <div className='instrument-container'>
                {
                    instruments.map(instrument=><Instrument key={instrument.id} instrument={instrument}></Instrument>)
                }
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Instruments;