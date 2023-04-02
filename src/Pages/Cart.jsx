import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../Style/Cart.module.css";
import { FaLock } from "react-icons/fa";
import { set } from "lodash";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState(0)

  let orderDataNew = JSON.parse(localStorage.getItem("cartItems")) || [];

  let quantityObj = {}
  orderDataNew.forEach((element) => {
    let key = element.id;
     quantityObj[key] = element.quantity;
  })
 
 const [quantity, setQuantity] = useState(quantityObj);
  
  let incrementQuantity = (event) => {
    let id = event.currentTarget.id;
    let updatedQuantity = {};
    updatedQuantity[id] = quantity[id] + 1;
    setQuantity({...quantity, ...updatedQuantity}
    )
   
  };
  
  let decrementQuantity = (event) => {
    let id = event.currentTarget.id;
    if (quantity[id] <= 1) { 
      return;
    }
    let updatedQuantity = {};
    updatedQuantity[id] = quantity[id] - 1;
    setQuantity({...quantity, ...updatedQuantity}
    )
  };
  
  const updatePaymentInfo = () => {
    localStorage.setItem("total_bill", JSON.stringify(total))
  }

useEffect(()=>{
   let updatedData = orderDataNew.map((element, index) => {
     element.quantity = quantity[element.id];
     return element;
        });
        localStorage.setItem("cartItems", JSON.stringify(updatedData));
        
},[quantity]);




  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, [quantity]);

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  const total = cartItems.reduce((acc, item) => acc + (item.quantity*item.discountedprice), 0)
  const totalmain = cartItems.reduce((acc, item) => acc + (item.quantity*item.price), 0)
  const Tsave= totalmain-total

 

  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'#F9F9FA',textAlign:'left',paddingTop:"140px"}}>
      <p style={{marginLeft:'120px'}}>Total({cartItems.length} Items):₹ {total}</p>
      {cartItems.length > 0 ? (
        <div style={{
          display:'flex',justifyContent:'space-between',padding:'30px',marginLeft:"80px", marginRight:"80px",paddingTop:"10px"
        }} >
          <div >
          {cartItems.map((item, index) => (
            
            <div key={index} style={{boxShadow:" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderRadius:"5px",  display:'flex', marginBottom:"20px",backgroundColor:'white', width:"140%",justifyContent:'space-between'
            }}>
              <div style={{ textAlignLast:'left', padding:'10px'}}>
              <img style={ {width:"170px",borderRadius:"5px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={item.img[0]} alt={item.title} />
              </div>
              <div style={{paddingTop:"10px", textAlign:'left', padding:"10px", width:"50%"}}>
              <p fontSize={14}>{item.title}</p>
              <h5>Weight: {item.weight}</h5>
              <br />
            <p style={{color:'#E257E5',fontSize:"14px", textDecoration: "underline"}}>Check Delivery Date</p>
              <p style={{fontWeight:'bold'}}>₹ {item.discountedprice*item.quantity}</p>
              <p style={{textDecoration:'line-through',fontSize:"12px"}}>₹ {item.price*item.quantity}</p>
              <p style={{color :'rgb(235, 79, 92)',fontWeight:'bold'}}>Save ₹{(item.price*item.quantity )- (item.discountedprice*item.quantity)}</p>
              </div>
              <div style={{width:'25%'}}>
                <div style={{marginTop:'100px'}}>
                <div className="increase-price">
                                <div className="quantity-change"><div className="identity" style={{display:"none"}}>${
                                  item.id
                                }</div>
                                    <div className="decrease" id={item.id} onClick={
decrementQuantity}> <img src="https://pizzaonline.dominos.co.in/static/assets/icons/minus.svg" alt=""/></div>
                                    |<div className="count">{item.quantity}</div> |
                                    <div className="increase" id={item.id} onClick={incrementQuantity}><img src="https://pizzaonline.dominos.co.in/static/assets/icons/plus.svg" alt=""/></div>
                                </div>
                                </div>
                        
                <button style={{border:"1px solid black", width:"180px",borderRadius:'5px', padding:'5px'}} onClick={() => handleRemoveItem(index)}>Remove</button>
                 <br />
                 <button 
                 style={{marginTop:'13px',border:"1px solid purple",
                  width:"180px",
                  borderRadius:'5px', 
                  padding:'5px'}}>Move To Wishlist</button>
                </div>
            
              </div>

            </div>
            
          ))}

          <Link to={"/product"}>
           <button style={{marginTop:'13px',border:"1px solid purple",
             width:"200px",
             borderRadius:'10px', 
             padding:'5px'}}>Explore More</button>
         </Link>
          </div>
          <div style={{textAlign:"left"}}>
            <p style={{fontWeight:'bolder'}}>Order Summary</p>
          <div className={styles["cart-summary"]}>
  <p>Subtotal:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ₹{total}</p>
  <p>You Saved:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span style={{color:"rgb(136, 99, 251"}}>- ₹{Tsave}</span></p>
  <p>Coupon Discount:&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span  style={{color:"#de57e5"}}>Apply Coupon</span></p>
  <p>Delivery Charge:&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span  style={{color:"rgb(136, 99, 251"}}>FREE</span></p>
  <p className={styles["total-cost"]}>TOTAL COST :&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;₹{total}</p>
</div>

<Link to={'/payment'}><button onClick={updatePaymentInfo} style={{marginTop:'13px',color:'white',border:"1px solid purple",backgroundColor:"#C05CED", width:"330px",borderRadius:'5px', padding:'10px',fontWeight:"bold",borderStyle:"none"}}><FaLock/> Checkout Securely</button></Link>         </div>

        </div>
        
      ) : (
        <div style={{textAlign:"center", height:"250px"}}>
        <p style={{fontSize:'25px'}}>Empty Bag!</p>
        <p style={{fontSize:'18px',marginTop:'10px'}}>Let's do some retail therapy!</p>
        <Link to={"/product"}>
        <button style={{marginTop:'43px',color:'white',border:"1px solid purple",backgroundColor:"#C05CED", width:"330px",borderRadius:'5px', padding:'10px',fontWeight:"bold",borderStyle:"none"}}>Start Shopping</button>
      </Link>
      </div>
      )}
    
    </div>
    <p style={{textAlign:"left", fontSize:"12px", marginLeft:"30px", marginTop:"10px"}}>
    Contact Us: +91-99-9995000 (Helpline) | contactus@dazzlelane.com
    </p>
    <Footer/>.
    </>
  );
};

export default CartPage;



