import React from 'react'
import { Link, Outlet } from 'react-router'

const LayoutPage = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Private Page</Link>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        <Link to="rev">Register 2</Link>
      </nav>
    <main>
    <Outlet/>
    </main>
    </div>
  )
}

export default LayoutPage
