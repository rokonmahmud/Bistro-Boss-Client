import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Components/Login & Signup/Login";
import Signup from "../Components/Login & Signup/Signup";
// import { Banner } from "../Components/Home/Banner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "signup",
          element: <Signup/>
        }
      ]
    },
    
  ]);

  export default router;