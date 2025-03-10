import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";
import PrivatePage from "./pages/PrivatePage";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "home",
    index: true,
    element: <Home/>
  },
  {
    element: <PrivateRoutes/>,
    children: [
      {
        path: "private",
        element: <PrivatePage/>
      }
    ]
  }
]);

const App = () => {
  return (
    <BrowserRouter>
    <RouterProvider router={router}/>
    </BrowserRouter>
  )
}

export default App
