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
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-card">
                <ToastContainer />

                <h2 className="auth-title">Signup</h2>

                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />

                <div className="auth-buttons">
                    <button type="submit" className="primary-btn">
                        Register
                    </button>

                    <button
                        type="button"
                        className="secondary-btn"
                        onClick={() =>
                            setUserData({
                                username: "",
                                email: "",
                                password: ""
                            })
                        }
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;