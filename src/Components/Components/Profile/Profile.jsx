<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { userPasswordUpdate } from "./../../../common/api/authApi";
import { AuthContext } from "../../../Pages/Auth/AuthProvider/AuthProvider";
import bcrypt from "bcryptjs";
import { getSingleBooking, deleteBooking } from "./../../../common/api/bookingApi";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [userData, setUserData] = useState(null);

  const validatePassword = (password) => {
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;
    const symbolPattern = /[^A-Za-z0-9]/;
    let error = "";

    if (!uppercasePattern.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!numberPattern.test(password)) {
      error = "Password must contain at least one number.";
    } else if (!symbolPattern.test(password)) {
      error = "Password must contain at least one special character.";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters long.";
    }

    return error;
  };

  const checkCurrentPassword = async () => {
    const passwordMatches = await bcrypt.compare(currentPassword, user?.password);
    return passwordMatches;
  };

  const handleContinue = async () => {
    if (!currentPassword) {
      setCurrentPasswordError("Current password is required.");
      return;
    }

    const passwordMatches = await checkCurrentPassword();

    if (passwordMatches) {
      setIsModalOpen(true);
      setCurrentPasswordError("");
    } else {
      setCurrentPasswordError("Incorrect current password.");
    }
  };

  const handlePasswordChangeWithCurrent = async () => {
    if (!currentPassword || !newPassword) {
      setCurrentPasswordError("Old password and new password fields are required.");
      return;
    }

    const passwordMatches = await checkCurrentPassword();

    if (!passwordMatches) {
      setCurrentPasswordError("Incorrect current password.");
      return;
    }

    const validationError = validatePassword(newPassword);
    if (validationError) {
      setPasswordError(validationError);
    } else {
      setPasswordError("");
      try {
        await userPasswordUpdate(user?.email, currentPassword, newPassword);
        alert("Password updated successfully!");
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Failed to update password: " + error.message);
      }
    }
  };

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const userInfo = await getSingleBooking(user?.user_id);
        setUserData(userInfo?.result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAttachments();
  }, [user?.user_id]);

  const handleDelete = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      setUserData(userData.filter((booking) => booking.booking_id !== bookingId));
      toast.success("Booking deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 flex flex-col items-center space-y-10 ">
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg w-full max-w-xl p-6 transform transition hover:scale-105 hover:shadow-xl mt-28">
        <div className="relative">
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 md:h-5 md:w-5 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <div className="mt-6 w-full text-start">
          <label className="text-lg md:text-xl text-gray-800 mb-3 block">
            Current Password:
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border p-2 w-full rounded"
          />
          {currentPasswordError && (
            <p className="text-red-500 mt-2">{currentPasswordError}</p>
          )}
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
          onClick={handleContinue}
        >
          Continue
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-4">Update Password</h3>

              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border p-2 w-full rounded mb-3"
              />
              {currentPasswordError && <p className="text-red-500">{currentPasswordError}</p>}

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-2 w-full rounded mb-3"
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}

              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={handlePasswordChangeWithCurrent}
              >
                Update Password
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 ml-3 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-full px-4 sm:px-10">
        <div className="flex justify-between py-6">
          <p className="text-2xl md:text-3xl font-semibold text-[#a04747]">My Bookings</p>
        </div>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-sm md:text-lg text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-2 md:px-6 py-3">SL</th>
                <th className="px-2 md:px-6 py-3">Booking ID</th>
                <th className="px-2 md:px-6 py-3">User Name</th>
                <th className="px-2 md:px-6 py-3">Email</th>
                <th className="px-2 md:px-6 py-3">Phone</th>
                <th className="px-2 md:px-6 py-3">Booking Start</th>
                <th className="px-2 md:px-6 py-3">Booking End</th>
                <th className="px-2 md:px-6 py-3">Country From</th>
                <th className="px-2 md:px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData?.length > 0 ? (
                userData?.map((booking, index) => (
                  <tr
                    key={booking?.booking_id}
                    className="bg-white border-b text-sm md:text-lg font-medium"
                  >
                    <td className="px-2 md:px-6 py-3">{index + 1}</td>
                    <td className="px-2 md:px-6 py-3">{booking?.booking_id}</td>
                    <td className="px-2 md:px-6 py-3">{user?.firstName} {user?.lastName}</td>
                    <td className="px-2 md:px-6 py-3">{user?.email}</td>
                    <td className="px-2 md:px-6 py-3">{booking?.phone}</td>
                    <td className="px-2 md:px-6 py-3">
                      {moment(booking?.startDate).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-2 md:px-6 py-3">
                      {moment(booking?.endDate).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-2 md:px-6 py-3">{booking?.country}</td>
                    <td className="px-2 md:px-6 py-3">
                      <MdDelete
                        className="text-2xl text-red-500 cursor-pointer"
                        onClick={() => handleDelete(booking?.booking_id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 py-4">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
=======
import { useState } from "react";
import ProfileDetails from "../../ProfileDetails/ProfileDetails";
import UserBookings from "../../UserBookings/UserBookings";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile Details");

  return (
    <div className="bg-white pt-40 pb-20 px-[20px] md:px-[100px]">
      {/* Tabs */}
      <ul className="flex bg-gray-100">
        <li
          onClick={() => setActiveTab("Profile Details")}
          className={`tab w-full text-center text-base py-3 px-6 cursor-pointer ${
            activeTab === "Profile Details"
              ? "text-white font-bold bg-[#d94e4e]"
              : "text-gray-600 font-semibold"
          }`}
        >
          Profile Details
        </li>
        <li
          onClick={() => setActiveTab("Bookings")}
          className={`tab w-full text-center text-base py-3 px-6 cursor-pointer ${
            activeTab === "Bookings"
              ? "text-white font-bold bg-[#d94e4e]"
              : "text-gray-600 font-semibold"
          }`}
        >
          Bookings
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === "Profile Details" && (
          <div id="Profile Details" className="tab-content">
            <h1 className="text-4xl font-bold text-[#d94e4e] pb-10 text-center">
              Profile Details
            </h1>
            <ProfileDetails />
          </div>
        )}
        {activeTab === "Bookings" && (
          <div id="Bookings" className="tab-content">
            <h1 className="text-4xl font-bold text-[#d94e4e] pb-10 text-center">
              Booking Details
            </h1>
            <UserBookings />
          </div>
        )}
>>>>>>> d1c71e2d89771e7ea79d7cceefb6e945a161ea31
      </div>
    </div>
  );
};

export default Profile;
