import { Link } from 'react-router-dom';
import { MdMenu, MdArrowDropDown } from 'react-icons/md';
import { useState } from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  
    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-2xl">
    <nav className="bg-transparent active">
        <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="flex items-center text-2xl font-bold">
                <div className="logo-img bg-cover bg-center w-12 h-12">
                    <img src="/logo.png" className="w-full h-full object-cover" alt="logo" />
                </div>
                <span className="text-white mt-2">JT&T</span>
            </Link>
            <div className="flex items-center">
                <button className="sidenav-trigger md:hidden" aria-label="Open Menu" onClick={toggleSideNav}>
                    <MdMenu className="text-white font-semibold text-3xl" />
                </button>
                <ul className="max-sm:hidden sm:hidden md:flex lg:flex max-xl:flex items-center space-x-6">
                <li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    HOME
  </Link>
</li>

<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    POPULAR
  </Link>
</li>
<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    BOOKING
  </Link>
</li>
  <li>
    <div className="relative group ">
      <button className="text-white font-semibold flex items-center  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full">
        MORE <MdArrowDropDown />
      </button>
      <ul className="absolute left-0 mt-2 p-2 bg-white hidden group-hover:block space-y-1">
      <li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
   ACTIVITY
  </Link>
</li>
<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    FAQ
  </Link>
</li>
<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    PLACES
  </Link>
</li>
<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    PHOTOS
  </Link>
</li>
      </ul>
    </div>
  </li>
  <li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    CONTACT
  </Link>
</li>
<li className=' h-16 flex items-center justify-center w-20'>
  <Link
    to="/"
    className="text-white font-semibold hover:text-gray-300  transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full h-full w-full flex items-center justify-center"
  >
    EXPLORE
  </Link>
</li>
</ul>

            </div>
        </div>
    </nav>

    {/* Mobile Navigation */}
    <MobileNav 
    toggleSideNav={toggleSideNav} 
    isSideNavOpen={isSideNavOpen}
    />
</header>
  )
}

export default Navbar