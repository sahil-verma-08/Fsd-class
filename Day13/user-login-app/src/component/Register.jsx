import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({regData}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userId, setUserId] = useState();
  const data = { userId, email, password };
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`${data.userId} ${data.email} ${data.password}`);
    regData(data);
  };
  return (
    <div>
      {userId},{email},{password}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleRegister}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;