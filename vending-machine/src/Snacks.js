import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Snacks.css'




const Chips = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
        localStorage.setItem('quantity', updatedQuantity); // Update the stored quantity in local storage
    };

     return(
        <>
            <div className="product-detail-page">
            <h3>Purchase Chips:</h3>
            <h5>{quantity}</h5>
            <button onClick={()=>increaseQuantity()}>Add</button>
            <h5><Link to="/">Go Back</Link></h5>
            </div>
            
        </>)
  
};


const Soda = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

     return(
        <>
        <div className="product-detail-page">
            <h3>Purchase Soda:</h3>
            <h5>{quantity}</h5>
            <button onClick={()=>increaseQuantity()}>Add</button>
            <h5><Link to="/">Go Back</Link></h5>
            </div>
        </>)

};

const Chocolate = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

     return(
        <>
                <div className="product-detail-page">

            <h3>Purchase Chocolate:</h3>
            <h5>{quantity}</h5>
            <button onClick={()=>increaseQuantity()}>Add</button>
            <h5><Link to="/">Go Back</Link></h5>
            </div>
        </>)

}


const HardCandy = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

     return(
        <>
                <div className="product-detail-page">

            <h3>Purchase Hard Candy:</h3>
            <h5>{quantity}</h5>
            <button onClick={()=>increaseQuantity()}>Add</button>
            <h5><Link to="/">Go Back</Link></h5>
            </div>
        </>)
};




export  {
    Chips, 
    Soda, 
    Chocolate, 
    HardCandy, 
  
}

