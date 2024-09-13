import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Doc from "../../Components/Doc/Doc";

const Booking = () => {
  const { naraPark } = Doc();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    location: "",
    checkIn: "",
    checkOut: "",
    totalPersons: "",
    totalDays: "",
  });
  const destinations = {
    Tokyo: [
      "Meiji Shrine",
      "Omotesando Harajuku",
      "Meiji Jingu Shrine",
      "Illuminated tower",
    ],
    Kyoto: ["Fushimi Inari Shrine", "Katsura Imperial Villa", "Aoi Matsuri"],
    Osaka: ["Tsutenkaku Tower", "Osaka Castle", "Super Nintendo World"],
    Nara: ["Narita Temple", "Narita Park", "Narita"],
    Supporo: ["Haneda Airport", "Haneda Museum", "Haneda Shopping Mall"],
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // api
    console.log(formData);
    navigate("/booking-confirmation");
  };

  return (
    <div className="py-20  ">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${naraPark})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center md:py-20">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Make Your Reservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              {/* first name last nname */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              {/* email phone  */}
              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-600">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600">Your Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>
                    Select a destination
                  </option>
                  {Object.keys(destinations).map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-600">Your Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  disabled={!formData.destination} // Disable if no destination is selected
                >
                  <option value="" disabled>
                    {formData.destination
                      ? "Select a location"
                      : "Select a destination first"}
                  </option>
                  {formData.destination &&
                    destinations[formData.destination].map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                </select>
              </div>

              {/* Check-in and Check-out Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Check in</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Check out</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              {/* Total Persons */}
              <div>
                <label className="block text-gray-600">Total People</label>
                <input
                  type="number"
                  name="totalPersons"
                  placeholder="Enter total number of people"
                  value={formData.totalPersons}
                  onChange={handleChange}
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Total Days */}
              <div className="py-2">
                <label className="block text-gray-600">Total Days</label>
                <input
                  type="number"
                  name="totalDays"
                  placeholder="Enter total number of days"
                  value={formData.totalDays}
                  onChange={handleChange}
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Submit Button */}
             <Link to='/payment'>
             <button
                type="submit"
                className="w-full bg-[#A04747] text-white py-2 rounded-md hover:bg-[#7A2F2F] transition"
              >
                Check availability
              </button>
             </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
