import React, { useEffect, useState } from 'react';
import './Instruments.css';
const Instruments = () => {
    const[instruments,setInstruments]=useState([]);
    useEffect(() => {
        fetch('instruments.json')
        .then(res=>res.json())
        .then(data=>setInstruments(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Instruments;