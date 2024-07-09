import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/',{name,email,password})
        .then(result=>console.log(result),
          navigate('/login'))
        .catch(err=>console.log(err))
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form action="">

          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              value={name}
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
            value={email}
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
            value={password}
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e)=>setPassword(e.target.value)}
            />

          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-success w-100 rounded-5">Register</button>
          </form>
          <p>Already Have an Account</p>

          <Link to="/login" className="btn btn-default border w-100 bg-info rounded-5 text-decoration-none">Login</Link>
       
      </div>
    </div>
  );
};

export default SignUp;
