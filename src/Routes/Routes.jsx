import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import PopularSpots from "../Components/Home/PopularSpots/PopularSpots";
import Contact from "../Components/Contact/Contact";
import SignUp from "../Pages/Auth/Signup/SignUp";
import Signin from "../Pages/Auth/Signin/Signin";
import DetailsPage from "../Pages/Details/DetailsPage";
import DashLayout from "../Dashboard/DashLayout";
import AllUser from "../Dashboard/AllUser";
import AllDestination from "../Dashboard/AllDestination";
import CreateDestination from "../Dashboard/CreateDestination";
import UpdateDestination from "../Dashboard/UpdateDestination";
import AllLocation from "../Dashboard/AllLocation";
import CreateLocation from "../Dashboard/CreateLocation";
import Booking from "../Pages/Booking/Booking";
import Payment from "../Pages/Payment/Payment";
import AllBooking from "../Dashboard/AllBooking";
// import PrivateRoute from './PrivateRoute';

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
        path: '/booking',
        element: <Booking/>
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/payment",
        element: <Payment/>,
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

  {
    path: '/dashboard',
    element: <DashLayout/>,
    children:[
        {
            path: 'alluser',
            element: <AllUser/>
        },
        {
            path: 'bookings',
            element: <AllBooking/>
        },
        {
            path: 'alldestination',
            element: <AllDestination/>
        },
        {
            path: 'createdestination',
            element: <CreateDestination/>
        },
        {
            path: 'allocation',
            element: <AllLocation/>
        },
        {
            path: 'createlocation',
            element: <CreateLocation/>
        },
        
        {
            path: "updatedestination/:id",
            element: <UpdateDestination/>,
          },
    ]
  }
]);