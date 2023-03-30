import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import  ProductCard  from './ProductCard';

import styles from "../Style/ProductList.module.css";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();


  async function getProducts() {
  const response = await fetch(`http://localhost:3000/products`);
  const data = await response.json();
console.log("here data is", data)
  return data;
}

  useEffect(() => {
    const fetchProducts = async () => {
      const order = searchParams.get("order");
      let paramObj = {
        category: searchParams.getAll("category"),
        _sort: order && "price",
        _order: order, //asc or desc
      };
      const response = await getProducts(paramObj);
      setProducts(response);
    };
    fetchProducts();
  }, [searchParams]);

  return (
    <div className={styles["productdiv"]}>
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
    </div>
  );
}
