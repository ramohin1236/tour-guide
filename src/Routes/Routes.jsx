import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import PopularSpots from "../Components/Home/PopularSpots/PopularSpots";

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
      // {
      //   path: "/quran",
      //   element: <Quran />,
      // },
      // {
      //   path: "/hadith",
      //   element: <Hadith />,
      // },
      // {
      //   path: "/namaz",
      //   element: <Namaz />,
      // }
    ],
  },
]);