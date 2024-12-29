
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const SignUp = ()=>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = ()=>{
      if(name && email && password){
        alert("account created sussefully!");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/Login")
      }else{
        alert("plesae fill out all fields")
      }
  }

    return(
      <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="card p-4 w-50">
              <h2 className="card-title">Sign Up</h2>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
              <button className="btn btn-success" onClick={handleSignUp}>
                Sign Up
              </button>
              <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>

    )


}

export default SignUp;
