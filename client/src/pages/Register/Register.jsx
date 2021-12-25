import React, { useState } from 'react';
import "./register.css"
import { Link } from 'react-router-dom';
import axios from "axios";
const Register = () => {


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [error, setError] = useState(false);

  const LinkColor = {textDecoration: "none", color:"inherit"}


const handleSubmit = async (e) =>{
  e.preventDefault();
  setError(false)
try {
  const res = await axios.post("/auth/register",{
    username, email, password
  });
 res.data && window.location.replace("/login")
} catch (error) {
  console.log(error);
  setError(true)
}
}

  return (
    <div className='register'>
        <span className="registerTitle">
            Register
        </span>
      <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input onChange={e=>setUsername(e.target.value)} type="text" className='registerInput' placeholder='Enter your username' />
          <label>Email</label>
          <input onChange={e=>setEmail(e.target.value)} type="email" className='registerInput' placeholder='Enter your email' />
          <label>Password</label>
          <input onChange={e=>setPassword(e.target.value)} type="password" className='registerInput' placeholder='Enter your password...' />
          <button className='registerButton' type='submit'><Link to="/register" style={LinkColor}> REGISTER </Link></button>
          <button className='loginRegisterButton'><Link to="/login" style={LinkColor}> Login </Link></button>
      </form>
      {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong</span>}
    </div>
  );
}

export default Register;
