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
            image: '/Hushimi.jpg',
            title: 'Tsutenkaku Tower',
            description: 'Representation of Naniwa with the Osaka version of the Eiffel Tower',
            number: '01',
        },
        {
            image: '/kinkakuzi.jpg',
            title: 'Osaka Castle',
            description: 'Impressively well-built stone wall, astonishing in its sheer magnitude',
            number: '02',
        },
        {
            image: '/osaka.jpg',
            title: 'Super Nintendo World',
            description: 'Team up with pals to combat rivals and grow stronger',
            number: '03',
        },
    ];

    const kyotoSpots = [
        {
            image: '/nara park.jpg',
            title: 'Fushimi Inari Shrine',
            description: 'Inari\'s Head Temple that can be found in the Kyoto Prefecture.',
            number: '01',
        },
        {
            image: '/kinkakuzi.jpg',
            title: 'Katsura Imperial Villa',
            description: 'Imperial home with accompanying gardens and outbuildings.',
            number: '02',
        },
        {
            image: '/osaka.jpg',
            title: 'Aoi Matsuri',
            description: 'One of the three most significant festivals in Kyoto',
            number: '03',
        },
    ];

    const naraSpots = [
        {
            image: '/public/narita airport1.jpg',
            title: 'Narita Temple',
            description: 'A historic temple near Narita Airport.',
            number: '01',
        },
        {
            image: '/public/narita airport2.jpg',
            title: 'Narita Park',
            description: 'A beautiful park to relax before a flight.',
            number: '02',
        },
        {
            image: '/public/narita airport3.jpg',
            title: 'Narita ',
            description: 'A place to visitors for traditional goods.',
            number: '03',
        },
    ];

    const supporoSpots = [
        {
            image: '/public/haneda1.jpg',
            title: 'Haneda Airport',
            description: 'Haneda Airport with a view of Tokyo.',
            number: '01',
        },
        {
            image: '/public/haneda1.jpg',
            title: 'Haneda Museum',
            description: 'A museum showcasing the history of aviation.',
            number: '02',
        },
        {
            image: '/public/haneda1.jpg',
            title: 'Haneda Shopping Mall',
            description: 'A large shopping area within the airport.',
            number: '03',
        },
    ];

    const [activeTab, setActiveTab] = useState('tokyo');

    const spots = {
        tokyo: tokyoSpots,
        osaka: osakaSpots,
        kyoto: kyotoSpots,
        nara: naraSpots,
        supporo: supporoSpots,
    };

    return (
        <div>
            <div className="pt-32 text-center mb-5 text-[#212121]">
                <h1 className="text-5xl font-bold mb-4 text-[#A04747]">
                    OUR DESTINATION
                </h1>
                <p className="text-xl text-black">
                    Top Must-Visit Destinations in Japan: Carefully Handpicked for Your Unforgettable Travel Experience.
                </p>

            </div>

            <div className="mx-auto px-6 py-12">
                <PopularTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <PopularPlace id={activeTab} spots={spots[activeTab]} />
            </div>
        </div>
    );
};

export default PopularSpots;
