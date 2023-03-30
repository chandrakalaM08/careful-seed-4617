import { Button  } from '@chakra-ui/react'
import React from 'react'


import Message from "../Assets/Message.png"
import ShoppingStore from "../Assets/ShoppingStore.png"
import Trial from "../Assets/Trial.png"
import MoneyBack from "../Assets/MoneyBack.png"
import Exchange from "../Assets/Exchange.png"
import Transport from "../Assets/Transport.png"
import Replacement from "../Assets/Replacement.png"
import CarouselCard from '../Components/CarouselCard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

import SliderShow1 from '../Components/sliderShow1'
import './Home.css'
import About from '../Components/About'
import {Link} from "react-router-dom"



const Home = () => {
  console.log("at home")
  return (
    <>
    <Navbar/>
   
    <div className='wholehome'>
      <SliderShow1/>


      <div className="grid-container">
        <img className="item1" src='https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/ResponsiveBanner/29/Responsive_Banner002.jpg' alt='img1'></img>
        <img className="item2" src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/NEWIN/04/1X.jpg' alt='img2'></img>
        <img className="item3" src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/RTS/02/2x1.gif' alt='img3'></img>
      </div>
      <div className='category'>
         <Link to="/product">
         <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_1.jpg' alt='image1' /></div>
         </Link>
         <Link to="/product">
         <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_2.jpg' alt='image2' /></div>
         </Link>
         <Link to="/product">
         <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/HP-Banner/6tile/01/Desktop_3.jpg' alt='image3' /></div>
         </Link>
         <Link to="/product">
         <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_4.jpg' alt='image4' /></div>
         </Link>
         <Link to="/product">
         <div><img src='	https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/08/Desktop_9.jpg' alt='image5' /></div>
         </Link>
         <Link to="/product">
         <div><img src='	https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/tile/05/Desktop_7.jpg' alt='image6' /></div>
         </Link>
         
      </div>
      <div className='collection'>
        <div style={{ marginTop: '60px' }}><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/Collection/Collection_Harry_potter_1.jpg' alt='image1' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Envogue/01/Collection_ENVOUE.jpg' alt='image2' /> <button className="border-gradient border-gradient-purple">View All Collections</button></div>
        <div style={{ marginTop: '60px' }}><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Blaze.jpg' alt='image3' /></div>
      </div>
      <div className='sale'>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Personal/04/2X.gif' alt='image1' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Runway/01/1X.jpg' alt='image2' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif' alt='image3' /></div>
        <div><img src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/03-MAR/AppBanner/Bestsellers/02/2x.jpg' alt='image4' /></div>
      </div>
      <div className='try' style={{border:"solid red 10px"}}>
        <div className='appoint'>
            <div style={{border:"solid blue 10px"}}>
              
              <img src={Trial} alt='image3' style={{border:"5px solid black"}}/>
            <div className='appoint1'><h1>Not Sure Which Design <br />To Pick?</h1>
              <p>Book A FREE Home Trial!</p>
              <button>Schedule Appointment</button>
            </div>
          </div>
            <div style={{border:"solid green 10px"}}>
              <img src={ShoppingStore} alt='image4' />
            <div className='appoint2'><h1>Come visit us at any of <br />our stores!</h1>
              <select>
                <option style={{fontSize:"15px"}}>Enter City</option>
                <option style={{fontSize:"15px"}}>Delhi</option>
                <option style={{fontSize:"15px"}}>Agra</option>
                <option style={{fontSize:"15px"}}>Chennai</option>
                <option style={{fontSize:"15px"}}>Goa</option>
                <option style={{fontSize:"15px"}}>Bhopal</option>
                <option style={{fontSize:"15px"}}>Bhuvneshwar</option>
                <option style={{fontSize:"15px"}}>Mohali</option>
                <option style={{fontSize:"15px"}}>Lucknow</option>
                <option style={{fontSize:"15px"}}>Kolkata</option>
                <option style={{fontSize:"15px"}}>Mumbai</option>
                <option style={{fontSize:"15px"}}>Banglore</option>
              </select>
            </div>
          </div>
        </div>
        </div>
    
      <div className='goldup'>
        <div className='gold'>
          <img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png' alt='img2' />
          <div className='gold1'><h1>Your precious gold. Our new designs!</h1>
            <p>-A gold Exchange Program that lets you preserve your memories and make new ones! Please note: The old gold doesn't have to be form only DazzleLane, it can be any gold jwellery you have</p>
            <button>Know More</button>
          </div>
        </div>
      </div>
      <div className='trust'>
        <div className="trust1">
          
          <p>The highest quality of craftsmanship and innovation,
            that brings you modern, everyday designs.</p>
          <button className='border-gradient border-gradient-purple'>Know More</button>
        </div>
      </div>
      <CarouselCard />
        
          
        <div className='deliup'>
          <div className='delivery'>
          <div><img src={Transport} alt='image1' className='img1' /></div>
          <div><img src={MoneyBack} alt='image2' className='img1' /></div>
          <div><img src={Exchange} alt='image3' className='img2' /></div>
          <div><img src={Replacement} alt='image4' className='img2' /></div>
        </div>
      </div>
     
     
      <button className='knowmore border-gradient border-gradient-purple'>Read More</button>
      <h1 style={{ textAlign: 'left', width: '94%', margin: ' 30px auto',fontSize: "24px" }}>Shop Our Instagram</h1>
      <div className="insta-container">


        <div className="insta1" ><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image1.jpg' alt='img1'></img></div>
        <div className="insta2"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image2.jpg' alt='img2'></img></div>
        <div className="insta3"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image4.jpg' alt='img3'></img></div>
        <div className="insta4"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image5.jpg' alt='img4'></img></div>
        <div className="insta5"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image3.jpg' alt='img5'></img></div>
        <div className="insta6" ><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image6.jpg' alt='img6'></img></div>
        <div className="insta7"><img src='https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image7.jpg' alt='img7'></img></div>
      </div>


       <div className='indsider'>
        <div className="indsider1">
          <img src={Message} alt='plane1' width={200} style={{ marginLeft: '40px', marginTop:"20px" }} />
          <h1>Sign up to be a DazzleLane Insider</h1>
          <input className='ipt' style={{ padding: '18px'}} /><Button style={{ backgroundColor: '#a674fb', height: "40px", borderRadius: '0px 5px 5px 0px' }} className='btn'>Submit</Button>


          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '90%', margin: 'auto' }}>
            <div> <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="female" style={{ color: 'white', fontSize: '17px' }}>Female</label></div>
            <div><input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="male" style={{ color: 'white', fontSize: '17px' }}>Male</label></div>
            <div><input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="others" style={{ color: 'white', fontSize: '17px' }}>Others</label></div>


          </div>

<p style={{color:"#e481ea"}}>Know more <span style={{color:"white"}}>about DazzleLane</span></p>
        </div>
      </div> 
    <About/>

    </div>
   <Footer />
    </>
  )
}


export default Home

