const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white py-40">
      <div className="flex flex-col justify-center items-center bg-white shadow-2xl rounded-lg w-full max-w-xl p-10 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 h-5 w-5 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Samantha Jones
          </h2>
          <p className="text-gray-500">SamanthaJones@gmail.com</p>
        </div>
        <div className="mt-6 w-full border-t-2 border-gray-100"></div>
        <div className="mt-6 text-start w-full">
          <p className="text-xl text-gray-800 mb-3">
            <span className="font-bold">First Name:</span> Samantha
          </p>
          <p className="text-xl text-gray-800 mb-3">
            <span className="font-bold">Last Name:</span> Jones
          </p>
          <p className="text-xl text-gray-800 mb-3">
            <span className="font-bold">Email:</span> SamanthaJones@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;