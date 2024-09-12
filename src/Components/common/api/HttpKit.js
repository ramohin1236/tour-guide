import axios from "axios";
import { BASE_URL } from "../constant/constant";
import Cookies from "js-cookie";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`, // Base URL for all requests,
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

// Request interceptor for attaching tokens, logging, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the XSRF-TOKEN cookie
    const xsrfToken = Cookies.get("XSRF-TOKEN");
    console.log("XSRF-TOKEN:", xsrfToken);
    // Add auth token or other headers to the request
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["X-CSRF-Token"] = xsrfToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Successful response (status codes 200 - 299)
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      if (error.response.status === 401) {
        // Handle 401 Unauthorized errors globally
        // Redirect to login or refresh token
      }
      if (error.response.status === 500) {
        // Handle 500 Internal Server Error globally
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
