/* eslint-disable react/prop-types */

const AdventureCart = ({item}) => {
  return (
    <div className="flex flex-col items-center border-2 w-44 h-44 rounded-2xl"> <img
    src={item.image}
    alt="Adventure"
    className="h-16 mt-4 rounded-2xl"
  />
  <p className="text-lg font-semibold">{item.title}</p>
  <p className="text-sm">{item.destination}</p></div>
  )
}

export default AdventureCart