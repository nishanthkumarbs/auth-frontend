import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const HomePage = () => {

  const username = localStorage.getItem("username");

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome {username ? username : "Guest"}</h1>

        {username && (
          <button
            className="home-button"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        )}

        {!username && (
          <>
            <NavLink to={'/register'} className="home-link">
              Register
            </NavLink>

            <NavLink to={'/login'} className="home-link">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage