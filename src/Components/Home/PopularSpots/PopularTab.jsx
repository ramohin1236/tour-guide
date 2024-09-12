/* eslint-disable react/prop-types */


const PopularTab = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="flex justify-center mb-5">
      {['tokyo', 'kyoto', 'osaka', 'nara', 'supporo']?.map((tab) => (
        <li key={tab} className="mx-4">
          <button
            onClick={() => setActiveTab(tab)}
            className={`font-bold pb-2 ${activeTab === tab ? 'text-red-600 border-b-4 border-red-600' : 'text-black'
              }`}
          >
            {tab === 'kyoto'
              ? 'KYOTO'
              : tab === 'osaka'
                ? 'OSAKA'
                : tab === 'nara'
                  ? 'NARA'
                  : tab === 'supporo'
                    ? 'SUPPORO'
                    : 'TOKYO'}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default PopularTab