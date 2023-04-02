import React, { useState } from "react";
import "../Style/SignupForm.module.css";
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email, password };

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("User created successfully");
    } else {
      console.error("Error creating user");
    }

    // Clear form data
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
       <Navbar /> 
      <div  style={{paddingTop:"200px"}}>
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up to be a member of DazzleLane Family</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
        </form>
        </div>
      <Footer/>
      </>
  );
}

export default SignUp;
