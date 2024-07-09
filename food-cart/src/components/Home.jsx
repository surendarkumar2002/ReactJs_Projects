/* eslint-disable react/prop-types */
import { useState } from 'react';
import data from '../assets/food.json';
import Product from './Product';
import './Home.css';

const Home = () => {
    
  const [products]=useState(data);
    
  return (
    <div className='product-container' >
       {products.map((prod)=>(
         <Product key={prod.id} prod={prod} />
       ))}
    </div>
  );
};

export default Home;
