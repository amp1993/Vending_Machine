import React from "react";
import "./VendingMachine.css"

import {  Link } from "react-router-dom";


const VendingMachine = () => { 

    return (
        <>

            <div className="base-container">
            <h1 className="vending-machine-title">Hello, I am a vending machine. What would you like?</h1>

                <div className="snack-list">
                <p className="left" id="chips"><Link to="/chips">Chips</Link></p>
                <p className="left" id="soda"><Link to="/soda">Soda</Link></p>
                <p className="right" id="chocolate"><Link to="/chocolate">Chocolate</Link></p>
                <p className="right" id="hardcandy"><Link to="/hardcandy">Hard Candy</Link></p>
                </div>
                
            </div>
        </>
    )
};

export default VendingMachine;