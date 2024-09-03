/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const MobileNav = ({toggleSideNav,isSideNavOpen}) => {
  return (
    <div className={`md:hidden transition-transform transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full w-64 bg-gray-800 z-50`}>
        <ul className="sidenav text-white space-y-2 ">
            <li>
                <div >
                    <div className="background">
                        <img src="/side-background.jpg" alt="Background" />
                    </div>
                    
                    <div className="p-4">
                    <a href="#user">
                        <img className="circle" src="images/extra/winter.jpg" alt="User" />
                    </a>
                    <a href="#name">
                        <span className="name">Minjeong </span>
                    </a>
                    <a href="#email">
                        <span className="email">wintot07@gmail.com</span>
                    </a>
                    </div>
                </div>
            </li>
           <div className='p-4 space-y-4'> 

           <li>
                <Link to="/" className="text-white hover:text-gray-300">HOME</Link>
            </li>
            <li>
                <Link to="/popular" className="text-white hover:text-gray-300">POPULAR</Link>
            </li>
            <li>
                <Link to="/booking" className="text-white hover:text-gray-300">BOOKING</Link>
            </li>
            <li>
                <Link to="/activity" className="text-white hover:text-gray-300">ACTIVITY</Link>
            </li>
            <li>
                <Link to="/faq" className="text-white hover:text-gray-300">FAQ</Link>
            </li>
            <li>
                <Link to="/places" className="text-white hover:text-gray-300">PLACES</Link>
            </li>
            <li>
                <Link to="/photos" className="text-white hover:text-gray-300">PHOTOS</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white hover:text-gray-300">CONTACT</Link>
            </li>
            <li>
                <Link to="#modal1" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    EXPLORE
                </Link>
            </li>
           </div>
        </ul>
        <button className="text-white absolute top-4 right-4" onClick={toggleSideNav}>X</button>
    </div>
  )
}

export default MobileNav