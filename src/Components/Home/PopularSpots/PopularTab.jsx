/* eslint-disable react/prop-types */


const PopularTab = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="flex justify-center border-b-2 border-gray-300">
      {['tokyo', 'kyoto', 'osaka', 'narita', 'haneda'].map((tab) => (
        <li key={tab} className="mx-4">
          <button
            onClick={() => setActiveTab(tab)}
            className={`font-bold pb-2 ${
              activeTab === tab ? 'text-red-600 border-b-4 border-red-600' : 'text-black'
            }`}
          >
            {tab === 'kyoto'
              ? 'KYOTO'
              : tab === 'osaka'
              ? 'OSAKA'
              : tab === 'tokyo'
              ? 'TOKYO'
              : tab === 'narita'
              ? 'NARITA AIRPORT'
              : 'HANEDA AIRPORT'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default PopularTab