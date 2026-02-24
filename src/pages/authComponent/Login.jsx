import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'


const Login = () => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://auth-backend-k80t.onrender.com/api/login",
        { email, password }
      );

      if (response.data) {

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.name);

        toast.success("Login Successful");

        navigate("/");
      } else {
        toast.error("Invalid Credentials");
      }

    } catch (error) {
      toast.error("Login Failed");
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <legend>Login</legend>

        <label>Email:</label>
        <input type="email" placeholder="Enter Email" onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" onChange={handlePassword} />

        <div className="auth-buttons">
          <button type="submit" className="primary-btn">Login</button>
          <button type="reset" className="secondary-btn">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Login