
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { findAllDestination } from "../common/api/destinationApi";
import Pagination from "../Sharred/Pagination";


const AllDestination = () => {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [destinationsPerPage] = useState(5); 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await findAllDestination();
        console.log(data.result); 
      setDestinations(data.result)
      setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDestinations();
  }, []);

  
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = destinations.slice(
    indexOfFirstDestination,
    indexOfLastDestination
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold">All Destination</p>
        <Link to="/dashboard/createdestination">
          <button className="hover:bg-[#a04747] hover:text-white text-[#a04747] w-36 h-12 rounded-lg font-bold bg-white shadow-lg">
            Add Destination
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">SL</th>
              <th scope="col" className="px-6 py-3">Destination image</th>
              <th scope="col" className="px-6 py-3">Destination Name</th>
              <th scope="col" className="px-8 py-3">Destination Location</th>
              <th scope="col" className="px-8 py-3">Description</th>
              <th scope="col" className="px-16 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentDestinations.map((post, index) => (
              <tr
                key={post.destination_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
              >
                <td className="px-6 py-4">{indexOfFirstDestination + index + 1}</td>
                <td className="px-6 py-4">
                  <Link to={`/details/${post._id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="md:w-16 md:h-12 rounded-md object-cover bg-gray-500"
                    />
                  </Link>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <Link to={`/details/${post._id}`}>{post.name}</Link>
                </td>
                <td className="px-6 py-4 font-medium dark:text-white">
                  {post.airport}
                </td>
                <td className="px-6 py-4 font-medium dark:text-white">
                  {post.description}
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <MdDelete className="text-3xl hover:text-red-500 cursor-pointer" />
                  <Link to={`/dashboard/updatedestination/${post._id}`}>
                    <FaEdit className="text-3xl hover:text-teal-500" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-end p-4">
        <Pagination
          usersPerPage={destinationsPerPage}
          totalUsers={destinations.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllDestination;
