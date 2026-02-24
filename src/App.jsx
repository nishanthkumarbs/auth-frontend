import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/authComponent/Login'
import Register from './pages/authComponent/Register'

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ])
  return (
    <>

      <RouterProvider router={router} />
    </>

  )
}

export default App
