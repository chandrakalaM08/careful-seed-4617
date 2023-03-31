// Importing necessary modules
import React from 'react';
import { useState } from 'react';
import styles from "../Style/ProductCard.module.css"
 import { Link } from 'react-router-dom';
import { FaVideo,FaHome } from 'react-icons/fa';


const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
const { id, discountedprice, price, img, title } = product;

return (
<div key={id} className={styles['product-card']}>
{/* Link to single product page */}
<Link to={`/product/${product.id}`}>
<img src={isHovered ? img[1] : img[0]}
alt="product_image"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
className={styles['product-card__img']}

/>
</Link> 

  {/* Product details */}
  <div className={styles['product-card__details']}>
    <h2 className={styles['product-card__price']}>₹{discountedprice}</h2>
    <p className={styles['product-card__discounted-price']}>₹{price}</p>
  </div>

  {/* Delivery date */}
  <a href='https://google.com' className={styles['product-card__delivery-link']}>
      <h1>Check Delivery Date > </h1>
  </a>

  {/* Product title */}
  <h3 className={styles['product-card__title']}>{title}</h3>

  {/* Try at home and video call buttons */}
  <div className={styles['product-card__buttons']}>
    <button className={styles['product-card__try-at-home']}> <FaHome/> Book Try at Home</button>
    <button className={styles['product-card__video-call']}>
      <FaVideo style={{ color: 'green' }} /> <span>  Live Video Call</span> 
    </button>
  </div>
</div>
);
};

export default ProductCard; 









