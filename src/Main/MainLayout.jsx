/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../Sharred/Navbar";
import Footer from "../Sharred/Footer/Footer";
import { allUsers } from "../common/api/ApiKit";
import { useEffect } from "react";

const MainLayout = () => {
    
  const getAllUsers = async () => {
    const users = await allUsers();

    
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
