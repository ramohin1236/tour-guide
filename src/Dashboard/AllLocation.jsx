import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Components/Sharred/Pagination";
import { getAllLocations } from "../common/api/locationApi";

const AllLocation = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationsPerPage] = useState(10);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getAllLocations();
        console.log(response.result);
        setLocations(response.result);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch bookings");
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);
  
//   useEffect(() => {
//     const fetchLocations = async () => {
//         try {
//           const response = await getAllLocations();
//           console.log("Data from API:", response);
//           if (Array.isArray(response)) {
//             setLocations(response);
//           } else if (response && Array.isArray(response.locations)) {
//             setLocations(response.locations);
//           } else {
//             throw new Error("Data format is incorrect");
//           }
//         } catch (err) {
//           setError(err.message || "Failed to fetch locations");
//         } finally {
//           setLoading(false);
//         }
        
//       };
//     fetchLocations();
//   }, []);

  // Pagination logic
  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold">All Locations</p>
        <Link to="/dashboard/createlocation">
          <button className="bg-[#c75f5f] font-bold text-white hover:bg-[#a04747] w-36 h-12 rounded-lg">
            Add Location
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">SL</th>
              <th scope="col" className="px-6 py-3">Destination Image</th>
              <th scope="col" className="px-6 py-3">Destination Name</th>
              <th scope="col" className="px-8 py-3">Destination Location</th>
              <th scope="col" className="px-16 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentLocations.length > 0 ? (
              currentLocations.map((location, index) => (
                <tr
                  key={location.location_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <Link to={`/details/${location._id}`}>
                      <img
                        src={location.imageSrc}
                        alt={location.title}
                        className="md:w-20 md:h-20 rounded-full object-cover bg-gray-500"
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    <Link to={`/details/${location._id}`}>{location.title}</Link>
                  </td>
                  <td className="px-6 py-4 font-medium dark:text-white">
                    {location.location}
                  </td>
                  <td className="px-6 py-4 flex gap-3 hover:underline hover:cursor-pointer">
                    <div>
                      <MdDelete className="text-3xl hover:text-red-500" />
                    </div>
                    <div>
                      <Link to={`/dashboard/updatedestination/${location._id}`}>
                        <FaEdit className="text-3xl hover:text-teal-500" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No Locations Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {locations.length > 0 && (
        <div className="mt-8 flex justify-end p-4">
          <Pagination
            itemsPerPage={locationsPerPage}
            totalItems={locations.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default AllLocation;
