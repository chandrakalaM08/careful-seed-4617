// Importing necessary modules
import React from 'react';
import styles from "../Style/ProductCard.css"
// import { Link } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa';

const ProductCard = ({ product }) => {
const { id, discountedprice, price, img, title } = product;

return (
<div key={id} className={styles['product-card']}>
{/* Link to single product page /}
{/ <Link to={/product/${id}}> /} */
<img
className={styles['product-card__img']}
src={img[0]}
alt="Product Img"
/>
/*{/ </Link> */}

  {/* Product details */}
  <div className={styles['product-card__details']}>
    <h2 className={styles['product-card__price']}>₹{discountedprice}</h2>
    <p className={styles['product-card__discounted-price']}>₹{price}</p>
  </div>

  {/* Delivery date */}
  <a href='https://google.com' className={styles['product-card__delivery-link']}>
    <h1>Check Delivery Date </h1>
  </a>

  {/* Product title */}
  <h3 className={styles['product-card__title']}>{title}</h3>

  {/* Try at home and video call buttons */}
  <div className={styles['product-card__buttons']}>
    <button className={styles['product-card__try-at-home']}>Book Try at Home</button>
    <button className={styles['product-card__video-call']}>
      <FaVideo style={{ color: 'green' }} />
    </button>
  </div>
</div>
);
};

export default ProductCard; 









