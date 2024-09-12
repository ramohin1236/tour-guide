import { useState } from 'react';

/* eslint-disable react/prop-types */
const UserPagination = ({ usersPerPage, totalUsers, paginate }) => {
  const [currentRange, setCurrentRange] = useState(1);
  const [activePage, setActivePage] = useState(1); // Active page state
  const pageNumbers = [];
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate range
  const pagesToShow = 3;
  const startPage = (currentRange - 1) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const handleNext = () => {
    if (currentRange * pagesToShow < totalPages) {
      setCurrentRange(currentRange + 1);
    }
  };

  const handlePrev = () => {
    if (currentRange > 1) {
      setCurrentRange(currentRange - 1);
    }
  };

  const handlePageClick = (number) => {
    setActivePage(number); // Set active page
    paginate(number);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentRange === 1}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        Prev
      </button>

      <ul className="flex space-x-4">
        {startPage > 1 && (
          <>
            <li
              className="cursor-pointer text-base font-bold px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => handlePageClick(1)}
            >
              1
            </li>
            {startPage > 2 && <span className="px-4 py-2">...</span>}
          </>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map(number => (
          <li
            key={number}
            className={`cursor-pointer text-base font-bold px-4 py-2 rounded-lg ${
              number === activePage ? 'bg-green-500 text-white' : 'bg-gray-200'
            } hover:bg-gray-300`}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </li>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-4 py-2">...</span>}
            <li
              className="cursor-pointer text-base font-bold px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => handlePageClick(totalPages)}
            >
              {totalPages}
            </li>
          </>
        )}
      </ul>

      <button
        onClick={handleNext}
        disabled={currentRange * pagesToShow >= totalPages}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default UserPagination;
