import axiosInstance from "./HttpKit";

export const allUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/users/all_users");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("An error occurred");
  }
};
