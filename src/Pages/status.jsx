import styles from "../Style/status.module.css"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Status() {
    let redirectFlag = JSON.parse(localStorage.getItem("loggedin"));

if (redirectFlag === false) {
  window.location.href = "login.html";
}

let showStatus = null;
window.onload = myFunction;
function myFunction() {
  console.log("in my funmc also here");
  showStatus = setTimeout(showPage, 2000);
}

function showPage() {
//   document.getElementById("loader").style.display = "none";
  document.getElementById("paymentstatus").style.display = "block";
}
    return (
        <>
           
            <div>
                {/* <Navbar style={{position: 'unset'}} /> */}
            <div style={{marginTop: '60px'}} id="paymentstatus" className={styles.status}>
            <h1>Payment Successful!</h1>
            <h2>Thank you for choosing DazzleLane!</h2>
            <h3>Your Everyday Luxury Jewellery</h3>
            <a href="/">
                    <h4 style={{ color: 'black' }}>Click here to go back to Home Page</h4>
                    </a>
                   
                </div>
                </div>
            <Footer/>
            </>
    )
}