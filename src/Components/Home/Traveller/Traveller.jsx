import Doc from "../../Doc/Doc"

const Traveller = () => {
    const {naraPark,tokoyoSky,fuziMountain}=Doc()
  return (
    <section className="section section-photos scrollspy bg-gray-100" id="photos">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-1" data-aos="fade-right" data-aos-duration="3000">
          <h2 className="md:text-5xl font-bold text-[#202020]">BEST TRAVELER SHARED PHOTO</h2>
          <p className="mt-4 text-justify">
            Excellent opportunity to sample local cuisine and culture while seeing the main attractions.
            A good mix of modern, traditional, and historical sights or experiences. RYOKOU handled the transportation arrangements for us, making it simple for us to move between cities and nations. The guide was very helpful and always went above and beyond for the group.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-duration="3000">
          <img src={fuziMountain} alt="Travelers in Kyoto" className="rounded shadow-lg" />
        </div>
        <div className="col-span-1 lg:col-span-1 border-2" data-aos="fade-left" data-aos-duration="3000">
          <img src={tokoyoSky} alt="Travelers in Tokyo" className="rounded shadow-lg h-80 w-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-1" data-aos="fade-right" data-aos-duration="3000">
          <img src={naraPark} alt="Travelers in Osaka" className="rounded shadow-lg" />
        </div>
        <div className="col-span-1 lg:col-span-2" data-aos="fade-left" data-aos-duration="3000">
        <iframe  width="100%"  height="325" src="https://www.youtube.com/embed/G5RpJwCJDqc?si=8N1bkCwBnpY5ITEi" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Traveller