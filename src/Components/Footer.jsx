import React from "react";
// import SocialMedia from "../Assests/SocialMedia.png";
// import PaymentOptions from "../Assests/PaymentOptions.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <div>
      {/* Main content */}
      <div className="mainup">
        <div className="main">
          {/* Section 1 */}
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Know Your Jewellery
                </p>
              </li>
              <li>DIAMOND GUIDE</li>
              <li>JEWELLERY GUIDE</li>
              <li>GEMSTONES GUIDE</li>
              <li>GOLD RATE</li>
              <li>DIGITAL GOLD</li>
            </ul>
          </div>
          {/* Section 2 */}
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Crystal & Gold Advantage
                </p>
              </li>
              <li>15-DAY RETURNS</li>
              <li>FREE SHIPPING</li>
              <li>FINANCING OPTIONS</li>
              <li>OLD GOLD EXCHANGE</li>
            </ul>
          </div>
          {/* Section 3 */}
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Customer Service
                </p>
              </li>
              <li>RETURN POLICY</li>
              <li>ORDER STATUS</li>
            </ul>
          </div>
          {/* Section 4 */}
          <div>
            <ul>
              <li>
                <p style={{ fontWeight: "600", fontSize: "16px" }}>About Us</p>
              </li>
              <li>OUR STORY</li>
              <li>PRESS</li>
              <li>BLOG</li>
              <li>CAREERS</li>
            </ul>
          </div>
          {/* Section 5 */}
          <div>
            <ul>
              <li>
                <b style={{ fontWeight: "600", fontSize: "16px" }}>
                  Contact Us
                </b>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> &nbsp;{" "}
                <FontAwesomeIcon icon={faMessage} /> &nbsp;{" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li>24X7 Enquiry Support (ALL Days)</li>
              <li>
                general : <a style={{ color: "#c275e6" }}>Contactus@dazzlelane.com</a>
              </li>
              <li>
                coperate : <a style={{ color: "#c275e6" }}>B2B@dazzlelane.com</a>
              </li>
              <li>
                HR : <a style={{ color: "#c275e6" }}>Carrers@dazzlelane.com</a>
              </li>
              <li>
                graviences : <a style={{ color: "#c275e6" }}>Click here</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="footerbottom">
          <div>
            {/* <img style={{ width: "50%" }} src={} alt="social media icons" /> */}
                  </div>
              </div>
              </div>
 </div> )            
}              

export default Footer;