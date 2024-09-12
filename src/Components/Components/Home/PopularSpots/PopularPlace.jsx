/* eslint-disable react/prop-types */

import PopularCard from './PopularCard'

const PopularPlace = ({ id, spots }) => {
    console.log(spots);
  return (
    <div id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
  )
}

export default PopularPlace