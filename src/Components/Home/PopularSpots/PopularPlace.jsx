import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { getAllLocations } from "../../../common/api/locationApi";
import toast from "react-hot-toast";
  
const PopularPlace = ({ id }) => {
 
    const [location, setLocation] = useState([]);
   
    const [, setLoading]= useState(true)
  
    useEffect(() => {
      
        const fetchLocation = async () => {
          try {
            const data = await getAllLocations();
          
            setLocation(data.result);
            setLoading(false);
          } catch (error) {
           toast.error(error.message)
          } finally {
            setLoading(false);
          }
        };
    
       
        fetchLocation();
      }, []); 

  return (
    <div
      id={id}
      className="flex flex-wrap flex-col md:flex-row gap-5 justify-center mx-auto max-w-screen-xl"
    >
     {
        location?.filter((loc)=>loc?.destination_id === id )?.map((loc)=><PopularCard key={loc?.location_id}
         loc={loc}
        />)
     }
    </div>
  );
};

export default PopularPlace;
