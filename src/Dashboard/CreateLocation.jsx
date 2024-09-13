import ReactQuill from "react-quill"


const CreateLocation = () => {
  return (
    <div className='p-4 max-w-4xl mx-auto min-h-screen'>
  <h1 className='text-center text-3xl my-7 font-semibold text-[#a04747]'>Create a Location</h1>
  <form className='flex flex-col gap-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <input
        type='text'
        placeholder='Title'
        required
        id='title'
        className='p-2 border border-gray-300 rounded-md w-full'
      />
      <select className='p-2 border border-gray-300 rounded-md w-full'>
        <option value='uncategorized'>Select a Location</option>
        <option value='tokyo'>Tokyo</option>
        <option value='newyork'>New York</option>
        <option value='paris'>Paris</option>
        <option value='london'>London</option>
        <option value='dubai'>Dubai</option>
      </select>
    </div>
         {/* email and number */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <input
        type='number'
        placeholder='Phone number'
        required
        id='number'
        className='p-2 border border-gray-300 rounded-md w-full'
      />
      <input
        type='email'
        placeholder='Email'
        required
        id='number'
        className='p-2 border border-gray-300 rounded-md w-full'
      />
    </div>
    {/* Responsive time input */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col'>
        <label htmlFor='open-time' className='mb-2 font-medium'>Open Time</label>
        <input
          type='time'
          id='open-time'
          className='p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='close-time' className='mb-2 font-medium'>Close Time</label>
        <input
          type='time'
          id='close-time'
          className='p-2 border border-gray-300 rounded-md'
        />
      </div>
    </div>

    {/* File upload section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-4 border-[#a04747] border-dotted p-3'>
      <input
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

    {/* Uploaded images preview */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
    </div>

    {/* Text editor */}
    <ReactQuill
      theme='snow'
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
  )
}

export default CreateLocation