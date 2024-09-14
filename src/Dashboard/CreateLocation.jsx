import { useState, useEffect } from 'react';
import ReactQuill from "react-quill";
import { findAllDestination } from '../common/api/destinationApi';

const CreateLocation = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    phone: '',
    address: '',
    email: '',
    openTime: '',
    description: '',
    closeTime: '',
    destination: '',
  });
  
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await findAllDestination();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    if (e.target) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  // Handle ReactQuill changes
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='p-4 max-w-4xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold text-[#a04747]'>
        Create a Location
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        {/* Title and Destination */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            id='title'
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
            required
            className='p-2 border border-gray-300 rounded-md w-full'
          />
          <select
            id='destination'
            onChange={handleChange}
            value={formData.destination}
            className='p-2 border border-gray-300 rounded-md w-full'
          >
            <option value=''>Select a Destination</option>
            {destinations?.result?.length > 0 ? (
              destinations?.result?.map((dest) => (
                <option key={dest.name} value={dest.name}>
                  {dest.name}
                </option>
              ))
            ) : (
              <option disabled>No destinations available</option>
            )}
          </select>
        </div>

        {/* Other input fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            id='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
            className='p-2 border border-gray-300 rounded-md w-full'
          />
          <input
            type='text'
            id='phone'
            placeholder='Phone number'
            value={formData.phone}
            onChange={handleChange}
            required
            className='p-2 border border-gray-300 rounded-md w-full'
          />
          <input
            type='text'
            id='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            required
            className='p-2 border border-gray-300 rounded-md w-full'
          />
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        {/* Open and Close Time */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='openTime' className='mb-2 font-medium'>
              Open Time
            </label>
            <input
              type='time'
              id='openTime'
              value={formData.openTime}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='closeTime' className='mb-2 font-medium'>
              Close Time
            </label>
            <input
              type='time'
              id='closeTime'
              value={formData.closeTime}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>

        {/* File upload section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-4 border-[#a04747] border-dotted p-3'>
          <input
            multiple
            type='file'
            accept='image/*'
            className='col-span-2 p-2 border border-gray-300 rounded-md'
          />
          <button
            type='button'
            className='px-4 py-2 bg-[#c75f5f] font-bold text-white hover:bg-[#a04747]  rounded-md w-full'
          >
            Upload Images
          </button>
        </div>

        {/* ReactQuill for description */}
        <ReactQuill
          theme='snow'
          value={formData.description}
          onChange={handleQuillChange}
          placeholder='Write something...'
          className='h-72 mb-12'
        />

        {/* Publish button */}
        <button
          type='submit'
          className='px-4 py-2 bg-gradient-to-r bg-[#c75f5f] font-bold text-white hover:bg-[#a04747] rounded-md shadow-2xl'
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateLocation;
