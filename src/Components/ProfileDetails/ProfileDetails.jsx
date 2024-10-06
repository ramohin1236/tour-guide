import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider/AuthProvider";
// import { AuthContext } from "../../../Pages/Auth/AuthProvider/AuthProvider";
export default function ProfileDetails() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-2xl rounded-lg w-full max-w-xl mx-auto p-8 md:p-12 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-center p-4">
        <img
          className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>
      <div className="mt-5 space-y-4 text-start w-full">
        <p className="text-lg font-medium text-gray-900">
          First Name:
          <span className="ml-2 text-gray-600">{user?.firstName || ""}</span>
        </p>
        <p className="text-lg font-medium text-gray-900">
          Last Name:
          <span className="ml-2 text-gray-600">{user?.lastName || ""}</span>
        </p>
        <p className="text-lg font-medium text-gray-900">
          Email:
          <span className="ml-2 text-gray-600">{user?.email || ""}</span>
        </p>
        <p className="text-lg font-medium text-gray-900">
          Phone:
          <span className="ml-2 text-gray-600">{user?.phoneNumber || ""}</span>
        </p>
      </div>
    </div>
  );
}
