import { BookingSection } from "../../Components/Home/Booking/BookingSection";
import PopularSpots from "../../Components/Home/PopularSpots/PopularSpots";
import VideoSlider from "../../Components/Home/VideoSlider";


const Home = () => {

   

    return (
     <div>
         <VideoSlider/>
         <PopularSpots/>
         <div className="mt-44">
         <BookingSection/>
         </div>
     </div>
    )
}

export default Home;
