import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";
import PrivatePage from "./pages/PrivatePage";
import { AuthProvider } from './contexts/AuthContext'
import LayoutPage from './pages/LayoutPage'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage/>,
    children: [
      {
        element: <PrivateRoutes allowedRoles={[ROLES.Admin]}/>,
        children: [
          {
            path: '/private',
            element: <PrivatePage/>
          },
          {
            path: '/private2',
            element: <PrivatePage/>
          }
        ]
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/rev", element: <Register/>
      }
    ]},
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "login",
    element: <Login/>
  }
]
);

const App = () => {
  return (
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
