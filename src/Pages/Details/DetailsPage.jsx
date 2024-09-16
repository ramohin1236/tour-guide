
import {  FaMapMarkerAlt} from "react-icons/fa"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLocationById } from "../../common/api/locationApi";
import config from "../../config/config";
import toast from "react-hot-toast";

const DetailsPage = () => {

    const [currentLocation, setCurrentLocation]=useState({})
    
    const [, setLoading]=useState(true)
    
     const params =useParams()
     const {apiUrl}=config
    

    useEffect(() => {
        const fetchLocationById = async () => {
          try {
            const response = await getLocationById(params?.id); 
            
            setCurrentLocation(response?.result);
            setLoading(false);
          } catch (err) {
            toast.error(err.message || "Failed to fetch users");
            setLoading(false);
          }
        };
        fetchLocationById();
      }, [params.id]);
      
    const {
        name = "Unknown Name",
        default_image = "default.jpg", 
        description = "No description available.",
        phone = "N/A",
        website = "N/A",
        hours = "Not available",
        address = "No address provided",
      } = currentLocation;
    
    
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto mt-16 md:mt-24">
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left section with image and description */}
          <div className="lg:col-span-2   rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>

            {/* Image */}
            <img src={`${apiUrl}/${default_image}`} alt="Tokyu Plaza" className="w-full h-auto rounded-lg mb-4" />

            {/* Description */}
            <p className="text-gray-600 mb-4">
             {description}
            </p>
           
          </div>

          {/* Right section with overview details */}
          <div className="  rounded-lg p-6 space-y-4  md:mt-12">
            <h2 className="text-2xl md:text-4xl font-semibold">Overview</h2>


            {/* Address */}
            <div className="text-gray-700 md:text-xl">
                
              <h3 className="font-semibold flex items-center gap-2 text-[#404040]"> <FaMapMarkerAlt />Address:</h3>
              <p>{address}</p>
            </div>

            {/* Hours */}
            <div className=" font-semibold text-[#404040]">
              <h3 className="font-semibold text-xl">Hours:</h3>
              <p>{hours}</p>
            </div>

            {/* Phone Number */}
            <div className=" text-[#404040]">
              <h3 className="font-semibold text-xl">Phone Number:</h3>
              <p>{phone} </p>
            </div>

            {/* Website */}
            <div className="text-gray-700">
              <h3 className="font-semibold">Website:</h3>
              <a href={website} className="text-indigo-500 hover:underline">
                {website}
              </a>
            </div>

            <div className="mt-5 mr-7 md:mr-20 ml-7 md:ml-5">
              <Link to="/booking">
                <button className="text-xl shadow-lg text-[#A04747] font-semibold hover:bg-[#A04747] hover:text-white  bg-white px-5 py-2 rounded-md transition duration-300 ease-in-out">
                 Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      
    </div>
  )
}

export default DetailsPage