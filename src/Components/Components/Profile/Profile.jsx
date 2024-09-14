const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg w-full max-w-xl p-10">
        <div className="">
          <img
            className="w-40 h-40 rounded-full border-4 border-white shadow-md"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
        <div className="mt-10 text-start">
          <p className="text-xl  text-gray-800">
            <span className="font-bold">First Name:</span>Samantha
          </p>
          <p className="text-xl  text-gray-800">
            <span className="font-bold">Last Name:</span>Jones
          </p>
          <p className="text-xl  text-gray-800">
            <span className="font-bold"> Email:</span>SamanthaJones@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
