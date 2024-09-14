/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { findAllBookings } from "../common/api/bookingApi";
import moment from 'moment';
import UserPagination from "../Components/Sharred/Pagination";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await findAllBookings(); 
        console.log(response.result);
        setBookings(response.result);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch bookings");
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Pagination logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold text-[#a04747]">Total {bookings?.length} Bookings</p>
        
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">SL</th>
              <th scope="col" className="px-10 py-3">Booking ID</th>
              <th scope="col" className="px-6 py-3">User Name</th>
              <th scope="col" className="px-32 py-3">Email</th>
              <th scope="col" className="px-10 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Booking Start </th>
              <th scope="col" className="px-6 py-3">Booking End </th>
              <th scope="col" className="px-6 py-3">Country From </th>
              <th scope="col" className="px-6 py-3">Status </th>
              <th scope="col" className="px-16 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
          {currentBookings.length > 0 ? (
            currentBookings.map((booking, index) => (
              <tr
                key={booking.booking_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {booking.booking_id}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {booking.first_name} {booking.last_name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {booking.email}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {booking.phone}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {moment(booking.trip_starts).format('MMMM Do, YYYY')}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {moment(booking.trip_ends).format('MMMM Do, YYYY')}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {booking.country}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <button >
                     {booking.booking_status}
                  </button>
                </td>
                <td className="px-6 py-4 flex gap-3  hover:cursor-pointer">
                  <MdDelete
                    className="text-3xl hover:text-red-600"
                    
                  />
                 
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 py-6">
                No Bookings Available
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {bookings.length > 0 && (
        <div className="mt-8 flex justify-end p-4">
          <UserPagination
            usersPerPage={bookingsPerPage}
            totalUsers={bookings.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default AllBookings;
