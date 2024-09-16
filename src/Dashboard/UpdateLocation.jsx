import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateLocation } from "../common/api/locationApi";
import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";

function UpdateLocation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [description, setDescription] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [destination, setDestination] = useState(null);

  const location = useLocation()?.state;
  const {
    name: existingName,
    phone: existingPhone,
    address: existingAddress,
    website: existingWebsite,
    openTime: existingOpenTime,
    closeTime: existingCloseTime,
    description: existingDescription,
  } = location;
  useEffect(() => {
    setName(existingName);
    setPhone(existingPhone);
    setAddress(existingAddress);
    setWebsite(existingWebsite);
    setOpenTime(existingOpenTime);
    setCloseTime(existingCloseTime);
    setDescription(existingDescription);
  }, [
    location,
    existingName,
    existingCloseTime,
    existingOpenTime,
    existingWebsite,
    existingPhone,
    existingAddress,
    existingDescription,
  ]);

  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const locationData = {
      existingName,
      existingPhone,
      existingAddress,
      existingWebsite,
      existingOpenTime,
      existingCloseTime,
      description: stripHtmlTags(description),
    };

    try {
      await updateLocation(id, locationData);
      setIsLoading(true);
      toast.success("location Updated Successfully!");
      navigate("/dashboard/allocation");
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Error updating location.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold text-[#a04747]">
        Update Location
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Title and Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SelectField
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            options={destination?.result}
            placeholder="Select a Destination"
          />
        </div>

        {/* Other input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            type="text"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={false}
          />
          <InputField
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputField
            type="website"
            id="website"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required={false}
          />
        </div>

        {/* Open and Close Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            type="time"
            id="openTime"
            label="Open Time"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
          />
          <InputField
            type="time"
            id="closeTime"
            label="Close Time"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
          />
        </div>

        <ReactQuill
          theme="snow"
          value={description}
          onChange={(value) => setDescription(value)}
          placeholder="Write something..."
          className="h-72 mb-12"
        />

        {/* Publish button */}
        <button
          type="submit"
          className={`px-4 py-2 font-bold text-white rounded-md shadow-2xl ${
            isLoading
              ? "bg-gray-400"
              : "bg-gradient-to-r bg-[#c75f5f] hover:bg-[#a04747]"
          }`}
          disabled={isLoading || location === null ? true : false}
        >
          {isLoading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
}

export default UpdateLocation;

const InputField = ({ type, id, placeholder, value, onChange, label }) => (
  <div className="flex flex-col">
    {label && (
      <label htmlFor={id} className="mb-2 font-medium">
        {label}
      </label>
    )}
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md w-full"
      required
    />
  </div>
);

// SelectField component for reuse
const SelectField = ({ id, value, onChange, options, placeholder }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="p-2 border border-gray-300 rounded-md w-full"
    >
      <option value="">{placeholder}</option>
      {options?.length > 0 ? (
        options?.map((option) => (
          <option key={option?.name} value={option?.destination_id}>
            {option?.name}
          </option>
        ))
      ) : (
        <option disabled>No destinations available</option>
      )}
    </select>
  );
};
