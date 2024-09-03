import { useState, useEffect } from 'react';

const slides = [
  {
    videoSrc: '/videos/vid8.2.mp4',
    title: 'EXPAND YOUR JOURNEY',
    description: 'Where to go? What to do? Get started, explore the life you want to live.',
  },
  {
    videoSrc: '/videos/vid2.mp4',
    title: 'TRAVEL AROUND JAPAN',
    description: 'Endless Discovery: Adventure and Discovery is worthwhile and endless, travel far enough, seek for yourself, seek other places, seek other lives, other souls, and culture.',
  },
  {
    videoSrc: '/videos/vid1.mp4',
    title: 'EXPERIENCE TOKYO',
    description: 'Tokyo Tokyo Old meets New: Tokyo has it all, leading the way in technological advancements while upholding its deeply ingrained traditions.',
  },
  {
    videoSrc: '/videos/vid4.mp4',
    title: 'VISIT OSAKA',
    description: 'Venice of the East: Blends ancient history with ultra-modern attractions, Japan\'s third largest and most fun-loving city.',
  },
  {
    videoSrc: '/videos/vid5.mp4',
    title: 'DISCOVER KYOTO',
    description: 'Visit Kyoto to experience its wonders and to enrich your travels with its history, culture, and untouched nature.',
  },
];

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="home" className=" relative  bg-black h-[700px]">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <video
          src={slide.videoSrc}
          loop
          autoPlay
          muted
          className="object-cover w-full h-full opacity-60"
        ></video>
        <div className="caption absolute 
        left-1/4 md:left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] text-center  max-sm:ml-28 sm:ml-8  max-sm:-mt-10 sm:-mt-4">
          <h1 className="text-white font-extrabold text-[clamp(4rem,7vw,7rem)] leading-tight
          max-sm:text-2xl sm:text-2xl md:text-5xl lg:text-5xl max-xl:text-7xl  
          ">
            {slide.title}
          </h1>
          <p className="text-white mt-4">{slide.description}</p>
        </div>
      </div>
    ))}
  
    {/* Image placed at the bottom */}
    <img
      src="/grad2.png"
      alt="Gradient"
      className="absolute bottom-0 left-0 w-full z-10 "
    />
  </section>
  
  );
};

export default VideoSlider;
