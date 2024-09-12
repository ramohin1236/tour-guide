import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Doc from "../Components/Doc/Doc";

const Navbar = () => {
    const {logo}=Doc()
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed z-50 w-full text-white md:pl-[70px] md:pr-[100px] pr-[20px] bg-white text-[#A04747]">
      <div>
        <div className=" flex flex-row justify-between md:py-5 py-3">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
            <div className="flex justify-center text-center items-center">
            <img src={logo} className="w-16 h-16 object-cover" alt="logo" />
              <h1 className=" text-xl font-semibold text-[#A04747]">
               Japan Travels & Tours
              </h1>
            </div>
            </Link>
          </div>

          <nav className="font-semibold hidden lg:flex flex-row items-center text-xl gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
               className="text-[#A04747] cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/destination"
              spy={true}
              smooth={true}
              duration={500}
               className="text-[#A04747] cursor-pointer"
            >
            Destination
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="text-[#A04747] cursor-pointer"
            >
             Booking
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Link to="/contact">
              <button className="text-xl shadow-lg text-[#A04747] font-semibold hover:bg-[#A04747] hover:text-white  bg-white px-5 py-2 rounded-md transition duration-300 ease-in-out">
               Contact
              </button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center text-[#A04747] cursor-pointer">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute text-[#A04747] bg-white  left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="/destination"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Destination
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Booking
          </Link>
         
          <div className=" lg:hidden">
            <Link to="/contact">
              <button className="text-xl shadow-lg text-[#A04747] font-semibold hover:bg-[#A04747] hover:text-white  bg-white px-5 py-2 rounded-md transition duration-300 ease-in-out">
               Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;