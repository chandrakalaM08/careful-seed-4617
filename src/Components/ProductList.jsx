import React, { useEffect, useState } from "react";
import { useLocation,useSearchParams } from "react-router-dom";

import  ProductCard  from './ProductCard';

import styles from "../Style/ProductList.module.css";

 

export const ProductsList = ({selectedCategory,selectedSort, selectedPrice}) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const fetchProducts = async () => {
      console.log("inseide useeffect in productlist", selectedCategory)
      let order = searchParams.get("order");
      let priceFilter = ""
      if (selectedPrice !== "") {
        let arr = selectedPrice.split('-')
        let lowerLimit = +arr[0].trim().slice(1, 100).replace(',', '')
        let upperLimit = +arr[1].trim().slice(1,100).replace(',','')
        priceFilter += `&discountedprice_lte=${upperLimit}&discountedprice_gte=${lowerLimit}`
      }
      if (selectedSort !== "") {
        order=selectedSort
      }
      
      let paramObj = {
        category:  selectedCategory.length > 0 ? selectedCategory  : searchParams.getAll("category"),
        _sort: order && "discountedprice",
        _order: order, //asc or desc
      };
      let objString = "";
      if (selectedCategory.length > 0) {
        objString = '?' + new URLSearchParams(paramObj).toString();
        if (priceFilter !== "") {
          objString += priceFilter
        }
      }
      else if(selectedSort !== "") {
        objString = `?_sort=discountedprice&_order=${order}`
        if (priceFilter !== "") {
          objString += priceFilter
        }
      }
      else if (priceFilter !== "") {
          objString += "?" + priceFilter
      }
      
      const response = await fetch(`http://localhost:3000/products`+ objString);
      
      const data = await response.json();
      setProducts(data);
      
    };
    fetchProducts();
  }, [location.search, searchParams,selectedCategory,selectedSort, selectedPrice]);

  return (
    <div>
    <div className={styles["productdiv"]}>
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
      <div>
        {products.length === 0 && (<h2>No Products Found For Selected Criteria</h2>)}
      </div>
      </div>
  );
}
