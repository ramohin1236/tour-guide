/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
    {/* FOOTER : ABOUT US */}
    <section className="section section-footlinks bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h5 className="text-white font-semibold footer-title">Quicklinks</h5>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-red-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/places" className="text-white hover:text-red-500 transition duration-300">
                  Places
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-white hover:text-red-500 transition duration-300">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white hover:text-red-500 transition duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-red-500 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold footer-title">About Us</h5>
            <p className="text-white mt-4">
              Tokyo seeks to provide the best quality service and ensures an authentic travel agency from different places in Japan. <span className="block mt-4">Enrich your travel and experience as we feature different and unique cultures, traditions, and its history.</span>
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold footer-title">Get In Touch</h5>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-600 bg-white p-2 rounded-full" size={24} />
                <a href="sumiyaenterprise85@gmail.com" className="text-white hover:text-red-500 transition duration-300">@Tokyo.travel.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-600 bg-white p-2 rounded-full" size={24} />
                <a href="tel:+639109151041" className="text-white hover:text-red-500 transition duration-300">+81 80 4136 4488 </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600 bg-white p-2 rounded-full" size={24} />
                <a href="https://www.google.com/maps/place/University+of+Rizal+System,+Antipolo+Campus/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">TOKYO, OSAKA, Kyoto, Narita Airport & Haneda Airport picking
                </a>
              </li>
            </ul>
            <ul className="social-media mt-6 flex gap-4">
              <li>
                <a href="https://www.facebook.com/klaudimer.pantaleon.374" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/robin-dela-cruz-12247023b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/chckn_nggts_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="https://github.com/robin-dc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
                  <FaGithub size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER : CREDITS */}
    <footer className="section bg-black py-12">
      <div className="container mx-auto px-4 border-t border-white/60 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-white text-center lg:text-left">Tokyo 2022 &copy; All rights reserved</p>
         
        </div>
      </div>
    </footer>
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`bg-red-600 text-white p-3 rounded-full shadow-lg transition transform duration-500 ease-in-out hover:bg-red-700 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  </>
  )
}

export default Footer