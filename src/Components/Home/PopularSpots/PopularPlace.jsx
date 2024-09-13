/* eslint-disable react/prop-types */

import PopularCard from "./PopularCard";

const PopularPlace = ({ id, spots }) => {
  console.log(spots);
  return (
    <div
      id={id}
      className="flex flex-wrap flex-col md:flex-row gap-5 justify-center mx-auto max-w-screen-xl"
    >
      {spots.map((spot, index) => (
        <PopularCard
          key={index}
          image={spot.image}
          title={spot.title}
          description={spot.description}
          number={spot.number}
        />
      ))}
    </div>
  );
};

export default PopularPlace;
