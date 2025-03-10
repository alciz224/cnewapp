import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";
import PrivatePage from "./pages/PrivatePage";

export const router = createBrowserRouter([
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

