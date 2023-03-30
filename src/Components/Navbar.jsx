import React from "react";
import "./NavbarStyle.css";
import Dazzlelane_Logo from "../Assets/Dazzlelane_Logo.jpg"
import { Link, NavLink } from "react-router-dom";
import { FaSearch,FaUser} from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faCalendarCheck,
  
  faCoins,
  faHomeAlt,
 
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs"
import {HiUser} from "react-icons/hi2"

export default function Navbar (){
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [ signout, setSignOut] = useState(true)

 const handleClick = () =>{
  localStorage.removeItem('token');
  window.localStorage.setItem("user","User")
  setSignOut(!signout)
 }

 const  user = localStorage.getItem("user") || "user";
  

  return (
    <div className="whole">
      <div className="top" style={{textAlign:"center"}}>
        <p>
          Introducing DazzleLane PoP! Plan your purchase  
{" "}
          <span style={{ color: "orange" }}>here</span>
        </p>
      </div>
      <nav className="main-nav">
        {/* { 1st logo part  */}
        <div className="logo">
        
            <a href="/">
            <img src={Dazzlelane_Logo} alt="logo_image" width={"167"} paddingtop={ "0"} />
            </a>
       
        </div> 

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          id="navbar"
          style={{ marginTop: "10px" }}
        >
          <ul>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/" className="active">
                  <FontAwesomeIcon icon={faHomeAlt} />
                  {/* < AiFillHome/> */}
                  &nbsp; FREE TRY AT HOME
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faStore} />
                 
                  &nbsp; FIND STORE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  
                  &nbsp; PLAN OF PURCHASE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCoins} />
                  {/* <FaCoins/> */}
                  &nbsp; BUY DIGITAL GOLD
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "12px" }} className="input">
              <form>
                <input
                  style={{
                    borderRadius: "5px 0px 0px 5px",
                    width: "190px",
                    fontSize: "14px",
                    padding: "6px 10px",
                  }}
                  type="text"
                  placeholder="Search..."
                />
                <button
                  style={{
                    backgroundColor: "#aa5af1",
                    borderRadius: "0px 5px 5px 0px",
                    padding: "7px 7px",
                    marginTop: "5px",
                  }}
                  type="submit"
                >
                  <FaSearch />
                </button>
              </form>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media" style={{ paddingTop: "10px" }}>
          <ul className="social-media-desktop">
            <li>
              <Link style={{ fontSize: "30px" }} to="/">
            
               <MdLocationOn/>
              </Link>
            </li>
            <li>
             
              <Menu>
  

 <HiUser fontSize={"27px"}/>
 
  <MenuList align={"center"}>
    { signout ?  <Link to="/login">
    <MenuItem fontSize={"20px"}>Login</MenuItem>
    </Link> : <MenuItem fontSize={"20px"} onClick={handleClick}>LogOut</MenuItem>}
  </MenuList>
</Menu>
            </li>
            <li>
              <Link to="/wishlist">
                <AiFillHeart />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div>
        <ul id="navbar1">
          <li>
            <Link to="/product">NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/product">RINGS</Link>
          </li>
          <li>
            <Link to="/product">EARRINGS</Link>
          </li>
          <li>
            <Link to="/product">BRACELETS & BANGLES</Link>
          </li>
          <li>
            <Link to="/product">SOLITARIES</Link>
          </li>
          <li>
            <Link to="/product">MANGALSUTRA</Link>
          </li>
          <li>
            <Link to="/">READY TO SHIP</Link>
          </li>
          <li>
            <Link to="/product">KIDS</Link>
          </li>
          <li>
            <Link to="/product">OTHERS JEWELLERY</Link>
          </li>
          <li>
            <Link to="/product">GIFTING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

