import { useState } from "react";
import PopularTab from "./PopularTab";
import PopularPlace from "./PopularPlace";


/* eslint-disable react/no-unescaped-entities */
const PopularSpots = () => {
    const tokyoSpots = [
        {
          image: '/tokyo tower.jpg',
          title: 'Meiji Shrine',
          description: 'Shrine dedicated to the deified spirits of Emperor Meiji and Empress Shoken',
          number: '01',
        },
        {
          image: '/tokyo sky tree.jpg',
          title: 'Shibuya City',
          description: 'Center for youth fashion, culture, entertainment and fashion trends',
          number: '02',
        },
        {
          image: '/fuzi mountain.jpg',
          title: 'Illuminated tower',
          description: '180 lights that make up the typical light-up that illuminates Tokyo Tower',
          number: '03',
        },
      ];
      
      const osakaSpots = [
        {
          image: '/public/Hushimi.jpg',
          title: 'Tsutenkaku Tower',
          description: 'Representation of Naniwa with the Osaka version of the Eiffel Tower',
          number: '01',
        },
        {
          image: '/public/kinkakuzi.jpg',
          title: 'Osaka Castle',
          description: 'Impressively well-built stone wall, astonishing in its sheer magnitude',
          number: '02',
        },
        {
          image: '/public/osaka.jpg',
          title: 'Super Nintendo World',
          description: 'Team up with pals to combat rivals and grow stronger',
          number: '03',
        },
      ];
      
      const kyotoSpots = [
        {
          image: '/public/nara park.jpg',
          title: 'Fushimi Inari Shrine',
          description: 'Inari\'s Head Temple that can be found in the Kyoto Prefecture.',
          number: '01',
        },
        {
          image: '/public/kinkakuzi.jpg',
          title: 'Katsura Imperial Villa',
          description: 'Imperial home with accompanying gardens and outbuildings.',
          number: '02',
        },
        {
          image: '/public/osaka.jpg',
          title: 'Aoi Matsuri',
          description: 'One of the three most significant festivals in Kyoto',
          number: '03',
        },
      ];
      const [activeTab, setActiveTab] = useState('tokyo');

      const spots = {
        tokyo: tokyoSpots,
        osaka: osakaSpots,
        kyoto: kyotoSpots,
      };
  return (
    <div className="mt-16">
     
      <div
       
        className="text-center mb-6 text-[#212121]"
      >
        <p className="text-xl">
          We've selected some popular tourist spots for you.
        </p>
        <h2 className=" text-6xl font-bold my-2">POPULAR SPOTS</h2>
      </div>

      <div className="container mx-auto px-6 py-12">
    
      <PopularTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <PopularPlace id={activeTab} spots={spots[activeTab]} />
    </div>
      
    </div>
  );
};

export default PopularSpots;
