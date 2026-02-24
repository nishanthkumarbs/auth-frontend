import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    let navigate = useNavigate();
    let [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://auth-backend-k80t.onrender.com/api/register",
                {
                    name: userData.username,   // mapping username → name
                    email: userData.email,
                    password: userData.password
                }
            );

            toast.success(response.data);

            setUserData({
                username: "",
                email: "",
                password: ""
            });

            setTimeout(() => navigate('/login'), 1500);

        } catch (error) {
            toast.error("Registration Failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='register-form'>
            <ToastContainer />
            <fieldset>
                <legend>Signup</legend>
                <label htmlFor="un">Username:</label>
                <input type="text" id='un' placeholder='Enter Username' name='username' value={userData.username} onChange={handleChange} />


                <label htmlFor="email">Email:</label>
                <input type="email" id='email' placeholder='Enter Email' name='email' value={userData.email} onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id='password' placeholder='Enter Password' name='password' value={userData.password} onChange={handleChange} />

                <div className="spacer"></div>

                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={() => setUserData({ name, email, password })}>Reset</button>
                </div>

            </fieldset>
        </form>
    );
};

export default Register;