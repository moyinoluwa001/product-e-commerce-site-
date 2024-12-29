

import { useState } from "react";
import {Link, Navigate, useNavigate } from "react-router-dom";

const Login = ({setUser})=>{
const  [email, setEmail] = useState("");
const  [password, setPassword]  =useState("");
const navigate = useNavigate();

const handleLogin = ()=>{
  if(email && password){
    setUser({email})
    navigate("/")
  }else{
    alert("please enter both email and password")
  }
}


return(

  <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card p-4 w-50">
          <h2 className="card-title">Login</h2>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    
 
)

}

export default Login;