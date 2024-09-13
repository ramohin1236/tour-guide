import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Sharred/Pagination";


const AllLocation = () => {
    const users = [
        {
          imageSrc: "/pr1.png",
          title: "Luxe Lounge Sofa",
          location: "Tokyo",
    
        },
        {
          imageSrc: "/chair.png",
    
          title: "Elegant Dining Table",
          location: "Tokyo",
       
        },
        {
          imageSrc: "/chair.png",
          location: "Tokyo",
          title: "Modern Floor Lamp",
    
        },
        {
          imageSrc: "/chair.png",
          title: "Comfort King Bed",
          location: "tokoyo",
       
        },
        {
          imageSrc: "/chair.png",
    
          title: "Office Desk",
          location: "Tokyo",
     
        },
        {
          imageSrc: "/chair.png",
    
          title: "Stylish Armchair",
          location: "Tokyo",
      
        },
      ];
  return (
    <div>
    <div className="flex justify-between py-6">
      <p className="text-3xl font-semibold">All Location</p>
     <Link to='/dashboard/createlocation'> <button className="hover:bg-[#a04747] hover:text-white text-[#a04747] w-36 h-12 rounded-lg  font-bold bg-white shadow-lg">
        Add Location
      </button></Link>
    </div>

    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL
            </th>
            <th scope="col" className="px-6 py-3">
              Destination image
            </th>
            <th scope="col" className="px-6 py-3">
            Destination Name
            </th>
            <th scope="col" className="px-8 py-3">
            Destination Location
            </th>

            <th scope="col" className="px-16 py-3 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((post, index) => (
            <tr
              key={post._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">
                <Link to={`/details/:id`}>
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="md:w-20 md:h-20 rounded-full object-cover bg-gray-500"
                  />
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Link to={`/details/:id`}>{post.title}</Link>
              </td>
              

              <td
                className='px-6 py-4 font-medium  dark:text-white'
              >
                {post.location}
              </td>

              <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
                <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
                  <div>
                    <MdDelete className="text-3xl hover:text-red-500" />
                  </div>
                  <div>
                    <Link to="/dashboard/updatedestination/:id">
                      <FaEdit className="text-3xl hover:text-teal-500" />
                    </Link>
                  </div>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-8 flex justify-end p-4">
      <Pagination />
    </div>
  </div>
  )
}

export default AllLocation