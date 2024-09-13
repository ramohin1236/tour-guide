/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PopularCard = ({ image, title, description, number }) => {
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 transition-transform duration-300 hover:scale-105">
      <div className="min-h-[256px] overflow-hidden">
        <img
          src={image}
          className="h-72 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="text-black hover:text-[#A04747] text-2xl font-bold">
          {title}
        </h3>
        <p className="mt-4 text-base text-black leading-relaxed">
          {description}
        </p>
        <Link to="/details/:id">
          <button
            type="button"
            className="mt-6 px-5 py-3 rounded-lg text-white text-base tracking-wider border-none outline-none relative overflow-hidden transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#A04747] via-[#A04747] to-[#A04747] transition-all duration-300 opacity-75 group-hover:opacity-100 group-hover:scale-105"></span>
            <span className="absolute inset-0 border-2 border-[#A04747] rounded-lg transform scale-110 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
            <span className="relative">View More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
