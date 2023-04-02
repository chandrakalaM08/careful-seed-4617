import React from 'react'
import { Routes , Route} from "react-router-dom"
import Home from '../Pages/Home'
 import Cart from "../Pages/Cart"
 import Login from "../Pages/Login"
 import SignUp from "../Pages/SignUp"
 import Payment from "../Pages/Payment"
 import Products from "../Pages/Products"
 import SingleProduct from "../Pages/SingleProductPage"
 import PrivateRoute from './PrivateRoute'
import PaymentCopy from '../Pages/Payment copy'
import Status from '../Pages/status'


const MainRoute = () => {
  return (
    <div>
  
      <Routes>
        <Route path="/status" element={ <Status/>} />
        <Route path="/" element={<Home />} />
         <Route path="/product" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp/>} />
          <Route path="/payment" element={ <PrivateRoute><Payment/></PrivateRoute>} />
        <Route path="/product/:id" element={<SingleProduct />} /> 
                  <Route path="/paymentcopy" element={ <PrivateRoute><PaymentCopy/></PrivateRoute>} />


        </Routes>

      
    </div>
  )
}

export default MainRoute