

import React, { useEffect } from 'react'

import Navbar from '../Components/Navbar';
import {ProductsList}  from '../Components/ProductList';
import  {Sidebar}  from "../Components/Sidebar";
import styles from "../Style/Products.module.css";
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


export default function Products() {
  const [searchParams] = useSearchParams();
  let queryParam = searchParams.get('category') || ""
  const [selectedCategory, setSelectedCategory] = useState(queryParam)
  const [selectedSort, setSelectedSort] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")

  useEffect(() => {
    setSelectedCategory(queryParam)
  }, [queryParam])

    return (
      
         <>
    <Navbar/>
    <div>
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-componet"]}>
              <Sidebar setSelectedCategory={setSelectedCategory}
                setSelectedSort={setSelectedSort}
                setSelectedPrice={ setSelectedPrice} />
        </div>
        <div className={styles["products-list"]}>
              <ProductsList selectedCategory={selectedCategory}
                selectedSort={selectedSort}
                selectedPrice={ selectedPrice} />
        </div>
      </div>
    </div>
   
    </>
    )
}

