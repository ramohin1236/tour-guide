import Pagination from "../Sharred/Pagination";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const AllBooking = () => {
    const currentUsers =[

    ]
     
    
    
    return (
      <div>
        <div className="flex justify-between py-6">
          <p className="text-3xl font-semibold">All Booking</p>
         
        </div>
  
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">SL</th>
                <th scope="col" className="px-6 py-3">User Image</th>
                <th scope="col" className="px-6 py-3">User Name</th>
                <th scope="col" className="px-6 py-3">User Email</th>
                <th scope="col" className="px-6 py-3">Cheak In</th>
                <th scope="col" className="px-6 py-3">Cheak Out</th>
                <th scope="col" className="px-6 py-3">Destination</th>
                <th scope="col" className="px-6 py-3">Total People</th>
                
                <th scope="col" className="px-16 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
            {currentUsers.map((user, index) => (
    <tr
      key={user.user_id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
    >
      <td className="px-6 py-4">{index + 1}</td>
      <td className="px-6 py-4">
        <img
          src={user.imageSrc || "/default-image.png"}
          alt={user.title}
          className="md:w-20 md:h-20 rounded-full object-cover bg-gray-500"
        />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {`${user.firstName} ${user.lastName}`}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {user.email}
      </td>
      <td
        className={`px-6 py-4 font-medium dark:text-white ${
          user.role === "Admin" ? "text-green-500" : "text-red-500"
        }`}
      >
        {user.role}
      </td>
      <td className="px-6 py-4 flex gap-3 hover:underline hover:cursor-pointer">
        <MdDelete
          className="text-3xl hover:text-red-600"
          
        />
        <Link to="/dashboard/edituser">
          <FaEdit className="text-3xl hover:text-teal-500" />
        </Link>
      </td>
    </tr>
  ))}
            </tbody>
          </table>
        </div>
  
        {/* Pagination */}
        <div className="mt-8 flex justify-end p-4">
          <Pagination
           
          />
        </div>
      </div>
    )
}

export default AllBooking