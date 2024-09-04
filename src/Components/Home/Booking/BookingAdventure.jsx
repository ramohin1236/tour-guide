import adventure from '/public/adventure/adventure.png'
import trekking from '/public/adventure/trekking.png'
import campfire from '/public/adventure/campfire.png'
import offroad from '/public/adventure/offroad.png'
import camping from '/public/adventure/camping.png'
import exploring from '/public/adventure/exploring.png'
import AdventureCart from './AdventureCart'
const BookingAdventure = () => {
    const AdventureItems =[
        {
           image: adventure,
           title: "Adventure",
           destination: "12 Destination"
        },
        {
           image: trekking,
           title: "Trekking",
           destination: "15 Destination"
        },
        {
           image: campfire,
           title: "Camp Fire",
           destination: "17 Destination"
        },
        {
           image: offroad,
           title: "Off Road",
           destination: "16 Destination"
        },
        {
           image: camping,
           title: "Camping",
           destination: "12 Destination"
        },
        {
           image: exploring,
           title: "Exploring",
           destination: "20 Destination"
        },
    ]
  return (
    <section className="py-16 md:h-[600px] bg-black text-white text-center relative overflow-hidden ">
    <div className="absolute inset-0 z-0 md:-mt-96">
      <img 
        src="/public/grad2.png" 
        alt="Adventure Background" 
        className="w-full h-full object-cover " 
      />
    </div>
    <div className="relative z-10 container mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">ADVENTURE AND ACTIVITY</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {AdventureItems.map((item, index) => (
          <AdventureCart key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default BookingAdventure