import { BookingSection } from "../../Components/Home/Booking/BookingSection";
import Faq from "../../Components/Home/Faq/Faq";
import PopularSpots from "../../Components/Home/PopularSpots/PopularSpots";
import Travel from "../../Components/Home/Travel/Travel";
import Traveller from "../../Components/Home/Traveller/Traveller";
import VideoSlider from "../../Components/Home/VideoSlider";
import Footer from "../../Sharred/Footer/Footer";


const Home = () => {

   

    return (
     <div>
         <VideoSlider/>
         <PopularSpots/>
         <div className="mt-44">
         <BookingSection/>
         </div>
         <Faq/>
         {/* <Travel/> */}
         <Traveller/>
         <div className="mt-20">
         <Footer/>
         </div>
     </div>
    )
}

export default Home;
