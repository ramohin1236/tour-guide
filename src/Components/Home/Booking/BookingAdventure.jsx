import adventure from '/public/adventure/adventure.png'
import trekking from '/public/adventure/trekking.png'
import campfire from '/public/adventure/campfire.png'
import offroad from '/public/adventure/offroad.png'
import camping from '/public/adventure/camping.png'
import exploring from '/public/adventure/exploring.png'
import AdventureCart from './AdventureCart'
const BookingAdventure = () => {
  const AdventureItems = [
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
    <section className="px-[100px] py-20 bg-black relative overflow-hidden ">
      <div className="relative z-10 container mx-auto">
        <h2 className="text-xl md:text-5xl lg:text-5xl font-bold mb-10 text-center text-white">ADVENTURE AND ACTIVITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {AdventureItems.map((item, index) => (
            <AdventureCart key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingAdventure