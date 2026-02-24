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
    <form onSubmit={handleSubmit} className='register-form'>
      <ToastContainer />
      <fieldset>
        <legend>Login</legend>

        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Enter Email' name='email' onChange={handleEmail} />

        <label htmlFor="password">Password:</label>
        <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handlePassword} />


        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="reset" >Reset</button>
        </div>

      </fieldset>
    </form>
  )
}

export default Login