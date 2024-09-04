/* eslint-disable react/prop-types */


const PopularTab = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="flex justify-center border-b-2 border-gray-300">
    {['tokyo','kyoto', 'osaka', ].map((tab) => (
      <li key={tab} className="mx-4">
        <button
          onClick={() => setActiveTab(tab)}
          className={`font-bold pb-2 ${
            activeTab === tab ? 'text-red-600 border-b-4 border-red-600' : 'text-black'
          }`}
        >
          {tab === 'kyoto' ? '京都 KYOTO' : tab === 'osaka' ? '大阪 OSAKA' : '東京 TOKYO'}
        </button>
      </li>
    ))}
  </ul>
  )
}

export default PopularTab