import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {

  const username = localStorage.getItem("username");

  return (
    <div>
      <h1>Welcome {username ? username : "Guest"}</h1>

      {username && (
        <button onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}>
          Logout
        </button>
      )}

      {!username && (
        <>
          <NavLink to={'/register'}>Register</NavLink>
          <br /><br />
          <NavLink to={'/login'}>Login</NavLink>
        </>
      )}
    </div>
  )
}

export default HomePage