

import React from 'react'

import Navbar from '../Components/Navbar';
import {ProductsList}  from '../Components/ProductList';
import  {Sidebar}  from "../Components/Sidebar";
import styles from "../Style/Products.module.css";



export default function Products() {
    return (
      
         <>
    <Navbar/>
    <div>
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-componet"]}>
          <Sidebar />
        </div>
        <div className={styles["products-list"]}>
          <ProductsList />
        </div>
      </div>
    </div>
   
    </>
    )
}

