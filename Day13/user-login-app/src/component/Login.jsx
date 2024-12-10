import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Login = ({regLogin}) => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const Navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    if (regLogin.email === email && regLogin.password === password)
    {
      alert("Login Successful!");
      Navigate("/dashboard")
    }
    else{
      alert("Login Failed!! Please check your credentials.");
    }
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

          />
          <div id="emailHelp" className="form-text">
            Confirm your EmailId.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button  onClick={handleLogin}
        type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login