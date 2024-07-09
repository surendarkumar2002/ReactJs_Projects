/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { cartContext } from "../App";

const ViewCart = () => {

  const{cart}=useContext(cartContext);
  const[total,setTotal]=useState(0);

  useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart])

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
       {
        cart.map((prod)=>(
          <div className="cart-product" key={prod.id}>
          <div className="img">
            <img src={prod.pic} alt="image" />
          </div>
          <div className="cart-product-details">
            <h3>{prod.name}</h3>
            <p>Price Rs: {prod.amt}</p>
          </div>
        </div>
        ))
       }
       
      </div>
      

      <h2 className="cart-amt">Total Amount Rs: {total}</h2>
    </>
  );
};

export default ViewCart;
