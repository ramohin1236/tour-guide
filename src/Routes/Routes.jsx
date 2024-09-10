import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import PopularSpots from "../Components/Home/PopularSpots/PopularSpots";
import Contact from "../Components/Contact/Contact";
import SignUp from "../Pages/Auth/Signup/SignUp";
import Signin from "../Pages/Auth/Signin/Signin";
import DetailsPage from "../Pages/Details/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/destination",
        element: <PopularSpots/>
      },
      {
        path: "/details/:id",
        element: <DetailsPage/>
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
     
    ],
  },
]);