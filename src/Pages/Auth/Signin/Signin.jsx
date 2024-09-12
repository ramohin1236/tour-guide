/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

import Doc from "../../../Components/Doc/Doc";
import { userSignIn } from "../../../common/api/authApi";
import toast from "react-hot-toast";

const Signin = () => {
  const { signupImage } = Doc();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await userSignIn(email, password);
      toast.success("Sign in successful!")
      console.log("Sign in successful:", data);
    } catch (err) {
      setError(err.message || "Failed to sign in");
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
            Signin Your Account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?
            <Link to="/signup" className="text-indigo-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
