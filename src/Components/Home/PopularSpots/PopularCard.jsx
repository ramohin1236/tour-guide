/* eslint-disable react/prop-types */


const PopularCard = ({ image, title, description, number }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <img src={image} className="h-72 object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-gray-800 text-xl font-bold">{title}</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
        <button type="button"
          className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View More</button>
      </div>
    </div>
  )
}

export default PopularCard