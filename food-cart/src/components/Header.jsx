/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Header.css';
import { useContext } from "react";
import { cartContext } from "../App";


const Header = () => {

  const {cart}=useContext(cartContext);

  return (
    <>
     <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}> <span className="cart-count">{cart.length}</span> View Cart</Link>
            </li>
        </ul>
     </div>
    </>
  )
}

export default Header