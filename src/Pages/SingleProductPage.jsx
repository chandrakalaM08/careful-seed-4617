import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Badge,Icon } from '@chakra-ui/react'
import CarouselCard from "../Components/CarouselCard"
import { FaVideo,FaHome } from 'react-icons/fa';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
 
  // Fetch product data from server on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://statuesque-vast-beet.glitch.me/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);
    
  const handleAddToCart = () => {
    setQuantity((prev)=> prev+1)
    let cartItems = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    const selectedProduct = {weight:product.weight, id: product.id, img: product.img, price: product.price, title: product.title, discountedprice: product.discountedprice, quantity: 1};
    cartItems.push(selectedProduct);

    localStorage.setItem('cartItems', JSON.stringify(cartItems))   
  
  };


  return (
    <>
    <Navbar/>
    
    <div style={{paddingTop:'100px',backgroundColor: "rgb(245, 245, 245)"}}>
      {product && product.img && (
        <div style={{display:'flex'}}>
          <div style={{ width:'700px', marginLeft:"80px"}}>
          <img src={product.img[0]} alt="" style={{width:"110%"}}/>
          </div>
        <div style={{width:'65%',textAlign:'left',marginLeft:"150px",padding:'50px',backgroundColor:'#F5F5F5'}}>
        <br />
        <h1 style={{fontSize:'28px',color:'#4F3267',fontWeight:"bolder"}}>{product.title}</h1><Badge variant='solid' colorScheme='green' fontSize={12} fontWeight={"bold"}>
    BESTSELLER
  </Badge>
  <p>{product.description}</p>
        <div style={{display:'flex',marginTop:'60px',justifyContent:'space-around'}}>
        <div>
        <label htmlFor="size">Select Size</label>
        <br />
        <select style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px'}} name="size" onChange={(e) => console.log(e.target.value)}>
  <option value="XS">6</option>
  <option value="S">7</option>
  <option value="M">8</option>
  <option value="L">9</option>
  <option value="XL">10</option>
</select>
</div>
<div>
<label htmlFor="size">Delivery & Store Details</label>
        <br />
<input style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px'}} placeholder="PINCODE" />
</div>
</div>
<br />
<div>
<label htmlFor="size" style={{marginLeft: "48px"}}>Customization</label>
        <br />
        <select style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px', marginLeft: "48px"}} name="size" onChange={(e) => console.log(e.target.value)}>
  <option value="XS">14 KT White Gold</option>
  <option value="S">14 KT Yellow Gold</option>
  <option value="M">18 KT Rose Gold</option>
  <option value="L">18 KT White Gold</option>
  <option value="XL">18 KT Yellow Gold</option>
</select>
</div>
<div style={{display:'flex',marginTop:'30px',gap:'20px'}}>
<h1 style={{fontSize:'20px', fontWeight:'bolder',marginLeft:"65px"}}>₹{product.discountedprice}</h1>
<h1 style={{fontSize:'17px',color:'gray',textDecoration:"line-through"}}>₹{product.price}</h1>
</div>

<div style={{display:'flex',marginTop:'30px',justifyContent:'space-around'}}>
<Link to={"/cart"}>
<button onClick={handleAddToCart} 
style={{width:'200px',fontSize:'16px',color:'white',background:'linear-gradient(to right,#de57e5,#8863fb)', padding:'17px', borderRadius:'8px', borderStyle:"none"}}>
    ADD TO CART</button>
</Link>

<button style={{width:'200px',fontSize:'16px',backgroundColor:'#DCD2FE', padding:'17px', borderRadius:'8px',borderStyle:"none"}}>
    FIND IN STORE
</button>
</div>
<div style={{display:'flex',marginTop:'30px',justifyContent:'space-around'}}>
<div style={{width:'235px',fontSize:'18px',backgroundColor:'white', padding:'17px', borderRadius:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
<Icon as={FaVideo} w={25} h={25} color='green' /> <h5>Want a closer look?</h5>
  <p style={{fontSize:'12px'}}>
    Get on a live video call with our design consultants.</p>
  <br />
  <button style={{width:'180px',fontSize:'14px',borderStyle:"none", padding:'12px', borderRadius:'10px',background:'linear-gradient(to right,#B1D8B7,#94C973)'}}>  Schedule a Video Call</button>
</div>
<div style={{width:'235px',fontSize:'18px',backgroundColor:'white', padding:'17px', borderRadius:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
 
 <Icon as={FaHome} w={25} h={25} color='#de57e5' />
  <h5>Try it on at home</h5>
  <p style={{fontSize:'12px'}}>Book a free appointment to try this jewellery at your home.</p>
  <br />
  <button style={{width:'180px',fontSize:'14px',backgroundColor:'#FEE7DA', padding:'12px', borderRadius:'10px',borderStyle:"none"}}>Book Home Appointment</button>  </div>
</div>
</div>
    </div>
    
      )}
      
    </div>
    <CarouselCard/>
    <Footer/> 
    </>
  );
};

export default SingleProduct;


  