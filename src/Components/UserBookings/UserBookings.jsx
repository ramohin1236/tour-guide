import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider/AuthProvider";
import { deleteBooking, getSingleBooking } from "../../common/api/bookingApi";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const UserBookings = () => {
    const [userData, setUserData]=useState(null)
    const { user } = useContext(AuthContext); 
   
    console.log(userData);

    useEffect(() => {
        const fetchAttachments = async () => {
          try {
            const userInfo = await getSingleBooking(user?.user_id);
            setUserData(userInfo?.result)
    
        
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchAttachments();
      }, [user?.user_id]);

      const handleDelete = async (bookingId) => {
        console.log(bookingId);
        if (!bookingId) {
          toast.error("User ID is not provided");
          return;
        }
    
        try {
          await deleteBooking(bookingId);
    
          setUserData(userData.filter((booking) => booking.booking_id !== bookingId)); 
    
          toast.success("Booking deleted successfully!");
        } catch (error) {
          toast.error(error.message);
        }
      };
  return (
    <div className="pt-32">
         <div className='pb-10 px-[20px] md:px-[100px]'>
      <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold text-[#a04747]">My Bookings</p>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Booking ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Start{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Booking End{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Country From{" "}
              </th>
             
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.length > 0 ? (
              userData?.map((booking, index) => (
                <tr
                  key={booking?.booking_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {booking?.booking_id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {booking?.first_name} {booking?.last_name}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {booking?.email}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {booking?.phone}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {moment(booking?.trip_starts).format("MMMM Do, YYYY")}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {moment(booking?.trip_ends).format("MMMM Do, YYYY")}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {booking?.country}
                  </td>
                 
                  <td className="px-6 py-4 flex gap-3 hover:cursor-pointer">
                    <MdDelete
                      onClick={() => handleDelete(booking?.booking_id)}
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

     
    </div>
    </div>
  )
}

export default UserBookings