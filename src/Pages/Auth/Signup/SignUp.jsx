import { Link, useNavigate } from "react-router-dom"
import Doc from "../../../Components/Doc/Doc"

import { useState } from "react";
import { toast } from 'react-hot-toast';
import { userSignUp } from "../../../common/api/authApi";

const SignUp = () => {
    const {signupImage}=Doc()
    const navigate =useNavigate()


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
      });
    
     
      const [error, setError] = useState(null); 
      const [loading, setLoading] = useState(false);
      const [passwordError, setPasswordError] = useState("");
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
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    
        
        if (e.target.name === "password") {
          const validationError = validatePassword(e.target.value);
          setPasswordError(validationError); 
        }
      };
    
      const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
      
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }
      
        setLoading(true); 
      
        try {
          const result = await userSignUp({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          });
      
          console.log("User signed up successfully:", result);
          
       
          toast.success("User signed up successfully!");
          
          navigate("/signin");
        } catch (err) {
          setError(err.message || "Sign up failed");
          toast.error(err.message || "Sign up failed"); 
        } finally {
          setLoading(false); 
        }
      };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
    <div className="bg-white shadow-lg rounded-lg flex flex-col-reverse lg:flex-row max-w-6xl p-8 lg:p-12 h-auto lg:h-[700px] mt-16">
      {/* Left Image Section */}
      <div className="lg:flex w-full lg:w-1/2 items-center justify-center mb-8 lg:mb-0">
        <div className="relative w-full h-64 lg:h-full">
          <img
            src={signupImage}
            alt="Sign In Illustration"
            className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="w-full lg:w-1/2 px-6 lg:px-8 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>

         
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full lg:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full lg:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${passwordError ? 'ring-red-500' : 'ring-indigo-500'}`}
            required
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} {/* Show password validation error */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            className={`w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold transition-colors duration-300 ${
              loading ? "cursor-not-allowed bg-gray-400" : "hover:bg-indigo-600"
            }`}
            type="submit"
            disabled={loading || passwordError} // Disable button while loading or if there is a validation error
          >
            {loading ? "Loading..." : "Sign Up"} {/* Show loading while processing */}
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-500 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default SignUp