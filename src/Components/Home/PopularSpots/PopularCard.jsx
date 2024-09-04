/* eslint-disable react/prop-types */


const PopularCard = ({ image, title, description, number }) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="2000"
    className="relative mt-12 p-4 w-full md:w-1/3 "
  >
    <div className="card">
      <img src={image} alt={title} className="w-full object-cover h-96" />
      <div className="bg-black bg-opacity-75 p-4 text-center">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute top-4 left-4 bg-gradient-to-b from-black to-transparent p-4">
        <span className="text-white text-4xl font-bold">{number}</span>
      </div>
    </div>
  </div>
  )
}

export default PopularCard