/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";



const Product = ({ prod }) => {

  const {cart,setCart}=useContext(cartContext);
  
  const name =
    prod.name.length > 21 ? prod.name.substring(0, 20) + ".." : prod.name;

  const addCart=()=>{
    setCart([...cart,prod]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=> c.id !== prod.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={prod.pic} alt={prod.name} />
      </div>

      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs:{prod.amt}</p>
        {
            cart.includes(prod)?(
                <button className="btn-remove" onClick={removeCart} >Remove from Cart</button>
            ):
            (
                <button onClick={addCart}>Add to Cart</button>
            )
        }
      </div>
    </div>
  );
};

export default Product;
