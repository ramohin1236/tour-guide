import { Outlet } from "react-router-dom"
import Navbar from "../Sharred/Navbar"
import Footer from "../Sharred/Footer/Footer"

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout