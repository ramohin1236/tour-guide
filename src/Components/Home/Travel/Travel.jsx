import { FaChevronRight, FaTimes } from 'react-icons/fa';
const Travel = () => {
 
    const cards = [
        {
          title: "MOUNT FUJI",
          img: "images/places/cc-fuji.jpeg",
          description: "5D/4N | People: 8 | Kyoto",
        },
        {
          title: "NARA",
          img: "images/places/cc-nara.jpeg",
          description: "5D/4N | People: 8 | Kyoto",
        },
        {
          title: "FUKUOKA",
          img: "images/places/cc-fukuoka.jpg",
          description: "5D/4N | People: 8 | Kyoto",
        },
        {
          title: "HIROSHIMA",
          img: "images/places/cc-hiroshima.jpeg",
          description: "5D/4N | People: 8 | Kyoto",
        },
        {
          title: "NAGASAKI",
          img: "images/places/cc-nagasaki.jpg",
          description: "5D/4N | People: 8 | Kyoto",
        },
        {
          title: "SAPPORO",
          img: "images/places/cc-sapporo.jpg",
          description: "5D/4N | People: 8 | Kyoto",
        },
      ];
      
    
  return (
    <section className="section section-carousel bg-gray-100" id="places">
    <p className="text-center" data-aos="fade-right" data-aos-duration="3000">
      Here are the other places that you must visit.
    </p>
    <h2 className="text-center" data-aos="fade-right" data-aos-duration="3000">
      TRAVEL AND INS<span className="text-red-700">PIRE YOUR LIFE</span>
    </h2>
    <div className="carousel" data-aos="fade-left" data-aos-duration="3000">
      {cards.map((place, index) => (
        <div
          key={index}
          className="card carousel-item rounded-lg shadow-lg overflow-hidden bg-white/25 backdrop-blur-lg border border-white/20"
        >
          <div className="card-image relative">
            <img className="w-full h-64 object-cover" src={place.image} alt={place.title} />
            <div className="absolute top-5 right-[-45px] transform rotate-45 bg-red-700 text-white px-4 py-1 shadow-lg">
              50% off
            </div>
          </div>
          <div className="card-content relative p-6">
            <span className="card-title font-bold text-transparent bg-gradient-to-b from-red-700 to-black bg-clip-text">
              {place.title}
              <FaChevronRight className="inline-block ml-2 text-black w-8 h-8 rounded-full" />
            </span>
            <a
              href="#modal1"
              className="modal-trigger text-blue-900 font-semibold inline-flex items-center mt-4"
            >
              Book Now <FaChevronRight className="ml-2 transform rotate-90" />
            </a>
            <div className="floating-div absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-lg p-4 text-center">
              <p>{place.details}</p>
            </div>
          </div>
          <div className="card-reveal bg-cover bg-no-repeat bg-center p-6" style={{ backgroundImage: `url('/images/extra/bg-white.jpg')` }}>
            <span className="card-title text-black text-lg font-bold">
              {place.title}
              <FaTimes className="inline-block ml-2 text-black w-8 h-8" />
            </span>
            <p className="text-justify mt-6">{place.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Travel