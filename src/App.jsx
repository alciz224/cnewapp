import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router'

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";
import PrivatePage from "./pages/PrivatePage";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes/>,
    children: [
      {
        path: '/',
        element: <PrivatePage/>
      }
    ]
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "/",
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
