import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams, useNavigate } from 'react-router-dom';

import {  updateDestination } from '../common/api/destinationApi'; 
import toast from 'react-hot-toast';

const UpdateDestination = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [airport, setAirport] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const data = await updateDestination(id); 
        setTitle(data.name);
        setAirport(data.airport);
        setDescription(data.description);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestination();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: title,
      description: stripHtmlTags(description), 
      airport,
    };

    try {
      const response = await updateDestination(id, updatedData);
      console.log('Destination updated successfully:', response);
      toast.success('Destination Updated Successfully!');
      navigate('/dashboard/alldestination'); 
    } catch (error) {
      console.error('Error updating destination:', error);
      toast.error('Error updating destination.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 max-w-4xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Update Destination</h1>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='Title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-2 border border-gray-300 rounded-md w-full'
          />
          <input
            type='text'
            placeholder='Your Airport name'
            required
            value={airport}
            onChange={(e) => setAirport(e.target.value)}
            className='p-2 border border-gray-300 rounded-md w-full'
          />
        </div>

        <ReactQuill
          theme='snow'
          value={description}
          onChange={setDescription}
          className='h-72 mb-12'
          placeholder='Write something...'
        />

        <button
          type='submit'
          className='px-4 py-2 bg-gradient-to-r bg-[#a04848] font-bold text-white rounded-md'
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDestination;
