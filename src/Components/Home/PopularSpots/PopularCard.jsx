import { Link } from "react-router-dom";
import config from "../../config/config";
import { useState } from "react";

const PopularCard = ({ loc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { apiUrl } = config;
  const { default_image, name, description, location_id } = loc;

  // Truncate the description to 300 characters
  const truncatedDescription = description.length > 300
    ? `${description.substring(0, 300)}...`
    : description;

  return (
    <div className="relative bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 transition-transform duration-300 hover:scale-105">
      <div className="min-h-[256px] overflow-hidden">
        <img
          src={`${apiUrl}/${default_image}`}
          className="h-72 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="text-black hover:text-[#A04747] text-2xl font-bold">
          {name}
        </h3>
        {/* Tooltip for full description */}
        <div
        //   className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="mt-4 text-base text-black leading-relaxed">
            {truncatedDescription}
          </p>
          {isHovered && description.length > 300 && (
            <div className="absolute top-0 left-0 mt-10 z-10 w-full p-3 bg-[#A04747] text-white rounded-lg shadow-lg text-sm leading-normal">
              {description}
            </div>
          )}
        </div>

        <Link to={`/details/${location_id}`}>
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
