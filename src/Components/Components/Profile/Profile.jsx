import { useContext, useState } from "react";
import { userPasswordUpdate } from './../../../common/api/authApi';
import { AuthContext } from "../../../Pages/Auth/AuthProvider/AuthProvider";
import bcrypt from 'bcryptjs'; 


const Profile = () => {
  const { user } = useContext(AuthContext); 
  const [currentPassword, setCurrentPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentPasswordError, setCurrentPasswordError] = useState(""); 


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

  // Handle new password change
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
        console.log({
          email: user?.email,
          currentPassword: currentPassword, 
          newPassword: newPassword
        });
        
        await userPasswordUpdate(user?.email, currentPassword, newPassword);
        alert("Password updated successfully!");
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Failed to update password: " + error.message);
      }
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-white py-40">
      <div className="flex flex-col justify-center items-center bg-white shadow-2xl rounded-lg w-full max-w-xl p-10 transform transition duration-500 hover:scale-105 hover:shadow-xl">
       
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">{user?.firstName } {user?.lastName}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Current Password Field */}
        <div className="mt-6 w-full text-start">
          <label className="text-xl text-gray-800 mb-3 block">Current Password:</label>
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

        {/* Modal for Updating Password */}
        {isModalOpen && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-2xl font-semibold mb-4">Update Password</h3>

      {/* Current Password */}
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="border p-2 w-full rounded mb-3"
      />
      {currentPasswordError && <p className="text-red-500">{currentPasswordError}</p>}

      {/* New Password */}
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
    </div>
  );
};

export default Profile;
